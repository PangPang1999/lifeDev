package com.pang;

public class Dragger implements Draggable {

    @Override
    public void drag() {
        System.out.println("drag");
    }

    @Override
    public void drag(int x, int y) {

    }
}
