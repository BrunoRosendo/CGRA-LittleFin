#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main() {
	if (vTextureCoord.x > 0.2 && vTextureCoord.x < 0.8)
        gl_FragColor = texture2D(uSampler, vTextureCoord);
    else
        gl_FragColor = vec4(1.0,0.1,0.1, 1.0);
}
