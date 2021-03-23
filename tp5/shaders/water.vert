attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D uSampler2;
uniform float timeFactor;
uniform float normScale;

varying vec2 vTextureCoord;

void main() {
    vec2 offset = vec2(0.005*timeFactor, 0.005*timeFactor);

    vec4 filter = texture2D(uSampler2, mod((vec2(0.0,0.1)+aTextureCoord + offset) / 2.0, vec2(1.0, 1.0)));
    vec3 newPosition = aVertexPosition;

    newPosition += 0.005*normScale*aVertexNormal*vec3(0.0, 0.0, filter.r);
	gl_Position = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);

	vTextureCoord = mod((vec2(0.0,0.1)+aTextureCoord + offset) / 2.0, vec2(1.0, 1.0));
}

