precision mediump float;

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;
uniform sampler2D feedback;

varying vec2 vTexCoord;

#define pi 3.14159265359

// Fixed values replacing uniforms
float cnt = 0.6;           // Controls iteration count (mapped to 1-20)
float ite_scale = 0.3;     // Controls scale iteration (mapped to 1-10)
float speedrdm = 0.05;     // Random speed (mapped to 0-1)
float speedx = 0.4;        // X movement speed (mapped to -0.2 to 0.2)
float speedy = 0.5;        // Y movement speed (mapped to -0.2 to 0.2)
float speedrot = 0.5;      // Rotation speed (mapped to -0.01 to 0.01)
float sm1 = 0.45;          // Smoothstep low value
float sm2 = 0.55;          // Smoothstep high value
float fb_force = 0.0;      // Feedback force (mapped to 0-1)
float e_force = 0.05;      // Effect force
float hue1 = 0.0;          // Hue 1 (black)
float hue2 = 0.0;          // Hue 2 (white)

float mapr(float _value, float _low2, float _high2) {
    float val = _low2 + (_high2 - _low2) * (_value - 0.) / (1.0 - 0.);
    return val;
}

mat2 rotate2d(float _angle) {
    return mat2(cos(_angle), -sin(_angle),
                sin(_angle), cos(_angle));
}

mat2 scale(vec2 _scale) {
    return mat2(_scale.x, 0.0,
                0.0, _scale.y);
}

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random2(vec2 st, float seed) {
    return fract(sin(dot(st.xy + seed, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec3 hsb2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    rgb = rgb * rgb * (3.0 - 2.0 * rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    float fix = resolution.x / resolution.y;
    uv.x *= fix;
    vec2 puv = gl_FragCoord.xy;
    vec4 fb = texture2D(feedback, puv / resolution);

    vec3 dib = vec3(1.0);

    const int mcnt = 10;
    float mite_scale =0.001;
    float mspeedx = 0.5;
    float mspeedy = 0.0;
    float mspeedrot = 0.0;
    float mspeedrdm =0.000001;

    for (int i = 1; i < mcnt; i++) {
        float fase = float(i) * pi * 2. / float(mcnt);
        vec2 uv2 = uv;
        float indx = float(i) / float(mcnt);
        uv2.x += time * mspeedx;
        uv2.y += time * mspeedy;

        uv2 -= vec2(0.5);
        uv2 = rotate2d(mspeedrot * time) * uv2;
        uv2 += vec2(0.5);

        uv2 -= vec2(0.5);
        uv2 = scale(vec2(mite_scale * float(i))) * uv2;
        uv2 += vec2(0.5);

        float e = random2(vec2(uv2) * vec2(0.001,0.0005) * float(i),time* mspeedrdm + fase);
        vec3 col1 = vec3(0.00004);  // White with no saturation
        vec3 col2 = vec3(0.0);  // Black
        dib += vec3(e)*0.2 ;
    }

    dib /= (float(mcnt) + 1.);

    dib = smoothstep(0.15, 0.5, dib);

    float mfb_force = mapr(fb_force, 0.0, 1.0);

    vec3 fin = dib;

    gl_FragColor = vec4(fin, 1.0);
}
