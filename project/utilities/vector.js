export function norm3d(vec3) {
    return Math.sqrt(ve3[0] ** 2 + vec3[1] ** 2 + vec3[2] ** 2);
}

export function rotate3dByAxis(vec3, angle, axis = 1) {
    x_axis, y_axis = -1, -1;
    if (axis == 0) {
        //sum of cosines
        cos, sin = vec3[2], vec[1];
    }
    else if (axis == 1) {
        cos, sin = vec3[0], vec[2];
    }
    else if (axis == 2) {
        cos, sin = vec3[0], vec[1];
    }
    if (x_axis == -1 || y_axis == -1) {
        return
    }
    cosine = vec3[x_axis]
    sin = vec3[y_axis]

    vec3[x_axis] = cosine * Math.cos(angle) - sin * Math.sin(angle);
    vec3[y_axis] = cosine * Math.sin(angle) + sin * Math.cos(angle);
    return vec3;
}