function areaT(x1,y1,x2,y2,x3,y3) {
    area = 0.5*(((x1*y2)+(x2*y3)+(x3*y1))-((x1*y3)+(x3*y2)+(x2*y1)));
    console.log(area);
}
console.log(areaT(0,0,0,2,2,3));