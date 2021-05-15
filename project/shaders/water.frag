#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;
uniform float distortionScale;


void main(){
    vec4 filter = texture2D(uSampler2, vTextureCoord);
	vec2 timeOffset = 0.008*vec2(timeFactor, timeFactor);
	vec2 newCoords = mod((vTextureCoord + timeOffset) / 2.0, vec2(1.0, 1.0));

	vec2 distOffset = vec2(distortionScale * (filter.r - 0.5), distortionScale * (filter.g - 0.5));

	newCoords += distOffset;

	if(newCoords[0] > 1.0)
		newCoords[0] = 1.0;
	
	if(newCoords[0] < 0.0)
		newCoords[0] = 0.0;

	if(newCoords[1] > 1.0) 
		newCoords[1] = 1.0;

	if(newCoords[1] < 0.0)
		newCoords[1] = 0.0;

    gl_FragColor = texture2D(uSampler, newCoords);
}
