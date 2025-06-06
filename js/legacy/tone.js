!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Tone = e() : t.Tone = e()
}("undefined" != typeof self ? self : this, function() {
    return (()=>{
        var s = {
            228: t=>{
                t.exports = function(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var s = 0, n = new Array(e); s < e; s++)
                        n[s] = t[s];
                    return n
                }
                ,
                t.exports.default = t.exports,
                t.exports.__esModule = !0
            }
            ,
            858: t=>{
                t.exports = function(t) {
                    if (Array.isArray(t))
                        return t
                }
                ,
                t.exports.default = t.exports,
                t.exports.__esModule = !0
            }
            ,
            575: t=>{
                t.exports = function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                ,
                t.exports.default = t.exports,
                t.exports.__esModule = !0
            }
            ,
            913: t=>{
                function n(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                    }
                }
                t.exports = function(t, e, s) {
                    return e && n(t.prototype, e),
                    s && n(t, s),
                    t
                }
                ,
                t.exports.default = t.exports,
                t.exports.__esModule = !0
            }
            ,
            884: t=>{
                t.exports = function(t, e) {
                    var s = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != s) {
                        var n, i, r = [], o = !0, a = !1;
                        try {
                            for (s = s.call(t); !(o = (n = s.next()).done) && (r.push(n.value),
                            !e || r.length !== e); o = !0)
                                ;
                        } catch (t) {
                            a = !0,
                            i = t
                        } finally {
                            try {
                                o || null == s.return || s.return()
                            } finally {
                                if (a)
                                    throw i
                            }
                        }
                        return r
                    }
                }
                ,
                t.exports.default = t.exports,
                t.exports.__esModule = !0
            }
            ,
            521: t=>{
                t.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                ,
                t.exports.default = t.exports,
                t.exports.__esModule = !0
            }
            ,
            38: (t,e,s)=>{
                var n = s(858)
                  , i = s(884)
                  , r = s(379)
                  , o = s(521);
                t.exports = function(t, e) {
                    return n(t) || i(t, e) || r(t, e) || o()
                }
                ,
                t.exports.default = t.exports,
                t.exports.__esModule = !0
            }
            ,
            379: (t,e,s)=>{
                var n = s(228);
                t.exports = function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return n(t, e);
                        var s = Object.prototype.toString.call(t).slice(8, -1);
                        return "Map" === (s = "Object" === s && t.constructor ? t.constructor.name : s) || "Set" === s ? Array.from(t) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? n(t, e) : void 0
                    }
                }
                ,
                t.exports.default = t.exports,
                t.exports.__esModule = !0
            }
            ,
            382: function(t, e, s) {
                !function(t, e, s, n) {
                    "use strict";
                    function i(t) {
                        return t && "object" == typeof t && "default"in t ? t : {
                            default: t
                        }
                    }
                    function o(t, e, s) {
                        return {
                            endTime: e,
                            insertTime: s,
                            type: "exponentialRampToValue",
                            value: t
                        }
                    }
                    function a(t, e, s) {
                        return {
                            endTime: e,
                            insertTime: s,
                            type: "linearRampToValue",
                            value: t
                        }
                    }
                    function h(t, e) {
                        return {
                            startTime: e,
                            type: "setValue",
                            value: t
                        }
                    }
                    function c(t, e, s) {
                        return {
                            duration: s,
                            startTime: e,
                            type: "setValueCurve",
                            values: t
                        }
                    }
                    function l(t, e, s) {
                        var n = s.startTime
                          , i = s.target
                          , s = s.timeConstant;
                        return i + (e - i) * Math.exp((n - t) / s)
                    }
                    function u(t) {
                        return "exponentialRampToValue" === t.type
                    }
                    function p(t) {
                        return "linearRampToValue" === t.type
                    }
                    function d(t) {
                        return u(t) || p(t)
                    }
                    function f(t) {
                        return "setValue" === t.type
                    }
                    function _(t) {
                        return "setValueCurve" === t.type
                    }
                    function m(t, e, s, n) {
                        var i = t[e];
                        return void 0 === i ? n : d(i) || f(i) ? i.value : _(i) ? i.values[i.values.length - 1] : l(s, m(t, e - 1, i.startTime, n), i)
                    }
                    function g(t, e, s, n, i) {
                        return void 0 === s ? [n.insertTime, i] : d(s) ? [s.endTime, s.value] : f(s) ? [s.startTime, s.value] : _(s) ? [s.startTime + s.duration, s.values[s.values.length - 1]] : [s.startTime, m(t, e - 1, s.startTime, i)]
                    }
                    function v(t) {
                        return "cancelAndHold" === t.type
                    }
                    function y(t) {
                        return "cancelScheduledValues" === t.type
                    }
                    function x(t) {
                        return v(t) || y(t) ? t.cancelTime : u(t) || p(t) ? t.endTime : t.startTime
                    }
                    function w(t, e, s, n) {
                        var i = n.endTime
                          , n = n.value;
                        return s === n ? n : 0 < s && 0 < n || s < 0 && n < 0 ? s * Math.pow(n / s, (t - e) / (i - e)) : 0
                    }
                    function b(t, e, s, n) {
                        return s + (t - e) / (n.endTime - e) * (n.value - s)
                    }
                    function T(t) {
                        return "setTarget" === t.type
                    }
                    var S = i(e)
                      , r = i(s)
                      , s = i(n)
                      , n = (n = Symbol.iterator,
                    s.default(k, [{
                        key: n,
                        value: function() {
                            return this._automationEvents[Symbol.iterator]()
                        }
                    }, {
                        key: "add",
                        value: function(e) {
                            var s = x(e);
                            if (v(e) || y(e)) {
                                var t = this._automationEvents.findIndex(function(t) {
                                    return y(e) && _(t) ? t.startTime + t.duration >= s : x(t) >= s
                                })
                                  , n = this._automationEvents[t];
                                if (-1 !== t && (this._automationEvents = this._automationEvents.slice(0, t)),
                                v(e)) {
                                    var i = this._automationEvents[this._automationEvents.length - 1];
                                    if (void 0 !== n && d(n)) {
                                        if (T(i))
                                            throw new Error("The internal list is malformed.");
                                        var t = _(i) ? i.startTime + i.duration : x(i)
                                          , r = _(i) ? i.values[i.values.length - 1] : i.value
                                          , r = (u(n) ? w : b)(s, t, r, n)
                                          , r = (u(n) ? o : a)(r, s, this._currenTime);
                                        this._automationEvents.push(r)
                                    }
                                    void 0 !== i && T(i) && this._automationEvents.push(h(this.getValue(s), s)),
                                    void 0 !== i && _(i) && i.startTime + i.duration > s && (this._automationEvents[this._automationEvents.length - 1] = c(new Float32Array([6, 7]), i.startTime, s - i.startTime))
                                }
                            } else {
                                r = this._automationEvents.findIndex(function(t) {
                                    return x(t) > s
                                }),
                                i = -1 === r ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[r - 1];
                                if (void 0 !== i && _(i) && x(i) + i.duration > s)
                                    return !1;
                                i = u(e) ? o(e.value, e.endTime, this._currenTime) : p(e) ? a(e.value, s, this._currenTime) : e;
                                if (-1 === r)
                                    this._automationEvents.push(i);
                                else {
                                    if (_(e) && s + e.duration > x(this._automationEvents[r]))
                                        return !1;
                                    this._automationEvents.splice(r, 0, i)
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "flush",
                        value: function(e) {
                            var t, s, n = this._automationEvents.findIndex(function(t) {
                                return x(t) > e
                            });
                            1 < n && (s = (t = this._automationEvents.slice(n - 1))[0],
                            T(s) && t.unshift(h(m(this._automationEvents, n - 2, s.startTime, this._defaultValue), s.startTime)),
                            this._automationEvents = t)
                        }
                    }, {
                        key: "getValue",
                        value: function(e) {
                            if (0 === this._automationEvents.length)
                                return this._defaultValue;
                            var t, s = this._automationEvents.findIndex(function(t) {
                                return x(t) > e
                            }), n = this._automationEvents[s], i = (-1 === s ? this._automationEvents.length : s) - 1, r = this._automationEvents[i];
                            if (void 0 !== r && T(r) && (void 0 === n || !d(n) || n.insertTime > e))
                                return l(e, m(this._automationEvents, i - 1, r.startTime, this._defaultValue), r);
                            if (void 0 !== r && f(r) && (void 0 === n || !d(n)))
                                return r.value;
                            if (void 0 !== r && _(r) && (void 0 === n || !d(n) || r.startTime + r.duration > e))
                                return e < r.startTime + r.duration ? (o = e,
                                t = (a = r).duration,
                                s = a.startTime,
                                a = a.values,
                                s = (o - s) / t * ((o = a).length - 1),
                                t = Math.floor(s),
                                a = Math.ceil(s),
                                t === a ? o[t] : (1 - (s - t)) * o[t] + (1 - (a - s)) * o[a]) : r.values[r.values.length - 1];
                            if (void 0 !== r && d(r) && (void 0 === n || !d(n)))
                                return r.value;
                            if (void 0 !== n && u(n)) {
                                var o = g(this._automationEvents, i, r, n, this._defaultValue)
                                  , a = S.default(o, 2)
                                  , o = a[0]
                                  , a = a[1];
                                return w(e, o, a, n)
                            }
                            if (void 0 !== n && p(n)) {
                                i = g(this._automationEvents, i, r, n, this._defaultValue),
                                r = S.default(i, 2),
                                i = r[0],
                                r = r[1];
                                return b(e, i, r, n)
                            }
                            return this._defaultValue
                        }
                    }]),
                    k);
                    function k(t) {
                        r.default(this, k),
                        this._automationEvents = [],
                        this._currenTime = 0,
                        this._defaultValue = t
                    }
                    t.AutomationEventList = n,
                    t.createCancelAndHoldAutomationEvent = function(t) {
                        return {
                            cancelTime: t,
                            type: "cancelAndHold"
                        }
                    }
                    ,
                    t.createCancelScheduledValuesAutomationEvent = function(t) {
                        return {
                            cancelTime: t,
                            type: "cancelScheduledValues"
                        }
                    }
                    ,
                    t.createExponentialRampToValueAutomationEvent = function(t, e) {
                        return {
                            endTime: e,
                            type: "exponentialRampToValue",
                            value: t
                        }
                    }
                    ,
                    t.createLinearRampToValueAutomationEvent = function(t, e) {
                        return {
                            endTime: e,
                            type: "linearRampToValue",
                            value: t
                        }
                    }
                    ,
                    t.createSetTargetAutomationEvent = function(t, e, s) {
                        return {
                            startTime: e,
                            target: t,
                            timeConstant: s,
                            type: "setTarget"
                        }
                    }
                    ,
                    t.createSetValueAutomationEvent = h,
                    t.createSetValueCurveAutomationEvent = c,
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }(e, s(38), s(575), s(913))
            }
        }
          , n = {};
        function km(t) {
            var e = n[t];
            if (void 0 !== e)
                return e.exports;
            e = n[t] = {
                exports: {}
            };
            return s[t].call(e.exports, e, e.exports, km),
            e.exports
        }
        km.d = (t,e)=>{
            for (var s in e)
                km.o(e, s) && !km.o(t, s) && Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: e[s]
                })
        }
        ,
        km.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
        km.r = t=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ;
        var Cm = {};
        return (()=>{
            "use strict";
            km.r(Cm),
            km.d(Cm, {
                AMOscillator: ()=>Xd,
                AMSynth: ()=>Af,
                Abs: ()=>uf,
                Add: ()=>ef,
                AmplitudeEnvelope: ()=>Sf,
                Analyser: ()=>Y_,
                AudioToGain: ()=>Qd,
                AutoFilter: ()=>p_,
                AutoPanner: ()=>f_,
                AutoWah: ()=>m_,
                BaseContext: ()=>Ip,
                BiquadFilter: ()=>Df,
                BitCrusher: ()=>v_,
                Buffer: ()=>bm,
                BufferSource: ()=>Sm,
                Buffers: ()=>Tm,
                Channel: ()=>nm,
                Chebyshev: ()=>x_,
                Chorus: ()=>k_,
                Clock: ()=>xd,
                Compressor: ()=>cm,
                Context: ()=>Vp,
                Convolver: ()=>_m,
                CrossFade: ()=>c_,
                DCMeter: ()=>K_,
                Delay: ()=>wd,
                Destination: ()=>gm,
                Distortion: ()=>C_,
                Draw: ()=>xm,
                DuoSynth: ()=>Rf,
                EQ3: ()=>fm,
                Emitter: ()=>Fp,
                Envelope: ()=>xf,
                FFT: ()=>J_,
                FMOscillator: ()=>Yd,
                FMSynth: ()=>qf,
                FatOscillator: ()=>Hd,
                FeedbackCombFilter: ()=>Bf,
                FeedbackDelay: ()=>D_,
                Filter: ()=>Of,
                Follower: ()=>__,
                Freeverb: ()=>q_,
                Frequency: ()=>function(t, e) {
                    return new ed(Up(),t,e)
                }
                ,
                FrequencyClass: ()=>ed,
                FrequencyEnvelope: ()=>Mf,
                FrequencyShifter: ()=>M_,
                Gain: ()=>pd,
                GainToAudio: ()=>pf,
                Gate: ()=>lm,
                GrainPlayer: ()=>lf,
                GreaterThan: ()=>mf,
                GreaterThanZero: ()=>_f,
                IntervalTimeline: ()=>Cd,
                JCReverb: ()=>N_,
                LFO: ()=>rf,
                Limiter: ()=>um,
                Listener: ()=>ym,
                Loop: ()=>$f,
                LowpassCombFilter: ()=>Gf,
                Master: ()=>vm,
                MembraneSynth: ()=>Vf,
                Merge: ()=>b_,
                MetalSynth: ()=>If,
                Meter: ()=>H_,
                MidSideCompressor: ()=>pm,
                MidSideMerge: ()=>U_,
                MidSideSplit: ()=>B_,
                Midi: ()=>function(t, e) {
                    return new Td(Up(),t,e)
                }
                ,
                MidiClass: ()=>Td,
                Mono: ()=>im,
                MonoSynth: ()=>Ef,
                MultibandCompressor: ()=>dm,
                MultibandSplit: ()=>rm,
                Multiply: ()=>Zd,
                Negate: ()=>df,
                Noise: ()=>Vd,
                NoiseSynth: ()=>Nf,
                Offline: ()=>function(n, i, r=2, o=Up().sampleRate) {
                    return up(this, void 0, void 0, function*() {
                        const t = Up()
                          , e = new zp(r,i,o);
                        Gp(e),
                        yield n(e);
                        var s = e.render();
                        Gp(t);
                        s = yield s;
                        return new Lp(s)
                    })
                }
                ,
                OfflineContext: ()=>zp,
                OmniOscillator: ()=>tf,
                OnePoleFilter: ()=>Uf,
                Oscillator: ()=>Bd,
                PWMOscillator: ()=>Jd,
                PanVol: ()=>sm,
                Panner: ()=>d_,
                Panner3D: ()=>am,
                Param: ()=>ad,
                Part: ()=>Hf,
                Pattern: ()=>a_,
                Phaser: ()=>z_,
                PingPongDelay: ()=>j_,
                PitchShift: ()=>L_,
                Player: ()=>hf,
                Players: ()=>cf,
                PluckSynth: ()=>Qf,
                PolySynth: ()=>Zf,
                Pow: ()=>gf,
                PulseOscillator: ()=>$d,
                Recorder: ()=>hm,
                Reverb: ()=>W_,
                Sampler: ()=>Xf,
                Scale: ()=>sf,
                ScaleExp: ()=>vf,
                Sequence: ()=>h_,
                Signal: ()=>_d,
                Solo: ()=>em,
                Split: ()=>w_,
                StateTimeline: ()=>od,
                StereoWidener: ()=>Q_,
                Subtract: ()=>ff,
                SyncedSignal: ()=>yf,
                Synth: ()=>kf,
                Ticks: ()=>function(t, e) {
                    return new Sd(Up(),t,e)
                }
                ,
                TicksClass: ()=>Sd,
                Time: ()=>function(t, e) {
                    return new td(Up(),t,e)
                }
                ,
                TimeClass: ()=>td,
                Timeline: ()=>Op,
                ToneAudioBuffer: ()=>Lp,
                ToneAudioBuffers: ()=>bd,
                ToneAudioNode: ()=>hd,
                ToneBufferSource: ()=>Id,
                ToneEvent: ()=>Yf,
                ToneOscillatorNode: ()=>Wd,
                Transport: ()=>mm,
                TransportTime: ()=>function(t, e) {
                    return new id(Up(),t,e)
                }
                ,
                TransportTimeClass: ()=>id,
                Tremolo: ()=>Z_,
                Unit: ()=>e,
                UserMedia: ()=>Ld,
                Vibrato: ()=>X_,
                Volume: ()=>Dd,
                WaveShaper: ()=>Gd,
                Waveform: ()=>tm,
                Zero: ()=>nf,
                connect: ()=>ld,
                connectSeries: ()=>cd,
                connectSignal: ()=>md,
                context: ()=>wm,
                dbToGain: ()=>Qp,
                debug: ()=>t,
                defaultArg: ()=>xp,
                disconnect: ()=>ud,
                fanIn: ()=>function(...t) {
                    const e = t.pop();
                    Uu(e) && t.forEach(t=>ld(t, e))
                }
                ,
                ftom: ()=>$p,
                gainToDb: ()=>Zp,
                getContext: ()=>Up,
                getDestination: ()=>function() {
                    return Up().destination
                }
                ,
                getDraw: ()=>function() {
                    return Up().draw
                }
                ,
                getListener: ()=>function() {
                    return Up().listener
                }
                ,
                getTransport: ()=>function() {
                    return Up().transport
                }
                ,
                immediate: ()=>function() {
                    return Up().immediate()
                }
                ,
                intervalToFrequencyRatio: ()=>Xp,
                isArray: ()=>Yu,
                isBoolean: ()=>Xu,
                isDefined: ()=>Uu,
                isFunction: ()=>Gu,
                isNote: ()=>Hu,
                isNumber: ()=>Qu,
                isObject: ()=>Zu,
                isString: ()=>$u,
                isUndef: ()=>Bu,
                loaded: ()=>function() {
                    return Lp.loaded()
                }
                ,
                mtof: ()=>Jp,
                now: ()=>function() {
                    return Up().now()
                }
                ,
                optionsFromArguments: ()=>yp,
                setContext: ()=>Gp,
                start: ()=>function() {
                    return Bp.resume()
                }
                ,
                supported: ()=>Wu,
                version: ()=>s
            });
            var t = {};
            km.r(t),
            km.d(t, {
                assert: ()=>Ju,
                assertContextRunning: ()=>tp,
                assertRange: ()=>Ku,
                assertUsedScheduleTime: ()=>ip,
                enterScheduledCallback: ()=>np,
                log: ()=>op,
                setLogger: ()=>function(t) {
                    rp = t
                }
                ,
                warn: ()=>ap
            });
            var e = {};
            km.r(e);
            const s = "14.8.32";
            var n, i, a, o, r, h, c, l, u, p, d, f, _, m, g, v, y, x, w, b, T, S, k, C, A, D, O, M, E, R, q, F, I, V, N, P, j, L, z, W, B, U, G, Q, Z, X, Y, $, H, J, K, tt, et, st, nt = km(382);
            const it = new WeakSet
              , rt = new WeakMap
              , ot = new WeakMap
              , at = new WeakMap
              , ht = new WeakMap
              , ct = new WeakMap
              , lt = new WeakMap
              , ut = new WeakMap
              , pt = new WeakMap
              , dt = new WeakMap
              , ft = {
                construct: ()=>ft
            }
              , _t = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/
              , mt = (t,e)=>{
                const s = [];
                let n = t.replace(/^[\s]+/, "")
                  , i = n.match(_t);
                for (; null !== i; ) {
                    const t = i[1].slice(1, -1)
                      , r = i[0].replace(/([\s]+)?;?$/, "").replace(t, new URL(t,e).toString());
                    s.push(r),
                    n = n.slice(i[0].length).replace(/^[\s]+/, ""),
                    i = n.match(_t)
                }
                return [s.join(";"), n]
            }
              , gt = t=>{
                if (void 0 !== t && !Array.isArray(t))
                    throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")
            }
              , vt = t=>{
                if (!(t=>{
                    try {
                        new new Proxy(t,ft)
                    } catch {
                        return !1
                    }
                    return !0
                }
                )(t))
                    throw new TypeError("The given value for processorCtor should be a constructor.");
                if (null === t.prototype || "object" != typeof t.prototype)
                    throw new TypeError("The given value for processorCtor should have a prototype.")
            }
              , yt = (t,e)=>{
                e = t.get(e);
                if (void 0 === e)
                    throw new Error("A value with the given key could not be found.");
                return e
            }
              , xt = (t,e)=>{
                e = Array.from(t).filter(e);
                if (1 < e.length)
                    throw Error("More than one element was found.");
                if (0 === e.length)
                    throw Error("No element was found.");
                var [e] = e;
                return t.delete(e),
                e
            }
              , wt = (t,e,s,n)=>{
                var i = yt(t, e)
                  , r = xt(i, t=>t[0] === s && t[1] === n);
                return 0 === i.size && t.delete(e),
                r
            }
              , bt = t=>yt(lt, t)
              , Tt = t=>{
                if (it.has(t))
                    throw new Error("The AudioNode is already stored.");
                it.add(t),
                bt(t).forEach(t=>t(!0))
            }
              , St = t=>"port"in t
              , kt = t=>{
                if (!it.has(t))
                    throw new Error("The AudioNode is not stored.");
                it.delete(t),
                bt(t).forEach(t=>t(!1))
            }
              , Ct = (t,e)=>{
                !St(t) && e.every(t=>0 === t.size) && kt(t)
            }
              , At = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                fftSize: 2048,
                maxDecibels: -30,
                minDecibels: -100,
                smoothingTimeConstant: .8
            }
              , Dt = (t,e)=>t.context === e
              , Ot = t=>{
                try {
                    t.copyToChannel(new Float32Array(1), 0, -1)
                } catch {
                    return !1
                }
                return !0
            }
              , Mt = ()=>new DOMException("","IndexSizeError")
              , Et = e=>{
                var s;
                e.getChannelData = (s = e.getChannelData,
                t=>{
                    try {
                        return s.call(e, t)
                    } catch (t) {
                        if (12 === t.code)
                            throw Mt();
                        throw t
                    }
                }
                )
            }
              , Rt = {
                numberOfChannels: 1
            }
              , qt = -34028234663852886e22
              , Ft = -qt
              , It = t=>it.has(t)
              , Vt = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }
              , Nt = t=>yt(rt, t)
              , Pt = t=>yt(at, t)
              , jt = (e,s)=>{
                const t = Nt(e)["activeInputs"];
                t.forEach(t=>t.forEach(([t])=>{
                    s.includes(e) || jt(t, [...s, e])
                }
                ));
                var n, i, n = "playbackRate"in e ? [e.playbackRate] : St(e) ? Array.from(e.parameters.values()) : "frequency"in (i = e) && "gain"in i ? [e.Q, e.detune, e.frequency, e.gain] : "offset"in e ? [e.offset] : !("frequency"in (i = e)) && "gain"in i ? [e.gain] : "detune"in (n = e) && "frequency"in n ? [e.detune, e.frequency] : "pan"in e ? [e.pan] : [];
                for (const e of n) {
                    const t = Pt(e);
                    void 0 !== t && t.activeInputs.forEach(([t])=>jt(t, s))
                }
                It(e) && kt(e)
            }
              , Lt = t=>{
                jt(t.destination, [])
            }
              , zt = t=>"context"in t
              , Wt = t=>zt(t[0])
              , Bt = (t,e,s,n)=>{
                for (const e of t)
                    if (s(e)) {
                        if (n)
                            return !1;
                        throw Error("The set contains at least one similar element.")
                    }
                return t.add(e),
                !0
            }
              , Ut = (t,e,[s,n],i)=>{
                Bt(t, [e, s, n], t=>t[0] === e && t[1] === s, i)
            }
              , Gt = (t,[e,s,n],i)=>{
                var r = t.get(e);
                void 0 === r ? t.set(e, new Set([[s, n]])) : Bt(r, [s, n], t=>t[0] === s, i)
            }
              , Qt = t=>"inputs"in t
              , Zt = (t,e,s,n)=>{
                if (Qt(e)) {
                    var i = e.inputs[n];
                    return t.connect(i, s, 0),
                    [i, s, 0]
                }
                return t.connect(e, s, n),
                [e, s, n]
            }
              , Xt = (t,e,s)=>{
                for (const n of t)
                    if (n[0] === e && n[1] === s)
                        return t.delete(n),
                        n;
                return null
            }
              , Yt = (t,e)=>{
                if (!bt(t).delete(e))
                    throw new Error("Missing the expected event listener.")
            }
              , $t = (t,e,s)=>{
                var n = yt(t, e)
                  , i = xt(n, t=>t[0] === s);
                return 0 === n.size && t.delete(e),
                i
            }
              , Ht = (t,e,s,n)=>{
                Qt(e) ? t.disconnect(e.inputs[n], s, 0) : t.disconnect(e, s, n)
            }
              , Jt = t=>yt(ot, t)
              , Kt = t=>yt(ht, t)
              , te = t=>ut.has(t)
              , ee = t=>!it.has(t)
              , se = (r,o)=>new Promise(e=>{
                if (null !== o)
                    e(!0);
                else {
                    const o = r.createScriptProcessor(256, 1, 1)
                      , t = r.createGain()
                      , s = r.createBuffer(1, 2, 44100)
                      , n = s.getChannelData(0);
                    n[0] = 1,
                    n[1] = 1;
                    const i = r.createBufferSource();
                    i.buffer = s,
                    i.loop = !0,
                    i.connect(o).connect(r.destination),
                    i.connect(t),
                    i.disconnect(t),
                    o.onaudioprocess = t=>{
                        t = t.inputBuffer.getChannelData(0);
                        Array.prototype.some.call(t, t=>1 === t) ? e(!0) : e(!1),
                        i.stop(),
                        o.onaudioprocess = null,
                        i.disconnect(o),
                        o.disconnect(r.destination)
                    }
                    ,
                    i.start()
                }
            }
            )
              , ne = (t,s)=>{
                const e = new Map;
                for (const s of t)
                    for (const t of s) {
                        const s = e.get(t);
                        e.set(t, void 0 === s ? 1 : s + 1)
                    }
                e.forEach((t,e)=>s(e, t))
            }
              , ie = t=>"context"in t
              , re = (t,e,s,n,i)=>{
                var [r,o] = ((t,e,s,n)=>{
                    var {activeInputs: i, passiveInputs: e} = Nt(e)
                      , i = Xt(i[n], t, s);
                    return null === i ? [wt(e, t, s, n)[2], !1] : [i[2], !0]
                }
                )(t, s, n, i);
                if (null !== r && (Yt(t, r),
                !o || e || te(t) || Ht(Jt(t), Jt(s), n, i)),
                It(s)) {
                    const t = Nt(s)["activeInputs"];
                    Ct(s, t)
                }
            }
              , oe = (t,e,s,n)=>{
                var [i,r] = ((t,e,s)=>{
                    var {activeInputs: n, passiveInputs: e} = Pt(e)
                      , n = Xt(n, t, s);
                    return null === n ? [$t(e, t, s)[1], !1] : [n[2], !0]
                }
                )(t, s, n);
                null !== i && (Yt(t, i),
                !r || e || te(t) || Jt(t).disconnect(Kt(s), n))
            }
            ;
            class ae {
                constructor(t) {
                    this._map = new Map(t)
                }
                get size() {
                    return this._map.size
                }
                entries() {
                    return this._map.entries()
                }
                forEach(s, n=null) {
                    return this._map.forEach((t,e)=>s.call(n, t, e, this))
                }
                get(t) {
                    return this._map.get(t)
                }
                has(t) {
                    return this._map.has(t)
                }
                keys() {
                    return this._map.keys()
                }
                values() {
                    return this._map.values()
                }
            }
            const he = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 1,
                numberOfOutputs: 1,
                parameterData: {},
                processorOptions: {}
            };
            function ce(t, e, s, n, i) {
                if ("function" == typeof t.copyFromChannel)
                    0 === e[s].byteLength && (e[s] = new Float32Array(128)),
                    t.copyFromChannel(e[s], n, i);
                else {
                    const r = t.getChannelData(n);
                    if (0 === e[s].byteLength)
                        e[s] = r.slice(i, i + 128);
                    else {
                        const t = new Float32Array(r.buffer,i * Float32Array.BYTES_PER_ELEMENT,128);
                        e[s].set(t)
                    }
                }
            }
            const le = (t,e,s,n,i)=>{
                "function" == typeof t.copyToChannel ? 0 !== e[s].byteLength && t.copyToChannel(e[s], n, i) : 0 !== e[s].byteLength && t.getChannelData(n).set(e[s], i)
            }
              , ue = (e,s)=>{
                const n = [];
                for (let t = 0; t < e; t += 1) {
                    const e = []
                      , i = "number" == typeof s ? s : s[t];
                    for (let t = 0; t < i; t += 1)
                        e.push(new Float32Array(128));
                    n.push(e)
                }
                return n
            }
              , pe = {
                Q: 1,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 350,
                gain: 0,
                type: "lowpass"
            }
              , de = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 6
            }
              , fe = {
                channelCount: 6,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: 6
            }
              , _e = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                offset: 1
            }
              , me = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                disableNormalization: !1
            }
              , ge = s=>{
                const {port1: n, port2: i} = new MessageChannel;
                return new Promise(t=>{
                    const e = ()=>{
                        i.onmessage = null,
                        n.close(),
                        i.close(),
                        t()
                    }
                    ;
                    i.onmessage = ()=>e();
                    try {
                        n.postMessage(s, [s])
                    } finally {
                        e()
                    }
                }
                )
            }
              , ve = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                delayTime: 0,
                maxDelayTime: 1
            }
              , ye = (t,e,s)=>{
                s = e[s];
                if (void 0 === s)
                    throw t();
                return s
            }
              , xe = {
                attack: .003,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                knee: 30,
                ratio: 12,
                release: .25,
                threshold: -24
            }
              , we = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                gain: 1
            }
              , be = ()=>new DOMException("","InvalidStateError")
              , Te = ()=>new DOMException("","InvalidAccessError")
              , Se = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers"
            }
              , ke = (s,n,i,r,o,a,h,t,c,l,u)=>{
                var e = l.length;
                let p = t;
                for (let t = 0; t < e; t += 1) {
                    let e = i[0] * l[t];
                    for (let t = 1; t < o; t += 1) {
                        const r = p - t & c - 1;
                        e += i[t] * a[r],
                        e -= s[t] * h[r]
                    }
                    for (let t = o; t < r; t += 1)
                        e += i[t] * a[p - t & c - 1];
                    for (let t = o; t < n; t += 1)
                        e -= s[t] * h[p - t & c - 1];
                    a[p] = l[t],
                    h[p] = e,
                    p = p + 1 & c - 1,
                    u[t] = e
                }
                return p
            }
              , Ce = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers"
            }
              , Ae = t=>{
                var e = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
                try {
                    const s = t.decodeAudioData(e.buffer, ()=>{}
                    );
                    return void 0 !== s && (s.catch(()=>{}
                    ),
                    !0)
                } catch {}
                return !1
            }
              , De = (t,e,s)=>{
                e = e[s];
                void 0 !== e && e !== t[s] && (t[s] = e)
            }
              , Oe = (t,e)=>{
                De(t, e, "channelCount"),
                De(t, e, "channelCountMode"),
                De(t, e, "channelInterpretation")
            }
              , Me = t=>"function" == typeof t.getFloatTimeDomainData
              , Ee = (t,e,s)=>{
                e = e[s];
                void 0 !== e && e !== t[s].value && (t[s].value = e)
            }
              , Re = n=>{
                var i;
                n.start = (i = n.start,
                (t=0,e=0,s)=>{
                    if ("number" == typeof s && s < 0 || e < 0 || t < 0)
                        throw new RangeError("The parameters can't be negative.");
                    i.call(n, t, e, s)
                }
                )
            }
              , qe = e=>{
                var s;
                e.stop = (s = e.stop,
                (t=0)=>{
                    if (t < 0)
                        throw new RangeError("The parameter can't be negative.");
                    s.call(e, t)
                }
                )
            }
              , Fe = (t,e)=>null === t ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e)))))
              , Ie = (t,e)=>{
                t = t.createBiquadFilter();
                return Oe(t, e),
                Ee(t, e, "Q"),
                Ee(t, e, "detune"),
                Ee(t, e, "frequency"),
                Ee(t, e, "gain"),
                De(t, e, "type"),
                t
            }
              , Ve = (t,e)=>{
                t = t.createChannelSplitter(e.numberOfOutputs);
                return Oe(t, e),
                (t=>{
                    const e = t.numberOfOutputs;
                    Object.defineProperty(t, "channelCount", {
                        get: ()=>e,
                        set: t=>{
                            if (t !== e)
                                throw be()
                        }
                    }),
                    Object.defineProperty(t, "channelCountMode", {
                        get: ()=>"explicit",
                        set: t=>{
                            if ("explicit" !== t)
                                throw be()
                        }
                    }),
                    Object.defineProperty(t, "channelInterpretation", {
                        get: ()=>"discrete",
                        set: t=>{
                            if ("discrete" !== t)
                                throw be()
                        }
                    })
                }
                )(t),
                t
            }
              , Ne = (t,e)=>(t.connect = e.connect.bind(e),
            t.disconnect = e.disconnect.bind(e),
            t)
              , Pe = (t,e)=>{
                t = t.createDelay(e.maxDelayTime);
                return Oe(t, e),
                Ee(t, e, "delayTime"),
                t
            }
              , je = (t,e)=>{
                t = t.createGain();
                return Oe(t, e),
                Ee(t, e, "gain"),
                t
            }
            ;
            function Le(e, s) {
                let n = [0, 0];
                for (let t = e.length - 1; 0 <= t; --t)
                    n = [(i = n)[0] * s[0] - i[1] * s[1], i[0] * s[1] + i[1] * s[0]],
                    n[0] += e[t];
                var i;
                return n
            }
            const ze = (t,e,s,n)=>t.createScriptProcessor(e, s, n)
              , We = ()=>new DOMException("","NotSupportedError")
              , Be = {
                numberOfChannels: 1
            }
              , Ue = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 440,
                periodicWave: void 0,
                type: "sine"
            }
              , Ge = {
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                coneInnerAngle: 360,
                coneOuterAngle: 360,
                coneOuterGain: 0,
                distanceModel: "inverse",
                maxDistance: 1e4,
                orientationX: 1,
                orientationY: 0,
                orientationZ: 0,
                panningModel: "equalpower",
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                refDistance: 1,
                rolloffFactor: 1
            }
              , Qe = {
                disableNormalization: !1
            }
              , Ze = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                pan: 0
            }
              , Xe = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                curve: null,
                oversample: "none"
            }
              , Ye = (t,e,s)=>void 0 === t.copyFromChannel ? t.getChannelData(s)[0] : (t.copyFromChannel(e, s),
            e[0])
              , $e = t=>{
                if (null === t)
                    return !1;
                var e = t.length;
                return e % 2 != 0 ? 0 !== t[Math.floor(e / 2)] : t[e / 2 - 1] + t[e / 2] !== 0
            }
              , He = (t,e,s,n)=>{
                let i = t;
                for (; !i.hasOwnProperty(e); )
                    i = Object.getPrototypeOf(i);
                var {get: r, set: o} = Object.getOwnPropertyDescriptor(i, e);
                Object.defineProperty(t, e, {
                    get: s(r),
                    set: n(o)
                })
            }
              , Je = (e,s,n)=>{
                try {
                    e.setValueAtTime(s, n)
                } catch (t) {
                    if (9 !== t.code)
                        throw t;
                    Je(e, s, n + 1e-7)
                }
            }
              , Ke = t=>{
                const e = t.createOscillator();
                try {
                    e.start(-1)
                } catch (t) {
                    return t instanceof RangeError
                }
                return !1
            }
              , ts = t=>{
                const e = t.createBuffer(1, 1, 44100)
                  , s = t.createBufferSource();
                s.buffer = e,
                s.start(),
                s.stop();
                try {
                    return s.stop(),
                    !0
                } catch {
                    return !1
                }
            }
              , es = t=>{
                const e = t.createOscillator();
                try {
                    e.stop(-1)
                } catch (t) {
                    return t instanceof RangeError
                }
                return !1
            }
              , ss = ()=>{
                try {
                    new DOMException
                } catch {
                    return !1
                }
                return !0
            }
              , ns = ()=>new Promise(e=>{
                const t = new ArrayBuffer(0)
                  , {port1: s, port2: n} = new MessageChannel;
                s.onmessage = ({data: t})=>e(null !== t),
                n.postMessage(t, [t])
            }
            )
              , is = (n,t)=>{
                const i = t.createGain();
                n.connect(i);
                const e = (s = n.disconnect,
                ()=>{
                    s.call(n, i),
                    n.removeEventListener("ended", e)
                }
                );
                var s;
                n.addEventListener("ended", e),
                Ne(n, i),
                n.stop = (e=>{
                    let s = !1;
                    return (t=0)=>{
                        if (s)
                            try {
                                e.call(n, t)
                            } catch {
                                i.gain.setValueAtTime(0, t)
                            }
                        else
                            e.call(n, t),
                            s = !0
                    }
                }
                )(n.stop)
            }
              , rs = (s,n)=>t=>{
                var e = {
                    value: s
                };
                return Object.defineProperties(t, {
                    currentTarget: e,
                    target: e
                }),
                ("function" == typeof n ? n : n.handleEvent).call(s, t)
            }
              , os = (o = Bt,
            (t,e,[s,n,i],r)=>{
                o(t[n], [e, s, i], t=>t[0] === e && t[1] === s, r)
            }
            )
              , as = (a = Bt,
            (t,e,[s,n,i],r)=>{
                var o = t.get(s);
                void 0 === o ? t.set(s, new Set([[n, e, i]])) : a(o, [n, e, i], t=>t[0] === n && t[1] === e, r)
            }
            )
              , hs = (i = xt,
            (t,e,s,n)=>i(t[n], t=>t[0] === e && t[1] === s))
              , cs = new WeakMap
              , ls = (n = cs,
            t=>{
                return null !== (t = n.get(t)) && void 0 !== t ? t : 0
            }
            )
              , us = (r = new Map,
            h = new WeakMap,
            (e,t)=>{
                const s = h.get(e);
                if (void 0 !== s)
                    return s;
                var n = r.get(e);
                if (void 0 !== n)
                    return n;
                try {
                    const s = t();
                    return s instanceof Promise ? (r.set(e, s),
                    s.catch(()=>!1).then(t=>(r.delete(e),
                    h.set(e, t),
                    t))) : (h.set(e, s),
                    s)
                } catch {
                    return h.set(e, !1),
                    !1
                }
            }
            )
              , ps = "undefined" == typeof window ? null : window
              , ds = (m = us,
            g = Mt,
            (t,e)=>{
                const s = t.createAnalyser();
                if (Oe(s, e),
                !(e.maxDecibels > e.minDecibels))
                    throw g();
                return De(s, e, "fftSize"),
                De(s, e, "maxDecibels"),
                De(s, e, "minDecibels"),
                De(s, e, "smoothingTimeConstant"),
                m(Me, ()=>Me(s)) || ((i = s).getFloatTimeDomainData = e=>{
                    var s = new Uint8Array(e.length);
                    i.getByteTimeDomainData(s);
                    var n = Math.max(s.length, i.fftSize);
                    for (let t = 0; t < n; t += 1)
                        e[t] = .0078125 * (s[t] - 128);
                    return e
                }
                ),
                s;
                var i
            }
            )
              , fs = (_ = Nt,
            t=>{
                t = _(t);
                if (null === t.renderer)
                    throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
                return t.renderer
            }
            )
              , _s = (p = Nt,
            d = fs,
            f = te,
            async(o,a,h,t)=>{
                const e = p(o)
                  , c = [...t, o];
                await Promise.all(e.activeInputs.map((t,r)=>Array.from(t).filter(([t])=>!c.includes(t)).map(async([t,e])=>{
                    const s = d(t)
                      , n = await s.render(t, a, c)
                      , i = o.context.destination;
                    f(t) || o === i && f(o) || n.connect(h, e, r)
                }
                )).reduce((t,e)=>[...t, ...e], []))
            }
            )
              , ms = (c = ds,
            l = Jt,
            u = _s,
            ()=>{
                const i = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = i.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = l(t);
                            if (!Dt(n, e)) {
                                const l = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    fftSize: n.fftSize,
                                    maxDecibels: n.maxDecibels,
                                    minDecibels: n.minDecibels,
                                    smoothingTimeConstant: n.smoothingTimeConstant
                                };
                                n = c(e, l)
                            }
                            return i.set(e, n),
                            await u(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , gs = (v = ct,
            t=>{
                t = v.get(t);
                if (void 0 === t)
                    throw be();
                return t
            }
            )
              , vs = null === (Uc = ps) ? null : Uc.hasOwnProperty("OfflineAudioContext") ? Uc.OfflineAudioContext : Uc.hasOwnProperty("webkitOfflineAudioContext") ? Uc.webkitOfflineAudioContext : null
              , ys = (et = vs,
            t=>null !== et && t instanceof et)
              , xs = new WeakMap
              , ws = (tt = rs,
            class {
                constructor(t) {
                    this._nativeEventTarget = t,
                    this._listeners = new WeakMap
                }
                addEventListener(e, s, n) {
                    if (null !== s) {
                        let t = this._listeners.get(s);
                        void 0 === t && (t = tt(this, s),
                        "function" == typeof s && this._listeners.set(s, t)),
                        this._nativeEventTarget.addEventListener(e, t, n)
                    }
                }
                dispatchEvent(t) {
                    return this._nativeEventTarget.dispatchEvent(t)
                }
                removeEventListener(t, e, s) {
                    e = null === e ? void 0 : this._listeners.get(e);
                    this._nativeEventTarget.removeEventListener(t, void 0 === e ? null : e, s)
                }
            }
            )
              , bs = null === (Jc = ps) ? null : Jc.hasOwnProperty("AudioContext") ? Jc.AudioContext : Jc.hasOwnProperty("webkitAudioContext") ? Jc.webkitAudioContext : null
              , Ts = (K = bs,
            t=>null !== K && t instanceof K)
              , Ss = (J = ps,
            t=>null !== J && "function" == typeof J.AudioNode && t instanceof J.AudioNode)
              , ks = (H = ps,
            t=>null !== H && "function" == typeof H.AudioParam && t instanceof H.AudioParam)
              , Cs = null !== (Kc = ps) && Kc.hasOwnProperty("AudioWorkletNode") ? Kc.AudioWorkletNode : null
              , As = (st = rt,
            y = (t,e,s)=>{
                const n = [];
                for (let t = 0; t < s.numberOfInputs; t += 1)
                    n.push(new Set);
                st.set(t, {
                    activeInputs: n,
                    outputs: new Set,
                    passiveInputs: new WeakMap,
                    renderer: e
                })
            }
            ,
            x = ((l,u,p,d,f,_,m,g,v,y,x,w,b)=>{
                const T = new WeakMap;
                return (n,i,r,o,a)=>{
                    const {activeInputs: h, passiveInputs: c} = _(i)
                      , t = _(n)["outputs"]
                      , e = g(n)
                      , s = t=>{
                        var e = v(i)
                          , s = v(n);
                        if (t) {
                            const u = wt(c, n, r, o);
                            l(h, n, u, !1),
                            a || w(n) || p(s, e, r, o),
                            b(i) && Tt(i)
                        } else {
                            const l = d(h, n, r, o);
                            u(c, o, l, !1),
                            a || w(n) || f(s, e, r, o);
                            const p = m(i);
                            if (0 === p)
                                x(i) && Ct(i, h);
                            else {
                                const l = T.get(i);
                                void 0 !== l && clearTimeout(l),
                                T.set(i, setTimeout(()=>{
                                    x(i) && Ct(i, h)
                                }
                                , 1e3 * p))
                            }
                        }
                    }
                    ;
                    return !!y(t, [i, r, o], t=>t[0] === i && t[1] === r && t[2] === o, !0) && (e.add(s),
                    x(n) ? l(h, n, [r, o, s], !0) : u(c, o, [n, r, s], !0),
                    !0)
                }
            }
            )(os, as, Zt, hs, Ht, Nt, ls, bt, Jt, Bt, It, te, ee),
            w = us,
            G = ut,
            Q = Ht,
            Z = Nt,
            X = Jt,
            Y = Kt,
            $ = It,
            b = n=>(t,e)=>{
                var s = G.get(t);
                if (void 0 === s) {
                    if (!n && $(t)) {
                        const G = X(t)
                          , $ = Z(t)["outputs"];
                        for (const Z of $)
                            if (Wt(Z)) {
                                const Y = X(Z[0]);
                                Q(G, Y, Z[1], Z[2])
                            } else {
                                const Q = Y(Z[0]);
                                G.disconnect(Q, Z[1])
                            }
                    }
                    G.set(t, e)
                } else
                    G.set(t, s + e)
            }
            ,
            T = Mt,
            S = Te,
            k = We,
            N = Zt,
            P = ut,
            j = Nt,
            L = Jt,
            z = Kt,
            W = gs,
            B = It,
            U = ys,
            C = (t,e)=>{
                var s = P.get(t);
                if (void 0 === s)
                    throw new Error("Missing the expected cycle count.");
                var n = W(t.context)
                  , n = U(n);
                if (s === e) {
                    if (P.delete(t),
                    !n && B(t)) {
                        const P = L(t)
                          , W = j(t)["outputs"];
                        for (const j of W)
                            if (Wt(j)) {
                                const z = L(j[0]);
                                N(P, z, j[1], j[2])
                            } else {
                                const N = z(j[0]);
                                P.connect(N, j[1])
                            }
                    }
                } else
                    P.set(t, s - e)
            }
            ,
            F = xs,
            I = Nt,
            V = yt,
            A = function e(s, t) {
                const n = zt(t) ? t : V(F, t);
                if ("delayTime"in n)
                    return [];
                if (s[0] === n)
                    return [s];
                if (s.includes(n))
                    return [];
                var t = I(n)["outputs"];
                return Array.from(t).map(t=>e([...s, n], t[0])).reduce((t,e)=>t.concat(e), [])
            }
            ,
            Ds = ws,
            O = Ts,
            M = Ss,
            E = ks,
            q = Cs,
            class extends Ds {
                constructor(t, e, s, n) {
                    super(s),
                    this._context = t,
                    this._nativeAudioNode = s;
                    const i = D(t);
                    O(i) && !0 !== w(se, ()=>se(i, q)) && (i=>{
                        const r = new Map;
                        var o, a;
                        i.connect = (a = i.connect.bind(i),
                        (t,e=0,s=0)=>{
                            const n = ie(t) ? a(t, e, s) : a(t, e)
                              , i = r.get(t);
                            return void 0 === i ? r.set(t, [{
                                input: s,
                                output: e
                            }]) : i.every(t=>t.input !== s || t.output !== e) && i.push({
                                input: s,
                                output: e
                            }),
                            n
                        }
                        ),
                        i.disconnect = (o = i.disconnect,
                        (e,s,n)=>{
                            if (o.apply(i),
                            void 0 === e)
                                r.clear();
                            else if ("number" == typeof e)
                                for (const [i,o] of r) {
                                    const s = o.filter(t=>t.output !== e);
                                    0 === s.length ? r.delete(i) : r.set(i, s)
                                }
                            else if (r.has(e))
                                if (void 0 === s)
                                    r.delete(e);
                                else {
                                    const i = r.get(e);
                                    if (void 0 !== i) {
                                        const o = i.filter(t=>t.output !== s && (t.input !== n || void 0 === n));
                                        0 === o.length ? r.delete(e) : r.set(e, o)
                                    }
                                }
                            for (const [o,e] of r)
                                e.forEach(t=>{
                                    ie(o) ? i.connect(o, t.output, t.input) : i.connect(o, t.output)
                                }
                                )
                        }
                        )
                    }
                    )(s),
                    ot.set(this, s),
                    lt.set(this, new Set),
                    "closed" !== t.state && e && Tt(this),
                    y(this, n, s)
                }
                get channelCount() {
                    return this._nativeAudioNode.channelCount
                }
                set channelCount(t) {
                    this._nativeAudioNode.channelCount = t
                }
                get channelCountMode() {
                    return this._nativeAudioNode.channelCountMode
                }
                set channelCountMode(t) {
                    this._nativeAudioNode.channelCountMode = t
                }
                get channelInterpretation() {
                    return this._nativeAudioNode.channelInterpretation
                }
                set channelInterpretation(t) {
                    this._nativeAudioNode.channelInterpretation = t
                }
                get context() {
                    return this._context
                }
                get numberOfInputs() {
                    return this._nativeAudioNode.numberOfInputs
                }
                get numberOfOutputs() {
                    return this._nativeAudioNode.numberOfOutputs
                }
                connect(t, e=0, s=0) {
                    if (e < 0 || e >= this._nativeAudioNode.numberOfOutputs)
                        throw T();
                    var n = D(this._context)
                      , n = R(n);
                    if (M(t) || E(t))
                        throw S();
                    if (zt(t)) {
                        const T = Jt(t);
                        try {
                            const x = Zt(this._nativeAudioNode, T, e, s)
                              , b = ee(this);
                            (n || b) && this._nativeAudioNode.disconnect(...x),
                            "closed" !== this.context.state && !b && ee(t) && Tt(t)
                        } catch (t) {
                            if (12 === t.code)
                                throw S();
                            throw t
                        }
                        if (x(this, t, e, s, n)) {
                            const x = A([this], t);
                            ne(x, b(n))
                        }
                        return t
                    }
                    s = Kt(t);
                    if ("playbackRate" === s.name && 1024 === s.maxValue)
                        throw k();
                    try {
                        this._nativeAudioNode.connect(s, e),
                        (n || ee(this)) && this._nativeAudioNode.disconnect(s, e)
                    } catch (t) {
                        if (12 === t.code)
                            throw S();
                        throw t
                    }
                    if (((r,o,a,h)=>{
                        const {activeInputs: c, passiveInputs: l} = Pt(o)
                          , t = Nt(r)["outputs"]
                          , e = bt(r)
                          , s = t=>{
                            const e = Jt(r)
                              , s = Kt(o);
                            if (t) {
                                const o = $t(l, r, a);
                                Ut(c, r, o, !1),
                                h || te(r) || e.connect(s, a)
                            } else {
                                const o = (t = c,
                                n = r,
                                i = a,
                                xt(t, t=>t[0] === n && t[1] === i));
                                Gt(l, o, !1),
                                h || te(r) || e.disconnect(s, a)
                            }
                            var n, i
                        }
                        ;
                        return !!Bt(t, [o, a], t=>t[0] === o && t[1] === a, !0) && (e.add(s),
                        It(r) ? Ut(c, r, [a, s], !0) : Gt(l, [r, a, s], !0),
                        !0)
                    }
                    )(this, t, e, n)) {
                        const x = A([this], t);
                        ne(x, b(n))
                    }
                }
                disconnect(t, e, s) {
                    let n;
                    var i = D(this._context)
                      , i = R(i);
                    if (void 0 === t)
                        n = ((t,e)=>{
                            const s = Nt(t)
                              , n = [];
                            for (const i of s.outputs)
                                (Wt(i) ? re : oe)(t, e, ...i),
                                n.push(i[0]);
                            return s.outputs.clear(),
                            n
                        }
                        )(this, i);
                    else if ("number" == typeof t) {
                        if (t < 0 || t >= this.numberOfOutputs)
                            throw T();
                        n = ((t,e,s)=>{
                            const n = Nt(t)
                              , i = [];
                            for (const r of n.outputs)
                                r[1] === s && ((Wt(r) ? re : oe)(t, e, ...r),
                                i.push(r[0]),
                                n.outputs.delete(r));
                            return i
                        }
                        )(this, i, t)
                    } else {
                        if (void 0 !== e && (e < 0 || e >= this.numberOfOutputs))
                            throw T();
                        if (zt(t) && void 0 !== s && (s < 0 || s >= t.numberOfInputs))
                            throw T();
                        if (n = ((e,s,n,i,r)=>{
                            const o = Nt(e);
                            return Array.from(o.outputs).filter(t=>!(t[0] !== n || void 0 !== i && t[1] !== i || void 0 !== r && t[2] !== r)).map(t=>((Wt(t) ? re : oe)(e, s, ...t),
                            o.outputs.delete(t),
                            t[0]))
                        }
                        )(this, i, t, e, s),
                        0 === n.length)
                            throw S()
                    }
                    for (const t of n) {
                        const e = A([this], t);
                        ne(e, C)
                    }
                }
            }
            );
            var Ds, Os, Ms, Es, Rs, qs, Fs, Is, Vs, Ns, Ps, js, Ls, zs, Ws, Bs, Us, Gs, Qs, Zs, Xs, Ys, $s, Hs, Js, Ks, tn, en, sn, nn, rn, on, an, hn, cn, ln, un, pn, dn, fn, _n, mn, gn, vn, yn, xn, wn, bn, Tn, Sn, kn, Cn, An, Dn, On, Mn, En, Rn, qn, Fn, In, Vn, Nn, Pn, jn, Ln, zn, Wn, Bn, Un, Gn, Qn, Zn, Xn, Yn, $n, Hn, Jn, Kn, ti, ei, si, ni, ii, ri, oi, ai, hi, ci, li, ui, pi, di, fi, _i, mi, gi, vi, yi, xi, wi, bi, Ti, Si, ki, Ci, Ai, Di, Oi, Mi, Ei, Ri, qi, Fi, Ii, Vi, Ni, Pi, ji, Li, zi, Wi, Bi, Ui, Gi, Qi, Zi, Xi, Yi, $i, Hi, Ji, Ki, tr, er, sr, nr, ir, rr, or, ar, hr, cr, lr, ur, pr, dr, fr, _r, mr, gr, vr, yr, xr, wr, br, Tr, Sr, kr, Cr, Ar, Dr, Or, Mr, Er, Rr, qr, Fr, Ir, Vr, Nr, Pr, jr, Lr, zr, Wr, Br, Ur, Gr, Qr, Zr, Xr, Yr, $r, Hr, Jr, Kr, to, eo, so, no, io, ro, oo, ao, ho, co, lo, uo, po, fo, _o, mo, go, vo, yo, xo, wo, bo, To, So, ko, Co, Ao, Do, Oo, Mo, Eo, Ro, qo, Fo, Io, Vo, No, Po, jo, Lo, zo, Wo, Bo, Uo, Go, Qo, Zo, Xo, Yo, $o, Ho, Jo, Ko, ta, ea, sa, na, ia, ra, oa, aa, ha, ca, la, ua, pa, da, fa, _a, ma, ga, va, ya, xa, wa, ba, Ta, Sa, ka, Ca, Aa, Da, Oa, Ma, Ea, Ra, qa, Fa, Ia, Va, Na, Pa, ja, La, za, Wa, Ba, Ua, Ga, Qa, Za, Xa, Ya, $a, Ha, Ja, Ka, th, eh, sh, nh, ih, rh, oh, ah, hh, ch, lh, uh, ph, dh, fh, _h, mh, gh, vh, yh, xh, wh, bh, Th, Sh, kh, Ch, Ah, Dh, Oh, Mh, Eh, Rh, qh, Fh, Ih, Vh, Nh, Ph, jh, Lh, zh, Wh, Bh, Uh, Gh, Qh, Zh, Xh, Yh, $h, Hh, Jh, Kh, tc, ec, sc, nc, ic, rc, oc, ac, hc, cc, lc, uc, pc, dc, fc, _c, mc, gc, vc, yc, xc, wc, bc, Tc, Sc, kc, Cc, Ac, Dc, Oc, Mc, Ec, Rc, qc, Fc, Ic, Vc, Nc, Pc, jc, Lc, zc, Wc, Bc, Uc, Gc, Qc, Zc, Xc, Yc, $c, Hc, Jc = (Uc = As,
            Os = ms,
            Ms = Mt,
            Es = ds,
            Rs = D = gs,
            qs = R = ys,
            class extends Uc {
                constructor(t, e) {
                    var s = Rs(t)
                      , e = {
                        ...At,
                        ...e
                    }
                      , e = Es(s, e);
                    super(t, !1, e, qs(s) ? Os() : null),
                    this._nativeAnalyserNode = e
                }
                get fftSize() {
                    return this._nativeAnalyserNode.fftSize
                }
                set fftSize(t) {
                    this._nativeAnalyserNode.fftSize = t
                }
                get frequencyBinCount() {
                    return this._nativeAnalyserNode.frequencyBinCount
                }
                get maxDecibels() {
                    return this._nativeAnalyserNode.maxDecibels
                }
                set maxDecibels(t) {
                    var e = this._nativeAnalyserNode.maxDecibels;
                    if (!((this._nativeAnalyserNode.maxDecibels = t) > this._nativeAnalyserNode.minDecibels))
                        throw this._nativeAnalyserNode.maxDecibels = e,
                        Ms()
                }
                get minDecibels() {
                    return this._nativeAnalyserNode.minDecibels
                }
                set minDecibels(t) {
                    var e = this._nativeAnalyserNode.minDecibels;
                    if (this._nativeAnalyserNode.minDecibels = t,
                    !(this._nativeAnalyserNode.maxDecibels > t))
                        throw this._nativeAnalyserNode.minDecibels = e,
                        Ms()
                }
                get smoothingTimeConstant() {
                    return this._nativeAnalyserNode.smoothingTimeConstant
                }
                set smoothingTimeConstant(t) {
                    this._nativeAnalyserNode.smoothingTimeConstant = t
                }
                getByteFrequencyData(t) {
                    this._nativeAnalyserNode.getByteFrequencyData(t)
                }
                getByteTimeDomainData(t) {
                    this._nativeAnalyserNode.getByteTimeDomainData(t)
                }
                getFloatFrequencyData(t) {
                    this._nativeAnalyserNode.getFloatFrequencyData(t)
                }
                getFloatTimeDomainData(t) {
                    this._nativeAnalyserNode.getFloatTimeDomainData(t)
                }
            }
            ), Kc = new WeakSet, Uc = null !== (Ds = ps) && Ds.hasOwnProperty("AudioBuffer") ? Ds.AudioBuffer : null, Ds = (Fs = new Uint32Array(1),
            t=>(Fs[0] = t,
            Fs[0]));
            const tl = (wn = Mt,
            a=>{
                a.copyFromChannel = (e,t,s=0)=>{
                    var n = xn(s)
                      , t = xn(t);
                    if (t >= a.numberOfChannels)
                        throw wn();
                    var i = a.length
                      , r = a.getChannelData(t)
                      , o = e.length;
                    for (let t = n < 0 ? -n : 0; t + n < i && t < o; t += 1)
                        e[t] = r[t + n]
                }
                ,
                a.copyToChannel = (e,t,s=0)=>{
                    var n = xn(s)
                      , t = xn(t);
                    if (t >= a.numberOfChannels)
                        throw wn();
                    const i = a.length
                      , r = a.getChannelData(t)
                      , o = e.length;
                    for (let t = n < 0 ? -n : 0; t + n < i && t < o; t += 1)
                        r[t + n] = e[t]
                }
            }
            )
              , el = (yn = xn = Ds,
            n=>{
                var i, r;
                n.copyFromChannel = (r = n.copyFromChannel,
                (t,e,s=0)=>{
                    s = yn(s),
                    e = yn(e);
                    if (s < n.length)
                        return r.call(n, t, e, s)
                }
                ),
                n.copyToChannel = (i = n.copyToChannel,
                (t,e,s=0)=>{
                    s = yn(s),
                    e = yn(e);
                    if (s < n.length)
                        return i.call(n, t, e, s)
                }
                )
            }
            )
              , sl = ((i,r,o,a,h,c,l,u)=>{
                let p = null;
                return class e {
                    constructor(t) {
                        if (null === h)
                            throw new Error("Missing the native OfflineAudioContext constructor.");
                        var {length: e, numberOfChannels: s, sampleRate: t} = {
                            ...Rt,
                            ...t
                        };
                        null === p && (p = new h(1,1,44100));
                        const n = null !== a && r(c, c) ? new a({
                            length: e,
                            numberOfChannels: s,
                            sampleRate: t
                        }) : p.createBuffer(s, e, t);
                        if (0 === n.numberOfChannels)
                            throw o();
                        return "function" != typeof n.copyFromChannel ? (l(n),
                        Et(n)) : r(Ot, ()=>Ot(n)) || u(n),
                        i.add(n),
                        n
                    }
                    static[Symbol.hasInstance](t) {
                        return null !== t && "object" == typeof t && Object.getPrototypeOf(t) === e.prototype || i.has(t)
                    }
                }
            }
            )(Kc, us, We, Uc, vs, (vn = Uc,
            ()=>{
                if (null === vn)
                    return !1;
                try {
                    new vn({
                        length: 1,
                        sampleRate: 44100
                    })
                } catch {
                    return !1
                }
                return !0
            }
            ), tl, el)
              , nl = (gn = je,
            (t,e)=>{
                const s = gn(t, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                e.connect(s).connect(t.destination);
                const n = ()=>{
                    e.removeEventListener("ended", n),
                    e.disconnect(s),
                    s.disconnect()
                }
                ;
                e.addEventListener("ended", n)
            }
            )
              , il = (fn = fs,
            _n = Pt,
            mn = te,
            async(t,i,r,o)=>{
                t = _n(t);
                await Promise.all(Array.from(t.activeInputs).map(async([t,e])=>{
                    const s = fn(t)
                      , n = await s.render(t, i, o);
                    mn(t) || n.connect(r, e)
                }
                ))
            }
            )
              , rl = (dn = il,
            (t,e,s,n)=>dn(e, t, s, n))
              , ol = (en = nl,
            sn = us,
            nn = t=>{
                const e = t.createBufferSource();
                e.start();
                try {
                    e.start()
                } catch {
                    return !0
                }
                return !1
            }
            ,
            rn = t=>{
                const e = t.createBufferSource()
                  , s = t.createBuffer(1, 1, 44100);
                e.buffer = s;
                try {
                    e.start(0, 1)
                } catch {
                    return !1
                }
                return !0
            }
            ,
            on = t=>{
                const e = t.createBufferSource();
                e.start();
                try {
                    e.stop()
                } catch {
                    return !1
                }
                return !0
            }
            ,
            an = Ke,
            hn = ts,
            cn = es,
            pn = He,
            ln = (s,t)=>{
                const n = t.createBuffer(1, 1, 44100);
                null === s.buffer && (s.buffer = n),
                pn(s, "buffer", e=>()=>{
                    var t = e.call(s);
                    return t === n ? null : t
                }
                , e=>t=>e.call(s, null === t ? n : t))
            }
            ,
            un = is,
            (t,e)=>{
                var i, r, o, s = t.createBufferSource();
                return Oe(s, e),
                Ee(s, e, "playbackRate"),
                De(s, e, "buffer"),
                De(s, e, "loop"),
                De(s, e, "loopEnd"),
                De(s, e, "loopStart"),
                sn(nn, ()=>nn(t)) || ((o = s).start = (n=>{
                    let i = !1;
                    return (t=0,e=0,s)=>{
                        if (i)
                            throw be();
                        n.call(o, t, e, s),
                        i = !0
                    }
                }
                )(o.start)),
                sn(rn, ()=>rn(t)) || ((i = s).start = (r = i.start,
                (t=0,e=0,s)=>{
                    var n = i.buffer
                      , e = null === n ? e : Math.min(n.duration, e);
                    null !== n && e > n.duration - .5 / i.context.sampleRate ? r.call(i, t, 0, 0) : r.call(i, t, e, s)
                }
                )),
                sn(on, ()=>on(t)) || ln(s, t),
                sn(an, ()=>an(t)) || Re(s),
                sn(hn, ()=>hn(t)) || un(s, t),
                sn(cn, ()=>cn(t)) || qe(s),
                en(t, s),
                s
            }
            )
              , al = (tn = Pt,
            Js = t=>{
                t = tn(t);
                if (null === t.renderer)
                    throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
                return t.renderer
            }
            ,
            Ks = il,
            (t,e,s,n)=>(Js(e).replay(s),
            Ks(e, t, s, n)))
              , hl = (Zs = rl,
            Xs = ol,
            Ys = Jt,
            $s = al,
            Hs = _s,
            ()=>{
                const r = new WeakMap;
                let o = null
                  , a = null;
                return {
                    set start(t) {
                        o = t
                    },
                    set stop(t) {
                        a = t
                    },
                    render(t, e, s) {
                        var n = r.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = Ys(t);
                            var i = Dt(n, e);
                            if (!i) {
                                const Zs = {
                                    buffer: n.buffer,
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    loop: n.loop,
                                    loopEnd: n.loopEnd,
                                    loopStart: n.loopStart,
                                    playbackRate: n.playbackRate.value
                                };
                                n = Xs(e, Zs),
                                null !== o && n.start(...o),
                                null !== a && n.stop(a)
                            }
                            return r.set(e, n),
                            i ? await Zs(e, t.playbackRate, n.playbackRate, s) : await $s(e, t.playbackRate, n.playbackRate, s),
                            await Hs(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , cl = (bn = at,
            Is = (t,e)=>{
                bn.set(t, {
                    activeInputs: new Set,
                    passiveInputs: new WeakMap,
                    renderer: e
                })
            }
            ,
            Vs = xs,
            Ns = ht,
            Ps = nt.createCancelAndHoldAutomationEvent,
            js = nt.createCancelScheduledValuesAutomationEvent,
            Ls = nt.createExponentialRampToValueAutomationEvent,
            zs = nt.createLinearRampToValueAutomationEvent,
            Ws = nt.createSetTargetAutomationEvent,
            Bs = nt.createSetValueAutomationEvent,
            Us = nt.createSetValueCurveAutomationEvent,
            Gs = bs,
            Qs = Je,
            (p,t,d,e=null,s=null)=>{
                const f = new nt.AutomationEventList(d.defaultValue)
                  , _ = t ? (c = f,
                {
                    replay(t) {
                        for (const e of c)
                            if ("exponentialRampToValue" === e.type) {
                                const {endTime: c, value: s} = e;
                                t.exponentialRampToValueAtTime(s, c)
                            } else if ("linearRampToValue" === e.type) {
                                const {endTime: c, value: n} = e;
                                t.linearRampToValueAtTime(n, c)
                            } else if ("setTarget" === e.type) {
                                const {startTime: c, target: i, timeConstant: r} = e;
                                t.setTargetAtTime(i, c, r)
                            } else if ("setValue" === e.type) {
                                const {startTime: c, value: o} = e;
                                t.setValueAtTime(o, c)
                            } else {
                                if ("setValueCurve" !== e.type)
                                    throw new Error("Can't apply an unknown automation.");
                                {
                                    const {duration: c, startTime: a, values: h} = e;
                                    t.setValueCurveAtTime(h, a, c)
                                }
                            }
                    }
                }) : null
                  , m = {
                    get defaultValue() {
                        return d.defaultValue
                    },
                    get maxValue() {
                        return null === e ? d.maxValue : e
                    },
                    get minValue() {
                        return null === s ? d.minValue : s
                    },
                    get value() {
                        return d.value
                    },
                    set value(t) {
                        d.value = t,
                        m.setValueAtTime(t, p.context.currentTime)
                    },
                    cancelAndHoldAtTime(t) {
                        var e, s;
                        return "function" == typeof d.cancelAndHoldAtTime ? (null === _ && f.flush(p.context.currentTime),
                        f.add(Ps(t)),
                        d.cancelAndHoldAtTime(t)) : (e = Array.from(f).pop(),
                        null === _ && f.flush(p.context.currentTime),
                        f.add(Ps(t)),
                        s = Array.from(f).pop(),
                        d.cancelScheduledValues(t),
                        e !== s && void 0 !== s && ("exponentialRampToValue" === s.type ? d.exponentialRampToValueAtTime(s.value, s.endTime) : "linearRampToValue" === s.type ? d.linearRampToValueAtTime(s.value, s.endTime) : "setValue" === s.type ? d.setValueAtTime(s.value, s.startTime) : "setValueCurve" === s.type && d.setValueCurveAtTime(s.values, s.startTime, s.duration))),
                        m
                    },
                    cancelScheduledValues: t=>(null === _ && f.flush(p.context.currentTime),
                    f.add(js(t)),
                    d.cancelScheduledValues(t),
                    m),
                    exponentialRampToValueAtTime(t, e) {
                        if (0 === t)
                            throw new RangeError;
                        if (!Number.isFinite(e) || e < 0)
                            throw new RangeError;
                        return null === _ && f.flush(p.context.currentTime),
                        f.add(Ls(t, e)),
                        d.exponentialRampToValueAtTime(t, e),
                        m
                    },
                    linearRampToValueAtTime: (t,e)=>(null === _ && f.flush(p.context.currentTime),
                    f.add(zs(t, e)),
                    d.linearRampToValueAtTime(t, e),
                    m),
                    setTargetAtTime: (t,e,s)=>(null === _ && f.flush(p.context.currentTime),
                    f.add(Ws(t, e, s)),
                    d.setTargetAtTime(t, e, s),
                    m),
                    setValueAtTime: (t,e)=>(null === _ && f.flush(p.context.currentTime),
                    f.add(Bs(t, e)),
                    d.setValueAtTime(t, e),
                    m),
                    setValueCurveAtTime(t, e, s) {
                        var n = t instanceof Float32Array ? t : new Float32Array(t);
                        if (null !== Gs && "webkitAudioContext" === Gs.name) {
                            const i = e + s
                              , r = p.context.sampleRate
                              , o = Math.ceil(e * r)
                              , a = Math.floor(i * r)
                              , h = a - o
                              , c = new Float32Array(h);
                            for (let t = 0; t < h; t += 1) {
                                const p = (n.length - 1) / s * ((o + t) / r - e)
                                  , l = Math.floor(p)
                                  , u = Math.ceil(p);
                                c[t] = l === u ? n[l] : (1 - (p - l)) * n[l] + (1 - (u - p)) * n[u]
                            }
                            null === _ && f.flush(p.context.currentTime),
                            f.add(Us(c, e, s)),
                            d.setValueCurveAtTime(c, e, s);
                            t = a / r;
                            t < i && Qs(m, c[c.length - 1], t),
                            Qs(m, n[n.length - 1], i)
                        } else
                            null === _ && f.flush(p.context.currentTime),
                            f.add(Us(n, e, s)),
                            d.setValueCurveAtTime(n, e, s);
                        return m
                    }
                };
                var c;
                return Ns.set(m, d),
                Vs.set(m, p),
                Is(m, _),
                m
            }
            )
              , ll = (Uc = As,
            Gc = hl,
            Zc = be,
            Xc = ol,
            Hc = rs,
            class extends Uc {
                constructor(t, e) {
                    var s = Yc(t)
                      , n = {
                        ...Vt,
                        ...e
                    }
                      , i = Xc(s, n)
                      , e = $c(s)
                      , s = e ? Gc() : null;
                    super(t, !1, i, s),
                    this._audioBufferSourceNodeRenderer = s,
                    this._isBufferNullified = !1,
                    this._isBufferSet = null !== n.buffer,
                    this._nativeAudioBufferSourceNode = i,
                    this._onended = null,
                    this._playbackRate = Qc(this, e, i.playbackRate, Ft, qt)
                }
                get buffer() {
                    return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer
                }
                set buffer(t) {
                    if (null !== (this._nativeAudioBufferSourceNode.buffer = t)) {
                        if (this._isBufferSet)
                            throw Zc();
                        this._isBufferSet = !0
                    }
                }
                get loop() {
                    return this._nativeAudioBufferSourceNode.loop
                }
                set loop(t) {
                    this._nativeAudioBufferSourceNode.loop = t
                }
                get loopEnd() {
                    return this._nativeAudioBufferSourceNode.loopEnd
                }
                set loopEnd(t) {
                    this._nativeAudioBufferSourceNode.loopEnd = t
                }
                get loopStart() {
                    return this._nativeAudioBufferSourceNode.loopStart
                }
                set loopStart(t) {
                    this._nativeAudioBufferSourceNode.loopStart = t
                }
                get onended() {
                    return this._onended
                }
                set onended(t) {
                    var e = "function" == typeof t ? Hc(this, t) : null;
                    this._nativeAudioBufferSourceNode.onended = e;
                    var s = this._nativeAudioBufferSourceNode.onended;
                    this._onended = null !== s && s === e ? t : s
                }
                get playbackRate() {
                    return this._playbackRate
                }
                start(t=0, e=0, s) {
                    if (this._nativeAudioBufferSourceNode.start(t, e, s),
                    null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === s ? [t, e] : [t, e, s]),
                    "closed" !== this.context.state) {
                        Tt(this);
                        const t = ()=>{
                            this._nativeAudioBufferSourceNode.removeEventListener("ended", t),
                            It(this) && kt(this)
                        }
                        ;
                        this._nativeAudioBufferSourceNode.addEventListener("ended", t)
                    }
                }
                stop(t=0) {
                    this._nativeAudioBufferSourceNode.stop(t),
                    null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = t)
                }
            }
            )
              , ul = (Uc = As,
            Vc = Mt,
            Nc = be,
            Wc = je,
            Bc = He,
            Pc = (t,e,s)=>{
                const n = t.destination;
                if (n.channelCount !== e)
                    try {
                        n.channelCount = e
                    } catch {}
                s && "explicit" !== n.channelCountMode && (n.channelCountMode = "explicit"),
                0 === n.maxChannelCount && Object.defineProperty(n, "maxChannelCount", {
                    value: e
                });
                const i = Wc(t, {
                    channelCount: e,
                    channelCountMode: n.channelCountMode,
                    channelInterpretation: n.channelInterpretation,
                    gain: 1
                });
                return Bc(i, "channelCount", t=>()=>t.call(i), t=>e=>{
                    t.call(i, e);
                    try {
                        n.channelCount = e
                    } catch (t) {
                        if (e > n.maxChannelCount)
                            throw t
                    }
                }
                ),
                Bc(i, "channelCountMode", t=>()=>t.call(i), e=>t=>{
                    e.call(i, t),
                    n.channelCountMode = t
                }
                ),
                Bc(i, "channelInterpretation", t=>()=>t.call(i), e=>t=>{
                    e.call(i, t),
                    n.channelInterpretation = t
                }
                ),
                Object.defineProperty(i, "maxChannelCount", {
                    get: ()=>n.maxChannelCount
                }),
                i.connect(n),
                i
            }
            ,
            class extends Uc {
                constructor(t, e) {
                    var s = jc(t)
                      , n = Lc(s)
                      , e = Pc(s, e, n);
                    super(t, !1, e, n ? (i=>{
                        let t = null;
                        return {
                            render: (e,s,n)=>(null === t && (t = (async()=>{
                                var t = s.destination;
                                return await i(e, s, t, n),
                                t
                            }
                            )()),
                            t)
                        }
                    }
                    )(zc) : null),
                    this._isNodeOfNativeOfflineAudioContext = n,
                    this._nativeAudioDestinationNode = e
                }
                get channelCount() {
                    return this._nativeAudioDestinationNode.channelCount
                }
                set channelCount(t) {
                    if (this._isNodeOfNativeOfflineAudioContext)
                        throw Nc();
                    if (t > this._nativeAudioDestinationNode.maxChannelCount)
                        throw Vc();
                    this._nativeAudioDestinationNode.channelCount = t
                }
                get channelCountMode() {
                    return this._nativeAudioDestinationNode.channelCountMode
                }
                set channelCountMode(t) {
                    if (this._isNodeOfNativeOfflineAudioContext)
                        throw Nc();
                    this._nativeAudioDestinationNode.channelCountMode = t
                }
                get maxChannelCount() {
                    return this._nativeAudioDestinationNode.maxChannelCount
                }
            }
            )
              , pl = (Ec = rl,
            qc = Jt,
            Fc = al,
            Ic = zc = _s,
            ()=>{
                const r = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = r.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = qc(t);
                            var i = Dt(n, e);
                            if (!i) {
                                const Ec = {
                                    Q: n.Q.value,
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    detune: n.detune.value,
                                    frequency: n.frequency.value,
                                    gain: n.gain.value,
                                    type: n.type
                                };
                                n = Rc(e, Ec)
                            }
                            return r.set(e, n),
                            i ? (await Ec(e, t.Q, n.Q, s),
                            await Ec(e, t.detune, n.detune, s),
                            await Ec(e, t.frequency, n.frequency, s),
                            await Ec(e, t.gain, n.gain, s)) : (await Fc(e, t.Q, n.Q, s),
                            await Fc(e, t.detune, n.detune, s),
                            await Fc(e, t.frequency, n.frequency, s),
                            await Fc(e, t.gain, n.gain, s)),
                            await Ic(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , dl = (Mc = cs,
            (t,e)=>Mc.set(t, e))
              , fl = (Uc = As,
            Tc = Qc = cl,
            Sc = pl,
            kc = Te,
            Cc = Rc = Ie,
            Ac = jc = Yc = gs,
            Dc = Lc = $c = ys,
            Oc = dl,
            class extends Uc {
                constructor(t, e) {
                    var s = Ac(t)
                      , e = {
                        ...pe,
                        ...e
                    }
                      , e = Cc(s, e)
                      , s = Dc(s);
                    super(t, !1, e, s ? Sc() : null),
                    this._Q = Tc(this, s, e.Q, Ft, qt),
                    this._detune = Tc(this, s, e.detune, 1200 * Math.log2(Ft), -1200 * Math.log2(Ft)),
                    this._frequency = Tc(this, s, e.frequency, t.sampleRate / 2, 0),
                    this._gain = Tc(this, s, e.gain, 40 * Math.log10(Ft), qt),
                    this._nativeBiquadFilterNode = e,
                    Oc(this, 1)
                }
                get detune() {
                    return this._detune
                }
                get frequency() {
                    return this._frequency
                }
                get gain() {
                    return this._gain
                }
                get Q() {
                    return this._Q
                }
                get type() {
                    return this._nativeBiquadFilterNode.type
                }
                set type(t) {
                    this._nativeBiquadFilterNode.type = t
                }
                getFrequencyResponse(t, e, s) {
                    try {
                        this._nativeBiquadFilterNode.getFrequencyResponse(t, e, s)
                    } catch (t) {
                        if (11 === t.code)
                            throw kc();
                        throw t
                    }
                    if (t.length !== e.length || e.length !== s.length)
                        throw kc()
                }
            }
            )
              , _l = (wc = Bt,
            bc = Ss,
            (r,i,o)=>{
                const a = new Set;
                return r.connect = (c = r.connect,
                (e,s=0,n=0)=>{
                    var t = 0 === a.size;
                    if (bc(e))
                        return c.call(r, e, s, n),
                        wc(a, [e, s, n], t=>t[0] === e && t[1] === s && t[2] === n, !0),
                        t && i(),
                        e;
                    c.call(r, e, s),
                    wc(a, [e, s], t=>t[0] === e && t[1] === s, !0),
                    t && i()
                }
                ),
                r.disconnect = (h = r.disconnect,
                (t,e,s)=>{
                    var n = 0 < a.size;
                    if (void 0 === t)
                        h.apply(r),
                        a.clear();
                    else if ("number" == typeof t) {
                        h.call(r, t);
                        for (const h of a)
                            h[1] === t && a.delete(h)
                    } else {
                        bc(t) ? h.call(r, t, e, s) : h.call(r, t, e);
                        for (const h of a)
                            h[0] !== t || void 0 !== e && h[1] !== e || void 0 !== s && h[2] !== s || a.delete(h)
                    }
                    var i = 0 === a.size;
                    n && i && o()
                }
                ),
                r;
                var h, c
            }
            )
              , ml = (yc = be,
            (t,s)=>{
                s.channelCount = 1,
                s.channelCountMode = "explicit",
                Object.defineProperty(s, "channelCount", {
                    get: ()=>1,
                    set: ()=>{
                        throw yc()
                    }
                }),
                Object.defineProperty(s, "channelCountMode", {
                    get: ()=>"explicit",
                    set: ()=>{
                        throw yc()
                    }
                });
                const n = t.createBufferSource();
                xc(s, ()=>{
                    var e = s.numberOfInputs;
                    for (let t = 0; t < e; t += 1)
                        n.connect(s, 0, t)
                }
                , ()=>n.disconnect(s))
            }
            )
              , gl = (gc = bs,
            vc = ml,
            (t,e)=>{
                var s = t.createChannelMerger(e.numberOfInputs);
                return null !== gc && "webkitAudioContext" === gc.name && vc(t, s),
                Oe(s, e),
                s
            }
            )
              , vl = (_c = Jt,
            ()=>{
                const i = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = i.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = _c(t);
                            if (!Dt(n, e)) {
                                const _c = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    numberOfInputs: n.numberOfInputs
                                };
                                n = fc(e, _c)
                            }
                            return i.set(e, n),
                            await mc(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , yl = (Uc = As,
            lc = vl,
            class extends Uc {
                constructor(t, e) {
                    var s = pc(t)
                      , e = {
                        ...de,
                        ...e
                    };
                    super(t, !1, uc(s, e), dc(s) ? lc() : null)
                }
            }
            )
              , xl = (hc = Jt,
            ()=>{
                const i = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = i.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = hc(t);
                            if (!Dt(n, e)) {
                                const hc = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    numberOfOutputs: n.numberOfOutputs
                                };
                                n = ac(e, hc)
                            }
                            return i.set(e, n),
                            await cc(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , wl = (Uc = As,
            nc = xl,
            ic = ac = Ve,
            class extends Uc {
                constructor(t, e) {
                    var s = rc(t)
                      , e = {
                        ...e = {
                            ...fe,
                            ...e
                        },
                        channelCount: e.numberOfOutputs
                    };
                    super(t, !1, ic(s, e), oc(s) ? nc() : null)
                }
            }
            )
              , bl = (sc = xc = _l,
            (t,{offset: e, ...s})=>{
                const n = t.createBuffer(1, 2, 44100)
                  , i = tc(t, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: "max",
                    channelInterpretation: "speakers",
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                })
                  , r = ec(t, {
                    ...s,
                    gain: e
                })
                  , o = n.getChannelData(0);
                o[0] = 1,
                o[1] = 1,
                i.buffer = n,
                i.loop = !0;
                e = {
                    get bufferSize() {},
                    get channelCount() {
                        return r.channelCount
                    },
                    set channelCount(t) {
                        r.channelCount = t
                    },
                    get channelCountMode() {
                        return r.channelCountMode
                    },
                    set channelCountMode(t) {
                        r.channelCountMode = t
                    },
                    get channelInterpretation() {
                        return r.channelInterpretation
                    },
                    set channelInterpretation(t) {
                        r.channelInterpretation = t
                    },
                    get context() {
                        return r.context
                    },
                    get inputs() {
                        return []
                    },
                    get numberOfInputs() {
                        return i.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return r.numberOfOutputs
                    },
                    get offset() {
                        return r.gain
                    },
                    get onended() {
                        return i.onended
                    },
                    set onended(t) {
                        i.onended = t
                    },
                    addEventListener: (...t)=>i.addEventListener(t[0], t[1], t[2]),
                    dispatchEvent: (...t)=>i.dispatchEvent(t[0]),
                    removeEventListener: (...t)=>i.removeEventListener(t[0], t[1], t[2]),
                    start(t=0) {
                        i.start.call(i, t)
                    },
                    stop(t=0) {
                        i.stop.call(i, t)
                    }
                };
                return Kh(t, i),
                sc(Ne(e, r), ()=>i.connect(r), ()=>i.disconnect(r))
            }
            )
              , Tl = (Xh = Kh = nl,
            Yh = us,
            $h = bl,
            Hh = Ke,
            Jh = es,
            (t,e)=>{
                if (void 0 === t.createConstantSource)
                    return $h(t, e);
                var s = t.createConstantSource();
                return Oe(s, e),
                Ee(s, e, "offset"),
                Yh(Hh, ()=>Hh(t)) || Re(s),
                Yh(Jh, ()=>Jh(t)) || qe(s),
                Xh(t, s),
                s
            }
            )
              , Sl = (Gh = Jt,
            ()=>{
                const r = new WeakMap;
                let o = null
                  , a = null;
                return {
                    set start(t) {
                        o = t
                    },
                    set stop(t) {
                        a = t
                    },
                    render(t, e, s) {
                        var n = r.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = Gh(t);
                            var i = Dt(n, e);
                            if (!i) {
                                const Bh = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    offset: n.offset.value
                                };
                                n = Uh(e, Bh),
                                null !== o && n.start(o),
                                null !== a && n.stop(a)
                            }
                            return r.set(e, n),
                            i ? await Bh(e, t.offset, n.offset, s) : await Qh(e, t.offset, n.offset, s),
                            await Zh(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , kl = (Uc = As,
            Ph = Sl,
            Wh = rs,
            class extends Uc {
                constructor(t, e) {
                    var s = Lh(t)
                      , n = {
                        ..._e,
                        ...e
                    }
                      , e = jh(s, n)
                      , n = zh(s)
                      , s = n ? Ph() : null;
                    super(t, !1, e, s),
                    this._constantSourceNodeRenderer = s,
                    this._nativeConstantSourceNode = e,
                    this._offset = Nh(this, n, e.offset, Ft, qt),
                    this._onended = null
                }
                get offset() {
                    return this._offset
                }
                get onended() {
                    return this._onended
                }
                set onended(t) {
                    var e = "function" == typeof t ? Wh(this, t) : null;
                    this._nativeConstantSourceNode.onended = e;
                    var s = this._nativeConstantSourceNode.onended;
                    this._onended = null !== s && s === e ? t : s
                }
                start(t=0) {
                    if (this._nativeConstantSourceNode.start(t),
                    null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = t),
                    "closed" !== this.context.state) {
                        Tt(this);
                        const t = ()=>{
                            this._nativeConstantSourceNode.removeEventListener("ended", t),
                            It(this) && kt(this)
                        }
                        ;
                        this._nativeConstantSourceNode.addEventListener("ended", t)
                    }
                }
                stop(t=0) {
                    this._nativeConstantSourceNode.stop(t),
                    null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = t)
                }
            }
            )
              , Cl = (t,e)=>{
                const s = t.createConvolver();
                if (Oe(s, e),
                e.disableNormalization === s.normalize && (s.normalize = !e.disableNormalization),
                De(s, e, "buffer"),
                2 < e.channelCount)
                    throw Ih();
                if (Vh(s, "channelCount", t=>()=>t.call(s), e=>t=>{
                    if (2 < t)
                        throw Ih();
                    return e.call(s, t)
                }
                ),
                "max" === e.channelCountMode)
                    throw Ih();
                return Vh(s, "channelCountMode", t=>()=>t.call(s), e=>t=>{
                    if ("max" === t)
                        throw Ih();
                    return e.call(s, t)
                }
                ),
                s
            }
              , Al = (qh = Jt,
            ()=>{
                const i = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = i.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = qh(t);
                            if (!Dt(n, e)) {
                                const qh = {
                                    buffer: n.buffer,
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    disableNormalization: !n.normalize
                                };
                                n = Rh(e, qh)
                            }
                            return i.set(e, n),
                            Qt(n) ? await Fh(t, e, n.inputs[0], s) : await Fh(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , Dl = (Uc = As,
            Ah = Al,
            Dh = Rh = Cl,
            class extends Uc {
                constructor(t, e) {
                    var s = Oh(t)
                      , n = {
                        ...me,
                        ...e
                    }
                      , e = Dh(s, n);
                    super(t, !1, e, Mh(s) ? Ah() : null),
                    this._isBufferNullified = !1,
                    this._nativeConvolverNode = e,
                    null !== n.buffer && Eh(this, n.buffer.duration)
                }
                get buffer() {
                    return this._isBufferNullified ? null : this._nativeConvolverNode.buffer
                }
                set buffer(t) {
                    if (null === (this._nativeConvolverNode.buffer = t) && null !== this._nativeConvolverNode.buffer) {
                        const t = this._nativeConvolverNode.context;
                        this._nativeConvolverNode.buffer = t.createBuffer(1, 1, 44100),
                        this._isBufferNullified = !0,
                        Eh(this, 0)
                    } else
                        this._isBufferNullified = !1,
                        Eh(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration)
                }
                get normalize() {
                    return this._nativeConvolverNode.normalize
                }
                set normalize(t) {
                    this._nativeConvolverNode.normalize = t
                }
            }
            )
              , Ol = (Sh = Jt,
            r=>{
                const o = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = o.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = Sh(t);
                            var i = Dt(n, e);
                            if (!i) {
                                const bh = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    delayTime: n.delayTime.value,
                                    maxDelayTime: r
                                };
                                n = Th(e, bh)
                            }
                            return o.set(e, n),
                            i ? await bh(e, t.delayTime, n.delayTime, s) : await kh(e, t.delayTime, n.delayTime, s),
                            await Ch(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , Ml = (Uc = As,
            gh = Ol,
            vh = Th = Pe,
            class extends Uc {
                constructor(t, e) {
                    var s = yh(t)
                      , n = {
                        ...ve,
                        ...e
                    }
                      , e = vh(s, n)
                      , s = xh(s);
                    super(t, !1, e, s ? gh(n.maxDelayTime) : null),
                    this._delayTime = mh(this, s, e.delayTime),
                    wh(this, n.maxDelayTime)
                }
                get delayTime() {
                    return this._delayTime
                }
            }
            )
              , El = (t,e)=>{
                t = t.createDynamicsCompressor();
                if (Oe(t, e),
                2 < e.channelCount)
                    throw _h();
                if ("max" === e.channelCountMode)
                    throw _h();
                return Ee(t, e, "attack"),
                Ee(t, e, "knee"),
                Ee(t, e, "ratio"),
                Ee(t, e, "release"),
                Ee(t, e, "threshold"),
                t
            }
              , Rl = (ph = Jt,
            ()=>{
                const r = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = r.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = ph(t);
                            var i = Dt(n, e);
                            if (!i) {
                                const lh = {
                                    attack: n.attack.value,
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    knee: n.knee.value,
                                    ratio: n.ratio.value,
                                    release: n.release.value,
                                    threshold: n.threshold.value
                                };
                                n = uh(e, lh)
                            }
                            return r.set(e, n),
                            i ? (await lh(e, t.attack, n.attack, s),
                            await lh(e, t.knee, n.knee, s),
                            await lh(e, t.ratio, n.ratio, s),
                            await lh(e, t.release, n.release, s),
                            await lh(e, t.threshold, n.threshold, s)) : (await dh(e, t.attack, n.attack, s),
                            await dh(e, t.knee, n.knee, s),
                            await dh(e, t.ratio, n.ratio, s),
                            await dh(e, t.release, n.release, s),
                            await dh(e, t.threshold, n.threshold, s)),
                            await fh(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , ql = (Uc = As,
            ih = Rl,
            rh = uh = El,
            class extends Uc {
                constructor(t, e) {
                    var s = ah(t)
                      , e = {
                        ...xe,
                        ...e
                    }
                      , e = rh(s, e)
                      , s = hh(s);
                    super(t, !1, e, s ? ih() : null),
                    this._attack = nh(this, s, e.attack),
                    this._knee = nh(this, s, e.knee),
                    this._nativeDynamicsCompressorNode = e,
                    this._ratio = nh(this, s, e.ratio),
                    this._release = nh(this, s, e.release),
                    this._threshold = nh(this, s, e.threshold),
                    ch(this, .006)
                }
                get attack() {
                    return this._attack
                }
                get channelCount() {
                    return this._nativeDynamicsCompressorNode.channelCount
                }
                set channelCount(t) {
                    var e = this._nativeDynamicsCompressorNode.channelCount;
                    if (2 < (this._nativeDynamicsCompressorNode.channelCount = t))
                        throw this._nativeDynamicsCompressorNode.channelCount = e,
                        oh()
                }
                get channelCountMode() {
                    return this._nativeDynamicsCompressorNode.channelCountMode
                }
                set channelCountMode(t) {
                    var e = this._nativeDynamicsCompressorNode.channelCountMode;
                    if ("max" === (this._nativeDynamicsCompressorNode.channelCountMode = t))
                        throw this._nativeDynamicsCompressorNode.channelCountMode = e,
                        oh()
                }
                get knee() {
                    return this._knee
                }
                get ratio() {
                    return this._ratio
                }
                get reduction() {
                    return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction
                }
                get release() {
                    return this._release
                }
                get threshold() {
                    return this._threshold
                }
            }
            )
              , Fl = (Ja = lh = bh = Bh = rl,
            th = Jt,
            eh = dh = kh = Qh = al,
            ()=>{
                const r = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = r.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = th(t);
                            var i = Dt(n, e);
                            if (!i) {
                                const Ja = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    gain: n.gain.value
                                };
                                n = Ka(e, Ja)
                            }
                            return r.set(e, n),
                            i ? await Ja(e, t.gain, n.gain, s) : await eh(e, t.gain, n.gain, s),
                            await sh(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , Il = (Uc = As,
            Xa = Fl,
            class extends Uc {
                constructor(t, e) {
                    var s = $a(t)
                      , e = {
                        ...we,
                        ...e
                    }
                      , e = Ya(s, e)
                      , s = Ha(s);
                    super(t, !1, e, s ? Xa() : null),
                    this._gain = Za(this, s, e.gain, Ft, qt)
                }
                get gain() {
                    return this._gain
                }
            }
            )
              , Vl = (Ba = Te,
            Ua = be,
            (t,e,{channelCount: s, channelCountMode: n, channelInterpretation: i, feedback: r, feedforward: o})=>{
                const a = Fe(e, t.sampleRate)
                  , l = r instanceof Float64Array ? r : new Float64Array(r)
                  , u = o instanceof Float64Array ? o : new Float64Array(o)
                  , h = l.length
                  , c = u.length
                  , p = Math.min(h, c);
                if (0 === h || 20 < h)
                    throw Qa();
                if (0 === l[0])
                    throw Ua();
                if (0 === c || 20 < c)
                    throw Qa();
                if (0 === u[0])
                    throw Ua();
                if (1 !== l[0]) {
                    for (let t = 0; t < c; t += 1)
                        u[t] /= l[0];
                    for (let t = 1; t < h; t += 1)
                        l[t] /= l[0]
                }
                const d = Ga(t, a, s, s);
                d.channelCount = s,
                d.channelCountMode = n,
                d.channelInterpretation = i;
                const f = []
                  , _ = []
                  , m = [];
                for (let t = 0; t < s; t += 1) {
                    f.push(0);
                    const Ba = new Float32Array(32)
                      , Ua = new Float32Array(32);
                    Ba.fill(0),
                    Ua.fill(0),
                    _.push(Ba),
                    m.push(Ua)
                }
                d.onaudioprocess = t=>{
                    const e = t.inputBuffer
                      , s = t.outputBuffer
                      , n = e.numberOfChannels;
                    for (let t = 0; t < n; t += 1) {
                        const n = e.getChannelData(t)
                          , i = s.getChannelData(t);
                        f[t] = ke(l, h, u, c, p, _[t], m[t], f[t], 32, n, i)
                    }
                }
                ;
                const g = t.sampleRate / 2;
                return Ne({
                    get bufferSize() {
                        return a
                    },
                    get channelCount() {
                        return d.channelCount
                    },
                    set channelCount(t) {
                        d.channelCount = t
                    },
                    get channelCountMode() {
                        return d.channelCountMode
                    },
                    set channelCountMode(t) {
                        d.channelCountMode = t
                    },
                    get channelInterpretation() {
                        return d.channelInterpretation
                    },
                    set channelInterpretation(t) {
                        d.channelInterpretation = t
                    },
                    get context() {
                        return d.context
                    },
                    get inputs() {
                        return [d]
                    },
                    get numberOfInputs() {
                        return d.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return d.numberOfOutputs
                    },
                    addEventListener: (...t)=>d.addEventListener(t[0], t[1], t[2]),
                    dispatchEvent: (...t)=>d.dispatchEvent(t[0]),
                    getFrequencyResponse(e, s, n) {
                        if (e.length !== s.length || s.length !== n.length)
                            throw Ba();
                        const i = e.length;
                        for (let t = 0; t < i; t += 1) {
                            const i = -Math.PI * (e[t] / g)
                              , h = [Math.cos(i), Math.sin(i)]
                              , c = (r = Le(u, h),
                            o = Le(l, h),
                            a = void 0,
                            a = o[0] * o[0] + o[1] * o[1],
                            [(r[0] * o[0] + r[1] * o[1]) / a, (r[1] * o[0] - r[0] * o[1]) / a]);
                            s[t] = Math.sqrt(c[0] * c[0] + c[1] * c[1]),
                            n[t] = Math.atan2(c[1], c[0])
                        }
                        var r, o, a
                    },
                    removeEventListener: (...t)=>d.removeEventListener(t[0], t[1], t[2])
                }, d)
            }
            )
              , Nl = (Na = us,
            za = Pa = Ya = Ka = ec = je,
            Wa = vs,
            La = ()=>{
                if (null === Wa)
                    return Promise.resolve(!1);
                const e = new Wa(1,1,44100)
                  , s = za(e, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                return new Promise(t=>{
                    e.oncomplete = ()=>{
                        s.disconnect(),
                        t(0 !== e.currentTime)
                    }
                    ,
                    e.startRendering()
                }
                )
            }
            ,
            n=>Na(Ae, ()=>Ae(n)) ? Promise.resolve(Na(La, La)).then(t=>{
                if (!t) {
                    const t = ja(n, 512, 0, 1);
                    n.oncomplete = ()=>{
                        t.onaudioprocess = null,
                        t.disconnect()
                    }
                    ,
                    t.onaudioprocess = ()=>n.currentTime,
                    t.connect(n.destination)
                }
                return n.startRendering()
            }
            ) : new Promise(e=>{
                const s = Pa(n, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                n.oncomplete = t=>{
                    s.disconnect(),
                    e(t.renderedBuffer)
                }
                ,
                s.connect(n.destination),
                n.startRendering()
            }
            ))
              , Pl = (Ra = tc = ol,
            qa = Jt,
            Fa = vs,
            Ia = sh = fh = Ch = Fh = Zh = cc = mc = _s,
            Va = Nl,
            (o,a)=>{
                const h = new WeakMap;
                let c = null;
                return {
                    render(t, e, s) {
                        var n = h.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = null
                              , i = qa(t);
                            var r = Dt(i, e);
                            if (void 0 === e.createIIRFilter ? n = Ra(e, {
                                buffer: null,
                                channelCount: 2,
                                channelCountMode: "max",
                                channelInterpretation: "speakers",
                                loop: !1,
                                loopEnd: 0,
                                loopStart: 0,
                                playbackRate: 1
                            }) : r || (i = e.createIIRFilter(a, o)),
                            h.set(e, null === n ? i : n),
                            null === n)
                                return await Ia(t, e, i, s),
                                i;
                            {
                                if (null === c) {
                                    if (null === Fa)
                                        throw new Error("Missing the native OfflineAudioContext constructor.");
                                    const Ra = new Fa(t.context.destination.channelCount,t.context.length,e.sampleRate);
                                    c = (async()=>(await Ia(t, Ra, Ra.destination, s),
                                    ((e,t,s,n)=>{
                                        const i = s instanceof Float64Array ? s : new Float64Array(s)
                                          , r = n instanceof Float64Array ? n : new Float64Array(n)
                                          , o = i.length
                                          , a = r.length
                                          , h = Math.min(o, a);
                                        if (1 !== i[0]) {
                                            for (let t = 0; t < o; t += 1)
                                                r[t] /= i[0];
                                            for (let t = 1; t < a; t += 1)
                                                i[t] /= i[0]
                                        }
                                        const c = new Float32Array(32)
                                          , l = new Float32Array(32)
                                          , u = t.createBuffer(e.numberOfChannels, e.length, e.sampleRate)
                                          , p = e.numberOfChannels;
                                        for (let t = 0; t < p; t += 1) {
                                            const s = e.getChannelData(t)
                                              , n = u.getChannelData(t);
                                            c.fill(0),
                                            l.fill(0),
                                            ke(i, o, r, a, h, c, l, 0, 32, s, n)
                                        }
                                        return u
                                    }
                                    )(await Va(Ra), e, o, a)))()
                                }
                                const Ra = await c;
                                return n.buffer = Ra,
                                n.start(0),
                                n
                            }
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , jl = (Ea = Vl,
            (t,e,s)=>{
                if (void 0 === t.createIIRFilter)
                    return Ea(t, e, s);
                t = t.createIIRFilter(s.feedforward, s.feedback);
                return Oe(t, s),
                t
            }
            )
              , Ll = (Uc = As,
            Ca = jl,
            Aa = Pl,
            Da = $a = ah = yh = Oh = Lh = rc = pc = gs,
            Ma = ch = wh = Eh = dl,
            class extends Uc {
                constructor(t, e) {
                    var n, i, s = Da(t), r = Oa(s), e = {
                        ...Se,
                        ...e
                    }, s = Ca(s, r ? null : t.baseLatency, e);
                    super(t, !1, s, r ? Aa(e.feedback, e.feedforward) : null),
                    (n = s).getFrequencyResponse = (i = n.getFrequencyResponse,
                    (t,e,s)=>{
                        if (t.length !== e.length || e.length !== s.length)
                            throw Te();
                        return i.call(n, t, e, s)
                    }
                    ),
                    this._nativeIIRFilterNode = s,
                    Ma(this, 1)
                }
                getFrequencyResponse(t, e, s) {
                    return this._nativeIIRFilterNode.getFrequencyResponse(t, e, s)
                }
            }
            )
              , zl = (va = Za = nh = mh = Nh = cl,
            ya = uc = fc = gl,
            xa = jh = Uh = Tl,
            wa = ja = Ga = ze,
            ba = Qa = oh = _h = Ih = We,
            Ta = Ye,
            Sa = Oa = Ha = hh = xh = Mh = zh = oc = dc = ys,
            ka = Vh = He,
            (_,m)=>{
                const a = m.listener
                  , {forwardX: t, forwardY: e, forwardZ: s, positionX: n, positionY: i, positionZ: r, upX: o, upY: h, upZ: c} = void 0 === a.forwardX ? (()=>{
                    const n = new Float32Array(1)
                      , p = ya(m, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: 9
                    })
                      , d = Sa(m);
                    let e = !1
                      , i = [0, 0, -1, 0, 1, 0]
                      , r = [0, 0, 0];
                    const f = ()=>{
                        if (!e) {
                            e = !0;
                            const t = wa(m, 256, 9, 0);
                            t.onaudioprocess = ({inputBuffer: t})=>{
                                const e = [Ta(t, n, 0), Ta(t, n, 1), Ta(t, n, 2), Ta(t, n, 3), Ta(t, n, 4), Ta(t, n, 5)];
                                e.some((t,e)=>t !== i[e]) && (a.setOrientation(...e),
                                i = e);
                                const s = [Ta(t, n, 6), Ta(t, n, 7), Ta(t, n, 8)];
                                s.some((t,e)=>t !== r[e]) && (a.setPosition(...s),
                                r = s)
                            }
                            ,
                            p.connect(t)
                        }
                    }
                      , t = e=>t=>{
                        t !== i[e] && (i[e] = t,
                        a.setOrientation(...i))
                    }
                      , s = e=>t=>{
                        t !== r[e] && (r[e] = t,
                        a.setPosition(...r))
                    }
                      , o = (t,e,s)=>{
                        const n = xa(m, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: e
                        });
                        n.connect(p, 0, t),
                        n.start(),
                        Object.defineProperty(n.offset, "defaultValue", {
                            get: ()=>e
                        });
                        const i = va({
                            context: _
                        }, d, n.offset, Ft, qt);
                        var r, o, a, h, c, l, u;
                        return ka(i, "value", t=>()=>t.call(i), e=>t=>{
                            try {
                                e.call(i, t)
                            } catch (t) {
                                if (9 !== t.code)
                                    throw t
                            }
                            f(),
                            d && s(t)
                        }
                        ),
                        i.cancelAndHoldAtTime = (r = i.cancelAndHoldAtTime,
                        d ? ()=>{
                            throw ba()
                        }
                        : (...t)=>{
                            t = r.apply(i, t);
                            return f(),
                            t
                        }
                        ),
                        i.cancelScheduledValues = (o = i.cancelScheduledValues,
                        d ? ()=>{
                            throw ba()
                        }
                        : (...t)=>{
                            t = o.apply(i, t);
                            return f(),
                            t
                        }
                        ),
                        i.exponentialRampToValueAtTime = (a = i.exponentialRampToValueAtTime,
                        d ? ()=>{
                            throw ba()
                        }
                        : (...t)=>{
                            t = a.apply(i, t);
                            return f(),
                            t
                        }
                        ),
                        i.linearRampToValueAtTime = (h = i.linearRampToValueAtTime,
                        d ? ()=>{
                            throw ba()
                        }
                        : (...t)=>{
                            t = h.apply(i, t);
                            return f(),
                            t
                        }
                        ),
                        i.setTargetAtTime = (c = i.setTargetAtTime,
                        d ? ()=>{
                            throw ba()
                        }
                        : (...t)=>{
                            t = c.apply(i, t);
                            return f(),
                            t
                        }
                        ),
                        i.setValueAtTime = (l = i.setValueAtTime,
                        d ? ()=>{
                            throw ba()
                        }
                        : (...t)=>{
                            t = l.apply(i, t);
                            return f(),
                            t
                        }
                        ),
                        i.setValueCurveAtTime = (u = i.setValueCurveAtTime,
                        d ? ()=>{
                            throw ba()
                        }
                        : (...t)=>{
                            t = u.apply(i, t);
                            return f(),
                            t
                        }
                        ),
                        i
                    }
                    ;
                    return {
                        forwardX: o(0, 0, t(0)),
                        forwardY: o(1, 0, t(1)),
                        forwardZ: o(2, -1, t(2)),
                        positionX: o(6, 0, s(0)),
                        positionY: o(7, 0, s(1)),
                        positionZ: o(8, 0, s(2)),
                        upX: o(3, 0, t(3)),
                        upY: o(4, 1, t(4)),
                        upZ: o(5, 0, t(5))
                    }
                }
                )() : a;
                return {
                    get forwardX() {
                        return t
                    },
                    get forwardY() {
                        return e
                    },
                    get forwardZ() {
                        return s
                    },
                    get positionX() {
                        return n
                    },
                    get positionY() {
                        return i
                    },
                    get positionZ() {
                        return r
                    },
                    get upX() {
                        return o
                    },
                    get upY() {
                        return h
                    },
                    get upZ() {
                        return c
                    }
                }
            }
            )
              , Wl = new WeakMap
              , Bl = (da = ul,
            fa = zl,
            ma = Wl,
            class extends ws {
                constructor(t, e) {
                    super(t),
                    this._nativeContext = t,
                    ct.set(this, t),
                    _a(t) && ma.set(t, new Set),
                    this._destination = new da(this,e),
                    this._listener = fa(this, t),
                    this._onstatechange = null
                }
                get currentTime() {
                    return this._nativeContext.currentTime
                }
                get destination() {
                    return this._destination
                }
                get listener() {
                    return this._listener
                }
                get onstatechange() {
                    return this._onstatechange
                }
                set onstatechange(t) {
                    var e = "function" == typeof t ? ga(this, t) : null;
                    this._nativeContext.onstatechange = e;
                    var s = this._nativeContext.onstatechange;
                    this._onstatechange = null !== s && s === e ? t : s
                }
                get sampleRate() {
                    return this._nativeContext.sampleRate
                }
                get state() {
                    return this._nativeContext.state
                }
            }
            )
              , Ul = (aa = nl,
            ha = us,
            ca = Ke,
            la = ts,
            ua = es,
            pa = is,
            (t,e)=>{
                const s = t.createOscillator();
                return Oe(s, e),
                Ee(s, e, "detune"),
                Ee(s, e, "frequency"),
                void 0 !== e.periodicWave ? s.setPeriodicWave(e.periodicWave) : De(s, e, "type"),
                ha(ca, ()=>ca(t)) || Re(s),
                ha(la, ()=>la(t)) || pa(s, t),
                ha(ua, ()=>ua(t)) || qe(s),
                aa(t, s),
                s
            }
            )
              , Gl = (ia = Jt,
            ()=>{
                const r = new WeakMap;
                let o = null
                  , a = null
                  , h = null;
                return {
                    set periodicWave(t) {
                        o = t
                    },
                    set start(t) {
                        a = t
                    },
                    set stop(t) {
                        h = t
                    },
                    render(t, e, s) {
                        var n = r.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = ia(t);
                            var i = Dt(n, e);
                            if (!i) {
                                const sa = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    detune: n.detune.value,
                                    frequency: n.frequency.value,
                                    periodicWave: null === o ? void 0 : o,
                                    type: n.type
                                };
                                n = na(e, sa),
                                null !== a && n.start(a),
                                null !== h && n.stop(h)
                            }
                            return r.set(e, n),
                            i ? (await sa(e, t.detune, n.detune, s),
                            await sa(e, t.frequency, n.frequency, s)) : (await ra(e, t.detune, n.detune, s),
                            await ra(e, t.frequency, n.frequency, s)),
                            await oa(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , Ql = (Uc = As,
            Ho = na = Ul,
            Jo = Gl,
            ea = ga = rs,
            class extends Uc {
                constructor(t, e) {
                    var s = Ko(t)
                      , n = {
                        ...Ue,
                        ...e
                    }
                      , i = Ho(s, n)
                      , r = ta(s)
                      , e = r ? Jo() : null
                      , s = t.sampleRate / 2;
                    super(t, !1, i, e),
                    this._detune = $o(this, r, i.detune, 153600, -153600),
                    this._frequency = $o(this, r, i.frequency, s, -s),
                    this._nativeOscillatorNode = i,
                    this._onended = null,
                    this._oscillatorNodeRenderer = e,
                    null !== this._oscillatorNodeRenderer && void 0 !== n.periodicWave && (this._oscillatorNodeRenderer.periodicWave = n.periodicWave)
                }
                get detune() {
                    return this._detune
                }
                get frequency() {
                    return this._frequency
                }
                get onended() {
                    return this._onended
                }
                set onended(t) {
                    var e = "function" == typeof t ? ea(this, t) : null;
                    this._nativeOscillatorNode.onended = e;
                    var s = this._nativeOscillatorNode.onended;
                    this._onended = null !== s && s === e ? t : s
                }
                get type() {
                    return this._nativeOscillatorNode.type
                }
                set type(t) {
                    this._nativeOscillatorNode.type = t,
                    null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null)
                }
                setPeriodicWave(t) {
                    this._nativeOscillatorNode.setPeriodicWave(t),
                    null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = t)
                }
                start(t=0) {
                    if (this._nativeOscillatorNode.start(t),
                    null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = t),
                    "closed" !== this.context.state) {
                        Tt(this);
                        const t = ()=>{
                            this._nativeOscillatorNode.removeEventListener("ended", t),
                            It(this) && kt(this)
                        }
                        ;
                        this._nativeOscillatorNode.addEventListener("ended", t)
                    }
                }
                stop(t=0) {
                    this._nativeOscillatorNode.stop(t),
                    null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = t)
                }
            }
            )
              , Zl = (Yo = ol,
            (t,e)=>{
                const s = Yo(t, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: "max",
                    channelInterpretation: "speakers",
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                })
                  , n = t.createBuffer(1, 2, 44100);
                return s.buffer = n,
                s.loop = !0,
                s.connect(e),
                s.start(),
                ()=>{
                    s.stop(),
                    s.disconnect(e)
                }
            }
            )
              , Xl = (Go = be,
            (r,{curve: t, oversample: e, ...s})=>{
                const o = r.createWaveShaper()
                  , a = r.createWaveShaper();
                Oe(o, s),
                Oe(a, s);
                const h = Qo(r, {
                    ...s,
                    gain: 1
                })
                  , n = Qo(r, {
                    ...s,
                    gain: -1
                })
                  , i = Qo(r, {
                    ...s,
                    gain: 1
                })
                  , c = Qo(r, {
                    ...s,
                    gain: -1
                });
                let l = null
                  , u = !1
                  , p = null;
                const d = {
                    get bufferSize() {},
                    get channelCount() {
                        return o.channelCount
                    },
                    set channelCount(t) {
                        h.channelCount = t,
                        n.channelCount = t,
                        o.channelCount = t,
                        i.channelCount = t,
                        a.channelCount = t,
                        c.channelCount = t
                    },
                    get channelCountMode() {
                        return o.channelCountMode
                    },
                    set channelCountMode(t) {
                        h.channelCountMode = t,
                        n.channelCountMode = t,
                        o.channelCountMode = t,
                        i.channelCountMode = t,
                        a.channelCountMode = t,
                        c.channelCountMode = t
                    },
                    get channelInterpretation() {
                        return o.channelInterpretation
                    },
                    set channelInterpretation(t) {
                        h.channelInterpretation = t,
                        n.channelInterpretation = t,
                        o.channelInterpretation = t,
                        i.channelInterpretation = t,
                        a.channelInterpretation = t,
                        c.channelInterpretation = t
                    },
                    get context() {
                        return o.context
                    },
                    get curve() {
                        return p
                    },
                    set curve(e) {
                        if (null !== e && e.length < 2)
                            throw Go();
                        if (null === e)
                            o.curve = e,
                            a.curve = e;
                        else {
                            const Uo = e.length
                              , Go = new Float32Array(Uo + 2 - Uo % 2)
                              , Zo = new Float32Array(Uo + 2 - Uo % 2);
                            Go[0] = e[0],
                            Zo[0] = -e[Uo - 1];
                            const s = Math.ceil((Uo + 1) / 2)
                              , r = (Uo + 1) / 2 - 1;
                            for (let t = 1; t < s; t += 1) {
                                const n = t / s * r
                                  , i = Math.floor(n)
                                  , o = Math.ceil(n);
                                Go[t] = i === o ? e[i] : (1 - (n - i)) * e[i] + (1 - (o - n)) * e[o],
                                Zo[t] = i === o ? -e[Uo - 1 - i] : -(1 - (n - i)) * e[Uo - 1 - i] - (1 - (o - n)) * e[Uo - 1 - o]
                            }
                            Go[s] = Uo % 2 == 1 ? e[s - 1] : (e[s - 2] + e[s - 1]) / 2,
                            o.curve = Go,
                            a.curve = Zo
                        }
                        p = e,
                        u && (Zo(p) && null === l ? l = Uo(r, h) : null !== l && (l(),
                        l = null))
                    },
                    get inputs() {
                        return [h]
                    },
                    get numberOfInputs() {
                        return o.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return o.numberOfOutputs
                    },
                    get oversample() {
                        return o.oversample
                    },
                    set oversample(t) {
                        o.oversample = t,
                        a.oversample = t
                    },
                    addEventListener: (...t)=>h.addEventListener(t[0], t[1], t[2]),
                    dispatchEvent: (...t)=>h.dispatchEvent(t[0]),
                    removeEventListener: (...t)=>h.removeEventListener(t[0], t[1], t[2])
                };
                return null !== t && (d.curve = t instanceof Float32Array ? t : new Float32Array(t)),
                e !== d.oversample && (d.oversample = e),
                Xo(Ne(d, i), ()=>{
                    h.connect(o).connect(i),
                    h.connect(n).connect(a).connect(c).connect(i),
                    u = !0,
                    Zo(p) && (l = Uo(r, h))
                }
                , ()=>{
                    h.disconnect(o),
                    o.disconnect(i),
                    h.disconnect(n),
                    n.disconnect(a),
                    a.disconnect(c),
                    c.disconnect(i),
                    u = !1,
                    null !== l && (l(),
                    l = null)
                }
                )
            }
            )
              , Yl = (No = Uo = Zl,
            Po = be,
            jo = Xl,
            Lo = Zo = $e,
            Wo = bs,
            Bo = He,
            (s,t)=>{
                const n = s.createWaveShaper();
                if (null !== Wo && "webkitAudioContext" === Wo.name && void 0 === s.createGain().gain.automationRate)
                    return jo(s, t);
                Oe(n, t);
                var e = null === t.curve || t.curve instanceof Float32Array ? t.curve : new Float32Array(t.curve);
                if (null !== e && e.length < 2)
                    throw Po();
                De(n, {
                    curve: e
                }, "curve"),
                De(n, t, "oversample");
                let i = null
                  , r = !1;
                return Bo(n, "curve", t=>()=>t.call(n), e=>t=>(e.call(n, t),
                r && (Lo(t) && null === i ? i = No(s, n) : Lo(t) || null === i || (i(),
                i = null)),
                t)),
                zo(n, ()=>{
                    r = !0,
                    Lo(n.curve) && (i = No(s, n))
                }
                , ()=>{
                    r = !1,
                    null !== i && (i(),
                    i = null)
                }
                )
            }
            )
              , $l = (Ao = Zt,
            Do = be,
            Eo = ze,
            Ro = Yl,
            qo = We,
            Fo = Ht,
            Io = Ye,
            Vo = zo = Xo = _l,
            (t,{coneInnerAngle: e, coneOuterAngle: s, coneOuterGain: n, distanceModel: i, maxDistance: r, orientationX: o, orientationY: a, orientationZ: h, panningModel: c, positionX: l, positionY: u, positionZ: p, refDistance: d, rolloffFactor: f, ..._})=>{
                const m = t.createPanner();
                if (2 < _.channelCount)
                    throw qo();
                if ("max" === _.channelCountMode)
                    throw qo();
                Oe(m, _);
                const g = {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete"
                }
                  , v = Oo(t, {
                    ...g,
                    channelInterpretation: "speakers",
                    numberOfInputs: 6
                })
                  , y = Mo(t, {
                    ..._,
                    gain: 1
                })
                  , x = Mo(t, {
                    ...g,
                    gain: 1
                })
                  , w = Mo(t, {
                    ...g,
                    gain: 0
                })
                  , b = Mo(t, {
                    ...g,
                    gain: 0
                })
                  , T = Mo(t, {
                    ...g,
                    gain: 0
                })
                  , S = Mo(t, {
                    ...g,
                    gain: 0
                })
                  , k = Mo(t, {
                    ...g,
                    gain: 0
                })
                  , C = Eo(t, 256, 6, 1)
                  , A = Ro(t, {
                    ...g,
                    curve: new Float32Array([1, 1]),
                    oversample: "none"
                });
                let D = [o, a, h]
                  , O = [l, u, p];
                const M = new Float32Array(1);
                C.onaudioprocess = ({inputBuffer: t})=>{
                    const e = [Io(t, M, 0), Io(t, M, 1), Io(t, M, 2)];
                    e.some((t,e)=>t !== D[e]) && (m.setOrientation(...e),
                    D = e);
                    const s = [Io(t, M, 3), Io(t, M, 4), Io(t, M, 5)];
                    s.some((t,e)=>t !== O[e]) && (m.setPosition(...s),
                    O = s)
                }
                ,
                Object.defineProperty(w.gain, "defaultValue", {
                    get: ()=>0
                }),
                Object.defineProperty(b.gain, "defaultValue", {
                    get: ()=>0
                }),
                Object.defineProperty(T.gain, "defaultValue", {
                    get: ()=>0
                }),
                Object.defineProperty(S.gain, "defaultValue", {
                    get: ()=>0
                }),
                Object.defineProperty(k.gain, "defaultValue", {
                    get: ()=>0
                });
                const E = {
                    get bufferSize() {},
                    get channelCount() {
                        return m.channelCount
                    },
                    set channelCount(t) {
                        if (2 < t)
                            throw qo();
                        y.channelCount = t,
                        m.channelCount = t
                    },
                    get channelCountMode() {
                        return m.channelCountMode
                    },
                    set channelCountMode(t) {
                        if ("max" === t)
                            throw qo();
                        y.channelCountMode = t,
                        m.channelCountMode = t
                    },
                    get channelInterpretation() {
                        return m.channelInterpretation
                    },
                    set channelInterpretation(t) {
                        y.channelInterpretation = t,
                        m.channelInterpretation = t
                    },
                    get coneInnerAngle() {
                        return m.coneInnerAngle
                    },
                    set coneInnerAngle(t) {
                        m.coneInnerAngle = t
                    },
                    get coneOuterAngle() {
                        return m.coneOuterAngle
                    },
                    set coneOuterAngle(t) {
                        m.coneOuterAngle = t
                    },
                    get coneOuterGain() {
                        return m.coneOuterGain
                    },
                    set coneOuterGain(t) {
                        if (t < 0 || 1 < t)
                            throw Do();
                        m.coneOuterGain = t
                    },
                    get context() {
                        return m.context
                    },
                    get distanceModel() {
                        return m.distanceModel
                    },
                    set distanceModel(t) {
                        m.distanceModel = t
                    },
                    get inputs() {
                        return [y]
                    },
                    get maxDistance() {
                        return m.maxDistance
                    },
                    set maxDistance(t) {
                        if (t < 0)
                            throw new RangeError;
                        m.maxDistance = t
                    },
                    get numberOfInputs() {
                        return m.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return m.numberOfOutputs
                    },
                    get orientationX() {
                        return x.gain
                    },
                    get orientationY() {
                        return w.gain
                    },
                    get orientationZ() {
                        return b.gain
                    },
                    get panningModel() {
                        return m.panningModel
                    },
                    set panningModel(t) {
                        m.panningModel = t
                    },
                    get positionX() {
                        return T.gain
                    },
                    get positionY() {
                        return S.gain
                    },
                    get positionZ() {
                        return k.gain
                    },
                    get refDistance() {
                        return m.refDistance
                    },
                    set refDistance(t) {
                        if (t < 0)
                            throw new RangeError;
                        m.refDistance = t
                    },
                    get rolloffFactor() {
                        return m.rolloffFactor
                    },
                    set rolloffFactor(t) {
                        if (t < 0)
                            throw new RangeError;
                        m.rolloffFactor = t
                    },
                    addEventListener: (...t)=>y.addEventListener(t[0], t[1], t[2]),
                    dispatchEvent: (...t)=>y.dispatchEvent(t[0]),
                    removeEventListener: (...t)=>y.removeEventListener(t[0], t[1], t[2])
                };
                return e !== E.coneInnerAngle && (E.coneInnerAngle = e),
                s !== E.coneOuterAngle && (E.coneOuterAngle = s),
                n !== E.coneOuterGain && (E.coneOuterGain = n),
                i !== E.distanceModel && (E.distanceModel = i),
                r !== E.maxDistance && (E.maxDistance = r),
                o !== E.orientationX.value && (E.orientationX.value = o),
                a !== E.orientationY.value && (E.orientationY.value = a),
                h !== E.orientationZ.value && (E.orientationZ.value = h),
                c !== E.panningModel && (E.panningModel = c),
                l !== E.positionX.value && (E.positionX.value = l),
                u !== E.positionY.value && (E.positionY.value = u),
                p !== E.positionZ.value && (E.positionZ.value = p),
                d !== E.refDistance && (E.refDistance = d),
                f !== E.rolloffFactor && (E.rolloffFactor = f),
                1 === D[0] && 0 === D[1] && 0 === D[2] || m.setOrientation(...D),
                0 === O[0] && 0 === O[1] && 0 === O[2] || m.setPosition(...O),
                Vo(Ne(E, m), ()=>{
                    y.connect(m),
                    Ao(y, A, 0, 0),
                    A.connect(x).connect(v, 0, 0),
                    A.connect(w).connect(v, 0, 1),
                    A.connect(b).connect(v, 0, 2),
                    A.connect(T).connect(v, 0, 3),
                    A.connect(S).connect(v, 0, 4),
                    A.connect(k).connect(v, 0, 5),
                    v.connect(C).connect(t.destination)
                }
                , ()=>{
                    y.disconnect(m),
                    Fo(y, A, 0, 0),
                    A.disconnect(x),
                    x.disconnect(v),
                    A.disconnect(w),
                    w.disconnect(v),
                    A.disconnect(b),
                    b.disconnect(v),
                    A.disconnect(T),
                    T.disconnect(v),
                    A.disconnect(S),
                    S.disconnect(v),
                    A.disconnect(k),
                    k.disconnect(v),
                    v.disconnect(C),
                    C.disconnect(t.destination)
                }
                )
            }
            )
              , Hl = (Co = $l,
            (t,e)=>{
                var s = t.createPanner();
                return void 0 === s.orientationX ? Co(t, e) : (Oe(s, e),
                Ee(s, e, "orientationX"),
                Ee(s, e, "orientationY"),
                Ee(s, e, "orientationZ"),
                Ee(s, e, "positionX"),
                Ee(s, e, "positionY"),
                Ee(s, e, "positionZ"),
                De(s, e, "coneInnerAngle"),
                De(s, e, "coneOuterAngle"),
                De(s, e, "coneOuterGain"),
                De(s, e, "distanceModel"),
                De(s, e, "maxDistance"),
                De(s, e, "panningModel"),
                De(s, e, "refDistance"),
                De(s, e, "rolloffFactor"),
                s)
            }
            )
              , Jl = (mo = sa = rl,
            go = Oo = gl,
            vo = Tl,
            yo = Mo = Qo = je,
            wo = Jt,
            bo = vs,
            To = ra = al,
            So = oa = _s,
            ko = Nl,
            ()=>{
                const l = new WeakMap;
                let u = null;
                return {
                    render(t, e, s) {
                        var n = l.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,r,o)=>{
                            let a = null
                              , e = wo(t);
                            var h = {
                                channelCount: e.channelCount,
                                channelCountMode: e.channelCountMode,
                                channelInterpretation: e.channelInterpretation
                            }
                              , c = {
                                ...h,
                                coneInnerAngle: e.coneInnerAngle,
                                coneOuterAngle: e.coneOuterAngle,
                                coneOuterGain: e.coneOuterGain,
                                distanceModel: e.distanceModel,
                                maxDistance: e.maxDistance,
                                panningModel: e.panningModel,
                                refDistance: e.refDistance,
                                rolloffFactor: e.rolloffFactor
                            }
                              , s = Dt(e, r);
                            if ("bufferSize"in e)
                                a = yo(r, {
                                    ...h,
                                    gain: 1
                                });
                            else if (!s) {
                                const mo = {
                                    ...c,
                                    orientationX: e.orientationX.value,
                                    orientationY: e.orientationY.value,
                                    orientationZ: e.orientationZ.value,
                                    positionX: e.positionX.value,
                                    positionY: e.positionY.value,
                                    positionZ: e.positionZ.value
                                };
                                e = xo(r, mo)
                            }
                            if (l.set(r, null === a ? e : a),
                            null === a)
                                return s ? (await mo(r, t.orientationX, e.orientationX, o),
                                await mo(r, t.orientationY, e.orientationY, o),
                                await mo(r, t.orientationZ, e.orientationZ, o),
                                await mo(r, t.positionX, e.positionX, o),
                                await mo(r, t.positionY, e.positionY, o),
                                await mo(r, t.positionZ, e.positionZ, o)) : (await To(r, t.orientationX, e.orientationX, o),
                                await To(r, t.orientationY, e.orientationY, o),
                                await To(r, t.orientationZ, e.orientationZ, o),
                                await To(r, t.positionX, e.positionX, o),
                                await To(r, t.positionY, e.positionY, o),
                                await To(r, t.positionZ, e.positionZ, o)),
                                Qt(e) ? await So(t, r, e.inputs[0], o) : await So(t, r, e, o),
                                e;
                            {
                                if (null === u) {
                                    if (null === bo)
                                        throw new Error("Missing the native OfflineAudioContext constructor.");
                                    const mo = new bo(6,t.context.length,r.sampleRate)
                                      , yo = go(mo, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        numberOfInputs: 6
                                    });
                                    yo.connect(mo.destination),
                                    u = (async()=>{
                                        const e = await Promise.all([t.orientationX, t.orientationY, t.orientationZ, t.positionX, t.positionY, t.positionZ].map(async(t,e)=>{
                                            e = vo(mo, {
                                                channelCount: 1,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "discrete",
                                                offset: 0 === e ? 1 : 0
                                            });
                                            return await To(mo, t, e.offset, o),
                                            e
                                        }
                                        ));
                                        for (let t = 0; t < 6; t += 1)
                                            e[t].connect(yo, 0, t),
                                            e[t].start(0);
                                        return ko(mo)
                                    }
                                    )()
                                }
                                const mo = await u
                                  , wo = yo(r, {
                                    ...h,
                                    gain: 1
                                });
                                await So(t, r, wo, o);
                                const l = [];
                                for (let t = 0; t < mo.numberOfChannels; t += 1)
                                    l.push(mo.getChannelData(t));
                                let s = [l[0][0], l[1][0], l[2][0]]
                                  , n = [l[3][0], l[4][0], l[5][0]]
                                  , e = yo(r, {
                                    ...h,
                                    gain: 1
                                })
                                  , i = xo(r, {
                                    ...c,
                                    orientationX: s[0],
                                    orientationY: s[1],
                                    orientationZ: s[2],
                                    positionX: n[0],
                                    positionY: n[1],
                                    positionZ: n[2]
                                });
                                wo.connect(e).connect(i.inputs[0]),
                                i.connect(a);
                                for (let t = 128; t < mo.length; t += 128) {
                                    const mo = [l[0][t], l[1][t], l[2][t]]
                                      , vo = [l[3][t], l[4][t], l[5][t]];
                                    if (mo.some((t,e)=>t !== s[e]) || vo.some((t,e)=>t !== n[e])) {
                                        s = mo,
                                        n = vo;
                                        const bo = t / r.sampleRate;
                                        e.gain.setValueAtTime(0, bo),
                                        e = yo(r, {
                                            ...h,
                                            gain: 0
                                        }),
                                        i = xo(r, {
                                            ...c,
                                            orientationX: s[0],
                                            orientationY: s[1],
                                            orientationZ: s[2],
                                            positionX: n[0],
                                            positionY: n[1],
                                            positionZ: n[2]
                                        }),
                                        e.gain.setValueAtTime(1, bo),
                                        wo.connect(e).connect(i.inputs[0]),
                                        i.connect(a)
                                    }
                                }
                                return a
                            }
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , Kl = (Uc = As,
            co = $o = cl,
            lo = xo = Hl,
            uo = Jl,
            fo = ta = _a = ys,
            _o = dl,
            class extends Uc {
                constructor(t, e) {
                    var s = po(t)
                      , e = {
                        ...Ge,
                        ...e
                    }
                      , e = lo(s, e)
                      , s = fo(s);
                    super(t, !1, e, s ? uo() : null),
                    this._nativePannerNode = e,
                    this._orientationX = co(this, s, e.orientationX, Ft, qt),
                    this._orientationY = co(this, s, e.orientationY, Ft, qt),
                    this._orientationZ = co(this, s, e.orientationZ, Ft, qt),
                    this._positionX = co(this, s, e.positionX, Ft, qt),
                    this._positionY = co(this, s, e.positionY, Ft, qt),
                    this._positionZ = co(this, s, e.positionZ, Ft, qt),
                    _o(this, 1)
                }
                get coneInnerAngle() {
                    return this._nativePannerNode.coneInnerAngle
                }
                set coneInnerAngle(t) {
                    this._nativePannerNode.coneInnerAngle = t
                }
                get coneOuterAngle() {
                    return this._nativePannerNode.coneOuterAngle
                }
                set coneOuterAngle(t) {
                    this._nativePannerNode.coneOuterAngle = t
                }
                get coneOuterGain() {
                    return this._nativePannerNode.coneOuterGain
                }
                set coneOuterGain(t) {
                    this._nativePannerNode.coneOuterGain = t
                }
                get distanceModel() {
                    return this._nativePannerNode.distanceModel
                }
                set distanceModel(t) {
                    this._nativePannerNode.distanceModel = t
                }
                get maxDistance() {
                    return this._nativePannerNode.maxDistance
                }
                set maxDistance(t) {
                    this._nativePannerNode.maxDistance = t
                }
                get orientationX() {
                    return this._orientationX
                }
                get orientationY() {
                    return this._orientationY
                }
                get orientationZ() {
                    return this._orientationZ
                }
                get panningModel() {
                    return this._nativePannerNode.panningModel
                }
                set panningModel(t) {
                    this._nativePannerNode.panningModel = t
                }
                get positionX() {
                    return this._positionX
                }
                get positionY() {
                    return this._positionY
                }
                get positionZ() {
                    return this._positionZ
                }
                get refDistance() {
                    return this._nativePannerNode.refDistance
                }
                set refDistance(t) {
                    this._nativePannerNode.refDistance = t
                }
                get rolloffFactor() {
                    return this._nativePannerNode.rolloffFactor
                }
                set rolloffFactor(t) {
                    this._nativePannerNode.rolloffFactor = t
                }
            }
            )
              , tu = (ho = Mt,
            (t,{disableNormalization: e, imag: s, real: n})=>{
                var i = s instanceof Float32Array ? s : new Float32Array(s)
                  , n = n instanceof Float32Array ? n : new Float32Array(n)
                  , e = t.createPeriodicWave(n, i, {
                    disableNormalization: e
                });
                if (Array.from(s).length < 2)
                    throw ho();
                return e
            }
            )
              , eu = (io = tu,
            ro = po = Ko = gs,
            oo = new WeakSet,
            class ao {
                constructor(t, e) {
                    t = ro(t),
                    e = (t=>{
                        var {imag: e, real: s} = t;
                        return void 0 === e ? void 0 === s ? {
                            ...t,
                            imag: [0, 0],
                            real: [0, 0]
                        } : {
                            ...t,
                            imag: Array.from(s, ()=>0),
                            real: s
                        } : void 0 === s ? {
                            ...t,
                            imag: e,
                            real: Array.from(e, ()=>0)
                        } : {
                            ...t,
                            imag: e,
                            real: s
                        }
                    }
                    )({
                        ...Qe,
                        ...e
                    }),
                    e = io(t, e);
                    return oo.add(e),
                    e
                }
                static[Symbol.hasInstance](t) {
                    return null !== t && "object" == typeof t && Object.getPrototypeOf(t) === ao.prototype || oo.has(t)
                }
            }
            )
              , su = ((u,y,x,w,p,d)=>{
                const b = 16385
                  , T = new Float32Array([1, 1])
                  , S = Math.PI / 2
                  , k = {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete"
                }
                  , C = {
                    ...k,
                    oversample: "none"
                }
                  , f = (t,e,s,n,i)=>{
                    if (1 === e)
                        return ((t,e,s,n)=>{
                            const i = new Float32Array(b)
                              , r = new Float32Array(b);
                            for (let t = 0; t < b; t += 1) {
                                const e = t / 16384 * S;
                                i[t] = Math.cos(e),
                                r[t] = Math.sin(e)
                            }
                            const o = x(t, {
                                ...k,
                                gain: 0
                            })
                              , a = w(t, {
                                ...C,
                                curve: i
                            })
                              , h = w(t, {
                                ...C,
                                curve: T
                            })
                              , c = x(t, {
                                ...k,
                                gain: 0
                            })
                              , l = w(t, {
                                ...C,
                                curve: r
                            });
                            return {
                                connectGraph() {
                                    e.connect(o),
                                    e.connect(void 0 === h.inputs ? h : h.inputs[0]),
                                    e.connect(c),
                                    h.connect(s),
                                    s.connect(void 0 === a.inputs ? a : a.inputs[0]),
                                    s.connect(void 0 === l.inputs ? l : l.inputs[0]),
                                    a.connect(o.gain),
                                    l.connect(c.gain),
                                    o.connect(n, 0, 0),
                                    c.connect(n, 0, 1)
                                },
                                disconnectGraph() {
                                    e.disconnect(o),
                                    e.disconnect(void 0 === h.inputs ? h : h.inputs[0]),
                                    e.disconnect(c),
                                    h.disconnect(s),
                                    s.disconnect(void 0 === a.inputs ? a : a.inputs[0]),
                                    s.disconnect(void 0 === l.inputs ? l : l.inputs[0]),
                                    a.disconnect(o.gain),
                                    l.disconnect(c.gain),
                                    o.disconnect(n, 0, 0),
                                    c.disconnect(n, 0, 1)
                                }
                            }
                        }
                        )(t, s, n, i);
                    if (2 === e)
                        return ((t,e,s,n)=>{
                            const i = new Float32Array(b)
                              , r = new Float32Array(b)
                              , o = new Float32Array(b)
                              , a = new Float32Array(b)
                              , h = Math.floor(8192.5);
                            for (let t = 0; t < b; t += 1)
                                if (t > h) {
                                    const y = (t - h) / (16384 - h) * S;
                                    i[t] = Math.cos(y),
                                    r[t] = Math.sin(y),
                                    o[t] = 0,
                                    a[t] = 1
                                } else {
                                    const y = t / (16384 - h) * S;
                                    i[t] = 1,
                                    r[t] = 0,
                                    o[t] = Math.cos(y),
                                    a[t] = Math.sin(y)
                                }
                            const c = y(t, {
                                channelCount: 2,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                numberOfOutputs: 2
                            })
                              , l = x(t, {
                                ...k,
                                gain: 0
                            })
                              , u = w(t, {
                                ...C,
                                curve: i
                            })
                              , p = x(t, {
                                ...k,
                                gain: 0
                            })
                              , d = w(t, {
                                ...C,
                                curve: r
                            })
                              , f = w(t, {
                                ...C,
                                curve: T
                            })
                              , _ = x(t, {
                                ...k,
                                gain: 0
                            })
                              , m = w(t, {
                                ...C,
                                curve: o
                            })
                              , g = x(t, {
                                ...k,
                                gain: 0
                            })
                              , v = w(t, {
                                ...C,
                                curve: a
                            });
                            return {
                                connectGraph() {
                                    e.connect(c),
                                    e.connect(void 0 === f.inputs ? f : f.inputs[0]),
                                    c.connect(l, 0),
                                    c.connect(p, 0),
                                    c.connect(_, 1),
                                    c.connect(g, 1),
                                    f.connect(s),
                                    s.connect(void 0 === u.inputs ? u : u.inputs[0]),
                                    s.connect(void 0 === d.inputs ? d : d.inputs[0]),
                                    s.connect(void 0 === m.inputs ? m : m.inputs[0]),
                                    s.connect(void 0 === v.inputs ? v : v.inputs[0]),
                                    u.connect(l.gain),
                                    d.connect(p.gain),
                                    m.connect(_.gain),
                                    v.connect(g.gain),
                                    l.connect(n, 0, 0),
                                    _.connect(n, 0, 0),
                                    p.connect(n, 0, 1),
                                    g.connect(n, 0, 1)
                                },
                                disconnectGraph() {
                                    e.disconnect(c),
                                    e.disconnect(void 0 === f.inputs ? f : f.inputs[0]),
                                    c.disconnect(l, 0),
                                    c.disconnect(p, 0),
                                    c.disconnect(_, 1),
                                    c.disconnect(g, 1),
                                    f.disconnect(s),
                                    s.disconnect(void 0 === u.inputs ? u : u.inputs[0]),
                                    s.disconnect(void 0 === d.inputs ? d : d.inputs[0]),
                                    s.disconnect(void 0 === m.inputs ? m : m.inputs[0]),
                                    s.disconnect(void 0 === v.inputs ? v : v.inputs[0]),
                                    u.disconnect(l.gain),
                                    d.disconnect(p.gain),
                                    m.disconnect(_.gain),
                                    v.disconnect(g.gain),
                                    l.disconnect(n, 0, 0),
                                    _.disconnect(n, 0, 0),
                                    p.disconnect(n, 0, 1),
                                    g.disconnect(n, 0, 1)
                                }
                            }
                        }
                        )(t, s, n, i);
                    throw p()
                }
                ;
                return (e,{channelCount: t, channelCountMode: s, pan: n, ...i})=>{
                    if ("max" === s)
                        throw p();
                    const r = u(e, {
                        ...i,
                        channelCount: 1,
                        channelCountMode: s,
                        numberOfInputs: 2
                    })
                      , o = x(e, {
                        ...i,
                        channelCount: t,
                        channelCountMode: s,
                        gain: 1
                    })
                      , a = x(e, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: n
                    });
                    let {connectGraph: h, disconnectGraph: c} = f(e, t, o, a, r);
                    Object.defineProperty(a.gain, "defaultValue", {
                        get: ()=>0
                    }),
                    Object.defineProperty(a.gain, "maxValue", {
                        get: ()=>1
                    }),
                    Object.defineProperty(a.gain, "minValue", {
                        get: ()=>-1
                    });
                    t = {
                        get bufferSize() {},
                        get channelCount() {
                            return o.channelCount
                        },
                        set channelCount(t) {
                            o.channelCount !== t && (l && c(),
                            {connectGraph: h, disconnectGraph: c} = f(e, t, o, a, r),
                            l && h()),
                            o.channelCount = t
                        },
                        get channelCountMode() {
                            return o.channelCountMode
                        },
                        set channelCountMode(t) {
                            if ("clamped-max" === t || "max" === t)
                                throw p();
                            o.channelCountMode = t
                        },
                        get channelInterpretation() {
                            return o.channelInterpretation
                        },
                        set channelInterpretation(t) {
                            o.channelInterpretation = t
                        },
                        get context() {
                            return o.context
                        },
                        get inputs() {
                            return [o]
                        },
                        get numberOfInputs() {
                            return o.numberOfInputs
                        },
                        get numberOfOutputs() {
                            return o.numberOfOutputs
                        },
                        get pan() {
                            return a.gain
                        },
                        addEventListener: (...t)=>o.addEventListener(t[0], t[1], t[2]),
                        dispatchEvent: (...t)=>o.dispatchEvent(t[0]),
                        removeEventListener: (...t)=>o.removeEventListener(t[0], t[1], t[2])
                    };
                    let l = !1;
                    return d(Ne(t, r), ()=>{
                        h(),
                        l = !0
                    }
                    , ()=>{
                        c(),
                        l = !1
                    }
                    )
                }
            }
            )(gl, Ve, je, Yl, We, _l)
              , nu = (so = su,
            no = We,
            (t,e)=>{
                const s = e.channelCountMode;
                if ("clamped-max" === s)
                    throw no();
                if (void 0 === t.createStereoPanner)
                    return so(t, e);
                t = t.createStereoPanner();
                return Oe(t, e),
                Ee(t, e, "pan"),
                Object.defineProperty(t, "channelCountMode", {
                    get: ()=>s,
                    set: t=>{
                        if (t !== s)
                            throw no()
                    }
                }),
                t
            }
            )
              , iu = (Hr = rl,
            Kr = Jt,
            to = al,
            ()=>{
                const r = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = r.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = Kr(t);
                            var i = Dt(n, e);
                            if (!i) {
                                const Hr = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    pan: n.pan.value
                                };
                                n = Jr(e, Hr)
                            }
                            return r.set(e, n),
                            i ? await Hr(e, t.pan, n.pan, s) : await to(e, t.pan, n.pan, s),
                            Qt(n) ? await eo(t, e, n.inputs[0], s) : await eo(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , ru = (Uc = As,
            Qr = cl,
            Zr = Jr = nu,
            Xr = iu,
            class extends Uc {
                constructor(t, e) {
                    var s = Yr(t)
                      , e = {
                        ...Ze,
                        ...e
                    }
                      , e = Zr(s, e)
                      , s = $r(s);
                    super(t, !1, e, s ? Xr() : null),
                    this._pan = Qr(this, s, e.pan)
                }
                get pan() {
                    return this._pan
                }
            }
            )
              , ou = (Ur = Jt,
            Gr = eo = _s,
            ()=>{
                const i = new WeakMap;
                return {
                    render(t, e, s) {
                        var n = i.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(t,e,s)=>{
                            let n = Ur(t);
                            if (!Dt(n, e)) {
                                const Ur = {
                                    channelCount: n.channelCount,
                                    channelCountMode: n.channelCountMode,
                                    channelInterpretation: n.channelInterpretation,
                                    curve: n.curve,
                                    oversample: n.oversample
                                };
                                n = Br(e, Ur)
                            }
                            return i.set(e, n),
                            Qt(n) ? await Gr(t, e, n.inputs[0], s) : await Gr(t, e, n, s),
                            n
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , au = (Uc = As,
            Nr = be,
            Pr = Br = Yl,
            jr = ou,
            Lr = Yr = gs,
            zr = $r = ys,
            Wr = dl,
            class extends Uc {
                constructor(t, e) {
                    var s = Lr(t)
                      , e = {
                        ...Xe,
                        ...e
                    }
                      , e = Pr(s, e);
                    super(t, !0, e, zr(s) ? jr() : null),
                    this._isCurveNullified = !1,
                    this._nativeWaveShaperNode = e,
                    Wr(this, 1)
                }
                get curve() {
                    return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve
                }
                set curve(t) {
                    if (null === t)
                        this._isCurveNullified = !0,
                        this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
                    else {
                        if (t.length < 2)
                            throw Nr();
                        this._isCurveNullified = !1,
                        this._nativeWaveShaperNode.curve = t
                    }
                }
                get oversample() {
                    return this._nativeWaveShaperNode.oversample
                }
                set oversample(t) {
                    this._nativeWaveShaperNode.oversample = t
                }
            }
            )
              , hu = null !== (Uc = ps) && Uc.isSecureContext
              , cu = (Vr = ps,
            (t,e,s)=>{
                Object.defineProperties(Vr, {
                    currentFrame: {
                        configurable: !0,
                        get: ()=>Math.round(t * e)
                    },
                    currentTime: {
                        configurable: !0,
                        get: ()=>t
                    }
                });
                try {
                    return s()
                } finally {
                    null !== Vr && (delete Vr.currentFrame,
                    delete Vr.currentTime)
                }
            }
            )
              , lu = new WeakMap
              , uu = (Fr = lu,
            Ir = vs,
            t=>{
                let e = Fr.get(t);
                if (void 0 !== e)
                    return e;
                if (null === Ir)
                    throw new Error("Missing the native OfflineAudioContext constructor.");
                return e = new Ir(1,1,44100),
                Fr.set(t, e),
                e
            }
            )
              , pu = hu ? ((r,o,a,l,u,p,d,f,_,m,g,v,y)=>{
                let x = 0;
                return (e,s,h={
                    credentials: "omit"
                })=>{
                    const t = g.get(e);
                    if (void 0 !== t && t.has(s))
                        return Promise.resolve();
                    const n = m.get(e);
                    if (void 0 !== n) {
                        const r = n.get(s);
                        if (void 0 !== r)
                            return r
                    }
                    const c = p(e)
                      , i = void 0 === c.audioWorklet ? u(s).then(([t,e])=>{
                        var [t,e] = mt(t, e);
                        return a(`${t};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${e}\n})})(window,'_AWGS')`)
                    }
                    ).then(()=>{
                        const t = y._AWGS.pop();
                        if (void 0 === t)
                            throw new SyntaxError;
                        l(c.currentTime, c.sampleRate, ()=>t(class {
                        }
                        , void 0, (t,e)=>{
                            if ("" === t.trim())
                                throw o();
                            const s = pt.get(c);
                            if (void 0 !== s) {
                                if (s.has(t))
                                    throw o();
                                vt(e),
                                gt(e.parameterDescriptors),
                                s.set(t, e)
                            } else
                                vt(e),
                                gt(e.parameterDescriptors),
                                pt.set(c, new Map([[t, e]]))
                        }
                        , c.sampleRate, void 0, void 0))
                    }
                    ) : Promise.all([u(s), Promise.resolve(r(v, v))]).then(([[t,e],s])=>{
                        const n = x + 1;
                        x = n;
                        const [i,r] = mt(t, e)
                          , o = new Blob([`${i};((AudioWorkletProcessor,registerProcessor)=>{${r}\n})(${s ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${s ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${s ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac ${n}',class extends AudioWorkletProcessor{process(){return !1}})`],{
                            type: "application/javascript; charset=utf-8"
                        })
                          , a = URL.createObjectURL(o);
                        return c.audioWorklet.addModule(a, h).then(()=>{
                            if (f(c))
                                return c;
                            const t = d(c);
                            return t.audioWorklet.addModule(a, h).then(()=>t)
                        }
                        ).then(t=>{
                            if (null === _)
                                throw new SyntaxError;
                            try {
                                new _(t,`__sac ${n}`)
                            } catch {
                                throw new SyntaxError
                            }
                        }
                        ).finally(()=>URL.revokeObjectURL(a))
                    }
                    );
                    return void 0 === n ? m.set(e, new Map([[s, i]])) : n.set(s, i),
                    i.then(()=>{
                        const t = g.get(e);
                        void 0 === t ? g.set(e, new Set([s])) : t.add(s)
                    }
                    ).finally(()=>{
                        const t = m.get(e);
                        void 0 !== t && t.delete(s)
                    }
                    ),
                    i
                }
            }
            )(us, We, (qr = ps,
            i=>new Promise((t,r)=>{
                if (null !== qr) {
                    const e = qr.document.head;
                    if (null === e)
                        r(new SyntaxError);
                    else {
                        const s = qr.document.createElement("script")
                          , n = new Blob([i],{
                            type: "application/javascript"
                        })
                          , o = URL.createObjectURL(n)
                          , a = qr.onerror
                          , h = ()=>{
                            qr.onerror = a,
                            URL.revokeObjectURL(o)
                        }
                        ;
                        qr.onerror = (t,e,s,n,i)=>e === o || e === qr.location.href && 1 === s && 1 === n ? (h(),
                        r(i),
                        !1) : null !== a ? a(t, e, s, n, i) : void 0,
                        s.onerror = ()=>{
                            h(),
                            r(new SyntaxError)
                        }
                        ,
                        s.onload = ()=>{
                            h(),
                            t()
                        }
                        ,
                        s.src = o,
                        s.type = "module",
                        e.appendChild(s)
                    }
                } else
                    r(new SyntaxError)
            }
            )), cu, async t=>{
                try {
                    const e = await fetch(t);
                    if (e.ok)
                        return [await e.text(), e.url]
                } catch {}
                throw new DOMException("","AbortError")
            }
            , gs, uu, ys, Cs, new WeakMap, new WeakMap, (Er = Cs,
            Rr = vs,
            async()=>{
                if (null === Er)
                    return !0;
                if (null === Rr)
                    return !1;
                const t = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{
                    type: "application/javascript; charset=utf-8"
                })
                  , e = new Rr(1,128,44100)
                  , s = URL.createObjectURL(t);
                let n = !1
                  , i = !1;
                try {
                    await e.audioWorklet.addModule(s);
                    const Rr = new Er(e,"a",{
                        numberOfOutputs: 0
                    })
                      , t = e.createOscillator();
                    Rr.port.onmessage = ()=>n = !0,
                    Rr.onprocessorerror = ()=>i = !0,
                    t.connect(Rr),
                    t.start(0),
                    await e.startRendering()
                } catch {} finally {
                    URL.revokeObjectURL(s)
                }
                return n && !i
            }
            ), ps) : void 0
              , du = (Or = Ts,
            Mr = ys,
            t=>Or(t) || Mr(t))
              , fu = (xr = Kc,
            wr = us,
            br = new WeakSet,
            Sr = du,
            kr = Ot,
            Cr = Ae,
            Ar = tl,
            Dr = el,
            (t,r)=>{
                const o = Sr(t) ? t : Tr(t);
                if (br.has(r)) {
                    const xr = new DOMException("","DataCloneError");
                    return Promise.reject(xr)
                }
                try {
                    br.add(r)
                } catch {}
                return wr(Cr, ()=>Cr(o)) ? o.decodeAudioData(r).then(t=>(ge(r).catch(()=>{}
                ),
                wr(kr, ()=>kr(t)) || Dr(t),
                xr.add(t),
                t)) : new Promise((e,s)=>{
                    const n = async()=>{
                        try {
                            await ge(r)
                        } catch {}
                    }
                      , i = t=>{
                        s(t),
                        n()
                    }
                    ;
                    try {
                        o.decodeAudioData(r, t=>{
                            "function" != typeof t.copyFromChannel && (Ar(t),
                            Et(t)),
                            xr.add(t),
                            n().then(()=>e(t))
                        }
                        , t=>{
                            i(null === t ? new DOMException("","EncodingError") : t)
                        }
                        )
                    } catch (t) {
                        i(t)
                    }
                }
                )
            }
            )
              , _u = (er = pu,
            sr = Jc,
            nr = sl,
            ir = ll,
            rr = fl,
            or = yl,
            ar = wl,
            hr = kl,
            cr = Dl,
            lr = fu,
            ur = Ml,
            pr = ql,
            dr = Il,
            fr = Ll,
            _r = Ql,
            mr = Kl,
            gr = eu,
            vr = ru,
            yr = au,
            class extends Bl {
                constructor(t, e) {
                    super(t, e),
                    this._nativeContext = t,
                    this._audioWorklet = void 0 === er ? void 0 : {
                        addModule: (t,e)=>er(this, t, e)
                    }
                }
                get audioWorklet() {
                    return this._audioWorklet
                }
                createAnalyser() {
                    return new sr(this)
                }
                createBiquadFilter() {
                    return new rr(this)
                }
                createBuffer(t, e, s) {
                    return new nr({
                        length: e,
                        numberOfChannels: t,
                        sampleRate: s
                    })
                }
                createBufferSource() {
                    return new ir(this)
                }
                createChannelMerger(t=6) {
                    return new or(this,{
                        numberOfInputs: t
                    })
                }
                createChannelSplitter(t=6) {
                    return new ar(this,{
                        numberOfOutputs: t
                    })
                }
                createConstantSource() {
                    return new hr(this)
                }
                createConvolver() {
                    return new cr(this)
                }
                createDelay(t=1) {
                    return new ur(this,{
                        maxDelayTime: t
                    })
                }
                createDynamicsCompressor() {
                    return new pr(this)
                }
                createGain() {
                    return new dr(this)
                }
                createIIRFilter(t, e) {
                    return new fr(this,{
                        feedback: e,
                        feedforward: t
                    })
                }
                createOscillator() {
                    return new _r(this)
                }
                createPanner() {
                    return new mr(this)
                }
                createPeriodicWave(t, e, s={
                    disableNormalization: !1
                }) {
                    return new gr(this,{
                        ...s,
                        imag: e,
                        real: t
                    })
                }
                createStereoPanner() {
                    return new vr(this)
                }
                createWaveShaper() {
                    return new yr(this)
                }
                decodeAudioData(t, e, s) {
                    return lr(this._nativeContext, t).then(t=>("function" == typeof e && e(t),
                    t), t=>{
                        throw "function" == typeof s && s(t),
                        t
                    }
                    )
                }
            }
            )
              , mu = class extends As {
                constructor(t, e) {
                    const s = Ki(t)
                      , n = s.createMediaElementSource(e.mediaElement);
                    if (tr(s))
                        throw TypeError();
                    super(t, !0, n, null),
                    this._nativeMediaElementAudioSourceNode = n
                }
                get mediaElement() {
                    return this._nativeMediaElementAudioSourceNode.mediaElement
                }
            }
              , gu = class extends As {
                constructor(t, e) {
                    var s = Hi(t);
                    if (Ji(s))
                        throw new TypeError;
                    e = ((t,e)=>{
                        t = t.createMediaStreamDestination();
                        return Oe(t, e),
                        1 === t.numberOfOutputs && Object.defineProperty(t, "numberOfOutputs", {
                            get: ()=>0
                        }),
                        t
                    }
                    )(s, {
                        ...Ce,
                        ...e
                    });
                    super(t, !1, e, null),
                    this._nativeMediaStreamAudioDestinationNode = e
                }
                get stream() {
                    return this._nativeMediaStreamAudioDestinationNode.stream
                }
            }
              , vu = class extends As {
                constructor(t, e) {
                    var s = Yi(t)
                      , e = ((t,{mediaStream: e})=>{
                        const s = e.getAudioTracks();
                        s.sort((t,e)=>t.id < e.id ? -1 : t.id > e.id ? 1 : 0);
                        var n = s.slice(0, 1)
                          , n = t.createMediaStreamSource(new MediaStream(n));
                        return Object.defineProperty(n, "mediaStream", {
                            value: e
                        }),
                        n
                    }
                    )(s, e);
                    if ($i(s))
                        throw new TypeError;
                    super(t, !0, e, null),
                    this._nativeMediaStreamAudioSourceNode = e
                }
                get mediaStream() {
                    return this._nativeMediaStreamAudioSourceNode.mediaStream
                }
            }
              , yu = (Zi = be,
            Xi = $i = Ji = tr = ys,
            (t,{mediaStreamTrack: e})=>{
                if ("function" == typeof t.createMediaStreamTrackSource)
                    return t.createMediaStreamTrackSource(e);
                var s = new MediaStream([e])
                  , s = t.createMediaStreamSource(s);
                if ("audio" !== e.kind)
                    throw Zi();
                if (Xi(t))
                    throw new TypeError;
                return s
            }
            )
              , xu = (Jc = As,
            Gi = yu,
            Qi = Yi = Hi = Ki = Tr = gs,
            class extends Jc {
                constructor(t, e) {
                    var s = Qi(t);
                    super(t, !0, Gi(s, e), null)
                }
            }
            )
              , wu = (Jc = _u,
            Ni = be,
            Pi = We,
            ji = ()=>new DOMException("","UnknownError"),
            Li = mu,
            zi = gu,
            Wi = vu,
            Bi = xu,
            Ui = bs,
            class extends Jc {
                constructor(t={}) {
                    if (null === Ui)
                        throw new Error("Missing the native AudioContext constructor.");
                    let e;
                    try {
                        e = new Ui(t)
                    } catch (t) {
                        if (12 === t.code && "sampleRate is not in range" === t.message)
                            throw Pi();
                        throw t
                    }
                    if (null === e)
                        throw ji();
                    if (void 0 !== (n = t.latencyHint) && "number" != typeof n && ("string" != typeof n || "balanced" !== n && "interactive" !== n && "playback" !== n))
                        throw new TypeError(`The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
                    if (void 0 !== t.sampleRate && e.sampleRate !== t.sampleRate)
                        throw Pi();
                    super(e, 2);
                    var s = t["latencyHint"]
                      , n = e["sampleRate"];
                    if (this._baseLatency = "number" == typeof e.baseLatency ? e.baseLatency : "balanced" === s ? 512 / n : "interactive" === s || void 0 === s ? 256 / n : "playback" === s ? 1024 / n : 128 * Math.max(2, Math.min(128, Math.round(s * n / 128))) / n,
                    this._nativeAudioContext = e,
                    "webkitAudioContext" === Ui.name ? (this._nativeGainNode = e.createGain(),
                    this._nativeOscillatorNode = e.createOscillator(),
                    this._nativeGainNode.gain.value = 1e-37,
                    this._nativeOscillatorNode.connect(this._nativeGainNode).connect(e.destination),
                    this._nativeOscillatorNode.start()) : (this._nativeGainNode = null,
                    this._nativeOscillatorNode = null),
                    this._state = null,
                    "running" === e.state) {
                        this._state = "suspended";
                        const t = ()=>{
                            "suspended" === this._state && (this._state = null),
                            e.removeEventListener("statechange", t)
                        }
                        ;
                        e.addEventListener("statechange", t)
                    }
                }
                get baseLatency() {
                    return this._baseLatency
                }
                get state() {
                    return null !== this._state ? this._state : this._nativeAudioContext.state
                }
                close() {
                    return "closed" === this.state ? this._nativeAudioContext.close().then(()=>{
                        throw Ni()
                    }
                    ) : ("suspended" === this._state && (this._state = null),
                    this._nativeAudioContext.close().then(()=>{
                        null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(),
                        this._nativeGainNode.disconnect(),
                        this._nativeOscillatorNode.disconnect()),
                        Lt(this)
                    }
                    ))
                }
                createMediaElementSource(t) {
                    return new Li(this,{
                        mediaElement: t
                    })
                }
                createMediaStreamDestination() {
                    return new zi(this)
                }
                createMediaStreamSource(t) {
                    return new Wi(this,{
                        mediaStream: t
                    })
                }
                createMediaStreamTrackSource(t) {
                    return new Bi(this,{
                        mediaStreamTrack: t
                    })
                }
                resume() {
                    return "suspended" === this._state ? new Promise((t,e)=>{
                        const s = ()=>{
                            this._nativeAudioContext.removeEventListener("statechange", s),
                            "running" === this._nativeAudioContext.state ? t() : this.resume().then(t, e)
                        }
                        ;
                        this._nativeAudioContext.addEventListener("statechange", s)
                    }
                    ) : this._nativeAudioContext.resume().catch(t=>{
                        if (void 0 === t || 15 === t.code)
                            throw Ni();
                        throw t
                    }
                    )
                }
                suspend() {
                    return this._nativeAudioContext.suspend().catch(t=>{
                        if (void 0 === t)
                            throw Ni();
                        throw t
                    }
                    )
                }
            }
            )
              , bu = (Vi = Wl,
            t=>{
                t = Vi.get(t);
                if (void 0 === t)
                    throw new Error("The context has no set of AudioWorkletNodes.");
                return t
            }
            )
              , Tu = (t,e)=>{
                Ii(t).add(e)
            }
              , Su = (Fi = Mt,
            (t,e,s=0,n=0)=>{
                const i = t[s];
                if (void 0 === i)
                    throw Fi();
                return ie(e) ? i.connect(e, 0, n) : i.connect(e, 0)
            }
            )
              , ku = (qi = Ii = bu,
            (t,e)=>{
                qi(t).delete(e)
            }
            )
              , Cu = (Ri = Mt,
            (t,e,s,n=0)=>void 0 === e ? t.forEach(t=>t.disconnect()) : "number" == typeof e ? ye(Ri, t, e).disconnect() : ie(e) ? void 0 === s ? t.forEach(t=>t.disconnect(e)) : void 0 === n ? ye(Ri, t, s).disconnect(e, 0) : ye(Ri, t, s).disconnect(e, 0, n) : void 0 === s ? t.forEach(t=>t.disconnect(e)) : ye(Ri, t, s).disconnect(e, 0))
              , Au = new WeakMap
              , Du = (Mi = Au,
            Ei = yt,
            t=>Ei(Mi, t))
              , Ou = (vi = Mt,
            yi = be,
            Si = ze,
            Di = Du,
            (o,t,e,a)=>{
                if (0 === a.numberOfInputs && 0 === a.numberOfOutputs)
                    throw ki();
                const h = Array.isArray(a.outputChannelCount) ? a.outputChannelCount : Array.from(a.outputChannelCount);
                if (h.some(t=>t < 1))
                    throw ki();
                if (h.length !== a.numberOfOutputs)
                    throw vi();
                if ("explicit" !== a.channelCountMode)
                    throw ki();
                const c = a.channelCount * a.numberOfInputs
                  , s = h.reduce((t,e)=>t + e, 0)
                  , n = void 0 === e.parameterDescriptors ? 0 : e.parameterDescriptors.length;
                if (6 < c + n || 6 < s)
                    throw ki();
                const i = new MessageChannel
                  , l = []
                  , u = [];
                for (let t = 0; t < a.numberOfInputs; t += 1)
                    l.push(Ti(o, {
                        channelCount: a.channelCount,
                        channelCountMode: a.channelCountMode,
                        channelInterpretation: a.channelInterpretation,
                        gain: 1
                    })),
                    u.push(wi(o, {
                        channelCount: a.channelCount,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        numberOfOutputs: a.channelCount
                    }));
                const p = [];
                if (void 0 !== e.parameterDescriptors)
                    for (const {defaultValue: gi, maxValue: vi, minValue: yi, name: xi} of e.parameterDescriptors) {
                        const wi = bi(o, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: void 0 !== a.parameterData[xi] ? a.parameterData[xi] : void 0 === gi ? 0 : gi
                        });
                        Object.defineProperties(wi.offset, {
                            defaultValue: {
                                get: ()=>void 0 === gi ? 0 : gi
                            },
                            maxValue: {
                                get: ()=>void 0 === vi ? Ft : vi
                            },
                            minValue: {
                                get: ()=>void 0 === yi ? qt : yi
                            }
                        }),
                        p.push(wi)
                    }
                const d = xi(o, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: Math.max(1, c + n)
                })
                  , f = Fe(t, o.sampleRate)
                  , _ = Si(o, f, c + n, Math.max(1, s))
                  , r = wi(o, {
                    channelCount: Math.max(1, s),
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    numberOfOutputs: Math.max(1, s)
                })
                  , m = [];
                for (let t = 0; t < a.numberOfOutputs; t += 1)
                    m.push(xi(o, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: h[t]
                    }));
                for (let e = 0; e < a.numberOfInputs; e += 1) {
                    l[e].connect(u[e]);
                    for (let t = 0; t < a.channelCount; t += 1)
                        u[e].connect(d, t, e * a.channelCount + t)
                }
                const g = new ae(void 0 === e.parameterDescriptors ? [] : e.parameterDescriptors.map(({name: t},e)=>{
                    const s = p[e];
                    return s.connect(d, 0, c + e),
                    s.start(0),
                    [t, s.offset]
                }
                ));
                d.connect(_);
                let v = a.channelInterpretation
                  , y = null;
                const x = 0 === a.numberOfOutputs ? [_] : m
                  , w = {
                    get bufferSize() {
                        return f
                    },
                    get channelCount() {
                        return a.channelCount
                    },
                    set channelCount(t) {
                        throw yi()
                    },
                    get channelCountMode() {
                        return a.channelCountMode
                    },
                    set channelCountMode(t) {
                        throw yi()
                    },
                    get channelInterpretation() {
                        return v
                    },
                    set channelInterpretation(t) {
                        for (const e of l)
                            e.channelInterpretation = t;
                        v = t
                    },
                    get context() {
                        return _.context
                    },
                    get inputs() {
                        return l
                    },
                    get numberOfInputs() {
                        return a.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return a.numberOfOutputs
                    },
                    get onprocessorerror() {
                        return y
                    },
                    set onprocessorerror(t) {
                        "function" == typeof y && w.removeEventListener("processorerror", y),
                        y = "function" == typeof t ? t : null,
                        "function" == typeof y && w.addEventListener("processorerror", y)
                    },
                    get parameters() {
                        return g
                    },
                    get port() {
                        return i.port2
                    },
                    addEventListener: (...t)=>_.addEventListener(t[0], t[1], t[2]),
                    connect: gi.bind(null, x),
                    disconnect: Ci.bind(null, x),
                    dispatchEvent: (...t)=>_.dispatchEvent(t[0]),
                    removeEventListener: (...t)=>_.removeEventListener(t[0], t[1], t[2])
                }
                  , b = new Map;
                var T, S;
                i.port1.addEventListener = (T = i.port1.addEventListener,
                (...t)=>{
                    if ("message" === t[0]) {
                        const s = "function" == typeof t[1] ? t[1] : "object" == typeof t[1] && null !== t[1] && "function" == typeof t[1].handleEvent ? t[1].handleEvent : null;
                        var e;
                        null !== s && (void 0 !== (e = b.get(t[1])) ? t[1] = e : (t[1] = t=>{
                            Ai(o.currentTime, o.sampleRate, ()=>s(t))
                        }
                        ,
                        b.set(s, t[1])))
                    }
                    return T.call(i.port1, t[0], t[1], t[2])
                }
                ),
                i.port1.removeEventListener = (S = i.port1.removeEventListener,
                (...t)=>{
                    var e;
                    return "message" !== t[0] || void 0 !== (e = b.get(t[1])) && (b.delete(t[1]),
                    t[1] = e),
                    S.call(i.port1, t[0], t[1], t[2])
                }
                );
                let k = null;
                Object.defineProperty(i.port1, "onmessage", {
                    get: ()=>k,
                    set: t=>{
                        "function" == typeof k && i.port1.removeEventListener("message", k),
                        k = "function" == typeof t ? t : null,
                        "function" == typeof k && (i.port1.addEventListener("message", k),
                        i.port1.start())
                    }
                }),
                e.prototype.port = i.port1;
                let C = null;
                const A = ((t,e,s,n)=>{
                    let i = dt.get(t);
                    void 0 === i && (i = new WeakMap,
                    dt.set(t, i));
                    t = (async()=>{
                        var t;
                        return new s((t = n,
                        await new Promise((e,s)=>{
                            const {port1: n, port2: i} = new MessageChannel;
                            n.onmessage = ({data: t})=>{
                                n.close(),
                                i.close(),
                                e(t)
                            }
                            ,
                            n.onmessageerror = ({data: t})=>{
                                n.close(),
                                i.close(),
                                s(t)
                            }
                            ,
                            i.postMessage(t)
                        }
                        )))
                    }
                    )();
                    return i.set(e, t),
                    t
                }
                )(o, w, e, a);
                A.then(t=>C = t);
                const D = ue(a.numberOfInputs, a.channelCount)
                  , O = ue(a.numberOfOutputs, h)
                  , M = void 0 === e.parameterDescriptors ? [] : e.parameterDescriptors.reduce((t,{name: e})=>({
                    ...t,
                    [e]: new Float32Array(128)
                }), {});
                let E = !0;
                const R = ()=>{
                    0 < a.numberOfOutputs && _.disconnect(r);
                    for (let e = 0, s = 0; e < a.numberOfOutputs; e += 1) {
                        var n = m[e];
                        for (let t = 0; t < h[e]; t += 1)
                            r.disconnect(n, s + t, t);
                        s += h[e]
                    }
                }
                  , q = new Map;
                let F = !(_.onaudioprocess = ({inputBuffer: s, outputBuffer: i})=>{
                    if (null !== C) {
                        const r = Di(w);
                        for (let n = 0; n < f; n += 128) {
                            for (let e = 0; e < a.numberOfInputs; e += 1)
                                for (let t = 0; t < a.channelCount; t += 1)
                                    ce(s, D[e], t, t, n);
                            void 0 !== e.parameterDescriptors && e.parameterDescriptors.forEach(({name: t},e)=>{
                                ce(s, M, t, c + e, n)
                            }
                            );
                            for (let e = 0; e < a.numberOfInputs; e += 1)
                                for (let t = 0; t < h[e]; t += 1)
                                    0 === O[e][t].byteLength && (O[e][t] = new Float32Array(128));
                            try {
                                const s = D.map((t,e)=>{
                                    if (0 < r[e].size)
                                        return q.set(e, f / 128),
                                        t;
                                    var s = q.get(e);
                                    return void 0 === s ? [] : (t.every(t=>t.every(t=>0 === t)) && (1 === s ? q.delete(e) : q.set(e, s - 1)),
                                    t)
                                }
                                )
                                  , t = Ai(o.currentTime + n / o.sampleRate, o.sampleRate, ()=>C.process(s, O, M));
                                E = t;
                                for (let e = 0, s = 0; e < a.numberOfOutputs; e += 1) {
                                    for (let t = 0; t < h[e]; t += 1)
                                        le(i, O[e], t, s + t, n);
                                    s += h[e]
                                }
                            } catch (s) {
                                E = !1,
                                w.dispatchEvent(new ErrorEvent("processorerror",{
                                    colno: s.colno,
                                    filename: s.filename,
                                    lineno: s.lineno,
                                    message: s.message
                                }))
                            }
                            if (!E) {
                                for (let e = 0; e < a.numberOfInputs; e += 1) {
                                    l[e].disconnect(u[e]);
                                    for (let t = 0; t < a.channelCount; t += 1)
                                        u[n].disconnect(d, t, e * a.channelCount + t)
                                }
                                if (void 0 !== e.parameterDescriptors) {
                                    const s = e.parameterDescriptors.length;
                                    for (let t = 0; t < s; t += 1) {
                                        const s = p[t];
                                        s.disconnect(d, 0, c + t),
                                        s.stop()
                                    }
                                }
                                d.disconnect(_),
                                _.onaudioprocess = null,
                                (F ? R : N)();
                                break
                            }
                        }
                    }
                }
                );
                const I = Ti(o, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                })
                  , V = ()=>_.connect(I).connect(o.destination)
                  , N = ()=>{
                    _.disconnect(I),
                    I.disconnect()
                }
                ;
                return V(),
                Oi(w, ()=>{
                    if (E) {
                        N(),
                        0 < a.numberOfOutputs && _.connect(r);
                        for (let e = 0, s = 0; e < a.numberOfOutputs; e += 1) {
                            var n = m[e];
                            for (let t = 0; t < h[e]; t += 1)
                                r.connect(n, s + t, t);
                            s += h[e]
                        }
                    }
                    F = !0
                }
                , ()=>{
                    E && (V(),
                    R()),
                    F = !1
                }
                )
            }
            )
              , Mu = (pi = be,
            di = Ou,
            _i = ki = We,
            mi = Oi = _l,
            (t,e,s,n,i,r)=>{
                if (null !== s)
                    try {
                        const di = new s(t,n,r)
                          , _i = new Map;
                        let e = null;
                        if (Object.defineProperties(di, {
                            channelCount: {
                                get: ()=>r.channelCount,
                                set: ()=>{
                                    throw pi()
                                }
                            },
                            channelCountMode: {
                                get: ()=>"explicit",
                                set: ()=>{
                                    throw pi()
                                }
                            },
                            onprocessorerror: {
                                get: ()=>e,
                                set: t=>{
                                    "function" == typeof e && di.removeEventListener("processorerror", e),
                                    e = "function" == typeof t ? t : null,
                                    "function" == typeof e && di.addEventListener("processorerror", e)
                                }
                            }
                        }),
                        di.addEventListener = (a = di.addEventListener,
                        (...e)=>{
                            if ("processorerror" === e[0]) {
                                const di = "function" == typeof e[1] ? e[1] : "object" == typeof e[1] && null !== e[1] && "function" == typeof e[1].handleEvent ? e[1].handleEvent : null;
                                var t;
                                null !== di && (void 0 !== (t = _i.get(e[1])) ? e[1] = t : (e[1] = t=>{
                                    "error" === t.type ? (Object.defineProperties(t, {
                                        type: {
                                            value: "processorerror"
                                        }
                                    }),
                                    di(t)) : di(new ErrorEvent(e[0],{
                                        ...t
                                    }))
                                }
                                ,
                                _i.set(di, e[1])))
                            }
                            return a.call(di, "error", e[1], e[2]),
                            a.call(di, ...e)
                        }
                        ),
                        di.removeEventListener = (o = di.removeEventListener,
                        (...t)=>{
                            if ("processorerror" === t[0]) {
                                const di = _i.get(t[1]);
                                void 0 !== di && (_i.delete(t[1]),
                                t[1] = di)
                            }
                            return o.call(di, "error", t[1], t[2]),
                            o.call(di, t[0], t[1], t[2])
                        }
                        ),
                        0 === r.numberOfOutputs)
                            return di;
                        {
                            const pi = fi(t, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                gain: 0
                            });
                            return di.connect(pi).connect(t.destination),
                            mi(di, ()=>pi.disconnect(), ()=>pi.connect(t.destination))
                        }
                    } catch (t) {
                        if (11 === t.code)
                            throw _i();
                        throw t
                    }
                var o, a;
                if (void 0 === i)
                    throw _i();
                return (t=>{
                    const e = (new MessageChannel)["port1"];
                    try {
                        e.postMessage(t)
                    } finally {
                        e.close()
                    }
                }
                )(r),
                di(t, e, i, r)
            }
            )
              , Eu = ($n = rl,
            Hn = gi = Su,
            Jn = ol,
            Kn = xi = gl,
            ti = wi = Ve,
            ei = bi = Tl,
            si = fi = Ti = je,
            ni = ku,
            ii = Ci = Cu,
            ri = Ai = cu,
            oi = Jt,
            ai = Cs,
            hi = vs,
            ci = al,
            li = _s,
            ui = Nl,
            (r,h,c)=>{
                const l = new WeakMap;
                let u = null;
                return {
                    render(t, e, s) {
                        ni(e, t);
                        var n = l.get(e);
                        return void 0 !== n ? Promise.resolve(n) : (async(o,e,a)=>{
                            let t = oi(o)
                              , s = null;
                            const n = Dt(t, e)
                              , i = Array.isArray(h.outputChannelCount) ? h.outputChannelCount : Array.from(h.outputChannelCount);
                            if (null === ai) {
                                const $n = i.reduce((t,e)=>t + e, 0)
                                  , Jn = ti(e, {
                                    channelCount: Math.max(1, $n),
                                    channelCountMode: "explicit",
                                    channelInterpretation: "discrete",
                                    numberOfOutputs: Math.max(1, $n)
                                })
                                  , ei = [];
                                for (let t = 0; t < o.numberOfOutputs; t += 1)
                                    ei.push(Kn(e, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        numberOfInputs: i[t]
                                    }));
                                const ri = si(e, {
                                    channelCount: h.channelCount,
                                    channelCountMode: h.channelCountMode,
                                    channelInterpretation: h.channelInterpretation,
                                    gain: 1
                                });
                                ri.connect = Hn.bind(null, ei),
                                ri.disconnect = ii.bind(null, ei),
                                s = [Jn, ei, ri]
                            } else
                                n || (t = new ai(e,r));
                            if (l.set(e, null === s ? t : s[2]),
                            null !== s) {
                                if (null === u) {
                                    if (void 0 === c)
                                        throw new Error("Missing the processor constructor.");
                                    if (null === hi)
                                        throw new Error("Missing the native OfflineAudioContext constructor.");
                                    const $n = o.channelCount * o.numberOfInputs
                                      , Hn = void 0 === c.parameterDescriptors ? 0 : c.parameterDescriptors.length
                                      , Jn = $n + Hn
                                      , ii = async()=>{
                                        const s = new hi(Jn,128 * Math.ceil(o.context.length / 128),e.sampleRate)
                                          , n = []
                                          , i = [];
                                        for (let t = 0; t < h.numberOfInputs; t += 1)
                                            n.push(si(s, {
                                                channelCount: h.channelCount,
                                                channelCountMode: h.channelCountMode,
                                                channelInterpretation: h.channelInterpretation,
                                                gain: 1
                                            })),
                                            i.push(ti(s, {
                                                channelCount: h.channelCount,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "discrete",
                                                numberOfOutputs: h.channelCount
                                            }));
                                        const t = await Promise.all(Array.from(o.parameters.values()).map(async t=>{
                                            var e = ei(s, {
                                                channelCount: 1,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "discrete",
                                                offset: t.value
                                            });
                                            return await ci(s, t, e.offset, a),
                                            e
                                        }
                                        ))
                                          , r = Kn(s, {
                                            channelCount: 1,
                                            channelCountMode: "explicit",
                                            channelInterpretation: "speakers",
                                            numberOfInputs: Math.max(1, $n + Hn)
                                        });
                                        for (let e = 0; e < h.numberOfInputs; e += 1) {
                                            n[e].connect(i[e]);
                                            for (let t = 0; t < h.channelCount; t += 1)
                                                i[e].connect(r, t, e * h.channelCount + t)
                                        }
                                        for (const [Hn,Jn] of t.entries())
                                            Jn.connect(r, 0, $n + Hn),
                                            Jn.start(0);
                                        return r.connect(s.destination),
                                        await Promise.all(n.map(t=>li(o, s, t, a))),
                                        ui(s)
                                    }
                                    ;
                                    u = (async(t,s,e,i,r,o,a)=>{
                                        const h = null === s ? 128 * Math.ceil(t.context.length / 128) : s.length
                                          , c = i.channelCount * i.numberOfInputs
                                          , n = r.reduce((t,e)=>t + e, 0)
                                          , l = 0 === n ? null : e.createBuffer(n, h, e.sampleRate);
                                        if (void 0 === o)
                                            throw new Error("Missing the processor constructor.");
                                        const u = Nt(t)
                                          , p = await ((t,e)=>{
                                            t = yt(dt, t),
                                            e = Jt(e);
                                            return yt(t, e)
                                        }
                                        )(e, t)
                                          , d = ue(i.numberOfInputs, i.channelCount)
                                          , f = ue(i.numberOfOutputs, r)
                                          , _ = Array.from(t.parameters.keys()).reduce((t,e)=>({
                                            ...t,
                                            [e]: new Float32Array(128)
                                        }), {});
                                        for (let n = 0; n < h; n += 128) {
                                            if (0 < i.numberOfInputs && null !== s)
                                                for (let e = 0; e < i.numberOfInputs; e += 1)
                                                    for (let t = 0; t < i.channelCount; t += 1)
                                                        ce(s, d[e], t, t, n);
                                            void 0 !== o.parameterDescriptors && null !== s && o.parameterDescriptors.forEach(({name: t},e)=>{
                                                ce(s, _, t, c + e, n)
                                            }
                                            );
                                            for (let e = 0; e < i.numberOfInputs; e += 1)
                                                for (let t = 0; t < r[e]; t += 1)
                                                    0 === f[e][t].byteLength && (f[e][t] = new Float32Array(128));
                                            try {
                                                const t = d.map((t,e)=>0 === u.activeInputs[e].size ? [] : t)
                                                  , s = a(n / e.sampleRate, e.sampleRate, ()=>p.process(t, f, _));
                                                if (null !== l)
                                                    for (let e = 0, s = 0; e < i.numberOfOutputs; e += 1) {
                                                        for (let t = 0; t < r[e]; t += 1)
                                                            le(l, f[e], t, s + t, n);
                                                        s += r[e]
                                                    }
                                                if (!s)
                                                    break
                                            } catch (s) {
                                                t.dispatchEvent(new ErrorEvent("processorerror",{
                                                    colno: s.colno,
                                                    filename: s.filename,
                                                    lineno: s.lineno,
                                                    message: s.message
                                                }));
                                                break
                                            }
                                        }
                                        return l
                                    }
                                    )(o, 0 === Jn ? null : await ii(), e, h, i, c, ri)
                                }
                                const $n = await u
                                  , Hn = Jn(e, {
                                    buffer: null,
                                    channelCount: 2,
                                    channelCountMode: "max",
                                    channelInterpretation: "speakers",
                                    loop: !1,
                                    loopEnd: 0,
                                    loopStart: 0,
                                    playbackRate: 1
                                })
                                  , [ii,oi,ai] = s;
                                null !== $n && (Hn.buffer = $n,
                                Hn.start(0)),
                                Hn.connect(ii);
                                for (let e = 0, s = 0; e < o.numberOfOutputs; e += 1) {
                                    const Jn = oi[e];
                                    for (let t = 0; t < i[e]; t += 1)
                                        ii.connect(Jn, s + t, t);
                                    s += i[e]
                                }
                                return ai
                            }
                            if (n)
                                for (const [Hn,Jn] of o.parameters.entries())
                                    await $n(e, Jn, t.parameters.get(Hn), a);
                            else
                                for (const [$n,Hn] of o.parameters.entries())
                                    await ci(e, Hn, t.parameters.get($n), a);
                            return await li(o, e, t, a),
                            t
                        }
                        )(t, e, s)
                    }
                }
            }
            )
              , Ru = (Yn = lu,
            t=>Yn.get(t))
              , qu = (Xn = Au,
            (t,e)=>{
                Xn.set(t, e)
            }
            )
              , Fu = hu ? (Nn = Tu,
            Pn = cl,
            jn = Eu,
            Ln = Mu,
            zn = Nt,
            Wn = Ru,
            Bn = gs,
            Un = ys,
            Gn = Cs,
            Qn = qu,
            Zn = rs,
            class extends As {
                constructor(t, e, s) {
                    var n;
                    const i = Bn(t)
                      , r = Un(i)
                      , o = {
                        ...s = {
                            ...he,
                            ...s
                        },
                        outputChannelCount: void 0 !== s.outputChannelCount ? s.outputChannelCount : 1 === s.numberOfInputs && 1 === s.numberOfOutputs ? [s.channelCount] : Array.from({
                            length: s.numberOfOutputs
                        }, ()=>1)
                    };
                    (t=>{
                        const {port1: e, port2: s} = new MessageChannel;
                        try {
                            e.postMessage(t)
                        } finally {
                            e.close(),
                            s.close()
                        }
                    }
                    )(o);
                    const a = pt.get(i)
                      , h = null == a ? void 0 : a.get(e)
                      , c = !r && "closed" === i.state && null !== (n = Wn(i)) && void 0 !== n ? n : i
                      , l = Ln(c, r ? null : t.baseLatency, Gn, e, h, o);
                    super(t, !0, l, r ? jn(e, o, h) : null);
                    const u = [];
                    l.parameters.forEach((t,e)=>{
                        t = Pn(this, r, t);
                        u.push([e, t])
                    }
                    ),
                    this._nativeAudioWorkletNode = l,
                    this._onprocessorerror = null,
                    this._parameters = new ae(u),
                    r && Nn(i, this);
                    var e = zn(this)["activeInputs"];
                    Qn(l, e)
                }
                get onprocessorerror() {
                    return this._onprocessorerror
                }
                set onprocessorerror(t) {
                    var e = "function" == typeof t ? Zn(this, t) : null;
                    this._nativeAudioWorkletNode.onprocessorerror = e;
                    var s = this._nativeAudioWorkletNode.onprocessorerror;
                    this._onprocessorerror = null !== s && s === e ? t : s
                }
                get parameters() {
                    return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters
                }
                get port() {
                    return this._nativeAudioWorkletNode.port
                }
            }
            ) : void 0
              , Iu = (In = We,
            Vn = vs,
            (t,e,s)=>{
                if (null === Vn)
                    throw new Error("Missing the native OfflineAudioContext constructor.");
                try {
                    return new Vn(t,e,s)
                } catch (t) {
                    if ("SyntaxError" === t.name)
                        throw In();
                    throw t
                }
            }
            )
              , Vu = ((s,n,i,r,o,a,h,c)=>{
                const l = [];
                return (t,e)=>i(t).render(t, e, l).then(()=>Promise.all(Array.from(r(e)).map(t=>i(t).render(t, e, l)))).then(()=>o(e)).then(t=>("function" != typeof t.copyFromChannel ? (h(t),
                Et(t)) : n(a, ()=>a(t)) || c(t),
                s.add(t),
                t))
            }
            )(Kc, us, fs, bu, Nl, Ot, tl, el)
              , Nu = (En = us,
            Rn = be,
            qn = Iu,
            Fn = Vu,
            class extends _u {
                constructor(t, e, s) {
                    let n;
                    if ("number" == typeof t && void 0 !== e && void 0 !== s)
                        n = {
                            length: e,
                            numberOfChannels: t,
                            sampleRate: s
                        };
                    else {
                        if ("object" != typeof t)
                            throw new Error("The given parameters are not valid.");
                        n = t
                    }
                    const {length: i, numberOfChannels: r, sampleRate: o} = {
                        ...Be,
                        ...n
                    }
                      , a = qn(r, i, o);
                    En(Ae, ()=>Ae(a)) || a.addEventListener("statechange", (()=>{
                        let e = 0;
                        const s = t=>{
                            "running" === this._state && (0 < e ? (a.removeEventListener("statechange", s),
                            t.stopImmediatePropagation(),
                            this._waitForThePromiseToSettle(t)) : e += 1)
                        }
                        ;
                        return s
                    }
                    )()),
                    super(a, r),
                    this._length = i,
                    this._nativeOfflineAudioContext = a,
                    this._state = null
                }
                get length() {
                    return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length
                }
                get state() {
                    return null === this._state ? this._nativeOfflineAudioContext.state : this._state
                }
                startRendering() {
                    return "running" === this._state ? Promise.reject(Rn()) : (this._state = "running",
                    Fn(this.destination, this._nativeOfflineAudioContext).finally(()=>{
                        this._state = null,
                        Lt(this)
                    }
                    ))
                }
                _waitForThePromiseToSettle(t) {
                    null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(t) : setTimeout(()=>this._waitForThePromiseToSettle(t))
                }
            }
            )
              , Pu = (On = ct,
            Mn = Ts,
            t=>{
                var e = On.get(t);
                return Mn(e) || Mn(t)
            }
            )
              , ju = (An = ot,
            Dn = Ss,
            t=>An.has(t) || Dn(t))
              , Lu = (kn = ht,
            Cn = ks,
            t=>kn.has(t) || Cn(t))
              , zu = (Tn = ct,
            Sn = ys,
            t=>{
                var e = Tn.get(t);
                return Sn(e) || Sn(t)
            }
            )
              , Wu = ()=>(async(t,e,s,n,i,r,o,a,h,c,l,u,p,d,f,_)=>!!(t(e, e) && t(s, s) && t(i, i) && t(r, r) && t(a, a) && t(h, h) && t(c, c) && t(l, l) && t(u, u) && t(p, p) && t(d, d)) && (await Promise.all([t(n, n), t(o, o), t(f, f), t(_, _)])).every(t=>t))(us, (s=>()=>{
                if (null === s)
                    return !1;
                const t = new s(1,1,44100).createBuffer(1, 1, 44100);
                if (void 0 === t.copyToChannel)
                    return !0;
                var e = new Float32Array(2);
                try {
                    t.copyFromChannel(e, 0, 0)
                } catch {
                    return !1
                }
                return !0
            }
            )(vs), (s=>()=>{
                if (null === s)
                    return !1;
                if (void 0 !== s.prototype && void 0 !== s.prototype.close)
                    return !0;
                const t = new s
                  , e = void 0 !== t.close;
                try {
                    t.close()
                } catch {}
                return e
            }
            )(bs), (t=>()=>{
                if (null === t)
                    return Promise.resolve(!1);
                const i = new t(1,1,44100);
                return new Promise(e=>{
                    let s = !0;
                    var t = t=>{
                        s && (s = !1,
                        i.startRendering(),
                        e(t instanceof TypeError))
                    }
                    ;
                    let n;
                    try {
                        n = i.decodeAudioData(null, ()=>{}
                        , t)
                    } catch (e) {
                        t(e)
                    }
                    void 0 !== n && n.catch(t)
                }
                )
            }
            )(vs), (e=>()=>{
                if (null === e)
                    return !1;
                let t;
                try {
                    t = new e({
                        latencyHint: "balanced"
                    })
                } catch {
                    return !1
                }
                return t.close(),
                !0
            }
            )(bs), (s=>()=>{
                if (null === s)
                    return !1;
                const t = new s(1,1,44100).createGain()
                  , e = t.connect(t) === t;
                return t.disconnect(t),
                e
            }
            )(vs), ((r,o)=>async()=>{
                if (null === r)
                    return !0;
                if (null === o)
                    return !1;
                const t = new Blob(['let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'],{
                    type: "application/javascript; charset=utf-8"
                })
                  , s = new MessageChannel
                  , e = new o(1,128,44100)
                  , n = URL.createObjectURL(t);
                let i = !1;
                try {
                    await e.audioWorklet.addModule(n);
                    const o = new r(e,"a",{
                        numberOfOutputs: 0
                    })
                      , t = e.createOscillator();
                    await new Promise(t=>{
                        o.port.onmessage = ()=>t(),
                        o.port.postMessage(s.port2, [s.port2])
                    }
                    ),
                    o.port.onmessage = ()=>i = !0,
                    t.connect(o),
                    t.start(0),
                    await e.startRendering(),
                    i = await new Promise(e=>{
                        s.port1.onmessage = ({data: t})=>e(1 === t),
                        s.port1.postMessage(0)
                    }
                    )
                } catch {} finally {
                    s.port1.close(),
                    URL.revokeObjectURL(n)
                }
                return i
            }
            )(Cs, vs), (e=>()=>{
                if (null === e)
                    return !1;
                const t = new e(1,1,44100).createChannelMerger();
                if ("max" === t.channelCountMode)
                    return !0;
                try {
                    t.channelCount = 2
                } catch {
                    return !0
                }
                return !1
            }
            )(vs), (e=>()=>{
                if (null === e)
                    return !1;
                const t = new e(1,1,44100);
                return void 0 === t.createConstantSource || t.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY
            }
            )(vs), (s=>()=>{
                if (null === s)
                    return !1;
                const t = new s(1,1,44100)
                  , e = t.createConvolver();
                e.buffer = t.createBuffer(1, 1, t.sampleRate);
                try {
                    e.buffer = t.createBuffer(1, 1, t.sampleRate)
                } catch {
                    return !1
                }
                return !0
            }
            )(vs), (e=>()=>{
                if (null === e)
                    return !1;
                const t = new e(1,1,44100).createConvolver();
                try {
                    t.channelCount = 1
                } catch {
                    return !1
                }
                return !0
            }
            )(vs), ss, (t=>()=>null !== t && t.hasOwnProperty("isSecureContext"))(ps), (e=>()=>{
                if (null === e)
                    return !1;
                const t = new e;
                try {
                    return t.createMediaStreamSource(new MediaStream),
                    !1
                } catch (t) {
                    return !0
                } finally {
                    t.close()
                }
            }
            )(bs), (n=>()=>{
                if (null === n)
                    return Promise.resolve(!1);
                const t = new n(1,1,44100);
                if (void 0 === t.createStereoPanner)
                    return Promise.resolve(!0);
                if (void 0 === t.createConstantSource)
                    return Promise.resolve(!0);
                const e = t.createConstantSource()
                  , s = t.createStereoPanner();
                return e.channelCount = 1,
                e.offset.value = 1,
                s.channelCount = 1,
                e.start(),
                e.connect(s).connect(t.destination),
                t.startRendering().then(t=>1 !== t.getChannelData(0)[0])
            }
            )(vs), ns);
            function Bu(t) {
                return void 0 === t
            }
            function Uu(t) {
                return !Bu(t)
            }
            function Gu(t) {
                return "function" == typeof t
            }
            function Qu(t) {
                return "number" == typeof t
            }
            function Zu(t) {
                return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
            }
            function Xu(t) {
                return "boolean" == typeof t
            }
            function Yu(t) {
                return Array.isArray(t)
            }
            function $u(t) {
                return "string" == typeof t
            }
            function Hu(t) {
                return $u(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
            }
            function Ju(t, e) {
                if (!t)
                    throw new Error(e)
            }
            function Ku(t, e, s=1 / 0) {
                if (!(e <= t && t <= s))
                    throw new RangeError(`Value must be within [${e}, ${s}], got: ${t}`)
            }
            function tp(t) {
                t.isOffline || "running" === t.state || ap('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')
            }
            let ep = !1
              , sp = !1;
            function np(t) {
                ep = t
            }
            function ip(t) {
                Bu(t) && ep && !sp && (sp = !0,
                ap("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))
            }
            let rp = console;
            function op(...t) {
                rp.log(...t)
            }
            function ap(...t) {
                rp.warn(...t)
            }
            const hp = "object" == typeof self ? self : null
              , cp = hp && (hp.hasOwnProperty("AudioContext") || hp.hasOwnProperty("webkitAudioContext"));
            function lp(t, e, s, n) {
                var i, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, s) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    o = Reflect.decorate(t, e, s, n);
                else
                    for (var a = t.length - 1; 0 <= a; a--)
                        (i = t[a]) && (o = (r < 3 ? i(o) : 3 < r ? i(e, s, o) : i(e, s)) || o);
                return 3 < r && o && Object.defineProperty(e, s, o),
                o
            }
            function up(t, o, a, h) {
                return new (a = a || Promise)(function(s, e) {
                    function n(t) {
                        try {
                            r(h.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }
                    function i(t) {
                        try {
                            r(h.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }
                    function r(t) {
                        var e;
                        t.done ? s(t.value) : ((e = t.value)instanceof a ? e : new a(function(t) {
                            t(e)
                        }
                        )).then(n, i)
                    }
                    r((h = h.apply(t, o || [])).next())
                }
                )
            }
            Object.create,
            Object.create;
            class pp {
                constructor(t, e, s) {
                    this._callback = t,
                    this._type = e,
                    this._updateInterval = s,
                    this._createClock()
                }
                _createWorker() {
                    const t = new Blob([`\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ${(1e3 * this._updateInterval).toFixed(1)};\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t`],{
                        type: "text/javascript"
                    })
                      , e = URL.createObjectURL(t)
                      , s = new Worker(e);
                    s.onmessage = this._callback.bind(this),
                    this._worker = s
                }
                _createTimeout() {
                    this._timeout = setTimeout(()=>{
                        this._createTimeout(),
                        this._callback()
                    }
                    , 1e3 * this._updateInterval)
                }
                _createClock() {
                    if ("worker" === this._type)
                        try {
                            this._createWorker()
                        } catch (t) {
                            this._type = "timeout",
                            this._createClock()
                        }
                    else
                        "timeout" === this._type && this._createTimeout()
                }
                _disposeClock() {
                    this._timeout && clearTimeout(this._timeout),
                    this._worker && (this._worker.terminate(),
                    this._worker.onmessage = null)
                }
                get updateInterval() {
                    return this._updateInterval
                }
                set updateInterval(t) {
                    this._updateInterval = Math.max(t, 128 / 44100),
                    "worker" === this._type && this._worker.postMessage(Math.max(1e3 * t, 1))
                }
                get type() {
                    return this._type
                }
                set type(t) {
                    this._disposeClock(),
                    this._type = t,
                    this._createClock()
                }
                dispose() {
                    this._disposeClock()
                }
            }
            function dp(t) {
                return Lu(t)
            }
            function fp(t) {
                return ju(t)
            }
            function _p(t) {
                return zu(t)
            }
            function mp(t) {
                return Pu(t)
            }
            function gp(t) {
                return t instanceof sl
            }
            function vp(t, ...e) {
                if (!e.length)
                    return t;
                var s, n, i = e.shift();
                if (Zu(t) && Zu(i))
                    for (const e in i)
                        s = e,
                        n = i[e],
                        "value" === s || dp(n) || fp(n) || gp(n) ? t[e] = i[e] : Zu(i[e]) ? (t[e] || Object.assign(t, {
                            [e]: {}
                        }),
                        vp(t[e], i[e])) : Object.assign(t, {
                            [e]: i[e]
                        });
                return vp(t, ...e)
            }
            function yp(e, t, s=[], n) {
                const i = {}
                  , r = Array.from(t);
                if (Zu(r[0]) && n && !Reflect.has(r[0], n) && (Object.keys(r[0]).some(t=>Reflect.has(e, t)) || (vp(i, {
                    [n]: r[0]
                }),
                s.splice(s.indexOf(n), 1),
                r.shift())),
                1 === r.length && Zu(r[0]))
                    vp(i, r[0]);
                else
                    for (let t = 0; t < s.length; t++)
                        Uu(r[t]) && (i[s[t]] = r[t]);
                return vp(e, i)
            }
            function xp(t, e) {
                return Bu(t) ? e : t
            }
            function wp(e, t) {
                return t.forEach(t=>{
                    Reflect.has(e, t) && delete e[t]
                }
                ),
                e
            }
            class bp {
                constructor() {
                    this.debug = !1,
                    this._wasDisposed = !1
                }
                static getDefaults() {
                    return {}
                }
                log(...t) {
                    (this.debug || hp && this.toString() === hp.TONE_DEBUG_CLASS) && op(this, ...t)
                }
                dispose() {
                    return this._wasDisposed = !0,
                    this
                }
                get disposed() {
                    return this._wasDisposed
                }
                toString() {
                    return this.name
                }
            }
            bp.version = s;
            const Tp = 1e-6;
            function Sp(t, e) {
                return t > e + Tp
            }
            function kp(t, e) {
                return Sp(t, e) || Ap(t, e)
            }
            function Cp(t, e) {
                return t + Tp < e
            }
            function Ap(t, e) {
                return Math.abs(t - e) < Tp
            }
            function Dp(t, e, s) {
                return Math.max(Math.min(t, s), e)
            }
            class Op extends bp {
                constructor() {
                    super(),
                    this.name = "Timeline",
                    this._timeline = [];
                    var t = yp(Op.getDefaults(), arguments, ["memory"]);
                    this.memory = t.memory,
                    this.increasing = t.increasing
                }
                static getDefaults() {
                    return {
                        memory: 1 / 0,
                        increasing: !1
                    }
                }
                get length() {
                    return this._timeline.length
                }
                add(t) {
                    var e;
                    if (Ju(Reflect.has(t, "time"), "Timeline: events must have a time attribute"),
                    t.time = t.time.valueOf(),
                    this.increasing && this.length ? (e = this._timeline[this.length - 1],
                    Ju(kp(t.time, e.time), "The time must be greater than or equal to the last scheduled time"),
                    this._timeline.push(t)) : (e = this._search(t.time),
                    this._timeline.splice(e + 1, 0, t)),
                    this.length > this.memory) {
                        const t = this.length - this.memory;
                        this._timeline.splice(0, t)
                    }
                    return this
                }
                remove(t) {
                    t = this._timeline.indexOf(t);
                    return -1 !== t && this._timeline.splice(t, 1),
                    this
                }
                get(t, e="time") {
                    e = this._search(t, e);
                    return -1 !== e ? this._timeline[e] : null
                }
                peek() {
                    return this._timeline[0]
                }
                shift() {
                    return this._timeline.shift()
                }
                getAfter(t, e="time") {
                    e = this._search(t, e);
                    return e + 1 < this._timeline.length ? this._timeline[e + 1] : null
                }
                getBefore(t) {
                    var e = this._timeline.length;
                    if (0 < e && this._timeline[e - 1].time < t)
                        return this._timeline[e - 1];
                    t = this._search(t);
                    return 0 <= t - 1 ? this._timeline[t - 1] : null
                }
                cancel(s) {
                    if (1 < this._timeline.length) {
                        let e = this._search(s);
                        if (0 <= e)
                            if (Ap(this._timeline[e].time, s)) {
                                for (let t = e; 0 <= t && Ap(this._timeline[t].time, s); t--)
                                    e = t;
                                this._timeline = this._timeline.slice(0, e)
                            } else
                                this._timeline = this._timeline.slice(0, e + 1);
                        else
                            this._timeline = []
                    } else
                        1 === this._timeline.length && kp(this._timeline[0].time, s) && (this._timeline = []);
                    return this
                }
                cancelBefore(t) {
                    t = this._search(t);
                    return 0 <= t && (this._timeline = this._timeline.slice(t + 1)),
                    this
                }
                previousEvent(t) {
                    t = this._timeline.indexOf(t);
                    return 0 < t ? this._timeline[t - 1] : null
                }
                _search(s, n="time") {
                    if (0 === this._timeline.length)
                        return -1;
                    let t = 0;
                    var e = this._timeline.length;
                    let i = e;
                    if (0 < e && this._timeline[e - 1][n] <= s)
                        return e - 1;
                    for (; t < i; ) {
                        let e = Math.floor(t + (i - t) / 2);
                        var r = this._timeline[e]
                          , o = this._timeline[e + 1];
                        if (Ap(r[n], s)) {
                            for (let t = e; t < this._timeline.length && Ap(this._timeline[t][n], s); t++)
                                e = t;
                            return e
                        }
                        if (Cp(r[n], s) && Sp(o[n], s))
                            return e;
                        Sp(r[n], s) ? i = e : t = e + 1
                    }
                    return -1
                }
                _iterate(t, e=0, s=this._timeline.length - 1) {
                    this._timeline.slice(e, s + 1).forEach(t)
                }
                forEach(t) {
                    return this._iterate(t),
                    this
                }
                forEachBefore(t, e) {
                    t = this._search(t);
                    return -1 !== t && this._iterate(e, 0, t),
                    this
                }
                forEachAfter(t, e) {
                    t = this._search(t);
                    return this._iterate(e, t + 1),
                    this
                }
                forEachBetween(t, e, s) {
                    let n = this._search(t)
                      , i = this._search(e);
                    return -1 !== n && -1 !== i ? (this._timeline[n].time !== t && (n += 1),
                    this._timeline[i].time === e && --i,
                    this._iterate(s, n, i)) : -1 === n && this._iterate(s, 0, i),
                    this
                }
                forEachFrom(t, e) {
                    let s = this._search(t);
                    for (; 0 <= s && this._timeline[s].time >= t; )
                        s--;
                    return this._iterate(e, s + 1),
                    this
                }
                forEachAtTime(s, n) {
                    var i = this._search(s);
                    if (-1 !== i && Ap(this._timeline[i].time, s)) {
                        let e = i;
                        for (let t = i; 0 <= t && Ap(this._timeline[t].time, s); t--)
                            e = t;
                        this._iterate(t=>{
                            n(t)
                        }
                        , e, i)
                    }
                    return this
                }
                dispose() {
                    return super.dispose(),
                    this._timeline = [],
                    this
                }
            }
            const Mp = [];
            function Ep(t) {
                Mp.push(t)
            }
            const Rp = [];
            function qp(t) {
                Rp.push(t)
            }
            class Fp extends bp {
                constructor() {
                    super(...arguments),
                    this.name = "Emitter"
                }
                on(t, e) {
                    return t.split(/\W+/).forEach(t=>{
                        Bu(this._events) && (this._events = {}),
                        this._events.hasOwnProperty(t) || (this._events[t] = []),
                        this._events[t].push(e)
                    }
                    ),
                    this
                }
                once(e, s) {
                    const n = (...t)=>{
                        s(...t),
                        this.off(e, n)
                    }
                    ;
                    return this.on(e, n),
                    this
                }
                off(t, s) {
                    return t.split(/\W+/).forEach(t=>{
                        if (Bu(this._events) && (this._events = {}),
                        this._events.hasOwnProperty(t))
                            if (Bu(s))
                                this._events[t] = [];
                            else {
                                const e = this._events[t];
                                for (let t = e.length - 1; 0 <= t; t--)
                                    e[t] === s && e.splice(t, 1)
                            }
                    }
                    ),
                    this
                }
                emit(t, ...s) {
                    if (this._events && this._events.hasOwnProperty(t)) {
                        const n = this._events[t].slice(0);
                        for (let t = 0, e = n.length; t < e; t++)
                            n[t].apply(this, s)
                    }
                    return this
                }
                static mixin(s) {
                    ["on", "once", "off", "emit"].forEach(t=>{
                        var e = Object.getOwnPropertyDescriptor(Fp.prototype, t);
                        Object.defineProperty(s.prototype, t, e)
                    }
                    )
                }
                dispose() {
                    return super.dispose(),
                    this._events = void 0,
                    this
                }
            }
            class Ip extends Fp {
                constructor() {
                    super(...arguments),
                    this.isOffline = !1
                }
                toJSON() {
                    return {}
                }
            }
            class Vp extends Ip {
                constructor() {
                    super(),
                    this.name = "Context",
                    this._constants = new Map,
                    this._timeouts = new Op,
                    this._timeoutIds = 0,
                    this._initialized = !1,
                    this.isOffline = !1,
                    this._workletModules = new Map;
                    var t, e = yp(Vp.getDefaults(), arguments, ["context"]);
                    e.context ? this._context = e.context : this._context = (t = {
                        latencyHint: e.latencyHint
                    },
                    new wu(t)),
                    this._ticker = new pp(this.emit.bind(this, "tick"),e.clockSource,e.updateInterval),
                    this.on("tick", this._timeoutLoop.bind(this)),
                    this._context.onstatechange = ()=>{
                        this.emit("statechange", this.state)
                    }
                    ,
                    this._setLatencyHint(e.latencyHint),
                    this.lookAhead = e.lookAhead
                }
                static getDefaults() {
                    return {
                        clockSource: "worker",
                        latencyHint: "interactive",
                        lookAhead: .1,
                        updateInterval: .05
                    }
                }
                initialize() {
                    var e;
                    return this._initialized || (e = this,
                    Mp.forEach(t=>t(e)),
                    this._initialized = !0),
                    this
                }
                createAnalyser() {
                    return this._context.createAnalyser()
                }
                createOscillator() {
                    return this._context.createOscillator()
                }
                createBufferSource() {
                    return this._context.createBufferSource()
                }
                createBiquadFilter() {
                    return this._context.createBiquadFilter()
                }
                createBuffer(t, e, s) {
                    return this._context.createBuffer(t, e, s)
                }
                createChannelMerger(t) {
                    return this._context.createChannelMerger(t)
                }
                createChannelSplitter(t) {
                    return this._context.createChannelSplitter(t)
                }
                createConstantSource() {
                    return this._context.createConstantSource()
                }
                createConvolver() {
                    return this._context.createConvolver()
                }
                createDelay(t) {
                    return this._context.createDelay(t)
                }
                createDynamicsCompressor() {
                    return this._context.createDynamicsCompressor()
                }
                createGain() {
                    return this._context.createGain()
                }
                createIIRFilter(t, e) {
                    return this._context.createIIRFilter(t, e)
                }
                createPanner() {
                    return this._context.createPanner()
                }
                createPeriodicWave(t, e, s) {
                    return this._context.createPeriodicWave(t, e, s)
                }
                createStereoPanner() {
                    return this._context.createStereoPanner()
                }
                createWaveShaper() {
                    return this._context.createWaveShaper()
                }
                createMediaStreamSource(t) {
                    return Ju(mp(this._context), "Not available if OfflineAudioContext"),
                    this._context.createMediaStreamSource(t)
                }
                createMediaElementSource(t) {
                    return Ju(mp(this._context), "Not available if OfflineAudioContext"),
                    this._context.createMediaElementSource(t)
                }
                createMediaStreamDestination() {
                    return Ju(mp(this._context), "Not available if OfflineAudioContext"),
                    this._context.createMediaStreamDestination()
                }
                decodeAudioData(t) {
                    return this._context.decodeAudioData(t)
                }
                get currentTime() {
                    return this._context.currentTime
                }
                get state() {
                    return this._context.state
                }
                get sampleRate() {
                    return this._context.sampleRate
                }
                get listener() {
                    return this.initialize(),
                    this._listener
                }
                set listener(t) {
                    Ju(!this._initialized, "The listener cannot be set after initialization."),
                    this._listener = t
                }
                get transport() {
                    return this.initialize(),
                    this._transport
                }
                set transport(t) {
                    Ju(!this._initialized, "The transport cannot be set after initialization."),
                    this._transport = t
                }
                get draw() {
                    return this.initialize(),
                    this._draw
                }
                set draw(t) {
                    Ju(!this._initialized, "Draw cannot be set after initialization."),
                    this._draw = t
                }
                get destination() {
                    return this.initialize(),
                    this._destination
                }
                set destination(t) {
                    Ju(!this._initialized, "The destination cannot be set after initialization."),
                    this._destination = t
                }
                createAudioWorkletNode(t, e) {
                    return s = this.rawContext,
                    t = t,
                    e = e,
                    Ju(Uu(Fu), "This node only works in a secure context (https or localhost)"),
                    new Fu(s,t,e);
                    var s
                }
                addAudioWorkletModule(t, e) {
                    return up(this, void 0, void 0, function*() {
                        Ju(Uu(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)"),
                        this._workletModules.has(e) || this._workletModules.set(e, this.rawContext.audioWorklet.addModule(t)),
                        yield this._workletModules.get(e)
                    })
                }
                workletsAreReady() {
                    return up(this, void 0, void 0, function*() {
                        const e = [];
                        this._workletModules.forEach(t=>e.push(t)),
                        yield Promise.all(e)
                    })
                }
                get updateInterval() {
                    return this._ticker.updateInterval
                }
                set updateInterval(t) {
                    this._ticker.updateInterval = t
                }
                get clockSource() {
                    return this._ticker.type
                }
                set clockSource(t) {
                    this._ticker.type = t
                }
                get latencyHint() {
                    return this._latencyHint
                }
                _setLatencyHint(t) {
                    let e = 0;
                    if ($u(this._latencyHint = t))
                        switch (t) {
                        case "interactive":
                            e = .1;
                            break;
                        case "playback":
                            e = .5;
                            break;
                        case "balanced":
                            e = .25
                        }
                    this.lookAhead = e,
                    this.updateInterval = e / 2
                }
                get rawContext() {
                    return this._context
                }
                now() {
                    return this._context.currentTime + this.lookAhead
                }
                immediate() {
                    return this._context.currentTime
                }
                resume() {
                    return mp(this._context) ? this._context.resume() : Promise.resolve()
                }
                close() {
                    return up(this, void 0, void 0, function*() {
                        var e;
                        mp(this._context) && (yield this._context.close()),
                        this._initialized && (e = this,
                        Rp.forEach(t=>t(e)))
                    })
                }
                getConstant(e) {
                    if (this._constants.has(e))
                        return this._constants.get(e);
                    {
                        const t = this._context.createBuffer(1, 128, this._context.sampleRate)
                          , s = t.getChannelData(0);
                        for (let t = 0; t < s.length; t++)
                            s[t] = e;
                        const n = this._context.createBufferSource();
                        return n.channelCount = 1,
                        n.channelCountMode = "explicit",
                        n.buffer = t,
                        n.loop = !0,
                        n.start(0),
                        this._constants.set(e, n),
                        n
                    }
                }
                dispose() {
                    return super.dispose(),
                    this._ticker.dispose(),
                    this._timeouts.dispose(),
                    Object.keys(this._constants).map(t=>this._constants[t].disconnect()),
                    this
                }
                _timeoutLoop() {
                    var t = this.now();
                    let e = this._timeouts.peek();
                    for (; this._timeouts.length && e && e.time <= t; )
                        e.callback(),
                        this._timeouts.shift(),
                        e = this._timeouts.peek()
                }
                setTimeout(t, e) {
                    this._timeoutIds++;
                    var s = this.now();
                    return this._timeouts.add({
                        callback: t,
                        id: this._timeoutIds,
                        time: s + e
                    }),
                    this._timeoutIds
                }
                clearTimeout(e) {
                    return this._timeouts.forEach(t=>{
                        t.id === e && this._timeouts.remove(t)
                    }
                    ),
                    this
                }
                clearInterval(t) {
                    return this.clearTimeout(t)
                }
                setInterval(e, s) {
                    const n = ++this._timeoutIds
                      , i = ()=>{
                        var t = this.now();
                        this._timeouts.add({
                            callback: ()=>{
                                e(),
                                i()
                            }
                            ,
                            id: n,
                            time: t + s
                        })
                    }
                    ;
                    return i(),
                    n
                }
            }
            function Np(e, t) {
                Yu(t) ? t.forEach(t=>Np(e, t)) : Object.defineProperty(e, t, {
                    enumerable: !0,
                    writable: !1
                })
            }
            function Pp(e, t) {
                Yu(t) ? t.forEach(t=>Pp(e, t)) : Object.defineProperty(e, t, {
                    writable: !0
                })
            }
            const jp = ()=>{}
            ;
            class Lp extends bp {
                constructor() {
                    super(),
                    this.name = "ToneAudioBuffer",
                    this.onload = jp;
                    var t = yp(Lp.getDefaults(), arguments, ["url", "onload", "onerror"]);
                    this.reverse = t.reverse,
                    this.onload = t.onload,
                    t.url && gp(t.url) || t.url instanceof Lp ? this.set(t.url) : $u(t.url) && this.load(t.url).catch(t.onerror)
                }
                static getDefaults() {
                    return {
                        onerror: jp,
                        onload: jp,
                        reverse: !1
                    }
                }
                get sampleRate() {
                    return (this._buffer || Up()).sampleRate
                }
                set(t) {
                    return t instanceof Lp ? t.loaded ? this._buffer = t.get() : t.onload = ()=>{
                        this.set(t),
                        this.onload(this)
                    }
                    : this._buffer = t,
                    this._reversed && this._reverse(),
                    this
                }
                get() {
                    return this._buffer
                }
                load(e) {
                    return up(this, void 0, void 0, function*() {
                        var t = Lp.load(e).then(t=>{
                            this.set(t),
                            this.onload(this)
                        }
                        );
                        Lp.downloads.push(t);
                        try {
                            yield t
                        } finally {
                            const e = Lp.downloads.indexOf(t);
                            Lp.downloads.splice(e, 1)
                        }
                        return this
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._buffer = void 0,
                    this
                }
                fromArray(t) {
                    const e = Yu(t) && 0 < t[0].length
                      , s = e ? t.length : 1
                      , n = (e ? t[0] : t).length
                      , i = Up()
                      , r = i.createBuffer(s, n, i.sampleRate)
                      , o = e || 1 !== s ? t : [t];
                    for (let t = 0; t < s; t++)
                        r.copyToChannel(o[t], t);
                    return this._buffer = r,
                    this
                }
                toMono(t) {
                    if (Qu(t))
                        this.fromArray(this.toArray(t));
                    else {
                        let e = new Float32Array(this.length);
                        const n = this.numberOfChannels;
                        for (let t = 0; t < n; t++) {
                            var s = this.toArray(t);
                            for (let t = 0; t < s.length; t++)
                                e[t] += s[t]
                        }
                        e = e.map(t=>t / n),
                        this.fromArray(e)
                    }
                    return this
                }
                toArray(e) {
                    if (Qu(e))
                        return this.getChannelData(e);
                    if (1 === this.numberOfChannels)
                        return this.toArray(0);
                    {
                        const e = [];
                        for (let t = 0; t < this.numberOfChannels; t++)
                            e[t] = this.getChannelData(t);
                        return e
                    }
                }
                getChannelData(t) {
                    return this._buffer ? this._buffer.getChannelData(t) : new Float32Array(0)
                }
                slice(t, e=this.duration) {
                    Ju(this.loaded, "Buffer is not loaded");
                    var s = Math.floor(t * this.sampleRate)
                      , n = Math.floor(e * this.sampleRate);
                    Ju(s < n, "The start time must be less than the end time");
                    const i = n - s
                      , r = Up().createBuffer(this.numberOfChannels, i, this.sampleRate);
                    for (let t = 0; t < this.numberOfChannels; t++)
                        r.copyToChannel(this.getChannelData(t).subarray(s, n), t);
                    return new Lp(r)
                }
                _reverse() {
                    if (this.loaded)
                        for (let t = 0; t < this.numberOfChannels; t++)
                            this.getChannelData(t).reverse();
                    return this
                }
                get loaded() {
                    return 0 < this.length
                }
                get duration() {
                    return this._buffer ? this._buffer.duration : 0
                }
                get length() {
                    return this._buffer ? this._buffer.length : 0
                }
                get numberOfChannels() {
                    return this._buffer ? this._buffer.numberOfChannels : 0
                }
                get reverse() {
                    return this._reversed
                }
                set reverse(t) {
                    this._reversed !== t && (this._reversed = t,
                    this._reverse())
                }
                static fromArray(t) {
                    return (new Lp).fromArray(t)
                }
                static fromUrl(e) {
                    return up(this, void 0, void 0, function*() {
                        const t = new Lp;
                        return yield t.load(e)
                    })
                }
                static load(r) {
                    return up(this, void 0, void 0, function*() {
                        const e = r.match(/\[([^\]\[]+\|.+)\]$/);
                        if (e) {
                            const s = e[1].split("|");
                            let t = s[0];
                            for (const r of s)
                                if (Lp.supportsType(r)) {
                                    t = r;
                                    break
                                }
                            r = r.replace(e[0], t)
                        }
                        const s = "" === Lp.baseUrl || Lp.baseUrl.endsWith("/") ? Lp.baseUrl : Lp.baseUrl + "/"
                          , t = document.createElement("a");
                        t.href = s + r,
                        t.pathname = (t.pathname + t.hash).split("/").map(encodeURIComponent).join("/");
                        const n = yield fetch(t.href);
                        if (!n.ok)
                            throw new Error(`could not load url: ${r}`);
                        var i = yield n.arrayBuffer();
                        return yield Up().decodeAudioData(i)
                    })
                }
                static supportsType(t) {
                    t = t.split("."),
                    t = t[t.length - 1];
                    return "" !== document.createElement("audio").canPlayType("audio/" + t)
                }
                static loaded() {
                    return up(this, void 0, void 0, function*() {
                        for (yield Promise.resolve(); Lp.downloads.length; )
                            yield Lp.downloads[0]
                    })
                }
            }
            Lp.baseUrl = "",
            Lp.downloads = [];
            class zp extends Vp {
                constructor() {
                    var t, e, s;
                    super({
                        clockSource: "offline",
                        context: _p(arguments[0]) ? arguments[0] : (t = arguments[0],
                        e = arguments[1] * arguments[2],
                        s = arguments[2],
                        new Nu(t,e,s)),
                        lookAhead: 0,
                        updateInterval: _p(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
                    }),
                    this.name = "OfflineContext",
                    this._currentTime = 0,
                    this.isOffline = !0,
                    this._duration = _p(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1]
                }
                now() {
                    return this._currentTime
                }
                get currentTime() {
                    return this._currentTime
                }
                _renderClock(s) {
                    return up(this, void 0, void 0, function*() {
                        let t = 0;
                        for (; 0 <= this._duration - this._currentTime; ) {
                            this.emit("tick"),
                            this._currentTime += 128 / this.sampleRate,
                            t++;
                            var e = Math.floor(this.sampleRate / 128);
                            s && t % e == 0 && (yield new Promise(t=>setTimeout(t, 1)))
                        }
                    })
                }
                render(e=!0) {
                    return up(this, void 0, void 0, function*() {
                        yield this.workletsAreReady(),
                        yield this._renderClock(e);
                        var t = yield this._context.startRendering();
                        return new Lp(t)
                    })
                }
                close() {
                    return Promise.resolve()
                }
            }
            const Wp = new class extends Ip {
                constructor() {
                    super(...arguments),
                    this.lookAhead = 0,
                    this.latencyHint = 0,
                    this.isOffline = !1
                }
                createAnalyser() {
                    return {}
                }
                createOscillator() {
                    return {}
                }
                createBufferSource() {
                    return {}
                }
                createBiquadFilter() {
                    return {}
                }
                createBuffer(t, e, s) {
                    return {}
                }
                createChannelMerger(t) {
                    return {}
                }
                createChannelSplitter(t) {
                    return {}
                }
                createConstantSource() {
                    return {}
                }
                createConvolver() {
                    return {}
                }
                createDelay(t) {
                    return {}
                }
                createDynamicsCompressor() {
                    return {}
                }
                createGain() {
                    return {}
                }
                createIIRFilter(t, e) {
                    return {}
                }
                createPanner() {
                    return {}
                }
                createPeriodicWave(t, e, s) {
                    return {}
                }
                createStereoPanner() {
                    return {}
                }
                createWaveShaper() {
                    return {}
                }
                createMediaStreamSource(t) {
                    return {}
                }
                createMediaElementSource(t) {
                    return {}
                }
                createMediaStreamDestination() {
                    return {}
                }
                decodeAudioData(t) {
                    return Promise.resolve({})
                }
                createAudioWorkletNode(t, e) {
                    return {}
                }
                get rawContext() {
                    return {}
                }
                addAudioWorkletModule(t, e) {
                    return up(this, void 0, void 0, function*() {
                        return Promise.resolve()
                    })
                }
                resume() {
                    return Promise.resolve()
                }
                setTimeout(t, e) {
                    return 0
                }
                clearTimeout(t) {
                    return this
                }
                setInterval(t, e) {
                    return 0
                }
                clearInterval(t) {
                    return this
                }
                getConstant(t) {
                    return {}
                }
                get currentTime() {
                    return 0
                }
                get state() {
                    return {}
                }
                get sampleRate() {
                    return 0
                }
                get listener() {
                    return {}
                }
                get transport() {
                    return {}
                }
                get draw() {
                    return {}
                }
                set draw(t) {}
                get destination() {
                    return {}
                }
                set destination(t) {}
                now() {
                    return 0
                }
                immediate() {
                    return 0
                }
            }
            ;
            let Bp = Wp;
            function Up() {
                return Bp === Wp && cp && Gp(new Vp),
                Bp
            }
            function Gp(t, e=!1) {
                e && Bp.dispose(),
                Bp = mp(t) ? new Vp(t) : _p(t) ? new zp(t) : t
            }
            if (hp && !hp.TONE_SILENCE_LOGGING) {
                let t = "v";
                "dev" === s && (t = "");
                const e = ` * Tone.js ${t}${s} * `;
                console.log(`%c ${e}`, "background: #000; color: #fff")
            }
            function Qp(t) {
                return Math.pow(10, t / 20)
            }
            function Zp(t) {
                return Math.log(t) / Math.LN10 * 20
            }
            function Xp(t) {
                return Math.pow(2, t / 12)
            }
            let Yp = 440;
            function $p(t) {
                return Math.round(Hp(t))
            }
            function Hp(t) {
                return 69 + 12 * Math.log2(t / Yp)
            }
            function Jp(t) {
                return Yp * Math.pow(2, (t - 69) / 12)
            }
            class Kp extends bp {
                constructor(t, e, s) {
                    super(),
                    this.defaultUnits = "s",
                    this._val = e,
                    this._units = s,
                    this.context = t,
                    this._expressions = this._getExpressions()
                }
                _getExpressions() {
                    return {
                        hz: {
                            method: t=>this._frequencyToUnits(parseFloat(t)),
                            regexp: /^(\d+(?:\.\d+)?)hz$/i
                        },
                        i: {
                            method: t=>this._ticksToUnits(parseInt(t, 10)),
                            regexp: /^(\d+)i$/i
                        },
                        m: {
                            method: t=>this._beatsToUnits(parseInt(t, 10) * this._getTimeSignature()),
                            regexp: /^(\d+)m$/i
                        },
                        n: {
                            method: (t,e)=>{
                                t = parseInt(t, 10),
                                e = "." === e ? 1.5 : 1;
                                return 1 === t ? this._beatsToUnits(this._getTimeSignature()) * e : this._beatsToUnits(4 / t) * e
                            }
                            ,
                            regexp: /^(\d+)n(\.?)$/i
                        },
                        number: {
                            method: t=>this._expressions[this.defaultUnits].method.call(this, t),
                            regexp: /^(\d+(?:\.\d+)?)$/
                        },
                        s: {
                            method: t=>this._secondsToUnits(parseFloat(t)),
                            regexp: /^(\d+(?:\.\d+)?)s$/
                        },
                        samples: {
                            method: t=>parseInt(t, 10) / this.context.sampleRate,
                            regexp: /^(\d+)samples$/
                        },
                        t: {
                            method: t=>{
                                t = parseInt(t, 10);
                                return this._beatsToUnits(8 / (3 * Math.floor(t)))
                            }
                            ,
                            regexp: /^(\d+)t$/i
                        },
                        tr: {
                            method: (t,e,s)=>{
                                let n = 0;
                                return t && "0" !== t && (n += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))),
                                e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))),
                                s && "0" !== s && (n += this._beatsToUnits(parseFloat(s) / 4)),
                                n
                            }
                            ,
                            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
                        }
                    }
                }
                valueOf() {
                    if (this._val instanceof Kp && this.fromType(this._val),
                    Bu(this._val))
                        return this._noArg();
                    if ($u(this._val) && Bu(this._units)) {
                        for (const t in this._expressions)
                            if (this._expressions[t].regexp.test(this._val.trim())) {
                                this._units = t;
                                break
                            }
                    } else if (Zu(this._val)) {
                        let t = 0;
                        for (const s in this._val) {
                            var e;
                            Uu(this._val[s]) && (e = this._val[s],
                            t += new this.constructor(this.context,s).valueOf() * e)
                        }
                        return t
                    }
                    if (Uu(this._units)) {
                        const n = this._expressions[this._units]
                          , i = this._val.toString().trim().match(n.regexp);
                        return i ? n.method.apply(this, i.slice(1)) : n.method.call(this, this._val)
                    }
                    return $u(this._val) ? parseFloat(this._val) : this._val
                }
                _frequencyToUnits(t) {
                    return 1 / t
                }
                _beatsToUnits(t) {
                    return 60 / this._getBpm() * t
                }
                _secondsToUnits(t) {
                    return t
                }
                _ticksToUnits(t) {
                    return t * this._beatsToUnits(1) / this._getPPQ()
                }
                _noArg() {
                    return this._now()
                }
                _getBpm() {
                    return this.context.transport.bpm.value
                }
                _getTimeSignature() {
                    return this.context.transport.timeSignature
                }
                _getPPQ() {
                    return this.context.transport.PPQ
                }
                fromType(t) {
                    switch (this._units = void 0,
                    this.defaultUnits) {
                    case "s":
                        this._val = t.toSeconds();
                        break;
                    case "i":
                        this._val = t.toTicks();
                        break;
                    case "hz":
                        this._val = t.toFrequency();
                        break;
                    case "midi":
                        this._val = t.toMidi()
                    }
                    return this
                }
                toFrequency() {
                    return 1 / this.toSeconds()
                }
                toSamples() {
                    return this.toSeconds() * this.context.sampleRate
                }
                toMilliseconds() {
                    return 1e3 * this.toSeconds()
                }
            }
            class td extends Kp {
                constructor() {
                    super(...arguments),
                    this.name = "TimeClass"
                }
                _getExpressions() {
                    return Object.assign(super._getExpressions(), {
                        now: {
                            method: t=>this._now() + new this.constructor(this.context,t).valueOf(),
                            regexp: /^\+(.+)/
                        },
                        quantize: {
                            method: t=>{
                                t = new td(this.context,t).valueOf();
                                return this._secondsToUnits(this.context.transport.nextSubdivision(t))
                            }
                            ,
                            regexp: /^@(.+)/
                        }
                    })
                }
                quantize(t, e=1) {
                    var s = new this.constructor(this.context,t).valueOf()
                      , t = this.valueOf();
                    return t + (Math.round(t / s) * s - t) * e
                }
                toNotation() {
                    const s = this.toSeconds()
                      , e = ["1m"];
                    for (let t = 1; t < 9; t++) {
                        const n = Math.pow(2, t);
                        e.push(n + "n."),
                        e.push(n + "n"),
                        e.push(n + "t")
                    }
                    e.push("0");
                    let n = e[0]
                      , i = new td(this.context,e[0]).toSeconds();
                    return e.forEach(t=>{
                        var e = new td(this.context,t).toSeconds();
                        Math.abs(e - s) < Math.abs(i - s) && (n = t,
                        i = e)
                    }
                    ),
                    n
                }
                toBarsBeatsSixteenths() {
                    var t = this._beatsToUnits(1);
                    let e = this.valueOf() / t;
                    e = parseFloat(e.toFixed(4));
                    const s = Math.floor(e / this._getTimeSignature());
                    let n = e % 1 * 4;
                    e = Math.floor(e) % this._getTimeSignature();
                    t = n.toString();
                    return 3 < t.length && (n = parseFloat(parseFloat(t).toFixed(3))),
                    [s, e, n].join(":")
                }
                toTicks() {
                    var t = this._beatsToUnits(1);
                    return this.valueOf() / t * this._getPPQ()
                }
                toSeconds() {
                    return this.valueOf()
                }
                toMidi() {
                    return $p(this.toFrequency())
                }
                _now() {
                    return this.context.now()
                }
            }
            class ed extends td {
                constructor() {
                    super(...arguments),
                    this.name = "Frequency",
                    this.defaultUnits = "hz"
                }
                static get A4() {
                    return Yp
                }
                static set A4(t) {
                    t = t,
                    Yp = t
                }
                _getExpressions() {
                    return Object.assign({}, super._getExpressions(), {
                        midi: {
                            regexp: /^(\d+(?:\.\d+)?midi)/,
                            method(t) {
                                return "midi" === this.defaultUnits ? t : ed.mtof(t)
                            }
                        },
                        note: {
                            regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                            method(t, e) {
                                e = sd[t.toLowerCase()] + 12 * (parseInt(e, 10) + 1);
                                return "midi" === this.defaultUnits ? e : ed.mtof(e)
                            }
                        },
                        tr: {
                            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                            method(t, e, s) {
                                let n = 1;
                                return t && "0" !== t && (n *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))),
                                e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))),
                                s && "0" !== s && (n *= this._beatsToUnits(parseFloat(s) / 4)),
                                n
                            }
                        }
                    })
                }
                transpose(t) {
                    return new ed(this.context,this.valueOf() * Xp(t))
                }
                harmonize(t) {
                    return t.map(t=>this.transpose(t))
                }
                toMidi() {
                    return $p(this.valueOf())
                }
                toNote() {
                    var t = this.toFrequency()
                      , t = Math.log2(t / ed.A4);
                    let e = Math.round(12 * t) + 57;
                    const s = Math.floor(e / 12);
                    return s < 0 && (e += -12 * s),
                    nd[e % 12] + s.toString()
                }
                toSeconds() {
                    return 1 / super.toSeconds()
                }
                toTicks() {
                    var t = this._beatsToUnits(1)
                      , t = this.valueOf() / t;
                    return Math.floor(t * this._getPPQ())
                }
                _noArg() {
                    return 0
                }
                _frequencyToUnits(t) {
                    return t
                }
                _ticksToUnits(t) {
                    return 1 / (60 * t / (this._getBpm() * this._getPPQ()))
                }
                _beatsToUnits(t) {
                    return 1 / super._beatsToUnits(t)
                }
                _secondsToUnits(t) {
                    return 1 / t
                }
                static mtof(t) {
                    return Jp(t)
                }
                static ftom(t) {
                    return $p(t)
                }
            }
            const sd = {
                cbb: -2,
                cb: -1,
                c: 0,
                "c#": 1,
                cx: 2,
                dbb: 0,
                db: 1,
                d: 2,
                "d#": 3,
                dx: 4,
                ebb: 2,
                eb: 3,
                e: 4,
                "e#": 5,
                ex: 6,
                fbb: 3,
                fb: 4,
                f: 5,
                "f#": 6,
                fx: 7,
                gbb: 5,
                gb: 6,
                g: 7,
                "g#": 8,
                gx: 9,
                abb: 7,
                ab: 8,
                a: 9,
                "a#": 10,
                ax: 11,
                bbb: 9,
                bb: 10,
                b: 11,
                "b#": 12,
                bx: 13
            }
              , nd = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
            class id extends td {
                constructor() {
                    super(...arguments),
                    this.name = "TransportTime"
                }
                _now() {
                    return this.context.transport.seconds
                }
            }
            class rd extends bp {
                constructor() {
                    super();
                    var t = yp(rd.getDefaults(), arguments, ["context"]);
                    this.defaultContext ? this.context = this.defaultContext : this.context = t.context
                }
                static getDefaults() {
                    return {
                        context: Up()
                    }
                }
                now() {
                    return this.context.currentTime + this.context.lookAhead
                }
                immediate() {
                    return this.context.currentTime
                }
                get sampleTime() {
                    return 1 / this.context.sampleRate
                }
                get blockTime() {
                    return 128 / this.context.sampleRate
                }
                toSeconds(t) {
                    return ip(t),
                    new td(this.context,t).toSeconds()
                }
                toFrequency(t) {
                    return new ed(this.context,t).toFrequency()
                }
                toTicks(t) {
                    return new id(this.context,t).toTicks()
                }
                _getPartialProperties(e) {
                    const s = this.get();
                    return Object.keys(s).forEach(t=>{
                        Bu(e[t]) && delete s[t]
                    }
                    ),
                    s
                }
                get() {
                    const s = this.constructor.getDefaults();
                    return Object.keys(s).forEach(t=>{
                        if (Reflect.has(this, t)) {
                            const e = this[t];
                            Uu(e) && Uu(e.value) && Uu(e.setValueAtTime) ? s[t] = e.value : e instanceof rd ? s[t] = e._getPartialProperties(s[t]) : Yu(e) || Qu(e) || $u(e) || Xu(e) ? s[t] = e : delete s[t]
                        }
                    }
                    ),
                    s
                }
                set(e) {
                    return Object.keys(e).forEach(t=>{
                        Reflect.has(this, t) && Uu(this[t]) && (this[t] && Uu(this[t].value) && Uu(this[t].setValueAtTime) ? this[t].value !== e[t] && (this[t].value = e[t]) : this[t]instanceof rd ? this[t].set(e[t]) : this[t] = e[t])
                    }
                    ),
                    this
                }
            }
            class od extends Op {
                constructor(t="stopped") {
                    super(),
                    this.name = "StateTimeline",
                    this._initial = t,
                    this.setStateAtTime(this._initial, 0)
                }
                getValueAtTime(t) {
                    t = this.get(t);
                    return null !== t ? t.state : this._initial
                }
                setStateAtTime(t, e, s) {
                    return Ku(e, 0),
                    this.add(Object.assign({}, s, {
                        state: t,
                        time: e
                    })),
                    this
                }
                getLastState(e, s) {
                    for (let t = this._search(s); 0 <= t; t--) {
                        const s = this._timeline[t];
                        if (s.state === e)
                            return s
                    }
                }
                getNextState(e, t) {
                    const s = this._search(t);
                    if (-1 !== s)
                        for (let t = s; t < this._timeline.length; t++) {
                            const s = this._timeline[t];
                            if (s.state === e)
                                return s
                        }
                }
            }
            class ad extends rd {
                constructor() {
                    super(yp(ad.getDefaults(), arguments, ["param", "units", "convert"])),
                    this.name = "Param",
                    this.overridden = !1,
                    this._minOutput = 1e-7;
                    const t = yp(ad.getDefaults(), arguments, ["param", "units", "convert"]);
                    for (Ju(Uu(t.param) && (dp(t.param) || t.param instanceof ad), "param must be an AudioParam"); !dp(t.param); )
                        t.param = t.param._param;
                    this._swappable = !!Uu(t.swappable) && t.swappable,
                    this._swappable ? (this.input = this.context.createGain(),
                    this._param = t.param,
                    this.input.connect(this._param)) : this._param = this.input = t.param,
                    this._events = new Op(1e3),
                    this._initialValue = this._param.defaultValue,
                    this.units = t.units,
                    this.convert = t.convert,
                    this._minValue = t.minValue,
                    this._maxValue = t.maxValue,
                    Uu(t.value) && t.value !== this._toType(this._initialValue) && this.setValueAtTime(t.value, 0)
                }
                static getDefaults() {
                    return Object.assign(rd.getDefaults(), {
                        convert: !0,
                        units: "number"
                    })
                }
                get value() {
                    var t = this.now();
                    return this.getValueAtTime(t)
                }
                set value(t) {
                    this.cancelScheduledValues(this.now()),
                    this.setValueAtTime(t, this.now())
                }
                get minValue() {
                    return Uu(this._minValue) ? this._minValue : "time" === this.units || "frequency" === this.units || "normalRange" === this.units || "positive" === this.units || "transportTime" === this.units || "ticks" === this.units || "bpm" === this.units || "hertz" === this.units || "samples" === this.units ? 0 : "audioRange" === this.units ? -1 : "decibels" === this.units ? -1 / 0 : this._param.minValue
                }
                get maxValue() {
                    return Uu(this._maxValue) ? this._maxValue : "normalRange" === this.units || "audioRange" === this.units ? 1 : this._param.maxValue
                }
                _is(t, e) {
                    return this.units === e
                }
                _assertRange(t) {
                    return Uu(this.maxValue) && Uu(this.minValue) && Ku(t, this._fromType(this.minValue), this._fromType(this.maxValue)),
                    t
                }
                _fromType(t) {
                    return this.convert && !this.overridden ? this._is(t, "time") ? this.toSeconds(t) : this._is(t, "decibels") ? Qp(t) : this._is(t, "frequency") ? this.toFrequency(t) : t : this.overridden ? 0 : t
                }
                _toType(t) {
                    return this.convert && "decibels" === this.units ? Zp(t) : t
                }
                setValueAtTime(t, e) {
                    var s = this.toSeconds(e)
                      , n = this._fromType(t);
                    return Ju(isFinite(n) && isFinite(s), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),
                    this._assertRange(n),
                    this.log(this.units, "setValueAtTime", t, s),
                    this._events.add({
                        time: s,
                        type: "setValueAtTime",
                        value: n
                    }),
                    this._param.setValueAtTime(n, s),
                    this
                }
                getValueAtTime(t) {
                    const e = Math.max(this.toSeconds(t), 0)
                      , s = this._events.getAfter(e)
                      , n = this._events.get(e);
                    let i = this._initialValue;
                    if (null === n)
                        i = this._initialValue;
                    else if ("setTargetAtTime" !== n.type || null !== s && "setValueAtTime" !== s.type)
                        if (null === s)
                            i = n.value;
                        else if ("linearRampToValueAtTime" === s.type || "exponentialRampToValueAtTime" === s.type) {
                            let t = n.value;
                            if ("setTargetAtTime" === n.type) {
                                const e = this._events.getBefore(n.time);
                                t = null === e ? this._initialValue : e.value
                            }
                            i = "linearRampToValueAtTime" === s.type ? this._linearInterpolate(n.time, t, s.time, s.value, e) : this._exponentialInterpolate(n.time, t, s.time, s.value, e)
                        } else
                            i = n.value;
                    else {
                        const r = this._events.getBefore(n.time);
                        t = null === r ? this._initialValue : r.value;
                        "setTargetAtTime" === n.type && (i = this._exponentialApproach(n.time, t, n.value, n.constant, e))
                    }
                    return this._toType(i)
                }
                setRampPoint(t) {
                    t = this.toSeconds(t);
                    let e = this.getValueAtTime(t);
                    return this.cancelAndHoldAtTime(t),
                    0 === this._fromType(e) && (e = this._toType(this._minOutput)),
                    this.setValueAtTime(e, t),
                    this
                }
                linearRampToValueAtTime(t, e) {
                    var s = this._fromType(t)
                      , n = this.toSeconds(e);
                    return Ju(isFinite(s) && isFinite(n), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),
                    this._assertRange(s),
                    this._events.add({
                        time: n,
                        type: "linearRampToValueAtTime",
                        value: s
                    }),
                    this.log(this.units, "linearRampToValueAtTime", t, n),
                    this._param.linearRampToValueAtTime(s, n),
                    this
                }
                exponentialRampToValueAtTime(t, e) {
                    let s = this._fromType(t);
                    s = Ap(s, 0) ? this._minOutput : s,
                    this._assertRange(s);
                    var n = this.toSeconds(e);
                    return Ju(isFinite(s) && isFinite(n), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),
                    this._events.add({
                        time: n,
                        type: "exponentialRampToValueAtTime",
                        value: s
                    }),
                    this.log(this.units, "exponentialRampToValueAtTime", t, n),
                    this._param.exponentialRampToValueAtTime(s, n),
                    this
                }
                exponentialRampTo(t, e, s) {
                    return s = this.toSeconds(s),
                    this.setRampPoint(s),
                    this.exponentialRampToValueAtTime(t, s + this.toSeconds(e)),
                    this
                }
                linearRampTo(t, e, s) {
                    return s = this.toSeconds(s),
                    this.setRampPoint(s),
                    this.linearRampToValueAtTime(t, s + this.toSeconds(e)),
                    this
                }
                targetRampTo(t, e, s) {
                    return s = this.toSeconds(s),
                    this.setRampPoint(s),
                    this.exponentialApproachValueAtTime(t, s, e),
                    this
                }
                exponentialApproachValueAtTime(t, e, s) {
                    e = this.toSeconds(e),
                    s = this.toSeconds(s);
                    var n = Math.log(s + 1) / Math.log(200);
                    return this.setTargetAtTime(t, e, n),
                    this.cancelAndHoldAtTime(e + .9 * s),
                    this.linearRampToValueAtTime(t, e + s),
                    this
                }
                setTargetAtTime(t, e, s) {
                    var n = this._fromType(t);
                    Ju(isFinite(s) && 0 < s, "timeConstant must be a number greater than 0");
                    var i = this.toSeconds(e);
                    return this._assertRange(n),
                    Ju(isFinite(n) && isFinite(i), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),
                    this._events.add({
                        constant: s,
                        time: i,
                        type: "setTargetAtTime",
                        value: n
                    }),
                    this.log(this.units, "setTargetAtTime", t, i, s),
                    this._param.setTargetAtTime(n, i, s),
                    this
                }
                setValueCurveAtTime(e, s, t, n=1) {
                    t = this.toSeconds(t),
                    s = this.toSeconds(s);
                    const i = this._fromType(e[0]) * n;
                    this.setValueAtTime(this._toType(i), s);
                    var r = t / (e.length - 1);
                    for (let t = 1; t < e.length; t++) {
                        const i = this._fromType(e[t]) * n;
                        this.linearRampToValueAtTime(this._toType(i), s + t * r)
                    }
                    return this
                }
                cancelScheduledValues(t) {
                    var e = this.toSeconds(t);
                    return Ju(isFinite(e), `Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`),
                    this._events.cancel(e),
                    this._param.cancelScheduledValues(e),
                    this.log(this.units, "cancelScheduledValues", e),
                    this
                }
                cancelAndHoldAtTime(t) {
                    var e = this.toSeconds(t)
                      , s = this._fromType(this.getValueAtTime(e));
                    Ju(isFinite(e), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`),
                    this.log(this.units, "cancelAndHoldAtTime", e, "value=" + s);
                    var n = this._events.get(e)
                      , t = this._events.getAfter(e);
                    return n && Ap(n.time, e) ? t ? (this._param.cancelScheduledValues(t.time),
                    this._events.cancel(t.time)) : (this._param.cancelAndHoldAtTime(e),
                    this._events.cancel(e + this.sampleTime)) : t && (this._param.cancelScheduledValues(t.time),
                    this._events.cancel(t.time),
                    "linearRampToValueAtTime" === t.type ? this.linearRampToValueAtTime(this._toType(s), e) : "exponentialRampToValueAtTime" === t.type && this.exponentialRampToValueAtTime(this._toType(s), e)),
                    this._events.add({
                        time: e,
                        type: "setValueAtTime",
                        value: s
                    }),
                    this._param.setValueAtTime(s, e),
                    this
                }
                rampTo(t, e=.1, s) {
                    return "frequency" === this.units || "bpm" === this.units || "decibels" === this.units ? this.exponentialRampTo(t, e, s) : this.linearRampTo(t, e, s),
                    this
                }
                apply(e) {
                    var s = this.context.currentTime;
                    e.setValueAtTime(this.getValueAtTime(s), s);
                    var t = this._events.get(s);
                    if (t && "setTargetAtTime" === t.type) {
                        var t = this._events.getAfter(t.time)
                          , n = t ? t.time : s + 2
                          , i = (n - s) / 10;
                        for (let t = s; t < n; t += i)
                            e.linearRampToValueAtTime(this.getValueAtTime(t), t)
                    }
                    return this._events.forEachAfter(this.context.currentTime, t=>{
                        "cancelScheduledValues" === t.type ? e.cancelScheduledValues(t.time) : "setTargetAtTime" === t.type ? e.setTargetAtTime(t.value, t.time, t.constant) : e[t.type](t.value, t.time)
                    }
                    ),
                    this
                }
                setParam(t) {
                    Ju(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
                    const e = this.input;
                    return e.disconnect(this._param),
                    this.apply(t),
                    this._param = t,
                    e.connect(this._param),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._events.dispose(),
                    this
                }
                get defaultValue() {
                    return this._toType(this._param.defaultValue)
                }
                _exponentialApproach(t, e, s, n, i) {
                    return s + (e - s) * Math.exp(-(i - t) / n)
                }
                _linearInterpolate(t, e, s, n, i) {
                    return e + (i - t) / (s - t) * (n - e)
                }
                _exponentialInterpolate(t, e, s, n, i) {
                    return e * Math.pow(n / e, (i - t) / (s - t))
                }
            }
            class hd extends rd {
                constructor() {
                    super(...arguments),
                    this._internalChannels = []
                }
                get numberOfInputs() {
                    return Uu(this.input) ? dp(this.input) || this.input instanceof ad ? 1 : this.input.numberOfInputs : 0
                }
                get numberOfOutputs() {
                    return Uu(this.output) ? this.output.numberOfOutputs : 0
                }
                _isAudioNode(t) {
                    return Uu(t) && (t instanceof hd || fp(t))
                }
                _getInternalNodes() {
                    const t = this._internalChannels.slice(0);
                    return this._isAudioNode(this.input) && t.push(this.input),
                    this._isAudioNode(this.output) && this.input !== this.output && t.push(this.output),
                    t
                }
                _setChannelProperties(e) {
                    this._getInternalNodes().forEach(t=>{
                        t.channelCount = e.channelCount,
                        t.channelCountMode = e.channelCountMode,
                        t.channelInterpretation = e.channelInterpretation
                    }
                    )
                }
                _getChannelProperties() {
                    var t = this._getInternalNodes();
                    Ju(0 < t.length, "ToneAudioNode does not have any internal nodes");
                    t = t[0];
                    return {
                        channelCount: t.channelCount,
                        channelCountMode: t.channelCountMode,
                        channelInterpretation: t.channelInterpretation
                    }
                }
                get channelCount() {
                    return this._getChannelProperties().channelCount
                }
                set channelCount(t) {
                    var e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelCount: t
                    }))
                }
                get channelCountMode() {
                    return this._getChannelProperties().channelCountMode
                }
                set channelCountMode(t) {
                    var e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelCountMode: t
                    }))
                }
                get channelInterpretation() {
                    return this._getChannelProperties().channelInterpretation
                }
                set channelInterpretation(t) {
                    var e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelInterpretation: t
                    }))
                }
                connect(t, e=0, s=0) {
                    return ld(this, t, e, s),
                    this
                }
                toDestination() {
                    return this.connect(this.context.destination),
                    this
                }
                toMaster() {
                    return ap("toMaster() has been renamed toDestination()"),
                    this.toDestination()
                }
                disconnect(t, e=0, s=0) {
                    return ud(this, t, e, s),
                    this
                }
                chain(...t) {
                    return cd(this, ...t),
                    this
                }
                fan(...t) {
                    return t.forEach(t=>this.connect(t)),
                    this
                }
                dispose() {
                    return super.dispose(),
                    Uu(this.input) && (this.input instanceof hd ? this.input.dispose() : fp(this.input) && this.input.disconnect()),
                    Uu(this.output) && (this.output instanceof hd ? this.output.dispose() : fp(this.output) && this.output.disconnect()),
                    this._internalChannels = [],
                    this
                }
            }
            function cd(...t) {
                var e = t.shift();
                t.reduce((t,e)=>(t instanceof hd ? t.connect(e) : fp(t) && ld(t, e),
                e), e)
            }
            function ld(t, e, s=0, n=0) {
                for (Ju(Uu(t), "Cannot connect from undefined node"),
                Ju(Uu(e), "Cannot connect to undefined node"),
                (e instanceof hd || fp(e)) && Ju(0 < e.numberOfInputs, "Cannot connect to node with no inputs"),
                Ju(0 < t.numberOfOutputs, "Cannot connect from node with no outputs"); e instanceof hd || e instanceof ad; )
                    Uu(e.input) && (e = e.input);
                for (; t instanceof hd; )
                    Uu(t.output) && (t = t.output);
                dp(e) ? t.connect(e, s) : t.connect(e, s, n)
            }
            function ud(t, e, s=0, n=0) {
                if (Uu(e))
                    for (; e instanceof hd; )
                        e = e.input;
                for (; !fp(t); )
                    Uu(t.output) && (t = t.output);
                dp(e) ? t.disconnect(e, s) : fp(e) ? t.disconnect(e, s, n) : t.disconnect()
            }
            class pd extends hd {
                constructor() {
                    super(yp(pd.getDefaults(), arguments, ["gain", "units"])),
                    this.name = "Gain",
                    this._gainNode = this.context.createGain(),
                    this.input = this._gainNode,
                    this.output = this._gainNode;
                    var t = yp(pd.getDefaults(), arguments, ["gain", "units"]);
                    this.gain = new ad({
                        context: this.context,
                        convert: t.convert,
                        param: this._gainNode.gain,
                        units: t.units,
                        value: t.gain,
                        minValue: t.minValue,
                        maxValue: t.maxValue
                    }),
                    Np(this, "gain")
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        convert: !0,
                        gain: 1,
                        units: "gain"
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._gainNode.disconnect(),
                    this.gain.dispose(),
                    this
                }
            }
            class dd extends hd {
                constructor(t) {
                    super(t),
                    this.onended = jp,
                    this._startTime = -1,
                    this._stopTime = -1,
                    this._timeout = -1,
                    this.output = new pd({
                        context: this.context,
                        gain: 0
                    }),
                    this._gainNode = this.output,
                    this.getStateAtTime = function(t) {
                        t = this.toSeconds(t);
                        return -1 !== this._startTime && t >= this._startTime && (-1 === this._stopTime || t <= this._stopTime) ? "started" : "stopped"
                    }
                    ,
                    this._fadeIn = t.fadeIn,
                    this._fadeOut = t.fadeOut,
                    this._curve = t.curve,
                    this.onended = t.onended
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        curve: "linear",
                        fadeIn: 0,
                        fadeOut: 0,
                        onended: jp
                    })
                }
                _startGain(t, e=1) {
                    Ju(-1 === this._startTime, "Source cannot be started more than once");
                    var s = this.toSeconds(this._fadeIn);
                    return this._startTime = t + s,
                    this._startTime = Math.max(this._startTime, this.context.currentTime),
                    0 < s ? (this._gainNode.gain.setValueAtTime(0, t),
                    "linear" === this._curve ? this._gainNode.gain.linearRampToValueAtTime(e, t + s) : this._gainNode.gain.exponentialApproachValueAtTime(e, t, s)) : this._gainNode.gain.setValueAtTime(e, t),
                    this
                }
                stop(t) {
                    return this.log("stop", t),
                    this._stopGain(this.toSeconds(t)),
                    this
                }
                _stopGain(t) {
                    Ju(-1 !== this._startTime, "'start' must be called before 'stop'"),
                    this.cancelStop();
                    const e = this.toSeconds(this._fadeOut);
                    return this._stopTime = this.toSeconds(t) + e,
                    this._stopTime = Math.max(this._stopTime, this.context.currentTime),
                    0 < e ? "linear" === this._curve ? this._gainNode.gain.linearRampTo(0, e, t) : this._gainNode.gain.targetRampTo(0, e, t) : (this._gainNode.gain.cancelAndHoldAtTime(t),
                    this._gainNode.gain.setValueAtTime(0, t)),
                    this.context.clearTimeout(this._timeout),
                    this._timeout = this.context.setTimeout(()=>{
                        var t = "exponential" === this._curve ? 2 * e : 0;
                        this._stopSource(this.now() + t),
                        this._onended()
                    }
                    , this._stopTime - this.context.currentTime),
                    this
                }
                _onended() {
                    var t;
                    this.onended === jp || (this.onended(this),
                    this.onended = jp,
                    this.context.isOffline) || (t = ()=>this.dispose(),
                    void 0 !== window.requestIdleCallback ? window.requestIdleCallback(t) : setTimeout(t, 1e3))
                }
                get state() {
                    return this.getStateAtTime(this.now())
                }
                cancelStop() {
                    return this.log("cancelStop"),
                    Ju(-1 !== this._startTime, "Source is not started"),
                    this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime),
                    this.context.clearTimeout(this._timeout),
                    this._stopTime = -1,
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._gainNode.dispose(),
                    this.onended = jp,
                    this
                }
            }
            class fd extends dd {
                constructor() {
                    super(yp(fd.getDefaults(), arguments, ["offset"])),
                    this.name = "ToneConstantSource",
                    this._source = this.context.createConstantSource();
                    var t = yp(fd.getDefaults(), arguments, ["offset"]);
                    ld(this._source, this._gainNode),
                    this.offset = new ad({
                        context: this.context,
                        convert: t.convert,
                        param: this._source.offset,
                        units: t.units,
                        value: t.offset,
                        minValue: t.minValue,
                        maxValue: t.maxValue
                    })
                }
                static getDefaults() {
                    return Object.assign(dd.getDefaults(), {
                        convert: !0,
                        offset: 1,
                        units: "number"
                    })
                }
                start(t) {
                    t = this.toSeconds(t);
                    return this.log("start", t),
                    this._startGain(t),
                    this._source.start(t),
                    this
                }
                _stopSource(t) {
                    this._source.stop(t)
                }
                dispose() {
                    return super.dispose(),
                    "started" === this.state && this.stop(),
                    this._source.disconnect(),
                    this.offset.dispose(),
                    this
                }
            }
            class _d extends hd {
                constructor() {
                    super(yp(_d.getDefaults(), arguments, ["value", "units"])),
                    this.name = "Signal",
                    this.override = !0;
                    var t = yp(_d.getDefaults(), arguments, ["value", "units"]);
                    this.output = this._constantSource = new fd({
                        context: this.context,
                        convert: t.convert,
                        offset: t.value,
                        units: t.units,
                        minValue: t.minValue,
                        maxValue: t.maxValue
                    }),
                    this._constantSource.start(0),
                    this.input = this._param = this._constantSource.offset
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        convert: !0,
                        units: "number",
                        value: 0
                    })
                }
                connect(t, e=0, s=0) {
                    return md(this, t, e, s),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._param.dispose(),
                    this._constantSource.dispose(),
                    this
                }
                setValueAtTime(t, e) {
                    return this._param.setValueAtTime(t, e),
                    this
                }
                getValueAtTime(t) {
                    return this._param.getValueAtTime(t)
                }
                setRampPoint(t) {
                    return this._param.setRampPoint(t),
                    this
                }
                linearRampToValueAtTime(t, e) {
                    return this._param.linearRampToValueAtTime(t, e),
                    this
                }
                exponentialRampToValueAtTime(t, e) {
                    return this._param.exponentialRampToValueAtTime(t, e),
                    this
                }
                exponentialRampTo(t, e, s) {
                    return this._param.exponentialRampTo(t, e, s),
                    this
                }
                linearRampTo(t, e, s) {
                    return this._param.linearRampTo(t, e, s),
                    this
                }
                targetRampTo(t, e, s) {
                    return this._param.targetRampTo(t, e, s),
                    this
                }
                exponentialApproachValueAtTime(t, e, s) {
                    return this._param.exponentialApproachValueAtTime(t, e, s),
                    this
                }
                setTargetAtTime(t, e, s) {
                    return this._param.setTargetAtTime(t, e, s),
                    this
                }
                setValueCurveAtTime(t, e, s, n) {
                    return this._param.setValueCurveAtTime(t, e, s, n),
                    this
                }
                cancelScheduledValues(t) {
                    return this._param.cancelScheduledValues(t),
                    this
                }
                cancelAndHoldAtTime(t) {
                    return this._param.cancelAndHoldAtTime(t),
                    this
                }
                rampTo(t, e, s) {
                    return this._param.rampTo(t, e, s),
                    this
                }
                get value() {
                    return this._param.value
                }
                set value(t) {
                    this._param.value = t
                }
                get convert() {
                    return this._param.convert
                }
                set convert(t) {
                    this._param.convert = t
                }
                get units() {
                    return this._param.units
                }
                get overridden() {
                    return this._param.overridden
                }
                set overridden(t) {
                    this._param.overridden = t
                }
                get maxValue() {
                    return this._param.maxValue
                }
                get minValue() {
                    return this._param.minValue
                }
                apply(t) {
                    return this._param.apply(t),
                    this
                }
            }
            function md(t, e, s, n) {
                (e instanceof ad || dp(e) || e instanceof _d && e.override) && (e.cancelScheduledValues(0),
                e.setValueAtTime(0, 0),
                e instanceof _d && (e.overridden = !0)),
                ld(t, e, s, n)
            }
            class gd extends ad {
                constructor() {
                    super(yp(gd.getDefaults(), arguments, ["value"])),
                    this.name = "TickParam",
                    this._events = new Op(1 / 0),
                    this._multiplier = 1;
                    var t = yp(gd.getDefaults(), arguments, ["value"]);
                    this._multiplier = t.multiplier,
                    this._events.cancel(0),
                    this._events.add({
                        ticks: 0,
                        time: 0,
                        type: "setValueAtTime",
                        value: this._fromType(t.value)
                    }),
                    this.setValueAtTime(t.value, 0)
                }
                static getDefaults() {
                    return Object.assign(ad.getDefaults(), {
                        multiplier: 1,
                        units: "hertz",
                        value: 1
                    })
                }
                setTargetAtTime(t, e, s) {
                    e = this.toSeconds(e),
                    this.setRampPoint(e);
                    const n = this._fromType(t)
                      , i = this._events.get(e)
                      , r = Math.round(Math.max(1 / s, 1));
                    for (let t = 0; t <= r; t++) {
                        const r = s * t + e
                          , o = this._exponentialApproach(i.time, i.value, n, s, r);
                        this.linearRampToValueAtTime(this._toType(o), r)
                    }
                    return this
                }
                setValueAtTime(t, e) {
                    var s = this.toSeconds(e);
                    super.setValueAtTime(t, e);
                    const n = this._events.get(s)
                      , i = this._events.previousEvent(n)
                      , r = this._getTicksUntilEvent(i, s);
                    return n.ticks = Math.max(r, 0),
                    this
                }
                linearRampToValueAtTime(t, e) {
                    var s = this.toSeconds(e);
                    super.linearRampToValueAtTime(t, e);
                    const n = this._events.get(s)
                      , i = this._events.previousEvent(n)
                      , r = this._getTicksUntilEvent(i, s);
                    return n.ticks = Math.max(r, 0),
                    this
                }
                exponentialRampToValueAtTime(t, e) {
                    e = this.toSeconds(e);
                    const s = this._fromType(t)
                      , n = this._events.get(e)
                      , i = Math.round(Math.max(10 * (e - n.time), 1))
                      , r = (e - n.time) / i;
                    for (let t = 0; t <= i; t++) {
                        const i = r * t + n.time
                          , o = this._exponentialInterpolate(n.time, n.value, e, s, i);
                        this.linearRampToValueAtTime(this._toType(o), i)
                    }
                    return this
                }
                _getTicksUntilEvent(t, e) {
                    if (null === t)
                        t = {
                            ticks: 0,
                            time: 0,
                            type: "setValueAtTime",
                            value: 0
                        };
                    else if (Bu(t.ticks)) {
                        const e = this._events.previousEvent(t);
                        t.ticks = this._getTicksUntilEvent(e, t.time)
                    }
                    var s = this._fromType(this.getValueAtTime(t.time));
                    let n = this._fromType(this.getValueAtTime(e));
                    var i = this._events.get(e);
                    return i && i.time === e && "setValueAtTime" === i.type && (n = this._fromType(this.getValueAtTime(e - this.sampleTime))),
                    .5 * (e - t.time) * (s + n) + t.ticks
                }
                getTicksAtTime(t) {
                    var e = this.toSeconds(t)
                      , t = this._events.get(e);
                    return Math.max(this._getTicksUntilEvent(t, e), 0)
                }
                getDurationOfTicks(t, e) {
                    var s = this.toSeconds(e)
                      , e = this.getTicksAtTime(e);
                    return this.getTimeOfTick(e + t) - s
                }
                getTimeOfTick(t) {
                    var e = this._events.get(t, "ticks")
                      , s = this._events.getAfter(t, "ticks");
                    if (e && e.ticks === t)
                        return e.time;
                    if (e && s && "linearRampToValueAtTime" === s.type && e.value !== s.value) {
                        var n = this._fromType(this.getValueAtTime(e.time))
                          , i = (this._fromType(this.getValueAtTime(s.time)) - n) / (s.time - e.time)
                          , r = Math.sqrt(Math.pow(n, 2) - 2 * i * (e.ticks - t))
                          , s = (-n + r) / i;
                        return (0 < s ? s : (-n - r) / i) + e.time
                    }
                    return e ? 0 === e.value ? 1 / 0 : e.time + (t - e.ticks) / e.value : t / this._initialValue
                }
                ticksToTime(t, e) {
                    return this.getDurationOfTicks(t, e)
                }
                timeToTicks(t, e) {
                    var s = this.toSeconds(e)
                      , e = this.toSeconds(t)
                      , t = this.getTicksAtTime(s);
                    return this.getTicksAtTime(s + e) - t
                }
                _fromType(t) {
                    return "bpm" === this.units && this.multiplier ? 1 / (60 / t / this.multiplier) : super._fromType(t)
                }
                _toType(t) {
                    return "bpm" === this.units && this.multiplier ? t / this.multiplier * 60 : super._toType(t)
                }
                get multiplier() {
                    return this._multiplier
                }
                set multiplier(t) {
                    var e = this.value;
                    this._multiplier = t,
                    this.cancelScheduledValues(0),
                    this.setValueAtTime(e, 0)
                }
            }
            class vd extends _d {
                constructor() {
                    super(yp(vd.getDefaults(), arguments, ["value"])),
                    this.name = "TickSignal";
                    var t = yp(vd.getDefaults(), arguments, ["value"]);
                    this.input = this._param = new gd({
                        context: this.context,
                        convert: t.convert,
                        multiplier: t.multiplier,
                        param: this._constantSource.offset,
                        units: t.units,
                        value: t.value
                    })
                }
                static getDefaults() {
                    return Object.assign(_d.getDefaults(), {
                        multiplier: 1,
                        units: "hertz",
                        value: 1
                    })
                }
                ticksToTime(t, e) {
                    return this._param.ticksToTime(t, e)
                }
                timeToTicks(t, e) {
                    return this._param.timeToTicks(t, e)
                }
                getTimeOfTick(t) {
                    return this._param.getTimeOfTick(t)
                }
                getDurationOfTicks(t, e) {
                    return this._param.getDurationOfTicks(t, e)
                }
                getTicksAtTime(t) {
                    return this._param.getTicksAtTime(t)
                }
                get multiplier() {
                    return this._param.multiplier
                }
                set multiplier(t) {
                    this._param.multiplier = t
                }
                dispose() {
                    return super.dispose(),
                    this._param.dispose(),
                    this
                }
            }
            class yd extends rd {
                constructor() {
                    super(yp(yd.getDefaults(), arguments, ["frequency"])),
                    this.name = "TickSource",
                    this._state = new od,
                    this._tickOffset = new Op;
                    var t = yp(yd.getDefaults(), arguments, ["frequency"]);
                    this.frequency = new vd({
                        context: this.context,
                        units: t.units,
                        value: t.frequency
                    }),
                    Np(this, "frequency"),
                    this._state.setStateAtTime("stopped", 0),
                    this.setTicksAtTime(0, 0)
                }
                static getDefaults() {
                    return Object.assign({
                        frequency: 1,
                        units: "hertz"
                    }, rd.getDefaults())
                }
                get state() {
                    return this.getStateAtTime(this.now())
                }
                start(t, e) {
                    t = this.toSeconds(t);
                    return "started" !== this._state.getValueAtTime(t) && (this._state.setStateAtTime("started", t),
                    Uu(e) && this.setTicksAtTime(e, t)),
                    this
                }
                stop(t) {
                    t = this.toSeconds(t);
                    if ("stopped" === this._state.getValueAtTime(t)) {
                        const e = this._state.get(t);
                        e && 0 < e.time && (this._tickOffset.cancel(e.time),
                        this._state.cancel(e.time))
                    }
                    return this._state.cancel(t),
                    this._state.setStateAtTime("stopped", t),
                    this.setTicksAtTime(0, t),
                    this
                }
                pause(t) {
                    t = this.toSeconds(t);
                    return "started" === this._state.getValueAtTime(t) && this._state.setStateAtTime("paused", t),
                    this
                }
                cancel(t) {
                    return t = this.toSeconds(t),
                    this._state.cancel(t),
                    this._tickOffset.cancel(t),
                    this
                }
                getTicksAtTime(t) {
                    var e = this.toSeconds(t)
                      , s = this._state.getLastState("stopped", e)
                      , t = {
                        state: "paused",
                        time: e
                    };
                    this._state.add(t);
                    let n = s
                      , i = 0;
                    return this._state.forEachBetween(s.time, e + this.sampleTime, t=>{
                        let e = n.time;
                        var s = this._tickOffset.get(t.time);
                        s && s.time >= n.time && (i = s.ticks,
                        e = s.time),
                        "started" === n.state && "started" !== t.state && (i += this.frequency.getTicksAtTime(t.time) - this.frequency.getTicksAtTime(e)),
                        n = t
                    }
                    ),
                    this._state.remove(t),
                    i
                }
                get ticks() {
                    return this.getTicksAtTime(this.now())
                }
                set ticks(t) {
                    this.setTicksAtTime(t, this.now())
                }
                get seconds() {
                    return this.getSecondsAtTime(this.now())
                }
                set seconds(t) {
                    var e = this.now()
                      , t = this.frequency.timeToTicks(t, e);
                    this.setTicksAtTime(t, e)
                }
                getSecondsAtTime(t) {
                    t = this.toSeconds(t);
                    var e = this._state.getLastState("stopped", t)
                      , s = {
                        state: "paused",
                        time: t
                    };
                    this._state.add(s);
                    let n = e
                      , i = 0;
                    return this._state.forEachBetween(e.time, t + this.sampleTime, t=>{
                        let e = n.time;
                        var s = this._tickOffset.get(t.time);
                        s && s.time >= n.time && (i = s.seconds,
                        e = s.time),
                        "started" === n.state && "started" !== t.state && (i += t.time - e),
                        n = t
                    }
                    ),
                    this._state.remove(s),
                    i
                }
                setTicksAtTime(t, e) {
                    return e = this.toSeconds(e),
                    this._tickOffset.cancel(e),
                    this._tickOffset.add({
                        seconds: this.frequency.getDurationOfTicks(t, e),
                        ticks: t,
                        time: e
                    }),
                    this
                }
                getStateAtTime(t) {
                    return t = this.toSeconds(t),
                    this._state.getValueAtTime(t)
                }
                getTimeOfTick(t, e=this.now()) {
                    var s = this._tickOffset.get(e)
                      , e = this._state.get(e)
                      , e = Math.max(s.time, e.time)
                      , s = this.frequency.getTicksAtTime(e) + t - s.ticks;
                    return this.frequency.getTimeOfTick(s)
                }
                forEachTickBetween(s, n, i) {
                    let r = this._state.get(s);
                    this._state.forEachBetween(s, n, t=>{
                        r && "started" === r.state && "started" !== t.state && this.forEachTickBetween(Math.max(r.time, s), t.time - this.sampleTime, i),
                        r = t
                    }
                    );
                    let o = null;
                    if (r && "started" === r.state) {
                        var a = Math.max(r.time, s)
                          , h = this.frequency.getTicksAtTime(a)
                          , a = h - this.frequency.getTicksAtTime(r.time);
                        let t = Math.ceil(a) - a;
                        t = Ap(t, 1) ? 0 : t;
                        let e = this.frequency.getTimeOfTick(h + t);
                        for (; e < n; ) {
                            try {
                                i(e, Math.round(this.getTicksAtTime(e)))
                            } catch (s) {
                                o = s;
                                break
                            }
                            e += this.frequency.getDurationOfTicks(1, e)
                        }
                    }
                    if (o)
                        throw o;
                    return this
                }
                dispose() {
                    return super.dispose(),
                    this._state.dispose(),
                    this._tickOffset.dispose(),
                    this.frequency.dispose(),
                    this
                }
            }
            class xd extends rd {
                constructor() {
                    super(yp(xd.getDefaults(), arguments, ["callback", "frequency"])),
                    this.name = "Clock",
                    this.callback = jp,
                    this._lastUpdate = 0,
                    this._state = new od("stopped"),
                    this._boundLoop = this._loop.bind(this);
                    var t = yp(xd.getDefaults(), arguments, ["callback", "frequency"]);
                    this.callback = t.callback,
                    this._tickSource = new yd({
                        context: this.context,
                        frequency: t.frequency,
                        units: t.units
                    }),
                    this._lastUpdate = 0,
                    this.frequency = this._tickSource.frequency,
                    Np(this, "frequency"),
                    this._state.setStateAtTime("stopped", 0),
                    this.context.on("tick", this._boundLoop)
                }
                static getDefaults() {
                    return Object.assign(rd.getDefaults(), {
                        callback: jp,
                        frequency: 1,
                        units: "hertz"
                    })
                }
                get state() {
                    return this._state.getValueAtTime(this.now())
                }
                start(t, e) {
                    tp(this.context);
                    t = this.toSeconds(t);
                    return this.log("start", t),
                    "started" !== this._state.getValueAtTime(t) && (this._state.setStateAtTime("started", t),
                    this._tickSource.start(t, e),
                    t < this._lastUpdate && this.emit("start", t, e)),
                    this
                }
                stop(t) {
                    t = this.toSeconds(t);
                    return this.log("stop", t),
                    this._state.cancel(t),
                    this._state.setStateAtTime("stopped", t),
                    this._tickSource.stop(t),
                    t < this._lastUpdate && this.emit("stop", t),
                    this
                }
                pause(t) {
                    t = this.toSeconds(t);
                    return "started" === this._state.getValueAtTime(t) && (this._state.setStateAtTime("paused", t),
                    this._tickSource.pause(t),
                    t < this._lastUpdate && this.emit("pause", t)),
                    this
                }
                get ticks() {
                    return Math.ceil(this.getTicksAtTime(this.now()))
                }
                set ticks(t) {
                    this._tickSource.ticks = t
                }
                get seconds() {
                    return this._tickSource.seconds
                }
                set seconds(t) {
                    this._tickSource.seconds = t
                }
                getSecondsAtTime(t) {
                    return this._tickSource.getSecondsAtTime(t)
                }
                setTicksAtTime(t, e) {
                    return this._tickSource.setTicksAtTime(t, e),
                    this
                }
                getTimeOfTick(t, e=this.now()) {
                    return this._tickSource.getTimeOfTick(t, e)
                }
                getTicksAtTime(t) {
                    return this._tickSource.getTicksAtTime(t)
                }
                nextTickTime(t, e) {
                    var s = this.toSeconds(e)
                      , e = this.getTicksAtTime(s);
                    return this._tickSource.getTimeOfTick(e + t, s)
                }
                _loop() {
                    var t = this._lastUpdate
                      , e = this.now();
                    this._lastUpdate = e,
                    this.log("loop", t, e),
                    t !== e && (this._state.forEachBetween(t, e, t=>{
                        switch (t.state) {
                        case "started":
                            var e = this._tickSource.getTicksAtTime(t.time);
                            this.emit("start", t.time, e);
                            break;
                        case "stopped":
                            0 !== t.time && this.emit("stop", t.time);
                            break;
                        case "paused":
                            this.emit("pause", t.time)
                        }
                    }
                    ),
                    this._tickSource.forEachTickBetween(t, e, (t,e)=>{
                        this.callback(t, e)
                    }
                    ))
                }
                getStateAtTime(t) {
                    t = this.toSeconds(t);
                    return this._state.getValueAtTime(t)
                }
                dispose() {
                    return super.dispose(),
                    this.context.off("tick", this._boundLoop),
                    this._tickSource.dispose(),
                    this._state.dispose(),
                    this
                }
            }
            Fp.mixin(xd);
            class wd extends hd {
                constructor() {
                    super(yp(wd.getDefaults(), arguments, ["delayTime", "maxDelay"])),
                    this.name = "Delay";
                    var t = yp(wd.getDefaults(), arguments, ["delayTime", "maxDelay"])
                      , e = this.toSeconds(t.maxDelay);
                    this._maxDelay = Math.max(e, this.toSeconds(t.delayTime)),
                    this._delayNode = this.input = this.output = this.context.createDelay(e),
                    this.delayTime = new ad({
                        context: this.context,
                        param: this._delayNode.delayTime,
                        units: "time",
                        value: t.delayTime,
                        minValue: 0,
                        maxValue: this.maxDelay
                    }),
                    Np(this, "delayTime")
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        delayTime: 0,
                        maxDelay: 1
                    })
                }
                get maxDelay() {
                    return this._maxDelay
                }
                dispose() {
                    return super.dispose(),
                    this._delayNode.disconnect(),
                    this.delayTime.dispose(),
                    this
                }
            }
            class bd extends bp {
                constructor() {
                    super(),
                    this.name = "ToneAudioBuffers",
                    this._buffers = new Map,
                    this._loadingCount = 0;
                    const s = yp(bd.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
                    this.baseUrl = s.baseUrl,
                    Object.keys(s.urls).forEach(t=>{
                        this._loadingCount++;
                        var e = s.urls[t];
                        this.add(t, e, this._bufferLoaded.bind(this, s.onload), s.onerror)
                    }
                    )
                }
                static getDefaults() {
                    return {
                        baseUrl: "",
                        onerror: jp,
                        onload: jp,
                        urls: {}
                    }
                }
                has(t) {
                    return this._buffers.has(t.toString())
                }
                get(t) {
                    return Ju(this.has(t), `ToneAudioBuffers has no buffer named: ${t}`),
                    this._buffers.get(t.toString())
                }
                _bufferLoaded(t) {
                    this._loadingCount--,
                    0 === this._loadingCount && t && t()
                }
                get loaded() {
                    return Array.from(this._buffers).every(([,t])=>t.loaded)
                }
                add(t, e, s=jp, n=jp) {
                    return $u(e) ? (this.baseUrl && "data:audio/" === e.trim().substring(0, 11).toLowerCase() && (this.baseUrl = ""),
                    this._buffers.set(t.toString(), new Lp(this.baseUrl + e,s,n))) : this._buffers.set(t.toString(), new Lp(e,s,n)),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._buffers.forEach(t=>t.dispose()),
                    this._buffers.clear(),
                    this
                }
            }
            class Td extends ed {
                constructor() {
                    super(...arguments),
                    this.name = "MidiClass",
                    this.defaultUnits = "midi"
                }
                _frequencyToUnits(t) {
                    return $p(super._frequencyToUnits(t))
                }
                _ticksToUnits(t) {
                    return $p(super._ticksToUnits(t))
                }
                _beatsToUnits(t) {
                    return $p(super._beatsToUnits(t))
                }
                _secondsToUnits(t) {
                    return $p(super._secondsToUnits(t))
                }
                toMidi() {
                    return this.valueOf()
                }
                toFrequency() {
                    return Jp(this.toMidi())
                }
                transpose(t) {
                    return new Td(this.context,this.toMidi() + t)
                }
            }
            class Sd extends id {
                constructor() {
                    super(...arguments),
                    this.name = "Ticks",
                    this.defaultUnits = "i"
                }
                _now() {
                    return this.context.transport.ticks
                }
                _beatsToUnits(t) {
                    return this._getPPQ() * t
                }
                _secondsToUnits(t) {
                    return Math.floor(t / (60 / this._getBpm()) * this._getPPQ())
                }
                _ticksToUnits(t) {
                    return t
                }
                toTicks() {
                    return this.valueOf()
                }
                toSeconds() {
                    return this.valueOf() / this._getPPQ() * (60 / this._getBpm())
                }
            }
            class kd extends rd {
                constructor() {
                    super(...arguments),
                    this.name = "Draw",
                    this.expiration = .25,
                    this.anticipation = .008,
                    this._events = new Op,
                    this._boundDrawLoop = this._drawLoop.bind(this),
                    this._animationFrame = -1
                }
                schedule(t, e) {
                    return this._events.add({
                        callback: t,
                        time: this.toSeconds(e)
                    }),
                    1 === this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)),
                    this
                }
                cancel(t) {
                    return this._events.cancel(this.toSeconds(t)),
                    this
                }
                _drawLoop() {
                    for (var t = this.context.currentTime; this._events.length && this._events.peek().time - this.anticipation <= t; ) {
                        const e = this._events.shift();
                        e && t - e.time <= this.expiration && e.callback()
                    }
                    0 < this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop))
                }
                dispose() {
                    return super.dispose(),
                    this._events.dispose(),
                    cancelAnimationFrame(this._animationFrame),
                    this
                }
            }
            Ep(t=>{
                t.draw = new kd({
                    context: t
                })
            }
            ),
            qp(t=>{
                t.draw.dispose()
            }
            );
            class Cd extends bp {
                constructor() {
                    super(...arguments),
                    this.name = "IntervalTimeline",
                    this._root = null,
                    this._length = 0
                }
                add(t) {
                    Ju(Uu(t.time), "Events must have a time property"),
                    Ju(Uu(t.duration), "Events must have a duration parameter"),
                    t.time = t.time.valueOf();
                    let e = new Ad(t.time,t.time + t.duration,t);
                    for (null === this._root ? this._root = e : this._root.insert(e),
                    this._length++; null !== e; )
                        e.updateHeight(),
                        e.updateMax(),
                        this._rebalance(e),
                        e = e.parent;
                    return this
                }
                remove(t) {
                    if (null !== this._root) {
                        var e = [];
                        this._root.search(t.time, e);
                        for (const s of e)
                            if (s.event === t) {
                                this._removeNode(s),
                                this._length--;
                                break
                            }
                    }
                    return this
                }
                get length() {
                    return this._length
                }
                cancel(t) {
                    return this.forEachFrom(t, t=>this.remove(t)),
                    this
                }
                _setRoot(t) {
                    this._root = t,
                    null !== this._root && (this._root.parent = null)
                }
                _replaceNodeInParent(t, e) {
                    null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e,
                    this._rebalance(t.parent)) : this._setRoot(e)
                }
                _removeNode(s) {
                    if (null === s.left && null === s.right)
                        this._replaceNodeInParent(s, null);
                    else if (null === s.right)
                        this._replaceNodeInParent(s, s.left);
                    else if (null === s.left)
                        this._replaceNodeInParent(s, s.right);
                    else {
                        let t, e = null;
                        if (0 < s.getBalance())
                            if (null === s.left.right)
                                t = s.left,
                                t.right = s.right,
                                e = t;
                            else {
                                for (t = s.left.right; null !== t.right; )
                                    t = t.right;
                                t.parent && (t.parent.right = t.left,
                                e = t.parent,
                                t.left = s.left,
                                t.right = s.right)
                            }
                        else if (null === s.right.left)
                            t = s.right,
                            t.left = s.left,
                            e = t;
                        else {
                            for (t = s.right.left; null !== t.left; )
                                t = t.left;
                            t.parent && (t.parent.left = t.right,
                            e = t.parent,
                            t.left = s.left,
                            t.right = s.right)
                        }
                        null !== s.parent ? s.isLeftChild() ? s.parent.left = t : s.parent.right = t : this._setRoot(t),
                        e && this._rebalance(e)
                    }
                    s.dispose()
                }
                _rotateLeft(t) {
                    const e = t.parent
                      , s = t.isLeftChild()
                      , n = t.right;
                    n && (t.right = n.left,
                    n.left = t),
                    null !== e ? s ? e.left = n : e.right = n : this._setRoot(n)
                }
                _rotateRight(t) {
                    const e = t.parent
                      , s = t.isLeftChild()
                      , n = t.left;
                    n && (t.left = n.right,
                    n.right = t),
                    null !== e ? s ? e.left = n : e.right = n : this._setRoot(n)
                }
                _rebalance(t) {
                    var e = t.getBalance();
                    1 < e && t.left ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && t.right && (0 < t.right.getBalance() ? this._rotateRight(t.right) : this._rotateLeft(t))
                }
                get(t) {
                    if (null !== this._root) {
                        var s = [];
                        if (this._root.search(t, s),
                        0 < s.length) {
                            let e = s[0];
                            for (let t = 1; t < s.length; t++)
                                s[t].low > e.low && (e = s[t]);
                            return e.event
                        }
                    }
                    return null
                }
                forEach(e) {
                    if (null !== this._root) {
                        const s = [];
                        this._root.traverse(t=>s.push(t)),
                        s.forEach(t=>{
                            t.event && e(t.event)
                        }
                        )
                    }
                    return this
                }
                forEachAtTime(t, e) {
                    if (null !== this._root) {
                        const s = [];
                        this._root.search(t, s),
                        s.forEach(t=>{
                            t.event && e(t.event)
                        }
                        )
                    }
                    return this
                }
                forEachFrom(t, e) {
                    if (null !== this._root) {
                        const s = [];
                        this._root.searchAfter(t, s),
                        s.forEach(t=>{
                            t.event && e(t.event)
                        }
                        )
                    }
                    return this
                }
                dispose() {
                    return super.dispose(),
                    null !== this._root && this._root.traverse(t=>t.dispose()),
                    this._root = null,
                    this
                }
            }
            class Ad {
                constructor(t, e, s) {
                    this._left = null,
                    this._right = null,
                    this.parent = null,
                    this.height = 0,
                    this.event = s,
                    this.low = t,
                    this.high = e,
                    this.max = this.high
                }
                insert(t) {
                    t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t)
                }
                search(t, e) {
                    t > this.max || (null !== this.left && this.left.search(t, e),
                    this.low <= t && this.high > t && e.push(this),
                    this.low > t || null !== this.right && this.right.search(t, e))
                }
                searchAfter(t, e) {
                    this.low >= t && (e.push(this),
                    null !== this.left && this.left.searchAfter(t, e)),
                    null !== this.right && this.right.searchAfter(t, e)
                }
                traverse(t) {
                    t(this),
                    null !== this.left && this.left.traverse(t),
                    null !== this.right && this.right.traverse(t)
                }
                updateHeight() {
                    null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0
                }
                updateMax() {
                    this.max = this.high,
                    null !== this.left && (this.max = Math.max(this.max, this.left.max)),
                    null !== this.right && (this.max = Math.max(this.max, this.right.max))
                }
                getBalance() {
                    let t = 0;
                    return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)),
                    t
                }
                isLeftChild() {
                    return null !== this.parent && this.parent.left === this
                }
                get left() {
                    return this._left
                }
                set left(t) {
                    null !== (this._left = t) && (t.parent = this),
                    this.updateHeight(),
                    this.updateMax()
                }
                get right() {
                    return this._right
                }
                set right(t) {
                    null !== (this._right = t) && (t.parent = this),
                    this.updateHeight(),
                    this.updateMax()
                }
                dispose() {
                    this.parent = null,
                    this._left = null,
                    this._right = null,
                    this.event = null
                }
            }
            class Dd extends hd {
                constructor() {
                    super(yp(Dd.getDefaults(), arguments, ["volume"])),
                    this.name = "Volume";
                    var t = yp(Dd.getDefaults(), arguments, ["volume"]);
                    this.input = this.output = new pd({
                        context: this.context,
                        gain: t.volume,
                        units: "decibels"
                    }),
                    this.volume = this.output.gain,
                    Np(this, "volume"),
                    this._unmutedVolume = t.volume,
                    this.mute = t.mute
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        mute: !1,
                        volume: 0
                    })
                }
                get mute() {
                    return this.volume.value === -1 / 0
                }
                set mute(t) {
                    !this.mute && t ? (this._unmutedVolume = this.volume.value,
                    this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume)
                }
                dispose() {
                    return super.dispose(),
                    this.input.dispose(),
                    this.volume.dispose(),
                    this
                }
            }
            class Od extends hd {
                constructor() {
                    super(yp(Od.getDefaults(), arguments)),
                    this.name = "Destination",
                    this.input = new Dd({
                        context: this.context
                    }),
                    this.output = new pd({
                        context: this.context
                    }),
                    this.volume = this.input.volume;
                    var t = yp(Od.getDefaults(), arguments);
                    cd(this.input, this.output, this.context.rawContext.destination),
                    this.mute = t.mute,
                    this._internalChannels = [this.input, this.context.rawContext.destination, this.output]
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        mute: !1,
                        volume: 0
                    })
                }
                get mute() {
                    return this.input.mute
                }
                set mute(t) {
                    this.input.mute = t
                }
                chain(...t) {
                    return this.input.disconnect(),
                    t.unshift(this.input),
                    t.push(this.output),
                    cd(...t),
                    this
                }
                get maxChannelCount() {
                    return this.context.rawContext.destination.maxChannelCount
                }
                dispose() {
                    return super.dispose(),
                    this.volume.dispose(),
                    this
                }
            }
            Ep(t=>{
                t.destination = new Od({
                    context: t
                })
            }
            ),
            qp(t=>{
                t.destination.dispose()
            }
            );
            class Md extends bp {
                constructor(t) {
                    super(),
                    this.name = "TimelineValue",
                    this._timeline = new Op({
                        memory: 10
                    }),
                    this._initialValue = t
                }
                set(t, e) {
                    return this._timeline.add({
                        value: t,
                        time: e
                    }),
                    this
                }
                get(t) {
                    t = this._timeline.get(t);
                    return t ? t.value : this._initialValue
                }
            }
            class Ed {
                constructor(t, e) {
                    this.id = Ed._eventId++,
                    this._remainderTime = 0;
                    e = Object.assign(Ed.getDefaults(), e);
                    this.transport = t,
                    this.callback = e.callback,
                    this._once = e.once,
                    this.time = Math.floor(e.time),
                    this._remainderTime = e.time - this.time
                }
                static getDefaults() {
                    return {
                        callback: jp,
                        once: !1,
                        time: 0
                    }
                }
                get floatTime() {
                    return this.time + this._remainderTime
                }
                invoke(t) {
                    var e;
                    this.callback && (e = this.transport.bpm.getDurationOfTicks(1, t),
                    this.callback(t + this._remainderTime * e),
                    this._once && this.transport.clear(this.id))
                }
                dispose() {
                    return this.callback = void 0,
                    this
                }
            }
            Ed._eventId = 0;
            class Rd extends Ed {
                constructor(t, e) {
                    super(t, e),
                    this._currentId = -1,
                    this._nextId = -1,
                    this._nextTick = this.time,
                    this._boundRestart = this._restart.bind(this);
                    e = Object.assign(Rd.getDefaults(), e);
                    this.duration = e.duration,
                    this._interval = e.interval,
                    this._nextTick = e.time,
                    this.transport.on("start", this._boundRestart),
                    this.transport.on("loopStart", this._boundRestart),
                    this.transport.on("ticks", this._boundRestart),
                    this.context = this.transport.context,
                    this._restart()
                }
                static getDefaults() {
                    return Object.assign({}, Ed.getDefaults(), {
                        duration: 1 / 0,
                        interval: 1,
                        once: !1
                    })
                }
                invoke(t) {
                    this._createEvents(t),
                    super.invoke(t)
                }
                _createEvent() {
                    return Cp(this._nextTick, this.floatTime + this.duration) ? this.transport.scheduleOnce(this.invoke.bind(this), new Sd(this.context,this._nextTick).toSeconds()) : -1
                }
                _createEvents(t) {
                    Cp(this._nextTick + this._interval, this.floatTime + this.duration) && (this._nextTick += this._interval,
                    this._currentId = this._nextId,
                    this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new Sd(this.context,this._nextTick).toSeconds()))
                }
                _restart(t) {
                    this.transport.clear(this._currentId),
                    this.transport.clear(this._nextId),
                    this._nextTick = this.floatTime;
                    t = this.transport.getTicksAtTime(t);
                    Sp(t, this.time) && (this._nextTick = this.floatTime + Math.ceil((t - this.floatTime) / this._interval) * this._interval),
                    this._currentId = this._createEvent(),
                    this._nextTick += this._interval,
                    this._nextId = this._createEvent()
                }
                dispose() {
                    return super.dispose(),
                    this.transport.clear(this._currentId),
                    this.transport.clear(this._nextId),
                    this.transport.off("start", this._boundRestart),
                    this.transport.off("loopStart", this._boundRestart),
                    this.transport.off("ticks", this._boundRestart),
                    this
                }
            }
            class qd extends rd {
                constructor() {
                    super(yp(qd.getDefaults(), arguments)),
                    this.name = "Transport",
                    this._loop = new Md(!1),
                    this._loopStart = 0,
                    this._loopEnd = 0,
                    this._scheduledEvents = {},
                    this._timeline = new Op,
                    this._repeatedEvents = new Cd,
                    this._syncedSignals = [],
                    this._swingAmount = 0;
                    var t = yp(qd.getDefaults(), arguments);
                    this._ppq = t.ppq,
                    this._clock = new xd({
                        callback: this._processTick.bind(this),
                        context: this.context,
                        frequency: 0,
                        units: "bpm"
                    }),
                    this._bindClockEvents(),
                    this.bpm = this._clock.frequency,
                    this._clock.frequency.multiplier = t.ppq,
                    this.bpm.setValueAtTime(t.bpm, 0),
                    Np(this, "bpm"),
                    this._timeSignature = t.timeSignature,
                    this._swingTicks = t.ppq / 2
                }
                static getDefaults() {
                    return Object.assign(rd.getDefaults(), {
                        bpm: 120,
                        loopEnd: "4m",
                        loopStart: 0,
                        ppq: 192,
                        swing: 0,
                        swingSubdivision: "8n",
                        timeSignature: 4
                    })
                }
                _processTick(e, t) {
                    var s;
                    this._loop.get(e) && t >= this._loopEnd && (this.emit("loopEnd", e),
                    this._clock.setTicksAtTime(this._loopStart, e),
                    t = this._loopStart,
                    this.emit("loopStart", e, this._clock.getSecondsAtTime(e)),
                    this.emit("loop", e)),
                    0 < this._swingAmount && t % this._ppq != 0 && t % (2 * this._swingTicks) != 0 && (s = t % (2 * this._swingTicks) / (2 * this._swingTicks),
                    s = Math.sin(s * Math.PI) * this._swingAmount,
                    e += new Sd(this.context,2 * this._swingTicks / 3).toSeconds() * s),
                    np(!0),
                    this._timeline.forEachAtTime(t, t=>t.invoke(e)),
                    np(!1)
                }
                schedule(t, e) {
                    e = new Ed(this,{
                        callback: t,
                        time: new id(this.context,e).toTicks()
                    });
                    return this._addEvent(e, this._timeline)
                }
                scheduleRepeat(t, e, s, n=1 / 0) {
                    s = new Rd(this,{
                        callback: t,
                        duration: new td(this.context,n).toTicks(),
                        interval: new td(this.context,e).toTicks(),
                        time: new id(this.context,s).toTicks()
                    });
                    return this._addEvent(s, this._repeatedEvents)
                }
                scheduleOnce(t, e) {
                    e = new Ed(this,{
                        callback: t,
                        once: !0,
                        time: new id(this.context,e).toTicks()
                    });
                    return this._addEvent(e, this._timeline)
                }
                clear(t) {
                    if (this._scheduledEvents.hasOwnProperty(t)) {
                        const e = this._scheduledEvents[t.toString()];
                        e.timeline.remove(e.event),
                        e.event.dispose(),
                        delete this._scheduledEvents[t.toString()]
                    }
                    return this
                }
                _addEvent(t, e) {
                    return this._scheduledEvents[t.id.toString()] = {
                        event: t,
                        timeline: e
                    },
                    e.add(t),
                    t.id
                }
                cancel(t=0) {
                    t = this.toTicks(t);
                    return this._timeline.forEachFrom(t, t=>this.clear(t.id)),
                    this._repeatedEvents.forEachFrom(t, t=>this.clear(t.id)),
                    this
                }
                _bindClockEvents() {
                    this._clock.on("start", (t,e)=>{
                        e = new Sd(this.context,e).toSeconds(),
                        this.emit("start", t, e)
                    }
                    ),
                    this._clock.on("stop", t=>{
                        this.emit("stop", t)
                    }
                    ),
                    this._clock.on("pause", t=>{
                        this.emit("pause", t)
                    }
                    )
                }
                get state() {
                    return this._clock.getStateAtTime(this.now())
                }
                start(t, e) {
                    let s;
                    return this.context.resume(),
                    Uu(e) && (s = this.toTicks(e)),
                    this._clock.start(t, s),
                    this
                }
                stop(t) {
                    return this._clock.stop(t),
                    this
                }
                pause(t) {
                    return this._clock.pause(t),
                    this
                }
                toggle(t) {
                    return t = this.toSeconds(t),
                    "started" !== this._clock.getStateAtTime(t) ? this.start(t) : this.stop(t),
                    this
                }
                get timeSignature() {
                    return this._timeSignature
                }
                set timeSignature(t) {
                    Yu(t) && (t = t[0] / t[1] * 4),
                    this._timeSignature = t
                }
                get loopStart() {
                    return new td(this.context,this._loopStart,"i").toSeconds()
                }
                set loopStart(t) {
                    this._loopStart = this.toTicks(t)
                }
                get loopEnd() {
                    return new td(this.context,this._loopEnd,"i").toSeconds()
                }
                set loopEnd(t) {
                    this._loopEnd = this.toTicks(t)
                }
                get loop() {
                    return this._loop.get(this.now())
                }
                set loop(t) {
                    this._loop.set(t, this.now())
                }
                setLoopPoints(t, e) {
                    return this.loopStart = t,
                    this.loopEnd = e,
                    this
                }
                get swing() {
                    return this._swingAmount
                }
                set swing(t) {
                    this._swingAmount = t
                }
                get swingSubdivision() {
                    return new Sd(this.context,this._swingTicks).toNotation()
                }
                set swingSubdivision(t) {
                    this._swingTicks = this.toTicks(t)
                }
                get position() {
                    var t = this.now()
                      , t = this._clock.getTicksAtTime(t);
                    return new Sd(this.context,t).toBarsBeatsSixteenths()
                }
                set position(t) {
                    t = this.toTicks(t);
                    this.ticks = t
                }
                get seconds() {
                    return this._clock.seconds
                }
                set seconds(t) {
                    var e = this.now()
                      , e = this._clock.frequency.timeToTicks(t, e);
                    this.ticks = e
                }
                get progress() {
                    if (this.loop) {
                        var t = this.now();
                        return (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart)
                    }
                    return 0
                }
                get ticks() {
                    return this._clock.ticks
                }
                set ticks(t) {
                    var e, s;
                    this._clock.ticks !== t && (e = this.now(),
                    "started" === this.state ? (s = this._clock.getTicksAtTime(e),
                    s = e + this._clock.frequency.getDurationOfTicks(Math.ceil(s) - s, e),
                    this.emit("stop", s),
                    this._clock.setTicksAtTime(t, s),
                    this.emit("start", s, this._clock.getSecondsAtTime(s))) : (this.emit("ticks", e),
                    this._clock.setTicksAtTime(t, e)))
                }
                getTicksAtTime(t) {
                    return this._clock.getTicksAtTime(t)
                }
                getSecondsAtTime(t) {
                    return this._clock.getSecondsAtTime(t)
                }
                get PPQ() {
                    return this._clock.frequency.multiplier
                }
                set PPQ(t) {
                    this._clock.frequency.multiplier = t
                }
                nextSubdivision(t) {
                    if (t = this.toTicks(t),
                    "started" !== this.state)
                        return 0;
                    var e = this.now()
                      , t = t - this.getTicksAtTime(e) % t;
                    return this._clock.nextTickTime(t, e)
                }
                syncSignal(t, e) {
                    if (!e) {
                        const n = this.now();
                        var s;
                        e = 0 !== t.getValueAtTime(n) ? (s = 1 / (60 / this.bpm.getValueAtTime(n) / this.PPQ),
                        t.getValueAtTime(n) / s) : 0
                    }
                    const n = new pd(e);
                    return this.bpm.connect(n),
                    n.connect(t._param),
                    this._syncedSignals.push({
                        initial: t.value,
                        ratio: n,
                        signal: t
                    }),
                    t.value = 0,
                    this
                }
                unsyncSignal(e) {
                    for (let t = this._syncedSignals.length - 1; 0 <= t; t--) {
                        const s = this._syncedSignals[t];
                        s.signal === e && (s.ratio.dispose(),
                        s.signal.value = s.initial,
                        this._syncedSignals.splice(t, 1))
                    }
                    return this
                }
                dispose() {
                    return super.dispose(),
                    this._clock.dispose(),
                    Pp(this, "bpm"),
                    this._timeline.dispose(),
                    this._repeatedEvents.dispose(),
                    this
                }
            }
            Fp.mixin(qd),
            Ep(t=>{
                t.transport = new qd({
                    context: t
                })
            }
            ),
            qp(t=>{
                t.transport.dispose()
            }
            );
            class Fd extends hd {
                constructor(t) {
                    super(t),
                    this.input = void 0,
                    this._state = new od("stopped"),
                    this._synced = !1,
                    this._scheduled = [],
                    this._syncedStart = jp,
                    this._syncedStop = jp,
                    this._state.memory = 100,
                    this._state.increasing = !0,
                    this._volume = this.output = new Dd({
                        context: this.context,
                        mute: t.mute,
                        volume: t.volume
                    }),
                    this.volume = this._volume.volume,
                    Np(this, "volume"),
                    this.onstop = t.onstop
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        mute: !1,
                        onstop: jp,
                        volume: 0
                    })
                }
                get state() {
                    return this._synced ? "started" === this.context.transport.state ? this._state.getValueAtTime(this.context.transport.seconds) : "stopped" : this._state.getValueAtTime(this.now())
                }
                get mute() {
                    return this._volume.mute
                }
                set mute(t) {
                    this._volume.mute = t
                }
                _clampToCurrentTime(t) {
                    return this._synced ? t : Math.max(t, this.context.currentTime)
                }
                start(t, e, s) {
                    var n = Bu(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t)
                      , n = this._clampToCurrentTime(n);
                    if (this._synced || "started" !== this._state.getValueAtTime(n))
                        if (this.log("start", n),
                        this._state.setStateAtTime("started", n),
                        this._synced) {
                            const i = this._state.get(n);
                            i && (i.offset = this.toSeconds(xp(e, 0)),
                            i.duration = s ? this.toSeconds(s) : void 0);
                            t = this.context.transport.schedule(t=>{
                                this._start(t, e, s)
                            }
                            , n);
                            this._scheduled.push(t),
                            "started" === this.context.transport.state && this.context.transport.getSecondsAtTime(this.immediate()) > n && this._syncedStart(this.now(), this.context.transport.seconds)
                        } else
                            tp(this.context),
                            this._start(n, e, s);
                    else
                        Ju(Sp(n, this._state.get(n).time), "Start time must be strictly greater than previous start time"),
                        this._state.cancel(n),
                        this._state.setStateAtTime("started", n),
                        this.log("restart", n),
                        this.restart(n, e, s);
                    return this
                }
                stop(t) {
                    t = Bu(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t),
                    t = this._clampToCurrentTime(t);
                    if ("started" === this._state.getValueAtTime(t) || Uu(this._state.getNextState("started", t))) {
                        if (this.log("stop", t),
                        this._synced) {
                            const e = this.context.transport.schedule(this._stop.bind(this), t);
                            this._scheduled.push(e)
                        } else
                            this._stop(t);
                        this._state.cancel(t),
                        this._state.setStateAtTime("stopped", t)
                    }
                    return this
                }
                restart(t, e, s) {
                    return t = this.toSeconds(t),
                    "started" === this._state.getValueAtTime(t) && (this._state.cancel(t),
                    this._restart(t, e, s)),
                    this
                }
                sync() {
                    return this._synced || (this._synced = !0,
                    this._syncedStart = (e,s)=>{
                        if (0 < s) {
                            var n = this._state.get(s);
                            if (n && "started" === n.state && n.time !== s) {
                                s = s - this.toSeconds(n.time);
                                let t;
                                n.duration && (t = this.toSeconds(n.duration) - s),
                                this._start(e, this.toSeconds(n.offset) + s, t)
                            }
                        }
                    }
                    ,
                    this._syncedStop = t=>{
                        var e = this.context.transport.getSecondsAtTime(Math.max(t - this.sampleTime, 0));
                        "started" === this._state.getValueAtTime(e) && this._stop(t)
                    }
                    ,
                    this.context.transport.on("start", this._syncedStart),
                    this.context.transport.on("loopStart", this._syncedStart),
                    this.context.transport.on("stop", this._syncedStop),
                    this.context.transport.on("pause", this._syncedStop),
                    this.context.transport.on("loopEnd", this._syncedStop)),
                    this
                }
                unsync() {
                    return this._synced && (this.context.transport.off("stop", this._syncedStop),
                    this.context.transport.off("pause", this._syncedStop),
                    this.context.transport.off("loopEnd", this._syncedStop),
                    this.context.transport.off("start", this._syncedStart),
                    this.context.transport.off("loopStart", this._syncedStart)),
                    this._synced = !1,
                    this._scheduled.forEach(t=>this.context.transport.clear(t)),
                    this._scheduled = [],
                    this._state.cancel(0),
                    this._stop(0),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this.onstop = jp,
                    this.unsync(),
                    this._volume.dispose(),
                    this._state.dispose(),
                    this
                }
            }
            class Id extends dd {
                constructor() {
                    super(yp(Id.getDefaults(), arguments, ["url", "onload"])),
                    this.name = "ToneBufferSource",
                    this._source = this.context.createBufferSource(),
                    this._internalChannels = [this._source],
                    this._sourceStarted = !1,
                    this._sourceStopped = !1;
                    var t = yp(Id.getDefaults(), arguments, ["url", "onload"]);
                    ld(this._source, this._gainNode),
                    this._source.onended = ()=>this._stopSource(),
                    this.playbackRate = new ad({
                        context: this.context,
                        param: this._source.playbackRate,
                        units: "positive",
                        value: t.playbackRate
                    }),
                    this.loop = t.loop,
                    this.loopStart = t.loopStart,
                    this.loopEnd = t.loopEnd,
                    this._buffer = new Lp(t.url,t.onload,t.onerror),
                    this._internalChannels.push(this._source)
                }
                static getDefaults() {
                    return Object.assign(dd.getDefaults(), {
                        url: new Lp,
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        onload: jp,
                        onerror: jp,
                        playbackRate: 1
                    })
                }
                get fadeIn() {
                    return this._fadeIn
                }
                set fadeIn(t) {
                    this._fadeIn = t
                }
                get fadeOut() {
                    return this._fadeOut
                }
                set fadeOut(t) {
                    this._fadeOut = t
                }
                get curve() {
                    return this._curve
                }
                set curve(t) {
                    this._curve = t
                }
                start(t, e, s, n=1) {
                    Ju(this.buffer.loaded, "buffer is either not set or not loaded");
                    t = this.toSeconds(t);
                    this._startGain(t, n),
                    e = this.loop ? xp(e, this.loopStart) : xp(e, 0);
                    let i = Math.max(this.toSeconds(e), 0);
                    if (this.loop) {
                        const r = this.toSeconds(this.loopEnd) || this.buffer.duration
                          , e = this.toSeconds(this.loopStart)
                          , o = r - e;
                        kp(i, r) && (i = (i - e) % o + e),
                        Ap(i, this.buffer.duration) && (i = 0)
                    }
                    return this._source.buffer = this.buffer.get(),
                    this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration,
                    Cp(i, this.buffer.duration) && (this._sourceStarted = !0,
                    this._source.start(t, i)),
                    Uu(s) && (s = this.toSeconds(s),
                    s = Math.max(s, 0),
                    this.stop(t + s)),
                    this
                }
                _stopSource(t) {
                    !this._sourceStopped && this._sourceStarted && (this._sourceStopped = !0,
                    this._source.stop(this.toSeconds(t)),
                    this._onended())
                }
                get loopStart() {
                    return this._source.loopStart
                }
                set loopStart(t) {
                    this._source.loopStart = this.toSeconds(t)
                }
                get loopEnd() {
                    return this._source.loopEnd
                }
                set loopEnd(t) {
                    this._source.loopEnd = this.toSeconds(t)
                }
                get buffer() {
                    return this._buffer
                }
                set buffer(t) {
                    this._buffer.set(t)
                }
                get loop() {
                    return this._source.loop
                }
                set loop(t) {
                    this._source.loop = t,
                    this._sourceStarted && this.cancelStop()
                }
                dispose() {
                    return super.dispose(),
                    this._source.onended = null,
                    this._source.disconnect(),
                    this._buffer.dispose(),
                    this.playbackRate.dispose(),
                    this
                }
            }
            class Vd extends Fd {
                constructor() {
                    super(yp(Vd.getDefaults(), arguments, ["type"])),
                    this.name = "Noise",
                    this._source = null;
                    var t = yp(Vd.getDefaults(), arguments, ["type"]);
                    this._playbackRate = t.playbackRate,
                    this.type = t.type,
                    this._fadeIn = t.fadeIn,
                    this._fadeOut = t.fadeOut
                }
                static getDefaults() {
                    return Object.assign(Fd.getDefaults(), {
                        fadeIn: 0,
                        fadeOut: 0,
                        playbackRate: 1,
                        type: "white"
                    })
                }
                get type() {
                    return this._type
                }
                set type(t) {
                    if (Ju(t in jd, "Noise: invalid type: " + t),
                    this._type !== t && (this._type = t,
                    "started" === this.state)) {
                        const t = this.now();
                        this._stop(t),
                        this._start(t)
                    }
                }
                get playbackRate() {
                    return this._playbackRate
                }
                set playbackRate(t) {
                    this._playbackRate = t,
                    this._source && (this._source.playbackRate.value = t)
                }
                _start(t) {
                    var e = jd[this._type];
                    this._source = new Id({
                        url: e,
                        context: this.context,
                        fadeIn: this._fadeIn,
                        fadeOut: this._fadeOut,
                        loop: !0,
                        onended: ()=>this.onstop(this),
                        playbackRate: this._playbackRate
                    }).connect(this.output),
                    this._source.start(this.toSeconds(t), Math.random() * (e.duration - .001))
                }
                _stop(t) {
                    this._source && (this._source.stop(this.toSeconds(t)),
                    this._source = null)
                }
                get fadeIn() {
                    return this._fadeIn
                }
                set fadeIn(t) {
                    this._fadeIn = t,
                    this._source && (this._source.fadeIn = this._fadeIn)
                }
                get fadeOut() {
                    return this._fadeOut
                }
                set fadeOut(t) {
                    this._fadeOut = t,
                    this._source && (this._source.fadeOut = this._fadeOut)
                }
                _restart(t) {
                    this._stop(t),
                    this._start(t)
                }
                dispose() {
                    return super.dispose(),
                    this._source && this._source.disconnect(),
                    this
                }
            }
            const Nd = 220500
              , Pd = {
                brown: null,
                pink: null,
                white: null
            }
              , jd = {
                get brown() {
                    if (!Pd.brown) {
                        const n = [];
                        for (let t = 0; t < 2; t++) {
                            const i = new Float32Array(Nd);
                            n[t] = i;
                            let e = 0;
                            for (let t = 0; t < Nd; t++) {
                                var s = 2 * Math.random() - 1;
                                i[t] = (e + .02 * s) / 1.02,
                                e = i[t],
                                i[t] *= 3.5
                            }
                        }
                        Pd.brown = (new Lp).fromArray(n)
                    }
                    return Pd.brown
                },
                get pink() {
                    if (!Pd.pink) {
                        const c = [];
                        for (let t = 0; t < 2; t++) {
                            const l = new Float32Array(Nd);
                            let e, s, n, i, r, o, a;
                            c[t] = l;
                            for (let t = e = s = n = i = r = o = a = 0; t < Nd; t++) {
                                var h = 2 * Math.random() - 1;
                                e = .99886 * e + .0555179 * h,
                                s = .99332 * s + .0750759 * h,
                                n = .969 * n + .153852 * h,
                                i = .8665 * i + .3104856 * h,
                                r = .55 * r + .5329522 * h,
                                o = -.7616 * o - .016898 * h,
                                l[t] = e + s + n + i + r + o + a + .5362 * h,
                                l[t] *= .11,
                                a = .115926 * h
                            }
                        }
                        Pd.pink = (new Lp).fromArray(c)
                    }
                    return Pd.pink
                },
                get white() {
                    if (!Pd.white) {
                        const e = [];
                        for (let t = 0; t < 2; t++) {
                            const s = new Float32Array(Nd);
                            e[t] = s;
                            for (let t = 0; t < Nd; t++)
                                s[t] = 2 * Math.random() - 1
                        }
                        Pd.white = (new Lp).fromArray(e)
                    }
                    return Pd.white
                }
            };
            class Ld extends hd {
                constructor() {
                    super(yp(Ld.getDefaults(), arguments, ["volume"])),
                    this.name = "UserMedia";
                    var t = yp(Ld.getDefaults(), arguments, ["volume"]);
                    this._volume = this.output = new Dd({
                        context: this.context,
                        volume: t.volume
                    }),
                    this.volume = this._volume.volume,
                    Np(this, "volume"),
                    this.mute = t.mute
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        mute: !1,
                        volume: 0
                    })
                }
                open(n) {
                    return up(this, void 0, void 0, function*() {
                        Ju(Ld.supported, "UserMedia is not supported"),
                        "started" === this.state && this.close();
                        const t = yield Ld.enumerateDevices();
                        Qu(n) ? this._device = t[n] : (this._device = t.find(t=>t.label === n || t.deviceId === n),
                        !this._device && 0 < t.length && (this._device = t[0]),
                        Ju(Uu(this._device), `No matching device ${n}`));
                        const e = {
                            audio: {
                                echoCancellation: !1,
                                sampleRate: this.context.sampleRate,
                                noiseSuppression: !1,
                                mozNoiseSuppression: !1
                            }
                        };
                        this._device && (e.audio.deviceId = this._device.deviceId);
                        var s = yield navigator.mediaDevices.getUserMedia(e);
                        if (!this._stream) {
                            this._stream = s;
                            const n = this.context.createMediaStreamSource(s);
                            ld(n, this.output),
                            this._mediaStream = n
                        }
                        return this
                    })
                }
                close() {
                    return this._stream && this._mediaStream && (this._stream.getAudioTracks().forEach(t=>{
                        t.stop()
                    }
                    ),
                    this._stream = void 0,
                    this._mediaStream.disconnect(),
                    this._mediaStream = void 0),
                    this._device = void 0,
                    this
                }
                static enumerateDevices() {
                    return up(this, void 0, void 0, function*() {
                        return (yield navigator.mediaDevices.enumerateDevices()).filter(t=>"audioinput" === t.kind)
                    })
                }
                get state() {
                    return this._stream && this._stream.active ? "started" : "stopped"
                }
                get deviceId() {
                    return this._device ? this._device.deviceId : void 0
                }
                get groupId() {
                    return this._device ? this._device.groupId : void 0
                }
                get label() {
                    return this._device ? this._device.label : void 0
                }
                get mute() {
                    return this._volume.mute
                }
                set mute(t) {
                    this._volume.mute = t
                }
                dispose() {
                    return super.dispose(),
                    this.close(),
                    this._volume.dispose(),
                    this.volume.dispose(),
                    this
                }
                static get supported() {
                    return Uu(navigator.mediaDevices) && Uu(navigator.mediaDevices.getUserMedia)
                }
            }
            function zd(s, n) {
                return up(this, void 0, void 0, function*() {
                    const t = n / s.context.sampleRate
                      , e = new zp(1,t,s.context.sampleRate);
                    return new s.constructor(Object.assign(s.get(), {
                        frequency: 2 / t,
                        detune: 0,
                        context: e
                    })).toDestination().start(0),
                    (yield e.render()).getChannelData(0)
                })
            }
            class Wd extends dd {
                constructor() {
                    super(yp(Wd.getDefaults(), arguments, ["frequency", "type"])),
                    this.name = "ToneOscillatorNode",
                    this._oscillator = this.context.createOscillator(),
                    this._internalChannels = [this._oscillator];
                    var t = yp(Wd.getDefaults(), arguments, ["frequency", "type"]);
                    ld(this._oscillator, this._gainNode),
                    this.type = t.type,
                    this.frequency = new ad({
                        context: this.context,
                        param: this._oscillator.frequency,
                        units: "frequency",
                        value: t.frequency
                    }),
                    this.detune = new ad({
                        context: this.context,
                        param: this._oscillator.detune,
                        units: "cents",
                        value: t.detune
                    }),
                    Np(this, ["frequency", "detune"])
                }
                static getDefaults() {
                    return Object.assign(dd.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        type: "sine"
                    })
                }
                start(t) {
                    t = this.toSeconds(t);
                    return this.log("start", t),
                    this._startGain(t),
                    this._oscillator.start(t),
                    this
                }
                _stopSource(t) {
                    this._oscillator.stop(t)
                }
                setPeriodicWave(t) {
                    return this._oscillator.setPeriodicWave(t),
                    this
                }
                get type() {
                    return this._oscillator.type
                }
                set type(t) {
                    this._oscillator.type = t
                }
                dispose() {
                    return super.dispose(),
                    "started" === this.state && this.stop(),
                    this._oscillator.disconnect(),
                    this.frequency.dispose(),
                    this.detune.dispose(),
                    this
                }
            }
            class Bd extends Fd {
                constructor() {
                    super(yp(Bd.getDefaults(), arguments, ["frequency", "type"])),
                    this.name = "Oscillator",
                    this._oscillator = null;
                    const t = yp(Bd.getDefaults(), arguments, ["frequency", "type"]);
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }),
                    Np(this, "frequency"),
                    this.detune = new _d({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }),
                    Np(this, "detune"),
                    this._partials = t.partials,
                    this._partialCount = t.partialCount,
                    this._type = t.type,
                    t.partialCount && "custom" !== t.type && (this._type = this.baseType + t.partialCount.toString()),
                    this.phase = t.phase
                }
                static getDefaults() {
                    return Object.assign(Fd.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        partialCount: 0,
                        partials: [],
                        phase: 0,
                        type: "sine"
                    })
                }
                _start(t) {
                    var e = this.toSeconds(t)
                      , t = new Wd({
                        context: this.context,
                        onended: ()=>this.onstop(this)
                    });
                    this._oscillator = t,
                    this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type,
                    this._oscillator.connect(this.output),
                    this.frequency.connect(this._oscillator.frequency),
                    this.detune.connect(this._oscillator.detune),
                    this._oscillator.start(e)
                }
                _stop(t) {
                    t = this.toSeconds(t);
                    this._oscillator && this._oscillator.stop(t)
                }
                _restart(t) {
                    t = this.toSeconds(t);
                    return this.log("restart", t),
                    this._oscillator && this._oscillator.cancelStop(),
                    this._state.cancel(t),
                    this
                }
                syncFrequency() {
                    return this.context.transport.syncSignal(this.frequency),
                    this
                }
                unsyncFrequency() {
                    return this.context.transport.unsyncSignal(this.frequency),
                    this
                }
                _getCachedPeriodicWave() {
                    if ("custom" === this._type)
                        return Bd._periodicWaveCache.find(t=>{
                            return t.phase === this._phase && (t = t.partials,
                            s = this._partials,
                            t.length === s.length && t.every((t,e)=>s[e] === t));
                            var s
                        }
                        );
                    var t = Bd._periodicWaveCache.find(t=>t.type === this._type && t.phase === this._phase);
                    return this._partialCount = t ? t.partialCount : this._partialCount,
                    t
                }
                get type() {
                    return this._type
                }
                set type(t) {
                    this._type = t;
                    const e = -1 !== ["sine", "square", "sawtooth", "triangle"].indexOf(t);
                    if (0 === this._phase && e)
                        this._wave = void 0,
                        this._partialCount = 0,
                        null !== this._oscillator && (this._oscillator.type = t);
                    else {
                        const e = this._getCachedPeriodicWave();
                        if (Uu(e)) {
                            const {partials: t, wave: s} = e;
                            this._wave = s,
                            this._partials = t,
                            null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave)
                        } else {
                            const [e,n] = this._getRealImaginary(t, this._phase)
                              , i = this.context.createPeriodicWave(e, n);
                            this._wave = i,
                            null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave),
                            Bd._periodicWaveCache.push({
                                imag: n,
                                partialCount: this._partialCount,
                                partials: this._partials,
                                phase: this._phase,
                                real: e,
                                type: this._type,
                                wave: this._wave
                            }),
                            100 < Bd._periodicWaveCache.length && Bd._periodicWaveCache.shift()
                        }
                    }
                }
                get baseType() {
                    return this._type.replace(this.partialCount.toString(), "")
                }
                set baseType(t) {
                    this.partialCount && "custom" !== this._type && "custom" !== t ? this.type = t + this.partialCount : this.type = t
                }
                get partialCount() {
                    return this._partialCount
                }
                set partialCount(t) {
                    Ku(t, 0);
                    let s = this._type;
                    var e = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
                    if (e && (s = e[1]),
                    "custom" !== this._type)
                        this.type = 0 === t ? s : s + t.toString();
                    else {
                        const s = new Float32Array(t);
                        this._partials.forEach((t,e)=>s[e] = t),
                        this._partials = Array.from(s),
                        this.type = this._type
                    }
                }
                _getRealImaginary(s, n) {
                    let i = 2048;
                    const r = new Float32Array(i)
                      , o = new Float32Array(i);
                    let a = 1;
                    if ("custom" === s) {
                        if (a = this._partials.length + 1,
                        this._partialCount = this._partials.length,
                        i = a,
                        0 === this._partials.length)
                            return [r, o]
                    } else {
                        const n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(s);
                        n ? (a = parseInt(n[2], 10) + 1,
                        this._partialCount = parseInt(n[2], 10),
                        s = n[1],
                        a = Math.max(a, 2),
                        i = a) : this._partialCount = 0,
                        this._partials = []
                    }
                    for (let e = 1; e < i; ++e) {
                        const i = 2 / (e * Math.PI);
                        let t;
                        switch (s) {
                        case "sine":
                            t = e <= a ? 1 : 0,
                            this._partials[e - 1] = t;
                            break;
                        case "square":
                            t = 1 & e ? 2 * i : 0,
                            this._partials[e - 1] = t;
                            break;
                        case "sawtooth":
                            t = i * (1 & e ? 1 : -1),
                            this._partials[e - 1] = t;
                            break;
                        case "triangle":
                            t = 1 & e ? i * i * 2 * (e - 1 >> 1 & 1 ? -1 : 1) : 0,
                            this._partials[e - 1] = t;
                            break;
                        case "custom":
                            t = this._partials[e - 1];
                            break;
                        default:
                            throw new TypeError("Oscillator: invalid type: " + s)
                        }
                        0 !== t ? (r[e] = -t * Math.sin(n * e),
                        o[e] = t * Math.cos(n * e)) : (r[e] = 0,
                        o[e] = 0)
                    }
                    return [r, o]
                }
                _inverseFFT(e, s, n) {
                    let i = 0;
                    var r = e.length;
                    for (let t = 0; t < r; t++)
                        i += e[t] * Math.cos(t * n) + s[t] * Math.sin(t * n);
                    return i
                }
                getInitialValue() {
                    var [e,s] = this._getRealImaginary(this._type, 0);
                    let n = 0;
                    var i = 2 * Math.PI;
                    for (let t = 0; t < 32; t++)
                        n = Math.max(this._inverseFFT(e, s, t / 32 * i), n);
                    return Dp(-this._inverseFFT(e, s, this._phase) / n, -1, 1)
                }
                get partials() {
                    return this._partials.slice(0, this.partialCount)
                }
                set partials(t) {
                    this._partials = t,
                    this._partialCount = this._partials.length,
                    t.length && (this.type = "custom")
                }
                get phase() {
                    return this._phase * (180 / Math.PI)
                }
                set phase(t) {
                    this._phase = t * Math.PI / 180,
                    this.type = this._type
                }
                asArray(t=1024) {
                    return up(this, void 0, void 0, function*() {
                        return zd(this, t)
                    })
                }
                dispose() {
                    return super.dispose(),
                    null !== this._oscillator && this._oscillator.dispose(),
                    this._wave = void 0,
                    this.frequency.dispose(),
                    this.detune.dispose(),
                    this
                }
            }
            Bd._periodicWaveCache = [];
            class Ud extends hd {
                constructor() {
                    super(Object.assign(yp(Ud.getDefaults(), arguments, ["context"])))
                }
                connect(t, e=0, s=0) {
                    return md(this, t, e, s),
                    this
                }
            }
            class Gd extends Ud {
                constructor() {
                    super(Object.assign(yp(Gd.getDefaults(), arguments, ["mapping", "length"]))),
                    this.name = "WaveShaper",
                    this._shaper = this.context.createWaveShaper(),
                    this.input = this._shaper,
                    this.output = this._shaper;
                    var t = yp(Gd.getDefaults(), arguments, ["mapping", "length"]);
                    Yu(t.mapping) || t.mapping instanceof Float32Array ? this.curve = Float32Array.from(t.mapping) : Gu(t.mapping) && this.setMap(t.mapping, t.length)
                }
                static getDefaults() {
                    return Object.assign(_d.getDefaults(), {
                        length: 1024
                    })
                }
                setMap(s, n=1024) {
                    const i = new Float32Array(n);
                    for (let t = 0, e = n; t < e; t++) {
                        const n = t / (e - 1) * 2 - 1;
                        i[t] = s(n, t)
                    }
                    return this.curve = i,
                    this
                }
                get curve() {
                    return this._shaper.curve
                }
                set curve(t) {
                    this._shaper.curve = t
                }
                get oversample() {
                    return this._shaper.oversample
                }
                set oversample(e) {
                    Ju(["none", "2x", "4x"].some(t=>t.includes(e)), "oversampling must be either 'none', '2x', or '4x'"),
                    this._shaper.oversample = e
                }
                dispose() {
                    return super.dispose(),
                    this._shaper.disconnect(),
                    this
                }
            }
            class Qd extends Ud {
                constructor() {
                    super(...arguments),
                    this.name = "AudioToGain",
                    this._norm = new Gd({
                        context: this.context,
                        mapping: t=>(t + 1) / 2
                    }),
                    this.input = this._norm,
                    this.output = this._norm
                }
                dispose() {
                    return super.dispose(),
                    this._norm.dispose(),
                    this
                }
            }
            class Zd extends _d {
                constructor() {
                    super(Object.assign(yp(Zd.getDefaults(), arguments, ["value"]))),
                    this.name = "Multiply",
                    this.override = !1;
                    var t = yp(Zd.getDefaults(), arguments, ["value"]);
                    this._mult = this.input = this.output = new pd({
                        context: this.context,
                        minValue: t.minValue,
                        maxValue: t.maxValue
                    }),
                    this.factor = this._param = this._mult.gain,
                    this.factor.setValueAtTime(t.value, 0)
                }
                static getDefaults() {
                    return Object.assign(_d.getDefaults(), {
                        value: 0
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._mult.dispose(),
                    this
                }
            }
            class Xd extends Fd {
                constructor() {
                    super(yp(Xd.getDefaults(), arguments, ["frequency", "type", "modulationType"])),
                    this.name = "AMOscillator",
                    this._modulationScale = new Qd({
                        context: this.context
                    }),
                    this._modulationNode = new pd({
                        context: this.context
                    });
                    var t = yp(Xd.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
                    this._carrier = new Bd({
                        context: this.context,
                        detune: t.detune,
                        frequency: t.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t.phase,
                        type: t.type
                    }),
                    this.frequency = this._carrier.frequency,
                    this.detune = this._carrier.detune,
                    this._modulator = new Bd({
                        context: this.context,
                        phase: t.phase,
                        type: t.modulationType
                    }),
                    this.harmonicity = new Zd({
                        context: this.context,
                        units: "positive",
                        value: t.harmonicity
                    }),
                    this.frequency.chain(this.harmonicity, this._modulator.frequency),
                    this._modulator.chain(this._modulationScale, this._modulationNode.gain),
                    this._carrier.chain(this._modulationNode, this.output),
                    Np(this, ["frequency", "detune", "harmonicity"])
                }
                static getDefaults() {
                    return Object.assign(Bd.getDefaults(), {
                        harmonicity: 1,
                        modulationType: "square"
                    })
                }
                _start(t) {
                    this._modulator.start(t),
                    this._carrier.start(t)
                }
                _stop(t) {
                    this._modulator.stop(t),
                    this._carrier.stop(t)
                }
                _restart(t) {
                    this._modulator.restart(t),
                    this._carrier.restart(t)
                }
                get type() {
                    return this._carrier.type
                }
                set type(t) {
                    this._carrier.type = t
                }
                get baseType() {
                    return this._carrier.baseType
                }
                set baseType(t) {
                    this._carrier.baseType = t
                }
                get partialCount() {
                    return this._carrier.partialCount
                }
                set partialCount(t) {
                    this._carrier.partialCount = t
                }
                get modulationType() {
                    return this._modulator.type
                }
                set modulationType(t) {
                    this._modulator.type = t
                }
                get phase() {
                    return this._carrier.phase
                }
                set phase(t) {
                    this._carrier.phase = t,
                    this._modulator.phase = t
                }
                get partials() {
                    return this._carrier.partials
                }
                set partials(t) {
                    this._carrier.partials = t
                }
                asArray(t=1024) {
                    return up(this, void 0, void 0, function*() {
                        return zd(this, t)
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.frequency.dispose(),
                    this.detune.dispose(),
                    this.harmonicity.dispose(),
                    this._carrier.dispose(),
                    this._modulator.dispose(),
                    this._modulationNode.dispose(),
                    this._modulationScale.dispose(),
                    this
                }
            }
            class Yd extends Fd {
                constructor() {
                    super(yp(Yd.getDefaults(), arguments, ["frequency", "type", "modulationType"])),
                    this.name = "FMOscillator",
                    this._modulationNode = new pd({
                        context: this.context,
                        gain: 0
                    });
                    var t = yp(Yd.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
                    this._carrier = new Bd({
                        context: this.context,
                        detune: t.detune,
                        frequency: 0,
                        onstop: ()=>this.onstop(this),
                        phase: t.phase,
                        type: t.type
                    }),
                    this.detune = this._carrier.detune,
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }),
                    this._modulator = new Bd({
                        context: this.context,
                        phase: t.phase,
                        type: t.modulationType
                    }),
                    this.harmonicity = new Zd({
                        context: this.context,
                        units: "positive",
                        value: t.harmonicity
                    }),
                    this.modulationIndex = new Zd({
                        context: this.context,
                        units: "positive",
                        value: t.modulationIndex
                    }),
                    this.frequency.connect(this._carrier.frequency),
                    this.frequency.chain(this.harmonicity, this._modulator.frequency),
                    this.frequency.chain(this.modulationIndex, this._modulationNode),
                    this._modulator.connect(this._modulationNode.gain),
                    this._modulationNode.connect(this._carrier.frequency),
                    this._carrier.connect(this.output),
                    this.detune.connect(this._modulator.detune),
                    Np(this, ["modulationIndex", "frequency", "detune", "harmonicity"])
                }
                static getDefaults() {
                    return Object.assign(Bd.getDefaults(), {
                        harmonicity: 1,
                        modulationIndex: 2,
                        modulationType: "square"
                    })
                }
                _start(t) {
                    this._modulator.start(t),
                    this._carrier.start(t)
                }
                _stop(t) {
                    this._modulator.stop(t),
                    this._carrier.stop(t)
                }
                _restart(t) {
                    return this._modulator.restart(t),
                    this._carrier.restart(t),
                    this
                }
                get type() {
                    return this._carrier.type
                }
                set type(t) {
                    this._carrier.type = t
                }
                get baseType() {
                    return this._carrier.baseType
                }
                set baseType(t) {
                    this._carrier.baseType = t
                }
                get partialCount() {
                    return this._carrier.partialCount
                }
                set partialCount(t) {
                    this._carrier.partialCount = t
                }
                get modulationType() {
                    return this._modulator.type
                }
                set modulationType(t) {
                    this._modulator.type = t
                }
                get phase() {
                    return this._carrier.phase
                }
                set phase(t) {
                    this._carrier.phase = t,
                    this._modulator.phase = t
                }
                get partials() {
                    return this._carrier.partials
                }
                set partials(t) {
                    this._carrier.partials = t
                }
                asArray(t=1024) {
                    return up(this, void 0, void 0, function*() {
                        return zd(this, t)
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.frequency.dispose(),
                    this.harmonicity.dispose(),
                    this._carrier.dispose(),
                    this._modulator.dispose(),
                    this._modulationNode.dispose(),
                    this.modulationIndex.dispose(),
                    this
                }
            }
            class $d extends Fd {
                constructor() {
                    super(yp($d.getDefaults(), arguments, ["frequency", "width"])),
                    this.name = "PulseOscillator",
                    this._widthGate = new pd({
                        context: this.context,
                        gain: 0
                    }),
                    this._thresh = new Gd({
                        context: this.context,
                        mapping: t=>t <= 0 ? -1 : 1
                    });
                    var t = yp($d.getDefaults(), arguments, ["frequency", "width"]);
                    this.width = new _d({
                        context: this.context,
                        units: "audioRange",
                        value: t.width
                    }),
                    this._triangle = new Bd({
                        context: this.context,
                        detune: t.detune,
                        frequency: t.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t.phase,
                        type: "triangle"
                    }),
                    this.frequency = this._triangle.frequency,
                    this.detune = this._triangle.detune,
                    this._triangle.chain(this._thresh, this.output),
                    this.width.chain(this._widthGate, this._thresh),
                    Np(this, ["width", "frequency", "detune"])
                }
                static getDefaults() {
                    return Object.assign(Fd.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        phase: 0,
                        type: "pulse",
                        width: .2
                    })
                }
                _start(t) {
                    t = this.toSeconds(t),
                    this._triangle.start(t),
                    this._widthGate.gain.setValueAtTime(1, t)
                }
                _stop(t) {
                    t = this.toSeconds(t),
                    this._triangle.stop(t),
                    this._widthGate.gain.cancelScheduledValues(t),
                    this._widthGate.gain.setValueAtTime(0, t)
                }
                _restart(t) {
                    this._triangle.restart(t),
                    this._widthGate.gain.cancelScheduledValues(t),
                    this._widthGate.gain.setValueAtTime(1, t)
                }
                get phase() {
                    return this._triangle.phase
                }
                set phase(t) {
                    this._triangle.phase = t
                }
                get type() {
                    return "pulse"
                }
                get baseType() {
                    return "pulse"
                }
                get partials() {
                    return []
                }
                get partialCount() {
                    return 0
                }
                set carrierType(t) {
                    this._triangle.type = t
                }
                asArray(t=1024) {
                    return up(this, void 0, void 0, function*() {
                        return zd(this, t)
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._triangle.dispose(),
                    this.width.dispose(),
                    this._widthGate.dispose(),
                    this._thresh.dispose(),
                    this
                }
            }
            class Hd extends Fd {
                constructor() {
                    super(yp(Hd.getDefaults(), arguments, ["frequency", "type", "spread"])),
                    this.name = "FatOscillator",
                    this._oscillators = [];
                    var t = yp(Hd.getDefaults(), arguments, ["frequency", "type", "spread"]);
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }),
                    this.detune = new _d({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }),
                    this._spread = t.spread,
                    this._type = t.type,
                    this._phase = t.phase,
                    this._partials = t.partials,
                    this._partialCount = t.partialCount,
                    this.count = t.count,
                    Np(this, ["frequency", "detune"])
                }
                static getDefaults() {
                    return Object.assign(Bd.getDefaults(), {
                        count: 3,
                        spread: 20,
                        type: "sawtooth"
                    })
                }
                _start(e) {
                    e = this.toSeconds(e),
                    this._forEach(t=>t.start(e))
                }
                _stop(e) {
                    e = this.toSeconds(e),
                    this._forEach(t=>t.stop(e))
                }
                _restart(e) {
                    this._forEach(t=>t.restart(e))
                }
                _forEach(e) {
                    for (let t = 0; t < this._oscillators.length; t++)
                        e(this._oscillators[t], t)
                }
                get type() {
                    return this._type
                }
                set type(e) {
                    this._type = e,
                    this._forEach(t=>t.type = e)
                }
                get spread() {
                    return this._spread
                }
                set spread(t) {
                    if (this._spread = t,
                    1 < this._oscillators.length) {
                        const s = -t / 2
                          , n = t / (this._oscillators.length - 1);
                        this._forEach((t,e)=>t.detune.value = s + n * e)
                    }
                }
                get count() {
                    return this._oscillators.length
                }
                set count(e) {
                    if (Ku(e, 1),
                    this._oscillators.length !== e) {
                        this._forEach(t=>t.dispose()),
                        this._oscillators = [];
                        for (let t = 0; t < e; t++) {
                            const s = new Bd({
                                context: this.context,
                                volume: -6 - 1.1 * e,
                                type: this._type,
                                phase: this._phase + t / e * 360,
                                partialCount: this._partialCount,
                                onstop: 0 === t ? ()=>this.onstop(this) : jp
                            });
                            "custom" === this.type && (s.partials = this._partials),
                            this.frequency.connect(s.frequency),
                            this.detune.connect(s.detune),
                            s.detune.overridden = !1,
                            s.connect(this.output),
                            this._oscillators[t] = s
                        }
                        this.spread = this._spread,
                        "started" === this.state && this._forEach(t=>t.start())
                    }
                }
                get phase() {
                    return this._phase
                }
                set phase(t) {
                    this._phase = t,
                    this._forEach((t,e)=>t.phase = this._phase + e / this.count * 360)
                }
                get baseType() {
                    return this._oscillators[0].baseType
                }
                set baseType(e) {
                    this._forEach(t=>t.baseType = e),
                    this._type = this._oscillators[0].type
                }
                get partials() {
                    return this._oscillators[0].partials
                }
                set partials(e) {
                    this._partials = e,
                    this._partialCount = this._partials.length,
                    e.length && (this._type = "custom",
                    this._forEach(t=>t.partials = e))
                }
                get partialCount() {
                    return this._oscillators[0].partialCount
                }
                set partialCount(e) {
                    this._partialCount = e,
                    this._forEach(t=>t.partialCount = e),
                    this._type = this._oscillators[0].type
                }
                asArray(t=1024) {
                    return up(this, void 0, void 0, function*() {
                        return zd(this, t)
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.frequency.dispose(),
                    this.detune.dispose(),
                    this._forEach(t=>t.dispose()),
                    this
                }
            }
            class Jd extends Fd {
                constructor() {
                    super(yp(Jd.getDefaults(), arguments, ["frequency", "modulationFrequency"])),
                    this.name = "PWMOscillator",
                    this.sourceType = "pwm",
                    this._scale = new Zd({
                        context: this.context,
                        value: 2
                    });
                    var t = yp(Jd.getDefaults(), arguments, ["frequency", "modulationFrequency"]);
                    this._pulse = new $d({
                        context: this.context,
                        frequency: t.modulationFrequency
                    }),
                    this._pulse.carrierType = "sine",
                    this.modulationFrequency = this._pulse.frequency,
                    this._modulator = new Bd({
                        context: this.context,
                        detune: t.detune,
                        frequency: t.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t.phase
                    }),
                    this.frequency = this._modulator.frequency,
                    this.detune = this._modulator.detune,
                    this._modulator.chain(this._scale, this._pulse.width),
                    this._pulse.connect(this.output),
                    Np(this, ["modulationFrequency", "frequency", "detune"])
                }
                static getDefaults() {
                    return Object.assign(Fd.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        modulationFrequency: .4,
                        phase: 0,
                        type: "pwm"
                    })
                }
                _start(t) {
                    t = this.toSeconds(t),
                    this._modulator.start(t),
                    this._pulse.start(t)
                }
                _stop(t) {
                    t = this.toSeconds(t),
                    this._modulator.stop(t),
                    this._pulse.stop(t)
                }
                _restart(t) {
                    this._modulator.restart(t),
                    this._pulse.restart(t)
                }
                get type() {
                    return "pwm"
                }
                get baseType() {
                    return "pwm"
                }
                get partials() {
                    return []
                }
                get partialCount() {
                    return 0
                }
                get phase() {
                    return this._modulator.phase
                }
                set phase(t) {
                    this._modulator.phase = t
                }
                asArray(t=1024) {
                    return up(this, void 0, void 0, function*() {
                        return zd(this, t)
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._pulse.dispose(),
                    this._scale.dispose(),
                    this._modulator.dispose(),
                    this
                }
            }
            const Kd = {
                am: Xd,
                fat: Hd,
                fm: Yd,
                oscillator: Bd,
                pulse: $d,
                pwm: Jd
            };
            class tf extends Fd {
                constructor() {
                    super(yp(tf.getDefaults(), arguments, ["frequency", "type"])),
                    this.name = "OmniOscillator";
                    var t = yp(tf.getDefaults(), arguments, ["frequency", "type"]);
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }),
                    this.detune = new _d({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }),
                    Np(this, ["frequency", "detune"]),
                    this.set(t)
                }
                static getDefaults() {
                    return Object.assign(Bd.getDefaults(), Yd.getDefaults(), Xd.getDefaults(), Hd.getDefaults(), $d.getDefaults(), Jd.getDefaults())
                }
                _start(t) {
                    this._oscillator.start(t)
                }
                _stop(t) {
                    this._oscillator.stop(t)
                }
                _restart(t) {
                    return this._oscillator.restart(t),
                    this
                }
                get type() {
                    let t = "";
                    return ["am", "fm", "fat"].some(t=>this._sourceType === t) && (t = this._sourceType),
                    t + this._oscillator.type
                }
                set type(t) {
                    "fm" === t.substr(0, 2) ? (this._createNewOscillator("fm"),
                    this._oscillator = this._oscillator,
                    this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator("am"),
                    this._oscillator = this._oscillator,
                    this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator("fat"),
                    this._oscillator = this._oscillator,
                    this._oscillator.type = t.substr(3)) : "pwm" === t ? (this._createNewOscillator("pwm"),
                    this._oscillator = this._oscillator) : "pulse" === t ? this._createNewOscillator("pulse") : (this._createNewOscillator("oscillator"),
                    this._oscillator = this._oscillator,
                    this._oscillator.type = t)
                }
                get partials() {
                    return this._oscillator.partials
                }
                set partials(t) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partials = t)
                }
                get partialCount() {
                    return this._oscillator.partialCount
                }
                set partialCount(t) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partialCount = t)
                }
                set(t) {
                    return Reflect.has(t, "type") && t.type && (this.type = t.type),
                    super.set(t),
                    this
                }
                _createNewOscillator(t) {
                    if (t !== this._sourceType) {
                        this._sourceType = t;
                        const e = Kd[t]
                          , s = this.now();
                        if (this._oscillator) {
                            const t = this._oscillator;
                            t.stop(s),
                            this.context.setTimeout(()=>t.dispose(), this.blockTime)
                        }
                        this._oscillator = new e({
                            context: this.context
                        }),
                        this.frequency.connect(this._oscillator.frequency),
                        this.detune.connect(this._oscillator.detune),
                        this._oscillator.connect(this.output),
                        this._oscillator.onstop = ()=>this.onstop(this),
                        "started" === this.state && this._oscillator.start(s)
                    }
                }
                get phase() {
                    return this._oscillator.phase
                }
                set phase(t) {
                    this._oscillator.phase = t
                }
                get sourceType() {
                    return this._sourceType
                }
                set sourceType(t) {
                    let e = "sine";
                    "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type),
                    "fm" === t ? this.type = "fm" + e : "am" === t ? this.type = "am" + e : "fat" === t ? this.type = "fat" + e : "oscillator" === t ? this.type = e : "pulse" === t ? this.type = "pulse" : "pwm" === t && (this.type = "pwm")
                }
                _getOscType(t, e) {
                    return t instanceof Kd[e]
                }
                get baseType() {
                    return this._oscillator.baseType
                }
                set baseType(t) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || "pulse" === t || "pwm" === t || (this._oscillator.baseType = t)
                }
                get width() {
                    return this._getOscType(this._oscillator, "pulse") ? this._oscillator.width : void 0
                }
                get count() {
                    return this._getOscType(this._oscillator, "fat") ? this._oscillator.count : void 0
                }
                set count(t) {
                    this._getOscType(this._oscillator, "fat") && Qu(t) && (this._oscillator.count = t)
                }
                get spread() {
                    return this._getOscType(this._oscillator, "fat") ? this._oscillator.spread : void 0
                }
                set spread(t) {
                    this._getOscType(this._oscillator, "fat") && Qu(t) && (this._oscillator.spread = t)
                }
                get modulationType() {
                    return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.modulationType : void 0
                }
                set modulationType(t) {
                    (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && $u(t) && (this._oscillator.modulationType = t)
                }
                get modulationIndex() {
                    return this._getOscType(this._oscillator, "fm") ? this._oscillator.modulationIndex : void 0
                }
                get harmonicity() {
                    return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.harmonicity : void 0
                }
                get modulationFrequency() {
                    return this._getOscType(this._oscillator, "pwm") ? this._oscillator.modulationFrequency : void 0
                }
                asArray(t=1024) {
                    return up(this, void 0, void 0, function*() {
                        return zd(this, t)
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.detune.dispose(),
                    this.frequency.dispose(),
                    this._oscillator.dispose(),
                    this
                }
            }
            class ef extends _d {
                constructor() {
                    super(Object.assign(yp(ef.getDefaults(), arguments, ["value"]))),
                    this.override = !1,
                    this.name = "Add",
                    this._sum = new pd({
                        context: this.context
                    }),
                    this.input = this._sum,
                    this.output = this._sum,
                    this.addend = this._param,
                    cd(this._constantSource, this._sum)
                }
                static getDefaults() {
                    return Object.assign(_d.getDefaults(), {
                        value: 0
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._sum.dispose(),
                    this
                }
            }
            class sf extends Ud {
                constructor() {
                    super(Object.assign(yp(sf.getDefaults(), arguments, ["min", "max"]))),
                    this.name = "Scale";
                    var t = yp(sf.getDefaults(), arguments, ["min", "max"]);
                    this._mult = this.input = new Zd({
                        context: this.context,
                        value: t.max - t.min
                    }),
                    this._add = this.output = new ef({
                        context: this.context,
                        value: t.min
                    }),
                    this._min = t.min,
                    this._max = t.max,
                    this.input.connect(this.output)
                }
                static getDefaults() {
                    return Object.assign(Ud.getDefaults(), {
                        max: 1,
                        min: 0
                    })
                }
                get min() {
                    return this._min
                }
                set min(t) {
                    this._min = t,
                    this._setRange()
                }
                get max() {
                    return this._max
                }
                set max(t) {
                    this._max = t,
                    this._setRange()
                }
                _setRange() {
                    this._add.value = this._min,
                    this._mult.value = this._max - this._min
                }
                dispose() {
                    return super.dispose(),
                    this._add.dispose(),
                    this._mult.dispose(),
                    this
                }
            }
            class nf extends Ud {
                constructor() {
                    super(Object.assign(yp(nf.getDefaults(), arguments))),
                    this.name = "Zero",
                    this._gain = new pd({
                        context: this.context
                    }),
                    this.output = this._gain,
                    this.input = void 0,
                    ld(this.context.getConstant(0), this._gain)
                }
                dispose() {
                    return super.dispose(),
                    ud(this.context.getConstant(0), this._gain),
                    this
                }
            }
            class rf extends hd {
                constructor() {
                    super(yp(rf.getDefaults(), arguments, ["frequency", "min", "max"])),
                    this.name = "LFO",
                    this._stoppedValue = 0,
                    this._units = "number",
                    this.convert = !0,
                    this._fromType = ad.prototype._fromType,
                    this._toType = ad.prototype._toType,
                    this._is = ad.prototype._is,
                    this._clampValue = ad.prototype._clampValue;
                    var t = yp(rf.getDefaults(), arguments, ["frequency", "min", "max"]);
                    this._oscillator = new Bd(t),
                    this.frequency = this._oscillator.frequency,
                    this._amplitudeGain = new pd({
                        context: this.context,
                        gain: t.amplitude,
                        units: "normalRange"
                    }),
                    this.amplitude = this._amplitudeGain.gain,
                    this._stoppedSignal = new _d({
                        context: this.context,
                        units: "audioRange",
                        value: 0
                    }),
                    this._zeros = new nf({
                        context: this.context
                    }),
                    this._a2g = new Qd({
                        context: this.context
                    }),
                    this._scaler = this.output = new sf({
                        context: this.context,
                        max: t.max,
                        min: t.min
                    }),
                    this.units = t.units,
                    this.min = t.min,
                    this.max = t.max,
                    this._oscillator.chain(this._amplitudeGain, this._a2g, this._scaler),
                    this._zeros.connect(this._a2g),
                    this._stoppedSignal.connect(this._a2g),
                    Np(this, ["amplitude", "frequency"]),
                    this.phase = t.phase
                }
                static getDefaults() {
                    return Object.assign(Bd.getDefaults(), {
                        amplitude: 1,
                        frequency: "4n",
                        max: 1,
                        min: 0,
                        type: "sine",
                        units: "number"
                    })
                }
                start(t) {
                    return t = this.toSeconds(t),
                    this._stoppedSignal.setValueAtTime(0, t),
                    this._oscillator.start(t),
                    this
                }
                stop(t) {
                    return t = this.toSeconds(t),
                    this._stoppedSignal.setValueAtTime(this._stoppedValue, t),
                    this._oscillator.stop(t),
                    this
                }
                sync() {
                    return this._oscillator.sync(),
                    this._oscillator.syncFrequency(),
                    this
                }
                unsync() {
                    return this._oscillator.unsync(),
                    this._oscillator.unsyncFrequency(),
                    this
                }
                _setStoppedValue() {
                    this._stoppedValue = this._oscillator.getInitialValue(),
                    this._stoppedSignal.value = this._stoppedValue
                }
                get min() {
                    return this._toType(this._scaler.min)
                }
                set min(t) {
                    t = this._fromType(t),
                    this._scaler.min = t
                }
                get max() {
                    return this._toType(this._scaler.max)
                }
                set max(t) {
                    t = this._fromType(t),
                    this._scaler.max = t
                }
                get type() {
                    return this._oscillator.type
                }
                set type(t) {
                    this._oscillator.type = t,
                    this._setStoppedValue()
                }
                get partials() {
                    return this._oscillator.partials
                }
                set partials(t) {
                    this._oscillator.partials = t,
                    this._setStoppedValue()
                }
                get phase() {
                    return this._oscillator.phase
                }
                set phase(t) {
                    this._oscillator.phase = t,
                    this._setStoppedValue()
                }
                get units() {
                    return this._units
                }
                set units(t) {
                    var e = this.min
                      , s = this.max;
                    this._units = t,
                    this.min = e,
                    this.max = s
                }
                get state() {
                    return this._oscillator.state
                }
                connect(t, e, s) {
                    return (t instanceof ad || t instanceof _d) && (this.convert = t.convert,
                    this.units = t.units),
                    md(this, t, e, s),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._oscillator.dispose(),
                    this._stoppedSignal.dispose(),
                    this._zeros.dispose(),
                    this._scaler.dispose(),
                    this._a2g.dispose(),
                    this._amplitudeGain.dispose(),
                    this.amplitude.dispose(),
                    this
                }
            }
            function of(s, n=1 / 0) {
                const i = new WeakMap;
                return function(t, e) {
                    Reflect.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return i.get(this)
                        },
                        set: function(t) {
                            Ku(t, s, n),
                            i.set(this, t)
                        }
                    })
                }
            }
            function af(s, n=1 / 0) {
                const i = new WeakMap;
                return function(t, e) {
                    Reflect.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return i.get(this)
                        },
                        set: function(t) {
                            Ku(this.toSeconds(t), s, n),
                            i.set(this, t)
                        }
                    })
                }
            }
            class hf extends Fd {
                constructor() {
                    super(yp(hf.getDefaults(), arguments, ["url", "onload"])),
                    this.name = "Player",
                    this._activeSources = new Set;
                    var t = yp(hf.getDefaults(), arguments, ["url", "onload"]);
                    this._buffer = new Lp({
                        onload: this._onload.bind(this, t.onload),
                        onerror: t.onerror,
                        reverse: t.reverse,
                        url: t.url
                    }),
                    this.autostart = t.autostart,
                    this._loop = t.loop,
                    this._loopStart = t.loopStart,
                    this._loopEnd = t.loopEnd,
                    this._playbackRate = t.playbackRate,
                    this.fadeIn = t.fadeIn,
                    this.fadeOut = t.fadeOut
                }
                static getDefaults() {
                    return Object.assign(Fd.getDefaults(), {
                        autostart: !1,
                        fadeIn: 0,
                        fadeOut: 0,
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        onload: jp,
                        onerror: jp,
                        playbackRate: 1,
                        reverse: !1
                    })
                }
                load(t) {
                    return up(this, void 0, void 0, function*() {
                        return yield this._buffer.load(t),
                        this._onload(),
                        this
                    })
                }
                _onload(t=jp) {
                    t(),
                    this.autostart && this.start()
                }
                _onSourceEnd(t) {
                    this.onstop(this),
                    this._activeSources.delete(t),
                    0 !== this._activeSources.size || this._synced || "started" !== this._state.getValueAtTime(this.now()) || (this._state.cancel(this.now()),
                    this._state.setStateAtTime("stopped", this.now()))
                }
                start(t, e, s) {
                    return super.start(t, e, s),
                    this
                }
                _start(t, e, s) {
                    e = this._loop ? xp(e, this._loopStart) : xp(e, 0);
                    var n = this.toSeconds(e)
                      , e = s;
                    s = xp(s, Math.max(this._buffer.duration - n, 0));
                    s = this.toSeconds(s);
                    s /= this._playbackRate,
                    t = this.toSeconds(t);
                    const i = new Id({
                        url: this._buffer,
                        context: this.context,
                        fadeIn: this.fadeIn,
                        fadeOut: this.fadeOut,
                        loop: this._loop,
                        loopEnd: this._loopEnd,
                        loopStart: this._loopStart,
                        onended: this._onSourceEnd.bind(this),
                        playbackRate: this._playbackRate
                    }).connect(this.output);
                    this._loop || this._synced || (this._state.cancel(t + s),
                    this._state.setStateAtTime("stopped", t + s, {
                        implicitEnd: !0
                    })),
                    this._activeSources.add(i),
                    this._loop && Bu(e) ? i.start(t, n) : i.start(t, n, s - this.toSeconds(this.fadeOut))
                }
                _stop(t) {
                    const e = this.toSeconds(t);
                    this._activeSources.forEach(t=>t.stop(e))
                }
                restart(t, e, s) {
                    return super.restart(t, e, s),
                    this
                }
                _restart(t, e, s) {
                    this._stop(t),
                    this._start(t, e, s)
                }
                seek(t, e) {
                    e = this.toSeconds(e);
                    if ("started" === this._state.getValueAtTime(e)) {
                        const s = this.toSeconds(t);
                        this._stop(e),
                        this._start(e, s)
                    }
                    return this
                }
                setLoopPoints(t, e) {
                    return this.loopStart = t,
                    this.loopEnd = e,
                    this
                }
                get loopStart() {
                    return this._loopStart
                }
                set loopStart(e) {
                    this._loopStart = e,
                    this.buffer.loaded && Ku(this.toSeconds(e), 0, this.buffer.duration),
                    this._activeSources.forEach(t=>{
                        t.loopStart = e
                    }
                    )
                }
                get loopEnd() {
                    return this._loopEnd
                }
                set loopEnd(e) {
                    this._loopEnd = e,
                    this.buffer.loaded && Ku(this.toSeconds(e), 0, this.buffer.duration),
                    this._activeSources.forEach(t=>{
                        t.loopEnd = e
                    }
                    )
                }
                get buffer() {
                    return this._buffer
                }
                set buffer(t) {
                    this._buffer.set(t)
                }
                get loop() {
                    return this._loop
                }
                set loop(e) {
                    if (this._loop !== e && (this._loop = e,
                    this._activeSources.forEach(t=>{
                        t.loop = e
                    }
                    ),
                    e)) {
                        const e = this._state.getNextState("stopped", this.now());
                        e && this._state.cancel(e.time)
                    }
                }
                get playbackRate() {
                    return this._playbackRate
                }
                set playbackRate(e) {
                    this._playbackRate = e;
                    const s = this.now()
                      , t = this._state.getNextState("stopped", s);
                    t && t.implicitEnd && (this._state.cancel(t.time),
                    this._activeSources.forEach(t=>t.cancelStop())),
                    this._activeSources.forEach(t=>{
                        t.playbackRate.setValueAtTime(e, s)
                    }
                    )
                }
                get reverse() {
                    return this._buffer.reverse
                }
                set reverse(t) {
                    this._buffer.reverse = t
                }
                get loaded() {
                    return this._buffer.loaded
                }
                dispose() {
                    return super.dispose(),
                    this._activeSources.forEach(t=>t.dispose()),
                    this._activeSources.clear(),
                    this._buffer.dispose(),
                    this
                }
            }
            lp([af(0)], hf.prototype, "fadeIn", void 0),
            lp([af(0)], hf.prototype, "fadeOut", void 0);
            class cf extends hd {
                constructor() {
                    super(yp(cf.getDefaults(), arguments, ["urls", "onload"], "urls")),
                    this.name = "Players",
                    this.input = void 0,
                    this._players = new Map;
                    var t = yp(cf.getDefaults(), arguments, ["urls", "onload"], "urls");
                    this._volume = this.output = new Dd({
                        context: this.context,
                        volume: t.volume
                    }),
                    this.volume = this._volume.volume,
                    Np(this, "volume"),
                    this._buffers = new bd({
                        urls: t.urls,
                        onload: t.onload,
                        baseUrl: t.baseUrl,
                        onerror: t.onerror
                    }),
                    this.mute = t.mute,
                    this._fadeIn = t.fadeIn,
                    this._fadeOut = t.fadeOut
                }
                static getDefaults() {
                    return Object.assign(Fd.getDefaults(), {
                        baseUrl: "",
                        fadeIn: 0,
                        fadeOut: 0,
                        mute: !1,
                        onload: jp,
                        onerror: jp,
                        urls: {},
                        volume: 0
                    })
                }
                get mute() {
                    return this._volume.mute
                }
                set mute(t) {
                    this._volume.mute = t
                }
                get fadeIn() {
                    return this._fadeIn
                }
                set fadeIn(e) {
                    this._fadeIn = e,
                    this._players.forEach(t=>{
                        t.fadeIn = e
                    }
                    )
                }
                get fadeOut() {
                    return this._fadeOut
                }
                set fadeOut(e) {
                    this._fadeOut = e,
                    this._players.forEach(t=>{
                        t.fadeOut = e
                    }
                    )
                }
                get state() {
                    return Array.from(this._players).some(([,t])=>"started" === t.state) ? "started" : "stopped"
                }
                has(t) {
                    return this._buffers.has(t)
                }
                player(t) {
                    var e;
                    return Ju(this.has(t), `No Player with the name ${t} exists on this object`),
                    this._players.has(t) || (e = new hf({
                        context: this.context,
                        fadeIn: this._fadeIn,
                        fadeOut: this._fadeOut,
                        url: this._buffers.get(t)
                    }).connect(this.output),
                    this._players.set(t, e)),
                    this._players.get(t)
                }
                get loaded() {
                    return this._buffers.loaded
                }
                add(t, e, s) {
                    return Ju(!this._buffers.has(t), "A buffer with that name already exists on this object"),
                    this._buffers.add(t, e, s),
                    this
                }
                stopAll(e) {
                    return this._players.forEach(t=>t.stop(e)),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._volume.dispose(),
                    this.volume.dispose(),
                    this._players.forEach(t=>t.dispose()),
                    this._buffers.dispose(),
                    this
                }
            }
            class lf extends Fd {
                constructor() {
                    super(yp(lf.getDefaults(), arguments, ["url", "onload"])),
                    this.name = "GrainPlayer",
                    this._loopStart = 0,
                    this._loopEnd = 0,
                    this._activeSources = [];
                    var t = yp(lf.getDefaults(), arguments, ["url", "onload"]);
                    this.buffer = new Lp({
                        onload: t.onload,
                        onerror: t.onerror,
                        reverse: t.reverse,
                        url: t.url
                    }),
                    this._clock = new xd({
                        context: this.context,
                        callback: this._tick.bind(this),
                        frequency: 1 / t.grainSize
                    }),
                    this._playbackRate = t.playbackRate,
                    this._grainSize = t.grainSize,
                    this._overlap = t.overlap,
                    this.detune = t.detune,
                    this.overlap = t.overlap,
                    this.loop = t.loop,
                    this.playbackRate = t.playbackRate,
                    this.grainSize = t.grainSize,
                    this.loopStart = t.loopStart,
                    this.loopEnd = t.loopEnd,
                    this.reverse = t.reverse,
                    this._clock.on("stop", this._onstop.bind(this))
                }
                static getDefaults() {
                    return Object.assign(Fd.getDefaults(), {
                        onload: jp,
                        onerror: jp,
                        overlap: .1,
                        grainSize: .2,
                        playbackRate: 1,
                        detune: 0,
                        loop: !1,
                        loopStart: 0,
                        loopEnd: 0,
                        reverse: !1
                    })
                }
                _start(t, e, s) {
                    e = xp(e, 0),
                    e = this.toSeconds(e),
                    t = this.toSeconds(t);
                    var n = 1 / this._clock.frequency.getValueAtTime(t);
                    this._clock.start(t, e / n),
                    s && this.stop(t + this.toSeconds(s))
                }
                restart(t, e, s) {
                    return super.restart(t, e, s),
                    this
                }
                _restart(t, e, s) {
                    this._stop(t),
                    this._start(t, e, s)
                }
                _stop(t) {
                    this._clock.stop(t)
                }
                _onstop(e) {
                    this._activeSources.forEach(t=>{
                        t.fadeOut = 0,
                        t.stop(e)
                    }
                    ),
                    this.onstop(this)
                }
                _tick(t) {
                    var e = this._clock.getTicksAtTime(t)
                      , s = e * this._grainSize;
                    if (this.log("offset", s),
                    !this.loop && s > this.buffer.duration)
                        this.stop(t);
                    else {
                        const n = s < this._overlap ? 0 : this._overlap
                          , i = new Id({
                            context: this.context,
                            url: this.buffer,
                            fadeIn: n,
                            fadeOut: this._overlap,
                            loop: this.loop,
                            loopStart: this._loopStart,
                            loopEnd: this._loopEnd,
                            playbackRate: Xp(this.detune / 100)
                        }).connect(this.output);
                        i.start(t, this._grainSize * e),
                        i.stop(t + this._grainSize / this.playbackRate),
                        this._activeSources.push(i),
                        i.onended = ()=>{
                            var t = this._activeSources.indexOf(i);
                            -1 !== t && this._activeSources.splice(t, 1)
                        }
                    }
                }
                get playbackRate() {
                    return this._playbackRate
                }
                set playbackRate(t) {
                    Ku(t, .001),
                    this._playbackRate = t,
                    this.grainSize = this._grainSize
                }
                get loopStart() {
                    return this._loopStart
                }
                set loopStart(t) {
                    this.buffer.loaded && Ku(this.toSeconds(t), 0, this.buffer.duration),
                    this._loopStart = this.toSeconds(t)
                }
                get loopEnd() {
                    return this._loopEnd
                }
                set loopEnd(t) {
                    this.buffer.loaded && Ku(this.toSeconds(t), 0, this.buffer.duration),
                    this._loopEnd = this.toSeconds(t)
                }
                get reverse() {
                    return this.buffer.reverse
                }
                set reverse(t) {
                    this.buffer.reverse = t
                }
                get grainSize() {
                    return this._grainSize
                }
                set grainSize(t) {
                    this._grainSize = this.toSeconds(t),
                    this._clock.frequency.setValueAtTime(this._playbackRate / this._grainSize, this.now())
                }
                get overlap() {
                    return this._overlap
                }
                set overlap(t) {
                    t = this.toSeconds(t);
                    Ku(t, 0),
                    this._overlap = t
                }
                get loaded() {
                    return this.buffer.loaded
                }
                dispose() {
                    return super.dispose(),
                    this.buffer.dispose(),
                    this._clock.dispose(),
                    this._activeSources.forEach(t=>t.dispose()),
                    this
                }
            }
            class uf extends Ud {
                constructor() {
                    super(...arguments),
                    this.name = "Abs",
                    this._abs = new Gd({
                        context: this.context,
                        mapping: t=>Math.abs(t) < .001 ? 0 : Math.abs(t)
                    }),
                    this.input = this._abs,
                    this.output = this._abs
                }
                dispose() {
                    return super.dispose(),
                    this._abs.dispose(),
                    this
                }
            }
            class pf extends Ud {
                constructor() {
                    super(...arguments),
                    this.name = "GainToAudio",
                    this._norm = new Gd({
                        context: this.context,
                        mapping: t=>2 * Math.abs(t) - 1
                    }),
                    this.input = this._norm,
                    this.output = this._norm
                }
                dispose() {
                    return super.dispose(),
                    this._norm.dispose(),
                    this
                }
            }
            class df extends Ud {
                constructor() {
                    super(...arguments),
                    this.name = "Negate",
                    this._multiply = new Zd({
                        context: this.context,
                        value: -1
                    }),
                    this.input = this._multiply,
                    this.output = this._multiply
                }
                dispose() {
                    return super.dispose(),
                    this._multiply.dispose(),
                    this
                }
            }
            class ff extends _d {
                constructor() {
                    super(Object.assign(yp(ff.getDefaults(), arguments, ["value"]))),
                    this.override = !1,
                    this.name = "Subtract",
                    this._sum = new pd({
                        context: this.context
                    }),
                    this.input = this._sum,
                    this.output = this._sum,
                    this._neg = new df({
                        context: this.context
                    }),
                    this.subtrahend = this._param,
                    cd(this._constantSource, this._neg, this._sum)
                }
                static getDefaults() {
                    return Object.assign(_d.getDefaults(), {
                        value: 0
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._neg.dispose(),
                    this._sum.dispose(),
                    this
                }
            }
            class _f extends Ud {
                constructor() {
                    super(Object.assign(yp(_f.getDefaults(), arguments))),
                    this.name = "GreaterThanZero",
                    this._thresh = this.output = new Gd({
                        context: this.context,
                        length: 127,
                        mapping: t=>t <= 0 ? 0 : 1
                    }),
                    this._scale = this.input = new Zd({
                        context: this.context,
                        value: 1e4
                    }),
                    this._scale.connect(this._thresh)
                }
                dispose() {
                    return super.dispose(),
                    this._scale.dispose(),
                    this._thresh.dispose(),
                    this
                }
            }
            class mf extends _d {
                constructor() {
                    super(Object.assign(yp(mf.getDefaults(), arguments, ["value"]))),
                    this.name = "GreaterThan",
                    this.override = !1;
                    var t = yp(mf.getDefaults(), arguments, ["value"]);
                    this._subtract = this.input = new ff({
                        context: this.context,
                        value: t.value
                    }),
                    this._gtz = this.output = new _f({
                        context: this.context
                    }),
                    this.comparator = this._param = this._subtract.subtrahend,
                    Np(this, "comparator"),
                    this._subtract.connect(this._gtz)
                }
                static getDefaults() {
                    return Object.assign(_d.getDefaults(), {
                        value: 0
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._gtz.dispose(),
                    this._subtract.dispose(),
                    this.comparator.dispose(),
                    this
                }
            }
            class gf extends Ud {
                constructor() {
                    super(Object.assign(yp(gf.getDefaults(), arguments, ["value"]))),
                    this.name = "Pow";
                    var t = yp(gf.getDefaults(), arguments, ["value"]);
                    this._exponentScaler = this.input = this.output = new Gd({
                        context: this.context,
                        mapping: this._expFunc(t.value),
                        length: 8192
                    }),
                    this._exponent = t.value
                }
                static getDefaults() {
                    return Object.assign(Ud.getDefaults(), {
                        value: 1
                    })
                }
                _expFunc(e) {
                    return t=>Math.pow(Math.abs(t), e)
                }
                get value() {
                    return this._exponent
                }
                set value(t) {
                    this._exponent = t,
                    this._exponentScaler.setMap(this._expFunc(this._exponent))
                }
                dispose() {
                    return super.dispose(),
                    this._exponentScaler.dispose(),
                    this
                }
            }
            class vf extends sf {
                constructor() {
                    super(Object.assign(yp(vf.getDefaults(), arguments, ["min", "max", "exponent"]))),
                    this.name = "ScaleExp";
                    var t = yp(vf.getDefaults(), arguments, ["min", "max", "exponent"]);
                    this.input = this._exp = new gf({
                        context: this.context,
                        value: t.exponent
                    }),
                    this._exp.connect(this._mult)
                }
                static getDefaults() {
                    return Object.assign(sf.getDefaults(), {
                        exponent: 1
                    })
                }
                get exponent() {
                    return this._exp.value
                }
                set exponent(t) {
                    this._exp.value = t
                }
                dispose() {
                    return super.dispose(),
                    this._exp.dispose(),
                    this
                }
            }
            class yf extends _d {
                constructor() {
                    super(yp(_d.getDefaults(), arguments, ["value", "units"])),
                    this.name = "SyncedSignal",
                    this.override = !1;
                    var t = yp(_d.getDefaults(), arguments, ["value", "units"]);
                    this._lastVal = t.value,
                    this._synced = this.context.transport.scheduleRepeat(this._onTick.bind(this), "1i"),
                    this._syncedCallback = this._anchorValue.bind(this),
                    this.context.transport.on("start", this._syncedCallback),
                    this.context.transport.on("pause", this._syncedCallback),
                    this.context.transport.on("stop", this._syncedCallback),
                    this._constantSource.disconnect(),
                    this._constantSource.stop(0),
                    this._constantSource = this.output = new fd({
                        context: this.context,
                        offset: t.value,
                        units: t.units
                    }).start(0),
                    this.setValueAtTime(t.value, 0)
                }
                _onTick(t) {
                    var e = super.getValueAtTime(this.context.transport.seconds);
                    this._lastVal !== e && (this._lastVal = e,
                    this._constantSource.offset.setValueAtTime(e, t))
                }
                _anchorValue(t) {
                    var e = super.getValueAtTime(this.context.transport.seconds);
                    this._lastVal = e,
                    this._constantSource.offset.cancelAndHoldAtTime(t),
                    this._constantSource.offset.setValueAtTime(e, t)
                }
                getValueAtTime(t) {
                    t = new id(this.context,t).toSeconds();
                    return super.getValueAtTime(t)
                }
                setValueAtTime(t, e) {
                    e = new id(this.context,e).toSeconds();
                    return super.setValueAtTime(t, e),
                    this
                }
                linearRampToValueAtTime(t, e) {
                    e = new id(this.context,e).toSeconds();
                    return super.linearRampToValueAtTime(t, e),
                    this
                }
                exponentialRampToValueAtTime(t, e) {
                    e = new id(this.context,e).toSeconds();
                    return super.exponentialRampToValueAtTime(t, e),
                    this
                }
                setTargetAtTime(t, e, s) {
                    e = new id(this.context,e).toSeconds();
                    return super.setTargetAtTime(t, e, s),
                    this
                }
                cancelScheduledValues(t) {
                    t = new id(this.context,t).toSeconds();
                    return super.cancelScheduledValues(t),
                    this
                }
                setValueCurveAtTime(t, e, s, n) {
                    e = new id(this.context,e).toSeconds();
                    return s = this.toSeconds(s),
                    super.setValueCurveAtTime(t, e, s, n),
                    this
                }
                cancelAndHoldAtTime(t) {
                    t = new id(this.context,t).toSeconds();
                    return super.cancelAndHoldAtTime(t),
                    this
                }
                setRampPoint(t) {
                    t = new id(this.context,t).toSeconds();
                    return super.setRampPoint(t),
                    this
                }
                exponentialRampTo(t, e, s) {
                    s = new id(this.context,s).toSeconds();
                    return super.exponentialRampTo(t, e, s),
                    this
                }
                linearRampTo(t, e, s) {
                    s = new id(this.context,s).toSeconds();
                    return super.linearRampTo(t, e, s),
                    this
                }
                targetRampTo(t, e, s) {
                    s = new id(this.context,s).toSeconds();
                    return super.targetRampTo(t, e, s),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this.context.transport.clear(this._synced),
                    this.context.transport.off("start", this._syncedCallback),
                    this.context.transport.off("pause", this._syncedCallback),
                    this.context.transport.off("stop", this._syncedCallback),
                    this._constantSource.dispose(),
                    this
                }
            }
            class xf extends hd {
                constructor() {
                    super(yp(xf.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])),
                    this.name = "Envelope",
                    this._sig = new _d({
                        context: this.context,
                        value: 0
                    }),
                    this.output = this._sig,
                    this.input = void 0;
                    var t = yp(xf.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]);
                    this.attack = t.attack,
                    this.decay = t.decay,
                    this.sustain = t.sustain,
                    this.release = t.release,
                    this.attackCurve = t.attackCurve,
                    this.releaseCurve = t.releaseCurve,
                    this.decayCurve = t.decayCurve
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        attack: .01,
                        attackCurve: "linear",
                        decay: .1,
                        decayCurve: "exponential",
                        release: 1,
                        releaseCurve: "exponential",
                        sustain: .5
                    })
                }
                get value() {
                    return this.getValueAtTime(this.now())
                }
                _getCurve(e, s) {
                    if ($u(e))
                        return e;
                    {
                        let t;
                        for (t in wf)
                            if (wf[t][s] === e)
                                return t;
                        return e
                    }
                }
                _setCurve(t, e, s) {
                    if ($u(s) && Reflect.has(wf, s)) {
                        var n = wf[s];
                        Zu(n) ? "_decayCurve" !== t && (this[t] = n[e]) : this[t] = n
                    } else {
                        if (!Yu(s) || "_decayCurve" === t)
                            throw new Error("Envelope: invalid curve: " + s);
                        this[t] = s
                    }
                }
                get attackCurve() {
                    return this._getCurve(this._attackCurve, "In")
                }
                set attackCurve(t) {
                    this._setCurve("_attackCurve", "In", t)
                }
                get releaseCurve() {
                    return this._getCurve(this._releaseCurve, "Out")
                }
                set releaseCurve(t) {
                    this._setCurve("_releaseCurve", "Out", t)
                }
                get decayCurve() {
                    return this._decayCurve
                }
                set decayCurve(e) {
                    Ju(["linear", "exponential"].some(t=>t === e), `Invalid envelope curve: ${e}`),
                    this._decayCurve = e
                }
                triggerAttack(t, s=1) {
                    this.log("triggerAttack", t, s),
                    t = this.toSeconds(t);
                    let n = this.toSeconds(this.attack);
                    const e = this.toSeconds(this.decay)
                      , i = this.getValueAtTime(t);
                    if (0 < i && (n = (1 - i) / (1 / n)),
                    n < this.sampleTime)
                        this._sig.cancelScheduledValues(t),
                        this._sig.setValueAtTime(s, t);
                    else if ("linear" === this._attackCurve)
                        this._sig.linearRampTo(s, n, t);
                    else if ("exponential" === this._attackCurve)
                        this._sig.targetRampTo(s, n, t);
                    else {
                        this._sig.cancelAndHoldAtTime(t);
                        let e = this._attackCurve;
                        for (let t = 1; t < e.length; t++)
                            if (e[t - 1] <= i && i <= e[t]) {
                                e = this._attackCurve.slice(t),
                                e[0] = i;
                                break
                            }
                        this._sig.setValueCurveAtTime(e, t, n, s)
                    }
                    if (e && this.sustain < 1) {
                        const i = s * this.sustain
                          , r = t + n;
                        this.log("decay", r),
                        "linear" === this._decayCurve ? this._sig.linearRampToValueAtTime(i, e + r) : this._sig.exponentialApproachValueAtTime(i, r, e)
                    }
                    return this
                }
                triggerRelease(t) {
                    this.log("triggerRelease", t),
                    t = this.toSeconds(t);
                    var e, s = this.getValueAtTime(t);
                    return 0 < s && ((e = this.toSeconds(this.release)) < this.sampleTime ? this._sig.setValueAtTime(0, t) : "linear" === this._releaseCurve ? this._sig.linearRampTo(0, e, t) : "exponential" === this._releaseCurve ? this._sig.targetRampTo(0, e, t) : (Ju(Yu(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array"),
                    this._sig.cancelAndHoldAtTime(t),
                    this._sig.setValueCurveAtTime(this._releaseCurve, t, e, s))),
                    this
                }
                getValueAtTime(t) {
                    return this._sig.getValueAtTime(t)
                }
                triggerAttackRelease(t, e, s=1) {
                    return e = this.toSeconds(e),
                    this.triggerAttack(e, s),
                    this.triggerRelease(e + this.toSeconds(t)),
                    this
                }
                cancel(t) {
                    return this._sig.cancelScheduledValues(this.toSeconds(t)),
                    this
                }
                connect(t, e=0, s=0) {
                    return md(this, t, e, s),
                    this
                }
                asArray(a=1024) {
                    return up(this, void 0, void 0, function*() {
                        const t = a / this.context.sampleRate
                          , e = new zp(1,t,this.context.sampleRate)
                          , s = this.toSeconds(this.attack) + this.toSeconds(this.decay)
                          , n = s + this.toSeconds(this.release)
                          , i = .1 * n
                          , r = n + i
                          , o = new this.constructor(Object.assign(this.get(), {
                            attack: t * this.toSeconds(this.attack) / r,
                            decay: t * this.toSeconds(this.decay) / r,
                            release: t * this.toSeconds(this.release) / r,
                            context: e
                        }));
                        return o._sig.toDestination(),
                        o.triggerAttackRelease(t * (s + i) / r, 0),
                        (yield e.render()).getChannelData(0)
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._sig.dispose(),
                    this
                }
            }
            lp([af(0)], xf.prototype, "attack", void 0),
            lp([af(0)], xf.prototype, "decay", void 0),
            lp([of(0, 1)], xf.prototype, "sustain", void 0),
            lp([af(0)], xf.prototype, "release", void 0);
            const wf = (()=>{
                const t = 128;
                let e, s;
                const n = [];
                for (e = 0; e < t; e++)
                    n[e] = Math.sin(e / 127 * (Math.PI / 2));
                const i = [];
                for (e = 0; e < 127; e++) {
                    s = e / 127;
                    const t = Math.sin(s * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                    i[e] = t / 10 + .83 * s
                }
                i[127] = 1;
                const r = [];
                for (e = 0; e < t; e++)
                    r[e] = Math.ceil(e / 127 * 5) / 5;
                const o = [];
                for (e = 0; e < t; e++)
                    s = e / 127,
                    o[e] = .5 * (1 - Math.cos(Math.PI * s));
                const a = [];
                for (e = 0; e < t; e++) {
                    s = e / 127;
                    const t = 4 * Math.pow(s, 3) + .2
                      , n = Math.cos(t * Math.PI * 2 * s);
                    a[e] = Math.abs(n * (1 - s))
                }
                function h(e) {
                    const s = new Array(e.length);
                    for (let t = 0; t < e.length; t++)
                        s[t] = 1 - e[t];
                    return s
                }
                return {
                    bounce: {
                        In: h(a),
                        Out: a
                    },
                    cosine: {
                        In: n,
                        Out: n.slice(0).reverse()
                    },
                    exponential: "exponential",
                    linear: "linear",
                    ripple: {
                        In: i,
                        Out: h(i)
                    },
                    sine: {
                        In: o,
                        Out: h(o)
                    },
                    step: {
                        In: r,
                        Out: h(r)
                    }
                }
            }
            )();
            class bf extends hd {
                constructor() {
                    super(yp(bf.getDefaults(), arguments)),
                    this._scheduledEvents = [],
                    this._synced = !1,
                    this._original_triggerAttack = this.triggerAttack,
                    this._original_triggerRelease = this.triggerRelease,
                    this._syncedRelease = t=>this._original_triggerRelease(t);
                    var t = yp(bf.getDefaults(), arguments);
                    this._volume = this.output = new Dd({
                        context: this.context,
                        volume: t.volume
                    }),
                    this.volume = this._volume.volume,
                    Np(this, "volume")
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        volume: 0
                    })
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1),
                    this._syncMethod("triggerRelease", 0),
                    this.context.transport.on("stop", this._syncedRelease),
                    this.context.transport.on("pause", this._syncedRelease),
                    this.context.transport.on("loopEnd", this._syncedRelease)),
                    this
                }
                _syncState() {
                    let t = !1;
                    return this._synced || (this._synced = !0,
                    t = !0),
                    t
                }
                _syncMethod(t, s) {
                    const n = this["_original_" + t] = this[t];
                    this[t] = (...e)=>{
                        var t = e[s]
                          , t = this.context.transport.schedule(t=>{
                            e[s] = t,
                            n.apply(this, e)
                        }
                        , t);
                        this._scheduledEvents.push(t)
                    }
                }
                unsync() {
                    return this._scheduledEvents.forEach(t=>this.context.transport.clear(t)),
                    this._scheduledEvents = [],
                    this._synced && (this._synced = !1,
                    this.triggerAttack = this._original_triggerAttack,
                    this.triggerRelease = this._original_triggerRelease,
                    this.context.transport.off("stop", this._syncedRelease),
                    this.context.transport.off("pause", this._syncedRelease),
                    this.context.transport.off("loopEnd", this._syncedRelease)),
                    this
                }
                triggerAttackRelease(t, e, s, n) {
                    s = this.toSeconds(s),
                    e = this.toSeconds(e);
                    return this.triggerAttack(t, s, n),
                    this.triggerRelease(s + e),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._volume.dispose(),
                    this.unsync(),
                    this._scheduledEvents = [],
                    this
                }
            }
            class Tf extends bf {
                constructor() {
                    super(yp(Tf.getDefaults(), arguments));
                    var t = yp(Tf.getDefaults(), arguments);
                    this.portamento = t.portamento,
                    this.onsilence = t.onsilence
                }
                static getDefaults() {
                    return Object.assign(bf.getDefaults(), {
                        detune: 0,
                        onsilence: jp,
                        portamento: 0
                    })
                }
                triggerAttack(t, e, s=1) {
                    this.log("triggerAttack", t, e, s);
                    e = this.toSeconds(e);
                    return this._triggerEnvelopeAttack(e, s),
                    this.setNote(t, e),
                    this
                }
                triggerRelease(t) {
                    this.log("triggerRelease", t);
                    t = this.toSeconds(t);
                    return this._triggerEnvelopeRelease(t),
                    this
                }
                setNote(t, e) {
                    e = this.toSeconds(e),
                    t = t instanceof ed ? t.toFrequency() : t;
                    if (0 < this.portamento && .05 < this.getLevelAtTime(e)) {
                        const s = this.toSeconds(this.portamento);
                        this.frequency.exponentialRampTo(t, s, e)
                    } else
                        this.frequency.setValueAtTime(t, e);
                    return this
                }
            }
            lp([af(0)], Tf.prototype, "portamento", void 0);
            class Sf extends xf {
                constructor() {
                    super(yp(Sf.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])),
                    this.name = "AmplitudeEnvelope",
                    this._gainNode = new pd({
                        context: this.context,
                        gain: 0
                    }),
                    this.output = this._gainNode,
                    this.input = this._gainNode,
                    this._sig.connect(this._gainNode.gain),
                    this.output = this._gainNode,
                    this.input = this._gainNode
                }
                dispose() {
                    return super.dispose(),
                    this._gainNode.dispose(),
                    this
                }
            }
            class kf extends Tf {
                constructor() {
                    super(yp(kf.getDefaults(), arguments)),
                    this.name = "Synth";
                    var t = yp(kf.getDefaults(), arguments);
                    this.oscillator = new tf(Object.assign({
                        context: this.context,
                        detune: t.detune,
                        onstop: ()=>this.onsilence(this)
                    }, t.oscillator)),
                    this.frequency = this.oscillator.frequency,
                    this.detune = this.oscillator.detune,
                    this.envelope = new Sf(Object.assign({
                        context: this.context
                    }, t.envelope)),
                    this.oscillator.chain(this.envelope, this.output),
                    Np(this, ["oscillator", "frequency", "detune", "envelope"])
                }
                static getDefaults() {
                    return Object.assign(Tf.getDefaults(), {
                        envelope: Object.assign(wp(xf.getDefaults(), Object.keys(hd.getDefaults())), {
                            attack: .005,
                            decay: .1,
                            release: 1,
                            sustain: .3
                        }),
                        oscillator: Object.assign(wp(tf.getDefaults(), [...Object.keys(Fd.getDefaults()), "frequency", "detune"]), {
                            type: "triangle"
                        })
                    })
                }
                _triggerEnvelopeAttack(t, e) {
                    if (this.envelope.triggerAttack(t, e),
                    this.oscillator.start(t),
                    0 === this.envelope.sustain) {
                        const e = this.toSeconds(this.envelope.attack)
                          , s = this.toSeconds(this.envelope.decay);
                        this.oscillator.stop(t + e + s)
                    }
                }
                _triggerEnvelopeRelease(t) {
                    this.envelope.triggerRelease(t),
                    this.oscillator.stop(t + this.toSeconds(this.envelope.release))
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t),
                    this.envelope.getValueAtTime(t)
                }
                dispose() {
                    return super.dispose(),
                    this.oscillator.dispose(),
                    this.envelope.dispose(),
                    this
                }
            }
            class Cf extends Tf {
                constructor() {
                    super(yp(Cf.getDefaults(), arguments)),
                    this.name = "ModulationSynth";
                    var t = yp(Cf.getDefaults(), arguments);
                    this._carrier = new kf({
                        context: this.context,
                        oscillator: t.oscillator,
                        envelope: t.envelope,
                        onsilence: ()=>this.onsilence(this),
                        volume: -10
                    }),
                    this._modulator = new kf({
                        context: this.context,
                        oscillator: t.modulation,
                        envelope: t.modulationEnvelope,
                        volume: -10
                    }),
                    this.oscillator = this._carrier.oscillator,
                    this.envelope = this._carrier.envelope,
                    this.modulation = this._modulator.oscillator,
                    this.modulationEnvelope = this._modulator.envelope,
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency"
                    }),
                    this.detune = new _d({
                        context: this.context,
                        value: t.detune,
                        units: "cents"
                    }),
                    this.harmonicity = new Zd({
                        context: this.context,
                        value: t.harmonicity,
                        minValue: 0
                    }),
                    this._modulationNode = new pd({
                        context: this.context,
                        gain: 0
                    }),
                    Np(this, ["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
                }
                static getDefaults() {
                    return Object.assign(Tf.getDefaults(), {
                        harmonicity: 3,
                        oscillator: Object.assign(wp(tf.getDefaults(), [...Object.keys(Fd.getDefaults()), "frequency", "detune"]), {
                            type: "sine"
                        }),
                        envelope: Object.assign(wp(xf.getDefaults(), Object.keys(hd.getDefaults())), {
                            attack: .01,
                            decay: .01,
                            sustain: 1,
                            release: .5
                        }),
                        modulation: Object.assign(wp(tf.getDefaults(), [...Object.keys(Fd.getDefaults()), "frequency", "detune"]), {
                            type: "square"
                        }),
                        modulationEnvelope: Object.assign(wp(xf.getDefaults(), Object.keys(hd.getDefaults())), {
                            attack: .5,
                            decay: 0,
                            sustain: 1,
                            release: .5
                        })
                    })
                }
                _triggerEnvelopeAttack(t, e) {
                    this._carrier._triggerEnvelopeAttack(t, e),
                    this._modulator._triggerEnvelopeAttack(t, e)
                }
                _triggerEnvelopeRelease(t) {
                    return this._carrier._triggerEnvelopeRelease(t),
                    this._modulator._triggerEnvelopeRelease(t),
                    this
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t),
                    this.envelope.getValueAtTime(t)
                }
                dispose() {
                    return super.dispose(),
                    this._carrier.dispose(),
                    this._modulator.dispose(),
                    this.frequency.dispose(),
                    this.detune.dispose(),
                    this.harmonicity.dispose(),
                    this._modulationNode.dispose(),
                    this
                }
            }
            class Af extends Cf {
                constructor() {
                    super(yp(Af.getDefaults(), arguments)),
                    this.name = "AMSynth",
                    this._modulationScale = new Qd({
                        context: this.context
                    }),
                    this.frequency.connect(this._carrier.frequency),
                    this.frequency.chain(this.harmonicity, this._modulator.frequency),
                    this.detune.fan(this._carrier.detune, this._modulator.detune),
                    this._modulator.chain(this._modulationScale, this._modulationNode.gain),
                    this._carrier.chain(this._modulationNode, this.output)
                }
                dispose() {
                    return super.dispose(),
                    this._modulationScale.dispose(),
                    this
                }
            }
            class Df extends hd {
                constructor() {
                    super(yp(Df.getDefaults(), arguments, ["frequency", "type"])),
                    this.name = "BiquadFilter";
                    var t = yp(Df.getDefaults(), arguments, ["frequency", "type"]);
                    this._filter = this.context.createBiquadFilter(),
                    this.input = this.output = this._filter,
                    this.Q = new ad({
                        context: this.context,
                        units: "number",
                        value: t.Q,
                        param: this._filter.Q
                    }),
                    this.frequency = new ad({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency,
                        param: this._filter.frequency
                    }),
                    this.detune = new ad({
                        context: this.context,
                        units: "cents",
                        value: t.detune,
                        param: this._filter.detune
                    }),
                    this.gain = new ad({
                        context: this.context,
                        units: "decibels",
                        convert: !1,
                        value: t.gain,
                        param: this._filter.gain
                    }),
                    this.type = t.type
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        Q: 1,
                        type: "lowpass",
                        frequency: 350,
                        detune: 0,
                        gain: 0
                    })
                }
                get type() {
                    return this._filter.type
                }
                set type(t) {
                    Ju(-1 !== ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"].indexOf(t), `Invalid filter type: ${t}`),
                    this._filter.type = t
                }
                getFrequencyResponse(e=128) {
                    const s = new Float32Array(e);
                    for (let t = 0; t < e; t++) {
                        const n = 19980 * Math.pow(t / e, 2) + 20;
                        s[t] = n
                    }
                    const t = new Float32Array(e)
                      , n = new Float32Array(e)
                      , i = this.context.createBiquadFilter();
                    return i.type = this.type,
                    i.Q.value = this.Q.value,
                    i.frequency.value = this.frequency.value,
                    i.gain.value = this.gain.value,
                    i.getFrequencyResponse(s, t, n),
                    t
                }
                dispose() {
                    return super.dispose(),
                    this._filter.disconnect(),
                    this.Q.dispose(),
                    this.frequency.dispose(),
                    this.gain.dispose(),
                    this.detune.dispose(),
                    this
                }
            }
            class Of extends hd {
                constructor() {
                    super(yp(Of.getDefaults(), arguments, ["frequency", "type", "rolloff"])),
                    this.name = "Filter",
                    this.input = new pd({
                        context: this.context
                    }),
                    this.output = new pd({
                        context: this.context
                    }),
                    this._filters = [];
                    var t = yp(Of.getDefaults(), arguments, ["frequency", "type", "rolloff"]);
                    this._filters = [],
                    this.Q = new _d({
                        context: this.context,
                        units: "positive",
                        value: t.Q
                    }),
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency
                    }),
                    this.detune = new _d({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }),
                    this.gain = new _d({
                        context: this.context,
                        units: "decibels",
                        convert: !1,
                        value: t.gain
                    }),
                    this._type = t.type,
                    this.rolloff = t.rolloff,
                    Np(this, ["detune", "frequency", "gain", "Q"])
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        Q: 1,
                        detune: 0,
                        frequency: 350,
                        gain: 0,
                        rolloff: -12,
                        type: "lowpass"
                    })
                }
                get type() {
                    return this._type
                }
                set type(e) {
                    Ju(-1 !== ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"].indexOf(e), `Invalid filter type: ${e}`),
                    this._type = e,
                    this._filters.forEach(t=>t.type = e)
                }
                get rolloff() {
                    return this._rolloff
                }
                set rolloff(t) {
                    const e = Qu(t) ? t : parseInt(t, 10)
                      , s = [-12, -24, -48, -96];
                    var n = s.indexOf(e);
                    Ju(-1 !== n, `rolloff can only be ${s.join(", ")}`),
                    n += 1,
                    this._rolloff = e,
                    this.input.disconnect(),
                    this._filters.forEach(t=>t.disconnect()),
                    this._filters = new Array(n);
                    for (let t = 0; t < n; t++) {
                        const e = new Df({
                            context: this.context
                        });
                        e.type = this._type,
                        this.frequency.connect(e.frequency),
                        this.detune.connect(e.detune),
                        this.Q.connect(e.Q),
                        this.gain.connect(e.gain),
                        this._filters[t] = e
                    }
                    this._internalChannels = this._filters,
                    cd(this.input, ...this._internalChannels, this.output)
                }
                getFrequencyResponse(t=128) {
                    const e = new Df({
                        frequency: this.frequency.value,
                        gain: this.gain.value,
                        Q: this.Q.value,
                        type: this._type,
                        detune: this.detune.value
                    })
                      , s = new Float32Array(t).map(()=>1);
                    return this._filters.forEach(()=>{
                        e.getFrequencyResponse(t).forEach((t,e)=>s[e] *= t)
                    }
                    ),
                    e.dispose(),
                    s
                }
                dispose() {
                    return super.dispose(),
                    this._filters.forEach(t=>{
                        t.dispose()
                    }
                    ),
                    Pp(this, ["detune", "frequency", "gain", "Q"]),
                    this.frequency.dispose(),
                    this.Q.dispose(),
                    this.detune.dispose(),
                    this.gain.dispose(),
                    this
                }
            }
            class Mf extends xf {
                constructor() {
                    super(yp(Mf.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])),
                    this.name = "FrequencyEnvelope";
                    var t = yp(Mf.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]);
                    this._octaves = t.octaves,
                    this._baseFrequency = this.toFrequency(t.baseFrequency),
                    this._exponent = this.input = new gf({
                        context: this.context,
                        value: t.exponent
                    }),
                    this._scale = this.output = new sf({
                        context: this.context,
                        min: this._baseFrequency,
                        max: this._baseFrequency * Math.pow(2, this._octaves)
                    }),
                    this._sig.chain(this._exponent, this._scale)
                }
                static getDefaults() {
                    return Object.assign(xf.getDefaults(), {
                        baseFrequency: 200,
                        exponent: 1,
                        octaves: 4
                    })
                }
                get baseFrequency() {
                    return this._baseFrequency
                }
                set baseFrequency(t) {
                    t = this.toFrequency(t);
                    Ku(t, 0),
                    this._baseFrequency = t,
                    this._scale.min = this._baseFrequency,
                    this.octaves = this._octaves
                }
                get octaves() {
                    return this._octaves
                }
                set octaves(t) {
                    this._octaves = t,
                    this._scale.max = this._baseFrequency * Math.pow(2, t)
                }
                get exponent() {
                    return this._exponent.value
                }
                set exponent(t) {
                    this._exponent.value = t
                }
                dispose() {
                    return super.dispose(),
                    this._exponent.dispose(),
                    this._scale.dispose(),
                    this
                }
            }
            class Ef extends Tf {
                constructor() {
                    super(yp(Ef.getDefaults(), arguments)),
                    this.name = "MonoSynth";
                    var t = yp(Ef.getDefaults(), arguments);
                    this.oscillator = new tf(Object.assign(t.oscillator, {
                        context: this.context,
                        detune: t.detune,
                        onstop: ()=>this.onsilence(this)
                    })),
                    this.frequency = this.oscillator.frequency,
                    this.detune = this.oscillator.detune,
                    this.filter = new Of(Object.assign(t.filter, {
                        context: this.context
                    })),
                    this.filterEnvelope = new Mf(Object.assign(t.filterEnvelope, {
                        context: this.context
                    })),
                    this.envelope = new Sf(Object.assign(t.envelope, {
                        context: this.context
                    })),
                    this.oscillator.chain(this.filter, this.envelope, this.output),
                    this.filterEnvelope.connect(this.filter.frequency),
                    Np(this, ["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"])
                }
                static getDefaults() {
                    return Object.assign(Tf.getDefaults(), {
                        envelope: Object.assign(wp(xf.getDefaults(), Object.keys(hd.getDefaults())), {
                            attack: .005,
                            decay: .1,
                            release: 1,
                            sustain: .9
                        }),
                        filter: Object.assign(wp(Of.getDefaults(), Object.keys(hd.getDefaults())), {
                            Q: 1,
                            rolloff: -12,
                            type: "lowpass"
                        }),
                        filterEnvelope: Object.assign(wp(Mf.getDefaults(), Object.keys(hd.getDefaults())), {
                            attack: .6,
                            baseFrequency: 200,
                            decay: .2,
                            exponent: 2,
                            octaves: 3,
                            release: 2,
                            sustain: .5
                        }),
                        oscillator: Object.assign(wp(tf.getDefaults(), Object.keys(Fd.getDefaults())), {
                            type: "sawtooth"
                        })
                    })
                }
                _triggerEnvelopeAttack(t, e=1) {
                    if (this.envelope.triggerAttack(t, e),
                    this.filterEnvelope.triggerAttack(t),
                    this.oscillator.start(t),
                    0 === this.envelope.sustain) {
                        const e = this.toSeconds(this.envelope.attack)
                          , s = this.toSeconds(this.envelope.decay);
                        this.oscillator.stop(t + e + s)
                    }
                }
                _triggerEnvelopeRelease(t) {
                    this.envelope.triggerRelease(t),
                    this.filterEnvelope.triggerRelease(t),
                    this.oscillator.stop(t + this.toSeconds(this.envelope.release))
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t),
                    this.envelope.getValueAtTime(t)
                }
                dispose() {
                    return super.dispose(),
                    this.oscillator.dispose(),
                    this.envelope.dispose(),
                    this.filterEnvelope.dispose(),
                    this.filter.dispose(),
                    this
                }
            }
            class Rf extends Tf {
                constructor() {
                    super(yp(Rf.getDefaults(), arguments)),
                    this.name = "DuoSynth";
                    var t = yp(Rf.getDefaults(), arguments);
                    this.voice0 = new Ef(Object.assign(t.voice0, {
                        context: this.context,
                        onsilence: ()=>this.onsilence(this)
                    })),
                    this.voice1 = new Ef(Object.assign(t.voice1, {
                        context: this.context
                    })),
                    this.harmonicity = new Zd({
                        context: this.context,
                        units: "positive",
                        value: t.harmonicity
                    }),
                    this._vibrato = new rf({
                        frequency: t.vibratoRate,
                        context: this.context,
                        min: -50,
                        max: 50
                    }),
                    this._vibrato.start(),
                    this.vibratoRate = this._vibrato.frequency,
                    this._vibratoGain = new pd({
                        context: this.context,
                        units: "normalRange",
                        gain: t.vibratoAmount
                    }),
                    this.vibratoAmount = this._vibratoGain.gain,
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: 440
                    }),
                    this.detune = new _d({
                        context: this.context,
                        units: "cents",
                        value: t.detune
                    }),
                    this.frequency.connect(this.voice0.frequency),
                    this.frequency.chain(this.harmonicity, this.voice1.frequency),
                    this._vibrato.connect(this._vibratoGain),
                    this._vibratoGain.fan(this.voice0.detune, this.voice1.detune),
                    this.detune.fan(this.voice0.detune, this.voice1.detune),
                    this.voice0.connect(this.output),
                    this.voice1.connect(this.output),
                    Np(this, ["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"])
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t),
                    this.voice0.envelope.getValueAtTime(t) + this.voice1.envelope.getValueAtTime(t)
                }
                static getDefaults() {
                    return vp(Tf.getDefaults(), {
                        vibratoAmount: .5,
                        vibratoRate: 5,
                        harmonicity: 1.5,
                        voice0: vp(wp(Ef.getDefaults(), Object.keys(Tf.getDefaults())), {
                            filterEnvelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            },
                            envelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            }
                        }),
                        voice1: vp(wp(Ef.getDefaults(), Object.keys(Tf.getDefaults())), {
                            filterEnvelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            },
                            envelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            }
                        })
                    })
                }
                _triggerEnvelopeAttack(t, e) {
                    this.voice0._triggerEnvelopeAttack(t, e),
                    this.voice1._triggerEnvelopeAttack(t, e)
                }
                _triggerEnvelopeRelease(t) {
                    return this.voice0._triggerEnvelopeRelease(t),
                    this.voice1._triggerEnvelopeRelease(t),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this.voice0.dispose(),
                    this.voice1.dispose(),
                    this.frequency.dispose(),
                    this.detune.dispose(),
                    this._vibrato.dispose(),
                    this.vibratoRate.dispose(),
                    this._vibratoGain.dispose(),
                    this.harmonicity.dispose(),
                    this
                }
            }
            class qf extends Cf {
                constructor() {
                    super(yp(qf.getDefaults(), arguments)),
                    this.name = "FMSynth";
                    var t = yp(qf.getDefaults(), arguments);
                    this.modulationIndex = new Zd({
                        context: this.context,
                        value: t.modulationIndex
                    }),
                    this.frequency.connect(this._carrier.frequency),
                    this.frequency.chain(this.harmonicity, this._modulator.frequency),
                    this.frequency.chain(this.modulationIndex, this._modulationNode),
                    this.detune.fan(this._carrier.detune, this._modulator.detune),
                    this._modulator.connect(this._modulationNode.gain),
                    this._modulationNode.connect(this._carrier.frequency),
                    this._carrier.connect(this.output)
                }
                static getDefaults() {
                    return Object.assign(Cf.getDefaults(), {
                        modulationIndex: 10
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.modulationIndex.dispose(),
                    this
                }
            }
            const Ff = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
            class If extends Tf {
                constructor() {
                    super(yp(If.getDefaults(), arguments)),
                    this.name = "MetalSynth",
                    this._oscillators = [],
                    this._freqMultipliers = [];
                    var e = yp(If.getDefaults(), arguments);
                    this.detune = new _d({
                        context: this.context,
                        units: "cents",
                        value: e.detune
                    }),
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency"
                    }),
                    this._amplitude = new pd({
                        context: this.context,
                        gain: 0
                    }).connect(this.output),
                    this._highpass = new Of({
                        Q: 0,
                        context: this.context,
                        type: "highpass"
                    }).connect(this._amplitude);
                    for (let t = 0; t < Ff.length; t++) {
                        const n = new Yd({
                            context: this.context,
                            harmonicity: e.harmonicity,
                            modulationIndex: e.modulationIndex,
                            modulationType: "square",
                            onstop: 0 === t ? ()=>this.onsilence(this) : jp,
                            type: "square"
                        });
                        n.connect(this._highpass),
                        this._oscillators[t] = n;
                        var s = new Zd({
                            context: this.context,
                            value: Ff[t]
                        });
                        this._freqMultipliers[t] = s,
                        this.frequency.chain(s, n.frequency),
                        this.detune.connect(n.detune)
                    }
                    this._filterFreqScaler = new sf({
                        context: this.context,
                        max: 7e3,
                        min: this.toFrequency(e.resonance)
                    }),
                    this.envelope = new xf({
                        attack: e.envelope.attack,
                        attackCurve: "linear",
                        context: this.context,
                        decay: e.envelope.decay,
                        release: e.envelope.release,
                        sustain: 0
                    }),
                    this.envelope.chain(this._filterFreqScaler, this._highpass.frequency),
                    this.envelope.connect(this._amplitude.gain),
                    this._octaves = e.octaves,
                    this.octaves = e.octaves
                }
                static getDefaults() {
                    return vp(Tf.getDefaults(), {
                        envelope: Object.assign(wp(xf.getDefaults(), Object.keys(hd.getDefaults())), {
                            attack: .001,
                            decay: 1.4,
                            release: .2
                        }),
                        harmonicity: 5.1,
                        modulationIndex: 32,
                        octaves: 1.5,
                        resonance: 4e3
                    })
                }
                _triggerEnvelopeAttack(e, t=1) {
                    return this.envelope.triggerAttack(e, t),
                    this._oscillators.forEach(t=>t.start(e)),
                    0 === this.envelope.sustain && this._oscillators.forEach(t=>{
                        t.stop(e + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay))
                    }
                    ),
                    this
                }
                _triggerEnvelopeRelease(e) {
                    return this.envelope.triggerRelease(e),
                    this._oscillators.forEach(t=>t.stop(e + this.toSeconds(this.envelope.release))),
                    this
                }
                getLevelAtTime(t) {
                    return t = this.toSeconds(t),
                    this.envelope.getValueAtTime(t)
                }
                get modulationIndex() {
                    return this._oscillators[0].modulationIndex.value
                }
                set modulationIndex(e) {
                    this._oscillators.forEach(t=>t.modulationIndex.value = e)
                }
                get harmonicity() {
                    return this._oscillators[0].harmonicity.value
                }
                set harmonicity(e) {
                    this._oscillators.forEach(t=>t.harmonicity.value = e)
                }
                get resonance() {
                    return this._filterFreqScaler.min
                }
                set resonance(t) {
                    this._filterFreqScaler.min = this.toFrequency(t),
                    this.octaves = this._octaves
                }
                get octaves() {
                    return this._octaves
                }
                set octaves(t) {
                    this._octaves = t,
                    this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t)
                }
                dispose() {
                    return super.dispose(),
                    this._oscillators.forEach(t=>t.dispose()),
                    this._freqMultipliers.forEach(t=>t.dispose()),
                    this.frequency.dispose(),
                    this.detune.dispose(),
                    this._filterFreqScaler.dispose(),
                    this._amplitude.dispose(),
                    this.envelope.dispose(),
                    this._highpass.dispose(),
                    this
                }
            }
            class Vf extends kf {
                constructor() {
                    super(yp(Vf.getDefaults(), arguments)),
                    this.name = "MembraneSynth",
                    this.portamento = 0;
                    var t = yp(Vf.getDefaults(), arguments);
                    this.pitchDecay = t.pitchDecay,
                    this.octaves = t.octaves,
                    Np(this, ["oscillator", "envelope"])
                }
                static getDefaults() {
                    return vp(Tf.getDefaults(), kf.getDefaults(), {
                        envelope: {
                            attack: .001,
                            attackCurve: "exponential",
                            decay: .4,
                            release: 1.4,
                            sustain: .01
                        },
                        octaves: 10,
                        oscillator: {
                            type: "sine"
                        },
                        pitchDecay: .05
                    })
                }
                setNote(t, e) {
                    var s = this.toSeconds(e)
                      , e = this.toFrequency(t instanceof ed ? t.toFrequency() : t)
                      , t = e * this.octaves;
                    return this.oscillator.frequency.setValueAtTime(t, s),
                    this.oscillator.frequency.exponentialRampToValueAtTime(e, s + this.toSeconds(this.pitchDecay)),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this
                }
            }
            lp([of(0)], Vf.prototype, "octaves", void 0),
            lp([af(0)], Vf.prototype, "pitchDecay", void 0);
            class Nf extends bf {
                constructor() {
                    super(yp(Nf.getDefaults(), arguments)),
                    this.name = "NoiseSynth";
                    var t = yp(Nf.getDefaults(), arguments);
                    this.noise = new Vd(Object.assign({
                        context: this.context
                    }, t.noise)),
                    this.envelope = new Sf(Object.assign({
                        context: this.context
                    }, t.envelope)),
                    this.noise.chain(this.envelope, this.output)
                }
                static getDefaults() {
                    return Object.assign(bf.getDefaults(), {
                        envelope: Object.assign(wp(xf.getDefaults(), Object.keys(hd.getDefaults())), {
                            decay: .1,
                            sustain: 0
                        }),
                        noise: Object.assign(wp(Vd.getDefaults(), Object.keys(Fd.getDefaults())), {
                            type: "white"
                        })
                    })
                }
                triggerAttack(t, e=1) {
                    return t = this.toSeconds(t),
                    this.envelope.triggerAttack(t, e),
                    this.noise.start(t),
                    0 === this.envelope.sustain && this.noise.stop(t + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay)),
                    this
                }
                triggerRelease(t) {
                    return t = this.toSeconds(t),
                    this.envelope.triggerRelease(t),
                    this.noise.stop(t + this.toSeconds(this.envelope.release)),
                    this
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 0),
                    this._syncMethod("triggerRelease", 0)),
                    this
                }
                triggerAttackRelease(t, e, s=1) {
                    return e = this.toSeconds(e),
                    t = this.toSeconds(t),
                    this.triggerAttack(e, s),
                    this.triggerRelease(e + t),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this.noise.dispose(),
                    this.envelope.dispose(),
                    this
                }
            }
            const Pf = new Set;
            function jf(t) {
                Pf.add(t)
            }
            function Lf(t, e) {
                e = `registerProcessor("${t}", ${e})`;
                Pf.add(e)
            }
            class zf extends hd {
                constructor(t) {
                    super(t),
                    this.name = "ToneAudioWorklet",
                    this.workletOptions = {},
                    this.onprocessorerror = jp;
                    const e = URL.createObjectURL(new Blob([Array.from(Pf).join("\n")],{
                        type: "text/javascript"
                    }))
                      , s = this._audioWorkletName();
                    this._dummyGain = this.context.createGain(),
                    this._dummyParam = this._dummyGain.gain,
                    this.context.addAudioWorkletModule(e, s).then(()=>{
                        this.disposed || (this._worklet = this.context.createAudioWorkletNode(s, this.workletOptions),
                        this._worklet.onprocessorerror = this.onprocessorerror.bind(this),
                        this.onReady(this._worklet))
                    }
                    )
                }
                dispose() {
                    return super.dispose(),
                    this._dummyGain.disconnect(),
                    this._worklet && (this._worklet.port.postMessage("dispose"),
                    this._worklet.disconnect()),
                    this
                }
            }
            jf('\n\t/**\n\t * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. \n\t */\n\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\t\n\t\t\tsuper(options);\n\t\t\t/**\n\t\t\t * If the processor was disposed or not. Keep alive until it\'s disposed.\n\t\t\t */\n\t\t\tthis.disposed = false;\n\t\t   \t/** \n\t\t\t * The number of samples in the processing block\n\t\t\t */\n\t\t\tthis.blockSize = 128;\n\t\t\t/**\n\t\t\t * the sample rate\n\t\t\t */\n\t\t\tthis.sampleRate = sampleRate;\n\n\t\t\tthis.port.onmessage = (event) => {\n\t\t\t\t// when it receives a dispose \n\t\t\t\tif (event.data === "dispose") {\n\t\t\t\t\tthis.disposed = true;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}\n'),
            jf("\n\t/**\n\t * Abstract class for a single input/output processor. \n\t * has a 'generate' function which processes one sample at a time\n\t */\n\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(Object.assign(options, {\n\t\t\t\tnumberOfInputs: 1,\n\t\t\t\tnumberOfOutputs: 1\n\t\t\t}));\n\t\t\t/**\n\t\t\t * Holds the name of the parameter and a single value of that\n\t\t\t * parameter at the current sample\n\t\t\t * @type { [name: string]: number }\n\t\t\t */\n\t\t\tthis.params = {}\n\t\t}\n\n\t\t/**\n\t\t * Generate an output sample from the input sample and parameters\n\t\t * @abstract\n\t\t * @param input number\n\t\t * @param channel number\n\t\t * @param parameters { [name: string]: number }\n\t\t * @returns number\n\t\t */\n\t\tgenerate(){}\n\n\t\t/**\n\t\t * Update the private params object with the \n\t\t * values of the parameters at the given index\n\t\t * @param parameters { [name: string]: Float32Array },\n\t\t * @param index number\n\t\t */\n\t\tupdateParams(parameters, index) {\n\t\t\tfor (const paramName in parameters) {\n\t\t\t\tconst param = parameters[paramName];\n\t\t\t\tif (param.length > 1) {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];\n\t\t\t\t} else {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Process a single frame of the audio\n\t\t * @param inputs Float32Array[][]\n\t\t * @param outputs Float32Array[][]\n\t\t */\n\t\tprocess(inputs, outputs, parameters) {\n\t\t\tconst input = inputs[0];\n\t\t\tconst output = outputs[0];\n\t\t\t// get the parameter values\n\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);\n\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {\n\t\t\t\tthis.updateParams(parameters, sample);\n\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {\n\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;\n\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn !this.disposed;\n\t\t}\n\t};\n"),
            jf("\n\t/**\n\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n\t */\n\tclass DelayLine {\n\t\t\n\t\tconstructor(size, channels) {\n\t\t\tthis.buffer = [];\n\t\t\tthis.writeHead = []\n\t\t\tthis.size = size;\n\n\t\t\t// create the empty channels\n\t\t\tfor (let i = 0; i < channels; i++) {\n\t\t\t\tthis.buffer[i] = new Float32Array(this.size);\n\t\t\t\tthis.writeHead[i] = 0;\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Push a value onto the end\n\t\t * @param channel number\n\t\t * @param value number\n\t\t */\n\t\tpush(channel, value) {\n\t\t\tthis.writeHead[channel] += 1;\n\t\t\tif (this.writeHead[channel] > this.size) {\n\t\t\t\tthis.writeHead[channel] = 0;\n\t\t\t}\n\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;\n\t\t}\n\n\t\t/**\n\t\t * Get the recorded value of the channel given the delay\n\t\t * @param channel number\n\t\t * @param delay number delay samples\n\t\t */\n\t\tget(channel, delay) {\n\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);\n\t\t\tif (readHead < 0) {\n\t\t\t\treadHead += this.size;\n\t\t\t}\n\t\t\treturn this.buffer[channel][readHead];\n\t\t}\n\t}\n");
            const Wf = "feedback-comb-filter";
            Lf(Wf, '\n\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(options);\n\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n\t\t}\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "delayTime",\n\t\t\t\tdefaultValue: 0.1,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 1,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}, {\n\t\t\t\tname: "feedback",\n\t\t\t\tdefaultValue: 0.5,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 0.9999,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, channel, parameters) {\n\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);\n\t\t\treturn delayedSample;\n\t\t}\n\t}\n');
            class Bf extends zf {
                constructor() {
                    super(yp(Bf.getDefaults(), arguments, ["delayTime", "resonance"])),
                    this.name = "FeedbackCombFilter";
                    var t = yp(Bf.getDefaults(), arguments, ["delayTime", "resonance"]);
                    this.input = new pd({
                        context: this.context
                    }),
                    this.output = new pd({
                        context: this.context
                    }),
                    this.delayTime = new ad({
                        context: this.context,
                        value: t.delayTime,
                        units: "time",
                        minValue: 0,
                        maxValue: 1,
                        param: this._dummyParam,
                        swappable: !0
                    }),
                    this.resonance = new ad({
                        context: this.context,
                        value: t.resonance,
                        units: "normalRange",
                        param: this._dummyParam,
                        swappable: !0
                    }),
                    Np(this, ["resonance", "delayTime"])
                }
                _audioWorkletName() {
                    return Wf
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        delayTime: .1,
                        resonance: .5
                    })
                }
                onReady(t) {
                    cd(this.input, t, this.output);
                    var e = t.parameters.get("delayTime");
                    this.delayTime.setParam(e);
                    t = t.parameters.get("feedback");
                    this.resonance.setParam(t)
                }
                dispose() {
                    return super.dispose(),
                    this.input.dispose(),
                    this.output.dispose(),
                    this.delayTime.dispose(),
                    this.resonance.dispose(),
                    this
                }
            }
            class Uf extends hd {
                constructor() {
                    super(yp(Uf.getDefaults(), arguments, ["frequency", "type"])),
                    this.name = "OnePoleFilter";
                    var t = yp(Uf.getDefaults(), arguments, ["frequency", "type"]);
                    this._frequency = t.frequency,
                    this._type = t.type,
                    this.input = new pd({
                        context: this.context
                    }),
                    this.output = new pd({
                        context: this.context
                    }),
                    this._createFilter()
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        frequency: 880,
                        type: "lowpass"
                    })
                }
                _createFilter() {
                    const t = this._filter
                      , e = this.toFrequency(this._frequency)
                      , s = 1 / (2 * Math.PI * e);
                    if ("lowpass" === this._type) {
                        const t = 1 / (s * this.context.sampleRate)
                          , e = t - 1;
                        this._filter = this.context.createIIRFilter([t, 0], [1, e])
                    } else {
                        const t = 1 / (s * this.context.sampleRate) - 1;
                        this._filter = this.context.createIIRFilter([1, -1], [1, t])
                    }
                    this.input.chain(this._filter, this.output),
                    t && this.context.setTimeout(()=>{
                        this.disposed || (this.input.disconnect(t),
                        t.disconnect())
                    }
                    , this.blockTime)
                }
                get frequency() {
                    return this._frequency
                }
                set frequency(t) {
                    this._frequency = t,
                    this._createFilter()
                }
                get type() {
                    return this._type
                }
                set type(t) {
                    this._type = t,
                    this._createFilter()
                }
                getFrequencyResponse(e=128) {
                    const s = new Float32Array(e);
                    for (let t = 0; t < e; t++) {
                        const n = 19980 * Math.pow(t / e, 2) + 20;
                        s[t] = n
                    }
                    const t = new Float32Array(e)
                      , n = new Float32Array(e);
                    return this._filter.getFrequencyResponse(s, t, n),
                    t
                }
                dispose() {
                    return super.dispose(),
                    this.input.dispose(),
                    this.output.dispose(),
                    this._filter.disconnect(),
                    this
                }
            }
            class Gf extends hd {
                constructor() {
                    super(yp(Gf.getDefaults(), arguments, ["delayTime", "resonance", "dampening"])),
                    this.name = "LowpassCombFilter";
                    var t = yp(Gf.getDefaults(), arguments, ["delayTime", "resonance", "dampening"]);
                    this._combFilter = this.output = new Bf({
                        context: this.context,
                        delayTime: t.delayTime,
                        resonance: t.resonance
                    }),
                    this.delayTime = this._combFilter.delayTime,
                    this.resonance = this._combFilter.resonance,
                    this._lowpass = this.input = new Uf({
                        context: this.context,
                        frequency: t.dampening,
                        type: "lowpass"
                    }),
                    this._lowpass.connect(this._combFilter)
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        dampening: 3e3,
                        delayTime: .1,
                        resonance: .5
                    })
                }
                get dampening() {
                    return this._lowpass.frequency
                }
                set dampening(t) {
                    this._lowpass.frequency = t
                }
                dispose() {
                    return super.dispose(),
                    this._combFilter.dispose(),
                    this._lowpass.dispose(),
                    this
                }
            }
            class Qf extends bf {
                constructor() {
                    super(yp(Qf.getDefaults(), arguments)),
                    this.name = "PluckSynth";
                    var t = yp(Qf.getDefaults(), arguments);
                    this._noise = new Vd({
                        context: this.context,
                        type: "pink"
                    }),
                    this.attackNoise = t.attackNoise,
                    this._lfcf = new Gf({
                        context: this.context,
                        dampening: t.dampening,
                        resonance: t.resonance
                    }),
                    this.resonance = t.resonance,
                    this.release = t.release,
                    this._noise.connect(this._lfcf),
                    this._lfcf.connect(this.output)
                }
                static getDefaults() {
                    return vp(bf.getDefaults(), {
                        attackNoise: 1,
                        dampening: 4e3,
                        resonance: .7,
                        release: 1
                    })
                }
                get dampening() {
                    return this._lfcf.dampening
                }
                set dampening(t) {
                    this._lfcf.dampening = t
                }
                triggerAttack(t, e) {
                    t = this.toFrequency(t);
                    e = this.toSeconds(e);
                    t = 1 / t;
                    return this._lfcf.delayTime.setValueAtTime(t, e),
                    this._noise.start(e),
                    this._noise.stop(e + t * this.attackNoise),
                    this._lfcf.resonance.cancelScheduledValues(e),
                    this._lfcf.resonance.setValueAtTime(this.resonance, e),
                    this
                }
                triggerRelease(t) {
                    return this._lfcf.resonance.linearRampTo(0, this.release, t),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._noise.dispose(),
                    this._lfcf.dispose(),
                    this
                }
            }
            class Zf extends bf {
                constructor() {
                    super(yp(Zf.getDefaults(), arguments, ["voice", "options"])),
                    this.name = "PolySynth",
                    this._availableVoices = [],
                    this._activeVoices = [],
                    this._voices = [],
                    this._gcTimeout = -1,
                    this._averageActiveVoices = 0,
                    this._syncedRelease = t=>this.releaseAll(t);
                    const t = yp(Zf.getDefaults(), arguments, ["voice", "options"]);
                    Ju(!Qu(t.voice), "DEPRECATED: The polyphony count is no longer the first argument.");
                    var e = t.voice.getDefaults();
                    this.options = Object.assign(e, t.options),
                    this.voice = t.voice,
                    this.maxPolyphony = t.maxPolyphony,
                    this._dummyVoice = this._getNextAvailableVoice();
                    e = this._voices.indexOf(this._dummyVoice);
                    this._voices.splice(e, 1),
                    this._gcTimeout = this.context.setInterval(this._collectGarbage.bind(this), 1)
                }
                static getDefaults() {
                    return Object.assign(bf.getDefaults(), {
                        maxPolyphony: 32,
                        options: {},
                        voice: kf
                    })
                }
                get activeVoices() {
                    return this._activeVoices.length
                }
                _makeVoiceAvailable(e) {
                    this._availableVoices.push(e);
                    var t = this._activeVoices.findIndex(t=>t.voice === e);
                    this._activeVoices.splice(t, 1)
                }
                _getNextAvailableVoice() {
                    if (this._availableVoices.length)
                        return this._availableVoices.shift();
                    if (this._voices.length < this.maxPolyphony) {
                        const t = new this.voice(Object.assign(this.options, {
                            context: this.context,
                            onsilence: this._makeVoiceAvailable.bind(this)
                        }));
                        return Ju(t instanceof Tf, "Voice must extend Monophonic class"),
                        t.connect(this.output),
                        this._voices.push(t),
                        t
                    }
                    ap("Max polyphony exceeded. Note dropped.")
                }
                _collectGarbage() {
                    if (this._averageActiveVoices = Math.max(.95 * this._averageActiveVoices, this.activeVoices),
                    this._availableVoices.length && this._voices.length > Math.ceil(this._averageActiveVoices + 1)) {
                        const t = this._availableVoices.shift()
                          , e = this._voices.indexOf(t);
                        this._voices.splice(e, 1),
                        this.context.isOffline || t.dispose()
                    }
                }
                _triggerAttack(t, n, i) {
                    t.forEach(t=>{
                        const e = new Td(this.context,t).toMidi()
                          , s = this._getNextAvailableVoice();
                        s && (s.triggerAttack(t, n, i),
                        this._activeVoices.push({
                            midi: e,
                            voice: s,
                            released: !1
                        }),
                        this.log("triggerAttack", t, n))
                    }
                    )
                }
                _triggerRelease(t, n) {
                    t.forEach(t=>{
                        const s = new Td(this.context,t).toMidi()
                          , e = this._activeVoices.find(({midi: t, released: e})=>t === s && !e);
                        e && (e.voice.triggerRelease(n),
                        e.released = !0,
                        this.log("triggerRelease", t, n))
                    }
                    )
                }
                _scheduleEvent(t, e, s, n) {
                    Ju(!this.disposed, "Synth was already disposed"),
                    s <= this.now() ? "attack" === t ? this._triggerAttack(e, s, n) : this._triggerRelease(e, s) : this.context.setTimeout(()=>{
                        this.disposed || this._scheduleEvent(t, e, s, n)
                    }
                    , s - this.now())
                }
                triggerAttack(t, e, s) {
                    Array.isArray(t) || (t = [t]);
                    e = this.toSeconds(e);
                    return this._scheduleEvent("attack", t, e, s),
                    this
                }
                triggerRelease(t, e) {
                    Array.isArray(t) || (t = [t]);
                    e = this.toSeconds(e);
                    return this._scheduleEvent("release", t, e),
                    this
                }
                triggerAttackRelease(e, s, t, n) {
                    var i = this.toSeconds(t);
                    if (this.triggerAttack(e, i, n),
                    Yu(s)) {
                        Ju(Yu(e), "If the duration is an array, the notes must also be an array");
                        for (let t = 0; t < e.length; t++) {
                            const n = s[Math.min(t, s.length - 1)]
                              , r = this.toSeconds(n);
                            Ju(0 < r, "The duration must be greater than 0"),
                            this.triggerRelease(e[t], i + r)
                        }
                    } else {
                        const t = this.toSeconds(s);
                        Ju(0 < t, "The duration must be greater than 0"),
                        this.triggerRelease(e, i + t)
                    }
                    return this
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1),
                    this._syncMethod("triggerRelease", 1),
                    this.context.transport.on("stop", this._syncedRelease),
                    this.context.transport.on("pause", this._syncedRelease),
                    this.context.transport.on("loopEnd", this._syncedRelease)),
                    this
                }
                set(t) {
                    const e = wp(t, ["onsilence", "context"]);
                    return this.options = vp(this.options, e),
                    this._voices.forEach(t=>t.set(e)),
                    this._dummyVoice.set(e),
                    this
                }
                get() {
                    return this._dummyVoice.get()
                }
                releaseAll(t) {
                    const e = this.toSeconds(t);
                    return this._activeVoices.forEach(({voice: t})=>{
                        t.triggerRelease(e)
                    }
                    ),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._dummyVoice.dispose(),
                    this._voices.forEach(t=>t.dispose()),
                    this._activeVoices = [],
                    this._availableVoices = [],
                    this.context.clearInterval(this._gcTimeout),
                    this
                }
            }
            class Xf extends bf {
                constructor() {
                    super(yp(Xf.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls")),
                    this.name = "Sampler",
                    this._activeSources = new Map;
                    const s = yp(Xf.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls")
                      , n = {};
                    Object.keys(s.urls).forEach(t=>{
                        const e = parseInt(t, 10);
                        if (Ju(Hu(t) || Qu(e) && isFinite(e), `url key is neither a note or midi pitch: ${t}`),
                        Hu(t)) {
                            const e = new ed(this.context,t).toMidi();
                            n[e] = s.urls[t]
                        } else
                            Qu(e) && isFinite(e) && (n[e] = s.urls[e])
                    }
                    ),
                    this._buffers = new bd({
                        urls: n,
                        onload: s.onload,
                        baseUrl: s.baseUrl,
                        onerror: s.onerror
                    }),
                    this.attack = s.attack,
                    this.release = s.release,
                    this.curve = s.curve,
                    this._buffers.loaded && Promise.resolve().then(s.onload)
                }
                static getDefaults() {
                    return Object.assign(bf.getDefaults(), {
                        attack: 0,
                        baseUrl: "",
                        curve: "exponential",
                        onload: jp,
                        onerror: jp,
                        release: .1,
                        urls: {}
                    })
                }
                _findClosest(t) {
                    let e = 0;
                    for (; e < 96; ) {
                        if (this._buffers.has(t + e))
                            return -e;
                        if (this._buffers.has(t - e))
                            return e;
                        e++
                    }
                    throw new Error(`No available buffers for note: ${t}`)
                }
                triggerAttack(t, c, l=1) {
                    return this.log("triggerAttack", t, c, l),
                    (t = !Array.isArray(t) ? [t] : t).forEach(t=>{
                        const e = Hp(new ed(this.context,t).toFrequency())
                          , s = Math.round(e)
                          , n = e - s
                          , i = this._findClosest(s)
                          , r = s - i
                          , o = this._buffers.get(r)
                          , a = Xp(i + n)
                          , h = new Id({
                            url: o,
                            context: this.context,
                            curve: this.curve,
                            fadeIn: this.attack,
                            fadeOut: this.release,
                            playbackRate: a
                        }).connect(this.output);
                        h.start(c, 0, o.duration / a, l),
                        Yu(this._activeSources.get(s)) || this._activeSources.set(s, []),
                        this._activeSources.get(s).push(h),
                        h.onended = ()=>{
                            if (this._activeSources && this._activeSources.has(s)) {
                                const t = this._activeSources.get(s)
                                  , e = t.indexOf(h);
                                -1 !== e && t.splice(e, 1)
                            }
                        }
                    }
                    ),
                    this
                }
                triggerRelease(t, s) {
                    return this.log("triggerRelease", t, s),
                    (t = !Array.isArray(t) ? [t] : t).forEach(t=>{
                        t = new ed(this.context,t).toMidi();
                        if (this._activeSources.has(t) && this._activeSources.get(t).length) {
                            const e = this._activeSources.get(t);
                            s = this.toSeconds(s),
                            e.forEach(t=>{
                                t.stop(s)
                            }
                            ),
                            this._activeSources.set(t, [])
                        }
                    }
                    ),
                    this
                }
                releaseAll(t) {
                    const e = this.toSeconds(t);
                    return this._activeSources.forEach(t=>{
                        for (; t.length; )
                            t.shift().stop(e)
                    }
                    ),
                    this
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1),
                    this._syncMethod("triggerRelease", 1)),
                    this
                }
                triggerAttackRelease(t, s, e, n=1) {
                    const i = this.toSeconds(e);
                    return this.triggerAttack(t, i, n),
                    Yu(s) ? (Ju(Yu(t), "notes must be an array when duration is array"),
                    t.forEach((t,e)=>{
                        e = s[Math.min(e, s.length - 1)];
                        this.triggerRelease(t, i + this.toSeconds(e))
                    }
                    )) : this.triggerRelease(t, i + this.toSeconds(s)),
                    this
                }
                add(t, e, s) {
                    var n;
                    return Ju(Hu(t) || isFinite(t), `note must be a pitch or midi: ${t}`),
                    Hu(t) ? (n = new ed(this.context,t).toMidi(),
                    this._buffers.add(n, e, s)) : this._buffers.add(t, e, s),
                    this
                }
                get loaded() {
                    return this._buffers.loaded
                }
                dispose() {
                    return super.dispose(),
                    this._buffers.dispose(),
                    this._activeSources.forEach(t=>{
                        t.forEach(t=>t.dispose())
                    }
                    ),
                    this._activeSources.clear(),
                    this
                }
            }
            lp([af(0)], Xf.prototype, "attack", void 0),
            lp([af(0)], Xf.prototype, "release", void 0);
            class Yf extends rd {
                constructor() {
                    super(yp(Yf.getDefaults(), arguments, ["callback", "value"])),
                    this.name = "ToneEvent",
                    this._state = new od("stopped"),
                    this._startOffset = 0;
                    var t = yp(Yf.getDefaults(), arguments, ["callback", "value"]);
                    this._loop = t.loop,
                    this.callback = t.callback,
                    this.value = t.value,
                    this._loopStart = this.toTicks(t.loopStart),
                    this._loopEnd = this.toTicks(t.loopEnd),
                    this._playbackRate = t.playbackRate,
                    this._probability = t.probability,
                    this._humanize = t.humanize,
                    this.mute = t.mute,
                    this._playbackRate = t.playbackRate,
                    this._state.increasing = !0,
                    this._rescheduleEvents()
                }
                static getDefaults() {
                    return Object.assign(rd.getDefaults(), {
                        callback: jp,
                        humanize: !1,
                        loop: !1,
                        loopEnd: "1m",
                        loopStart: 0,
                        mute: !1,
                        playbackRate: 1,
                        probability: 1,
                        value: null
                    })
                }
                _rescheduleEvents(t=-1) {
                    this._state.forEachFrom(t, t=>{
                        let e;
                        var s, n;
                        "started" === t.state && (-1 !== t.id && this.context.transport.clear(t.id),
                        s = t.time + Math.round(this.startOffset / this._playbackRate),
                        !0 === this._loop || Qu(this._loop) && 1 < this._loop ? (e = 1 / 0,
                        Qu(this._loop) && (e = this._loop * this._getLoopDuration()),
                        null !== (n = this._state.getAfter(s)) && (e = Math.min(e, n.time - s)),
                        e !== 1 / 0 && (e = new Sd(this.context,e)),
                        n = new Sd(this.context,this._getLoopDuration()),
                        t.id = this.context.transport.scheduleRepeat(this._tick.bind(this), n, new Sd(this.context,s), e)) : t.id = this.context.transport.schedule(this._tick.bind(this), new Sd(this.context,s)))
                    }
                    )
                }
                get state() {
                    return this._state.getValueAtTime(this.context.transport.ticks)
                }
                get startOffset() {
                    return this._startOffset
                }
                set startOffset(t) {
                    this._startOffset = t
                }
                get probability() {
                    return this._probability
                }
                set probability(t) {
                    this._probability = t
                }
                get humanize() {
                    return this._humanize
                }
                set humanize(t) {
                    this._humanize = t
                }
                start(t) {
                    t = this.toTicks(t);
                    return "stopped" === this._state.getValueAtTime(t) && (this._state.add({
                        id: -1,
                        state: "started",
                        time: t
                    }),
                    this._rescheduleEvents(t)),
                    this
                }
                stop(e) {
                    this.cancel(e);
                    e = this.toTicks(e);
                    if ("started" === this._state.getValueAtTime(e)) {
                        this._state.setStateAtTime("stopped", e, {
                            id: -1
                        });
                        const s = this._state.getBefore(e);
                        let t = e;
                        null !== s && (t = s.time),
                        this._rescheduleEvents(t)
                    }
                    return this
                }
                cancel(t) {
                    t = xp(t, -1 / 0);
                    t = this.toTicks(t);
                    return this._state.forEachFrom(t, t=>{
                        this.context.transport.clear(t.id)
                    }
                    ),
                    this._state.cancel(t),
                    this
                }
                _tick(e) {
                    var t = this.context.transport.getTicksAtTime(e);
                    if (!(this.mute || "started" !== this._state.getValueAtTime(t) || this.probability < 1 && Math.random() > this.probability)) {
                        if (this.humanize) {
                            let t = .02;
                            Xu(this.humanize) || (t = this.toSeconds(this.humanize)),
                            e += (2 * Math.random() - 1) * t
                        }
                        this.callback(e, this.value)
                    }
                }
                _getLoopDuration() {
                    return (this._loopEnd - this._loopStart) / this._playbackRate
                }
                get loop() {
                    return this._loop
                }
                set loop(t) {
                    this._loop = t,
                    this._rescheduleEvents()
                }
                get playbackRate() {
                    return this._playbackRate
                }
                set playbackRate(t) {
                    this._playbackRate = t,
                    this._rescheduleEvents()
                }
                get loopEnd() {
                    return new Sd(this.context,this._loopEnd).toSeconds()
                }
                set loopEnd(t) {
                    this._loopEnd = this.toTicks(t),
                    this._loop && this._rescheduleEvents()
                }
                get loopStart() {
                    return new Sd(this.context,this._loopStart).toSeconds()
                }
                set loopStart(t) {
                    this._loopStart = this.toTicks(t),
                    this._loop && this._rescheduleEvents()
                }
                get progress() {
                    if (this._loop) {
                        var t = this.context.transport.ticks
                          , e = this._state.get(t);
                        if (null === e || "started" !== e.state)
                            return 0;
                        var s = this._getLoopDuration();
                        return (t - e.time) % s / s
                    }
                    return 0
                }
                dispose() {
                    return super.dispose(),
                    this.cancel(),
                    this._state.dispose(),
                    this
                }
            }
            class $f extends rd {
                constructor() {
                    super(yp($f.getDefaults(), arguments, ["callback", "interval"])),
                    this.name = "Loop";
                    var t = yp($f.getDefaults(), arguments, ["callback", "interval"]);
                    this._event = new Yf({
                        context: this.context,
                        callback: this._tick.bind(this),
                        loop: !0,
                        loopEnd: t.interval,
                        playbackRate: t.playbackRate,
                        probability: t.probability
                    }),
                    this.callback = t.callback,
                    this.iterations = t.iterations
                }
                static getDefaults() {
                    return Object.assign(rd.getDefaults(), {
                        interval: "4n",
                        callback: jp,
                        playbackRate: 1,
                        iterations: 1 / 0,
                        probability: 1,
                        mute: !1,
                        humanize: !1
                    })
                }
                start(t) {
                    return this._event.start(t),
                    this
                }
                stop(t) {
                    return this._event.stop(t),
                    this
                }
                cancel(t) {
                    return this._event.cancel(t),
                    this
                }
                _tick(t) {
                    this.callback(t)
                }
                get state() {
                    return this._event.state
                }
                get progress() {
                    return this._event.progress
                }
                get interval() {
                    return this._event.loopEnd
                }
                set interval(t) {
                    this._event.loopEnd = t
                }
                get playbackRate() {
                    return this._event.playbackRate
                }
                set playbackRate(t) {
                    this._event.playbackRate = t
                }
                get humanize() {
                    return this._event.humanize
                }
                set humanize(t) {
                    this._event.humanize = t
                }
                get probability() {
                    return this._event.probability
                }
                set probability(t) {
                    this._event.probability = t
                }
                get mute() {
                    return this._event.mute
                }
                set mute(t) {
                    this._event.mute = t
                }
                get iterations() {
                    return !0 === this._event.loop ? 1 / 0 : this._event.loop
                }
                set iterations(t) {
                    this._event.loop = t === 1 / 0 || t
                }
                dispose() {
                    return super.dispose(),
                    this._event.dispose(),
                    this
                }
            }
            class Hf extends Yf {
                constructor() {
                    super(yp(Hf.getDefaults(), arguments, ["callback", "events"])),
                    this.name = "Part",
                    this._state = new od("stopped"),
                    this._events = new Set;
                    const t = yp(Hf.getDefaults(), arguments, ["callback", "events"]);
                    this._state.increasing = !0,
                    t.events.forEach(t=>{
                        Yu(t) ? this.add(t[0], t[1]) : this.add(t)
                    }
                    )
                }
                static getDefaults() {
                    return Object.assign(Yf.getDefaults(), {
                        events: []
                    })
                }
                start(e, t) {
                    const s = this.toTicks(e);
                    if ("started" !== this._state.getValueAtTime(s)) {
                        t = xp(t, this._loop ? this._loopStart : 0),
                        t = this._loop ? xp(t, this._loopStart) : xp(t, 0);
                        const e = this.toTicks(t);
                        this._state.add({
                            id: -1,
                            offset: e,
                            state: "started",
                            time: s
                        }),
                        this._forEach(t=>{
                            this._startNote(t, s, e)
                        }
                        )
                    }
                    return this
                }
                _startNote(t, e, s) {
                    e -= s,
                    this._loop ? t.startOffset >= this._loopStart && t.startOffset < this._loopEnd ? (t.startOffset < s && (e += this._getLoopDuration()),
                    t.start(new Sd(this.context,e))) : t.startOffset < this._loopStart && t.startOffset >= s && (t.loop = !1,
                    t.start(new Sd(this.context,e))) : t.startOffset >= s && t.start(new Sd(this.context,e))
                }
                get startOffset() {
                    return this._startOffset
                }
                set startOffset(t) {
                    this._startOffset = t,
                    this._forEach(t=>{
                        t.startOffset += this._startOffset
                    }
                    )
                }
                stop(e) {
                    var t = this.toTicks(e);
                    return this._state.cancel(t),
                    this._state.setStateAtTime("stopped", t),
                    this._forEach(t=>{
                        t.stop(e)
                    }
                    ),
                    this
                }
                at(t, e) {
                    const s = new id(this.context,t).toTicks()
                      , n = new Sd(this.context,1).toSeconds()
                      , i = this._events.values();
                    let r = i.next();
                    for (; !r.done; ) {
                        const t = r.value;
                        if (Math.abs(s - t.startOffset) < n)
                            return Uu(e) && (t.value = e),
                            t;
                        r = i.next()
                    }
                    return Uu(e) ? (this.add(t, e),
                    this.at(t)) : null
                }
                add(t, e) {
                    t instanceof Object && Reflect.has(t, "time") && (t = (e = t).time);
                    t = this.toTicks(t);
                    let s;
                    return e instanceof Yf ? (s = e,
                    s.callback = this._tick.bind(this)) : s = new Yf({
                        callback: this._tick.bind(this),
                        context: this.context,
                        value: e
                    }),
                    s.startOffset = t,
                    s.set({
                        humanize: this.humanize,
                        loop: this.loop,
                        loopEnd: this.loopEnd,
                        loopStart: this.loopStart,
                        playbackRate: this.playbackRate,
                        probability: this.probability
                    }),
                    this._events.add(s),
                    this._restartEvent(s),
                    this
                }
                _restartEvent(e) {
                    this._state.forEach(t=>{
                        "started" === t.state ? this._startNote(e, t.time, t.offset) : e.stop(new Sd(this.context,t.time))
                    }
                    )
                }
                remove(e, s) {
                    return Zu(e) && e.hasOwnProperty("time") && (e = (s = e).time),
                    e = this.toTicks(e),
                    this._events.forEach(t=>{
                        t.startOffset === e && (Bu(s) || Uu(s) && t.value === s) && (this._events.delete(t),
                        t.dispose())
                    }
                    ),
                    this
                }
                clear() {
                    return this._forEach(t=>t.dispose()),
                    this._events.clear(),
                    this
                }
                cancel(e) {
                    return this._forEach(t=>t.cancel(e)),
                    this._state.cancel(this.toTicks(e)),
                    this
                }
                _forEach(e) {
                    return this._events && this._events.forEach(t=>{
                        t instanceof Hf ? t._forEach(e) : e(t)
                    }
                    ),
                    this
                }
                _setAll(e, s) {
                    this._forEach(t=>{
                        t[e] = s
                    }
                    )
                }
                _tick(t, e) {
                    this.mute || this.callback(t, e)
                }
                _testLoopBoundries(t) {
                    this._loop && (t.startOffset < this._loopStart || t.startOffset >= this._loopEnd) ? t.cancel(0) : "stopped" === t.state && this._restartEvent(t)
                }
                get probability() {
                    return this._probability
                }
                set probability(t) {
                    this._probability = t,
                    this._setAll("probability", t)
                }
                get humanize() {
                    return this._humanize
                }
                set humanize(t) {
                    this._humanize = t,
                    this._setAll("humanize", t)
                }
                get loop() {
                    return this._loop
                }
                set loop(e) {
                    this._loop = e,
                    this._forEach(t=>{
                        t.loopStart = this.loopStart,
                        t.loopEnd = this.loopEnd,
                        t.loop = e,
                        this._testLoopBoundries(t)
                    }
                    )
                }
                get loopEnd() {
                    return new Sd(this.context,this._loopEnd).toSeconds()
                }
                set loopEnd(e) {
                    this._loopEnd = this.toTicks(e),
                    this._loop && this._forEach(t=>{
                        t.loopEnd = e,
                        this._testLoopBoundries(t)
                    }
                    )
                }
                get loopStart() {
                    return new Sd(this.context,this._loopStart).toSeconds()
                }
                set loopStart(t) {
                    this._loopStart = this.toTicks(t),
                    this._loop && this._forEach(t=>{
                        t.loopStart = this.loopStart,
                        this._testLoopBoundries(t)
                    }
                    )
                }
                get playbackRate() {
                    return this._playbackRate
                }
                set playbackRate(t) {
                    this._playbackRate = t,
                    this._setAll("playbackRate", t)
                }
                get length() {
                    return this._events.size
                }
                dispose() {
                    return super.dispose(),
                    this.clear(),
                    this
                }
            }
            function *Jf(t) {
                let e = 0;
                for (; e < t.length; )
                    e = e_(e, t),
                    yield t[e],
                    e++
            }
            function *Kf(t) {
                let e = t.length - 1;
                for (; 0 <= e; )
                    e = e_(e, t),
                    yield t[e],
                    e--
            }
            function *t_(t, e) {
                for (; ; )
                    yield*e(t)
            }
            function e_(t, e) {
                return Dp(t, 0, e.length - 1)
            }
            function *s_(t, e) {
                let s = e ? 0 : t.length - 1;
                for (; ; )
                    s = e_(s, t),
                    yield t[s],
                    e ? (s++,
                    s >= t.length - 1 && (e = !1)) : (s--,
                    s <= 0 && (e = !0))
            }
            function *n_(t) {
                let e = 0
                  , s = 0;
                for (; e < t.length; )
                    e = e_(e, t),
                    yield t[e],
                    s++,
                    e += s % 2 ? 2 : -1
            }
            function *i_(t) {
                let e = t.length - 1
                  , s = 0;
                for (; 0 <= e; )
                    e = e_(e, t),
                    yield t[e],
                    s++,
                    e += s % 2 ? -2 : 1
            }
            function *r_(e) {
                const s = [];
                for (let t = 0; t < e.length; t++)
                    s.push(t);
                for (; 0 < s.length; )
                    yield e[e_(s.splice(Math.floor(s.length * Math.random()), 1)[0], e)]
            }
            function *o_(t, e="up") {
                switch (Ju(0 < t.length, "The array must have more than one value in it"),
                e) {
                case "up":
                    yield*t_(t, Jf);
                case "down":
                    yield*t_(t, Kf);
                case "upDown":
                    yield*s_(t, !0);
                case "downUp":
                    yield*s_(t, !1);
                case "alternateUp":
                    yield*t_(t, n_);
                case "alternateDown":
                    yield*t_(t, i_);
                case "random":
                    yield*function*(t) {
                        for (; ; )
                            yield t[Math.floor(Math.random() * t.length)]
                    }(t);
                case "randomOnce":
                    yield*t_(t, r_);
                case "randomWalk":
                    yield*function*(t) {
                        let e = Math.floor(Math.random() * t.length);
                        for (; ; )
                            0 !== e && (e === t.length - 1 || Math.random() < .5) ? e-- : e++,
                            yield t[e]
                    }(t)
                }
            }
            class a_ extends $f {
                constructor() {
                    super(yp(a_.getDefaults(), arguments, ["callback", "values", "pattern"])),
                    this.name = "Pattern";
                    var t = yp(a_.getDefaults(), arguments, ["callback", "values", "pattern"]);
                    this.callback = t.callback,
                    this._values = t.values,
                    this._pattern = o_(t.values, t.pattern),
                    this._type = t.pattern
                }
                static getDefaults() {
                    return Object.assign($f.getDefaults(), {
                        pattern: "up",
                        values: [],
                        callback: jp
                    })
                }
                _tick(t) {
                    var e = this._pattern.next();
                    this._value = e.value,
                    this.callback(t, this._value)
                }
                get values() {
                    return this._values
                }
                set values(t) {
                    this._values = t,
                    this.pattern = this._type
                }
                get value() {
                    return this._value
                }
                get pattern() {
                    return this._type
                }
                set pattern(t) {
                    this._type = t,
                    this._pattern = o_(this._values, this._type)
                }
            }
            class h_ extends Yf {
                constructor() {
                    super(yp(h_.getDefaults(), arguments, ["callback", "events", "subdivision"])),
                    this.name = "Sequence",
                    this._part = new Hf({
                        callback: this._seqCallback.bind(this),
                        context: this.context
                    }),
                    this._events = [],
                    this._eventsArray = [];
                    var t = yp(h_.getDefaults(), arguments, ["callback", "events", "subdivision"]);
                    this._subdivision = this.toTicks(t.subdivision),
                    this.events = t.events,
                    this.loop = t.loop,
                    this.loopStart = t.loopStart,
                    this.loopEnd = t.loopEnd,
                    this.playbackRate = t.playbackRate,
                    this.probability = t.probability,
                    this.humanize = t.humanize,
                    this.mute = t.mute,
                    this.playbackRate = t.playbackRate
                }
                static getDefaults() {
                    return Object.assign(wp(Yf.getDefaults(), ["value"]), {
                        events: [],
                        loop: !0,
                        loopEnd: 0,
                        loopStart: 0,
                        subdivision: "8n"
                    })
                }
                _seqCallback(t, e) {
                    null === e || this.mute || this.callback(t, e)
                }
                get events() {
                    return this._events
                }
                set events(t) {
                    this.clear(),
                    this._eventsArray = t,
                    this._events = this._createSequence(this._eventsArray),
                    this._eventsUpdated()
                }
                start(t, e) {
                    return this._part.start(t, e && this._indexTime(e)),
                    this
                }
                stop(t) {
                    return this._part.stop(t),
                    this
                }
                get subdivision() {
                    return new Sd(this.context,this._subdivision).toSeconds()
                }
                _createSequence(t) {
                    return new Proxy(t,{
                        get: (t,e)=>t[e],
                        set: (t,e,s)=>($u(e) && isFinite(parseInt(e, 10)) && Yu(s) ? t[e] = this._createSequence(s) : t[e] = s,
                        this._eventsUpdated(),
                        !0)
                    })
                }
                _eventsUpdated() {
                    this._part.clear(),
                    this._rescheduleSequence(this._eventsArray, this._subdivision, this.startOffset),
                    this.loopEnd = this.loopEnd
                }
                _rescheduleSequence(t, s, n) {
                    t.forEach((t,e)=>{
                        e = e * s + n;
                        if (Yu(t))
                            this._rescheduleSequence(t, s / t.length, e);
                        else {
                            const s = new Sd(this.context,e,"i").toSeconds();
                            this._part.add(s, t)
                        }
                    }
                    )
                }
                _indexTime(t) {
                    return new Sd(this.context,t * this._subdivision + this.startOffset).toSeconds()
                }
                clear() {
                    return this._part.clear(),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._part.dispose(),
                    this
                }
                get loop() {
                    return this._part.loop
                }
                set loop(t) {
                    this._part.loop = t
                }
                get loopStart() {
                    return this._loopStart
                }
                set loopStart(t) {
                    this._loopStart = t,
                    this._part.loopStart = this._indexTime(t)
                }
                get loopEnd() {
                    return this._loopEnd
                }
                set loopEnd(t) {
                    this._loopEnd = t,
                    this._part.loopEnd = 0 === t ? this._indexTime(this._eventsArray.length) : this._indexTime(t)
                }
                get startOffset() {
                    return this._part.startOffset
                }
                set startOffset(t) {
                    this._part.startOffset = t
                }
                get playbackRate() {
                    return this._part.playbackRate
                }
                set playbackRate(t) {
                    this._part.playbackRate = t
                }
                get probability() {
                    return this._part.probability
                }
                set probability(t) {
                    this._part.probability = t
                }
                get progress() {
                    return this._part.progress
                }
                get humanize() {
                    return this._part.humanize
                }
                set humanize(t) {
                    this._part.humanize = t
                }
                get length() {
                    return this._part.length
                }
            }
            class c_ extends hd {
                constructor() {
                    super(Object.assign(yp(c_.getDefaults(), arguments, ["fade"]))),
                    this.name = "CrossFade",
                    this._panner = this.context.createStereoPanner(),
                    this._split = this.context.createChannelSplitter(2),
                    this._g2a = new pf({
                        context: this.context
                    }),
                    this.a = new pd({
                        context: this.context,
                        gain: 0
                    }),
                    this.b = new pd({
                        context: this.context,
                        gain: 0
                    }),
                    this.output = new pd({
                        context: this.context
                    }),
                    this._internalChannels = [this.a, this.b];
                    var t = yp(c_.getDefaults(), arguments, ["fade"]);
                    this.fade = new _d({
                        context: this.context,
                        units: "normalRange",
                        value: t.fade
                    }),
                    Np(this, "fade"),
                    this.context.getConstant(1).connect(this._panner),
                    this._panner.connect(this._split),
                    this._panner.channelCount = 1,
                    this._panner.channelCountMode = "explicit",
                    ld(this._split, this.a.gain, 0),
                    ld(this._split, this.b.gain, 1),
                    this.fade.chain(this._g2a, this._panner.pan),
                    this.a.connect(this.output),
                    this.b.connect(this.output)
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        fade: .5
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.a.dispose(),
                    this.b.dispose(),
                    this.output.dispose(),
                    this.fade.dispose(),
                    this._g2a.dispose(),
                    this._panner.disconnect(),
                    this._split.disconnect(),
                    this
                }
            }
            class l_ extends hd {
                constructor(t) {
                    super(t),
                    this.name = "Effect",
                    this._dryWet = new c_({
                        context: this.context
                    }),
                    this.wet = this._dryWet.fade,
                    this.effectSend = new pd({
                        context: this.context
                    }),
                    this.effectReturn = new pd({
                        context: this.context
                    }),
                    this.input = new pd({
                        context: this.context
                    }),
                    this.output = this._dryWet,
                    this.input.fan(this._dryWet.a, this.effectSend),
                    this.effectReturn.connect(this._dryWet.b),
                    this.wet.setValueAtTime(t.wet, 0),
                    this._internalChannels = [this.effectReturn, this.effectSend],
                    Np(this, "wet")
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        wet: 1
                    })
                }
                connectEffect(t) {
                    return this._internalChannels.push(t),
                    this.effectSend.chain(t, this.effectReturn),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._dryWet.dispose(),
                    this.effectSend.dispose(),
                    this.effectReturn.dispose(),
                    this.wet.dispose(),
                    this
                }
            }
            class u_ extends l_ {
                constructor(t) {
                    super(t),
                    this.name = "LFOEffect",
                    this._lfo = new rf({
                        context: this.context,
                        frequency: t.frequency,
                        amplitude: t.depth
                    }),
                    this.depth = this._lfo.amplitude,
                    this.frequency = this._lfo.frequency,
                    this.type = t.type,
                    Np(this, ["frequency", "depth"])
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        frequency: 1,
                        type: "sine",
                        depth: 1
                    })
                }
                start(t) {
                    return this._lfo.start(t),
                    this
                }
                stop(t) {
                    return this._lfo.stop(t),
                    this
                }
                sync() {
                    return this._lfo.sync(),
                    this
                }
                unsync() {
                    return this._lfo.unsync(),
                    this
                }
                get type() {
                    return this._lfo.type
                }
                set type(t) {
                    this._lfo.type = t
                }
                dispose() {
                    return super.dispose(),
                    this._lfo.dispose(),
                    this.frequency.dispose(),
                    this.depth.dispose(),
                    this
                }
            }
            class p_ extends u_ {
                constructor() {
                    super(yp(p_.getDefaults(), arguments, ["frequency", "baseFrequency", "octaves"])),
                    this.name = "AutoFilter";
                    var t = yp(p_.getDefaults(), arguments, ["frequency", "baseFrequency", "octaves"]);
                    this.filter = new Of(Object.assign(t.filter, {
                        context: this.context
                    })),
                    this.connectEffect(this.filter),
                    this._lfo.connect(this.filter.frequency),
                    this.octaves = t.octaves,
                    this.baseFrequency = t.baseFrequency
                }
                static getDefaults() {
                    return Object.assign(u_.getDefaults(), {
                        baseFrequency: 200,
                        octaves: 2.6,
                        filter: {
                            type: "lowpass",
                            rolloff: -12,
                            Q: 1
                        }
                    })
                }
                get baseFrequency() {
                    return this._lfo.min
                }
                set baseFrequency(t) {
                    this._lfo.min = this.toFrequency(t),
                    this.octaves = this._octaves
                }
                get octaves() {
                    return this._octaves
                }
                set octaves(t) {
                    this._octaves = t,
                    this._lfo.max = this._lfo.min * Math.pow(2, t)
                }
                dispose() {
                    return super.dispose(),
                    this.filter.dispose(),
                    this
                }
            }
            class d_ extends hd {
                constructor() {
                    super(Object.assign(yp(d_.getDefaults(), arguments, ["pan"]))),
                    this.name = "Panner",
                    this._panner = this.context.createStereoPanner(),
                    this.input = this._panner,
                    this.output = this._panner;
                    var t = yp(d_.getDefaults(), arguments, ["pan"]);
                    this.pan = new ad({
                        context: this.context,
                        param: this._panner.pan,
                        value: t.pan,
                        minValue: -1,
                        maxValue: 1
                    }),
                    this._panner.channelCount = t.channelCount,
                    this._panner.channelCountMode = "explicit",
                    Np(this, "pan")
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        pan: 0,
                        channelCount: 1
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._panner.disconnect(),
                    this.pan.dispose(),
                    this
                }
            }
            class f_ extends u_ {
                constructor() {
                    super(yp(f_.getDefaults(), arguments, ["frequency"])),
                    this.name = "AutoPanner";
                    var t = yp(f_.getDefaults(), arguments, ["frequency"]);
                    this._panner = new d_({
                        context: this.context,
                        channelCount: t.channelCount
                    }),
                    this.connectEffect(this._panner),
                    this._lfo.connect(this._panner.pan),
                    this._lfo.min = -1,
                    this._lfo.max = 1
                }
                static getDefaults() {
                    return Object.assign(u_.getDefaults(), {
                        channelCount: 1
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._panner.dispose(),
                    this
                }
            }
            class __ extends hd {
                constructor() {
                    super(yp(__.getDefaults(), arguments, ["smoothing"])),
                    this.name = "Follower";
                    var t = yp(__.getDefaults(), arguments, ["smoothing"]);
                    this._abs = this.input = new uf({
                        context: this.context
                    }),
                    this._lowpass = this.output = new Uf({
                        context: this.context,
                        frequency: 1 / this.toSeconds(t.smoothing),
                        type: "lowpass"
                    }),
                    this._abs.connect(this._lowpass),
                    this._smoothing = t.smoothing
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        smoothing: .05
                    })
                }
                get smoothing() {
                    return this._smoothing
                }
                set smoothing(t) {
                    this._smoothing = t,
                    this._lowpass.frequency = 1 / this.toSeconds(this.smoothing)
                }
                dispose() {
                    return super.dispose(),
                    this._abs.dispose(),
                    this._lowpass.dispose(),
                    this
                }
            }
            class m_ extends l_ {
                constructor() {
                    super(yp(m_.getDefaults(), arguments, ["baseFrequency", "octaves", "sensitivity"])),
                    this.name = "AutoWah";
                    var t = yp(m_.getDefaults(), arguments, ["baseFrequency", "octaves", "sensitivity"]);
                    this._follower = new __({
                        context: this.context,
                        smoothing: t.follower
                    }),
                    this._sweepRange = new vf({
                        context: this.context,
                        min: 0,
                        max: 1,
                        exponent: .5
                    }),
                    this._baseFrequency = this.toFrequency(t.baseFrequency),
                    this._octaves = t.octaves,
                    this._inputBoost = new pd({
                        context: this.context
                    }),
                    this._bandpass = new Of({
                        context: this.context,
                        rolloff: -48,
                        frequency: 0,
                        Q: t.Q
                    }),
                    this._peaking = new Of({
                        context: this.context,
                        type: "peaking"
                    }),
                    this._peaking.gain.value = t.gain,
                    this.gain = this._peaking.gain,
                    this.Q = this._bandpass.Q,
                    this.effectSend.chain(this._inputBoost, this._follower, this._sweepRange),
                    this._sweepRange.connect(this._bandpass.frequency),
                    this._sweepRange.connect(this._peaking.frequency),
                    this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn),
                    this._setSweepRange(),
                    this.sensitivity = t.sensitivity,
                    Np(this, ["gain", "Q"])
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        baseFrequency: 100,
                        octaves: 6,
                        sensitivity: 0,
                        Q: 2,
                        gain: 2,
                        follower: .2
                    })
                }
                get octaves() {
                    return this._octaves
                }
                set octaves(t) {
                    this._octaves = t,
                    this._setSweepRange()
                }
                get follower() {
                    return this._follower.smoothing
                }
                set follower(t) {
                    this._follower.smoothing = t
                }
                get baseFrequency() {
                    return this._baseFrequency
                }
                set baseFrequency(t) {
                    this._baseFrequency = this.toFrequency(t),
                    this._setSweepRange()
                }
                get sensitivity() {
                    return Zp(1 / this._inputBoost.gain.value)
                }
                set sensitivity(t) {
                    this._inputBoost.gain.value = 1 / Qp(t)
                }
                _setSweepRange() {
                    this._sweepRange.min = this._baseFrequency,
                    this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2)
                }
                dispose() {
                    return super.dispose(),
                    this._follower.dispose(),
                    this._sweepRange.dispose(),
                    this._bandpass.dispose(),
                    this._peaking.dispose(),
                    this._inputBoost.dispose(),
                    this
                }
            }
            const g_ = "bit-crusher";
            Lf(g_, "\n\tclass BitCrusherWorklet extends SingleIOProcessor {\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: \"bits\",\n\t\t\t\tdefaultValue: 12,\n\t\t\t\tminValue: 1,\n\t\t\t\tmaxValue: 16,\n\t\t\t\tautomationRate: 'k-rate'\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, _channel, parameters) {\n\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);\n\t\t\tconst val = step * Math.floor(input / step + 0.5);\n\t\t\treturn val;\n\t\t}\n\t}\n");
            class v_ extends l_ {
                constructor() {
                    super(yp(v_.getDefaults(), arguments, ["bits"])),
                    this.name = "BitCrusher";
                    var t = yp(v_.getDefaults(), arguments, ["bits"]);
                    this._bitCrusherWorklet = new y_({
                        context: this.context,
                        bits: t.bits
                    }),
                    this.connectEffect(this._bitCrusherWorklet),
                    this.bits = this._bitCrusherWorklet.bits
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        bits: 4
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._bitCrusherWorklet.dispose(),
                    this
                }
            }
            class y_ extends zf {
                constructor() {
                    super(yp(y_.getDefaults(), arguments)),
                    this.name = "BitCrusherWorklet";
                    var t = yp(y_.getDefaults(), arguments);
                    this.input = new pd({
                        context: this.context
                    }),
                    this.output = new pd({
                        context: this.context
                    }),
                    this.bits = new ad({
                        context: this.context,
                        value: t.bits,
                        units: "positive",
                        minValue: 1,
                        maxValue: 16,
                        param: this._dummyParam,
                        swappable: !0
                    })
                }
                static getDefaults() {
                    return Object.assign(zf.getDefaults(), {
                        bits: 12
                    })
                }
                _audioWorkletName() {
                    return g_
                }
                onReady(t) {
                    cd(this.input, t, this.output);
                    t = t.parameters.get("bits");
                    this.bits.setParam(t)
                }
                dispose() {
                    return super.dispose(),
                    this.input.dispose(),
                    this.output.dispose(),
                    this.bits.dispose(),
                    this
                }
            }
            class x_ extends l_ {
                constructor() {
                    super(yp(x_.getDefaults(), arguments, ["order"])),
                    this.name = "Chebyshev";
                    var t = yp(x_.getDefaults(), arguments, ["order"]);
                    this._shaper = new Gd({
                        context: this.context,
                        length: 4096
                    }),
                    this._order = t.order,
                    this.connectEffect(this._shaper),
                    this.order = t.order,
                    this.oversample = t.oversample
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        order: 1,
                        oversample: "none"
                    })
                }
                _getCoefficient(t, e, s) {
                    return s.has(e) || (0 === e ? s.set(e, 0) : 1 === e ? s.set(e, t) : s.set(e, 2 * t * this._getCoefficient(t, e - 1, s) - this._getCoefficient(t, e - 2, s))),
                    s.get(e)
                }
                get order() {
                    return this._order
                }
                set order(e) {
                    Ju(Number.isInteger(e), "'order' must be an integer"),
                    this._order = e,
                    this._shaper.setMap(t=>this._getCoefficient(t, e, new Map))
                }
                get oversample() {
                    return this._shaper.oversample
                }
                set oversample(t) {
                    this._shaper.oversample = t
                }
                dispose() {
                    return super.dispose(),
                    this._shaper.dispose(),
                    this
                }
            }
            class w_ extends hd {
                constructor() {
                    super(yp(w_.getDefaults(), arguments, ["channels"])),
                    this.name = "Split";
                    var t = yp(w_.getDefaults(), arguments, ["channels"]);
                    this._splitter = this.input = this.output = this.context.createChannelSplitter(t.channels),
                    this._internalChannels = [this._splitter]
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        channels: 2
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._splitter.disconnect(),
                    this
                }
            }
            class b_ extends hd {
                constructor() {
                    super(yp(b_.getDefaults(), arguments, ["channels"])),
                    this.name = "Merge";
                    var t = yp(b_.getDefaults(), arguments, ["channels"]);
                    this._merger = this.output = this.input = this.context.createChannelMerger(t.channels)
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        channels: 2
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._merger.disconnect(),
                    this
                }
            }
            class T_ extends hd {
                constructor(t) {
                    super(t),
                    this.name = "StereoEffect",
                    this.input = new pd({
                        context: this.context
                    }),
                    this.input.channelCount = 2,
                    this.input.channelCountMode = "explicit",
                    this._dryWet = this.output = new c_({
                        context: this.context,
                        fade: t.wet
                    }),
                    this.wet = this._dryWet.fade,
                    this._split = new w_({
                        context: this.context,
                        channels: 2
                    }),
                    this._merge = new b_({
                        context: this.context,
                        channels: 2
                    }),
                    this.input.connect(this._split),
                    this.input.connect(this._dryWet.a),
                    this._merge.connect(this._dryWet.b),
                    Np(this, ["wet"])
                }
                connectEffectLeft(...t) {
                    this._split.connect(t[0], 0, 0),
                    cd(...t),
                    ld(t[t.length - 1], this._merge, 0, 0)
                }
                connectEffectRight(...t) {
                    this._split.connect(t[0], 1, 0),
                    cd(...t),
                    ld(t[t.length - 1], this._merge, 0, 1)
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        wet: 1
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._dryWet.dispose(),
                    this._split.dispose(),
                    this._merge.dispose(),
                    this
                }
            }
            class S_ extends T_ {
                constructor(t) {
                    super(t),
                    this.feedback = new _d({
                        context: this.context,
                        value: t.feedback,
                        units: "normalRange"
                    }),
                    this._feedbackL = new pd({
                        context: this.context
                    }),
                    this._feedbackR = new pd({
                        context: this.context
                    }),
                    this._feedbackSplit = new w_({
                        context: this.context,
                        channels: 2
                    }),
                    this._feedbackMerge = new b_({
                        context: this.context,
                        channels: 2
                    }),
                    this._merge.connect(this._feedbackSplit),
                    this._feedbackMerge.connect(this._split),
                    this._feedbackSplit.connect(this._feedbackL, 0, 0),
                    this._feedbackL.connect(this._feedbackMerge, 0, 0),
                    this._feedbackSplit.connect(this._feedbackR, 1, 0),
                    this._feedbackR.connect(this._feedbackMerge, 0, 1),
                    this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain),
                    Np(this, ["feedback"])
                }
                static getDefaults() {
                    return Object.assign(T_.getDefaults(), {
                        feedback: .5
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.feedback.dispose(),
                    this._feedbackL.dispose(),
                    this._feedbackR.dispose(),
                    this._feedbackSplit.dispose(),
                    this._feedbackMerge.dispose(),
                    this
                }
            }
            class k_ extends S_ {
                constructor() {
                    super(yp(k_.getDefaults(), arguments, ["frequency", "delayTime", "depth"])),
                    this.name = "Chorus";
                    var t = yp(k_.getDefaults(), arguments, ["frequency", "delayTime", "depth"]);
                    this._depth = t.depth,
                    this._delayTime = t.delayTime / 1e3,
                    this._lfoL = new rf({
                        context: this.context,
                        frequency: t.frequency,
                        min: 0,
                        max: 1
                    }),
                    this._lfoR = new rf({
                        context: this.context,
                        frequency: t.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }),
                    this._delayNodeL = new wd({
                        context: this.context
                    }),
                    this._delayNodeR = new wd({
                        context: this.context
                    }),
                    this.frequency = this._lfoL.frequency,
                    Np(this, ["frequency"]),
                    this._lfoL.frequency.connect(this._lfoR.frequency),
                    this.connectEffectLeft(this._delayNodeL),
                    this.connectEffectRight(this._delayNodeR),
                    this._lfoL.connect(this._delayNodeL.delayTime),
                    this._lfoR.connect(this._delayNodeR.delayTime),
                    this.depth = this._depth,
                    this.type = t.type,
                    this.spread = t.spread
                }
                static getDefaults() {
                    return Object.assign(S_.getDefaults(), {
                        frequency: 1.5,
                        delayTime: 3.5,
                        depth: .7,
                        type: "sine",
                        spread: 180,
                        feedback: 0,
                        wet: .5
                    })
                }
                get depth() {
                    return this._depth
                }
                set depth(t) {
                    this._depth = t;
                    t = this._delayTime * t;
                    this._lfoL.min = Math.max(this._delayTime - t, 0),
                    this._lfoL.max = this._delayTime + t,
                    this._lfoR.min = Math.max(this._delayTime - t, 0),
                    this._lfoR.max = this._delayTime + t
                }
                get delayTime() {
                    return 1e3 * this._delayTime
                }
                set delayTime(t) {
                    this._delayTime = t / 1e3,
                    this.depth = this._depth
                }
                get type() {
                    return this._lfoL.type
                }
                set type(t) {
                    this._lfoL.type = t,
                    this._lfoR.type = t
                }
                get spread() {
                    return this._lfoR.phase - this._lfoL.phase
                }
                set spread(t) {
                    this._lfoL.phase = 90 - t / 2,
                    this._lfoR.phase = t / 2 + 90
                }
                start(t) {
                    return this._lfoL.start(t),
                    this._lfoR.start(t),
                    this
                }
                stop(t) {
                    return this._lfoL.stop(t),
                    this._lfoR.stop(t),
                    this
                }
                sync() {
                    return this._lfoL.sync(),
                    this._lfoR.sync(),
                    this
                }
                unsync() {
                    return this._lfoL.unsync(),
                    this._lfoR.unsync(),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._lfoL.dispose(),
                    this._lfoR.dispose(),
                    this._delayNodeL.dispose(),
                    this._delayNodeR.dispose(),
                    this.frequency.dispose(),
                    this
                }
            }
            class C_ extends l_ {
                constructor() {
                    super(yp(C_.getDefaults(), arguments, ["distortion"])),
                    this.name = "Distortion";
                    var t = yp(C_.getDefaults(), arguments, ["distortion"]);
                    this._shaper = new Gd({
                        context: this.context,
                        length: 4096
                    }),
                    this._distortion = t.distortion,
                    this.connectEffect(this._shaper),
                    this.distortion = t.distortion,
                    this.oversample = t.oversample
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        distortion: .4,
                        oversample: "none"
                    })
                }
                get distortion() {
                    return this._distortion
                }
                set distortion(t) {
                    const e = 100 * (this._distortion = t)
                      , s = Math.PI / 180;
                    this._shaper.setMap(t=>Math.abs(t) < .001 ? 0 : (3 + e) * t * 20 * s / (Math.PI + e * Math.abs(t)))
                }
                get oversample() {
                    return this._shaper.oversample
                }
                set oversample(t) {
                    this._shaper.oversample = t
                }
                dispose() {
                    return super.dispose(),
                    this._shaper.dispose(),
                    this
                }
            }
            class A_ extends l_ {
                constructor(t) {
                    super(t),
                    this.name = "FeedbackEffect",
                    this._feedbackGain = new pd({
                        context: this.context,
                        gain: t.feedback,
                        units: "normalRange"
                    }),
                    this.feedback = this._feedbackGain.gain,
                    Np(this, "feedback"),
                    this.effectReturn.chain(this._feedbackGain, this.effectSend)
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        feedback: .125
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._feedbackGain.dispose(),
                    this.feedback.dispose(),
                    this
                }
            }
            class D_ extends A_ {
                constructor() {
                    super(yp(D_.getDefaults(), arguments, ["delayTime", "feedback"])),
                    this.name = "FeedbackDelay";
                    var t = yp(D_.getDefaults(), arguments, ["delayTime", "feedback"]);
                    this._delayNode = new wd({
                        context: this.context,
                        delayTime: t.delayTime,
                        maxDelay: t.maxDelay
                    }),
                    this.delayTime = this._delayNode.delayTime,
                    this.connectEffect(this._delayNode),
                    Np(this, "delayTime")
                }
                static getDefaults() {
                    return Object.assign(A_.getDefaults(), {
                        delayTime: .25,
                        maxDelay: 1
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._delayNode.dispose(),
                    this.delayTime.dispose(),
                    this
                }
            }
            class O_ extends hd {
                constructor(t) {
                    super(t),
                    this.name = "PhaseShiftAllpass",
                    this.input = new pd({
                        context: this.context
                    }),
                    this.output = new pd({
                        context: this.context
                    }),
                    this.offset90 = new pd({
                        context: this.context
                    }),
                    this._bank0 = this._createAllPassFilterBank([.6923878, .9360654322959, .988229522686, .9987488452737]),
                    this._bank1 = this._createAllPassFilterBank([.4021921162426, .856171088242, .9722909545651, .9952884791278]),
                    this._oneSampleDelay = this.context.createIIRFilter([0, 1], [1, 0]),
                    cd(this.input, ...this._bank0, this._oneSampleDelay, this.output),
                    cd(this.input, ...this._bank1, this.offset90)
                }
                _createAllPassFilterBank(t) {
                    return t.map(t=>{
                        t = [[t * t, 0, -1], [1, 0, -t * t]];
                        return this.context.createIIRFilter(t[0], t[1])
                    }
                    )
                }
                dispose() {
                    return super.dispose(),
                    this.input.dispose(),
                    this.output.dispose(),
                    this.offset90.dispose(),
                    this._bank0.forEach(t=>t.disconnect()),
                    this._bank1.forEach(t=>t.disconnect()),
                    this._oneSampleDelay.disconnect(),
                    this
                }
            }
            class M_ extends l_ {
                constructor() {
                    super(yp(M_.getDefaults(), arguments, ["frequency"])),
                    this.name = "FrequencyShifter";
                    var t = yp(M_.getDefaults(), arguments, ["frequency"]);
                    this.frequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: t.frequency,
                        minValue: -this.context.sampleRate / 2,
                        maxValue: this.context.sampleRate / 2
                    }),
                    this._sine = new Wd({
                        context: this.context,
                        type: "sine"
                    }),
                    this._cosine = new Bd({
                        context: this.context,
                        phase: -90,
                        type: "sine"
                    }),
                    this._sineMultiply = new Zd({
                        context: this.context
                    }),
                    this._cosineMultiply = new Zd({
                        context: this.context
                    }),
                    this._negate = new df({
                        context: this.context
                    }),
                    this._add = new ef({
                        context: this.context
                    }),
                    this._phaseShifter = new O_({
                        context: this.context
                    }),
                    this.effectSend.connect(this._phaseShifter),
                    this.frequency.fan(this._sine.frequency, this._cosine.frequency),
                    this._phaseShifter.offset90.connect(this._cosineMultiply),
                    this._cosine.connect(this._cosineMultiply.factor),
                    this._phaseShifter.connect(this._sineMultiply),
                    this._sine.connect(this._sineMultiply.factor),
                    this._sineMultiply.connect(this._negate),
                    this._cosineMultiply.connect(this._add),
                    this._negate.connect(this._add.addend),
                    this._add.connect(this.effectReturn);
                    t = this.immediate();
                    this._sine.start(t),
                    this._cosine.start(t)
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        frequency: 0
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.frequency.dispose(),
                    this._add.dispose(),
                    this._cosine.dispose(),
                    this._cosineMultiply.dispose(),
                    this._negate.dispose(),
                    this._phaseShifter.dispose(),
                    this._sine.dispose(),
                    this._sineMultiply.dispose(),
                    this
                }
            }
            const E_ = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100]
              , R_ = [225, 556, 441, 341];
            class q_ extends T_ {
                constructor() {
                    super(yp(q_.getDefaults(), arguments, ["roomSize", "dampening"])),
                    this.name = "Freeverb",
                    this._combFilters = [],
                    this._allpassFiltersL = [],
                    this._allpassFiltersR = [];
                    const s = yp(q_.getDefaults(), arguments, ["roomSize", "dampening"]);
                    this.roomSize = new _d({
                        context: this.context,
                        value: s.roomSize,
                        units: "normalRange"
                    }),
                    this._allpassFiltersL = R_.map(t=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass",
                        e.frequency.value = t,
                        e
                    }
                    ),
                    this._allpassFiltersR = R_.map(t=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass",
                        e.frequency.value = t,
                        e
                    }
                    ),
                    this._combFilters = E_.map((t,e)=>{
                        t = new Gf({
                            context: this.context,
                            dampening: s.dampening,
                            delayTime: t
                        });
                        return e < E_.length / 2 ? this.connectEffectLeft(t, ...this._allpassFiltersL) : this.connectEffectRight(t, ...this._allpassFiltersR),
                        this.roomSize.connect(t.resonance),
                        t
                    }
                    ),
                    Np(this, ["roomSize"])
                }
                static getDefaults() {
                    return Object.assign(T_.getDefaults(), {
                        roomSize: .7,
                        dampening: 3e3
                    })
                }
                get dampening() {
                    return this._combFilters[0].dampening
                }
                set dampening(e) {
                    this._combFilters.forEach(t=>t.dampening = e)
                }
                dispose() {
                    return super.dispose(),
                    this._allpassFiltersL.forEach(t=>t.disconnect()),
                    this._allpassFiltersR.forEach(t=>t.disconnect()),
                    this._combFilters.forEach(t=>t.dispose()),
                    this.roomSize.dispose(),
                    this
                }
            }
            const F_ = [.06748, .06404, .08212, .09004]
              , I_ = [.773, .802, .753, .733]
              , V_ = [347, 113, 37];
            class N_ extends T_ {
                constructor() {
                    super(yp(N_.getDefaults(), arguments, ["roomSize"])),
                    this.name = "JCReverb",
                    this._allpassFilters = [],
                    this._feedbackCombFilters = [];
                    var t = yp(N_.getDefaults(), arguments, ["roomSize"]);
                    this.roomSize = new _d({
                        context: this.context,
                        value: t.roomSize,
                        units: "normalRange"
                    }),
                    this._scaleRoomSize = new sf({
                        context: this.context,
                        min: -.733,
                        max: .197
                    }),
                    this._allpassFilters = V_.map(t=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass",
                        e.frequency.value = t,
                        e
                    }
                    ),
                    this._feedbackCombFilters = F_.map((t,e)=>{
                        const s = new Bf({
                            context: this.context,
                            delayTime: t
                        });
                        return this._scaleRoomSize.connect(s.resonance),
                        s.resonance.value = I_[e],
                        e < F_.length / 2 ? this.connectEffectLeft(...this._allpassFilters, s) : this.connectEffectRight(...this._allpassFilters, s),
                        s
                    }
                    ),
                    this.roomSize.connect(this._scaleRoomSize),
                    Np(this, ["roomSize"])
                }
                static getDefaults() {
                    return Object.assign(T_.getDefaults(), {
                        roomSize: .5
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._allpassFilters.forEach(t=>t.disconnect()),
                    this._feedbackCombFilters.forEach(t=>t.dispose()),
                    this.roomSize.dispose(),
                    this._scaleRoomSize.dispose(),
                    this
                }
            }
            class P_ extends S_ {
                constructor(t) {
                    super(t),
                    this._feedbackL.disconnect(),
                    this._feedbackL.connect(this._feedbackMerge, 0, 1),
                    this._feedbackR.disconnect(),
                    this._feedbackR.connect(this._feedbackMerge, 0, 0),
                    Np(this, ["feedback"])
                }
            }
            class j_ extends P_ {
                constructor() {
                    super(yp(j_.getDefaults(), arguments, ["delayTime", "feedback"])),
                    this.name = "PingPongDelay";
                    var t = yp(j_.getDefaults(), arguments, ["delayTime", "feedback"]);
                    this._leftDelay = new wd({
                        context: this.context,
                        maxDelay: t.maxDelay
                    }),
                    this._rightDelay = new wd({
                        context: this.context,
                        maxDelay: t.maxDelay
                    }),
                    this._rightPreDelay = new wd({
                        context: this.context,
                        maxDelay: t.maxDelay
                    }),
                    this.delayTime = new _d({
                        context: this.context,
                        units: "time",
                        value: t.delayTime
                    }),
                    this.connectEffectLeft(this._leftDelay),
                    this.connectEffectRight(this._rightPreDelay, this._rightDelay),
                    this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime),
                    this._feedbackL.disconnect(),
                    this._feedbackL.connect(this._rightDelay),
                    Np(this, ["delayTime"])
                }
                static getDefaults() {
                    return Object.assign(P_.getDefaults(), {
                        delayTime: .25,
                        maxDelay: 1
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._leftDelay.dispose(),
                    this._rightDelay.dispose(),
                    this._rightPreDelay.dispose(),
                    this.delayTime.dispose(),
                    this
                }
            }
            class L_ extends A_ {
                constructor() {
                    super(yp(L_.getDefaults(), arguments, ["pitch"])),
                    this.name = "PitchShift";
                    var t = yp(L_.getDefaults(), arguments, ["pitch"]);
                    this._frequency = new _d({
                        context: this.context
                    }),
                    this._delayA = new wd({
                        maxDelay: 1,
                        context: this.context
                    }),
                    this._lfoA = new rf({
                        context: this.context,
                        min: 0,
                        max: .1,
                        type: "sawtooth"
                    }).connect(this._delayA.delayTime),
                    this._delayB = new wd({
                        maxDelay: 1,
                        context: this.context
                    }),
                    this._lfoB = new rf({
                        context: this.context,
                        min: 0,
                        max: .1,
                        type: "sawtooth",
                        phase: 180
                    }).connect(this._delayB.delayTime),
                    this._crossFade = new c_({
                        context: this.context
                    }),
                    this._crossFadeLFO = new rf({
                        context: this.context,
                        min: 0,
                        max: 1,
                        type: "triangle",
                        phase: 90
                    }).connect(this._crossFade.fade),
                    this._feedbackDelay = new wd({
                        delayTime: t.delayTime,
                        context: this.context
                    }),
                    this.delayTime = this._feedbackDelay.delayTime,
                    Np(this, "delayTime"),
                    this._pitch = t.pitch,
                    this._windowSize = t.windowSize,
                    this._delayA.connect(this._crossFade.a),
                    this._delayB.connect(this._crossFade.b),
                    this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency),
                    this.effectSend.fan(this._delayA, this._delayB),
                    this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                    t = this.now();
                    this._lfoA.start(t),
                    this._lfoB.start(t),
                    this._crossFadeLFO.start(t),
                    this.windowSize = this._windowSize
                }
                static getDefaults() {
                    return Object.assign(A_.getDefaults(), {
                        pitch: 0,
                        windowSize: .1,
                        delayTime: 0,
                        feedback: 0
                    })
                }
                get pitch() {
                    return this._pitch
                }
                set pitch(t) {
                    this._pitch = t;
                    let e = 0;
                    e = t < 0 ? (this._lfoA.min = 0,
                    this._lfoA.max = this._windowSize,
                    this._lfoB.min = 0,
                    this._lfoB.max = this._windowSize,
                    Xp(t - 1) + 1) : (this._lfoA.min = this._windowSize,
                    this._lfoA.max = 0,
                    this._lfoB.min = this._windowSize,
                    this._lfoB.max = 0,
                    Xp(t) - 1),
                    this._frequency.value = e * (1.2 / this._windowSize)
                }
                get windowSize() {
                    return this._windowSize
                }
                set windowSize(t) {
                    this._windowSize = this.toSeconds(t),
                    this.pitch = this._pitch
                }
                dispose() {
                    return super.dispose(),
                    this._frequency.dispose(),
                    this._delayA.dispose(),
                    this._delayB.dispose(),
                    this._lfoA.dispose(),
                    this._lfoB.dispose(),
                    this._crossFade.dispose(),
                    this._crossFadeLFO.dispose(),
                    this._feedbackDelay.dispose(),
                    this
                }
            }
            class z_ extends T_ {
                constructor() {
                    super(yp(z_.getDefaults(), arguments, ["frequency", "octaves", "baseFrequency"])),
                    this.name = "Phaser";
                    var t = yp(z_.getDefaults(), arguments, ["frequency", "octaves", "baseFrequency"]);
                    this._lfoL = new rf({
                        context: this.context,
                        frequency: t.frequency,
                        min: 0,
                        max: 1
                    }),
                    this._lfoR = new rf({
                        context: this.context,
                        frequency: t.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }),
                    this._baseFrequency = this.toFrequency(t.baseFrequency),
                    this._octaves = t.octaves,
                    this.Q = new _d({
                        context: this.context,
                        value: t.Q,
                        units: "positive"
                    }),
                    this._filtersL = this._makeFilters(t.stages, this._lfoL),
                    this._filtersR = this._makeFilters(t.stages, this._lfoR),
                    this.frequency = this._lfoL.frequency,
                    this.frequency.value = t.frequency,
                    this.connectEffectLeft(...this._filtersL),
                    this.connectEffectRight(...this._filtersR),
                    this._lfoL.frequency.connect(this._lfoR.frequency),
                    this.baseFrequency = t.baseFrequency,
                    this.octaves = t.octaves,
                    this._lfoL.start(),
                    this._lfoR.start(),
                    Np(this, ["frequency", "Q"])
                }
                static getDefaults() {
                    return Object.assign(T_.getDefaults(), {
                        frequency: .5,
                        octaves: 3,
                        stages: 10,
                        Q: 10,
                        baseFrequency: 350
                    })
                }
                _makeFilters(e, s) {
                    const n = [];
                    for (let t = 0; t < e; t++) {
                        const e = this.context.createBiquadFilter();
                        e.type = "allpass",
                        this.Q.connect(e.Q),
                        s.connect(e.frequency),
                        n.push(e)
                    }
                    return n
                }
                get octaves() {
                    return this._octaves
                }
                set octaves(t) {
                    this._octaves = t;
                    t = this._baseFrequency * Math.pow(2, t);
                    this._lfoL.max = t,
                    this._lfoR.max = t
                }
                get baseFrequency() {
                    return this._baseFrequency
                }
                set baseFrequency(t) {
                    this._baseFrequency = this.toFrequency(t),
                    this._lfoL.min = this._baseFrequency,
                    this._lfoR.min = this._baseFrequency,
                    this.octaves = this._octaves
                }
                dispose() {
                    return super.dispose(),
                    this.Q.dispose(),
                    this._lfoL.dispose(),
                    this._lfoR.dispose(),
                    this._filtersL.forEach(t=>t.disconnect()),
                    this._filtersR.forEach(t=>t.disconnect()),
                    this.frequency.dispose(),
                    this
                }
            }
            class W_ extends l_ {
                constructor() {
                    super(yp(W_.getDefaults(), arguments, ["decay"])),
                    this.name = "Reverb",
                    this._convolver = this.context.createConvolver(),
                    this.ready = Promise.resolve();
                    var t = yp(W_.getDefaults(), arguments, ["decay"]);
                    this._decay = t.decay,
                    this._preDelay = t.preDelay,
                    this.generate(),
                    this.connectEffect(this._convolver)
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        decay: 1.5,
                        preDelay: .01
                    })
                }
                get decay() {
                    return this._decay
                }
                set decay(t) {
                    Ku(t = this.toSeconds(t), .001),
                    this._decay = t,
                    this.generate()
                }
                get preDelay() {
                    return this._preDelay
                }
                set preDelay(t) {
                    Ku(t = this.toSeconds(t), 0),
                    this._preDelay = t,
                    this.generate()
                }
                generate() {
                    return up(this, void 0, void 0, function*() {
                        const t = this.ready
                          , e = new zp(2,this._decay + this._preDelay,this.context.sampleRate)
                          , s = new Vd({
                            context: e
                        })
                          , n = new Vd({
                            context: e
                        })
                          , i = new b_({
                            context: e
                        });
                        s.connect(i, 0, 0),
                        n.connect(i, 0, 1);
                        const r = new pd({
                            context: e
                        }).toDestination();
                        i.connect(r),
                        s.start(0),
                        n.start(0),
                        r.gain.setValueAtTime(0, 0),
                        r.gain.setValueAtTime(1, this._preDelay),
                        r.gain.exponentialApproachValueAtTime(0, this._preDelay, this.decay);
                        const o = e.render();
                        return this.ready = o.then(jp),
                        yield t,
                        this._convolver.buffer = (yield o).get(),
                        this
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._convolver.disconnect(),
                    this
                }
            }
            class B_ extends hd {
                constructor() {
                    super(yp(B_.getDefaults(), arguments)),
                    this.name = "MidSideSplit",
                    this._split = this.input = new w_({
                        channels: 2,
                        context: this.context
                    }),
                    this._midAdd = new ef({
                        context: this.context
                    }),
                    this.mid = new Zd({
                        context: this.context,
                        value: Math.SQRT1_2
                    }),
                    this._sideSubtract = new ff({
                        context: this.context
                    }),
                    this.side = new Zd({
                        context: this.context,
                        value: Math.SQRT1_2
                    }),
                    this._split.connect(this._midAdd, 0),
                    this._split.connect(this._midAdd.addend, 1),
                    this._split.connect(this._sideSubtract, 0),
                    this._split.connect(this._sideSubtract.subtrahend, 1),
                    this._midAdd.connect(this.mid),
                    this._sideSubtract.connect(this.side)
                }
                dispose() {
                    return super.dispose(),
                    this.mid.dispose(),
                    this.side.dispose(),
                    this._midAdd.dispose(),
                    this._sideSubtract.dispose(),
                    this._split.dispose(),
                    this
                }
            }
            class U_ extends hd {
                constructor() {
                    super(yp(U_.getDefaults(), arguments)),
                    this.name = "MidSideMerge",
                    this.mid = new pd({
                        context: this.context
                    }),
                    this.side = new pd({
                        context: this.context
                    }),
                    this._left = new ef({
                        context: this.context
                    }),
                    this._leftMult = new Zd({
                        context: this.context,
                        value: Math.SQRT1_2
                    }),
                    this._right = new ff({
                        context: this.context
                    }),
                    this._rightMult = new Zd({
                        context: this.context,
                        value: Math.SQRT1_2
                    }),
                    this._merge = this.output = new b_({
                        context: this.context
                    }),
                    this.mid.fan(this._left),
                    this.side.connect(this._left.addend),
                    this.mid.connect(this._right),
                    this.side.connect(this._right.subtrahend),
                    this._left.connect(this._leftMult),
                    this._right.connect(this._rightMult),
                    this._leftMult.connect(this._merge, 0, 0),
                    this._rightMult.connect(this._merge, 0, 1)
                }
                dispose() {
                    return super.dispose(),
                    this.mid.dispose(),
                    this.side.dispose(),
                    this._leftMult.dispose(),
                    this._rightMult.dispose(),
                    this._left.dispose(),
                    this._right.dispose(),
                    this
                }
            }
            class G_ extends l_ {
                constructor(t) {
                    super(t),
                    this.name = "MidSideEffect",
                    this._midSideMerge = new U_({
                        context: this.context
                    }),
                    this._midSideSplit = new B_({
                        context: this.context
                    }),
                    this._midSend = this._midSideSplit.mid,
                    this._sideSend = this._midSideSplit.side,
                    this._midReturn = this._midSideMerge.mid,
                    this._sideReturn = this._midSideMerge.side,
                    this.effectSend.connect(this._midSideSplit),
                    this._midSideMerge.connect(this.effectReturn)
                }
                connectEffectMid(...t) {
                    this._midSend.chain(...t, this._midReturn)
                }
                connectEffectSide(...t) {
                    this._sideSend.chain(...t, this._sideReturn)
                }
                dispose() {
                    return super.dispose(),
                    this._midSideSplit.dispose(),
                    this._midSideMerge.dispose(),
                    this._midSend.dispose(),
                    this._sideSend.dispose(),
                    this._midReturn.dispose(),
                    this._sideReturn.dispose(),
                    this
                }
            }
            class Q_ extends G_ {
                constructor() {
                    super(yp(Q_.getDefaults(), arguments, ["width"])),
                    this.name = "StereoWidener";
                    var t = yp(Q_.getDefaults(), arguments, ["width"]);
                    this.width = new _d({
                        context: this.context,
                        value: t.width,
                        units: "normalRange"
                    }),
                    Np(this, ["width"]),
                    this._twoTimesWidthMid = new Zd({
                        context: this.context,
                        value: 2
                    }),
                    this._twoTimesWidthSide = new Zd({
                        context: this.context,
                        value: 2
                    }),
                    this._midMult = new Zd({
                        context: this.context
                    }),
                    this._twoTimesWidthMid.connect(this._midMult.factor),
                    this.connectEffectMid(this._midMult),
                    this._oneMinusWidth = new ff({
                        context: this.context
                    }),
                    this._oneMinusWidth.connect(this._twoTimesWidthMid),
                    ld(this.context.getConstant(1), this._oneMinusWidth),
                    this.width.connect(this._oneMinusWidth.subtrahend),
                    this._sideMult = new Zd({
                        context: this.context
                    }),
                    this.width.connect(this._twoTimesWidthSide),
                    this._twoTimesWidthSide.connect(this._sideMult.factor),
                    this.connectEffectSide(this._sideMult)
                }
                static getDefaults() {
                    return Object.assign(G_.getDefaults(), {
                        width: .5
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.width.dispose(),
                    this._midMult.dispose(),
                    this._sideMult.dispose(),
                    this._twoTimesWidthMid.dispose(),
                    this._twoTimesWidthSide.dispose(),
                    this._oneMinusWidth.dispose(),
                    this
                }
            }
            class Z_ extends T_ {
                constructor() {
                    super(yp(Z_.getDefaults(), arguments, ["frequency", "depth"])),
                    this.name = "Tremolo";
                    var t = yp(Z_.getDefaults(), arguments, ["frequency", "depth"]);
                    this._lfoL = new rf({
                        context: this.context,
                        type: t.type,
                        min: 1,
                        max: 0
                    }),
                    this._lfoR = new rf({
                        context: this.context,
                        type: t.type,
                        min: 1,
                        max: 0
                    }),
                    this._amplitudeL = new pd({
                        context: this.context
                    }),
                    this._amplitudeR = new pd({
                        context: this.context
                    }),
                    this.frequency = new _d({
                        context: this.context,
                        value: t.frequency,
                        units: "frequency"
                    }),
                    this.depth = new _d({
                        context: this.context,
                        value: t.depth,
                        units: "normalRange"
                    }),
                    Np(this, ["frequency", "depth"]),
                    this.connectEffectLeft(this._amplitudeL),
                    this.connectEffectRight(this._amplitudeR),
                    this._lfoL.connect(this._amplitudeL.gain),
                    this._lfoR.connect(this._amplitudeR.gain),
                    this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency),
                    this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude),
                    this.spread = t.spread
                }
                static getDefaults() {
                    return Object.assign(T_.getDefaults(), {
                        frequency: 10,
                        type: "sine",
                        depth: .5,
                        spread: 180
                    })
                }
                start(t) {
                    return this._lfoL.start(t),
                    this._lfoR.start(t),
                    this
                }
                stop(t) {
                    return this._lfoL.stop(t),
                    this._lfoR.stop(t),
                    this
                }
                sync() {
                    return this._lfoL.sync(),
                    this._lfoR.sync(),
                    this.context.transport.syncSignal(this.frequency),
                    this
                }
                unsync() {
                    return this._lfoL.unsync(),
                    this._lfoR.unsync(),
                    this.context.transport.unsyncSignal(this.frequency),
                    this
                }
                get type() {
                    return this._lfoL.type
                }
                set type(t) {
                    this._lfoL.type = t,
                    this._lfoR.type = t
                }
                get spread() {
                    return this._lfoR.phase - this._lfoL.phase
                }
                set spread(t) {
                    this._lfoL.phase = 90 - t / 2,
                    this._lfoR.phase = t / 2 + 90
                }
                dispose() {
                    return super.dispose(),
                    this._lfoL.dispose(),
                    this._lfoR.dispose(),
                    this._amplitudeL.dispose(),
                    this._amplitudeR.dispose(),
                    this.frequency.dispose(),
                    this.depth.dispose(),
                    this
                }
            }
            class X_ extends l_ {
                constructor() {
                    super(yp(X_.getDefaults(), arguments, ["frequency", "depth"])),
                    this.name = "Vibrato";
                    var t = yp(X_.getDefaults(), arguments, ["frequency", "depth"]);
                    this._delayNode = new wd({
                        context: this.context,
                        delayTime: 0,
                        maxDelay: t.maxDelay
                    }),
                    this._lfo = new rf({
                        context: this.context,
                        type: t.type,
                        min: 0,
                        max: t.maxDelay,
                        frequency: t.frequency,
                        phase: -90
                    }).start().connect(this._delayNode.delayTime),
                    this.frequency = this._lfo.frequency,
                    this.depth = this._lfo.amplitude,
                    this.depth.value = t.depth,
                    Np(this, ["frequency", "depth"]),
                    this.effectSend.chain(this._delayNode, this.effectReturn)
                }
                static getDefaults() {
                    return Object.assign(l_.getDefaults(), {
                        maxDelay: .005,
                        frequency: 5,
                        depth: .1,
                        type: "sine"
                    })
                }
                get type() {
                    return this._lfo.type
                }
                set type(t) {
                    this._lfo.type = t
                }
                dispose() {
                    return super.dispose(),
                    this._delayNode.dispose(),
                    this._lfo.dispose(),
                    this.frequency.dispose(),
                    this.depth.dispose(),
                    this
                }
            }
            class Y_ extends hd {
                constructor() {
                    super(yp(Y_.getDefaults(), arguments, ["type", "size"])),
                    this.name = "Analyser",
                    this._analysers = [],
                    this._buffers = [];
                    var e = yp(Y_.getDefaults(), arguments, ["type", "size"]);
                    this.input = this.output = this._gain = new pd({
                        context: this.context
                    }),
                    this._split = new w_({
                        context: this.context,
                        channels: e.channels
                    }),
                    this.input.connect(this._split),
                    Ku(e.channels, 1);
                    for (let t = 0; t < e.channels; t++)
                        this._analysers[t] = this.context.createAnalyser(),
                        this._split.connect(this._analysers[t], t, 0);
                    this.size = e.size,
                    this.type = e.type,
                    this.smoothing = e.smoothing
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        size: 1024,
                        smoothing: .8,
                        type: "fft",
                        channels: 1
                    })
                }
                getValue() {
                    return this._analysers.forEach((t,e)=>{
                        e = this._buffers[e];
                        "fft" === this._type ? t.getFloatFrequencyData(e) : "waveform" === this._type && t.getFloatTimeDomainData(e)
                    }
                    ),
                    1 === this.channels ? this._buffers[0] : this._buffers
                }
                get size() {
                    return this._analysers[0].frequencyBinCount
                }
                set size(s) {
                    this._analysers.forEach((t,e)=>{
                        t.fftSize = 2 * s,
                        this._buffers[e] = new Float32Array(s)
                    }
                    )
                }
                get channels() {
                    return this._analysers.length
                }
                get type() {
                    return this._type
                }
                set type(t) {
                    Ju("waveform" === t || "fft" === t, `Analyser: invalid type: ${t}`),
                    this._type = t
                }
                get smoothing() {
                    return this._analysers[0].smoothingTimeConstant
                }
                set smoothing(e) {
                    this._analysers.forEach(t=>t.smoothingTimeConstant = e)
                }
                dispose() {
                    return super.dispose(),
                    this._analysers.forEach(t=>t.disconnect()),
                    this._split.dispose(),
                    this._gain.dispose(),
                    this
                }
            }
            class $_ extends hd {
                constructor() {
                    super(yp($_.getDefaults(), arguments)),
                    this.name = "MeterBase",
                    this.input = this.output = this._analyser = new Y_({
                        context: this.context,
                        size: 256,
                        type: "waveform"
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._analyser.dispose(),
                    this
                }
            }
            class H_ extends $_ {
                constructor() {
                    super(yp(H_.getDefaults(), arguments, ["smoothing"])),
                    this.name = "Meter",
                    this._rms = 0;
                    var t = yp(H_.getDefaults(), arguments, ["smoothing"]);
                    this.input = this.output = this._analyser = new Y_({
                        context: this.context,
                        size: 256,
                        type: "waveform",
                        channels: t.channelCount
                    }),
                    this.smoothing = t.smoothing,
                    this.normalRange = t.normalRange
                }
                static getDefaults() {
                    return Object.assign($_.getDefaults(), {
                        smoothing: .8,
                        normalRange: !1,
                        channelCount: 1
                    })
                }
                getLevel() {
                    return ap("'getLevel' has been changed to 'getValue'"),
                    this.getValue()
                }
                getValue() {
                    const t = this._analyser.getValue()
                      , e = (1 === this.channels ? [t] : t).map(t=>{
                        var e = t.reduce((t,e)=>t + e * e, 0)
                          , t = Math.sqrt(e / t.length);
                        return this._rms = Math.max(t, this._rms * this.smoothing),
                        this.normalRange ? this._rms : Zp(this._rms)
                    }
                    );
                    return 1 === this.channels ? e[0] : e
                }
                get channels() {
                    return this._analyser.channels
                }
                dispose() {
                    return super.dispose(),
                    this._analyser.dispose(),
                    this
                }
            }
            class J_ extends $_ {
                constructor() {
                    super(yp(J_.getDefaults(), arguments, ["size"])),
                    this.name = "FFT";
                    var t = yp(J_.getDefaults(), arguments, ["size"]);
                    this.normalRange = t.normalRange,
                    this._analyser.type = "fft",
                    this.size = t.size
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        normalRange: !1,
                        size: 1024,
                        smoothing: .8
                    })
                }
                getValue() {
                    return this._analyser.getValue().map(t=>this.normalRange ? Qp(t) : t)
                }
                get size() {
                    return this._analyser.size
                }
                set size(t) {
                    this._analyser.size = t
                }
                get smoothing() {
                    return this._analyser.smoothing
                }
                set smoothing(t) {
                    this._analyser.smoothing = t
                }
                getFrequencyOfIndex(t) {
                    return Ju(0 <= t && t < this.size, `index must be greater than or equal to 0 and less than ${this.size}`),
                    t * this.context.sampleRate / (2 * this.size)
                }
            }
            class K_ extends $_ {
                constructor() {
                    super(yp(K_.getDefaults(), arguments)),
                    this.name = "DCMeter",
                    this._analyser.type = "waveform",
                    this._analyser.size = 256
                }
                getValue() {
                    return this._analyser.getValue()[0]
                }
            }
            class tm extends $_ {
                constructor() {
                    super(yp(tm.getDefaults(), arguments, ["size"])),
                    this.name = "Waveform";
                    var t = yp(tm.getDefaults(), arguments, ["size"]);
                    this._analyser.type = "waveform",
                    this.size = t.size
                }
                static getDefaults() {
                    return Object.assign($_.getDefaults(), {
                        size: 1024
                    })
                }
                getValue() {
                    return this._analyser.getValue()
                }
                get size() {
                    return this._analyser.size
                }
                set size(t) {
                    this._analyser.size = t
                }
            }
            class em extends hd {
                constructor() {
                    super(yp(em.getDefaults(), arguments, ["solo"])),
                    this.name = "Solo";
                    var t = yp(em.getDefaults(), arguments, ["solo"]);
                    this.input = this.output = new pd({
                        context: this.context
                    }),
                    em._allSolos.has(this.context) || em._allSolos.set(this.context, new Set),
                    em._allSolos.get(this.context).add(this),
                    this.solo = t.solo
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        solo: !1
                    })
                }
                get solo() {
                    return this._isSoloed()
                }
                set solo(t) {
                    t ? this._addSolo() : this._removeSolo(),
                    em._allSolos.get(this.context).forEach(t=>t._updateSolo())
                }
                get muted() {
                    return 0 === this.input.gain.value
                }
                _addSolo() {
                    em._soloed.has(this.context) || em._soloed.set(this.context, new Set),
                    em._soloed.get(this.context).add(this)
                }
                _removeSolo() {
                    em._soloed.has(this.context) && em._soloed.get(this.context).delete(this)
                }
                _isSoloed() {
                    return em._soloed.has(this.context) && em._soloed.get(this.context).has(this)
                }
                _noSolos() {
                    return !em._soloed.has(this.context) || em._soloed.has(this.context) && 0 === em._soloed.get(this.context).size
                }
                _updateSolo() {
                    this._isSoloed() || this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0
                }
                dispose() {
                    return super.dispose(),
                    em._allSolos.get(this.context).delete(this),
                    this._removeSolo(),
                    this
                }
            }
            em._allSolos = new Map,
            em._soloed = new Map;
            class sm extends hd {
                constructor() {
                    super(yp(sm.getDefaults(), arguments, ["pan", "volume"])),
                    this.name = "PanVol";
                    var t = yp(sm.getDefaults(), arguments, ["pan", "volume"]);
                    this._panner = this.input = new d_({
                        context: this.context,
                        pan: t.pan,
                        channelCount: t.channelCount
                    }),
                    this.pan = this._panner.pan,
                    this._volume = this.output = new Dd({
                        context: this.context,
                        volume: t.volume
                    }),
                    this.volume = this._volume.volume,
                    this._panner.connect(this._volume),
                    this.mute = t.mute,
                    Np(this, ["pan", "volume"])
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        mute: !1,
                        pan: 0,
                        volume: 0,
                        channelCount: 1
                    })
                }
                get mute() {
                    return this._volume.mute
                }
                set mute(t) {
                    this._volume.mute = t
                }
                dispose() {
                    return super.dispose(),
                    this._panner.dispose(),
                    this.pan.dispose(),
                    this._volume.dispose(),
                    this.volume.dispose(),
                    this
                }
            }
            class nm extends hd {
                constructor() {
                    super(yp(nm.getDefaults(), arguments, ["volume", "pan"])),
                    this.name = "Channel";
                    var t = yp(nm.getDefaults(), arguments, ["volume", "pan"]);
                    this._solo = this.input = new em({
                        solo: t.solo,
                        context: this.context
                    }),
                    this._panVol = this.output = new sm({
                        context: this.context,
                        pan: t.pan,
                        volume: t.volume,
                        mute: t.mute,
                        channelCount: t.channelCount
                    }),
                    this.pan = this._panVol.pan,
                    this.volume = this._panVol.volume,
                    this._solo.connect(this._panVol),
                    Np(this, ["pan", "volume"])
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        pan: 0,
                        volume: 0,
                        mute: !1,
                        solo: !1,
                        channelCount: 1
                    })
                }
                get solo() {
                    return this._solo.solo
                }
                set solo(t) {
                    this._solo.solo = t
                }
                get muted() {
                    return this._solo.muted || this.mute
                }
                get mute() {
                    return this._panVol.mute
                }
                set mute(t) {
                    this._panVol.mute = t
                }
                _getBus(t) {
                    return nm.buses.has(t) || nm.buses.set(t, new pd({
                        context: this.context
                    })),
                    nm.buses.get(t)
                }
                send(t, e=0) {
                    const s = this._getBus(t)
                      , n = new pd({
                        context: this.context,
                        units: "decibels",
                        gain: e
                    });
                    return this.connect(n),
                    n.connect(s),
                    n
                }
                receive(t) {
                    return this._getBus(t).connect(this),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this._panVol.dispose(),
                    this.pan.dispose(),
                    this.volume.dispose(),
                    this._solo.dispose(),
                    this
                }
            }
            nm.buses = new Map;
            class im extends hd {
                constructor() {
                    super(yp(im.getDefaults(), arguments)),
                    this.name = "Mono",
                    this.input = new pd({
                        context: this.context
                    }),
                    this._merge = this.output = new b_({
                        channels: 2,
                        context: this.context
                    }),
                    this.input.connect(this._merge, 0, 0),
                    this.input.connect(this._merge, 0, 1)
                }
                dispose() {
                    return super.dispose(),
                    this._merge.dispose(),
                    this.input.dispose(),
                    this
                }
            }
            class rm extends hd {
                constructor() {
                    super(yp(rm.getDefaults(), arguments, ["lowFrequency", "highFrequency"])),
                    this.name = "MultibandSplit",
                    this.input = new pd({
                        context: this.context
                    }),
                    this.output = void 0,
                    this.low = new Of({
                        context: this.context,
                        frequency: 0,
                        type: "lowpass"
                    }),
                    this._lowMidFilter = new Of({
                        context: this.context,
                        frequency: 0,
                        type: "highpass"
                    }),
                    this.mid = new Of({
                        context: this.context,
                        frequency: 0,
                        type: "lowpass"
                    }),
                    this.high = new Of({
                        context: this.context,
                        frequency: 0,
                        type: "highpass"
                    }),
                    this._internalChannels = [this.low, this.mid, this.high];
                    var t = yp(rm.getDefaults(), arguments, ["lowFrequency", "highFrequency"]);
                    this.lowFrequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: t.lowFrequency
                    }),
                    this.highFrequency = new _d({
                        context: this.context,
                        units: "frequency",
                        value: t.highFrequency
                    }),
                    this.Q = new _d({
                        context: this.context,
                        units: "positive",
                        value: t.Q
                    }),
                    this.input.fan(this.low, this.high),
                    this.input.chain(this._lowMidFilter, this.mid),
                    this.lowFrequency.fan(this.low.frequency, this._lowMidFilter.frequency),
                    this.highFrequency.fan(this.mid.frequency, this.high.frequency),
                    this.Q.connect(this.low.Q),
                    this.Q.connect(this._lowMidFilter.Q),
                    this.Q.connect(this.mid.Q),
                    this.Q.connect(this.high.Q),
                    Np(this, ["high", "mid", "low", "highFrequency", "lowFrequency"])
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        Q: 1,
                        highFrequency: 2500,
                        lowFrequency: 400
                    })
                }
                dispose() {
                    return super.dispose(),
                    Pp(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]),
                    this.low.dispose(),
                    this._lowMidFilter.dispose(),
                    this.mid.dispose(),
                    this.high.dispose(),
                    this.lowFrequency.dispose(),
                    this.highFrequency.dispose(),
                    this.Q.dispose(),
                    this
                }
            }
            class om extends hd {
                constructor() {
                    super(...arguments),
                    this.name = "Listener",
                    this.positionX = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.positionX
                    }),
                    this.positionY = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.positionY
                    }),
                    this.positionZ = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.positionZ
                    }),
                    this.forwardX = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardX
                    }),
                    this.forwardY = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardY
                    }),
                    this.forwardZ = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardZ
                    }),
                    this.upX = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.upX
                    }),
                    this.upY = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.upY
                    }),
                    this.upZ = new ad({
                        context: this.context,
                        param: this.context.rawContext.listener.upZ
                    })
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        positionX: 0,
                        positionY: 0,
                        positionZ: 0,
                        forwardX: 0,
                        forwardY: 0,
                        forwardZ: -1,
                        upX: 0,
                        upY: 1,
                        upZ: 0
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.positionX.dispose(),
                    this.positionY.dispose(),
                    this.positionZ.dispose(),
                    this.forwardX.dispose(),
                    this.forwardY.dispose(),
                    this.forwardZ.dispose(),
                    this.upX.dispose(),
                    this.upY.dispose(),
                    this.upZ.dispose(),
                    this
                }
            }
            Ep(t=>{
                t.listener = new om({
                    context: t
                })
            }
            ),
            qp(t=>{
                t.listener.dispose()
            }
            );
            class am extends hd {
                constructor() {
                    super(yp(am.getDefaults(), arguments, ["positionX", "positionY", "positionZ"])),
                    this.name = "Panner3D";
                    var t = yp(am.getDefaults(), arguments, ["positionX", "positionY", "positionZ"]);
                    this._panner = this.input = this.output = this.context.createPanner(),
                    this.panningModel = t.panningModel,
                    this.maxDistance = t.maxDistance,
                    this.distanceModel = t.distanceModel,
                    this.coneOuterGain = t.coneOuterGain,
                    this.coneOuterAngle = t.coneOuterAngle,
                    this.coneInnerAngle = t.coneInnerAngle,
                    this.refDistance = t.refDistance,
                    this.rolloffFactor = t.rolloffFactor,
                    this.positionX = new ad({
                        context: this.context,
                        param: this._panner.positionX,
                        value: t.positionX
                    }),
                    this.positionY = new ad({
                        context: this.context,
                        param: this._panner.positionY,
                        value: t.positionY
                    }),
                    this.positionZ = new ad({
                        context: this.context,
                        param: this._panner.positionZ,
                        value: t.positionZ
                    }),
                    this.orientationX = new ad({
                        context: this.context,
                        param: this._panner.orientationX,
                        value: t.orientationX
                    }),
                    this.orientationY = new ad({
                        context: this.context,
                        param: this._panner.orientationY,
                        value: t.orientationY
                    }),
                    this.orientationZ = new ad({
                        context: this.context,
                        param: this._panner.orientationZ,
                        value: t.orientationZ
                    })
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        coneInnerAngle: 360,
                        coneOuterAngle: 360,
                        coneOuterGain: 0,
                        distanceModel: "inverse",
                        maxDistance: 1e4,
                        orientationX: 0,
                        orientationY: 0,
                        orientationZ: 0,
                        panningModel: "equalpower",
                        positionX: 0,
                        positionY: 0,
                        positionZ: 0,
                        refDistance: 1,
                        rolloffFactor: 1
                    })
                }
                setPosition(t, e, s) {
                    return this.positionX.value = t,
                    this.positionY.value = e,
                    this.positionZ.value = s,
                    this
                }
                setOrientation(t, e, s) {
                    return this.orientationX.value = t,
                    this.orientationY.value = e,
                    this.orientationZ.value = s,
                    this
                }
                get panningModel() {
                    return this._panner.panningModel
                }
                set panningModel(t) {
                    this._panner.panningModel = t
                }
                get refDistance() {
                    return this._panner.refDistance
                }
                set refDistance(t) {
                    this._panner.refDistance = t
                }
                get rolloffFactor() {
                    return this._panner.rolloffFactor
                }
                set rolloffFactor(t) {
                    this._panner.rolloffFactor = t
                }
                get distanceModel() {
                    return this._panner.distanceModel
                }
                set distanceModel(t) {
                    this._panner.distanceModel = t
                }
                get coneInnerAngle() {
                    return this._panner.coneInnerAngle
                }
                set coneInnerAngle(t) {
                    this._panner.coneInnerAngle = t
                }
                get coneOuterAngle() {
                    return this._panner.coneOuterAngle
                }
                set coneOuterAngle(t) {
                    this._panner.coneOuterAngle = t
                }
                get coneOuterGain() {
                    return this._panner.coneOuterGain
                }
                set coneOuterGain(t) {
                    this._panner.coneOuterGain = t
                }
                get maxDistance() {
                    return this._panner.maxDistance
                }
                set maxDistance(t) {
                    this._panner.maxDistance = t
                }
                dispose() {
                    return super.dispose(),
                    this._panner.disconnect(),
                    this.orientationX.dispose(),
                    this.orientationY.dispose(),
                    this.orientationZ.dispose(),
                    this.positionX.dispose(),
                    this.positionY.dispose(),
                    this.positionZ.dispose(),
                    this
                }
            }
            class hm extends hd {
                constructor() {
                    super(yp(hm.getDefaults(), arguments)),
                    this.name = "Recorder";
                    var t = yp(hm.getDefaults(), arguments);
                    this.input = new pd({
                        context: this.context
                    }),
                    Ju(hm.supported, "Media Recorder API is not available"),
                    this._stream = this.context.createMediaStreamDestination(),
                    this.input.connect(this._stream),
                    this._recorder = new MediaRecorder(this._stream.stream,{
                        mimeType: t.mimeType
                    })
                }
                static getDefaults() {
                    return hd.getDefaults()
                }
                get mimeType() {
                    return this._recorder.mimeType
                }
                static get supported() {
                    return null !== hp && Reflect.has(hp, "MediaRecorder")
                }
                get state() {
                    return "inactive" === this._recorder.state ? "stopped" : "paused" === this._recorder.state ? "paused" : "started"
                }
                start() {
                    return up(this, void 0, void 0, function*() {
                        Ju("started" !== this.state, "Recorder is already started");
                        var t = new Promise(t=>{
                            const e = ()=>{
                                this._recorder.removeEventListener("start", e, !1),
                                t()
                            }
                            ;
                            this._recorder.addEventListener("start", e, !1)
                        }
                        );
                        return this._recorder.start(),
                        yield t
                    })
                }
                stop() {
                    return up(this, void 0, void 0, function*() {
                        Ju("stopped" !== this.state, "Recorder is not started");
                        var t = new Promise(e=>{
                            const s = t=>{
                                this._recorder.removeEventListener("dataavailable", s, !1),
                                e(t.data)
                            }
                            ;
                            this._recorder.addEventListener("dataavailable", s, !1)
                        }
                        );
                        return this._recorder.stop(),
                        yield t
                    })
                }
                pause() {
                    return Ju("started" === this.state, "Recorder must be started"),
                    this._recorder.pause(),
                    this
                }
                dispose() {
                    return super.dispose(),
                    this.input.dispose(),
                    this._stream.disconnect(),
                    this
                }
            }
            class cm extends hd {
                constructor() {
                    super(yp(cm.getDefaults(), arguments, ["threshold", "ratio"])),
                    this.name = "Compressor",
                    this._compressor = this.context.createDynamicsCompressor(),
                    this.input = this._compressor,
                    this.output = this._compressor;
                    var t = yp(cm.getDefaults(), arguments, ["threshold", "ratio"]);
                    this.threshold = new ad({
                        minValue: this._compressor.threshold.minValue,
                        maxValue: this._compressor.threshold.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.threshold,
                        units: "decibels",
                        value: t.threshold
                    }),
                    this.attack = new ad({
                        minValue: this._compressor.attack.minValue,
                        maxValue: this._compressor.attack.maxValue,
                        context: this.context,
                        param: this._compressor.attack,
                        units: "time",
                        value: t.attack
                    }),
                    this.release = new ad({
                        minValue: this._compressor.release.minValue,
                        maxValue: this._compressor.release.maxValue,
                        context: this.context,
                        param: this._compressor.release,
                        units: "time",
                        value: t.release
                    }),
                    this.knee = new ad({
                        minValue: this._compressor.knee.minValue,
                        maxValue: this._compressor.knee.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.knee,
                        units: "decibels",
                        value: t.knee
                    }),
                    this.ratio = new ad({
                        minValue: this._compressor.ratio.minValue,
                        maxValue: this._compressor.ratio.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.ratio,
                        units: "positive",
                        value: t.ratio
                    }),
                    Np(this, ["knee", "release", "attack", "ratio", "threshold"])
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        attack: .003,
                        knee: 30,
                        ratio: 12,
                        release: .25,
                        threshold: -24
                    })
                }
                get reduction() {
                    return this._compressor.reduction
                }
                dispose() {
                    return super.dispose(),
                    this._compressor.disconnect(),
                    this.attack.dispose(),
                    this.release.dispose(),
                    this.threshold.dispose(),
                    this.ratio.dispose(),
                    this.knee.dispose(),
                    this
                }
            }
            class lm extends hd {
                constructor() {
                    super(Object.assign(yp(lm.getDefaults(), arguments, ["threshold", "smoothing"]))),
                    this.name = "Gate";
                    var t = yp(lm.getDefaults(), arguments, ["threshold", "smoothing"]);
                    this._follower = new __({
                        context: this.context,
                        smoothing: t.smoothing
                    }),
                    this._gt = new mf({
                        context: this.context,
                        value: Qp(t.threshold)
                    }),
                    this.input = new pd({
                        context: this.context
                    }),
                    this._gate = this.output = new pd({
                        context: this.context
                    }),
                    this.input.connect(this._gate),
                    this.input.chain(this._follower, this._gt, this._gate.gain)
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        smoothing: .1,
                        threshold: -40
                    })
                }
                get threshold() {
                    return Zp(this._gt.value)
                }
                set threshold(t) {
                    this._gt.value = Qp(t)
                }
                get smoothing() {
                    return this._follower.smoothing
                }
                set smoothing(t) {
                    this._follower.smoothing = t
                }
                dispose() {
                    return super.dispose(),
                    this.input.dispose(),
                    this._follower.dispose(),
                    this._gt.dispose(),
                    this._gate.dispose(),
                    this
                }
            }
            class um extends hd {
                constructor() {
                    super(Object.assign(yp(um.getDefaults(), arguments, ["threshold"]))),
                    this.name = "Limiter";
                    var t = yp(um.getDefaults(), arguments, ["threshold"]);
                    this._compressor = this.input = this.output = new cm({
                        context: this.context,
                        ratio: 20,
                        attack: .003,
                        release: .01,
                        threshold: t.threshold
                    }),
                    this.threshold = this._compressor.threshold,
                    Np(this, "threshold")
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        threshold: -12
                    })
                }
                get reduction() {
                    return this._compressor.reduction
                }
                dispose() {
                    return super.dispose(),
                    this._compressor.dispose(),
                    this.threshold.dispose(),
                    this
                }
            }
            class pm extends hd {
                constructor() {
                    super(Object.assign(yp(pm.getDefaults(), arguments))),
                    this.name = "MidSideCompressor";
                    var t = yp(pm.getDefaults(), arguments);
                    this._midSideSplit = this.input = new B_({
                        context: this.context
                    }),
                    this._midSideMerge = this.output = new U_({
                        context: this.context
                    }),
                    this.mid = new cm(Object.assign(t.mid, {
                        context: this.context
                    })),
                    this.side = new cm(Object.assign(t.side, {
                        context: this.context
                    })),
                    this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid),
                    this._midSideSplit.side.chain(this.side, this._midSideMerge.side),
                    Np(this, ["mid", "side"])
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        mid: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        },
                        side: {
                            ratio: 6,
                            threshold: -30,
                            release: .25,
                            attack: .03,
                            knee: 10
                        }
                    })
                }
                dispose() {
                    return super.dispose(),
                    this.mid.dispose(),
                    this.side.dispose(),
                    this._midSideSplit.dispose(),
                    this._midSideMerge.dispose(),
                    this
                }
            }
            class dm extends hd {
                constructor() {
                    super(Object.assign(yp(dm.getDefaults(), arguments))),
                    this.name = "MultibandCompressor";
                    var t = yp(dm.getDefaults(), arguments);
                    this._splitter = this.input = new rm({
                        context: this.context,
                        lowFrequency: t.lowFrequency,
                        highFrequency: t.highFrequency
                    }),
                    this.lowFrequency = this._splitter.lowFrequency,
                    this.highFrequency = this._splitter.highFrequency,
                    this.output = new pd({
                        context: this.context
                    }),
                    this.low = new cm(Object.assign(t.low, {
                        context: this.context
                    })),
                    this.mid = new cm(Object.assign(t.mid, {
                        context: this.context
                    })),
                    this.high = new cm(Object.assign(t.high, {
                        context: this.context
                    })),
                    this._splitter.low.chain(this.low, this.output),
                    this._splitter.mid.chain(this.mid, this.output),
                    this._splitter.high.chain(this.high, this.output),
                    Np(this, ["high", "mid", "low", "highFrequency", "lowFrequency"])
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        lowFrequency: 250,
                        highFrequency: 2e3,
                        low: {
                            ratio: 6,
                            threshold: -30,
                            release: .25,
                            attack: .03,
                            knee: 10
                        },
                        mid: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        },
                        high: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        }
                    })
                }
                dispose() {
                    return super.dispose(),
                    this._splitter.dispose(),
                    this.low.dispose(),
                    this.mid.dispose(),
                    this.high.dispose(),
                    this.output.dispose(),
                    this
                }
            }
            class fm extends hd {
                constructor() {
                    super(yp(fm.getDefaults(), arguments, ["low", "mid", "high"])),
                    this.name = "EQ3",
                    this.output = new pd({
                        context: this.context
                    }),
                    this._internalChannels = [];
                    var t = yp(fm.getDefaults(), arguments, ["low", "mid", "high"]);
                    this.input = this._multibandSplit = new rm({
                        context: this.context,
                        highFrequency: t.highFrequency,
                        lowFrequency: t.lowFrequency
                    }),
                    this._lowGain = new pd({
                        context: this.context,
                        gain: t.low,
                        units: "decibels"
                    }),
                    this._midGain = new pd({
                        context: this.context,
                        gain: t.mid,
                        units: "decibels"
                    }),
                    this._highGain = new pd({
                        context: this.context,
                        gain: t.high,
                        units: "decibels"
                    }),
                    this.low = this._lowGain.gain,
                    this.mid = this._midGain.gain,
                    this.high = this._highGain.gain,
                    this.Q = this._multibandSplit.Q,
                    this.lowFrequency = this._multibandSplit.lowFrequency,
                    this.highFrequency = this._multibandSplit.highFrequency,
                    this._multibandSplit.low.chain(this._lowGain, this.output),
                    this._multibandSplit.mid.chain(this._midGain, this.output),
                    this._multibandSplit.high.chain(this._highGain, this.output),
                    Np(this, ["low", "mid", "high", "lowFrequency", "highFrequency"]),
                    this._internalChannels = [this._multibandSplit]
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        high: 0,
                        highFrequency: 2500,
                        low: 0,
                        lowFrequency: 400,
                        mid: 0
                    })
                }
                dispose() {
                    return super.dispose(),
                    Pp(this, ["low", "mid", "high", "lowFrequency", "highFrequency"]),
                    this._multibandSplit.dispose(),
                    this.lowFrequency.dispose(),
                    this.highFrequency.dispose(),
                    this._lowGain.dispose(),
                    this._midGain.dispose(),
                    this._highGain.dispose(),
                    this.low.dispose(),
                    this.mid.dispose(),
                    this.high.dispose(),
                    this.Q.dispose(),
                    this
                }
            }
            class _m extends hd {
                constructor() {
                    super(yp(_m.getDefaults(), arguments, ["url", "onload"])),
                    this.name = "Convolver",
                    this._convolver = this.context.createConvolver();
                    const e = yp(_m.getDefaults(), arguments, ["url", "onload"]);
                    this._buffer = new Lp(e.url,t=>{
                        this.buffer = t,
                        e.onload()
                    }
                    ),
                    this.input = new pd({
                        context: this.context
                    }),
                    this.output = new pd({
                        context: this.context
                    }),
                    this._buffer.loaded && (this.buffer = this._buffer),
                    this.normalize = e.normalize,
                    this.input.chain(this._convolver, this.output)
                }
                static getDefaults() {
                    return Object.assign(hd.getDefaults(), {
                        normalize: !0,
                        onload: jp
                    })
                }
                load(t) {
                    return up(this, void 0, void 0, function*() {
                        this.buffer = yield this._buffer.load(t)
                    })
                }
                get buffer() {
                    return this._buffer.length ? this._buffer : null
                }
                set buffer(t) {
                    t && this._buffer.set(t),
                    this._convolver.buffer && (this.input.disconnect(),
                    this._convolver.disconnect(),
                    this._convolver = this.context.createConvolver(),
                    this.input.chain(this._convolver, this.output));
                    t = this._buffer.get();
                    this._convolver.buffer = t || null
                }
                get normalize() {
                    return this._convolver.normalize
                }
                set normalize(t) {
                    this._convolver.normalize = t
                }
                dispose() {
                    return super.dispose(),
                    this._buffer.dispose(),
                    this._convolver.disconnect(),
                    this
                }
            }
            const mm = Up().transport;
            const gm = Up().destination
              , vm = Up().destination;
            const ym = Up().listener;
            const xm = Up().draw;
            const wm = Up();
            const bm = Lp
              , Tm = bd
              , Sm = Id
        }
        )(),
        Cm
    }
    )()
});
