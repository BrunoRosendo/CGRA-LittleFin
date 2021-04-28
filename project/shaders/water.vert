attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform sampler2D uSampler2;
uniform float timeFactor;
uniform float distortionScale;

varying vec2 vTextureCoord;

void main(){
    vec4 filter = texture2D(uSampler2, aTextureCoord);
	vTextureCoord = aTextureCoord + vec2(distortionScale*(filter[0]-0.5),distortionScale*(filter[1]-0.5));
	if(vTextureCoord[0]>1.0){ 
		vTextureCoord[0] = 1.0;
	}
	if(vTextureCoord[0]<0.0) {
		vTextureCoord[0] = 0.0;
		}
	if(vTextureCoord[1]>1.0){ 
		vTextureCoord[1] = 1.0;
	}
	if(vTextureCoord[1]<0.0) {
		vTextureCoord[1] = 0.0;
	}

	vec2 offset = mod(aTextureCoord + vec2(0.000005*timeFactor, 0.000005*timeFactor), vec2(1.0, 1.0));
    filter = texture2D(uSampler2, offset);
    vec3 newPosition = aVertexPosition + 0.5*aVertexNormal*vec3(filter.b-0.9, filter.b-0.9, filter.b-0.9);

	vec4 vVertexPosition = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);
	gl_Position = vVertexPosition;
}