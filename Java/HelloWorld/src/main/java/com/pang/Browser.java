package com.pang;

public class Browser {
    private String x;

    public void navigate(String address) {
        String ip = findIpAdress(address);
        String html = sendHtttpRequest(ip);
        System.out.println(html);
    }

    // 使用private隐藏
    private String sendHtttpRequest(String ip) {
        return "<html></html>";
    }

    // 使用private隐藏
    private String findIpAdress(String address) {
        return "127.0.0.1";
    }

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }
}
