precision mediump float;
//vec3 verdejpupper(){return vec3(0.0,1.0,0.8);}

// we need the sketch resolution to perform some calculations
uniform vec2 resolution ;
uniform float time ;
uniform vec2 mouse ;
uniform sampler2D feedback ;



varying vec2 vTexCoord ;

#define iTime time
#define iResolution resolution

#define PI 3.14159265359
#define TWO_PI 6.28318530718

#define OCTAVES 8
#define pi 3.14159265359

uniform float r1 ;
uniform float g1 ;
uniform float b1 ;

uniform float r2 ;
uniform float g2 ;
uniform float b2 ;

float sm(float v1,float v2,float val){return smoothstep(v1,v2,val);}


mat2 scale2(vec2 _scale){
    mat2 e = mat2(_scale.x,0.0,
                0.0,_scale.y); 
    return e;
}

mat2 rotate2d2(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}


// Some useful functions
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }




float mapr(float _value,float _low2,float _high2) {
	float val = _low2 + (_high2 - _low2) * (_value - 0.) / (1.0 - 0.);
    //float val = 0.1;
	return val;
}
float snoise2(vec2 v) {

    // Precompute values for skewed triangular grid
    const vec4 C = vec4(0.211324865405187,
                        // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,
                        // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,
                        // -1.0 + 2.0 * C.x
                        0.024390243902439);
                        // 1.0 / 41.0

    // First corner (x0)
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);

    // Other two corners (x1, x2)
    vec2 i1 = vec2(0.0);
    i1 = (x0.x > x0.y)? vec2(1.0, 0.0):vec2(0.0, 1.0);
    vec2 x1 = x0.xy + C.xx - i1;
    vec2 x2 = x0.xy + C.zz;

    // Do some permutations to avoid
    // truncation effects in permutation
    i = mod289(i);
    vec3 p = permute(
            permute( i.y + vec3(0.0, i1.y, 1.0))
                + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(
                        dot(x0,x0),
                        dot(x1,x1),
                        dot(x2,x2)
                        ), 0.0);

    m = m*m ;
    m = m*m ;

    // Gradients:
    //  41 pts uniformly over a line, mapped onto a diamond
    //  The ring size 17*17 = 289 is close to a multiple
    //      of 41 (41*7 = 287)

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    // Normalise gradients implicitly by scaling m
    // Approximation of: m *= inversesqrt(a0*a0 + h*h);
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0+h*h);

    // Compute final noise value at P
    vec3 g = vec3(0.0);
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * vec2(x1.x,x2.x) + h.yz * vec2(x1.y,x2.y);
    return 130.0 * dot(m, g);
}


float ridge2(float h, float offset) {
    h = abs(h);     // create creases
    h = offset - h; // invert so creases are at top
    h = h * h;      // sharpen creases
    return h;
}

#define OCTAVES 8
float ridgedMF2(vec2 p) {
    float lacunarity = 2.0;
    float gain = 0.5;
    float offset = 0.9;

    float sum = 0.0;
    float freq = 1.0, amp = 0.5;
    float prev = 1.0;
    for(int i=0; i < OCTAVES; i++) {
        float n = ridge2(snoise2(p*freq), offset);
        sum += n*amp;
        sum += n*amp*prev;  // scale by previous octave
        prev = n;
        freq *= lacunarity;
        amp *= gain;
    }
    return sum;
}

float rxr(vec2 uv){
    float e = 0.;
    e = ridgedMF2(vec2(ridgedMF2(vec2(uv.x,uv.y))));    
    return e;
}
float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.56222123);
}
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}
float noise (in vec2 st,float fase) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float fase2 = fase;
    // Four corners in 2D of a tile
    float a = sin(random(i)*fase2);
    float b =  sin(random(i + vec2(1.0, 0.0))*fase2);
    float c =  sin(random(i + vec2(0.0, 1.0))*fase2);
    float d =  sin(random(i + vec2(1.0, 1.0))*fase2);

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}
float fbm (in vec2 uv,in float _time) {
    // Initial values
    float value = 0.5;
    float amplitude = 0.5;
    float frequency = 0.;
    vec2 shift = vec2(100);
    mat2 rot2 = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    // Loop of octaves
    for (int i = 0; i < 16; i++) {
        value += amplitude * noise(uv,_time);
        uv = rot2 * uv * 2.0 + shift;
        amplitude *= .5;
    }
    return value;
}
float bcir(vec2 uv,float s,float bs,float bd){
    //BS = BORDER SIZE
    //Only border
    float fx = resolution.x/resolution.y;
    vec2 p = vec2(0.5*fx,0.5) -uv;
    float r = length(p);
    float e = 1.0-smoothstep(s+bs,s+bs+bd,r);
    e-=1.0-smoothstep(s*0.9,s*1.0,r);
    return e;
}
void main(void){   
    
     

     float freq = 10.;
    vec2 uv = gl_FragCoord.xy/resolution.xy;
         uv = vTexCoord;
    float e2 = fbm(uv*1000.2+fbm(uv*8.,100.),100.);
	float e3 = fbm(uv*800.2+fbm(uv*16.,100.),100.);
    float e = noise(uv*1500.,time+30.);
   
    vec3 c1= vec3(1.0);
    vec3 c2 = vec3(0.2);
    vec3 fin = mix(c1,c2,e);
    


    vec2 p = vec2(0.5) - vTexCoord;
    float r = length(p);

    float vig = smoothstep(0.53,0.65,r);

    vec3 f2 = vec3(1.-vig);

	f2 = vec3(e);
	 
	vec3 cf = mix(c1,c2,e3);
	cf = smoothstep(0.8,0.9,cf);
	gl_FragColor = vec4(cf*vig,e2*.05+e3*.01);
}


