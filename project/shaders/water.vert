attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform sampler2D uSampler2;
uniform float timeFactor;
uniform float distortionScale;

varying vec2 vTextureCoord;
varying vec2 newCoords;
varying vec2 distOffset;


void main() {
	
    vec4 filter = texture2D(uSampler2, aTextureCoord);
	vec2 timeOffset = 0.008*vec2(timeFactor, timeFactor);
	vTextureCoord = mod((aTextureCoord + timeOffset) / 2.0, vec2(1.0, 1.0));

	vec2 distOffset = vec2(distortionScale * (filter.r - 0.5), distortionScale * (filter.g - 0.5));

	vTextureCoord += distOffset;

	if(vTextureCoord[0] > 1.0)
		vTextureCoord[0] = 1.0;
	
	if(vTextureCoord[0] < 0.0)
		vTextureCoord[0] = 0.0;

	if(vTextureCoord[1] > 1.0) 
		vTextureCoord[1] = 1.0;

	if(vTextureCoord[1] < 0.0)
		vTextureCoord[1] = 0.0;


	vec4 vVertexPosition = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
	gl_Position = vVertexPosition;
}