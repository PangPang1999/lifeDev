package com.pang;

public class TextBox extends UIControl {

    private String text = ""; // Field

    @Override
    public void render() {
        System.out.println("Render TextBox");
    }

    public void setText(String text) {
        this.text = text;
    }

    public void clear() {
        this.text = "";
    }

    @Override
    public String toString() {
        return "TextBox{" +
                "text='" + text + '\'' +
                '}';
    }
}