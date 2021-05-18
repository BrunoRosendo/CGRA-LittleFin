#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec4 vFinalColor;
varying vec3 vertexPosition;

uniform sampler2D uSampler;
uniform float bodyTextRatio;
uniform vec4 fishColor;

void main() {
	if(vertexPosition.x < bodyTextRatio)
        gl_FragColor = vFinalColor * texture2D(uSampler, vTextureCoord);

    else
        gl_FragColor = vFinalColor * fishColor;
}
