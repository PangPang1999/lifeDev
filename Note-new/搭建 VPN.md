## 一、概述

搭建 VPN 通常需要两步：

1. 购买海外云服务器（VPS）
2. 在 VPS 上部署 VPN 服务

VPS（Virtual Private Server，虚拟专用服务器）是一种通过虚拟化技术从物理服务器划分出的独立服务器单元。每个 VPS 拥有独立的 IP 地址、操作系统（如 Ubuntu、CentOS）和管理员权限，便于用户自主配置和部署服务。

相较于商业 VPN（如 ExpressVPN，月费约 8–12 美元），自建 VPN 更具性价比。

## 二、选择服务提供商

推荐使用 AWS 的 LightSail 服务，原因如下：

| 服务平台      | 免费试用                   | 月费            | 流量限制   | 其他要求 |
| ------------- | -------------------------- | --------------- | ---------- | -------- |
| AWS EC2       | 注册后一年内免费（基础款） | 按量计费        | 每月 100GB | 配置复杂 |
| AWS LightSail | 注册后三个月免费           | 起步每月 5 美元 | 每月 1TB   | 配置简单 |

> ✅ 建议选择 LightSail，性价比高

注册 AWS 账号时：

- 需绑定银联信用卡或国际信用卡
- 可使用中国大陆手机号

## 三、创建实例并配置

1. 登录 AWS 管理控制台，搜索并进入 **LightSail** 服务，建议将其添加至收藏。

2. 创建实例时，选择离自己较近的地区，选择操作系统为 **Ubuntu**。

3. 保存系统自动生成的 SSH 密钥（PEM 文件），用于远程连接。

4. 分配静态 IP，并绑定到实例。注意：

    - 静态 IP 分配后，实例公网 IP 会发生变化。
    - 若删除、停止实例或更换静态 IP，请记得手动删除原静态 IP，否则可能产生额外费用。

5. 可通过命令测试连通性：

    ```sh
    ping <实例公网IP>
    ```

## 四、远程连接实例

> 工具推荐：Termius（跨平台 SSH 客户端）

在 Termius 中添加新主机配置：

- IP 地址：LightSail 实例的公网 IP
- 用户名：默认是 `ubuntu`
- 密钥：上传之前保存的 PEM 文件

连接成功后，可通过以下命令测试网络连接：

```sh
ping google.com
```

## 部署 VPN 服务（使用 x-ui）

1. 安装依赖

```sh
sudo apt update -y && sudo apt install -y curl && sudo apt install -y socat
```

2. 安装 x-ui 面板

```sh
curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh -o install.sh
sudo bash install.sh
```

3. 安装完成后，系统会输出如下信息，复制并保存

```sh
Username: QjnvZsTPoK
Password: jZVaVPtYJo
Port: 5553
WebBasePath: u3yAAIBGp2V6Yje
Access URL: http://35.78.150.243:5553/u3yAAIBGp2V6Yje
```

4. 登录管理面板，访问 Access URL，输入用户名和密码进行登录
5. 添加 Shadowsocks 节点
    1. 进入「Inbound」管理界面
    2. 新增节点，协议选择 Shadowsocks
    3. 配置端口、加密方式和密码等信息
6. 扫码添加节点

## Recovery

节点失效后

1. 更换静态 IP ，重启
2. 连接成功后，测试网络连接：

    ```sh
    ping google.com
    ```

3. 查看节点设置网址（若不存在或者密码遗失直接重新安装即可）

    ```sh
    sudo x-ui settings
    ```

## 常用命令备份

```sh
x-ui             # 显示管理菜单
x-ui start       # 启动服务
x-ui stop        # 停止服务
x-ui restart     # 重启服务
x-ui status      # 查看当前状态
x-ui settings    # 查看当前设置
x-ui enable      # 设置开机自启
x-ui disable     # 禁用开机自启
x-ui log         # 查看运行日志
x-ui banlog      # 查看 Fail2ban 封禁日志
x-ui update      # 更新 x-ui
x-ui uninstall   # 卸载 x-ui
```
