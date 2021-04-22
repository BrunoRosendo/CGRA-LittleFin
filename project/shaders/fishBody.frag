#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec3 vertexPosition;

uniform sampler2D uSampler;

void main() {
	if(vertexPosition.x < 0.2){
        gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
    else
        gl_FragColor = vec4(1.0,0.1,0.1, 1.0);
}
