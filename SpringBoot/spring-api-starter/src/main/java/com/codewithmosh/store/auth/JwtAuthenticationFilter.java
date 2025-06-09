package com.codewithmosh.store.auth;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@Component
// 继承 Spring 的 OncePerRequestFilter，确保每个请求只执行一次
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    // 注入自定义的 JWT 工具服务，用于 token 校验与解析
    private final JwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // 1. 从请求头获取 Authorization 字段
        var authHeader = request.getHeader("Authorization");

        // 2. 如果请求头没有 Authorization，或格式不是 Bearer Token，则直接放行（代表匿名用户）
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // 3. 截取 JWT 部分（去除 Bearer 前缀）
        var token = authHeader.replace("Bearer ", "");

        // 4. 校验 token 是否有效（签名、过期等）
        var jwt = jwtService.parseToken(token);
        if (jwt == null || jwt.isExpired()) {
            // 如果无效，也直接放行，不设置用户身份
            filterChain.doFilter(request, response);
            return;
        }

        // 5. 从 token 中提取用户身份信息（如 email），创建认证对象
        var authentication = new UsernamePasswordAuthenticationToken(
                jwt.getUserId(),
                null,
                List.of(new SimpleGrantedAuthority("ROLE_" + jwt.getRole()))
        );
        // 6. 绑定请求的附加信息（如 IP、Session 等），样板代码
        authentication.setDetails(
                new WebAuthenticationDetailsSource().buildDetails(request)
        );

        // 7. 将认证信息写入 Spring Security 上下文，标记本次请求为已认证用户
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // 8. 放行请求，进入后续过滤器或控制器
        filterChain.doFilter(request, response);
    }
}
