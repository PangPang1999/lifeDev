package com.pang;

public class Main {
    public static void main(String[] args) {
        UIControl[] controls = {new UIControl(), new TextBox(), new CheckBox()};
        for (UIControl control : controls)
            control.render(); // 根据实际对象类型动态调用各自的 render 方法，避免IF判断
    }
}


