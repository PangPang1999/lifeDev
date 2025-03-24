package com.pang;

public class Main {
    public static void main(String[] args) {
        var control = new UIControl();
        var textBox = new TextBox();
        show(textBox);
    }

    private static void show(UIControl control) {
        TextBox textBox = (TextBox) control;
        System.out.println(control);// TextBox{text=''}
    }
}