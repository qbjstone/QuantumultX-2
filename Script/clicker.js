!(function (t, e) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = e();
  else if ('function' == typeof define && define.amd) define([], e);
  else {
    var n = e();
    for (var r in n) ('object' == typeof exports ? exports : t)[r] = n[r];
  }
})(self, () =>
  (() => {
    var t = {
        9282: (t, e, n) => {
          'use strict';
          var r = n(4155),
            o = n(5108);
          function i(t) {
            return (
              (i =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              i(t)
            );
          }
          var a,
            s,
            u = n(2136).codes,
            c = u.ERR_AMBIGUOUS_ARGUMENT,
            l = u.ERR_INVALID_ARG_TYPE,
            f = u.ERR_INVALID_ARG_VALUE,
            p = u.ERR_INVALID_RETURN_VALUE,
            d = u.ERR_MISSING_ARGS,
            h = n(5961),
            v = n(9539).inspect,
            g = n(9539).types,
            m = g.isPromise,
            y = g.isRegExp,
            b = Object.assign ? Object.assign : n(8091).assign,
            x = Object.is ? Object.is : n(609);
          new Map();
          function w() {
            var t = n(9158);
            (a = t.isDeepEqual), (s = t.isDeepStrictEqual);
          }
          var E = !1,
            S = (t.exports = M),
            O = {};
          function A(t) {
            if (t.message instanceof Error) throw t.message;
            throw new h(t);
          }
          function C(t, e, n, r) {
            if (!n) {
              var o = !1;
              if (0 === e)
                (o = !0), (r = 'No value argument passed to `assert.ok()`');
              else if (r instanceof Error) throw r;
              var i = new h({
                actual: n,
                expected: !0,
                message: r,
                operator: '==',
                stackStartFn: t,
              });
              throw ((i.generatedMessage = o), i);
            }
          }
          function M() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            C.apply(void 0, [M, e.length].concat(e));
          }
          (S.fail = function t(e, n, i, a, s) {
            var u,
              c = arguments.length;
            if (0 === c) u = 'Failed';
            else if (1 === c) (i = e), (e = void 0);
            else {
              if (!1 === E)
                (E = !0),
                  (r.emitWarning ? r.emitWarning : o.warn.bind(o))(
                    'assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.',
                    'DeprecationWarning',
                    'DEP0094'
                  );
              2 === c && (a = '!=');
            }
            if (i instanceof Error) throw i;
            var l = {
              actual: e,
              expected: n,
              operator: void 0 === a ? 'fail' : a,
              stackStartFn: s || t,
            };
            void 0 !== i && (l.message = i);
            var f = new h(l);
            throw (u && ((f.message = u), (f.generatedMessage = !0)), f);
          }),
            (S.AssertionError = h),
            (S.ok = M),
            (S.equal = function t(e, n, r) {
              if (arguments.length < 2) throw new d('actual', 'expected');
              e != n &&
                A({
                  actual: e,
                  expected: n,
                  message: r,
                  operator: '==',
                  stackStartFn: t,
                });
            }),
            (S.notEqual = function t(e, n, r) {
              if (arguments.length < 2) throw new d('actual', 'expected');
              e == n &&
                A({
                  actual: e,
                  expected: n,
                  message: r,
                  operator: '!=',
                  stackStartFn: t,
                });
            }),
            (S.deepEqual = function t(e, n, r) {
              if (arguments.length < 2) throw new d('actual', 'expected');
              void 0 === a && w(),
                a(e, n) ||
                  A({
                    actual: e,
                    expected: n,
                    message: r,
                    operator: 'deepEqual',
                    stackStartFn: t,
                  });
            }),
            (S.notDeepEqual = function t(e, n, r) {
              if (arguments.length < 2) throw new d('actual', 'expected');
              void 0 === a && w(),
                a(e, n) &&
                  A({
                    actual: e,
                    expected: n,
                    message: r,
                    operator: 'notDeepEqual',
                    stackStartFn: t,
                  });
            }),
            (S.deepStrictEqual = function t(e, n, r) {
              if (arguments.length < 2) throw new d('actual', 'expected');
              void 0 === a && w(),
                s(e, n) ||
                  A({
                    actual: e,
                    expected: n,
                    message: r,
                    operator: 'deepStrictEqual',
                    stackStartFn: t,
                  });
            }),
            (S.notDeepStrictEqual = function t(e, n, r) {
              if (arguments.length < 2) throw new d('actual', 'expected');
              void 0 === a && w();
              s(e, n) &&
                A({
                  actual: e,
                  expected: n,
                  message: r,
                  operator: 'notDeepStrictEqual',
                  stackStartFn: t,
                });
            }),
            (S.strictEqual = function t(e, n, r) {
              if (arguments.length < 2) throw new d('actual', 'expected');
              x(e, n) ||
                A({
                  actual: e,
                  expected: n,
                  message: r,
                  operator: 'strictEqual',
                  stackStartFn: t,
                });
            }),
            (S.notStrictEqual = function t(e, n, r) {
              if (arguments.length < 2) throw new d('actual', 'expected');
              x(e, n) &&
                A({
                  actual: e,
                  expected: n,
                  message: r,
                  operator: 'notStrictEqual',
                  stackStartFn: t,
                });
            });
          var D = function t(e, n, r) {
            var o = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              n.forEach(function (t) {
                t in e &&
                  (void 0 !== r &&
                  'string' == typeof r[t] &&
                  y(e[t]) &&
                  e[t].test(r[t])
                    ? (o[t] = r[t])
                    : (o[t] = e[t]));
              });
          };
          function P(t, e, n, r) {
            if ('function' != typeof e) {
              if (y(e)) return e.test(t);
              if (2 === arguments.length)
                throw new l('expected', ['Function', 'RegExp'], e);
              if ('object' !== i(t) || null === t) {
                var o = new h({
                  actual: t,
                  expected: e,
                  message: n,
                  operator: 'deepStrictEqual',
                  stackStartFn: r,
                });
                throw ((o.operator = r.name), o);
              }
              var u = Object.keys(e);
              if (e instanceof Error) u.push('name', 'message');
              else if (0 === u.length)
                throw new f('error', e, 'may not be an empty object');
              return (
                void 0 === a && w(),
                u.forEach(function (o) {
                  ('string' == typeof t[o] && y(e[o]) && e[o].test(t[o])) ||
                    (function (t, e, n, r, o, i) {
                      if (!(n in t) || !s(t[n], e[n])) {
                        if (!r) {
                          var a = new D(t, o),
                            u = new D(e, o, t),
                            c = new h({
                              actual: a,
                              expected: u,
                              operator: 'deepStrictEqual',
                              stackStartFn: i,
                            });
                          throw (
                            ((c.actual = t),
                            (c.expected = e),
                            (c.operator = i.name),
                            c)
                          );
                        }
                        A({
                          actual: t,
                          expected: e,
                          message: r,
                          operator: i.name,
                          stackStartFn: i,
                        });
                      }
                    })(t, e, o, n, u, r);
                }),
                !0
              );
            }
            return (
              (void 0 !== e.prototype && t instanceof e) ||
              (!Error.isPrototypeOf(e) && !0 === e.call({}, t))
            );
          }
          function j(t) {
            if ('function' != typeof t) throw new l('fn', 'Function', t);
            try {
              t();
            } catch (t) {
              return t;
            }
            return O;
          }
          function T(t) {
            return (
              m(t) ||
              (null !== t &&
                'object' === i(t) &&
                'function' == typeof t.then &&
                'function' == typeof t.catch)
            );
          }
          function R(t) {
            return Promise.resolve().then(function () {
              var e;
              if ('function' == typeof t) {
                if (!T((e = t())))
                  throw new p('instance of Promise', 'promiseFn', e);
              } else {
                if (!T(t)) throw new l('promiseFn', ['Function', 'Promise'], t);
                e = t;
              }
              return Promise.resolve()
                .then(function () {
                  return e;
                })
                .then(function () {
                  return O;
                })
                .catch(function (t) {
                  return t;
                });
            });
          }
          function k(t, e, n, r) {
            if ('string' == typeof n) {
              if (4 === arguments.length)
                throw new l(
                  'error',
                  ['Object', 'Error', 'Function', 'RegExp'],
                  n
                );
              if ('object' === i(e) && null !== e) {
                if (e.message === n)
                  throw new c(
                    'error/message',
                    'The error message "'.concat(
                      e.message,
                      '" is identical to the message.'
                    )
                  );
              } else if (e === n)
                throw new c(
                  'error/message',
                  'The error "'.concat(e, '" is identical to the message.')
                );
              (r = n), (n = void 0);
            } else if (null != n && 'object' !== i(n) && 'function' != typeof n)
              throw new l(
                'error',
                ['Object', 'Error', 'Function', 'RegExp'],
                n
              );
            if (e === O) {
              var o = '';
              n && n.name && (o += ' ('.concat(n.name, ')')),
                (o += r ? ': '.concat(r) : '.');
              var a = 'rejects' === t.name ? 'rejection' : 'exception';
              A({
                actual: void 0,
                expected: n,
                operator: t.name,
                message: 'Missing expected '.concat(a).concat(o),
                stackStartFn: t,
              });
            }
            if (n && !P(e, n, r, t)) throw e;
          }
          function B(t, e, n, r) {
            if (e !== O) {
              if (
                ('string' == typeof n && ((r = n), (n = void 0)), !n || P(e, n))
              ) {
                var o = r ? ': '.concat(r) : '.',
                  i = 'doesNotReject' === t.name ? 'rejection' : 'exception';
                A({
                  actual: e,
                  expected: n,
                  operator: t.name,
                  message:
                    'Got unwanted '.concat(i).concat(o, '\n') +
                    'Actual message: "'.concat(e && e.message, '"'),
                  stackStartFn: t,
                });
              }
              throw e;
            }
          }
          function I() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            C.apply(void 0, [I, e.length].concat(e));
          }
          (S.throws = function t(e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            k.apply(void 0, [t, j(e)].concat(r));
          }),
            (S.rejects = function t(e) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              return R(e).then(function (e) {
                return k.apply(void 0, [t, e].concat(r));
              });
            }),
            (S.doesNotThrow = function t(e) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              B.apply(void 0, [t, j(e)].concat(r));
            }),
            (S.doesNotReject = function t(e) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              return R(e).then(function (e) {
                return B.apply(void 0, [t, e].concat(r));
              });
            }),
            (S.ifError = function t(e) {
              if (null != e) {
                var n = 'ifError got unwanted exception: ';
                'object' === i(e) && 'string' == typeof e.message
                  ? 0 === e.message.length && e.constructor
                    ? (n += e.constructor.name)
                    : (n += e.message)
                  : (n += v(e));
                var r = new h({
                    actual: e,
                    expected: null,
                    operator: 'ifError',
                    message: n,
                    stackStartFn: t,
                  }),
                  o = e.stack;
                if ('string' == typeof o) {
                  var a = o.split('\n');
                  a.shift();
                  for (var s = r.stack.split('\n'), u = 0; u < a.length; u++) {
                    var c = s.indexOf(a[u]);
                    if (-1 !== c) {
                      s = s.slice(0, c);
                      break;
                    }
                  }
                  r.stack = ''.concat(s.join('\n'), '\n').concat(a.join('\n'));
                }
                throw r;
              }
            }),
            (S.strict = b(I, S, {
              equal: S.strictEqual,
              deepEqual: S.deepStrictEqual,
              notEqual: S.notStrictEqual,
              notDeepEqual: S.notDeepStrictEqual,
            })),
            (S.strict.strict = S.strict);
        },
        5961: (t, e, n) => {
          'use strict';
          var r = n(4155);
          function o(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function i(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          function a(t, e) {
            return !e || ('object' !== p(e) && 'function' != typeof e)
              ? s(t)
              : e;
          }
          function s(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          }
          function u(t) {
            var e = 'function' == typeof Map ? new Map() : void 0;
            return (
              (u = function (t) {
                if (
                  null === t ||
                  ((n = t),
                  -1 === Function.toString.call(n).indexOf('[native code]'))
                )
                  return t;
                var n;
                if ('function' != typeof t)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                if (void 0 !== e) {
                  if (e.has(t)) return e.get(t);
                  e.set(t, r);
                }
                function r() {
                  return c(t, arguments, f(this).constructor);
                }
                return (
                  (r.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  l(r, t)
                );
              }),
              u(t)
            );
          }
          function c(t, e, n) {
            return (
              (c = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? Reflect.construct
                : function (t, e, n) {
                    var r = [null];
                    r.push.apply(r, e);
                    var o = new (Function.bind.apply(t, r))();
                    return n && l(o, n.prototype), o;
                  }),
              c.apply(null, arguments)
            );
          }
          function l(t, e) {
            return (
              (l =
                Object.setPrototypeOf ||
                function (t, e) {
                  return (t.__proto__ = e), t;
                }),
              l(t, e)
            );
          }
          function f(t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              f(t)
            );
          }
          function p(t) {
            return (
              (p =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              p(t)
            );
          }
          var d = n(9539).inspect,
            h = n(2136).codes.ERR_INVALID_ARG_TYPE;
          function v(t, e, n) {
            return (
              (void 0 === n || n > t.length) && (n = t.length),
              t.substring(n - e.length, n) === e
            );
          }
          var g = '',
            m = '',
            y = '',
            b = '',
            x = {
              deepStrictEqual: 'Expected values to be strictly deep-equal:',
              strictEqual: 'Expected values to be strictly equal:',
              strictEqualObject:
                'Expected "actual" to be reference-equal to "expected":',
              deepEqual: 'Expected values to be loosely deep-equal:',
              equal: 'Expected values to be loosely equal:',
              notDeepStrictEqual:
                'Expected "actual" not to be strictly deep-equal to:',
              notStrictEqual: 'Expected "actual" to be strictly unequal to:',
              notStrictEqualObject:
                'Expected "actual" not to be reference-equal to "expected":',
              notDeepEqual:
                'Expected "actual" not to be loosely deep-equal to:',
              notEqual: 'Expected "actual" to be loosely unequal to:',
              notIdentical: 'Values identical but not reference-equal:',
            };
          function w(t) {
            var e = Object.keys(t),
              n = Object.create(Object.getPrototypeOf(t));
            return (
              e.forEach(function (e) {
                n[e] = t[e];
              }),
              Object.defineProperty(n, 'message', {
                value: t.message,
              }),
              n
            );
          }
          function E(t) {
            return d(t, {
              compact: !1,
              customInspect: !1,
              depth: 1e3,
              maxArrayLength: 1 / 0,
              showHidden: !1,
              breakLength: 1 / 0,
              showProxy: !1,
              sorted: !0,
              getters: !0,
            });
          }
          function S(t, e, n) {
            var o = '',
              i = '',
              a = 0,
              s = '',
              u = !1,
              c = E(t),
              l = c.split('\n'),
              f = E(e).split('\n'),
              d = 0,
              h = '';
            if (
              ('strictEqual' === n &&
                'object' === p(t) &&
                'object' === p(e) &&
                null !== t &&
                null !== e &&
                (n = 'strictEqualObject'),
              1 === l.length && 1 === f.length && l[0] !== f[0])
            ) {
              var w = l[0].length + f[0].length;
              if (w <= 10) {
                if (
                  !(
                    ('object' === p(t) && null !== t) ||
                    ('object' === p(e) && null !== e) ||
                    (0 === t && 0 === e)
                  )
                )
                  return (
                    ''.concat(x[n], '\n\n') +
                    ''.concat(l[0], ' !== ').concat(f[0], '\n')
                  );
              } else if ('strictEqualObject' !== n) {
                if (w < (r.stderr && r.stderr.isTTY ? r.stderr.columns : 80)) {
                  for (; l[0][d] === f[0][d]; ) d++;
                  d > 2 &&
                    ((h = '\n  '.concat(
                      (function (t, e) {
                        if (((e = Math.floor(e)), 0 == t.length || 0 == e))
                          return '';
                        var n = t.length * e;
                        for (e = Math.floor(Math.log(e) / Math.log(2)); e; )
                          (t += t), e--;
                        return t + t.substring(0, n - t.length);
                      })(' ', d),
                      '^'
                    )),
                    (d = 0));
                }
              }
            }
            for (
              var S = l[l.length - 1], O = f[f.length - 1];
              S === O &&
              (d++ < 2 ? (s = '\n  '.concat(S).concat(s)) : (o = S),
              l.pop(),
              f.pop(),
              0 !== l.length && 0 !== f.length);

            )
              (S = l[l.length - 1]), (O = f[f.length - 1]);
            var A = Math.max(l.length, f.length);
            if (0 === A) {
              var C = c.split('\n');
              if (C.length > 30)
                for (C[26] = ''.concat(g, '...').concat(b); C.length > 27; )
                  C.pop();
              return ''
                .concat(x.notIdentical, '\n\n')
                .concat(C.join('\n'), '\n');
            }
            d > 3 &&
              ((s = '\n'.concat(g, '...').concat(b).concat(s)), (u = !0)),
              '' !== o && ((s = '\n  '.concat(o).concat(s)), (o = ''));
            var M = 0,
              D =
                x[n] +
                '\n'
                  .concat(m, '+ actual')
                  .concat(b, ' ')
                  .concat(y, '- expected')
                  .concat(b),
              P = ' '.concat(g, '...').concat(b, ' Lines skipped');
            for (d = 0; d < A; d++) {
              var j = d - a;
              if (l.length < d + 1)
                j > 1 &&
                  d > 2 &&
                  (j > 4
                    ? ((i += '\n'.concat(g, '...').concat(b)), (u = !0))
                    : j > 3 && ((i += '\n  '.concat(f[d - 2])), M++),
                  (i += '\n  '.concat(f[d - 1])),
                  M++),
                  (a = d),
                  (o += '\n'.concat(y, '-').concat(b, ' ').concat(f[d])),
                  M++;
              else if (f.length < d + 1)
                j > 1 &&
                  d > 2 &&
                  (j > 4
                    ? ((i += '\n'.concat(g, '...').concat(b)), (u = !0))
                    : j > 3 && ((i += '\n  '.concat(l[d - 2])), M++),
                  (i += '\n  '.concat(l[d - 1])),
                  M++),
                  (a = d),
                  (i += '\n'.concat(m, '+').concat(b, ' ').concat(l[d])),
                  M++;
              else {
                var T = f[d],
                  R = l[d],
                  k = R !== T && (!v(R, ',') || R.slice(0, -1) !== T);
                k &&
                  v(T, ',') &&
                  T.slice(0, -1) === R &&
                  ((k = !1), (R += ',')),
                  k
                    ? (j > 1 &&
                        d > 2 &&
                        (j > 4
                          ? ((i += '\n'.concat(g, '...').concat(b)), (u = !0))
                          : j > 3 && ((i += '\n  '.concat(l[d - 2])), M++),
                        (i += '\n  '.concat(l[d - 1])),
                        M++),
                      (a = d),
                      (i += '\n'.concat(m, '+').concat(b, ' ').concat(R)),
                      (o += '\n'.concat(y, '-').concat(b, ' ').concat(T)),
                      (M += 2))
                    : ((i += o),
                      (o = ''),
                      (1 !== j && 0 !== d) || ((i += '\n  '.concat(R)), M++));
              }
              if (M > 20 && d < A - 2)
                return (
                  ''
                    .concat(D)
                    .concat(P, '\n')
                    .concat(i, '\n')
                    .concat(g, '...')
                    .concat(b)
                    .concat(o, '\n') + ''.concat(g, '...').concat(b)
                );
            }
            return ''
              .concat(D)
              .concat(u ? P : '', '\n')
              .concat(i)
              .concat(o)
              .concat(s)
              .concat(h);
          }
          var O = (function (t) {
            function e(t) {
              var n;
              if (
                ((function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError('Cannot call a class as a function');
                })(this, e),
                'object' !== p(t) || null === t)
              )
                throw new h('options', 'Object', t);
              var o = t.message,
                i = t.operator,
                u = t.stackStartFn,
                c = t.actual,
                l = t.expected,
                d = Error.stackTraceLimit;
              if (((Error.stackTraceLimit = 0), null != o))
                n = a(this, f(e).call(this, String(o)));
              else if (
                (r.stderr &&
                  r.stderr.isTTY &&
                  (r.stderr &&
                  r.stderr.getColorDepth &&
                  1 !== r.stderr.getColorDepth()
                    ? ((g = '[34m'), (m = '[32m'), (b = '[39m'), (y = '[31m'))
                    : ((g = ''), (m = ''), (b = ''), (y = ''))),
                'object' === p(c) &&
                  null !== c &&
                  'object' === p(l) &&
                  null !== l &&
                  'stack' in c &&
                  c instanceof Error &&
                  'stack' in l &&
                  l instanceof Error &&
                  ((c = w(c)), (l = w(l))),
                'deepStrictEqual' === i || 'strictEqual' === i)
              )
                n = a(this, f(e).call(this, S(c, l, i)));
              else if ('notDeepStrictEqual' === i || 'notStrictEqual' === i) {
                var v = x[i],
                  O = E(c).split('\n');
                if (
                  ('notStrictEqual' === i &&
                    'object' === p(c) &&
                    null !== c &&
                    (v = x.notStrictEqualObject),
                  O.length > 30)
                )
                  for (O[26] = ''.concat(g, '...').concat(b); O.length > 27; )
                    O.pop();
                n =
                  1 === O.length
                    ? a(this, f(e).call(this, ''.concat(v, ' ').concat(O[0])))
                    : a(
                        this,
                        f(e).call(
                          this,
                          ''.concat(v, '\n\n').concat(O.join('\n'), '\n')
                        )
                      );
              } else {
                var A = E(c),
                  C = '',
                  M = x[i];
                'notDeepEqual' === i || 'notEqual' === i
                  ? (A = ''.concat(x[i], '\n\n').concat(A)).length > 1024 &&
                    (A = ''.concat(A.slice(0, 1021), '...'))
                  : ((C = ''.concat(E(l))),
                    A.length > 512 && (A = ''.concat(A.slice(0, 509), '...')),
                    C.length > 512 && (C = ''.concat(C.slice(0, 509), '...')),
                    'deepEqual' === i || 'equal' === i
                      ? (A = ''
                          .concat(M, '\n\n')
                          .concat(A, '\n\nshould equal\n\n'))
                      : (C = ' '.concat(i, ' ').concat(C))),
                  (n = a(this, f(e).call(this, ''.concat(A).concat(C))));
              }
              return (
                (Error.stackTraceLimit = d),
                (n.generatedMessage = !o),
                Object.defineProperty(s(n), 'name', {
                  value: 'AssertionError [ERR_ASSERTION]',
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                }),
                (n.code = 'ERR_ASSERTION'),
                (n.actual = c),
                (n.expected = l),
                (n.operator = i),
                Error.captureStackTrace && Error.captureStackTrace(s(n), u),
                n.stack,
                (n.name = 'AssertionError'),
                a(n)
              );
            }
            var n, u, c;
            return (
              (function (t, e) {
                if ('function' != typeof e && null !== e)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  e && l(t, e);
              })(e, t),
              (n = e),
              (u = [
                {
                  key: 'toString',
                  value: function () {
                    return ''
                      .concat(this.name, ' [')
                      .concat(this.code, ']: ')
                      .concat(this.message);
                  },
                },
                {
                  key: d.custom,
                  value: function (t, e) {
                    return d(
                      this,
                      (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                          'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (
                                t
                              ) {
                                return Object.getOwnPropertyDescriptor(n, t)
                                  .enumerable;
                              })
                            )),
                            r.forEach(function (e) {
                              o(t, e, n[e]);
                            });
                        }
                        return t;
                      })({}, e, {
                        customInspect: !1,
                        depth: 0,
                      })
                    );
                  },
                },
              ]),
              u && i(n.prototype, u),
              c && i(n, c),
              e
            );
          })(u(Error));
          t.exports = O;
        },
        2136: (t, e, n) => {
          'use strict';
          function r(t) {
            return (
              (r =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              r(t)
            );
          }
          function o(t, e) {
            return !e || ('object' !== r(e) && 'function' != typeof e)
              ? (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t)
              : e;
          }
          function i(t) {
            return (
              (i = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              i(t)
            );
          }
          function a(t, e) {
            return (
              (a =
                Object.setPrototypeOf ||
                function (t, e) {
                  return (t.__proto__ = e), t;
                }),
              a(t, e)
            );
          }
          var s,
            u,
            c = {};
          function l(t, e, n) {
            n || (n = Error);
            var r = (function (n) {
              function r(n, a, s) {
                var u;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, r),
                  (u = o(
                    this,
                    i(r).call(
                      this,
                      (function (t, n, r) {
                        return 'string' == typeof e ? e : e(t, n, r);
                      })(n, a, s)
                    )
                  )),
                  (u.code = t),
                  u
                );
              }
              return (
                (function (t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e && a(t, e);
                })(r, n),
                r
              );
            })(n);
            c[t] = r;
          }
          function f(t, e) {
            if (Array.isArray(t)) {
              var n = t.length;
              return (
                (t = t.map(function (t) {
                  return String(t);
                })),
                n > 2
                  ? 'one of '
                      .concat(e, ' ')
                      .concat(t.slice(0, n - 1).join(', '), ', or ') + t[n - 1]
                  : 2 === n
                  ? 'one of '.concat(e, ' ').concat(t[0], ' or ').concat(t[1])
                  : 'of '.concat(e, ' ').concat(t[0])
              );
            }
            return 'of '.concat(e, ' ').concat(String(t));
          }
          l(
            'ERR_AMBIGUOUS_ARGUMENT',
            'The "%s" argument is ambiguous. %s',
            TypeError
          ),
            l(
              'ERR_INVALID_ARG_TYPE',
              function (t, e, o) {
                var i, a, u, c;
                if (
                  (void 0 === s && (s = n(9282)),
                  s('string' == typeof t, "'name' must be a string"),
                  'string' == typeof e &&
                  ((a = 'not '), e.substr(!u || u < 0 ? 0 : +u, a.length) === a)
                    ? ((i = 'must not be'), (e = e.replace(/^not /, '')))
                    : (i = 'must be'),
                  (function (t, e, n) {
                    return (
                      (void 0 === n || n > t.length) && (n = t.length),
                      t.substring(n - e.length, n) === e
                    );
                  })(t, ' argument'))
                )
                  c = 'The '.concat(t, ' ').concat(i, ' ').concat(f(e, 'type'));
                else {
                  var l = (function (t, e, n) {
                    return (
                      'number' != typeof n && (n = 0),
                      !(n + e.length > t.length) && -1 !== t.indexOf(e, n)
                    );
                  })(t, '.')
                    ? 'property'
                    : 'argument';
                  c = 'The "'
                    .concat(t, '" ')
                    .concat(l, ' ')
                    .concat(i, ' ')
                    .concat(f(e, 'type'));
                }
                return (c += '. Received type '.concat(r(o)));
              },
              TypeError
            ),
            l(
              'ERR_INVALID_ARG_VALUE',
              function (t, e) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 'is invalid';
                void 0 === u && (u = n(9539));
                var o = u.inspect(e);
                return (
                  o.length > 128 && (o = ''.concat(o.slice(0, 128), '...')),
                  "The argument '"
                    .concat(t, "' ")
                    .concat(r, '. Received ')
                    .concat(o)
                );
              },
              TypeError,
              RangeError
            ),
            l(
              'ERR_INVALID_RETURN_VALUE',
              function (t, e, n) {
                var o;
                return (
                  (o =
                    n && n.constructor && n.constructor.name
                      ? 'instance of '.concat(n.constructor.name)
                      : 'type '.concat(r(n))),
                  'Expected '
                    .concat(t, ' to be returned from the "')
                    .concat(e, '"') + ' function but got '.concat(o, '.')
                );
              },
              TypeError
            ),
            l(
              'ERR_MISSING_ARGS',
              function () {
                for (
                  var t = arguments.length, e = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  e[r] = arguments[r];
                void 0 === s && (s = n(9282)),
                  s(e.length > 0, 'At least one arg needs to be specified');
                var o = 'The ',
                  i = e.length;
                switch (
                  ((e = e.map(function (t) {
                    return '"'.concat(t, '"');
                  })),
                  i)
                ) {
                  case 1:
                    o += ''.concat(e[0], ' argument');
                    break;
                  case 2:
                    o += ''.concat(e[0], ' and ').concat(e[1], ' arguments');
                    break;
                  default:
                    (o += e.slice(0, i - 1).join(', ')),
                      (o += ', and '.concat(e[i - 1], ' arguments'));
                }
                return ''.concat(o, ' must be specified');
              },
              TypeError
            ),
            (t.exports.codes = c);
        },
        9158: (t, e, n) => {
          'use strict';
          function r(t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var a, s = t[Symbol.iterator]();
                    !(r = (a = s.next()).done) &&
                    (n.push(a.value), !e || n.length !== e);
                    r = !0
                  );
                } catch (t) {
                  (o = !0), (i = t);
                } finally {
                  try {
                    r || null == s.return || s.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              })(t, e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance'
                );
              })()
            );
          }
          function o(t) {
            return (
              (o =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              o(t)
            );
          }
          var i = void 0 !== /a/g.flags,
            a = function (t) {
              var e = [];
              return (
                t.forEach(function (t) {
                  return e.push(t);
                }),
                e
              );
            },
            s = function (t) {
              var e = [];
              return (
                t.forEach(function (t, n) {
                  return e.push([n, t]);
                }),
                e
              );
            },
            u = Object.is ? Object.is : n(609),
            c = Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols
              : function () {
                  return [];
                },
            l = Number.isNaN ? Number.isNaN : n(360);
          function f(t) {
            return t.call.bind(t);
          }
          var p = f(Object.prototype.hasOwnProperty),
            d = f(Object.prototype.propertyIsEnumerable),
            h = f(Object.prototype.toString),
            v = n(9539).types,
            g = v.isAnyArrayBuffer,
            m = v.isArrayBufferView,
            y = v.isDate,
            b = v.isMap,
            x = v.isRegExp,
            w = v.isSet,
            E = v.isNativeError,
            S = v.isBoxedPrimitive,
            O = v.isNumberObject,
            A = v.isStringObject,
            C = v.isBooleanObject,
            M = v.isBigIntObject,
            D = v.isSymbolObject,
            P = v.isFloat32Array,
            j = v.isFloat64Array;
          function T(t) {
            if (0 === t.length || t.length > 10) return !0;
            for (var e = 0; e < t.length; e++) {
              var n = t.charCodeAt(e);
              if (n < 48 || n > 57) return !0;
            }
            return 10 === t.length && t >= Math.pow(2, 32);
          }
          function R(t) {
            return Object.keys(t)
              .filter(T)
              .concat(
                c(t).filter(Object.prototype.propertyIsEnumerable.bind(t))
              );
          }
          function k(t, e) {
            if (t === e) return 0;
            for (
              var n = t.length, r = e.length, o = 0, i = Math.min(n, r);
              o < i;
              ++o
            )
              if (t[o] !== e[o]) {
                (n = t[o]), (r = e[o]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }
          var B = 0,
            I = 1,
            _ = 2,
            F = 3;
          function N(t, e, n, r) {
            if (t === e) return 0 !== t || !n || u(t, e);
            if (n) {
              if ('object' !== o(t))
                return 'number' == typeof t && l(t) && l(e);
              if ('object' !== o(e) || null === t || null === e) return !1;
              if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e))
                return !1;
            } else {
              if (null === t || 'object' !== o(t))
                return (null === e || 'object' !== o(e)) && t == e;
              if (null === e || 'object' !== o(e)) return !1;
            }
            var a,
              s,
              c,
              f,
              p = h(t);
            if (p !== h(e)) return !1;
            if (Array.isArray(t)) {
              if (t.length !== e.length) return !1;
              var d = R(t),
                v = R(e);
              return d.length === v.length && G(t, e, n, r, I, d);
            }
            if ('[object Object]' === p && ((!b(t) && b(e)) || (!w(t) && w(e))))
              return !1;
            if (y(t)) {
              if (
                !y(e) ||
                Date.prototype.getTime.call(t) !==
                  Date.prototype.getTime.call(e)
              )
                return !1;
            } else if (x(t)) {
              if (
                !x(e) ||
                ((c = t),
                (f = e),
                !(i
                  ? c.source === f.source && c.flags === f.flags
                  : RegExp.prototype.toString.call(c) ===
                    RegExp.prototype.toString.call(f)))
              )
                return !1;
            } else if (E(t) || t instanceof Error) {
              if (t.message !== e.message || t.name !== e.name) return !1;
            } else {
              if (m(t)) {
                if (n || (!P(t) && !j(t))) {
                  if (
                    !(function (t, e) {
                      return (
                        t.byteLength === e.byteLength &&
                        0 ===
                          k(
                            new Uint8Array(
                              t.buffer,
                              t.byteOffset,
                              t.byteLength
                            ),
                            new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                          )
                      );
                    })(t, e)
                  )
                    return !1;
                } else if (
                  !(function (t, e) {
                    if (t.byteLength !== e.byteLength) return !1;
                    for (var n = 0; n < t.byteLength; n++)
                      if (t[n] !== e[n]) return !1;
                    return !0;
                  })(t, e)
                )
                  return !1;
                var T = R(t),
                  N = R(e);
                return T.length === N.length && G(t, e, n, r, B, T);
              }
              if (w(t))
                return !(!w(e) || t.size !== e.size) && G(t, e, n, r, _);
              if (b(t))
                return !(!b(e) || t.size !== e.size) && G(t, e, n, r, F);
              if (g(t)) {
                if (
                  ((s = e),
                  (a = t).byteLength !== s.byteLength ||
                    0 !== k(new Uint8Array(a), new Uint8Array(s)))
                )
                  return !1;
              } else if (
                S(t) &&
                !(function (t, e) {
                  return O(t)
                    ? O(e) &&
                        u(
                          Number.prototype.valueOf.call(t),
                          Number.prototype.valueOf.call(e)
                        )
                    : A(t)
                    ? A(e) &&
                      String.prototype.valueOf.call(t) ===
                        String.prototype.valueOf.call(e)
                    : C(t)
                    ? C(e) &&
                      Boolean.prototype.valueOf.call(t) ===
                        Boolean.prototype.valueOf.call(e)
                    : M(t)
                    ? M(e) &&
                      BigInt.prototype.valueOf.call(t) ===
                        BigInt.prototype.valueOf.call(e)
                    : D(e) &&
                      Symbol.prototype.valueOf.call(t) ===
                        Symbol.prototype.valueOf.call(e);
                })(t, e)
              )
                return !1;
            }
            return G(t, e, n, r, B);
          }
          function z(t, e) {
            return e.filter(function (e) {
              return d(t, e);
            });
          }
          function G(t, e, n, i, u, l) {
            if (5 === arguments.length) {
              l = Object.keys(t);
              var f = Object.keys(e);
              if (l.length !== f.length) return !1;
            }
            for (var h = 0; h < l.length; h++) if (!p(e, l[h])) return !1;
            if (n && 5 === arguments.length) {
              var v = c(t);
              if (0 !== v.length) {
                var g = 0;
                for (h = 0; h < v.length; h++) {
                  var m = v[h];
                  if (d(t, m)) {
                    if (!d(e, m)) return !1;
                    l.push(m), g++;
                  } else if (d(e, m)) return !1;
                }
                var y = c(e);
                if (v.length !== y.length && z(e, y).length !== g) return !1;
              } else {
                var b = c(e);
                if (0 !== b.length && 0 !== z(e, b).length) return !1;
              }
            }
            if (
              0 === l.length &&
              (u === B || (u === I && 0 === t.length) || 0 === t.size)
            )
              return !0;
            if (void 0 === i)
              i = {
                val1: new Map(),
                val2: new Map(),
                position: 0,
              };
            else {
              var x = i.val1.get(t);
              if (void 0 !== x) {
                var w = i.val2.get(e);
                if (void 0 !== w) return x === w;
              }
              i.position++;
            }
            i.val1.set(t, i.position), i.val2.set(e, i.position);
            var E = (function (t, e, n, i, u, c) {
              var l = 0;
              if (c === _) {
                if (
                  !(function (t, e, n, r) {
                    for (var i = null, s = a(t), u = 0; u < s.length; u++) {
                      var c = s[u];
                      if ('object' === o(c) && null !== c)
                        null === i && (i = new Set()), i.add(c);
                      else if (!e.has(c)) {
                        if (n) return !1;
                        if (!q(t, e, c)) return !1;
                        null === i && (i = new Set()), i.add(c);
                      }
                    }
                    if (null !== i) {
                      for (var l = a(e), f = 0; f < l.length; f++) {
                        var p = l[f];
                        if ('object' === o(p) && null !== p) {
                          if (!L(i, p, n, r)) return !1;
                        } else if (!n && !t.has(p) && !L(i, p, n, r)) return !1;
                      }
                      return 0 === i.size;
                    }
                    return !0;
                  })(t, e, n, u)
                )
                  return !1;
              } else if (c === F) {
                if (
                  !(function (t, e, n, i) {
                    for (var a = null, u = s(t), c = 0; c < u.length; c++) {
                      var l = r(u[c], 2),
                        f = l[0],
                        p = l[1];
                      if ('object' === o(f) && null !== f)
                        null === a && (a = new Set()), a.add(f);
                      else {
                        var d = e.get(f);
                        if ((void 0 === d && !e.has(f)) || !N(p, d, n, i)) {
                          if (n) return !1;
                          if (!H(t, e, f, p, i)) return !1;
                          null === a && (a = new Set()), a.add(f);
                        }
                      }
                    }
                    if (null !== a) {
                      for (var h = s(e), v = 0; v < h.length; v++) {
                        var g = r(h[v], 2),
                          m = ((f = g[0]), g[1]);
                        if ('object' === o(f) && null !== f) {
                          if (!Y(a, t, f, m, n, i)) return !1;
                        } else if (
                          !(
                            n ||
                            (t.has(f) && N(t.get(f), m, !1, i)) ||
                            Y(a, t, f, m, !1, i)
                          )
                        )
                          return !1;
                      }
                      return 0 === a.size;
                    }
                    return !0;
                  })(t, e, n, u)
                )
                  return !1;
              } else if (c === I)
                for (; l < t.length; l++) {
                  if (!p(t, l)) {
                    if (p(e, l)) return !1;
                    for (var f = Object.keys(t); l < f.length; l++) {
                      var d = f[l];
                      if (!p(e, d) || !N(t[d], e[d], n, u)) return !1;
                    }
                    return f.length === Object.keys(e).length;
                  }
                  if (!p(e, l) || !N(t[l], e[l], n, u)) return !1;
                }
              for (l = 0; l < i.length; l++) {
                var h = i[l];
                if (!N(t[h], e[h], n, u)) return !1;
              }
              return !0;
            })(t, e, n, l, i, u);
            return i.val1.delete(t), i.val2.delete(e), E;
          }
          function L(t, e, n, r) {
            for (var o = a(t), i = 0; i < o.length; i++) {
              var s = o[i];
              if (N(e, s, n, r)) return t.delete(s), !0;
            }
            return !1;
          }
          function W(t) {
            switch (o(t)) {
              case 'undefined':
                return null;
              case 'object':
                return;
              case 'symbol':
                return !1;
              case 'string':
                t = +t;
              case 'number':
                if (l(t)) return !1;
            }
            return !0;
          }
          function q(t, e, n) {
            var r = W(n);
            return null != r ? r : e.has(r) && !t.has(r);
          }
          function H(t, e, n, r, o) {
            var i = W(n);
            if (null != i) return i;
            var a = e.get(i);
            return (
              !((void 0 === a && !e.has(i)) || !N(r, a, !1, o)) &&
              !t.has(i) &&
              N(r, a, !1, o)
            );
          }
          function Y(t, e, n, r, o, i) {
            for (var s = a(t), u = 0; u < s.length; u++) {
              var c = s[u];
              if (N(n, c, o, i) && N(r, e.get(c), o, i)) return t.delete(c), !0;
            }
            return !1;
          }
          t.exports = {
            isDeepEqual: function (t, e) {
              return N(t, e, false);
            },
            isDeepStrictEqual: function (t, e) {
              return N(t, e, true);
            },
          };
        },
        1924: (t, e, n) => {
          'use strict';
          var r = n(210),
            o = n(5559),
            i = o(r('String.prototype.indexOf'));
          t.exports = function (t, e) {
            var n = r(t, !!e);
            return 'function' == typeof n && i(t, '.prototype.') > -1
              ? o(n)
              : n;
          };
        },
        5559: (t, e, n) => {
          'use strict';
          var r = n(8612),
            o = n(210),
            i = o('%Function.prototype.apply%'),
            a = o('%Function.prototype.call%'),
            s = o('%Reflect.apply%', !0) || r.call(a, i),
            u = o('%Object.getOwnPropertyDescriptor%', !0),
            c = o('%Object.defineProperty%', !0),
            l = o('%Math.max%');
          if (c)
            try {
              c({}, 'a', {
                value: 1,
              });
            } catch (t) {
              c = null;
            }
          t.exports = function (t) {
            var e = s(r, a, arguments);
            u &&
              c &&
              u(e, 'length').configurable &&
              c(e, 'length', {
                value: 1 + l(0, t.length - (arguments.length - 1)),
              });
            return e;
          };
          var f = function () {
            return s(r, i, arguments);
          };
          c
            ? c(t.exports, 'apply', {
                value: f,
              })
            : (t.exports.apply = f);
        },
        5108: (t, e, n) => {
          var r = n(9539),
            o = n(9282);
          function i() {
            return new Date().getTime();
          }
          var a,
            s = Array.prototype.slice,
            u = {};
          a =
            void 0 !== n.g && n.g.console
              ? n.g.console
              : 'undefined' != typeof window && window.console
              ? window.console
              : {};
          for (
            var c = [
                [function () {}, 'log'],
                [
                  function () {
                    a.log.apply(a, arguments);
                  },
                  'info',
                ],
                [
                  function () {
                    a.log.apply(a, arguments);
                  },
                  'warn',
                ],
                [
                  function () {
                    a.warn.apply(a, arguments);
                  },
                  'error',
                ],
                [
                  function (t) {
                    u[t] = i();
                  },
                  'time',
                ],
                [
                  function (t) {
                    var e = u[t];
                    if (!e) throw new Error('No such label: ' + t);
                    delete u[t];
                    i();
                  },
                  'timeEnd',
                ],
                [
                  function () {
                    var t = new Error();
                    (t.name = 'Trace'),
                      (t.message = r.format.apply(null, arguments)),
                      a.error(t.stack);
                  },
                  'trace',
                ],
                [
                  function (t) {
                    r.inspect(t);
                  },
                  'dir',
                ],
                [
                  function (t) {
                    if (!t) {
                      var e = s.call(arguments, 1);
                      o.ok(!1, r.format.apply(null, e));
                    }
                  },
                  'assert',
                ],
              ],
              l = 0;
            l < c.length;
            l++
          ) {
            var f = c[l],
              p = f[0],
              d = f[1];
            a[d] || (a[d] = p);
          }
          t.exports = a;
        },
        9662: (t, e, n) => {
          var r = n(614),
            o = n(6330),
            i = TypeError;
          t.exports = function (t) {
            if (r(t)) return t;
            throw i(o(t) + ' is not a function');
          };
        },
        9483: (t, e, n) => {
          var r = n(4411),
            o = n(6330),
            i = TypeError;
          t.exports = function (t) {
            if (r(t)) return t;
            throw i(o(t) + ' is not a constructor');
          };
        },
        6077: (t, e, n) => {
          var r = n(614),
            o = String,
            i = TypeError;
          t.exports = function (t) {
            if ('object' == typeof t || r(t)) return t;
            throw i("Can't set " + o(t) + ' as a prototype');
          };
        },
        1223: (t, e, n) => {
          var r = n(5112),
            o = n(30),
            i = n(3070).f,
            a = r('unscopables'),
            s = Array.prototype;
          null == s[a] &&
            i(s, a, {
              configurable: !0,
              value: o(null),
            }),
            (t.exports = function (t) {
              s[a][t] = !0;
            });
        },
        5787: (t, e, n) => {
          var r = n(7976),
            o = TypeError;
          t.exports = function (t, e) {
            if (r(e, t)) return t;
            throw o('Incorrect invocation');
          };
        },
        9670: (t, e, n) => {
          var r = n(111),
            o = String,
            i = TypeError;
          t.exports = function (t) {
            if (r(t)) return t;
            throw i(o(t) + ' is not an object');
          };
        },
        8533: (t, e, n) => {
          'use strict';
          var r = n(2092).forEach,
            o = n(2133)('forEach');
          t.exports = o
            ? [].forEach
            : function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
              };
        },
        1318: (t, e, n) => {
          var r = n(5656),
            o = n(1400),
            i = n(6244),
            a = function (t) {
              return function (e, n, a) {
                var s,
                  u = r(e),
                  c = i(u),
                  l = o(a, c);
                if (t && n != n) {
                  for (; c > l; ) if ((s = u[l++]) != s) return !0;
                } else
                  for (; c > l; l++)
                    if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1;
              };
            };
          t.exports = {
            includes: a(!0),
            indexOf: a(!1),
          };
        },
        2092: (t, e, n) => {
          var r = n(9974),
            o = n(1702),
            i = n(8361),
            a = n(7908),
            s = n(6244),
            u = n(5417),
            c = o([].push),
            l = function (t) {
              var e = 1 == t,
                n = 2 == t,
                o = 3 == t,
                l = 4 == t,
                f = 6 == t,
                p = 7 == t,
                d = 5 == t || f;
              return function (h, v, g, m) {
                for (
                  var y,
                    b,
                    x = a(h),
                    w = i(x),
                    E = r(v, g),
                    S = s(w),
                    O = 0,
                    A = m || u,
                    C = e ? A(h, S) : n || p ? A(h, 0) : void 0;
                  S > O;
                  O++
                )
                  if ((d || O in w) && ((b = E((y = w[O]), O, x)), t))
                    if (e) C[O] = b;
                    else if (b)
                      switch (t) {
                        case 3:
                          return !0;
                        case 5:
                          return y;
                        case 6:
                          return O;
                        case 2:
                          c(C, y);
                      }
                    else
                      switch (t) {
                        case 4:
                          return !1;
                        case 7:
                          c(C, y);
                      }
                return f ? -1 : o || l ? l : C;
              };
            };
          t.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6),
            filterReject: l(7),
          };
        },
        1194: (t, e, n) => {
          var r = n(7293),
            o = n(5112),
            i = n(7392),
            a = o('species');
          t.exports = function (t) {
            return (
              i >= 51 ||
              !r(function () {
                var e = [];
                return (
                  ((e.constructor = {})[a] = function () {
                    return {
                      foo: 1,
                    };
                  }),
                  1 !== e[t](Boolean).foo
                );
              })
            );
          };
        },
        2133: (t, e, n) => {
          'use strict';
          var r = n(7293);
          t.exports = function (t, e) {
            var n = [][t];
            return (
              !!n &&
              r(function () {
                n.call(
                  null,
                  e ||
                    function () {
                      return 1;
                    },
                  1
                );
              })
            );
          };
        },
        1589: (t, e, n) => {
          var r = n(1400),
            o = n(6244),
            i = n(6135),
            a = Array,
            s = Math.max;
          t.exports = function (t, e, n) {
            for (
              var u = o(t),
                c = r(e, u),
                l = r(void 0 === n ? u : n, u),
                f = a(s(l - c, 0)),
                p = 0;
              c < l;
              c++, p++
            )
              i(f, p, t[c]);
            return (f.length = p), f;
          };
        },
        206: (t, e, n) => {
          var r = n(1702);
          t.exports = r([].slice);
        },
        7475: (t, e, n) => {
          var r = n(3157),
            o = n(4411),
            i = n(111),
            a = n(5112)('species'),
            s = Array;
          t.exports = function (t) {
            var e;
            return (
              r(t) &&
                ((e = t.constructor),
                ((o(e) && (e === s || r(e.prototype))) ||
                  (i(e) && null === (e = e[a]))) &&
                  (e = void 0)),
              void 0 === e ? s : e
            );
          };
        },
        5417: (t, e, n) => {
          var r = n(7475);
          t.exports = function (t, e) {
            return new (r(t))(0 === e ? 0 : e);
          };
        },
        7072: (t, e, n) => {
          var r = n(5112)('iterator'),
            o = !1;
          try {
            var i = 0,
              a = {
                next: function () {
                  return {
                    done: !!i++,
                  };
                },
                return: function () {
                  o = !0;
                },
              };
            (a[r] = function () {
              return this;
            }),
              Array.from(a, function () {
                throw 2;
              });
          } catch (t) {}
          t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
              var i = {};
              (i[r] = function () {
                return {
                  next: function () {
                    return {
                      done: (n = !0),
                    };
                  },
                };
              }),
                t(i);
            } catch (t) {}
            return n;
          };
        },
        4326: (t, e, n) => {
          var r = n(1702),
            o = r({}.toString),
            i = r(''.slice);
          t.exports = function (t) {
            return i(o(t), 8, -1);
          };
        },
        648: (t, e, n) => {
          var r = n(1694),
            o = n(614),
            i = n(4326),
            a = n(5112)('toStringTag'),
            s = Object,
            u =
              'Arguments' ==
              i(
                (function () {
                  return arguments;
                })()
              );
          t.exports = r
            ? i
            : function (t) {
                var e, n, r;
                return void 0 === t
                  ? 'Undefined'
                  : null === t
                  ? 'Null'
                  : 'string' ==
                    typeof (n = (function (t, e) {
                      try {
                        return t[e];
                      } catch (t) {}
                    })((e = s(t)), a))
                  ? n
                  : u
                  ? i(e)
                  : 'Object' == (r = i(e)) && o(e.callee)
                  ? 'Arguments'
                  : r;
              };
        },
        9920: (t, e, n) => {
          var r = n(2597),
            o = n(3887),
            i = n(1236),
            a = n(3070);
          t.exports = function (t, e, n) {
            for (var s = o(e), u = a.f, c = i.f, l = 0; l < s.length; l++) {
              var f = s[l];
              r(t, f) || (n && r(n, f)) || u(t, f, c(e, f));
            }
          };
        },
        4964: (t, e, n) => {
          var r = n(5112)('match');
          t.exports = function (t) {
            var e = /./;
            try {
              '/./'[t](e);
            } catch (n) {
              try {
                return (e[r] = !1), '/./'[t](e);
              } catch (t) {}
            }
            return !1;
          };
        },
        8544: (t, e, n) => {
          var r = n(7293);
          t.exports = !r(function () {
            function t() {}
            return (
              (t.prototype.constructor = null),
              Object.getPrototypeOf(new t()) !== t.prototype
            );
          });
        },
        6178: (t) => {
          t.exports = function (t, e) {
            return {
              value: t,
              done: e,
            };
          };
        },
        8880: (t, e, n) => {
          var r = n(9781),
            o = n(3070),
            i = n(9114);
          t.exports = r
            ? function (t, e, n) {
                return o.f(t, e, i(1, n));
              }
            : function (t, e, n) {
                return (t[e] = n), t;
              };
        },
        9114: (t) => {
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          };
        },
        6135: (t, e, n) => {
          'use strict';
          var r = n(4948),
            o = n(3070),
            i = n(9114);
          t.exports = function (t, e, n) {
            var a = r(e);
            a in t ? o.f(t, a, i(0, n)) : (t[a] = n);
          };
        },
        7045: (t, e, n) => {
          var r = n(6339),
            o = n(3070);
          t.exports = function (t, e, n) {
            return (
              n.get &&
                r(n.get, e, {
                  getter: !0,
                }),
              n.set &&
                r(n.set, e, {
                  setter: !0,
                }),
              o.f(t, e, n)
            );
          };
        },
        8052: (t, e, n) => {
          var r = n(614),
            o = n(3070),
            i = n(6339),
            a = n(3072);
          t.exports = function (t, e, n, s) {
            s || (s = {});
            var u = s.enumerable,
              c = void 0 !== s.name ? s.name : e;
            if ((r(n) && i(n, c, s), s.global)) u ? (t[e] = n) : a(e, n);
            else {
              try {
                s.unsafe ? t[e] && (u = !0) : delete t[e];
              } catch (t) {}
              u
                ? (t[e] = n)
                : o.f(t, e, {
                    value: n,
                    enumerable: !1,
                    configurable: !s.nonConfigurable,
                    writable: !s.nonWritable,
                  });
            }
            return t;
          };
        },
        3072: (t, e, n) => {
          var r = n(7854),
            o = Object.defineProperty;
          t.exports = function (t, e) {
            try {
              o(r, t, {
                value: e,
                configurable: !0,
                writable: !0,
              });
            } catch (n) {
              r[t] = e;
            }
            return e;
          };
        },
        9781: (t, e, n) => {
          var r = n(7293);
          t.exports = !r(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        4154: (t) => {
          var e = 'object' == typeof document && document.all,
            n = void 0 === e && void 0 !== e;
          t.exports = {
            all: e,
            IS_HTMLDDA: n,
          };
        },
        317: (t, e, n) => {
          var r = n(7854),
            o = n(111),
            i = r.document,
            a = o(i) && o(i.createElement);
          t.exports = function (t) {
            return a ? i.createElement(t) : {};
          };
        },
        7207: (t) => {
          var e = TypeError;
          t.exports = function (t) {
            if (t > 9007199254740991) throw e('Maximum allowed index exceeded');
            return t;
          };
        },
        8324: (t) => {
          t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        },
        8509: (t, e, n) => {
          var r = n(317)('span').classList,
            o = r && r.constructor && r.constructor.prototype;
          t.exports = o === Object.prototype ? void 0 : o;
        },
        7871: (t, e, n) => {
          var r = n(3823),
            o = n(5268);
          t.exports =
            !r &&
            !o &&
            'object' == typeof window &&
            'object' == typeof document;
        },
        9363: (t) => {
          t.exports =
            'function' == typeof Bun && Bun && 'string' == typeof Bun.version;
        },
        3823: (t) => {
          t.exports =
            'object' == typeof Deno && Deno && 'object' == typeof Deno.version;
        },
        1528: (t, e, n) => {
          var r = n(8113);
          t.exports =
            /ipad|iphone|ipod/i.test(r) && 'undefined' != typeof Pebble;
        },
        6833: (t, e, n) => {
          var r = n(8113);
          t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
        },
        5268: (t, e, n) => {
          var r = n(4155),
            o = n(4326);
          t.exports = void 0 !== r && 'process' == o(r);
        },
        1036: (t, e, n) => {
          var r = n(8113);
          t.exports = /web0s(?!.*chrome)/i.test(r);
        },
        8113: (t) => {
          t.exports =
            ('undefined' != typeof navigator && String(navigator.userAgent)) ||
            '';
        },
        7392: (t, e, n) => {
          var r,
            o,
            i = n(7854),
            a = n(8113),
            s = i.process,
            u = i.Deno,
            c = (s && s.versions) || (u && u.version),
            l = c && c.v8;
          l && (o = (r = l.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
            !o &&
              a &&
              (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
              (r = a.match(/Chrome\/(\d+)/)) &&
              (o = +r[1]),
            (t.exports = o);
        },
        748: (t) => {
          t.exports = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
          ];
        },
        2109: (t, e, n) => {
          var r = n(7854),
            o = n(1236).f,
            i = n(8880),
            a = n(8052),
            s = n(3072),
            u = n(9920),
            c = n(4705);
          t.exports = function (t, e) {
            var n,
              l,
              f,
              p,
              d,
              h = t.target,
              v = t.global,
              g = t.stat;
            if ((n = v ? r : g ? r[h] || s(h, {}) : (r[h] || {}).prototype))
              for (l in e) {
                if (
                  ((p = e[l]),
                  (f = t.dontCallGetSet ? (d = o(n, l)) && d.value : n[l]),
                  !c(v ? l : h + (g ? '.' : '#') + l, t.forced) && void 0 !== f)
                ) {
                  if (typeof p == typeof f) continue;
                  u(p, f);
                }
                (t.sham || (f && f.sham)) && i(p, 'sham', !0), a(n, l, p, t);
              }
          };
        },
        7293: (t) => {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        2104: (t, e, n) => {
          var r = n(4374),
            o = Function.prototype,
            i = o.apply,
            a = o.call;
          t.exports =
            ('object' == typeof Reflect && Reflect.apply) ||
            (r
              ? a.bind(i)
              : function () {
                  return a.apply(i, arguments);
                });
        },
        9974: (t, e, n) => {
          var r = n(1470),
            o = n(9662),
            i = n(4374),
            a = r(r.bind);
          t.exports = function (t, e) {
            return (
              o(t),
              void 0 === e
                ? t
                : i
                ? a(t, e)
                : function () {
                    return t.apply(e, arguments);
                  }
            );
          };
        },
        4374: (t, e, n) => {
          var r = n(7293);
          t.exports = !r(function () {
            var t = function () {}.bind();
            return 'function' != typeof t || t.hasOwnProperty('prototype');
          });
        },
        6916: (t, e, n) => {
          var r = n(4374),
            o = Function.prototype.call;
          t.exports = r
            ? o.bind(o)
            : function () {
                return o.apply(o, arguments);
              };
        },
        6530: (t, e, n) => {
          var r = n(9781),
            o = n(2597),
            i = Function.prototype,
            a = r && Object.getOwnPropertyDescriptor,
            s = o(i, 'name'),
            u = s && 'something' === function () {}.name,
            c = s && (!r || (r && a(i, 'name').configurable));
          t.exports = {
            EXISTS: s,
            PROPER: u,
            CONFIGURABLE: c,
          };
        },
        5668: (t, e, n) => {
          var r = n(1702),
            o = n(9662);
          t.exports = function (t, e, n) {
            try {
              return r(o(Object.getOwnPropertyDescriptor(t, e)[n]));
            } catch (t) {}
          };
        },
        1470: (t, e, n) => {
          var r = n(4326),
            o = n(1702);
          t.exports = function (t) {
            if ('Function' === r(t)) return o(t);
          };
        },
        1702: (t, e, n) => {
          var r = n(4374),
            o = Function.prototype,
            i = o.call,
            a = r && o.bind.bind(i, i);
          t.exports = r
            ? a
            : function (t) {
                return function () {
                  return i.apply(t, arguments);
                };
              };
        },
        5005: (t, e, n) => {
          var r = n(7854),
            o = n(614);
          t.exports = function (t, e) {
            return arguments.length < 2
              ? ((n = r[t]), o(n) ? n : void 0)
              : r[t] && r[t][e];
            var n;
          };
        },
        1246: (t, e, n) => {
          var r = n(648),
            o = n(8173),
            i = n(8554),
            a = n(7497),
            s = n(5112)('iterator');
          t.exports = function (t) {
            if (!i(t)) return o(t, s) || o(t, '@@iterator') || a[r(t)];
          };
        },
        4121: (t, e, n) => {
          var r = n(6916),
            o = n(9662),
            i = n(9670),
            a = n(6330),
            s = n(1246),
            u = TypeError;
          t.exports = function (t, e) {
            var n = arguments.length < 2 ? s(t) : e;
            if (o(n)) return i(r(n, t));
            throw u(a(t) + ' is not iterable');
          };
        },
        8044: (t, e, n) => {
          var r = n(1702),
            o = n(3157),
            i = n(614),
            a = n(4326),
            s = n(1340),
            u = r([].push);
          t.exports = function (t) {
            if (i(t)) return t;
            if (o(t)) {
              for (var e = t.length, n = [], r = 0; r < e; r++) {
                var c = t[r];
                'string' == typeof c
                  ? u(n, c)
                  : ('number' != typeof c &&
                      'Number' != a(c) &&
                      'String' != a(c)) ||
                    u(n, s(c));
              }
              var l = n.length,
                f = !0;
              return function (t, e) {
                if (f) return (f = !1), e;
                if (o(this)) return e;
                for (var r = 0; r < l; r++) if (n[r] === t) return e;
              };
            }
          };
        },
        8173: (t, e, n) => {
          var r = n(9662),
            o = n(8554);
          t.exports = function (t, e) {
            var n = t[e];
            return o(n) ? void 0 : r(n);
          };
        },
        7854: (t, e, n) => {
          var r = function (t) {
            return t && t.Math == Math && t;
          };
          t.exports =
            r('object' == typeof globalThis && globalThis) ||
            r('object' == typeof window && window) ||
            r('object' == typeof self && self) ||
            r('object' == typeof n.g && n.g) ||
            (function () {
              return this;
            })() ||
            Function('return this')();
        },
        2597: (t, e, n) => {
          var r = n(1702),
            o = n(7908),
            i = r({}.hasOwnProperty);
          t.exports =
            Object.hasOwn ||
            function (t, e) {
              return i(o(t), e);
            };
        },
        3501: (t) => {
          t.exports = {};
        },
        842: (t, e, n) => {
          var r = n(5108);
          t.exports = function (t, e) {
            try {
              1 == arguments.length ? r.error(t) : r.error(t, e);
            } catch (t) {}
          };
        },
        490: (t, e, n) => {
          var r = n(5005);
          t.exports = r('document', 'documentElement');
        },
        4664: (t, e, n) => {
          var r = n(9781),
            o = n(7293),
            i = n(317);
          t.exports =
            !r &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i('div'), 'a', {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        8361: (t, e, n) => {
          var r = n(1702),
            o = n(7293),
            i = n(4326),
            a = Object,
            s = r(''.split);
          t.exports = o(function () {
            return !a('z').propertyIsEnumerable(0);
          })
            ? function (t) {
                return 'String' == i(t) ? s(t, '') : a(t);
              }
            : a;
        },
        2788: (t, e, n) => {
          var r = n(1702),
            o = n(614),
            i = n(5465),
            a = r(Function.toString);
          o(i.inspectSource) ||
            (i.inspectSource = function (t) {
              return a(t);
            }),
            (t.exports = i.inspectSource);
        },
        9909: (t, e, n) => {
          var r,
            o,
            i,
            a = n(4811),
            s = n(7854),
            u = n(111),
            c = n(8880),
            l = n(2597),
            f = n(5465),
            p = n(6200),
            d = n(3501),
            h = 'Object already initialized',
            v = s.TypeError,
            g = s.WeakMap;
          if (a || f.state) {
            var m = f.state || (f.state = new g());
            (m.get = m.get),
              (m.has = m.has),
              (m.set = m.set),
              (r = function (t, e) {
                if (m.has(t)) throw v(h);
                return (e.facade = t), m.set(t, e), e;
              }),
              (o = function (t) {
                return m.get(t) || {};
              }),
              (i = function (t) {
                return m.has(t);
              });
          } else {
            var y = p('state');
            (d[y] = !0),
              (r = function (t, e) {
                if (l(t, y)) throw v(h);
                return (e.facade = t), c(t, y, e), e;
              }),
              (o = function (t) {
                return l(t, y) ? t[y] : {};
              }),
              (i = function (t) {
                return l(t, y);
              });
          }
          t.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (t) {
              return i(t) ? o(t) : r(t, {});
            },
            getterFor: function (t) {
              return function (e) {
                var n;
                if (!u(e) || (n = o(e)).type !== t)
                  throw v('Incompatible receiver, ' + t + ' required');
                return n;
              };
            },
          };
        },
        7659: (t, e, n) => {
          var r = n(5112),
            o = n(7497),
            i = r('iterator'),
            a = Array.prototype;
          t.exports = function (t) {
            return void 0 !== t && (o.Array === t || a[i] === t);
          };
        },
        3157: (t, e, n) => {
          var r = n(4326);
          t.exports =
            Array.isArray ||
            function (t) {
              return 'Array' == r(t);
            };
        },
        614: (t, e, n) => {
          var r = n(4154),
            o = r.all;
          t.exports = r.IS_HTMLDDA
            ? function (t) {
                return 'function' == typeof t || t === o;
              }
            : function (t) {
                return 'function' == typeof t;
              };
        },
        4411: (t, e, n) => {
          var r = n(1702),
            o = n(7293),
            i = n(614),
            a = n(648),
            s = n(5005),
            u = n(2788),
            c = function () {},
            l = [],
            f = s('Reflect', 'construct'),
            p = /^\s*(?:class|function)\b/,
            d = r(p.exec),
            h = !p.exec(c),
            v = function (t) {
              if (!i(t)) return !1;
              try {
                return f(c, l, t), !0;
              } catch (t) {
                return !1;
              }
            },
            g = function (t) {
              if (!i(t)) return !1;
              switch (a(t)) {
                case 'AsyncFunction':
                case 'GeneratorFunction':
                case 'AsyncGeneratorFunction':
                  return !1;
              }
              try {
                return h || !!d(p, u(t));
              } catch (t) {
                return !0;
              }
            };
          (g.sham = !0),
            (t.exports =
              !f ||
              o(function () {
                var t;
                return (
                  v(v.call) ||
                  !v(Object) ||
                  !v(function () {
                    t = !0;
                  }) ||
                  t
                );
              })
                ? g
                : v);
        },
        4705: (t, e, n) => {
          var r = n(7293),
            o = n(614),
            i = /#|\.prototype\./,
            a = function (t, e) {
              var n = u[s(t)];
              return n == l || (n != c && (o(e) ? r(e) : !!e));
            },
            s = (a.normalize = function (t) {
              return String(t).replace(i, '.').toLowerCase();
            }),
            u = (a.data = {}),
            c = (a.NATIVE = 'N'),
            l = (a.POLYFILL = 'P');
          t.exports = a;
        },
        8554: (t) => {
          t.exports = function (t) {
            return null == t;
          };
        },
        111: (t, e, n) => {
          var r = n(614),
            o = n(4154),
            i = o.all;
          t.exports = o.IS_HTMLDDA
            ? function (t) {
                return 'object' == typeof t ? null !== t : r(t) || t === i;
              }
            : function (t) {
                return 'object' == typeof t ? null !== t : r(t);
              };
        },
        1913: (t) => {
          t.exports = !1;
        },
        7850: (t, e, n) => {
          var r = n(111),
            o = n(4326),
            i = n(5112)('match');
          t.exports = function (t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : 'RegExp' == o(t));
          };
        },
        2190: (t, e, n) => {
          var r = n(5005),
            o = n(614),
            i = n(7976),
            a = n(3307),
            s = Object;
          t.exports = a
            ? function (t) {
                return 'symbol' == typeof t;
              }
            : function (t) {
                var e = r('Symbol');
                return o(e) && i(e.prototype, s(t));
              };
        },
        408: (t, e, n) => {
          var r = n(9974),
            o = n(6916),
            i = n(9670),
            a = n(6330),
            s = n(7659),
            u = n(6244),
            c = n(7976),
            l = n(4121),
            f = n(1246),
            p = n(9212),
            d = TypeError,
            h = function (t, e) {
              (this.stopped = t), (this.result = e);
            },
            v = h.prototype;
          t.exports = function (t, e, n) {
            var g,
              m,
              y,
              b,
              x,
              w,
              E,
              S = n && n.that,
              O = !(!n || !n.AS_ENTRIES),
              A = !(!n || !n.IS_RECORD),
              C = !(!n || !n.IS_ITERATOR),
              M = !(!n || !n.INTERRUPTED),
              D = r(e, S),
              P = function (t) {
                return g && p(g, 'normal', t), new h(!0, t);
              },
              j = function (t) {
                return O
                  ? (i(t), M ? D(t[0], t[1], P) : D(t[0], t[1]))
                  : M
                  ? D(t, P)
                  : D(t);
              };
            if (A) g = t.iterator;
            else if (C) g = t;
            else {
              if (!(m = f(t))) throw d(a(t) + ' is not iterable');
              if (s(m)) {
                for (y = 0, b = u(t); b > y; y++)
                  if ((x = j(t[y])) && c(v, x)) return x;
                return new h(!1);
              }
              g = l(t, m);
            }
            for (w = A ? t.next : g.next; !(E = o(w, g)).done; ) {
              try {
                x = j(E.value);
              } catch (t) {
                p(g, 'throw', t);
              }
              if ('object' == typeof x && x && c(v, x)) return x;
            }
            return new h(!1);
          };
        },
        9212: (t, e, n) => {
          var r = n(6916),
            o = n(9670),
            i = n(8173);
          t.exports = function (t, e, n) {
            var a, s;
            o(t);
            try {
              if (!(a = i(t, 'return'))) {
                if ('throw' === e) throw n;
                return n;
              }
              a = r(a, t);
            } catch (t) {
              (s = !0), (a = t);
            }
            if ('throw' === e) throw n;
            if (s) throw a;
            return o(a), n;
          };
        },
        3061: (t, e, n) => {
          'use strict';
          var r = n(3383).IteratorPrototype,
            o = n(30),
            i = n(9114),
            a = n(8003),
            s = n(7497),
            u = function () {
              return this;
            };
          t.exports = function (t, e, n, c) {
            var l = e + ' Iterator';
            return (
              (t.prototype = o(r, {
                next: i(+!c, n),
              })),
              a(t, l, !1, !0),
              (s[l] = u),
              t
            );
          };
        },
        1656: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(6916),
            i = n(1913),
            a = n(6530),
            s = n(614),
            u = n(3061),
            c = n(9518),
            l = n(7674),
            f = n(8003),
            p = n(8880),
            d = n(8052),
            h = n(5112),
            v = n(7497),
            g = n(3383),
            m = a.PROPER,
            y = a.CONFIGURABLE,
            b = g.IteratorPrototype,
            x = g.BUGGY_SAFARI_ITERATORS,
            w = h('iterator'),
            E = 'keys',
            S = 'values',
            O = 'entries',
            A = function () {
              return this;
            };
          t.exports = function (t, e, n, a, h, g, C) {
            u(n, e, a);
            var M,
              D,
              P,
              j = function (t) {
                if (t === h && I) return I;
                if (!x && t in k) return k[t];
                switch (t) {
                  case E:
                  case S:
                  case O:
                    return function () {
                      return new n(this, t);
                    };
                }
                return function () {
                  return new n(this);
                };
              },
              T = e + ' Iterator',
              R = !1,
              k = t.prototype,
              B = k[w] || k['@@iterator'] || (h && k[h]),
              I = (!x && B) || j(h),
              _ = ('Array' == e && k.entries) || B;
            if (
              (_ &&
                (M = c(_.call(new t()))) !== Object.prototype &&
                M.next &&
                (i || c(M) === b || (l ? l(M, b) : s(M[w]) || d(M, w, A)),
                f(M, T, !0, !0),
                i && (v[T] = A)),
              m &&
                h == S &&
                B &&
                B.name !== S &&
                (!i && y
                  ? p(k, 'name', S)
                  : ((R = !0),
                    (I = function () {
                      return o(B, this);
                    }))),
              h)
            )
              if (
                ((D = {
                  values: j(S),
                  keys: g ? I : j(E),
                  entries: j(O),
                }),
                C)
              )
                for (P in D) (x || R || !(P in k)) && d(k, P, D[P]);
              else
                r(
                  {
                    target: e,
                    proto: !0,
                    forced: x || R,
                  },
                  D
                );
            return (
              (i && !C) ||
                k[w] === I ||
                d(k, w, I, {
                  name: h,
                }),
              (v[e] = I),
              D
            );
          };
        },
        3383: (t, e, n) => {
          'use strict';
          var r,
            o,
            i,
            a = n(7293),
            s = n(614),
            u = n(111),
            c = n(30),
            l = n(9518),
            f = n(8052),
            p = n(5112),
            d = n(1913),
            h = p('iterator'),
            v = !1;
          [].keys &&
            ('next' in (i = [].keys())
              ? (o = l(l(i))) !== Object.prototype && (r = o)
              : (v = !0)),
            !u(r) ||
            a(function () {
              var t = {};
              return r[h].call(t) !== t;
            })
              ? (r = {})
              : d && (r = c(r)),
            s(r[h]) ||
              f(r, h, function () {
                return this;
              }),
            (t.exports = {
              IteratorPrototype: r,
              BUGGY_SAFARI_ITERATORS: v,
            });
        },
        7497: (t) => {
          t.exports = {};
        },
        6244: (t, e, n) => {
          var r = n(7466);
          t.exports = function (t) {
            return r(t.length);
          };
        },
        6339: (t, e, n) => {
          var r = n(1702),
            o = n(7293),
            i = n(614),
            a = n(2597),
            s = n(9781),
            u = n(6530).CONFIGURABLE,
            c = n(2788),
            l = n(9909),
            f = l.enforce,
            p = l.get,
            d = String,
            h = Object.defineProperty,
            v = r(''.slice),
            g = r(''.replace),
            m = r([].join),
            y =
              s &&
              !o(function () {
                return (
                  8 !==
                  h(function () {}, 'length', {
                    value: 8,
                  }).length
                );
              }),
            b = String(String).split('String'),
            x = (t.exports = function (t, e, n) {
              'Symbol(' === v(d(e), 0, 7) &&
                (e = '[' + g(d(e), /^Symbol\(([^)]*)\)/, '$1') + ']'),
                n && n.getter && (e = 'get ' + e),
                n && n.setter && (e = 'set ' + e),
                (!a(t, 'name') || (u && t.name !== e)) &&
                  (s
                    ? h(t, 'name', {
                        value: e,
                        configurable: !0,
                      })
                    : (t.name = e)),
                y &&
                  n &&
                  a(n, 'arity') &&
                  t.length !== n.arity &&
                  h(t, 'length', {
                    value: n.arity,
                  });
              try {
                n && a(n, 'constructor') && n.constructor
                  ? s &&
                    h(t, 'prototype', {
                      writable: !1,
                    })
                  : t.prototype && (t.prototype = void 0);
              } catch (t) {}
              var r = f(t);
              return (
                a(r, 'source') ||
                  (r.source = m(b, 'string' == typeof e ? e : '')),
                t
              );
            });
          Function.prototype.toString = x(function () {
            return (i(this) && p(this).source) || c(this);
          }, 'toString');
        },
        4758: (t) => {
          var e = Math.ceil,
            n = Math.floor;
          t.exports =
            Math.trunc ||
            function (t) {
              var r = +t;
              return (r > 0 ? n : e)(r);
            };
        },
        5948: (t, e, n) => {
          var r,
            o,
            i,
            a,
            s,
            u = n(7854),
            c = n(9974),
            l = n(1236).f,
            f = n(261).set,
            p = n(8572),
            d = n(6833),
            h = n(1528),
            v = n(1036),
            g = n(5268),
            m = u.MutationObserver || u.WebKitMutationObserver,
            y = u.document,
            b = u.process,
            x = u.Promise,
            w = l(u, 'queueMicrotask'),
            E = w && w.value;
          if (!E) {
            var S = new p(),
              O = function () {
                var t, e;
                for (g && (t = b.domain) && t.exit(); (e = S.get()); )
                  try {
                    e();
                  } catch (t) {
                    throw (S.head && r(), t);
                  }
                t && t.enter();
              };
            d || g || v || !m || !y
              ? !h && x && x.resolve
                ? (((a = x.resolve(void 0)).constructor = x),
                  (s = c(a.then, a)),
                  (r = function () {
                    s(O);
                  }))
                : g
                ? (r = function () {
                    b.nextTick(O);
                  })
                : ((f = c(f, u)),
                  (r = function () {
                    f(O);
                  }))
              : ((o = !0),
                (i = y.createTextNode('')),
                new m(O).observe(i, {
                  characterData: !0,
                }),
                (r = function () {
                  i.data = o = !o;
                })),
              (E = function (t) {
                S.head || r(), S.add(t);
              });
          }
          t.exports = E;
        },
        8523: (t, e, n) => {
          'use strict';
          var r = n(9662),
            o = TypeError,
            i = function (t) {
              var e, n;
              (this.promise = new t(function (t, r) {
                if (void 0 !== e || void 0 !== n)
                  throw o('Bad Promise constructor');
                (e = t), (n = r);
              })),
                (this.resolve = r(e)),
                (this.reject = r(n));
            };
          t.exports.f = function (t) {
            return new i(t);
          };
        },
        3929: (t, e, n) => {
          var r = n(7850),
            o = TypeError;
          t.exports = function (t) {
            if (r(t)) throw o("The method doesn't accept regular expressions");
            return t;
          };
        },
        1574: (t, e, n) => {
          'use strict';
          var r = n(9781),
            o = n(1702),
            i = n(6916),
            a = n(7293),
            s = n(1956),
            u = n(5181),
            c = n(5296),
            l = n(7908),
            f = n(8361),
            p = Object.assign,
            d = Object.defineProperty,
            h = o([].concat);
          t.exports =
            !p ||
            a(function () {
              if (
                r &&
                1 !==
                  p(
                    {
                      b: 1,
                    },
                    p(
                      d({}, 'a', {
                        enumerable: !0,
                        get: function () {
                          d(this, 'b', {
                            value: 3,
                            enumerable: !1,
                          });
                        },
                      }),
                      {
                        b: 2,
                      }
                    )
                  ).b
              )
                return !0;
              var t = {},
                e = {},
                n = Symbol(),
                o = 'abcdefghijklmnopqrst';
              return (
                (t[n] = 7),
                o.split('').forEach(function (t) {
                  e[t] = t;
                }),
                7 != p({}, t)[n] || s(p({}, e)).join('') != o
              );
            })
              ? function (t, e) {
                  for (
                    var n = l(t), o = arguments.length, a = 1, p = u.f, d = c.f;
                    o > a;

                  )
                    for (
                      var v,
                        g = f(arguments[a++]),
                        m = p ? h(s(g), p(g)) : s(g),
                        y = m.length,
                        b = 0;
                      y > b;

                    )
                      (v = m[b++]), (r && !i(d, g, v)) || (n[v] = g[v]);
                  return n;
                }
              : p;
        },
        30: (t, e, n) => {
          var r,
            o = n(9670),
            i = n(6048),
            a = n(748),
            s = n(3501),
            u = n(490),
            c = n(317),
            l = n(6200),
            f = 'prototype',
            p = 'script',
            d = l('IE_PROTO'),
            h = function () {},
            v = function (t) {
              return '<' + p + '>' + t + '</' + p + '>';
            },
            g = function (t) {
              t.write(v('')), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            },
            m = function () {
              try {
                r = new ActiveXObject('htmlfile');
              } catch (t) {}
              var t, e, n;
              m =
                'undefined' != typeof document
                  ? document.domain && r
                    ? g(r)
                    : ((e = c('iframe')),
                      (n = 'java' + p + ':'),
                      (e.style.display = 'none'),
                      u.appendChild(e),
                      (e.src = String(n)),
                      (t = e.contentWindow.document).open(),
                      t.write(v('document.F=Object')),
                      t.close(),
                      t.F)
                  : g(r);
              for (var o = a.length; o--; ) delete m[f][a[o]];
              return m();
            };
          (s[d] = !0),
            (t.exports =
              Object.create ||
              function (t, e) {
                var n;
                return (
                  null !== t
                    ? ((h[f] = o(t)), (n = new h()), (h[f] = null), (n[d] = t))
                    : (n = m()),
                  void 0 === e ? n : i.f(n, e)
                );
              });
        },
        6048: (t, e, n) => {
          var r = n(9781),
            o = n(3353),
            i = n(3070),
            a = n(9670),
            s = n(5656),
            u = n(1956);
          e.f =
            r && !o
              ? Object.defineProperties
              : function (t, e) {
                  a(t);
                  for (var n, r = s(e), o = u(e), c = o.length, l = 0; c > l; )
                    i.f(t, (n = o[l++]), r[n]);
                  return t;
                };
        },
        3070: (t, e, n) => {
          var r = n(9781),
            o = n(4664),
            i = n(3353),
            a = n(9670),
            s = n(4948),
            u = TypeError,
            c = Object.defineProperty,
            l = Object.getOwnPropertyDescriptor,
            f = 'enumerable',
            p = 'configurable',
            d = 'writable';
          e.f = r
            ? i
              ? function (t, e, n) {
                  if (
                    (a(t),
                    (e = s(e)),
                    a(n),
                    'function' == typeof t &&
                      'prototype' === e &&
                      'value' in n &&
                      d in n &&
                      !n[d])
                  ) {
                    var r = l(t, e);
                    r &&
                      r[d] &&
                      ((t[e] = n.value),
                      (n = {
                        configurable: p in n ? n[p] : r[p],
                        enumerable: f in n ? n[f] : r[f],
                        writable: !1,
                      }));
                  }
                  return c(t, e, n);
                }
              : c
            : function (t, e, n) {
                if ((a(t), (e = s(e)), a(n), o))
                  try {
                    return c(t, e, n);
                  } catch (t) {}
                if ('get' in n || 'set' in n)
                  throw u('Accessors not supported');
                return 'value' in n && (t[e] = n.value), t;
              };
        },
        1236: (t, e, n) => {
          var r = n(9781),
            o = n(6916),
            i = n(5296),
            a = n(9114),
            s = n(5656),
            u = n(4948),
            c = n(2597),
            l = n(4664),
            f = Object.getOwnPropertyDescriptor;
          e.f = r
            ? f
            : function (t, e) {
                if (((t = s(t)), (e = u(e)), l))
                  try {
                    return f(t, e);
                  } catch (t) {}
                if (c(t, e)) return a(!o(i.f, t, e), t[e]);
              };
        },
        1156: (t, e, n) => {
          var r = n(4326),
            o = n(5656),
            i = n(8006).f,
            a = n(1589),
            s =
              'object' == typeof window && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : [];
          t.exports.f = function (t) {
            return s && 'Window' == r(t)
              ? (function (t) {
                  try {
                    return i(t);
                  } catch (t) {
                    return a(s);
                  }
                })(t)
              : i(o(t));
          };
        },
        8006: (t, e, n) => {
          var r = n(6324),
            o = n(748).concat('length', 'prototype');
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return r(t, o);
            };
        },
        5181: (t, e) => {
          e.f = Object.getOwnPropertySymbols;
        },
        9518: (t, e, n) => {
          var r = n(2597),
            o = n(614),
            i = n(7908),
            a = n(6200),
            s = n(8544),
            u = a('IE_PROTO'),
            c = Object,
            l = c.prototype;
          t.exports = s
            ? c.getPrototypeOf
            : function (t) {
                var e = i(t);
                if (r(e, u)) return e[u];
                var n = e.constructor;
                return o(n) && e instanceof n
                  ? n.prototype
                  : e instanceof c
                  ? l
                  : null;
              };
        },
        7976: (t, e, n) => {
          var r = n(1702);
          t.exports = r({}.isPrototypeOf);
        },
        6324: (t, e, n) => {
          var r = n(1702),
            o = n(2597),
            i = n(5656),
            a = n(1318).indexOf,
            s = n(3501),
            u = r([].push);
          t.exports = function (t, e) {
            var n,
              r = i(t),
              c = 0,
              l = [];
            for (n in r) !o(s, n) && o(r, n) && u(l, n);
            for (; e.length > c; ) o(r, (n = e[c++])) && (~a(l, n) || u(l, n));
            return l;
          };
        },
        1956: (t, e, n) => {
          var r = n(6324),
            o = n(748);
          t.exports =
            Object.keys ||
            function (t) {
              return r(t, o);
            };
        },
        5296: (t, e) => {
          'use strict';
          var n = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            o =
              r &&
              !n.call(
                {
                  1: 2,
                },
                1
              );
          e.f = o
            ? function (t) {
                var e = r(this, t);
                return !!e && e.enumerable;
              }
            : n;
        },
        7674: (t, e, n) => {
          var r = n(5668),
            o = n(9670),
            i = n(6077);
          t.exports =
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function () {
                  var t,
                    e = !1,
                    n = {};
                  try {
                    (t = r(Object.prototype, '__proto__', 'set'))(n, []),
                      (e = n instanceof Array);
                  } catch (t) {}
                  return function (n, r) {
                    return o(n), i(r), e ? t(n, r) : (n.__proto__ = r), n;
                  };
                })()
              : void 0);
        },
        288: (t, e, n) => {
          'use strict';
          var r = n(1694),
            o = n(648);
          t.exports = r
            ? {}.toString
            : function () {
                return '[object ' + o(this) + ']';
              };
        },
        2140: (t, e, n) => {
          var r = n(6916),
            o = n(614),
            i = n(111),
            a = TypeError;
          t.exports = function (t, e) {
            var n, s;
            if ('string' === e && o((n = t.toString)) && !i((s = r(n, t))))
              return s;
            if (o((n = t.valueOf)) && !i((s = r(n, t)))) return s;
            if ('string' !== e && o((n = t.toString)) && !i((s = r(n, t))))
              return s;
            throw a("Can't convert object to primitive value");
          };
        },
        3887: (t, e, n) => {
          var r = n(5005),
            o = n(1702),
            i = n(8006),
            a = n(5181),
            s = n(9670),
            u = o([].concat);
          t.exports =
            r('Reflect', 'ownKeys') ||
            function (t) {
              var e = i.f(s(t)),
                n = a.f;
              return n ? u(e, n(t)) : e;
            };
        },
        857: (t, e, n) => {
          var r = n(7854);
          t.exports = r;
        },
        2534: (t) => {
          t.exports = function (t) {
            try {
              return {
                error: !1,
                value: t(),
              };
            } catch (t) {
              return {
                error: !0,
                value: t,
              };
            }
          };
        },
        3702: (t, e, n) => {
          var r = n(7854),
            o = n(2492),
            i = n(614),
            a = n(4705),
            s = n(2788),
            u = n(5112),
            c = n(7871),
            l = n(3823),
            f = n(1913),
            p = n(7392),
            d = o && o.prototype,
            h = u('species'),
            v = !1,
            g = i(r.PromiseRejectionEvent),
            m = a('Promise', function () {
              var t = s(o),
                e = t !== String(o);
              if (!e && 66 === p) return !0;
              if (f && (!d.catch || !d.finally)) return !0;
              if (!p || p < 51 || !/native code/.test(t)) {
                var n = new o(function (t) {
                    t(1);
                  }),
                  r = function (t) {
                    t(
                      function () {},
                      function () {}
                    );
                  };
                if (
                  (((n.constructor = {})[h] = r),
                  !(v = n.then(function () {}) instanceof r))
                )
                  return !0;
              }
              return !e && (c || l) && !g;
            });
          t.exports = {
            CONSTRUCTOR: m,
            REJECTION_EVENT: g,
            SUBCLASSING: v,
          };
        },
        2492: (t, e, n) => {
          var r = n(7854);
          t.exports = r.Promise;
        },
        9478: (t, e, n) => {
          var r = n(9670),
            o = n(111),
            i = n(8523);
          t.exports = function (t, e) {
            if ((r(t), o(e) && e.constructor === t)) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise;
          };
        },
        612: (t, e, n) => {
          var r = n(2492),
            o = n(7072),
            i = n(3702).CONSTRUCTOR;
          t.exports =
            i ||
            !o(function (t) {
              r.all(t).then(void 0, function () {});
            });
        },
        8572: (t) => {
          var e = function () {
            (this.head = null), (this.tail = null);
          };
          (e.prototype = {
            add: function (t) {
              var e = {
                  item: t,
                  next: null,
                },
                n = this.tail;
              n ? (n.next = e) : (this.head = e), (this.tail = e);
            },
            get: function () {
              var t = this.head;
              if (t)
                return (
                  null === (this.head = t.next) && (this.tail = null), t.item
                );
            },
          }),
            (t.exports = e);
        },
        2261: (t, e, n) => {
          'use strict';
          var r,
            o,
            i = n(6916),
            a = n(1702),
            s = n(1340),
            u = n(7066),
            c = n(2999),
            l = n(2309),
            f = n(30),
            p = n(9909).get,
            d = n(9441),
            h = n(7168),
            v = l('native-string-replace', String.prototype.replace),
            g = RegExp.prototype.exec,
            m = g,
            y = a(''.charAt),
            b = a(''.indexOf),
            x = a(''.replace),
            w = a(''.slice),
            E =
              ((o = /b*/g),
              i(g, (r = /a/), 'a'),
              i(g, o, 'a'),
              0 !== r.lastIndex || 0 !== o.lastIndex),
            S = c.BROKEN_CARET,
            O = void 0 !== /()??/.exec('')[1];
          (E || O || S || d || h) &&
            (m = function (t) {
              var e,
                n,
                r,
                o,
                a,
                c,
                l,
                d = this,
                h = p(d),
                A = s(t),
                C = h.raw;
              if (C)
                return (
                  (C.lastIndex = d.lastIndex),
                  (e = i(m, C, A)),
                  (d.lastIndex = C.lastIndex),
                  e
                );
              var M = h.groups,
                D = S && d.sticky,
                P = i(u, d),
                j = d.source,
                T = 0,
                R = A;
              if (
                (D &&
                  ((P = x(P, 'y', '')),
                  -1 === b(P, 'g') && (P += 'g'),
                  (R = w(A, d.lastIndex)),
                  d.lastIndex > 0 &&
                    (!d.multiline ||
                      (d.multiline && '\n' !== y(A, d.lastIndex - 1))) &&
                    ((j = '(?: ' + j + ')'), (R = ' ' + R), T++),
                  (n = new RegExp('^(?:' + j + ')', P))),
                O && (n = new RegExp('^' + j + '$(?!\\s)', P)),
                E && (r = d.lastIndex),
                (o = i(g, D ? n : d, R)),
                D
                  ? o
                    ? ((o.input = w(o.input, T)),
                      (o[0] = w(o[0], T)),
                      (o.index = d.lastIndex),
                      (d.lastIndex += o[0].length))
                    : (d.lastIndex = 0)
                  : E &&
                    o &&
                    (d.lastIndex = d.global ? o.index + o[0].length : r),
                O &&
                  o &&
                  o.length > 1 &&
                  i(v, o[0], n, function () {
                    for (a = 1; a < arguments.length - 2; a++)
                      void 0 === arguments[a] && (o[a] = void 0);
                  }),
                o && M)
              )
                for (o.groups = c = f(null), a = 0; a < M.length; a++)
                  c[(l = M[a])[0]] = o[l[1]];
              return o;
            }),
            (t.exports = m);
        },
        7066: (t, e, n) => {
          'use strict';
          var r = n(9670);
          t.exports = function () {
            var t = r(this),
              e = '';
            return (
              t.hasIndices && (e += 'd'),
              t.global && (e += 'g'),
              t.ignoreCase && (e += 'i'),
              t.multiline && (e += 'm'),
              t.dotAll && (e += 's'),
              t.unicode && (e += 'u'),
              t.unicodeSets && (e += 'v'),
              t.sticky && (e += 'y'),
              e
            );
          };
        },
        2999: (t, e, n) => {
          var r = n(7293),
            o = n(7854).RegExp,
            i = r(function () {
              var t = o('a', 'y');
              return (t.lastIndex = 2), null != t.exec('abcd');
            }),
            a =
              i ||
              r(function () {
                return !o('a', 'y').sticky;
              }),
            s =
              i ||
              r(function () {
                var t = o('^r', 'gy');
                return (t.lastIndex = 2), null != t.exec('str');
              });
          t.exports = {
            BROKEN_CARET: s,
            MISSED_STICKY: a,
            UNSUPPORTED_Y: i,
          };
        },
        9441: (t, e, n) => {
          var r = n(7293),
            o = n(7854).RegExp;
          t.exports = r(function () {
            var t = o('.', 's');
            return !(t.dotAll && t.exec('\n') && 's' === t.flags);
          });
        },
        7168: (t, e, n) => {
          var r = n(7293),
            o = n(7854).RegExp;
          t.exports = r(function () {
            var t = o('(?<a>b)', 'g');
            return (
              'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c')
            );
          });
        },
        4488: (t, e, n) => {
          var r = n(8554),
            o = TypeError;
          t.exports = function (t) {
            if (r(t)) throw o("Can't call method on " + t);
            return t;
          };
        },
        7152: (t, e, n) => {
          'use strict';
          var r,
            o = n(7854),
            i = n(2104),
            a = n(614),
            s = n(9363),
            u = n(8113),
            c = n(206),
            l = n(8053),
            f = o.Function,
            p =
              /MSIE .\./.test(u) ||
              (s &&
                ((r = o.Bun.version.split('.')).length < 3 ||
                  (0 == r[0] && (r[1] < 3 || (3 == r[1] && 0 == r[2])))));
          t.exports = function (t, e) {
            var n = e ? 2 : 1;
            return p
              ? function (r, o) {
                  var s = l(arguments.length, 1) > n,
                    u = a(r) ? r : f(r),
                    p = s ? c(arguments, n) : [],
                    d = s
                      ? function () {
                          i(u, this, p);
                        }
                      : u;
                  return e ? t(d, o) : t(d);
                }
              : t;
          };
        },
        6340: (t, e, n) => {
          'use strict';
          var r = n(5005),
            o = n(7045),
            i = n(5112),
            a = n(9781),
            s = i('species');
          t.exports = function (t) {
            var e = r(t);
            a &&
              e &&
              !e[s] &&
              o(e, s, {
                configurable: !0,
                get: function () {
                  return this;
                },
              });
          };
        },
        8003: (t, e, n) => {
          var r = n(3070).f,
            o = n(2597),
            i = n(5112)('toStringTag');
          t.exports = function (t, e, n) {
            t && !n && (t = t.prototype),
              t &&
                !o(t, i) &&
                r(t, i, {
                  configurable: !0,
                  value: e,
                });
          };
        },
        6200: (t, e, n) => {
          var r = n(2309),
            o = n(9711),
            i = r('keys');
          t.exports = function (t) {
            return i[t] || (i[t] = o(t));
          };
        },
        5465: (t, e, n) => {
          var r = n(7854),
            o = n(3072),
            i = '__core-js_shared__',
            a = r[i] || o(i, {});
          t.exports = a;
        },
        2309: (t, e, n) => {
          var r = n(1913),
            o = n(5465);
          (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
          })('versions', []).push({
            version: '3.30.1',
            mode: r ? 'pure' : 'global',
            copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
            license: 'https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE',
            source: 'https://github.com/zloirock/core-js',
          });
        },
        6707: (t, e, n) => {
          var r = n(9670),
            o = n(9483),
            i = n(8554),
            a = n(5112)('species');
          t.exports = function (t, e) {
            var n,
              s = r(t).constructor;
            return void 0 === s || i((n = r(s)[a])) ? e : o(n);
          };
        },
        8710: (t, e, n) => {
          var r = n(1702),
            o = n(9303),
            i = n(1340),
            a = n(4488),
            s = r(''.charAt),
            u = r(''.charCodeAt),
            c = r(''.slice),
            l = function (t) {
              return function (e, n) {
                var r,
                  l,
                  f = i(a(e)),
                  p = o(n),
                  d = f.length;
                return p < 0 || p >= d
                  ? t
                    ? ''
                    : void 0
                  : (r = u(f, p)) < 55296 ||
                    r > 56319 ||
                    p + 1 === d ||
                    (l = u(f, p + 1)) < 56320 ||
                    l > 57343
                  ? t
                    ? s(f, p)
                    : r
                  : t
                  ? c(f, p, p + 2)
                  : l - 56320 + ((r - 55296) << 10) + 65536;
              };
            };
          t.exports = {
            codeAt: l(!1),
            charAt: l(!0),
          };
        },
        6293: (t, e, n) => {
          var r = n(7392),
            o = n(7293);
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var t = Symbol();
              return (
                !String(t) ||
                !(Object(t) instanceof Symbol) ||
                (!Symbol.sham && r && r < 41)
              );
            });
        },
        6532: (t, e, n) => {
          var r = n(6916),
            o = n(5005),
            i = n(5112),
            a = n(8052);
          t.exports = function () {
            var t = o('Symbol'),
              e = t && t.prototype,
              n = e && e.valueOf,
              s = i('toPrimitive');
            e &&
              !e[s] &&
              a(
                e,
                s,
                function (t) {
                  return r(n, this);
                },
                {
                  arity: 1,
                }
              );
          };
        },
        2015: (t, e, n) => {
          var r = n(6293);
          t.exports = r && !!Symbol.for && !!Symbol.keyFor;
        },
        261: (t, e, n) => {
          var r,
            o,
            i,
            a,
            s = n(7854),
            u = n(2104),
            c = n(9974),
            l = n(614),
            f = n(2597),
            p = n(7293),
            d = n(490),
            h = n(206),
            v = n(317),
            g = n(8053),
            m = n(6833),
            y = n(5268),
            b = s.setImmediate,
            x = s.clearImmediate,
            w = s.process,
            E = s.Dispatch,
            S = s.Function,
            O = s.MessageChannel,
            A = s.String,
            C = 0,
            M = {},
            D = 'onreadystatechange';
          p(function () {
            r = s.location;
          });
          var P = function (t) {
              if (f(M, t)) {
                var e = M[t];
                delete M[t], e();
              }
            },
            j = function (t) {
              return function () {
                P(t);
              };
            },
            T = function (t) {
              P(t.data);
            },
            R = function (t) {
              s.postMessage(A(t), r.protocol + '//' + r.host);
            };
          (b && x) ||
            ((b = function (t) {
              g(arguments.length, 1);
              var e = l(t) ? t : S(t),
                n = h(arguments, 1);
              return (
                (M[++C] = function () {
                  u(e, void 0, n);
                }),
                o(C),
                C
              );
            }),
            (x = function (t) {
              delete M[t];
            }),
            y
              ? (o = function (t) {
                  w.nextTick(j(t));
                })
              : E && E.now
              ? (o = function (t) {
                  E.now(j(t));
                })
              : O && !m
              ? ((a = (i = new O()).port2),
                (i.port1.onmessage = T),
                (o = c(a.postMessage, a)))
              : s.addEventListener &&
                l(s.postMessage) &&
                !s.importScripts &&
                r &&
                'file:' !== r.protocol &&
                !p(R)
              ? ((o = R), s.addEventListener('message', T, !1))
              : (o =
                  D in v('script')
                    ? function (t) {
                        d.appendChild(v('script'))[D] = function () {
                          d.removeChild(this), P(t);
                        };
                      }
                    : function (t) {
                        setTimeout(j(t), 0);
                      })),
            (t.exports = {
              set: b,
              clear: x,
            });
        },
        1400: (t, e, n) => {
          var r = n(9303),
            o = Math.max,
            i = Math.min;
          t.exports = function (t, e) {
            var n = r(t);
            return n < 0 ? o(n + e, 0) : i(n, e);
          };
        },
        5656: (t, e, n) => {
          var r = n(8361),
            o = n(4488);
          t.exports = function (t) {
            return r(o(t));
          };
        },
        9303: (t, e, n) => {
          var r = n(4758);
          t.exports = function (t) {
            var e = +t;
            return e != e || 0 === e ? 0 : r(e);
          };
        },
        7466: (t, e, n) => {
          var r = n(9303),
            o = Math.min;
          t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
          };
        },
        7908: (t, e, n) => {
          var r = n(4488),
            o = Object;
          t.exports = function (t) {
            return o(r(t));
          };
        },
        7593: (t, e, n) => {
          var r = n(6916),
            o = n(111),
            i = n(2190),
            a = n(8173),
            s = n(2140),
            u = n(5112),
            c = TypeError,
            l = u('toPrimitive');
          t.exports = function (t, e) {
            if (!o(t) || i(t)) return t;
            var n,
              u = a(t, l);
            if (u) {
              if (
                (void 0 === e && (e = 'default'),
                (n = r(u, t, e)),
                !o(n) || i(n))
              )
                return n;
              throw c("Can't convert object to primitive value");
            }
            return void 0 === e && (e = 'number'), s(t, e);
          };
        },
        4948: (t, e, n) => {
          var r = n(7593),
            o = n(2190);
          t.exports = function (t) {
            var e = r(t, 'string');
            return o(e) ? e : e + '';
          };
        },
        1694: (t, e, n) => {
          var r = {};
          (r[n(5112)('toStringTag')] = 'z'),
            (t.exports = '[object z]' === String(r));
        },
        1340: (t, e, n) => {
          var r = n(648),
            o = String;
          t.exports = function (t) {
            if ('Symbol' === r(t))
              throw TypeError('Cannot convert a Symbol value to a string');
            return o(t);
          };
        },
        6330: (t) => {
          var e = String;
          t.exports = function (t) {
            try {
              return e(t);
            } catch (t) {
              return 'Object';
            }
          };
        },
        9711: (t, e, n) => {
          var r = n(1702),
            o = 0,
            i = Math.random(),
            a = r((1).toString);
          t.exports = function (t) {
            return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + a(++o + i, 36);
          };
        },
        3307: (t, e, n) => {
          var r = n(6293);
          t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        },
        3353: (t, e, n) => {
          var r = n(9781),
            o = n(7293);
          t.exports =
            r &&
            o(function () {
              return (
                42 !=
                Object.defineProperty(function () {}, 'prototype', {
                  value: 42,
                  writable: !1,
                }).prototype
              );
            });
        },
        8053: (t) => {
          var e = TypeError;
          t.exports = function (t, n) {
            if (t < n) throw e('Not enough arguments');
            return t;
          };
        },
        4811: (t, e, n) => {
          var r = n(7854),
            o = n(614),
            i = r.WeakMap;
          t.exports = o(i) && /native code/.test(String(i));
        },
        6800: (t, e, n) => {
          var r = n(857),
            o = n(2597),
            i = n(6061),
            a = n(3070).f;
          t.exports = function (t) {
            var e = r.Symbol || (r.Symbol = {});
            o(e, t) ||
              a(e, t, {
                value: i.f(t),
              });
          };
        },
        6061: (t, e, n) => {
          var r = n(5112);
          e.f = r;
        },
        5112: (t, e, n) => {
          var r = n(7854),
            o = n(2309),
            i = n(2597),
            a = n(9711),
            s = n(6293),
            u = n(3307),
            c = r.Symbol,
            l = o('wks'),
            f = u ? c.for || c : (c && c.withoutSetter) || a;
          t.exports = function (t) {
            return (
              i(l, t) || (l[t] = s && i(c, t) ? c[t] : f('Symbol.' + t)), l[t]
            );
          };
        },
        2222: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(7293),
            i = n(3157),
            a = n(111),
            s = n(7908),
            u = n(6244),
            c = n(7207),
            l = n(6135),
            f = n(5417),
            p = n(1194),
            d = n(5112),
            h = n(7392),
            v = d('isConcatSpreadable'),
            g =
              h >= 51 ||
              !o(function () {
                var t = [];
                return (t[v] = !1), t.concat()[0] !== t;
              }),
            m = function (t) {
              if (!a(t)) return !1;
              var e = t[v];
              return void 0 !== e ? !!e : i(t);
            };
          r(
            {
              target: 'Array',
              proto: !0,
              arity: 1,
              forced: !g || !p('concat'),
            },
            {
              concat: function (t) {
                var e,
                  n,
                  r,
                  o,
                  i,
                  a = s(this),
                  p = f(a, 0),
                  d = 0;
                for (e = -1, r = arguments.length; e < r; e++)
                  if (m((i = -1 === e ? a : arguments[e])))
                    for (o = u(i), c(d + o), n = 0; n < o; n++, d++)
                      n in i && l(p, d, i[n]);
                  else c(d + 1), l(p, d++, i);
                return (p.length = d), p;
              },
            }
          );
        },
        7327: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(2092).filter;
          r(
            {
              target: 'Array',
              proto: !0,
              forced: !n(1194)('filter'),
            },
            {
              filter: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        9554: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(8533);
          r(
            {
              target: 'Array',
              proto: !0,
              forced: [].forEach != o,
            },
            {
              forEach: o,
            }
          );
        },
        6992: (t, e, n) => {
          'use strict';
          var r = n(5656),
            o = n(1223),
            i = n(7497),
            a = n(9909),
            s = n(3070).f,
            u = n(1656),
            c = n(6178),
            l = n(1913),
            f = n(9781),
            p = 'Array Iterator',
            d = a.set,
            h = a.getterFor(p);
          t.exports = u(
            Array,
            'Array',
            function (t, e) {
              d(this, {
                type: p,
                target: r(t),
                index: 0,
                kind: e,
              });
            },
            function () {
              var t = h(this),
                e = t.target,
                n = t.kind,
                r = t.index++;
              return !e || r >= e.length
                ? ((t.target = void 0), c(void 0, !0))
                : c('keys' == n ? r : 'values' == n ? e[r] : [r, e[r]], !1);
            },
            'values'
          );
          var v = (i.Arguments = i.Array);
          if (
            (o('keys'),
            o('values'),
            o('entries'),
            !l && f && 'values' !== v.name)
          )
            try {
              s(v, 'name', {
                value: 'values',
              });
            } catch (t) {}
        },
        5069: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(1702),
            i = n(3157),
            a = o([].reverse),
            s = [1, 2];
          r(
            {
              target: 'Array',
              proto: !0,
              forced: String(s) === String(s.reverse()),
            },
            {
              reverse: function () {
                return i(this) && (this.length = this.length), a(this);
              },
            }
          );
        },
        7042: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(3157),
            i = n(4411),
            a = n(111),
            s = n(1400),
            u = n(6244),
            c = n(5656),
            l = n(6135),
            f = n(5112),
            p = n(1194),
            d = n(206),
            h = p('slice'),
            v = f('species'),
            g = Array,
            m = Math.max;
          r(
            {
              target: 'Array',
              proto: !0,
              forced: !h,
            },
            {
              slice: function (t, e) {
                var n,
                  r,
                  f,
                  p = c(this),
                  h = u(p),
                  y = s(t, h),
                  b = s(void 0 === e ? h : e, h);
                if (
                  o(p) &&
                  ((n = p.constructor),
                  ((i(n) && (n === g || o(n.prototype))) ||
                    (a(n) && null === (n = n[v]))) &&
                    (n = void 0),
                  n === g || void 0 === n)
                )
                  return d(p, y, b);
                for (
                  r = new (void 0 === n ? g : n)(m(b - y, 0)), f = 0;
                  y < b;
                  y++, f++
                )
                  y in p && l(r, f, p[y]);
                return (r.length = f), r;
              },
            }
          );
        },
        8309: (t, e, n) => {
          var r = n(9781),
            o = n(6530).EXISTS,
            i = n(1702),
            a = n(7045),
            s = Function.prototype,
            u = i(s.toString),
            c =
              /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
            l = i(c.exec);
          r &&
            !o &&
            a(s, 'name', {
              configurable: !0,
              get: function () {
                try {
                  return l(c, u(this))[1];
                } catch (t) {
                  return '';
                }
              },
            });
        },
        8862: (t, e, n) => {
          var r = n(2109),
            o = n(5005),
            i = n(2104),
            a = n(6916),
            s = n(1702),
            u = n(7293),
            c = n(614),
            l = n(2190),
            f = n(206),
            p = n(8044),
            d = n(6293),
            h = String,
            v = o('JSON', 'stringify'),
            g = s(/./.exec),
            m = s(''.charAt),
            y = s(''.charCodeAt),
            b = s(''.replace),
            x = s((1).toString),
            w = /[\uD800-\uDFFF]/g,
            E = /^[\uD800-\uDBFF]$/,
            S = /^[\uDC00-\uDFFF]$/,
            O =
              !d ||
              u(function () {
                var t = o('Symbol')();
                return (
                  '[null]' != v([t]) ||
                  '{}' !=
                    v({
                      a: t,
                    }) ||
                  '{}' != v(Object(t))
                );
              }),
            A = u(function () {
              return (
                '"\\udf06\\ud834"' !== v('\udf06\ud834') ||
                '"\\udead"' !== v('\udead')
              );
            }),
            C = function (t, e) {
              var n = f(arguments),
                r = p(e);
              if (c(r) || (void 0 !== t && !l(t)))
                return (
                  (n[1] = function (t, e) {
                    if ((c(r) && (e = a(r, this, h(t), e)), !l(e))) return e;
                  }),
                  i(v, null, n)
                );
            },
            M = function (t, e, n) {
              var r = m(n, e - 1),
                o = m(n, e + 1);
              return (g(E, t) && !g(S, o)) || (g(S, t) && !g(E, r))
                ? '\\u' + x(y(t, 0), 16)
                : t;
            };
          v &&
            r(
              {
                target: 'JSON',
                stat: !0,
                arity: 3,
                forced: O || A,
              },
              {
                stringify: function (t, e, n) {
                  var r = f(arguments),
                    o = i(O ? C : v, null, r);
                  return A && 'string' == typeof o ? b(o, w, M) : o;
                },
              }
            );
        },
        3706: (t, e, n) => {
          var r = n(7854);
          n(8003)(r.JSON, 'JSON', !0);
        },
        2703: (t, e, n) => {
          n(8003)(Math, 'Math', !0);
        },
        9601: (t, e, n) => {
          var r = n(2109),
            o = n(1574);
          r(
            {
              target: 'Object',
              stat: !0,
              arity: 2,
              forced: Object.assign !== o,
            },
            {
              assign: o,
            }
          );
        },
        8011: (t, e, n) => {
          n(2109)(
            {
              target: 'Object',
              stat: !0,
              sham: !n(9781),
            },
            {
              create: n(30),
            }
          );
        },
        9070: (t, e, n) => {
          var r = n(2109),
            o = n(9781),
            i = n(3070).f;
          r(
            {
              target: 'Object',
              stat: !0,
              forced: Object.defineProperty !== i,
              sham: !o,
            },
            {
              defineProperty: i,
            }
          );
        },
        9660: (t, e, n) => {
          var r = n(2109),
            o = n(6293),
            i = n(7293),
            a = n(5181),
            s = n(7908);
          r(
            {
              target: 'Object',
              stat: !0,
              forced:
                !o ||
                i(function () {
                  a.f(1);
                }),
            },
            {
              getOwnPropertySymbols: function (t) {
                var e = a.f;
                return e ? e(s(t)) : [];
              },
            }
          );
        },
        489: (t, e, n) => {
          var r = n(2109),
            o = n(7293),
            i = n(7908),
            a = n(9518),
            s = n(8544);
          r(
            {
              target: 'Object',
              stat: !0,
              forced: o(function () {
                a(1);
              }),
              sham: !s,
            },
            {
              getPrototypeOf: function (t) {
                return a(i(t));
              },
            }
          );
        },
        8304: (t, e, n) => {
          n(2109)(
            {
              target: 'Object',
              stat: !0,
            },
            {
              setPrototypeOf: n(7674),
            }
          );
        },
        1539: (t, e, n) => {
          var r = n(1694),
            o = n(8052),
            i = n(288);
          r ||
            o(Object.prototype, 'toString', i, {
              unsafe: !0,
            });
        },
        821: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(6916),
            i = n(9662),
            a = n(8523),
            s = n(2534),
            u = n(408);
          r(
            {
              target: 'Promise',
              stat: !0,
              forced: n(612),
            },
            {
              all: function (t) {
                var e = this,
                  n = a.f(e),
                  r = n.resolve,
                  c = n.reject,
                  l = s(function () {
                    var n = i(e.resolve),
                      a = [],
                      s = 0,
                      l = 1;
                    u(t, function (t) {
                      var i = s++,
                        u = !1;
                      l++,
                        o(n, e, t).then(function (t) {
                          u || ((u = !0), (a[i] = t), --l || r(a));
                        }, c);
                    }),
                      --l || r(a);
                  });
                return l.error && c(l.value), n.promise;
              },
            }
          );
        },
        4164: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(1913),
            i = n(3702).CONSTRUCTOR,
            a = n(2492),
            s = n(5005),
            u = n(614),
            c = n(8052),
            l = a && a.prototype;
          if (
            (r(
              {
                target: 'Promise',
                proto: !0,
                forced: i,
                real: !0,
              },
              {
                catch: function (t) {
                  return this.then(void 0, t);
                },
              }
            ),
            !o && u(a))
          ) {
            var f = s('Promise').prototype.catch;
            l.catch !== f &&
              c(l, 'catch', f, {
                unsafe: !0,
              });
          }
        },
        3401: (t, e, n) => {
          'use strict';
          var r,
            o,
            i,
            a = n(2109),
            s = n(1913),
            u = n(5268),
            c = n(7854),
            l = n(6916),
            f = n(8052),
            p = n(7674),
            d = n(8003),
            h = n(6340),
            v = n(9662),
            g = n(614),
            m = n(111),
            y = n(5787),
            b = n(6707),
            x = n(261).set,
            w = n(5948),
            E = n(842),
            S = n(2534),
            O = n(8572),
            A = n(9909),
            C = n(2492),
            M = n(3702),
            D = n(8523),
            P = 'Promise',
            j = M.CONSTRUCTOR,
            T = M.REJECTION_EVENT,
            R = M.SUBCLASSING,
            k = A.getterFor(P),
            B = A.set,
            I = C && C.prototype,
            _ = C,
            F = I,
            N = c.TypeError,
            z = c.document,
            G = c.process,
            L = D.f,
            W = L,
            q = !!(z && z.createEvent && c.dispatchEvent),
            H = 'unhandledrejection',
            Y = function (t) {
              var e;
              return !(!m(t) || !g((e = t.then))) && e;
            },
            V = function (t, e) {
              var n,
                r,
                o,
                i = e.value,
                a = 1 == e.state,
                s = a ? t.ok : t.fail,
                u = t.resolve,
                c = t.reject,
                f = t.domain;
              try {
                s
                  ? (a || (2 === e.rejection && K(e), (e.rejection = 1)),
                    !0 === s
                      ? (n = i)
                      : (f && f.enter(), (n = s(i)), f && (f.exit(), (o = !0))),
                    n === t.promise
                      ? c(N('Promise-chain cycle'))
                      : (r = Y(n))
                      ? l(r, n, u, c)
                      : u(n))
                  : c(i);
              } catch (t) {
                f && !o && f.exit(), c(t);
              }
            },
            X = function (t, e) {
              t.notified ||
                ((t.notified = !0),
                w(function () {
                  for (var n, r = t.reactions; (n = r.get()); ) V(n, t);
                  (t.notified = !1), e && !t.rejection && Q(t);
                }));
            },
            U = function (t, e, n) {
              var r, o;
              q
                ? (((r = z.createEvent('Event')).promise = e),
                  (r.reason = n),
                  r.initEvent(t, !1, !0),
                  c.dispatchEvent(r))
                : (r = {
                    promise: e,
                    reason: n,
                  }),
                !T && (o = c['on' + t])
                  ? o(r)
                  : t === H && E('Unhandled promise rejection', n);
            },
            Q = function (t) {
              l(x, c, function () {
                var e,
                  n = t.facade,
                  r = t.value;
                if (
                  J(t) &&
                  ((e = S(function () {
                    u ? G.emit('unhandledRejection', r, n) : U(H, n, r);
                  })),
                  (t.rejection = u || J(t) ? 2 : 1),
                  e.error)
                )
                  throw e.value;
              });
            },
            J = function (t) {
              return 1 !== t.rejection && !t.parent;
            },
            K = function (t) {
              l(x, c, function () {
                var e = t.facade;
                u
                  ? G.emit('rejectionHandled', e)
                  : U('rejectionhandled', e, t.value);
              });
            },
            $ = function (t, e, n) {
              return function (r) {
                t(e, r, n);
              };
            },
            Z = function (t, e, n) {
              t.done ||
                ((t.done = !0),
                n && (t = n),
                (t.value = e),
                (t.state = 2),
                X(t, !0));
            },
            tt = function (t, e, n) {
              if (!t.done) {
                (t.done = !0), n && (t = n);
                try {
                  if (t.facade === e)
                    throw N("Promise can't be resolved itself");
                  var r = Y(e);
                  r
                    ? w(function () {
                        var n = {
                          done: !1,
                        };
                        try {
                          l(r, e, $(tt, n, t), $(Z, n, t));
                        } catch (e) {
                          Z(n, e, t);
                        }
                      })
                    : ((t.value = e), (t.state = 1), X(t, !1));
                } catch (e) {
                  Z(
                    {
                      done: !1,
                    },
                    e,
                    t
                  );
                }
              }
            };
          if (
            j &&
            ((F = (_ = function (t) {
              y(this, F), v(t), l(r, this);
              var e = k(this);
              try {
                t($(tt, e), $(Z, e));
              } catch (t) {
                Z(e, t);
              }
            }).prototype),
            ((r = function (t) {
              B(this, {
                type: P,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: new O(),
                rejection: !1,
                state: 0,
                value: void 0,
              });
            }).prototype = f(F, 'then', function (t, e) {
              var n = k(this),
                r = L(b(this, _));
              return (
                (n.parent = !0),
                (r.ok = !g(t) || t),
                (r.fail = g(e) && e),
                (r.domain = u ? G.domain : void 0),
                0 == n.state
                  ? n.reactions.add(r)
                  : w(function () {
                      V(r, n);
                    }),
                r.promise
              );
            })),
            (o = function () {
              var t = new r(),
                e = k(t);
              (this.promise = t),
                (this.resolve = $(tt, e)),
                (this.reject = $(Z, e));
            }),
            (D.f = L =
              function (t) {
                return t === _ || undefined === t ? new o(t) : W(t);
              }),
            !s && g(C) && I !== Object.prototype)
          ) {
            (i = I.then),
              R ||
                f(
                  I,
                  'then',
                  function (t, e) {
                    var n = this;
                    return new _(function (t, e) {
                      l(i, n, t, e);
                    }).then(t, e);
                  },
                  {
                    unsafe: !0,
                  }
                );
            try {
              delete I.constructor;
            } catch (t) {}
            p && p(I, F);
          }
          a(
            {
              global: !0,
              constructor: !0,
              wrap: !0,
              forced: j,
            },
            {
              Promise: _,
            }
          ),
            d(_, P, !1, !0),
            h(P);
        },
        8674: (t, e, n) => {
          n(3401), n(821), n(4164), n(6027), n(683), n(6294);
        },
        6027: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(6916),
            i = n(9662),
            a = n(8523),
            s = n(2534),
            u = n(408);
          r(
            {
              target: 'Promise',
              stat: !0,
              forced: n(612),
            },
            {
              race: function (t) {
                var e = this,
                  n = a.f(e),
                  r = n.reject,
                  c = s(function () {
                    var a = i(e.resolve);
                    u(t, function (t) {
                      o(a, e, t).then(n.resolve, r);
                    });
                  });
                return c.error && r(c.value), n.promise;
              },
            }
          );
        },
        683: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(6916),
            i = n(8523);
          r(
            {
              target: 'Promise',
              stat: !0,
              forced: n(3702).CONSTRUCTOR,
            },
            {
              reject: function (t) {
                var e = i.f(this);
                return o(e.reject, void 0, t), e.promise;
              },
            }
          );
        },
        6294: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(5005),
            i = n(1913),
            a = n(2492),
            s = n(3702).CONSTRUCTOR,
            u = n(9478),
            c = o('Promise'),
            l = i && !s;
          r(
            {
              target: 'Promise',
              stat: !0,
              forced: i || s,
            },
            {
              resolve: function (t) {
                return u(l && this === c ? a : this, t);
              },
            }
          );
        },
        4916: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(2261);
          r(
            {
              target: 'RegExp',
              proto: !0,
              forced: /./.exec !== o,
            },
            {
              exec: o,
            }
          );
        },
        8783: (t, e, n) => {
          'use strict';
          var r = n(8710).charAt,
            o = n(1340),
            i = n(9909),
            a = n(1656),
            s = n(6178),
            u = 'String Iterator',
            c = i.set,
            l = i.getterFor(u);
          a(
            String,
            'String',
            function (t) {
              c(this, {
                type: u,
                string: o(t),
                index: 0,
              });
            },
            function () {
              var t,
                e = l(this),
                n = e.string,
                o = e.index;
              return o >= n.length
                ? s(void 0, !0)
                : ((t = r(n, o)), (e.index += t.length), s(t, !1));
            }
          );
        },
        6755: (t, e, n) => {
          'use strict';
          var r,
            o = n(2109),
            i = n(1470),
            a = n(1236).f,
            s = n(7466),
            u = n(1340),
            c = n(3929),
            l = n(4488),
            f = n(4964),
            p = n(1913),
            d = i(''.startsWith),
            h = i(''.slice),
            v = Math.min,
            g = f('startsWith');
          o(
            {
              target: 'String',
              proto: !0,
              forced:
                !!(
                  p ||
                  g ||
                  ((r = a(String.prototype, 'startsWith')), !r || r.writable)
                ) && !g,
            },
            {
              startsWith: function (t) {
                var e = u(l(this));
                c(t);
                var n = s(
                    v(arguments.length > 1 ? arguments[1] : void 0, e.length)
                  ),
                  r = u(t);
                return d ? d(e, r, n) : h(e, n, n + r.length) === r;
              },
            }
          );
        },
        2443: (t, e, n) => {
          n(6800)('asyncIterator');
        },
        4032: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(7854),
            i = n(6916),
            a = n(1702),
            s = n(1913),
            u = n(9781),
            c = n(6293),
            l = n(7293),
            f = n(2597),
            p = n(7976),
            d = n(9670),
            h = n(5656),
            v = n(4948),
            g = n(1340),
            m = n(9114),
            y = n(30),
            b = n(1956),
            x = n(8006),
            w = n(1156),
            E = n(5181),
            S = n(1236),
            O = n(3070),
            A = n(6048),
            C = n(5296),
            M = n(8052),
            D = n(7045),
            P = n(2309),
            j = n(6200),
            T = n(3501),
            R = n(9711),
            k = n(5112),
            B = n(6061),
            I = n(6800),
            _ = n(6532),
            F = n(8003),
            N = n(9909),
            z = n(2092).forEach,
            G = j('hidden'),
            L = 'Symbol',
            W = 'prototype',
            q = N.set,
            H = N.getterFor(L),
            Y = Object[W],
            V = o.Symbol,
            X = V && V[W],
            U = o.TypeError,
            Q = o.QObject,
            J = S.f,
            K = O.f,
            $ = w.f,
            Z = C.f,
            tt = a([].push),
            et = P('symbols'),
            nt = P('op-symbols'),
            rt = P('wks'),
            ot = !Q || !Q[W] || !Q[W].findChild,
            it =
              u &&
              l(function () {
                return (
                  7 !=
                  y(
                    K({}, 'a', {
                      get: function () {
                        return K(this, 'a', {
                          value: 7,
                        }).a;
                      },
                    })
                  ).a
                );
              })
                ? function (t, e, n) {
                    var r = J(Y, e);
                    r && delete Y[e], K(t, e, n), r && t !== Y && K(Y, e, r);
                  }
                : K,
            at = function (t, e) {
              var n = (et[t] = y(X));
              return (
                q(n, {
                  type: L,
                  tag: t,
                  description: e,
                }),
                u || (n.description = e),
                n
              );
            },
            st = function (t, e, n) {
              t === Y && st(nt, e, n), d(t);
              var r = v(e);
              return (
                d(n),
                f(et, r)
                  ? (n.enumerable
                      ? (f(t, G) && t[G][r] && (t[G][r] = !1),
                        (n = y(n, {
                          enumerable: m(0, !1),
                        })))
                      : (f(t, G) || K(t, G, m(1, {})), (t[G][r] = !0)),
                    it(t, r, n))
                  : K(t, r, n)
              );
            },
            ut = function (t, e) {
              d(t);
              var n = h(e),
                r = b(n).concat(pt(n));
              return (
                z(r, function (e) {
                  (u && !i(ct, n, e)) || st(t, e, n[e]);
                }),
                t
              );
            },
            ct = function (t) {
              var e = v(t),
                n = i(Z, this, e);
              return (
                !(this === Y && f(et, e) && !f(nt, e)) &&
                (!(
                  n ||
                  !f(this, e) ||
                  !f(et, e) ||
                  (f(this, G) && this[G][e])
                ) ||
                  n)
              );
            },
            lt = function (t, e) {
              var n = h(t),
                r = v(e);
              if (n !== Y || !f(et, r) || f(nt, r)) {
                var o = J(n, r);
                return (
                  !o ||
                    !f(et, r) ||
                    (f(n, G) && n[G][r]) ||
                    (o.enumerable = !0),
                  o
                );
              }
            },
            ft = function (t) {
              var e = $(h(t)),
                n = [];
              return (
                z(e, function (t) {
                  f(et, t) || f(T, t) || tt(n, t);
                }),
                n
              );
            },
            pt = function (t) {
              var e = t === Y,
                n = $(e ? nt : h(t)),
                r = [];
              return (
                z(n, function (t) {
                  !f(et, t) || (e && !f(Y, t)) || tt(r, et[t]);
                }),
                r
              );
            };
          c ||
            (M(
              (X = (V = function () {
                if (p(X, this)) throw U('Symbol is not a constructor');
                var t =
                    arguments.length && void 0 !== arguments[0]
                      ? g(arguments[0])
                      : void 0,
                  e = R(t),
                  n = function (t) {
                    this === Y && i(n, nt, t),
                      f(this, G) && f(this[G], e) && (this[G][e] = !1),
                      it(this, e, m(1, t));
                  };
                return (
                  u &&
                    ot &&
                    it(Y, e, {
                      configurable: !0,
                      set: n,
                    }),
                  at(e, t)
                );
              })[W]),
              'toString',
              function () {
                return H(this).tag;
              }
            ),
            M(V, 'withoutSetter', function (t) {
              return at(R(t), t);
            }),
            (C.f = ct),
            (O.f = st),
            (A.f = ut),
            (S.f = lt),
            (x.f = w.f = ft),
            (E.f = pt),
            (B.f = function (t) {
              return at(k(t), t);
            }),
            u &&
              (D(X, 'description', {
                configurable: !0,
                get: function () {
                  return H(this).description;
                },
              }),
              s ||
                M(Y, 'propertyIsEnumerable', ct, {
                  unsafe: !0,
                }))),
            r(
              {
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: !c,
                sham: !c,
              },
              {
                Symbol: V,
              }
            ),
            z(b(rt), function (t) {
              I(t);
            }),
            r(
              {
                target: L,
                stat: !0,
                forced: !c,
              },
              {
                useSetter: function () {
                  ot = !0;
                },
                useSimple: function () {
                  ot = !1;
                },
              }
            ),
            r(
              {
                target: 'Object',
                stat: !0,
                forced: !c,
                sham: !u,
              },
              {
                create: function (t, e) {
                  return void 0 === e ? y(t) : ut(y(t), e);
                },
                defineProperty: st,
                defineProperties: ut,
                getOwnPropertyDescriptor: lt,
              }
            ),
            r(
              {
                target: 'Object',
                stat: !0,
                forced: !c,
              },
              {
                getOwnPropertyNames: ft,
              }
            ),
            _(),
            F(V, L),
            (T[G] = !0);
        },
        1817: (t, e, n) => {
          'use strict';
          var r = n(2109),
            o = n(9781),
            i = n(7854),
            a = n(1702),
            s = n(2597),
            u = n(614),
            c = n(7976),
            l = n(1340),
            f = n(7045),
            p = n(9920),
            d = i.Symbol,
            h = d && d.prototype;
          if (
            o &&
            u(d) &&
            (!('description' in h) || void 0 !== d().description)
          ) {
            var v = {},
              g = function () {
                var t =
                    arguments.length < 1 || void 0 === arguments[0]
                      ? void 0
                      : l(arguments[0]),
                  e = c(h, this) ? new d(t) : void 0 === t ? d() : d(t);
                return '' === t && (v[e] = !0), e;
              };
            p(g, d), (g.prototype = h), (h.constructor = g);
            var m = 'Symbol(test)' == String(d('test')),
              y = a(h.valueOf),
              b = a(h.toString),
              x = /^Symbol\((.*)\)[^)]+$/,
              w = a(''.replace),
              E = a(''.slice);
            f(h, 'description', {
              configurable: !0,
              get: function () {
                var t = y(this);
                if (s(v, t)) return '';
                var e = b(t),
                  n = m ? E(e, 7, -1) : w(e, x, '$1');
                return '' === n ? void 0 : n;
              },
            }),
              r(
                {
                  global: !0,
                  constructor: !0,
                  forced: !0,
                },
                {
                  Symbol: g,
                }
              );
          }
        },
        763: (t, e, n) => {
          var r = n(2109),
            o = n(5005),
            i = n(2597),
            a = n(1340),
            s = n(2309),
            u = n(2015),
            c = s('string-to-symbol-registry'),
            l = s('symbol-to-string-registry');
          r(
            {
              target: 'Symbol',
              stat: !0,
              forced: !u,
            },
            {
              for: function (t) {
                var e = a(t);
                if (i(c, e)) return c[e];
                var n = o('Symbol')(e);
                return (c[e] = n), (l[n] = e), n;
              },
            }
          );
        },
        2165: (t, e, n) => {
          n(6800)('iterator');
        },
        2526: (t, e, n) => {
          n(4032), n(763), n(6620), n(8862), n(9660);
        },
        6620: (t, e, n) => {
          var r = n(2109),
            o = n(2597),
            i = n(2190),
            a = n(6330),
            s = n(2309),
            u = n(2015),
            c = s('symbol-to-string-registry');
          r(
            {
              target: 'Symbol',
              stat: !0,
              forced: !u,
            },
            {
              keyFor: function (t) {
                if (!i(t)) throw TypeError(a(t) + ' is not a symbol');
                if (o(c, t)) return c[t];
              },
            }
          );
        },
        9341: (t, e, n) => {
          var r = n(5005),
            o = n(6800),
            i = n(8003);
          o('toStringTag'), i(r('Symbol'), 'Symbol');
        },
        4747: (t, e, n) => {
          var r = n(7854),
            o = n(8324),
            i = n(8509),
            a = n(8533),
            s = n(8880),
            u = function (t) {
              if (t && t.forEach !== a)
                try {
                  s(t, 'forEach', a);
                } catch (e) {
                  t.forEach = a;
                }
            };
          for (var c in o) o[c] && u(r[c] && r[c].prototype);
          u(i);
        },
        3948: (t, e, n) => {
          var r = n(7854),
            o = n(8324),
            i = n(8509),
            a = n(6992),
            s = n(8880),
            u = n(5112),
            c = u('iterator'),
            l = u('toStringTag'),
            f = a.values,
            p = function (t, e) {
              if (t) {
                if (t[c] !== f)
                  try {
                    s(t, c, f);
                  } catch (e) {
                    t[c] = f;
                  }
                if ((t[l] || s(t, l, e), o[e]))
                  for (var n in a)
                    if (t[n] !== a[n])
                      try {
                        s(t, n, a[n]);
                      } catch (e) {
                        t[n] = a[n];
                      }
              }
            };
          for (var d in o) p(r[d] && r[d].prototype, d);
          p(i, 'DOMTokenList');
        },
        6815: (t, e, n) => {
          var r = n(2109),
            o = n(7854),
            i = n(7152)(o.setInterval, !0);
          r(
            {
              global: !0,
              bind: !0,
              forced: o.setInterval !== i,
            },
            {
              setInterval: i,
            }
          );
        },
        8417: (t, e, n) => {
          var r = n(2109),
            o = n(7854),
            i = n(7152)(o.setTimeout, !0);
          r(
            {
              global: !0,
              bind: !0,
              forced: o.setTimeout !== i,
            },
            {
              setTimeout: i,
            }
          );
        },
        2564: (t, e, n) => {
          n(6815), n(8417);
        },
        4853: (t, e, n) => {
          'use strict';
          n.d(e, {
            Z: () => s,
          });
          var r = n(8081),
            o = n.n(r),
            i = n(3645),
            a = n.n(i)()(o());
          a.push([
            t.id,
            '.moveable-control-box {\n    display: none !important;\n    all: initial;\n}\n\n.tippy-box {\n    max-width: min(350px, 90vw) !important;\n}\n\n.tippy-box:focus {\n    outline: 0;\n}\n\n.tpa-tooltip-content-root {\n    text-shadow: initial;\n    margin: 0;\n    padding: 8px;\n    color: grey;\n    background-color: white;\n    border-color: lightgray;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 8px;\n    user-select: none;\n}\n\n.tpa-tooltip-options-container {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n}\n\n.tpa-tooltip-options-container > * {\n    all: initial;\n}\n\n.tpa-tooltip-content-root-arrow-icon {\n    width: 30px;\n    height: 30px;\n    display: inline-block;\n    line-height: 30px;\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    color: white;\n    vertical-align: middle;\n}\n\n.tpa-tooltip-content-root-arrow {\n    background-color: transparent;\n    border: 0;\n    animation: tpa-tooltip-content-root-arrow-ani 500ms ease-in-out;\n    animation-iteration-count: infinite;\n    animation-direction: alternate-reverse;\n}\n\n.tpa-tooltip-content-root-options {\n    font-family: initial;\n    font-size: 16px !important;\n}\n\n.tpa-tooltip-content-root-drag {\n    font-size: 16px !important;\n    word-wrap: break-word !important;\n}\n\n.tpa-tooltip-content-root-drag strong {\n    font: initial;\n    font-size: 16px !important;\n    font-weight: bold;\n}\n\n.tpa-tooltip-content-root span {\n    color: #eb1313 !important;\n}\n\n.tpa-inner-clicker {\n    filter: unset !important;\n    box-shadow: unset !important;\n    text-shadow: unset !important;\n    float: left !important;\n    /*position: static !important;*/\n    border-radius: 50% !important;\n    width: 48px !important;\n    height: 48px !important;\n    font-size: 30px;\n}\n\n.tpa-inner-clicker-error {\n    padding-left: 3px;\n}\n\ndiv.tpa-click-effect {\n    position: absolute !important;\n    box-sizing: border-box !important;\n    border-style: solid !important;\n    border-radius: 50% !important;\n    animation: tpa-click-effect-ani 200ms ease-out !important;\n    border-width: 2px !important;\n    /*border-color: #86d993;*/\n    /*border-color: #7056ff;*/\n    border-color: lightgray !important;\n}\n\n@keyframes tpa-tooltip-content-root-arrow-ani {\n    0% {\n        transform: none;\n    }\n\n    100% {\n        transform: translateX(-30px);\n    }\n}\n\n@keyframes tpa-click-effect-ani {\n    0% {\n        width: 9px;\n        height: 9px;\n        margin: -4.5px;\n        opacity: 1;\n    }\n\n    100% {\n        width: 48px;\n        height: 48px;\n        margin: -24px;\n        opacity: 0.2;\n    }\n}\n',
            '',
          ]);
          const s = a.toString();
        },
        9059: (t, e, n) => {
          'use strict';
          n.d(e, {
            Z: () => s,
          });
          var r = n(8081),
            o = n.n(r),
            i = n(3645),
            a = n.n(i)()(o());
          a.push([
            t.id,
            '.el-tg-list{display:flex;align-items:center;text-align:center}.el-tg-list-item{margin:0 32px}.el-tgl{display:none}.el-tgl,.el-tgl::after,.el-tgl::before,.el-tgl *,.el-tgl *::after,.el-tgl *::before,.el-tgl+.el-tgl-btn{box-sizing:border-box}.el-tgl::selection,.el-tgl::after::selection,.el-tgl::before::selection,.el-tgl *::selection,.el-tgl *::after::selection,.el-tgl *::before::selection,.el-tgl+.el-tgl-btn::selection{background:none}.el-tgl+.el-tgl-btn{position:relative;display:block;width:48px;height:24px;outline:0;cursor:pointer;user-select:none}.el-tgl+.el-tgl-btn::after,.el-tgl+.el-tgl-btn::before{position:relative;display:block;width:50%;height:100%;content:""}.el-tgl+.el-tgl-btn::after{left:0}.el-tgl+.el-tgl-btn::before{display:none}.el-tgl:checked+.el-tgl-btn::after{left:50%}.el-tgl-ios+.el-tgl-btn{padding:0;background:#fbfbfb;border:1px solid #e8eae9;border-radius:32px;transition:all .4s ease}.el-tgl-ios+.el-tgl-btn::after{background:#fbfbfb;border-radius:32px;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 4px 0 rgba(0,0,0,.08);transition:left .3s cubic-bezier(0.175, 0.885, 0.32, 1.275),padding .3s ease,margin .3s ease}.el-tgl-ios+.el-tgl-btn:hover::after{will-change:padding}.el-tgl-ios+.el-tgl-btn:active{box-shadow:inset 0 0 0 32px #e8eae9}.el-tgl-ios+.el-tgl-btn:active::after{padding-right:13px}.el-tgl-ios:checked+.el-tgl-btn{background:#86d993}.el-tgl-ios:checked+.el-tgl-btn:active{box-shadow:none}.el-tgl-ios:checked+.el-tgl-btn:active::after{margin-left:-13px}',
            '',
          ]);
          const s = a.toString();
        },
        3645: (t) => {
          'use strict';
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var n = '',
                    r = void 0 !== e[5];
                  return (
                    e[4] && (n += '@supports ('.concat(e[4], ') {')),
                    e[2] && (n += '@media '.concat(e[2], ' {')),
                    r &&
                      (n += '@layer'.concat(
                        e[5].length > 0 ? ' '.concat(e[5]) : '',
                        ' {'
                      )),
                    (n += t(e)),
                    r && (n += '}'),
                    e[2] && (n += '}'),
                    e[4] && (n += '}'),
                    n
                  );
                }).join('');
              }),
              (e.i = function (t, n, r, o, i) {
                'string' == typeof t && (t = [[null, t, void 0]]);
                var a = {};
                if (r)
                  for (var s = 0; s < this.length; s++) {
                    var u = this[s][0];
                    null != u && (a[u] = !0);
                  }
                for (var c = 0; c < t.length; c++) {
                  var l = [].concat(t[c]);
                  (r && a[l[0]]) ||
                    (void 0 !== i &&
                      (void 0 === l[5] ||
                        (l[1] = '@layer'
                          .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                          .concat(l[1], '}')),
                      (l[5] = i)),
                    n &&
                      (l[2]
                        ? ((l[1] = '@media '
                            .concat(l[2], ' {')
                            .concat(l[1], '}')),
                          (l[2] = n))
                        : (l[2] = n)),
                    o &&
                      (l[4]
                        ? ((l[1] = '@supports ('
                            .concat(l[4], ') {')
                            .concat(l[1], '}')),
                          (l[4] = o))
                        : (l[4] = ''.concat(o))),
                    e.push(l));
                }
              }),
              e
            );
          };
        },
        8081: (t) => {
          'use strict';
          t.exports = function (t) {
            return t[1];
          };
        },
        4289: (t, e, n) => {
          'use strict';
          var r = n(2215),
            o = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
            i = Object.prototype.toString,
            a = Array.prototype.concat,
            s = Object.defineProperty,
            u = n(1044)(),
            c = s && u,
            l = function (t, e, n, r) {
              if (e in t)
                if (!0 === r) {
                  if (t[e] === n) return;
                } else if (
                  'function' != typeof (o = r) ||
                  '[object Function]' !== i.call(o) ||
                  !r()
                )
                  return;
              var o;
              c
                ? s(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: n,
                    writable: !0,
                  })
                : (t[e] = n);
            },
            f = function (t, e) {
              var n = arguments.length > 2 ? arguments[2] : {},
                i = r(e);
              o && (i = a.call(i, Object.getOwnPropertySymbols(e)));
              for (var s = 0; s < i.length; s += 1)
                l(t, i[s], e[i[s]], n[i[s]]);
            };
          (f.supportsDescriptors = !!c), (t.exports = f);
        },
        8091: (t) => {
          'use strict';
          function e(t, e) {
            if (null == t)
              throw new TypeError('Cannot convert first argument to object');
            for (var n = Object(t), r = 1; r < arguments.length; r++) {
              var o = arguments[r];
              if (null != o)
                for (
                  var i = Object.keys(Object(o)), a = 0, s = i.length;
                  a < s;
                  a++
                ) {
                  var u = i[a],
                    c = Object.getOwnPropertyDescriptor(o, u);
                  void 0 !== c && c.enumerable && (n[u] = o[u]);
                }
            }
            return n;
          }
          t.exports = {
            assign: e,
            polyfill: function () {
              Object.assign ||
                Object.defineProperty(Object, 'assign', {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
            },
          };
        },
        4029: (t, e, n) => {
          'use strict';
          var r = n(5320),
            o = Object.prototype.toString,
            i = Object.prototype.hasOwnProperty;
          t.exports = function (t, e, n) {
            if (!r(e)) throw new TypeError('iterator must be a function');
            var a;
            arguments.length >= 3 && (a = n),
              '[object Array]' === o.call(t)
                ? (function (t, e, n) {
                    for (var r = 0, o = t.length; r < o; r++)
                      i.call(t, r) &&
                        (null == n ? e(t[r], r, t) : e.call(n, t[r], r, t));
                  })(t, e, a)
                : 'string' == typeof t
                ? (function (t, e, n) {
                    for (var r = 0, o = t.length; r < o; r++)
                      null == n
                        ? e(t.charAt(r), r, t)
                        : e.call(n, t.charAt(r), r, t);
                  })(t, e, a)
                : (function (t, e, n) {
                    for (var r in t)
                      i.call(t, r) &&
                        (null == n ? e(t[r], r, t) : e.call(n, t[r], r, t));
                  })(t, e, a);
          };
        },
        7648: (t) => {
          'use strict';
          var e = Array.prototype.slice,
            n = Object.prototype.toString;
          t.exports = function (t) {
            var r = this;
            if ('function' != typeof r || '[object Function]' !== n.call(r))
              throw new TypeError(
                'Function.prototype.bind called on incompatible ' + r
              );
            for (
              var o,
                i = e.call(arguments, 1),
                a = Math.max(0, r.length - i.length),
                s = [],
                u = 0;
              u < a;
              u++
            )
              s.push('$' + u);
            if (
              ((o = Function(
                'binder',
                'return function (' +
                  s.join(',') +
                  '){ return binder.apply(this,arguments); }'
              )(function () {
                if (this instanceof o) {
                  var n = r.apply(this, i.concat(e.call(arguments)));
                  return Object(n) === n ? n : this;
                }
                return r.apply(t, i.concat(e.call(arguments)));
              })),
              r.prototype)
            ) {
              var c = function () {};
              (c.prototype = r.prototype),
                (o.prototype = new c()),
                (c.prototype = null);
            }
            return o;
          };
        },
        8612: (t, e, n) => {
          'use strict';
          var r = n(7648);
          t.exports = Function.prototype.bind || r;
        },
        210: (t, e, n) => {
          'use strict';
          var r,
            o = SyntaxError,
            i = Function,
            a = TypeError,
            s = function (t) {
              try {
                return i('"use strict"; return (' + t + ').constructor;')();
              } catch (t) {}
            },
            u = Object.getOwnPropertyDescriptor;
          if (u)
            try {
              u({}, '');
            } catch (t) {
              u = null;
            }
          var c = function () {
              throw new a();
            },
            l = u
              ? (function () {
                  try {
                    return c;
                  } catch (t) {
                    try {
                      return u(arguments, 'callee').get;
                    } catch (t) {
                      return c;
                    }
                  }
                })()
              : c,
            f = n(1405)(),
            p =
              Object.getPrototypeOf ||
              function (t) {
                return t.__proto__;
              },
            d = {},
            h = 'undefined' == typeof Uint8Array ? r : p(Uint8Array),
            v = {
              '%AggregateError%':
                'undefined' == typeof AggregateError ? r : AggregateError,
              '%Array%': Array,
              '%ArrayBuffer%':
                'undefined' == typeof ArrayBuffer ? r : ArrayBuffer,
              '%ArrayIteratorPrototype%': f ? p([][Symbol.iterator]()) : r,
              '%AsyncFromSyncIteratorPrototype%': r,
              '%AsyncFunction%': d,
              '%AsyncGenerator%': d,
              '%AsyncGeneratorFunction%': d,
              '%AsyncIteratorPrototype%': d,
              '%Atomics%': 'undefined' == typeof Atomics ? r : Atomics,
              '%BigInt%': 'undefined' == typeof BigInt ? r : BigInt,
              '%BigInt64Array%':
                'undefined' == typeof BigInt64Array ? r : BigInt64Array,
              '%BigUint64Array%':
                'undefined' == typeof BigUint64Array ? r : BigUint64Array,
              '%Boolean%': Boolean,
              '%DataView%': 'undefined' == typeof DataView ? r : DataView,
              '%Date%': Date,
              '%decodeURI%': decodeURI,
              '%decodeURIComponent%': decodeURIComponent,
              '%encodeURI%': encodeURI,
              '%encodeURIComponent%': encodeURIComponent,
              '%Error%': Error,
              '%eval%': eval,
              '%EvalError%': EvalError,
              '%Float32Array%':
                'undefined' == typeof Float32Array ? r : Float32Array,
              '%Float64Array%':
                'undefined' == typeof Float64Array ? r : Float64Array,
              '%FinalizationRegistry%':
                'undefined' == typeof FinalizationRegistry
                  ? r
                  : FinalizationRegistry,
              '%Function%': i,
              '%GeneratorFunction%': d,
              '%Int8Array%': 'undefined' == typeof Int8Array ? r : Int8Array,
              '%Int16Array%': 'undefined' == typeof Int16Array ? r : Int16Array,
              '%Int32Array%': 'undefined' == typeof Int32Array ? r : Int32Array,
              '%isFinite%': isFinite,
              '%isNaN%': isNaN,
              '%IteratorPrototype%': f ? p(p([][Symbol.iterator]())) : r,
              '%JSON%': 'object' == typeof JSON ? JSON : r,
              '%Map%': 'undefined' == typeof Map ? r : Map,
              '%MapIteratorPrototype%':
                'undefined' != typeof Map && f
                  ? p(new Map()[Symbol.iterator]())
                  : r,
              '%Math%': Math,
              '%Number%': Number,
              '%Object%': Object,
              '%parseFloat%': parseFloat,
              '%parseInt%': parseInt,
              '%Promise%': 'undefined' == typeof Promise ? r : Promise,
              '%Proxy%': 'undefined' == typeof Proxy ? r : Proxy,
              '%RangeError%': RangeError,
              '%ReferenceError%': ReferenceError,
              '%Reflect%': 'undefined' == typeof Reflect ? r : Reflect,
              '%RegExp%': RegExp,
              '%Set%': 'undefined' == typeof Set ? r : Set,
              '%SetIteratorPrototype%':
                'undefined' != typeof Set && f
                  ? p(new Set()[Symbol.iterator]())
                  : r,
              '%SharedArrayBuffer%':
                'undefined' == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
              '%String%': String,
              '%StringIteratorPrototype%': f ? p(''[Symbol.iterator]()) : r,
              '%Symbol%': f ? Symbol : r,
              '%SyntaxError%': o,
              '%ThrowTypeError%': l,
              '%TypedArray%': h,
              '%TypeError%': a,
              '%Uint8Array%': 'undefined' == typeof Uint8Array ? r : Uint8Array,
              '%Uint8ClampedArray%':
                'undefined' == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
              '%Uint16Array%':
                'undefined' == typeof Uint16Array ? r : Uint16Array,
              '%Uint32Array%':
                'undefined' == typeof Uint32Array ? r : Uint32Array,
              '%URIError%': URIError,
              '%WeakMap%': 'undefined' == typeof WeakMap ? r : WeakMap,
              '%WeakRef%': 'undefined' == typeof WeakRef ? r : WeakRef,
              '%WeakSet%': 'undefined' == typeof WeakSet ? r : WeakSet,
            };
          try {
            null.error;
          } catch (t) {
            var g = p(p(t));
            v['%Error.prototype%'] = g;
          }
          var m = function t(e) {
              var n;
              if ('%AsyncFunction%' === e) n = s('async function () {}');
              else if ('%GeneratorFunction%' === e) n = s('function* () {}');
              else if ('%AsyncGeneratorFunction%' === e)
                n = s('async function* () {}');
              else if ('%AsyncGenerator%' === e) {
                var r = t('%AsyncGeneratorFunction%');
                r && (n = r.prototype);
              } else if ('%AsyncIteratorPrototype%' === e) {
                var o = t('%AsyncGenerator%');
                o && (n = p(o.prototype));
              }
              return (v[e] = n), n;
            },
            y = {
              '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
              '%ArrayPrototype%': ['Array', 'prototype'],
              '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
              '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
              '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
              '%ArrayProto_values%': ['Array', 'prototype', 'values'],
              '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
              '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
              '%AsyncGeneratorPrototype%': [
                'AsyncGeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%BooleanPrototype%': ['Boolean', 'prototype'],
              '%DataViewPrototype%': ['DataView', 'prototype'],
              '%DatePrototype%': ['Date', 'prototype'],
              '%ErrorPrototype%': ['Error', 'prototype'],
              '%EvalErrorPrototype%': ['EvalError', 'prototype'],
              '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
              '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
              '%FunctionPrototype%': ['Function', 'prototype'],
              '%Generator%': ['GeneratorFunction', 'prototype'],
              '%GeneratorPrototype%': [
                'GeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
              '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
              '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
              '%JSONParse%': ['JSON', 'parse'],
              '%JSONStringify%': ['JSON', 'stringify'],
              '%MapPrototype%': ['Map', 'prototype'],
              '%NumberPrototype%': ['Number', 'prototype'],
              '%ObjectPrototype%': ['Object', 'prototype'],
              '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
              '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
              '%PromisePrototype%': ['Promise', 'prototype'],
              '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
              '%Promise_all%': ['Promise', 'all'],
              '%Promise_reject%': ['Promise', 'reject'],
              '%Promise_resolve%': ['Promise', 'resolve'],
              '%RangeErrorPrototype%': ['RangeError', 'prototype'],
              '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
              '%RegExpPrototype%': ['RegExp', 'prototype'],
              '%SetPrototype%': ['Set', 'prototype'],
              '%SharedArrayBufferPrototype%': [
                'SharedArrayBuffer',
                'prototype',
              ],
              '%StringPrototype%': ['String', 'prototype'],
              '%SymbolPrototype%': ['Symbol', 'prototype'],
              '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
              '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
              '%TypeErrorPrototype%': ['TypeError', 'prototype'],
              '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
              '%Uint8ClampedArrayPrototype%': [
                'Uint8ClampedArray',
                'prototype',
              ],
              '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
              '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
              '%URIErrorPrototype%': ['URIError', 'prototype'],
              '%WeakMapPrototype%': ['WeakMap', 'prototype'],
              '%WeakSetPrototype%': ['WeakSet', 'prototype'],
            },
            b = n(8612),
            x = n(7642),
            w = b.call(Function.call, Array.prototype.concat),
            E = b.call(Function.apply, Array.prototype.splice),
            S = b.call(Function.call, String.prototype.replace),
            O = b.call(Function.call, String.prototype.slice),
            A = b.call(Function.call, RegExp.prototype.exec),
            C =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            M = /\\(\\)?/g,
            D = function (t, e) {
              var n,
                r = t;
              if ((x(y, r) && (r = '%' + (n = y[r])[0] + '%'), x(v, r))) {
                var i = v[r];
                if ((i === d && (i = m(r)), void 0 === i && !e))
                  throw new a(
                    'intrinsic ' +
                      t +
                      ' exists, but is not available. Please file an issue!'
                  );
                return {
                  alias: n,
                  name: r,
                  value: i,
                };
              }
              throw new o('intrinsic ' + t + ' does not exist!');
            };
          t.exports = function (t, e) {
            if ('string' != typeof t || 0 === t.length)
              throw new a('intrinsic name must be a non-empty string');
            if (arguments.length > 1 && 'boolean' != typeof e)
              throw new a('"allowMissing" argument must be a boolean');
            if (null === A(/^%?[^%]*%?$/, t))
              throw new o(
                '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
              );
            var n = (function (t) {
                var e = O(t, 0, 1),
                  n = O(t, -1);
                if ('%' === e && '%' !== n)
                  throw new o('invalid intrinsic syntax, expected closing `%`');
                if ('%' === n && '%' !== e)
                  throw new o('invalid intrinsic syntax, expected opening `%`');
                var r = [];
                return (
                  S(t, C, function (t, e, n, o) {
                    r[r.length] = n ? S(o, M, '$1') : e || t;
                  }),
                  r
                );
              })(t),
              r = n.length > 0 ? n[0] : '',
              i = D('%' + r + '%', e),
              s = i.name,
              c = i.value,
              l = !1,
              f = i.alias;
            f && ((r = f[0]), E(n, w([0, 1], f)));
            for (var p = 1, d = !0; p < n.length; p += 1) {
              var h = n[p],
                g = O(h, 0, 1),
                m = O(h, -1);
              if (
                ('"' === g ||
                  "'" === g ||
                  '`' === g ||
                  '"' === m ||
                  "'" === m ||
                  '`' === m) &&
                g !== m
              )
                throw new o(
                  'property names with quotes must have matching quotes'
                );
              if (
                (('constructor' !== h && d) || (l = !0),
                x(v, (s = '%' + (r += '.' + h) + '%')))
              )
                c = v[s];
              else if (null != c) {
                if (!(h in c)) {
                  if (!e)
                    throw new a(
                      'base intrinsic for ' +
                        t +
                        ' exists, but the property is not available.'
                    );
                  return;
                }
                if (u && p + 1 >= n.length) {
                  var y = u(c, h);
                  c =
                    (d = !!y) && 'get' in y && !('originalValue' in y.get)
                      ? y.get
                      : c[h];
                } else (d = x(c, h)), (c = c[h]);
                d && !l && (v[s] = c);
              }
            }
            return c;
          };
        },
        7296: (t, e, n) => {
          'use strict';
          var r = n(210)('%Object.getOwnPropertyDescriptor%', !0);
          if (r)
            try {
              r([], 'length');
            } catch (t) {
              r = null;
            }
          t.exports = r;
        },
        1044: (t, e, n) => {
          'use strict';
          var r = n(210)('%Object.defineProperty%', !0),
            o = function () {
              if (r)
                try {
                  return (
                    r({}, 'a', {
                      value: 1,
                    }),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              return !1;
            };
          (o.hasArrayLengthDefineBug = function () {
            if (!o()) return null;
            try {
              return (
                1 !==
                r([], 'length', {
                  value: 1,
                }).length
              );
            } catch (t) {
              return !0;
            }
          }),
            (t.exports = o);
        },
        1405: (t, e, n) => {
          'use strict';
          var r = 'undefined' != typeof Symbol && Symbol,
            o = n(5419);
          t.exports = function () {
            return (
              'function' == typeof r &&
              'function' == typeof Symbol &&
              'symbol' == typeof r('foo') &&
              'symbol' == typeof Symbol('bar') &&
              o()
            );
          };
        },
        5419: (t) => {
          'use strict';
          t.exports = function () {
            if (
              'function' != typeof Symbol ||
              'function' != typeof Object.getOwnPropertySymbols
            )
              return !1;
            if ('symbol' == typeof Symbol.iterator) return !0;
            var t = {},
              e = Symbol('test'),
              n = Object(e);
            if ('string' == typeof e) return !1;
            if ('[object Symbol]' !== Object.prototype.toString.call(e))
              return !1;
            if ('[object Symbol]' !== Object.prototype.toString.call(n))
              return !1;
            for (e in ((t[e] = 42), t)) return !1;
            if ('function' == typeof Object.keys && 0 !== Object.keys(t).length)
              return !1;
            if (
              'function' == typeof Object.getOwnPropertyNames &&
              0 !== Object.getOwnPropertyNames(t).length
            )
              return !1;
            var r = Object.getOwnPropertySymbols(t);
            if (1 !== r.length || r[0] !== e) return !1;
            if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
            if ('function' == typeof Object.getOwnPropertyDescriptor) {
              var o = Object.getOwnPropertyDescriptor(t, e);
              if (42 !== o.value || !0 !== o.enumerable) return !1;
            }
            return !0;
          };
        },
        6410: (t, e, n) => {
          'use strict';
          var r = n(5419);
          t.exports = function () {
            return r() && !!Symbol.toStringTag;
          };
        },
        7642: (t, e, n) => {
          'use strict';
          var r = n(8612);
          t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
        },
        5717: (t) => {
          'function' == typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var n = function () {};
                  (n.prototype = e.prototype),
                    (t.prototype = new n()),
                    (t.prototype.constructor = t);
                }
              });
        },
        2584: (t, e, n) => {
          'use strict';
          var r = n(6410)(),
            o = n(1924)('Object.prototype.toString'),
            i = function (t) {
              return (
                !(r && t && 'object' == typeof t && Symbol.toStringTag in t) &&
                '[object Arguments]' === o(t)
              );
            },
            a = function (t) {
              return (
                !!i(t) ||
                (null !== t &&
                  'object' == typeof t &&
                  'number' == typeof t.length &&
                  t.length >= 0 &&
                  '[object Array]' !== o(t) &&
                  '[object Function]' === o(t.callee))
              );
            },
            s = (function () {
              return i(arguments);
            })();
          (i.isLegacyArguments = a), (t.exports = s ? i : a);
        },
        5320: (t) => {
          'use strict';
          var e,
            n,
            r = Function.prototype.toString,
            o = 'object' == typeof Reflect && null !== Reflect && Reflect.apply;
          if (
            'function' == typeof o &&
            'function' == typeof Object.defineProperty
          )
            try {
              (e = Object.defineProperty({}, 'length', {
                get: function () {
                  throw n;
                },
              })),
                (n = {}),
                o(
                  function () {
                    throw 42;
                  },
                  null,
                  e
                );
            } catch (t) {
              t !== n && (o = null);
            }
          else o = null;
          var i = /^\s*class\b/,
            a = function (t) {
              try {
                var e = r.call(t);
                return i.test(e);
              } catch (t) {
                return !1;
              }
            },
            s = function (t) {
              try {
                return !a(t) && (r.call(t), !0);
              } catch (t) {
                return !1;
              }
            },
            u = Object.prototype.toString,
            c = 'function' == typeof Symbol && !!Symbol.toStringTag,
            l = !(0 in [,]),
            f = function () {
              return !1;
            };
          if ('object' == typeof document) {
            var p = document.all;
            u.call(p) === u.call(document.all) &&
              (f = function (t) {
                if ((l || !t) && (void 0 === t || 'object' == typeof t))
                  try {
                    var e = u.call(t);
                    return (
                      ('[object HTMLAllCollection]' === e ||
                        '[object HTML document.all class]' === e ||
                        '[object HTMLCollection]' === e ||
                        '[object Object]' === e) &&
                      null == t('')
                    );
                  } catch (t) {}
                return !1;
              });
          }
          t.exports = o
            ? function (t) {
                if (f(t)) return !0;
                if (!t) return !1;
                if ('function' != typeof t && 'object' != typeof t) return !1;
                try {
                  o(t, null, e);
                } catch (t) {
                  if (t !== n) return !1;
                }
                return !a(t) && s(t);
              }
            : function (t) {
                if (f(t)) return !0;
                if (!t) return !1;
                if ('function' != typeof t && 'object' != typeof t) return !1;
                if (c) return s(t);
                if (a(t)) return !1;
                var e = u.call(t);
                return (
                  !(
                    '[object Function]' !== e &&
                    '[object GeneratorFunction]' !== e &&
                    !/^\[object HTML/.test(e)
                  ) && s(t)
                );
              };
        },
        8662: (t, e, n) => {
          'use strict';
          var r,
            o = Object.prototype.toString,
            i = Function.prototype.toString,
            a = /^\s*(?:function)?\*/,
            s = n(6410)(),
            u = Object.getPrototypeOf;
          t.exports = function (t) {
            if ('function' != typeof t) return !1;
            if (a.test(i.call(t))) return !0;
            if (!s) return '[object GeneratorFunction]' === o.call(t);
            if (!u) return !1;
            if (void 0 === r) {
              var e = (function () {
                if (!s) return !1;
                try {
                  return Function('return function*() {}')();
                } catch (t) {}
              })();
              r = !!e && u(e);
            }
            return u(t) === r;
          };
        },
        8611: (t) => {
          'use strict';
          t.exports = function (t) {
            return t != t;
          };
        },
        360: (t, e, n) => {
          'use strict';
          var r = n(5559),
            o = n(4289),
            i = n(8611),
            a = n(9415),
            s = n(3194),
            u = r(a(), Number);
          o(u, {
            getPolyfill: a,
            implementation: i,
            shim: s,
          }),
            (t.exports = u);
        },
        9415: (t, e, n) => {
          'use strict';
          var r = n(8611);
          t.exports = function () {
            return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')
              ? Number.isNaN
              : r;
          };
        },
        3194: (t, e, n) => {
          'use strict';
          var r = n(4289),
            o = n(9415);
          t.exports = function () {
            var t = o();
            return (
              r(
                Number,
                {
                  isNaN: t,
                },
                {
                  isNaN: function () {
                    return Number.isNaN !== t;
                  },
                }
              ),
              t
            );
          };
        },
        5692: (t, e, n) => {
          'use strict';
          var r = n(4029),
            o = n(3083),
            i = n(1924),
            a = i('Object.prototype.toString'),
            s = n(6410)(),
            u = n(7296),
            c = 'undefined' == typeof globalThis ? n.g : globalThis,
            l = o(),
            f =
              i('Array.prototype.indexOf', !0) ||
              function (t, e) {
                for (var n = 0; n < t.length; n += 1) if (t[n] === e) return n;
                return -1;
              },
            p = i('String.prototype.slice'),
            d = {},
            h = Object.getPrototypeOf;
          s &&
            u &&
            h &&
            r(l, function (t) {
              var e = new c[t]();
              if (Symbol.toStringTag in e) {
                var n = h(e),
                  r = u(n, Symbol.toStringTag);
                if (!r) {
                  var o = h(n);
                  r = u(o, Symbol.toStringTag);
                }
                d[t] = r.get;
              }
            });
          t.exports = function (t) {
            if (!t || 'object' != typeof t) return !1;
            if (!s || !(Symbol.toStringTag in t)) {
              var e = p(a(t), 8, -1);
              return f(l, e) > -1;
            }
            return (
              !!u &&
              (function (t) {
                var e = !1;
                return (
                  r(d, function (n, r) {
                    if (!e)
                      try {
                        e = n.call(t) === r;
                      } catch (t) {}
                  }),
                  e
                );
              })(t)
            );
          };
        },
        4244: (t) => {
          'use strict';
          var e = function (t) {
            return t != t;
          };
          t.exports = function (t, n) {
            return 0 === t && 0 === n
              ? 1 / t == 1 / n
              : t === n || !(!e(t) || !e(n));
          };
        },
        609: (t, e, n) => {
          'use strict';
          var r = n(4289),
            o = n(5559),
            i = n(4244),
            a = n(5624),
            s = n(2281),
            u = o(a(), Object);
          r(u, {
            getPolyfill: a,
            implementation: i,
            shim: s,
          }),
            (t.exports = u);
        },
        5624: (t, e, n) => {
          'use strict';
          var r = n(4244);
          t.exports = function () {
            return 'function' == typeof Object.is ? Object.is : r;
          };
        },
        2281: (t, e, n) => {
          'use strict';
          var r = n(5624),
            o = n(4289);
          t.exports = function () {
            var t = r();
            return (
              o(
                Object,
                {
                  is: t,
                },
                {
                  is: function () {
                    return Object.is !== t;
                  },
                }
              ),
              t
            );
          };
        },
        8987: (t, e, n) => {
          'use strict';
          var r;
          if (!Object.keys) {
            var o = Object.prototype.hasOwnProperty,
              i = Object.prototype.toString,
              a = n(1414),
              s = Object.prototype.propertyIsEnumerable,
              u = !s.call(
                {
                  toString: null,
                },
                'toString'
              ),
              c = s.call(function () {}, 'prototype'),
              l = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor',
              ],
              f = function (t) {
                var e = t.constructor;
                return e && e.prototype === t;
              },
              p = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $onmozfullscreenchange: !0,
                $onmozfullscreenerror: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0,
              },
              d = (function () {
                if ('undefined' == typeof window) return !1;
                for (var t in window)
                  try {
                    if (
                      !p['$' + t] &&
                      o.call(window, t) &&
                      null !== window[t] &&
                      'object' == typeof window[t]
                    )
                      try {
                        f(window[t]);
                      } catch (t) {
                        return !0;
                      }
                  } catch (t) {
                    return !0;
                  }
                return !1;
              })();
            r = function (t) {
              var e = null !== t && 'object' == typeof t,
                n = '[object Function]' === i.call(t),
                r = a(t),
                s = e && '[object String]' === i.call(t),
                p = [];
              if (!e && !n && !r)
                throw new TypeError('Object.keys called on a non-object');
              var h = c && n;
              if (s && t.length > 0 && !o.call(t, 0))
                for (var v = 0; v < t.length; ++v) p.push(String(v));
              if (r && t.length > 0)
                for (var g = 0; g < t.length; ++g) p.push(String(g));
              else
                for (var m in t)
                  (h && 'prototype' === m) ||
                    !o.call(t, m) ||
                    p.push(String(m));
              if (u)
                for (
                  var y = (function (t) {
                      if ('undefined' == typeof window || !d) return f(t);
                      try {
                        return f(t);
                      } catch (t) {
                        return !1;
                      }
                    })(t),
                    b = 0;
                  b < l.length;
                  ++b
                )
                  (y && 'constructor' === l[b]) ||
                    !o.call(t, l[b]) ||
                    p.push(l[b]);
              return p;
            };
          }
          t.exports = r;
        },
        2215: (t, e, n) => {
          'use strict';
          var r = Array.prototype.slice,
            o = n(1414),
            i = Object.keys,
            a = i
              ? function (t) {
                  return i(t);
                }
              : n(8987),
            s = Object.keys;
          (a.shim = function () {
            if (Object.keys) {
              var t = (function () {
                var t = Object.keys(arguments);
                return t && t.length === arguments.length;
              })(1, 2);
              t ||
                (Object.keys = function (t) {
                  return o(t) ? s(r.call(t)) : s(t);
                });
            } else Object.keys = a;
            return Object.keys || a;
          }),
            (t.exports = a);
        },
        1414: (t) => {
          'use strict';
          var e = Object.prototype.toString;
          t.exports = function (t) {
            var n = e.call(t),
              r = '[object Arguments]' === n;
            return (
              r ||
                (r =
                  '[object Array]' !== n &&
                  null !== t &&
                  'object' == typeof t &&
                  'number' == typeof t.length &&
                  t.length >= 0 &&
                  '[object Function]' === e.call(t.callee)),
              r
            );
          };
        },
        4155: (t) => {
          var e,
            n,
            r = (t.exports = {});
          function o() {
            throw new Error('setTimeout has not been defined');
          }
          function i() {
            throw new Error('clearTimeout has not been defined');
          }
          function a(t) {
            if (e === setTimeout) return setTimeout(t, 0);
            if ((e === o || !e) && setTimeout)
              return (e = setTimeout), setTimeout(t, 0);
            try {
              return e(t, 0);
            } catch (n) {
              try {
                return e.call(null, t, 0);
              } catch (n) {
                return e.call(this, t, 0);
              }
            }
          }
          !(function () {
            try {
              e = 'function' == typeof setTimeout ? setTimeout : o;
            } catch (t) {
              e = o;
            }
            try {
              n = 'function' == typeof clearTimeout ? clearTimeout : i;
            } catch (t) {
              n = i;
            }
          })();
          var s,
            u = [],
            c = !1,
            l = -1;
          function f() {
            c &&
              s &&
              ((c = !1),
              s.length ? (u = s.concat(u)) : (l = -1),
              u.length && p());
          }
          function p() {
            if (!c) {
              var t = a(f);
              c = !0;
              for (var e = u.length; e; ) {
                for (s = u, u = []; ++l < e; ) s && s[l].run();
                (l = -1), (e = u.length);
              }
              (s = null),
                (c = !1),
                (function (t) {
                  if (n === clearTimeout) return clearTimeout(t);
                  if ((n === i || !n) && clearTimeout)
                    return (n = clearTimeout), clearTimeout(t);
                  try {
                    return n(t);
                  } catch (e) {
                    try {
                      return n.call(null, t);
                    } catch (e) {
                      return n.call(this, t);
                    }
                  }
                })(t);
            }
          }
          function d(t, e) {
            (this.fun = t), (this.array = e);
          }
          function h() {}
          (r.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            u.push(new d(t, e)), 1 !== u.length || c || a(p);
          }),
            (d.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (r.title = 'browser'),
            (r.browser = !0),
            (r.env = {}),
            (r.argv = []),
            (r.version = ''),
            (r.versions = {}),
            (r.on = h),
            (r.addListener = h),
            (r.once = h),
            (r.off = h),
            (r.removeListener = h),
            (r.removeAllListeners = h),
            (r.emit = h),
            (r.prependListener = h),
            (r.prependOnceListener = h),
            (r.listeners = function (t) {
              return [];
            }),
            (r.binding = function (t) {
              throw new Error('process.binding is not supported');
            }),
            (r.cwd = function () {
              return '/';
            }),
            (r.chdir = function (t) {
              throw new Error('process.chdir is not supported');
            }),
            (r.umask = function () {
              return 0;
            });
        },
        384: (t) => {
          t.exports = function (t) {
            return (
              t &&
              'object' == typeof t &&
              'function' == typeof t.copy &&
              'function' == typeof t.fill &&
              'function' == typeof t.readUInt8
            );
          };
        },
        5955: (t, e, n) => {
          'use strict';
          var r = n(2584),
            o = n(8662),
            i = n(6430),
            a = n(5692);
          function s(t) {
            return t.call.bind(t);
          }
          var u = 'undefined' != typeof BigInt,
            c = 'undefined' != typeof Symbol,
            l = s(Object.prototype.toString),
            f = s(Number.prototype.valueOf),
            p = s(String.prototype.valueOf),
            d = s(Boolean.prototype.valueOf);
          if (u) var h = s(BigInt.prototype.valueOf);
          if (c) var v = s(Symbol.prototype.valueOf);
          function g(t, e) {
            if ('object' != typeof t) return !1;
            try {
              return e(t), !0;
            } catch (t) {
              return !1;
            }
          }
          function m(t) {
            return '[object Map]' === l(t);
          }
          function y(t) {
            return '[object Set]' === l(t);
          }
          function b(t) {
            return '[object WeakMap]' === l(t);
          }
          function x(t) {
            return '[object WeakSet]' === l(t);
          }
          function w(t) {
            return '[object ArrayBuffer]' === l(t);
          }
          function E(t) {
            return (
              'undefined' != typeof ArrayBuffer &&
              (w.working ? w(t) : t instanceof ArrayBuffer)
            );
          }
          function S(t) {
            return '[object DataView]' === l(t);
          }
          function O(t) {
            return (
              'undefined' != typeof DataView &&
              (S.working ? S(t) : t instanceof DataView)
            );
          }
          (e.isArgumentsObject = r),
            (e.isGeneratorFunction = o),
            (e.isTypedArray = a),
            (e.isPromise = function (t) {
              return (
                ('undefined' != typeof Promise && t instanceof Promise) ||
                (null !== t &&
                  'object' == typeof t &&
                  'function' == typeof t.then &&
                  'function' == typeof t.catch)
              );
            }),
            (e.isArrayBufferView = function (t) {
              return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(t)
                : a(t) || O(t);
            }),
            (e.isUint8Array = function (t) {
              return 'Uint8Array' === i(t);
            }),
            (e.isUint8ClampedArray = function (t) {
              return 'Uint8ClampedArray' === i(t);
            }),
            (e.isUint16Array = function (t) {
              return 'Uint16Array' === i(t);
            }),
            (e.isUint32Array = function (t) {
              return 'Uint32Array' === i(t);
            }),
            (e.isInt8Array = function (t) {
              return 'Int8Array' === i(t);
            }),
            (e.isInt16Array = function (t) {
              return 'Int16Array' === i(t);
            }),
            (e.isInt32Array = function (t) {
              return 'Int32Array' === i(t);
            }),
            (e.isFloat32Array = function (t) {
              return 'Float32Array' === i(t);
            }),
            (e.isFloat64Array = function (t) {
              return 'Float64Array' === i(t);
            }),
            (e.isBigInt64Array = function (t) {
              return 'BigInt64Array' === i(t);
            }),
            (e.isBigUint64Array = function (t) {
              return 'BigUint64Array' === i(t);
            }),
            (m.working = 'undefined' != typeof Map && m(new Map())),
            (e.isMap = function (t) {
              return (
                'undefined' != typeof Map &&
                (m.working ? m(t) : t instanceof Map)
              );
            }),
            (y.working = 'undefined' != typeof Set && y(new Set())),
            (e.isSet = function (t) {
              return (
                'undefined' != typeof Set &&
                (y.working ? y(t) : t instanceof Set)
              );
            }),
            (b.working = 'undefined' != typeof WeakMap && b(new WeakMap())),
            (e.isWeakMap = function (t) {
              return (
                'undefined' != typeof WeakMap &&
                (b.working ? b(t) : t instanceof WeakMap)
              );
            }),
            (x.working = 'undefined' != typeof WeakSet && x(new WeakSet())),
            (e.isWeakSet = function (t) {
              return x(t);
            }),
            (w.working =
              'undefined' != typeof ArrayBuffer && w(new ArrayBuffer())),
            (e.isArrayBuffer = E),
            (S.working =
              'undefined' != typeof ArrayBuffer &&
              'undefined' != typeof DataView &&
              S(new DataView(new ArrayBuffer(1), 0, 1))),
            (e.isDataView = O);
          var A =
            'undefined' != typeof SharedArrayBuffer
              ? SharedArrayBuffer
              : void 0;
          function C(t) {
            return '[object SharedArrayBuffer]' === l(t);
          }
          function M(t) {
            return (
              void 0 !== A &&
              (void 0 === C.working && (C.working = C(new A())),
              C.working ? C(t) : t instanceof A)
            );
          }
          function D(t) {
            return g(t, f);
          }
          function P(t) {
            return g(t, p);
          }
          function j(t) {
            return g(t, d);
          }
          function T(t) {
            return u && g(t, h);
          }
          function R(t) {
            return c && g(t, v);
          }
          (e.isSharedArrayBuffer = M),
            (e.isAsyncFunction = function (t) {
              return '[object AsyncFunction]' === l(t);
            }),
            (e.isMapIterator = function (t) {
              return '[object Map Iterator]' === l(t);
            }),
            (e.isSetIterator = function (t) {
              return '[object Set Iterator]' === l(t);
            }),
            (e.isGeneratorObject = function (t) {
              return '[object Generator]' === l(t);
            }),
            (e.isWebAssemblyCompiledModule = function (t) {
              return '[object WebAssembly.Module]' === l(t);
            }),
            (e.isNumberObject = D),
            (e.isStringObject = P),
            (e.isBooleanObject = j),
            (e.isBigIntObject = T),
            (e.isSymbolObject = R),
            (e.isBoxedPrimitive = function (t) {
              return D(t) || P(t) || j(t) || T(t) || R(t);
            }),
            (e.isAnyArrayBuffer = function (t) {
              return 'undefined' != typeof Uint8Array && (E(t) || M(t));
            }),
            ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(
              function (t) {
                Object.defineProperty(e, t, {
                  enumerable: !1,
                  value: function () {
                    throw new Error(t + ' is not supported in userland');
                  },
                });
              }
            );
        },
        9539: (t, e, n) => {
          var r = n(4155),
            o = n(5108),
            i =
              Object.getOwnPropertyDescriptors ||
              function (t) {
                for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++)
                  n[e[r]] = Object.getOwnPropertyDescriptor(t, e[r]);
                return n;
              },
            a = /%[sdj%]/g;
          (e.format = function (t) {
            if (!x(t)) {
              for (var e = [], n = 0; n < arguments.length; n++)
                e.push(l(arguments[n]));
              return e.join(' ');
            }
            n = 1;
            for (
              var r = arguments,
                o = r.length,
                i = String(t).replace(a, function (t) {
                  if ('%%' === t) return '%';
                  if (n >= o) return t;
                  switch (t) {
                    case '%s':
                      return String(r[n++]);
                    case '%d':
                      return Number(r[n++]);
                    case '%j':
                      try {
                        return JSON.stringify(r[n++]);
                      } catch (t) {
                        return '[Circular]';
                      }
                    default:
                      return t;
                  }
                }),
                s = r[n];
              n < o;
              s = r[++n]
            )
              y(s) || !S(s) ? (i += ' ' + s) : (i += ' ' + l(s));
            return i;
          }),
            (e.deprecate = function (t, n) {
              if (void 0 !== r && !0 === r.noDeprecation) return t;
              if (void 0 === r)
                return function () {
                  return e.deprecate(t, n).apply(this, arguments);
                };
              var i = !1;
              return function () {
                if (!i) {
                  if (r.throwDeprecation) throw new Error(n);
                  r.traceDeprecation ? o.trace(n) : o.error(n), (i = !0);
                }
                return t.apply(this, arguments);
              };
            });
          var s = {},
            u = /^$/;
          if (r.env.NODE_DEBUG) {
            var c = r.env.NODE_DEBUG;
            (c = c
              .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
              .replace(/\*/g, '.*')
              .replace(/,/g, '$|^')
              .toUpperCase()),
              (u = new RegExp('^' + c + '$', 'i'));
          }
          function l(t, n) {
            var r = {
              seen: [],
              stylize: p,
            };
            return (
              arguments.length >= 3 && (r.depth = arguments[2]),
              arguments.length >= 4 && (r.colors = arguments[3]),
              m(n) ? (r.showHidden = n) : n && e._extend(r, n),
              w(r.showHidden) && (r.showHidden = !1),
              w(r.depth) && (r.depth = 2),
              w(r.colors) && (r.colors = !1),
              w(r.customInspect) && (r.customInspect = !0),
              r.colors && (r.stylize = f),
              d(r, t, r.depth)
            );
          }
          function f(t, e) {
            var n = l.styles[e];
            return n
              ? '[' + l.colors[n][0] + 'm' + t + '[' + l.colors[n][1] + 'm'
              : t;
          }
          function p(t, e) {
            return t;
          }
          function d(t, n, r) {
            if (
              t.customInspect &&
              n &&
              C(n.inspect) &&
              n.inspect !== e.inspect &&
              (!n.constructor || n.constructor.prototype !== n)
            ) {
              var o = n.inspect(r, t);
              return x(o) || (o = d(t, o, r)), o;
            }
            var i = (function (t, e) {
              if (w(e)) return t.stylize('undefined', 'undefined');
              if (x(e)) {
                var n =
                  "'" +
                  JSON.stringify(e)
                    .replace(/^"|"$/g, '')
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') +
                  "'";
                return t.stylize(n, 'string');
              }
              if (b(e)) return t.stylize('' + e, 'number');
              if (m(e)) return t.stylize('' + e, 'boolean');
              if (y(e)) return t.stylize('null', 'null');
            })(t, n);
            if (i) return i;
            var a = Object.keys(n),
              s = (function (t) {
                var e = {};
                return (
                  t.forEach(function (t, n) {
                    e[t] = !0;
                  }),
                  e
                );
              })(a);
            if (
              (t.showHidden && (a = Object.getOwnPropertyNames(n)),
              A(n) &&
                (a.indexOf('message') >= 0 || a.indexOf('description') >= 0))
            )
              return h(n);
            if (0 === a.length) {
              if (C(n)) {
                var u = n.name ? ': ' + n.name : '';
                return t.stylize('[Function' + u + ']', 'special');
              }
              if (E(n))
                return t.stylize(RegExp.prototype.toString.call(n), 'regexp');
              if (O(n))
                return t.stylize(Date.prototype.toString.call(n), 'date');
              if (A(n)) return h(n);
            }
            var c,
              l = '',
              f = !1,
              p = ['{', '}'];
            (g(n) && ((f = !0), (p = ['[', ']'])), C(n)) &&
              (l = ' [Function' + (n.name ? ': ' + n.name : '') + ']');
            return (
              E(n) && (l = ' ' + RegExp.prototype.toString.call(n)),
              O(n) && (l = ' ' + Date.prototype.toUTCString.call(n)),
              A(n) && (l = ' ' + h(n)),
              0 !== a.length || (f && 0 != n.length)
                ? r < 0
                  ? E(n)
                    ? t.stylize(RegExp.prototype.toString.call(n), 'regexp')
                    : t.stylize('[Object]', 'special')
                  : (t.seen.push(n),
                    (c = f
                      ? (function (t, e, n, r, o) {
                          for (var i = [], a = 0, s = e.length; a < s; ++a)
                            j(e, String(a))
                              ? i.push(v(t, e, n, r, String(a), !0))
                              : i.push('');
                          return (
                            o.forEach(function (o) {
                              o.match(/^\d+$/) || i.push(v(t, e, n, r, o, !0));
                            }),
                            i
                          );
                        })(t, n, r, s, a)
                      : a.map(function (e) {
                          return v(t, n, r, s, e, f);
                        })),
                    t.seen.pop(),
                    (function (t, e, n) {
                      var r = t.reduce(function (t, e) {
                        return (
                          e.indexOf('\n') >= 0 && 0,
                          t + e.replace(/\u001b\[\d\d?m/g, '').length + 1
                        );
                      }, 0);
                      if (r > 60)
                        return (
                          n[0] +
                          ('' === e ? '' : e + '\n ') +
                          ' ' +
                          t.join(',\n  ') +
                          ' ' +
                          n[1]
                        );
                      return n[0] + e + ' ' + t.join(', ') + ' ' + n[1];
                    })(c, l, p))
                : p[0] + l + p[1]
            );
          }
          function h(t) {
            return '[' + Error.prototype.toString.call(t) + ']';
          }
          function v(t, e, n, r, o, i) {
            var a, s, u;
            if (
              ((u = Object.getOwnPropertyDescriptor(e, o) || {
                value: e[o],
              }).get
                ? (s = u.set
                    ? t.stylize('[Getter/Setter]', 'special')
                    : t.stylize('[Getter]', 'special'))
                : u.set && (s = t.stylize('[Setter]', 'special')),
              j(r, o) || (a = '[' + o + ']'),
              s ||
                (t.seen.indexOf(u.value) < 0
                  ? (s = y(n)
                      ? d(t, u.value, null)
                      : d(t, u.value, n - 1)).indexOf('\n') > -1 &&
                    (s = i
                      ? s
                          .split('\n')
                          .map(function (t) {
                            return '  ' + t;
                          })
                          .join('\n')
                          .slice(2)
                      : '\n' +
                        s
                          .split('\n')
                          .map(function (t) {
                            return '   ' + t;
                          })
                          .join('\n'))
                  : (s = t.stylize('[Circular]', 'special'))),
              w(a))
            ) {
              if (i && o.match(/^\d+$/)) return s;
              (a = JSON.stringify('' + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                ? ((a = a.slice(1, -1)), (a = t.stylize(a, 'name')))
                : ((a = a
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'")),
                  (a = t.stylize(a, 'string')));
            }
            return a + ': ' + s;
          }
          function g(t) {
            return Array.isArray(t);
          }
          function m(t) {
            return 'boolean' == typeof t;
          }
          function y(t) {
            return null === t;
          }
          function b(t) {
            return 'number' == typeof t;
          }
          function x(t) {
            return 'string' == typeof t;
          }
          function w(t) {
            return void 0 === t;
          }
          function E(t) {
            return S(t) && '[object RegExp]' === M(t);
          }
          function S(t) {
            return 'object' == typeof t && null !== t;
          }
          function O(t) {
            return S(t) && '[object Date]' === M(t);
          }
          function A(t) {
            return S(t) && ('[object Error]' === M(t) || t instanceof Error);
          }
          function C(t) {
            return 'function' == typeof t;
          }
          function M(t) {
            return Object.prototype.toString.call(t);
          }
          function D(t) {
            return t < 10 ? '0' + t.toString(10) : t.toString(10);
          }
          (e.debuglog = function (t) {
            if (((t = t.toUpperCase()), !s[t]))
              if (u.test(t)) {
                var n = r.pid;
                s[t] = function () {
                  var r = e.format.apply(e, arguments);
                  o.error('%s %d: %s', t, n, r);
                };
              } else s[t] = function () {};
            return s[t];
          }),
            (e.inspect = l),
            (l.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39],
            }),
            (l.styles = {
              special: 'cyan',
              number: 'yellow',
              boolean: 'yellow',
              undefined: 'grey',
              null: 'bold',
              string: 'green',
              date: 'magenta',
              regexp: 'red',
            }),
            (e.types = n(5955)),
            (e.isArray = g),
            (e.isBoolean = m),
            (e.isNull = y),
            (e.isNullOrUndefined = function (t) {
              return null == t;
            }),
            (e.isNumber = b),
            (e.isString = x),
            (e.isSymbol = function (t) {
              return 'symbol' == typeof t;
            }),
            (e.isUndefined = w),
            (e.isRegExp = E),
            (e.types.isRegExp = E),
            (e.isObject = S),
            (e.isDate = O),
            (e.types.isDate = O),
            (e.isError = A),
            (e.types.isNativeError = A),
            (e.isFunction = C),
            (e.isPrimitive = function (t) {
              return (
                null === t ||
                'boolean' == typeof t ||
                'number' == typeof t ||
                'string' == typeof t ||
                'symbol' == typeof t ||
                void 0 === t
              );
            }),
            (e.isBuffer = n(384));
          var P = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ];
          function j(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          (e.log = function () {
            var t, n;
            (t = new Date()),
              (n = [D(t.getHours()), D(t.getMinutes()), D(t.getSeconds())].join(
                ':'
              )),
              [t.getDate(), P[t.getMonth()], n].join(' '),
              e.format.apply(e, arguments);
          }),
            (e.inherits = n(5717)),
            (e._extend = function (t, e) {
              if (!e || !S(e)) return t;
              for (var n = Object.keys(e), r = n.length; r--; )
                t[n[r]] = e[n[r]];
              return t;
            });
          var T =
            'undefined' != typeof Symbol
              ? Symbol('util.promisify.custom')
              : void 0;
          function R(t, e) {
            if (!t) {
              var n = new Error('Promise was rejected with a falsy value');
              (n.reason = t), (t = n);
            }
            return e(t);
          }
          (e.promisify = function (t) {
            if ('function' != typeof t)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            if (T && t[T]) {
              var e;
              if ('function' != typeof (e = t[T]))
                throw new TypeError(
                  'The "util.promisify.custom" argument must be of type Function'
                );
              return (
                Object.defineProperty(e, T, {
                  value: e,
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                }),
                e
              );
            }
            function e() {
              for (
                var e,
                  n,
                  r = new Promise(function (t, r) {
                    (e = t), (n = r);
                  }),
                  o = [],
                  i = 0;
                i < arguments.length;
                i++
              )
                o.push(arguments[i]);
              o.push(function (t, r) {
                t ? n(t) : e(r);
              });
              try {
                t.apply(this, o);
              } catch (t) {
                n(t);
              }
              return r;
            }
            return (
              Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
              T &&
                Object.defineProperty(e, T, {
                  value: e,
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                }),
              Object.defineProperties(e, i(t))
            );
          }),
            (e.promisify.custom = T),
            (e.callbackify = function (t) {
              if ('function' != typeof t)
                throw new TypeError(
                  'The "original" argument must be of type Function'
                );
              function e() {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e.push(arguments[n]);
                var o = e.pop();
                if ('function' != typeof o)
                  throw new TypeError(
                    'The last argument must be of type Function'
                  );
                var i = this,
                  a = function () {
                    return o.apply(i, arguments);
                  };
                t.apply(this, e).then(
                  function (t) {
                    r.nextTick(a.bind(null, null, t));
                  },
                  function (t) {
                    r.nextTick(R.bind(null, t, a));
                  }
                );
              }
              return (
                Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
                Object.defineProperties(e, i(t)),
                e
              );
            });
        },
        6430: (t, e, n) => {
          'use strict';
          var r = n(4029),
            o = n(3083),
            i = n(1924),
            a = n(7296),
            s = i('Object.prototype.toString'),
            u = n(6410)(),
            c = 'undefined' == typeof globalThis ? n.g : globalThis,
            l = o(),
            f = i('String.prototype.slice'),
            p = {},
            d = Object.getPrototypeOf;
          u &&
            a &&
            d &&
            r(l, function (t) {
              if ('function' == typeof c[t]) {
                var e = new c[t]();
                if (Symbol.toStringTag in e) {
                  var n = d(e),
                    r = a(n, Symbol.toStringTag);
                  if (!r) {
                    var o = d(n);
                    r = a(o, Symbol.toStringTag);
                  }
                  p[t] = r.get;
                }
              }
            });
          var h = n(5692);
          t.exports = function (t) {
            return (
              !!h(t) &&
              (u && Symbol.toStringTag in t
                ? (function (t) {
                    var e = !1;
                    return (
                      r(p, function (n, r) {
                        if (!e)
                          try {
                            var o = n.call(t);
                            o === r && (e = o);
                          } catch (t) {}
                      }),
                      e
                    );
                  })(t)
                : f(s(t), 8, -1))
            );
          };
        },
        3083: (t, e, n) => {
          'use strict';
          var r = [
              'BigInt64Array',
              'BigUint64Array',
              'Float32Array',
              'Float64Array',
              'Int16Array',
              'Int32Array',
              'Int8Array',
              'Uint16Array',
              'Uint32Array',
              'Uint8Array',
              'Uint8ClampedArray',
            ],
            o = 'undefined' == typeof globalThis ? n.g : globalThis;
          t.exports = function () {
            for (var t = [], e = 0; e < r.length; e++)
              'function' == typeof o[r[e]] && (t[t.length] = r[e]);
            return t;
          };
        },
      },
      e = {};
    function n(r) {
      var o = e[r];
      if (void 0 !== o) return o.exports;
      var i = (e[r] = {
        id: r,
        exports: {},
      });
      return t[r](i, i.exports, n), i.exports;
    }
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return (
        n.d(e, {
          a: e,
        }),
        e
      );
    }),
      (n.d = (t, e) => {
        for (var r in e)
          n.o(e, r) &&
            !n.o(t, r) &&
            Object.defineProperty(t, r, {
              enumerable: !0,
              get: e[r],
            });
      }),
      (n.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (t) {
          if ('object' == typeof window) return window;
        }
      })()),
      (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (n.r = (t) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: 'Module',
          }),
          Object.defineProperty(t, '__esModule', {
            value: !0,
          });
      });
    var r = {};
    return (
      (() => {
        'use strict';
        n.r(r);
        n(4916),
          n(2564),
          n(1539),
          n(8674),
          n(9070),
          n(2526),
          n(1817),
          n(2165),
          n(6992),
          n(8783),
          n(3948),
          n(2443),
          n(9341),
          n(3706),
          n(2703),
          n(8011),
          n(489),
          n(9554),
          n(4747),
          n(8309),
          n(8304),
          n(5069),
          n(7042);
        var t = n(4853),
          e = n(9059);
        n(9601), n(7327), n(6755);
        function o(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          return e
            .map(function (e) {
              return e
                .split(' ')
                .map(function (e) {
                  return e ? '' + t + e : '';
                })
                .join(' ');
            })
            .join(' ');
        }
        function i(t, e) {
          return function (n) {
            n && (t[e] = n);
          };
        }
        function a(t, e, n) {
          return function (r) {
            r && (t[e][n] = r);
          };
        }
        function s(t, e) {
          return function (n) {
            var r = n.prototype;
            t.forEach(function (t) {
              e(r, t);
            });
          };
        }
        var u = (function () {
            function t() {
              (this.keys = []), (this.values = []);
            }
            var e = t.prototype;
            return (
              (e.get = function (t) {
                return this.values[this.keys.indexOf(t)];
              }),
              (e.set = function (t, e) {
                var n = this.keys,
                  r = this.values,
                  o = n.indexOf(t),
                  i = -1 === o ? n.length : o;
                (n[i] = t), (r[i] = e);
              }),
              t
            );
          })(),
          c = (function () {
            function t() {
              this.object = {};
            }
            var e = t.prototype;
            return (
              (e.get = function (t) {
                return this.object[t];
              }),
              (e.set = function (t, e) {
                this.object[t] = e;
              }),
              t
            );
          })(),
          l = 'function' == typeof Map,
          f = (function () {
            function t() {}
            var e = t.prototype;
            return (
              (e.connect = function (t, e) {
                (this.prev = t),
                  (this.next = e),
                  t && (t.next = this),
                  e && (e.prev = this);
              }),
              (e.disconnect = function () {
                var t = this.prev,
                  e = this.next;
                t && (t.next = e), e && (e.prev = t);
              }),
              (e.getIndex = function () {
                for (var t = this, e = -1; t; ) (t = t.prev), ++e;
                return e;
              }),
              t
            );
          })();
        var p = (function () {
          function t(t, e, n, r, o, i, a, s) {
            (this.prevList = t),
              (this.list = e),
              (this.added = n),
              (this.removed = r),
              (this.changed = o),
              (this.maintained = i),
              (this.changedBeforeAdded = a),
              (this.fixed = s);
          }
          var e = t.prototype;
          return (
            Object.defineProperty(e, 'ordered', {
              get: function () {
                return (
                  this.cacheOrdered || this.caculateOrdered(), this.cacheOrdered
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e, 'pureChanged', {
              get: function () {
                return (
                  this.cachePureChanged || this.caculateOrdered(),
                  this.cachePureChanged
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.caculateOrdered = function () {
              var t = (function (t, e) {
                  var n = [],
                    r = [];
                  return (
                    t.forEach(function (t) {
                      var e = t[0],
                        o = t[1],
                        i = new f();
                      (n[e] = i), (r[o] = i);
                    }),
                    n.forEach(function (t, e) {
                      t.connect(n[e - 1]);
                    }),
                    t
                      .filter(function (t, n) {
                        return !e[n];
                      })
                      .map(function (t, e) {
                        var o = t[0],
                          i = t[1];
                        if (o === i) return [0, 0];
                        var a = n[o],
                          s = r[i - 1],
                          u = a.getIndex();
                        return (
                          a.disconnect(),
                          s ? a.connect(s, s.next) : a.connect(void 0, n[0]),
                          [u, a.getIndex()]
                        );
                      })
                  );
                })(this.changedBeforeAdded, this.fixed),
                e = this.changed,
                n = [];
              (this.cacheOrdered = t.filter(function (t, r) {
                var o = t[0],
                  i = t[1],
                  a = e[r],
                  s = a[0],
                  u = a[1];
                if (o !== i) return n.push([s, u]), !0;
              })),
                (this.cachePureChanged = n);
            }),
            t
          );
        })();
        function d(t, e, n) {
          var r = l ? Map : n ? c : u,
            o =
              n ||
              function (t) {
                return t;
              },
            i = [],
            a = [],
            s = [],
            f = t.map(o),
            d = e.map(o),
            h = new r(),
            v = new r(),
            g = [],
            m = [],
            y = {},
            b = [],
            x = 0,
            w = 0;
          return (
            f.forEach(function (t, e) {
              h.set(t, e);
            }),
            d.forEach(function (t, e) {
              v.set(t, e);
            }),
            f.forEach(function (t, e) {
              var n = v.get(t);
              void 0 === n ? (++w, a.push(e)) : (y[n] = w);
            }),
            d.forEach(function (t, e) {
              var n = h.get(t);
              void 0 === n
                ? (i.push(e), ++x)
                : (s.push([n, e]),
                  (w = y[e] || 0),
                  g.push([n - w, e - x]),
                  m.push(e === n),
                  n !== e && b.push([n, e]));
            }),
            a.reverse(),
            new p(t, e, i, a, b, s, g, m)
          );
        }
        var h = (function () {
          function t(t, e) {
            void 0 === t && (t = []),
              (this.findKeyCallback = e),
              (this.list = [].slice.call(t));
          }
          return (
            (t.prototype.update = function (t) {
              var e = [].slice.call(t),
                n = d(this.list, e, this.findKeyCallback);
              return (this.list = e), n;
            }),
            t
          );
        })();
        const v = h;
        var g = 'function',
          m = 'object',
          y = 'string',
          b = 'number',
          x = 'undefined',
          w =
            (typeof document !== x && document,
            [
              {
                open: '(',
                close: ')',
              },
              {
                open: '"',
                close: '"',
              },
              {
                open: "'",
                close: "'",
              },
              {
                open: '\\"',
                close: '\\"',
              },
              {
                open: "\\'",
                close: "\\'",
              },
            ]),
          E = 1e-7,
          S = {
            cm: function (t) {
              return (96 * t) / 2.54;
            },
            mm: function (t) {
              return (96 * t) / 254;
            },
            in: function (t) {
              return 96 * t;
            },
            pt: function (t) {
              return (96 * t) / 72;
            },
            pc: function (t) {
              return (96 * t) / 6;
            },
            '%': function (t, e) {
              return (t * e) / 100;
            },
            vw: function (t, e) {
              return void 0 === e && (e = window.innerWidth), (t / 100) * e;
            },
            vh: function (t, e) {
              return void 0 === e && (e = window.innerHeight), (t / 100) * e;
            },
            vmax: function (t, e) {
              return (
                void 0 === e &&
                  (e = Math.max(window.innerWidth, window.innerHeight)),
                (t / 100) * e
              );
            },
            vmin: function (t, e) {
              return (
                void 0 === e &&
                  (e = Math.min(window.innerWidth, window.innerHeight)),
                (t / 100) * e
              );
            },
          };
        function O(t) {
          return typeof t === x;
        }
        function A(t) {
          return t && typeof t === m;
        }
        function C(t) {
          return Array.isArray(t);
        }
        function M(t) {
          return typeof t === y;
        }
        function D(t) {
          return typeof t === g;
        }
        function P(t, e, n, r, o) {
          return j(t, e, n)
            ? n
            : (function (t, e, n, r, o) {
                for (
                  var i,
                    a = function (n) {
                      var a = e[n].trim();
                      if (a === t.close && !j(t, e, n))
                        return {
                          value: n,
                        };
                      var s = n,
                        u = z(o, function (t) {
                          return t.open === a;
                        });
                      if ((u && (s = P(u, e, n, r, o)), -1 === s))
                        return (i = n), 'break';
                      i = n = s;
                    },
                    s = n;
                  s < r;
                  ++s
                ) {
                  var u = a(s);
                  if (((s = i), 'object' == typeof u)) return u.value;
                  if ('break' === u) break;
                }
                return -1;
              })(t, e, n + 1, r, o);
        }
        function j(t, e, n) {
          if (!t.ignore) return null;
          var r = e.slice(Math.max(n - 3, 0), n + 3).join('');
          return new RegExp(t.ignore).exec(r);
        }
        function T(t, e) {
          var n = M(e)
              ? {
                  separator: e,
                }
              : e,
            r = n.separator,
            o = void 0 === r ? ',' : r,
            i = n.isSeparateFirst,
            a = n.isSeparateOnlyOpenClose,
            s = n.isSeparateOpenClose,
            u = void 0 === s ? a : s,
            c = n.openCloseCharacters,
            l = void 0 === c ? w : c,
            f = l
              .map(function (t) {
                var e = t.open,
                  n = t.close;
                return e === n ? e : e + '|' + n;
              })
              .join('|'),
            p = new RegExp('(\\s*' + o + '\\s*|' + f + '|\\s+)', 'g'),
            d = t.split(p).filter(function (t) {
              return t && 'undefined' !== t;
            }),
            h = d.length,
            v = [],
            g = [];
          function m() {
            return !!g.length && (v.push(g.join('')), (g = []), !0);
          }
          for (
            var y,
              b = function (e) {
                var n = d[e].trim(),
                  r = e,
                  s = z(l, function (t) {
                    return t.open === n;
                  }),
                  c = z(l, function (t) {
                    return t.close === n;
                  });
                if (s) {
                  if (-1 !== (r = P(s, d, e, h, l)) && u)
                    return m() && i
                      ? ((y = e), 'break')
                      : (v.push(d.slice(e, r + 1).join('')),
                        (e = r),
                        i ? ((y = e), 'break') : ((y = e), 'continue'));
                } else {
                  if (c && !j(c, d, e)) {
                    var f = (function () {
                      for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                        t += arguments[e].length;
                      var r = Array(t),
                        o = 0;
                      for (e = 0; e < n; e++)
                        for (
                          var i = arguments[e], a = 0, s = i.length;
                          a < s;
                          a++, o++
                        )
                          r[o] = i[a];
                      return r;
                    })(l);
                    return (
                      f.splice(l.indexOf(c), 1),
                      {
                        value: T(t, {
                          separator: o,
                          isSeparateFirst: i,
                          isSeparateOnlyOpenClose: a,
                          isSeparateOpenClose: u,
                          openCloseCharacters: f,
                        }),
                      }
                    );
                  }
                  if (
                    (function (t, e) {
                      return (
                        (('' === e || ' ' == e) && ('' === t || ' ' == t)) ||
                        t === e
                      );
                    })(n, o) &&
                    !a
                  )
                    return m(), i ? ((y = e), 'break') : ((y = e), 'continue');
                }
                -1 === r && (r = h - 1),
                  g.push(d.slice(e, r + 1).join('')),
                  (y = e = r);
              },
              x = 0;
            x < h;
            ++x
          ) {
            var E = b(x);
            if (((x = y), 'object' == typeof E)) return E.value;
            if ('break' === E) break;
          }
          return g.length && v.push(g.join('')), v;
        }
        function R(t) {
          return T(t, '');
        }
        function k(t) {
          return T(t, ',');
        }
        function B(t) {
          var e = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
          return !e || e.length < 4
            ? {}
            : {
                prefix: e[1],
                value: e[2],
                suffix: e[3],
              };
        }
        function I(t) {
          var e = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);
          if (!e)
            return {
              prefix: '',
              unit: '',
              value: NaN,
            };
          var n = e[1],
            r = e[2];
          return {
            prefix: n,
            unit: e[3],
            value: parseFloat(r),
          };
        }
        function _(t, e) {
          return (
            void 0 === e && (e = '-'),
            t.replace(/([a-z])([A-Z])/g, function (t, n, r) {
              return '' + n + e + r.toLowerCase();
            })
          );
        }
        function F() {
          return Date.now ? Date.now() : new Date().getTime();
        }
        function N(t, e, n) {
          void 0 === n && (n = -1);
          for (var r = t.length, o = 0; o < r; ++o) if (e(t[o], o, t)) return o;
          return n;
        }
        function z(t, e, n) {
          var r = N(t, e);
          return r > -1 ? t[r] : n;
        }
        function G(t) {
          return Object.keys(t);
        }
        function L(t, e) {
          var n = I(t),
            r = n.value,
            o = n.unit;
          if (A(e)) {
            var i = e[o];
            if (i) {
              if (D(i)) return i(r);
              if (S[o]) return S[o](r, i);
            }
          } else if ('%' === o) return (r * e) / 100;
          return S[o] ? S[o](r) : r;
        }
        function W(t, e, n, r) {
          return (
            void 0 === r && (r = t[0] / t[1]),
            [
              [U(e[0], E), U(e[0] / r, E)],
              [U(e[1] * r, E), U(e[1], E)],
            ].filter(function (t) {
              return t.every(function (t, r) {
                var o = e[r],
                  i = U(o, E);
                return n ? t <= o || t <= i : t >= o || t >= i;
              });
            })[0] || t
          );
        }
        function q(t, e, n, r) {
          if (!r)
            return t.map(function (t, r) {
              return (function (t, e, n) {
                return Math.max(e, Math.min(t, n));
              })(t, e[r], n[r]);
            });
          var o = t[0],
            i = t[1],
            a = !0 === r ? o / i : r,
            s = W(t, e, !1, a),
            u = s[0],
            c = s[1],
            l = W(t, n, !0, a),
            f = l[0],
            p = l[1];
          return (
            o < u || i < c
              ? ((o = u), (i = c))
              : (o > f || i > p) && ((o = f), (i = p)),
            [o, i]
          );
        }
        function H(t) {
          for (var e = t.length, n = 0, r = e - 1; r >= 0; --r) n += t[r];
          return e ? n / e : 0;
        }
        function Y(t, e) {
          var n = e[0] - t[0],
            r = e[1] - t[1],
            o = Math.atan2(r, n);
          return o >= 0 ? o : o + 2 * Math.PI;
        }
        function V(t) {
          var e = (function (t) {
              return [0, 1].map(function (e) {
                return H(
                  t.map(function (t) {
                    return t[e];
                  })
                );
              });
            })(t),
            n = Y(e, t[0]),
            r = Y(e, t[1]);
          return (n < r && r - n < Math.PI) || (n > r && r - n < -Math.PI)
            ? 1
            : -1;
        }
        function X(t, e) {
          return Math.sqrt(
            Math.pow((e ? e[0] : 0) - t[0], 2) +
              Math.pow((e ? e[1] : 0) - t[1], 2)
          );
        }
        function U(t, e) {
          if (!e) return t;
          var n = 1 / e;
          return Math.round(t / e) / n;
        }
        function Q(t, e) {
          return (
            t.forEach(function (n, r) {
              t[r] = U(t[r], e);
            }),
            t
          );
        }
        function J(t, e) {
          return t.classList
            ? t.classList.contains(e)
            : !!t.className.match(new RegExp('(\\s|^)' + e + '(\\s|$)'));
        }
        function K(t, e, n, r) {
          t.addEventListener(e, n, r);
        }
        function $(t, e, n, r) {
          t.removeEventListener(e, n, r);
        }
        var Z = function (t, e) {
          return (
            (Z =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            Z(t, e)
          );
        };
        function tt(t, e) {
          function n() {
            this.constructor = t;
          }
          Z(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }
        var et = function () {
          return (
            (et =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            et.apply(this, arguments)
          );
        };
        function nt(t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        }
        function rt(t, e) {
          if (t === e) return !1;
          for (var n in t) if (!(n in e)) return !0;
          for (var n in e) if (t[n] !== e[n]) return !0;
          return !1;
        }
        function ot(t, e) {
          var n = Object.keys(t),
            r = Object.keys(e),
            o = d(n, r, function (t) {
              return t;
            }),
            i = {},
            a = {},
            s = {};
          return (
            o.added.forEach(function (t) {
              var n = r[t];
              i[n] = e[n];
            }),
            o.removed.forEach(function (e) {
              var r = n[e];
              a[r] = t[r];
            }),
            o.maintained.forEach(function (r) {
              var o = r[0],
                i = n[o],
                a = [t[i], e[i]];
              t[i] !== e[i] && (s[i] = a);
            }),
            {
              added: i,
              removed: a,
              changed: s,
            }
          );
        }
        function it(t) {
          t.forEach(function (t) {
            t();
          });
        }
        function at(t) {
          var e = 0;
          return t.map(function (t) {
            return null == t ? '$compat' + ++e : '' + t;
          });
        }
        function st(t, e, n, r) {
          return M(t) || typeof t === b
            ? new ht('text_' + t, e, n, r, null, {})
            : new ('string' == typeof t.type
                ? vt
                : t.type.prototype.render
                ? xt
                : yt)(t.type, e, n, r, t.ref, t.props);
        }
        function ut(t) {
          var e = [];
          return (
            t.forEach(function (t) {
              e = e.concat(C(t) ? ut(t) : t);
            }),
            e
          );
        }
        function ct(t) {
          var e = t.className,
            n = nt(t, ['className']);
          return (
            null != e && (n.class = e), delete n.style, delete n.children, n
          );
        }
        function lt(t, e) {
          if (!e) return t;
          for (var n in e) O(t[n]) && (t[n] = e[n]);
          return t;
        }
        function ft(t, e) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var o = e || {},
            i = o.key,
            a = o.ref,
            s = nt(o, ['key', 'ref']);
          return {
            type: t,
            key: i,
            ref: a,
            props: et(et({}, s), {
              children: ut(n).filter(function (t) {
                return null != t && !1 !== t;
              }),
            }),
          };
        }
        var pt = (function () {
          function t(t, e, n, r, o, i) {
            void 0 === i && (i = {}),
              (this.type = t),
              (this.key = e),
              (this.index = n),
              (this.container = r),
              (this.ref = o),
              (this.props = i),
              (this._providers = []);
          }
          var e = t.prototype;
          return (
            (e._should = function (t, e) {
              return !0;
            }),
            (e._update = function (t, e, n, r) {
              if (this.base && !M(e) && !r && !this._should(e.props, n))
                return !1;
              (this.original = e), this._setState(n);
              var o = this.props;
              return (
                M(e) || ((this.props = e.props), (this.ref = e.ref)),
                this._render(t, this.base ? o : {}, n),
                !0
              );
            }),
            (e._mounted = function () {
              var t = this.ref;
              t && t(this.base);
            }),
            (e._setState = function (t) {}),
            (e._updated = function () {
              var t = this.ref;
              t && t(this.base);
            }),
            (e._destroy = function () {
              var t = this.ref;
              t && t(null);
            }),
            t
          );
        })();
        function dt(t) {
          var e = {},
            n = {};
          for (var r in t)
            0 === r.indexOf('on')
              ? (n[r.replace('on', '').toLowerCase()] = t[r])
              : (e[r] = t[r]);
          return {
            attributes: e,
            events: n,
          };
        }
        var ht = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            tt(e, t);
            var n = e.prototype;
            return (
              (n._render = function (t) {
                var e = this,
                  n = !this.base;
                return (
                  n &&
                    (this.base = document.createTextNode(
                      this.type.replace('text_', '')
                    )),
                  t.push(function () {
                    n ? e._mounted() : e._updated();
                  }),
                  !0
                );
              }),
              (n._unmount = function () {
                this.base.parentNode.removeChild(this.base);
              }),
              e
            );
          })(pt),
          vt = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.events = {}), (e._isSVG = !1), e;
            }
            tt(e, t);
            var n = e.prototype;
            return (
              (n.addEventListener = function (t, e) {
                var n = this.events;
                (n[t] = function (t) {
                  (t.nativeEvent = t), e(t);
                }),
                  this.base.addEventListener(t, n[t]);
              }),
              (n.removeEventListener = function (t) {
                var e = this.events;
                this.base.removeEventListener(t, e[t]), delete e[t];
              }),
              (n._should = function (t) {
                return rt(this.props, t);
              }),
              (n._render = function (t, e) {
                var n = this,
                  r = !this.base;
                if (r) {
                  var o = this._hasSVG();
                  this._isSVG = o;
                  var i = this.props.portalContainer;
                  if (!i) {
                    var a = this.type;
                    i = o
                      ? document.createElementNS(
                          'http://www.w3.org/2000/svg',
                          a
                        )
                      : document.createElement(a);
                  }
                  this.base = i;
                }
                At(this, this._providers, this.props.children, t, null);
                var s = this.base,
                  u = dt(e),
                  c = u.attributes,
                  l = u.events,
                  f = dt(this.props),
                  p = f.attributes,
                  d = f.events;
                return (
                  (function (t, e, n) {
                    var r = ot(t, e),
                      o = r.added,
                      i = r.removed,
                      a = r.changed;
                    for (var s in o) n.setAttribute(s, o[s]);
                    for (var s in a) n.setAttribute(s, a[s][1]);
                    for (var s in i) n.removeAttribute(s);
                  })(ct(c), ct(p), s),
                  (function (t, e, n) {
                    var r = ot(t, e),
                      o = r.added,
                      i = r.removed,
                      a = r.changed;
                    for (var s in i) n.removeEventListener(s);
                    for (var s in o) n.addEventListener(s, o[s]);
                    for (var s in a)
                      n.removeEventListener(s), n.addEventListener(s, a[s][1]);
                    for (var s in i) n.removeEventListener(s);
                  })(l, d, this),
                  (function (t, e, n) {
                    var r = n.style,
                      o = ot(t, e),
                      i = o.added,
                      a = o.removed,
                      s = o.changed;
                    for (var u in i) {
                      var c = _(u, '-');
                      r.setProperty ? r.setProperty(c, i[u]) : (r[c] = i[u]);
                    }
                    for (var u in s)
                      (c = _(u, '-')),
                        r.setProperty
                          ? r.setProperty(c, s[u][1])
                          : (r[c] = s[u][1]);
                    for (var u in a)
                      (c = _(u, '-')),
                        r.removeProperty ? r.removeProperty(c) : (r[c] = '');
                  })(e.style || {}, this.props.style || {}, s),
                  t.push(function () {
                    r ? n._mounted() : n._updated();
                  }),
                  !0
                );
              }),
              (n._unmount = function () {
                var t = this.events,
                  e = this.base;
                for (var n in t) e.removeEventListener(n, t[n]);
                this._providers.forEach(function (t) {
                  t._unmount();
                }),
                  (this.events = {}),
                  this.props.portalContainer || e.parentNode.removeChild(e);
              }),
              (n._hasSVG = function () {
                if (this._isSVG || 'svg' === this.type) return !0;
                var t = gt(this.container);
                return t && 'ownerSVGElement' in t;
              }),
              e
            );
          })(pt);
        function gt(t) {
          if (!t) return null;
          var e = t.base;
          return e instanceof Node ? e : gt(t.container);
        }
        function mt(t) {
          if (!t) return null;
          if (t instanceof Node) return t;
          var e = t.$_provider._providers;
          return e.length ? mt(e[0].base) : null;
        }
        var yt = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            tt(e, t);
            var n = e.prototype;
            return (
              (n._render = function (t) {
                var e = this.type(this.props);
                return At(this, this._providers, e ? [e] : [], t), !0;
              }),
              (n._unmount = function () {
                this._providers.forEach(function (t) {
                  t._unmount();
                });
              }),
              e
            );
          })(pt),
          bt = (function (t) {
            function e(e) {
              var n = t.call(this, 'container', 'container', 0, null) || this;
              return (n.base = e), n;
            }
            tt(e, t);
            var n = e.prototype;
            return (
              (n._render = function () {
                return !0;
              }),
              (n._unmount = function () {}),
              e
            );
          })(pt),
          xt = (function (t) {
            function e(e, n, r, o, i, a) {
              return (
                void 0 === a && (a = {}),
                t.call(this, e, n, r, o, i, lt(a, e.defaultProps)) || this
              );
            }
            tt(e, t);
            var n = e.prototype;
            return (
              (n._should = function (t, e) {
                return this.base.shouldComponentUpdate(
                  lt(t, this.type.defaultProps),
                  e || this.base.state
                );
              }),
              (n._render = function (t, e) {
                var n = this;
                this.props = lt(this.props, this.type.defaultProps);
                var r = !this.base;
                r
                  ? ((this.base = new this.type(this.props)),
                    (this.base.$_provider = this))
                  : (this.base.props = this.props);
                var o = this.base,
                  i = o.state,
                  a = o.render();
                a &&
                  a.props &&
                  !a.props.children.length &&
                  (a.props.children = this.props.children),
                  At(this, this._providers, a ? [a] : [], t),
                  t.push(function () {
                    r
                      ? (n._mounted(), o.componentDidMount())
                      : (n._updated(), o.componentDidUpdate(e, i));
                  });
              }),
              (n._setState = function (t) {
                var e = this.base;
                e && t && (e.state = t);
              }),
              (n._unmount = function () {
                this._providers.forEach(function (t) {
                  t._unmount();
                }),
                  clearTimeout(this.base.$_timer),
                  this.base.componentWillUnmount();
              }),
              e
            );
          })(pt),
          wt = (function () {
            function t(t) {
              void 0 === t && (t = {}),
                (this.props = t),
                (this.state = {}),
                (this.$_timer = 0),
                (this.$_state = {});
            }
            var e = t.prototype;
            return (
              (e.shouldComponentUpdate = function (t, e) {
                return !0;
              }),
              (e.render = function () {
                return null;
              }),
              (e.setState = function (t, e, n) {
                var r = this;
                this.$_timer || (this.$_state = {}),
                  clearTimeout(this.$_timer),
                  (this.$_timer = 0),
                  (this.$_state = et(et({}, this.$_state), t)),
                  n
                    ? this.$_setState(e, n)
                    : (this.$_timer = setTimeout(function () {
                        (r.$_timer = 0), r.$_setState(e, n);
                      }));
              }),
              (e.forceUpdate = function (t) {
                this.setState({}, t, !0);
              }),
              (e.componentDidMount = function () {}),
              (e.componentDidUpdate = function (t, e) {}),
              (e.componentWillUnmount = function () {}),
              (e.$_setState = function (t, e) {
                var n = [],
                  r = this.$_provider;
                At(
                  r.container,
                  [r],
                  [r.original],
                  n,
                  et(et({}, this.state), this.$_state),
                  e
                ) && (t && n.push(t), it(n));
              }),
              t
            );
          })(),
          Et = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              tt(e, t),
              (e.prototype.shouldComponentUpdate = function (t, e) {
                return rt(this.props, t) || rt(this.state, e);
              }),
              e
            );
          })(wt),
          St = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            tt(e, t);
            var n = e.prototype;
            return (
              (n.componentDidMount = function () {
                var t = this.props,
                  e = t.element,
                  n = t.container;
                (this._portalProvider = new bt(n)),
                  Ct(e, n, this._portalProvider);
              }),
              (n.componentDidUpdate = function () {
                var t = this.props;
                Ct(t.element, t.container, this._portalProvider);
              }),
              (n.componentWillUnmount = function () {
                Ct(null, this.props.container, this._portalProvider),
                  (this._portalProvider = null);
              }),
              e
            );
          })(Et);
        function Ot(t, e, n) {
          var r = n.map(function (t) {
              return M(t) ? null : t.key;
            }),
            o = at(
              e.map(function (t) {
                return t.key;
              })
            ),
            i = d(o, at(r), function (t) {
              return t;
            });
          i.removed.forEach(function (t) {
            e.splice(t, 1)[0]._unmount();
          }),
            i.ordered.forEach(function (t) {
              var n = t[0],
                r = t[1],
                o = e.splice(n, 1)[0];
              e.splice(r, 0, o);
              var i = mt(o.base),
                a = mt(e[r + 1] && e[r + 1].base);
              i && i.parentNode.insertBefore(i, a);
            }),
            i.added.forEach(function (o) {
              e.splice(o, 0, st(n[o], r[o], o, t));
            });
          var a = i.maintained.filter(function (o) {
            o[0];
            var i = o[1],
              a = n[i],
              s = e[i];
            return (M(a) ? 'text_' + a : a.type) !== s.type
              ? (s._unmount(), e.splice(i, 1, st(a, r[i], i, t)), !0)
              : ((s.index = i), !1);
          });
          return (function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var r = Array(t),
              o = 0;
            for (e = 0; e < n; e++)
              for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
                r[o] = i[a];
            return r;
          })(
            i.added,
            a.map(function (t) {
              t[0];
              return t[1];
            })
          );
        }
        function At(t, e, n, r, o, i) {
          var a = Ot(t, e, n),
            s = e.filter(function (t, e) {
              return t._update(r, n[e], o, i);
            }),
            u = gt(t);
          return (
            u &&
              a.reverse().forEach(function (n) {
                var r = e[n],
                  o = mt(r.base);
                if (o && u !== o && !o.parentNode) {
                  var i = (function (t, e) {
                    for (
                      var n = t._providers, r = n.length, o = e.index + 1;
                      o < r;
                      ++o
                    ) {
                      var i = mt(n[o].base);
                      if (i) return i;
                    }
                    return null;
                  })(t, r);
                  u.insertBefore(o, i);
                }
              }),
            s.length > 0
          );
        }
        function Ct(t, e, n) {
          void 0 === n && (n = e.__REACT_COMPAT__);
          var r = !!n;
          return (
            n || (n = new bt(e)),
            (function (t, e, n) {
              var r = [];
              At(t, t._providers, e, r, n), it(r);
            })(n, t ? [t] : []),
            r || (e.__REACT_COMPAT__ = n),
            n
          );
        }
        function Mt(t, e, n) {
          var r = e.__REACT_COMPAT__;
          t && !r && (e.innerHTML = ''), Ct(t, e, r), n && n();
        }
        function Dt(t, e) {
          for (var n = t.length, r = 0; r < n; ++r) if (e(t[r], r)) return !0;
          return !1;
        }
        function Pt(t, e) {
          for (var n = t.length, r = 0; r < n; ++r) if (e(t[r], r)) return t[r];
          return null;
        }
        function jt(t) {
          var e = t;
          if (void 0 === e) {
            if ('undefined' == typeof navigator || !navigator) return '';
            e = navigator.userAgent || '';
          }
          return e.toLowerCase();
        }
        function Tt(t, e) {
          try {
            return new RegExp(t, 'g').exec(e);
          } catch (t) {
            return null;
          }
        }
        function Rt() {
          if (
            'undefined' == typeof navigator ||
            !navigator ||
            !navigator.userAgentData
          )
            return !1;
          var t = navigator.userAgentData,
            e = t.brands || t.uaList;
          return !(!e || !e.length);
        }
        function kt(t) {
          return t.replace(/_/g, '.');
        }
        function Bt(t, e) {
          var n = null,
            r = '-1';
          return (
            Dt(t, function (t) {
              var o = Tt('(' + t.test + ')((?:\\/|\\s|:)([0-9|\\.|_]+))?', e);
              return (
                !(!o || t.brand) &&
                ((n = t),
                (r = o[3] || '-1'),
                t.versionAlias
                  ? (r = t.versionAlias)
                  : t.versionTest &&
                    (r =
                      (function (t, e) {
                        var n = Tt(
                          '(' + t + ')((?:\\/|\\s|:)([0-9|\\.|_]+))',
                          e
                        );
                        return n ? n[3] : '';
                      })(t.versionTest.toLowerCase(), e) || r),
                (r = kt(r)),
                !0)
              );
            }),
            {
              preset: n,
              version: r,
            }
          );
        }
        function It(t, e) {
          var n = {
            brand: '',
            version: '-1',
          };
          return (
            Dt(t, function (t) {
              var r = _t(e, t);
              return (
                !!r &&
                ((n.brand = t.id),
                (n.version = t.versionAlias || r.version),
                '-1' !== n.version)
              );
            }),
            n
          );
        }
        function _t(t, e) {
          return Pt(t, function (t) {
            var n = t.brand;
            return Tt('' + e.test, n.toLowerCase());
          });
        }
        var Ft = [
            {
              test: 'phantomjs',
              id: 'phantomjs',
            },
            {
              test: 'whale',
              id: 'whale',
            },
            {
              test: 'edgios|edge|edg',
              id: 'edge',
            },
            {
              test: 'msie|trident|windows phone',
              id: 'ie',
              versionTest: 'iemobile|msie|rv',
            },
            {
              test: 'miuibrowser',
              id: 'miui browser',
            },
            {
              test: 'samsungbrowser',
              id: 'samsung internet',
            },
            {
              test: 'samsung',
              id: 'samsung internet',
              versionTest: 'version',
            },
            {
              test: 'chrome|crios',
              id: 'chrome',
            },
            {
              test: 'firefox|fxios',
              id: 'firefox',
            },
            {
              test: 'android',
              id: 'android browser',
              versionTest: 'version',
            },
            {
              test: 'safari|iphone|ipad|ipod',
              id: 'safari',
              versionTest: 'version',
            },
          ],
          Nt = [
            {
              test: '(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)',
              id: 'chrome',
              versionTest: 'chrome',
            },
            {
              test: 'chromium',
              id: 'chrome',
            },
            {
              test: 'whale',
              id: 'chrome',
              versionAlias: '-1',
              brand: !0,
            },
          ],
          zt = [
            {
              test: 'applewebkit',
              id: 'webkit',
              versionTest: 'applewebkit|safari',
            },
          ],
          Gt = [
            {
              test: '(?=(iphone|ipad))(?!(.*version))',
              id: 'webview',
            },
            {
              test: '(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))',
              id: 'webview',
            },
            {
              test: 'webview',
              id: 'webview',
            },
          ],
          Lt = [
            {
              test: 'windows phone',
              id: 'windows phone',
            },
            {
              test: 'windows 2000',
              id: 'window',
              versionAlias: '5.0',
            },
            {
              test: 'windows nt',
              id: 'window',
            },
            {
              test: 'win32|windows',
              id: 'window',
            },
            {
              test: 'iphone|ipad|ipod',
              id: 'ios',
              versionTest: 'iphone os|cpu os',
            },
            {
              test: 'macos|macintel|mac os x',
              id: 'mac',
            },
            {
              test: 'android|linux armv81',
              id: 'android',
            },
            {
              test: 'tizen',
              id: 'tizen',
            },
            {
              test: 'webos|web0s',
              id: 'webos',
            },
          ];
        function Wt(t) {
          return !!Bt(Gt, t).preset;
        }
        function qt(t) {
          var e = navigator.userAgentData,
            n = (e.uaList || e.brands).slice(),
            r = t && t.fullVersionList,
            o = e.mobile || !1,
            i = n[0],
            a = (
              (t && t.platform) ||
              e.platform ||
              navigator.platform
            ).toLowerCase(),
            s = {
              name: i.brand,
              version: i.version,
              majorVersion: -1,
              webkit: !1,
              webkitVersion: '-1',
              chromium: !1,
              chromiumVersion: '-1',
              webview: !!It(Gt, n).brand || Wt(jt()),
            },
            u = {
              name: 'unknown',
              version: '-1',
              majorVersion: -1,
            };
          s.webkit =
            !s.chromium &&
            Dt(zt, function (t) {
              return _t(n, t);
            });
          var c = It(Nt, n);
          if (
            ((s.chromium = !!c.brand),
            (s.chromiumVersion = c.version),
            !s.chromium)
          ) {
            var l = It(zt, n);
            (s.webkit = !!l.brand), (s.webkitVersion = l.version);
          }
          var f = Pt(Lt, function (t) {
            return new RegExp('' + t.test, 'g').exec(a);
          });
          if (
            ((u.name = f ? f.id : ''),
            t && (u.version = t.platformVersion),
            r && r.length)
          ) {
            var p = It(Ft, r);
            (s.name = p.brand || s.name), (s.version = p.version || s.version);
          } else {
            var d = It(Ft, n);
            (s.name = d.brand || s.name),
              (s.version = d.brand && t ? t.uaFullVersion : d.version);
          }
          return (
            s.webkit && (u.name = o ? 'ios' : 'mac'),
            'ios' === u.name && s.webview && (s.version = '-1'),
            (u.version = kt(u.version)),
            (s.version = kt(s.version)),
            (u.majorVersion = parseInt(u.version, 10)),
            (s.majorVersion = parseInt(s.version, 10)),
            {
              browser: s,
              os: u,
              isMobile: o,
              isHints: !0,
            }
          );
        }
        function Ht(t) {
          return void 0 === t && Rt()
            ? qt()
            : (function (t) {
                var e = jt(t),
                  n = !!/mobi/g.exec(e),
                  r = {
                    name: 'unknown',
                    version: '-1',
                    majorVersion: -1,
                    webview: Wt(e),
                    chromium: !1,
                    chromiumVersion: '-1',
                    webkit: !1,
                    webkitVersion: '-1',
                  },
                  o = {
                    name: 'unknown',
                    version: '-1',
                    majorVersion: -1,
                  },
                  i = Bt(Ft, e),
                  a = i.preset,
                  s = i.version,
                  u = Bt(Lt, e),
                  c = u.preset,
                  l = u.version,
                  f = Bt(Nt, e);
                if (
                  ((r.chromium = !!f.preset),
                  (r.chromiumVersion = f.version),
                  !r.chromium)
                ) {
                  var p = Bt(zt, e);
                  (r.webkit = !!p.preset), (r.webkitVersion = p.version);
                }
                return (
                  c &&
                    ((o.name = c.id),
                    (o.version = l),
                    (o.majorVersion = parseInt(l, 10))),
                  a &&
                    ((r.name = a.id),
                    (r.version = s),
                    r.webview &&
                      'ios' === o.name &&
                      'safari' !== r.name &&
                      (r.webview = !1)),
                  (r.majorVersion = parseInt(r.version, 10)),
                  {
                    browser: r,
                    os: o,
                    isMobile: n,
                    isHints: !1,
                  }
                );
              })(t);
        }
        const Yt = Ht;
        function Vt(t, e, n, r, o, i) {
          for (var a = 0; a < o; ++a) {
            var s = n + a * o,
              u = r + a * o;
            (t[s] += t[u] * i), (e[s] += e[u] * i);
          }
        }
        function Xt(t, e, n, r, o) {
          for (var i = 0; i < o; ++i) {
            var a = n + i * o,
              s = r + i * o,
              u = t[a],
              c = e[a];
            (t[a] = t[s]), (t[s] = u), (e[a] = e[s]), (e[s] = c);
          }
        }
        function Ut(t, e, n, r, o) {
          for (var i = 0; i < r; ++i) {
            var a = n + i * r;
            (t[a] /= o), (e[a] /= o);
          }
        }
        function Qt(t, e, n) {
          void 0 === n && (n = Math.sqrt(t.length));
          for (var r = t.slice(), o = 0; o < n; ++o)
            (r[o * n + e - 1] = 0), (r[(e - 1) * n + o] = 0);
          return (r[(e - 1) * (n + 1)] = 1), r;
        }
        function Jt(t, e) {
          void 0 === e && (e = Math.sqrt(t.length));
          for (var n = t.slice(), r = he(e), o = 0; o < e; ++o) {
            var i = e * o + o;
            if (!U(n[i], E))
              for (var a = o + 1; a < e; ++a)
                if (n[e * o + a]) {
                  Xt(n, r, o, a, e);
                  break;
                }
            if (!U(n[i], E)) return [];
            Ut(n, r, o, e, n[i]);
            for (a = 0; a < e; ++a) {
              var s = a,
                u = n[a + o * e];
              U(u, E) && o !== a && Vt(n, r, s, o, e, -u);
            }
          }
          return r;
        }
        function Kt(t, e) {
          for (var n = t.slice(), r = t.length; r < e - 1; ++r) n[r] = 0;
          return (n[e - 1] = 1), n;
        }
        function $t(t, e, n) {
          if ((void 0 === e && (e = Math.sqrt(t.length)), e === n)) return t;
          for (var r = he(n), o = Math.min(e, n), i = 0; i < o - 1; ++i) {
            for (var a = 0; a < o - 1; ++a) r[i * n + a] = t[i * e + a];
            (r[(i + 1) * n - 1] = t[(i + 1) * e - 1]),
              (r[(n - 1) * n + i] = t[(e - 1) * e + i]);
          }
          return (r[n * n - 1] = t[e * e - 1]), r;
        }
        function Zt(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r = he(t);
          return (
            e.forEach(function (e) {
              r = te(r, e, t);
            }),
            r
          );
        }
        function te(t, e, n) {
          void 0 === n && (n = Math.sqrt(t.length));
          var r = [],
            o = t.length / n,
            i = e.length / o;
          if (!o) return e;
          if (!i) return t;
          for (var a = 0; a < n; ++a)
            for (var s = 0; s < i; ++s) {
              r[s * n + a] = 0;
              for (var u = 0; u < o; ++u)
                r[s * n + a] += t[u * n + a] * e[s * o + u];
            }
          return r;
        }
        function ee(t, e) {
          for (
            var n = Math.min(t.length, e.length), r = t.slice(), o = 0;
            o < n;
            ++o
          )
            r[o] = r[o] + e[o];
          return r;
        }
        function ne(t, e) {
          for (
            var n = Math.min(t.length, e.length), r = t.slice(), o = 0;
            o < n;
            ++o
          )
            r[o] = r[o] - e[o];
          return r;
        }
        function re(t, e) {
          return (
            void 0 === e && (e = 6 === t.length),
            e ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t
          );
        }
        function oe(t, e) {
          return (
            void 0 === e && (e = 9 === t.length),
            e ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t
          );
        }
        function ie(t, e, n) {
          void 0 === n && (n = e.length);
          var r = te(t, e, n),
            o = r[n - 1];
          return r.map(function (t) {
            return t / o;
          });
        }
        function ae(t, e) {
          return te(
            t,
            [
              1,
              0,
              0,
              0,
              0,
              Math.cos(e),
              Math.sin(e),
              0,
              0,
              -Math.sin(e),
              Math.cos(e),
              0,
              0,
              0,
              0,
              1,
            ],
            4
          );
        }
        function se(t, e) {
          return te(
            t,
            [
              Math.cos(e),
              0,
              -Math.sin(e),
              0,
              0,
              1,
              0,
              0,
              Math.sin(e),
              0,
              Math.cos(e),
              0,
              0,
              0,
              0,
              1,
            ],
            4
          );
        }
        function ue(t, e) {
          return te(t, de(e, 4));
        }
        function ce(t, e) {
          var n = e[0],
            r = void 0 === n ? 1 : n,
            o = e[1],
            i = void 0 === o ? 1 : o,
            a = e[2];
          return te(
            t,
            [r, 0, 0, 0, 0, i, 0, 0, 0, 0, void 0 === a ? 1 : a, 0, 0, 0, 0, 1],
            4
          );
        }
        function le(t, e) {
          return ie(de(e, 3), Kt(t, 3));
        }
        function fe(t, e) {
          var n = e[0],
            r = void 0 === n ? 0 : n,
            o = e[1],
            i = void 0 === o ? 0 : o,
            a = e[2];
          return te(
            t,
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r, i, void 0 === a ? 0 : a, 1],
            4
          );
        }
        function pe(t, e) {
          return te(t, e, 4);
        }
        function de(t, e) {
          var n = Math.cos(t),
            r = Math.sin(t),
            o = he(e);
          return (o[0] = n), (o[1] = r), (o[e] = -r), (o[e + 1] = n), o;
        }
        function he(t) {
          for (var e = t * t, n = [], r = 0; r < e; ++r)
            n[r] = r % (t + 1) ? 0 : 1;
          return n;
        }
        function ve(t, e) {
          for (var n = he(e), r = Math.min(t.length, e - 1), o = 0; o < r; ++o)
            n[(e + 1) * o] = t[o];
          return n;
        }
        function ge(t, e) {
          for (var n = he(e), r = Math.min(t.length, e - 1), o = 0; o < r; ++o)
            n[e * (e - 1) + o] = t[o];
          return n;
        }
        function me(t, e, n, r, o, i, a, s) {
          var u = t[0],
            c = t[1],
            l = e[0],
            f = e[1],
            p = n[0],
            d = n[1],
            h = r[0],
            v = r[1],
            g = o[0],
            m = o[1],
            y = i[0],
            b = i[1],
            x = a[0],
            w = a[1],
            E = s[0],
            S = s[1],
            O = Jt(
              [
                u,
                0,
                l,
                0,
                p,
                0,
                h,
                0,
                c,
                0,
                f,
                0,
                d,
                0,
                v,
                0,
                1,
                0,
                1,
                0,
                1,
                0,
                1,
                0,
                0,
                u,
                0,
                l,
                0,
                p,
                0,
                h,
                0,
                c,
                0,
                f,
                0,
                d,
                0,
                v,
                0,
                1,
                0,
                1,
                0,
                1,
                0,
                1,
                -g * u,
                -m * u,
                -y * l,
                -b * l,
                -x * p,
                -w * p,
                -E * h,
                -S * h,
                -g * c,
                -m * c,
                -y * f,
                -b * f,
                -x * d,
                -w * d,
                -E * v,
                -S * v,
              ],
              8
            );
          if (!O.length) return [];
          var A = te(O, [g, m, y, b, x, w, E, S], 8);
          return (
            (A[8] = 1),
            $t(
              (function (t, e) {
                void 0 === e && (e = Math.sqrt(t.length));
                for (var n = [], r = 0; r < e; ++r)
                  for (var o = 0; o < e; ++o) n[o * e + r] = t[e * r + o];
                return n;
              })(A),
              3,
              4
            )
          );
        }
        function ye(t) {
          return be(xe(t));
        }
        function be(t) {
          var e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
          return (
            t.forEach(function (t) {
              var n = t.matrixFunction,
                r = t.functionValue;
              n && (e = n(e, r));
            }),
            e
          );
        }
        function xe(t) {
          return (C(t) ? t : R(t)).map(function (t) {
            var e = B(t),
              n = e.prefix,
              r = e.value,
              o = null,
              i = n,
              a = '';
            if (
              'translate' === n ||
              'translateX' === n ||
              'translate3d' === n
            ) {
              var s = k(r).map(function (t) {
                  return parseFloat(t);
                }),
                u = s[0],
                c = s[1],
                l = void 0 === c ? 0 : c,
                f = s[2];
              (o = fe), (a = [u, l, void 0 === f ? 0 : f]);
            } else if ('translateY' === n) {
              (o = fe), (a = [0, (l = parseFloat(r)), 0]);
            } else if ('translateZ' === n) {
              (o = fe), (a = [0, 0, parseFloat(r)]);
            } else if ('scale' === n || 'scale3d' === n) {
              var p = k(r).map(function (t) {
                  return parseFloat(t);
                }),
                d = p[0],
                h = p[1],
                v = void 0 === h ? d : h,
                g = p[2];
              (o = ce), (a = [d, v, void 0 === g ? 1 : g]);
            } else if ('scaleX' === n) {
              (o = ce), (a = [(d = parseFloat(r)), 1, 1]);
            } else if ('scaleY' === n) {
              (o = ce), (a = [1, (v = parseFloat(r)), 1]);
            } else if ('scaleZ' === n) {
              (o = ce), (a = [1, 1, parseFloat(r)]);
            } else if (
              'rotate' === n ||
              'rotateZ' === n ||
              'rotateX' === n ||
              'rotateY' === n
            ) {
              var m = I(r),
                y = m.unit,
                b = m.value;
              'rotate' === n || 'rotateZ' === n
                ? ((i = 'rotateZ'), (o = ue))
                : 'rotateX' === n
                ? (o = ae)
                : 'rotateY' === n && (o = se),
                (a = 'rad' === y ? b : (b * Math.PI) / 180);
            } else if ('matrix3d' === n)
              (o = pe),
                (a = k(r).map(function (t) {
                  return parseFloat(t);
                }));
            else if ('matrix' === n) {
              var x = k(r).map(function (t) {
                return parseFloat(t);
              });
              (o = pe),
                (a = [
                  x[0],
                  x[1],
                  0,
                  0,
                  x[2],
                  x[3],
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  x[4],
                  x[5],
                  0,
                  1,
                ]);
            } else i = '';
            return {
              name: n,
              functionName: i,
              value: r,
              matrixFunction: o,
              functionValue: a,
            };
          });
        }
        function we() {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
          var r = Array(t),
            o = 0;
          for (e = 0; e < n; e++)
            for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
              r[o] = i[a];
          return r;
        }
        function Ee(t) {
          return U(t, E);
        }
        function Se(t) {
          return t.length < 3
            ? 0
            : Math.abs(
                (function (t) {
                  for (var e = 0, n = t.length - 1; n >= 0; --n) e += t[n];
                  return e;
                })(
                  t.map(function (e, n) {
                    var r = t[n + 1] || t[0];
                    return e[0] * r[1] - r[0] * e[1];
                  })
                )
              ) / 2;
        }
        function Oe(t, e) {
          var n = e.width,
            r = e.height,
            o = e.left,
            i = e.top,
            a = Ae(t),
            s = a.minX,
            u = a.minY,
            c = a.maxX,
            l = a.maxY,
            f = n / (c - s),
            p = r / (l - u);
          return t.map(function (t) {
            return [o + (t[0] - s) * f, i + (t[1] - u) * p];
          });
        }
        function Ae(t) {
          var e = t.map(function (t) {
              return t[0];
            }),
            n = t.map(function (t) {
              return t[1];
            });
          return {
            minX: Math.min.apply(Math, e),
            minY: Math.min.apply(Math, n),
            maxX: Math.max.apply(Math, e),
            maxY: Math.max.apply(Math, n),
          };
        }
        function Ce(t, e, n) {
          var r = t[0],
            o = t[1],
            i = Ae(e),
            a = i.minX,
            s = i.maxX,
            u = [
              [a, o],
              [s, o],
            ],
            c = Me(u[0], u[1]),
            l = je(e),
            f = [];
          if (
            (l.forEach(function (e) {
              var n,
                r = Me(e[0], e[1]),
                i = e[0];
              ((n = r),
              c.every(function (t, e) {
                return 0 === Ee(t - n[e]);
              }))
                ? f.push({
                    pos: t,
                    line: e,
                    type: 'line',
                  })
                : Pe(De(c, r), [u, e]).forEach(function (t) {
                    e.some(function (e) {
                      return (
                        (r = t), !Ee((n = e)[0] - r[0]) && !Ee(n[1] - r[1])
                      );
                      var n, r;
                    })
                      ? f.push({
                          pos: t,
                          line: e,
                          type: 'point',
                        })
                      : 0 !== Ee(i[1] - o) &&
                        f.push({
                          pos: t,
                          line: e,
                          type: 'intersection',
                        });
                  });
            }),
            !n &&
              z(f, function (t) {
                return t[0] === r;
              }))
          )
            return !0;
          var p = 0,
            d = {};
          return (
            f.forEach(function (t) {
              var e = t.pos,
                n = t.type,
                i = t.line;
              if (!(e[0] > r))
                if ('intersection' === n) ++p;
                else {
                  if ('line' === n) return;
                  if ('point' === n) {
                    var a = z(i, function (t) {
                        return t[1] !== o;
                      }),
                      s = d[e[0]],
                      u = a[1] > o ? 1 : -1;
                    s ? s !== u && ++p : (d[e[0]] = u);
                  }
                }
            }),
            p % 2 == 1
          );
        }
        function Me(t, e) {
          var n = t[0],
            r = t[1],
            o = e[0] - n,
            i = e[1] - r;
          Math.abs(o) < E && (o = 0), Math.abs(i) < E && (i = 0);
          var a = 0,
            s = 0,
            u = 0;
          return (
            o
              ? i
                ? ((s = 1), (u = -(a = -i / o) * n - r))
                : ((s = 1), (u = -r))
              : i && ((a = -1), (u = n)),
            [a, s, u]
          );
        }
        function De(t, e) {
          var n = t[0],
            r = t[1],
            o = t[2],
            i = e[0],
            a = e[1],
            s = e[2],
            u = 0 === n && 0 === i,
            c = 0 === r && 0 === a,
            l = [];
          if (u && c) return [];
          if (u) {
            var f = -o / r;
            return f !== -s / a
              ? []
              : [
                  [-1 / 0, f],
                  [1 / 0, f],
                ];
          }
          if (c) {
            var p = -o / n;
            return p !== -s / i
              ? []
              : [
                  [p, -1 / 0],
                  [p, 1 / 0],
                ];
          }
          if (0 === n) l = [[(d = -(a * (h = -o / r) + s) / i), h]];
          else if (0 === i) {
            l = [[(d = -(r * (h = -s / a) + o) / n), h]];
          } else if (0 === r) {
            l = [[(d = -o / n), (h = -(i * d + s) / a)]];
          } else if (0 === a) {
            l = [[(d = -s / i), (h = -(n * d + o) / r)]];
          } else {
            var d, h;
            l = [
              [(d = (r * s - a * o) / (a * n - r * i)), (h = -(n * d + o) / r)],
            ];
          }
          return l.map(function (t) {
            return [t[0], t[1]];
          });
        }
        function Pe(t, e) {
          var n = e.map(function (t) {
              return [0, 1].map(function (e) {
                return [Math.min(t[0][e], t[1][e]), Math.max(t[0][e], t[1][e])];
              });
            }),
            r = [];
          if (2 === t.length) {
            var o = t[0],
              i = o[0],
              a = o[1];
            if (Ee(i - t[1][0])) {
              if (!Ee(a - t[1][1])) {
                var s = Math.max.apply(
                    Math,
                    n.map(function (t) {
                      return t[0][0];
                    })
                  ),
                  u = Math.min.apply(
                    Math,
                    n.map(function (t) {
                      return t[0][1];
                    })
                  );
                if (Ee(s - u) > 0) return [];
                r = [
                  [s, a],
                  [u, a],
                ];
              }
            } else {
              var c = Math.max.apply(
                  Math,
                  n.map(function (t) {
                    return t[1][0];
                  })
                ),
                l = Math.min.apply(
                  Math,
                  n.map(function (t) {
                    return t[1][1];
                  })
                );
              if (Ee(c - l) > 0) return [];
              r = [
                [i, c],
                [i, l],
              ];
            }
          }
          return (
            r.length ||
              (r = t.filter(function (t) {
                var e = t[0],
                  r = t[1];
                return n.every(function (t) {
                  return (
                    0 <= Ee(e - t[0][0]) &&
                    0 <= Ee(t[0][1] - e) &&
                    0 <= Ee(r - t[1][0]) &&
                    0 <= Ee(t[1][1] - r)
                  );
                });
              })),
            r.map(function (t) {
              return [Ee(t[0]), Ee(t[1])];
            })
          );
        }
        function je(t) {
          return we(t.slice(1), [t[0]]).map(function (e, n) {
            return [t[n], e];
          });
        }
        function Te(t, e) {
          var n = t.slice(),
            r = e.slice();
          -1 === V(n) && n.reverse(), -1 === V(r) && r.reverse();
          var o = je(n),
            i = je(r),
            a = o.map(function (t) {
              return Me(t[0], t[1]);
            }),
            s = i.map(function (t) {
              return Me(t[0], t[1]);
            }),
            u = [];
          a.forEach(function (t, e) {
            var n = o[e],
              a = [];
            s.forEach(function (r, o) {
              var s = Pe(De(t, r), [n, i[o]]);
              a.push.apply(
                a,
                s.map(function (t) {
                  return {
                    index1: e,
                    index2: o,
                    pos: t,
                    type: 'intersection',
                  };
                })
              );
            }),
              a.sort(function (t, e) {
                return X(n[0], t.pos) - X(n[0], e.pos);
              }),
              u.push.apply(u, a),
              Ce(n[1], r) &&
                u.push({
                  index1: e,
                  index2: -1,
                  pos: n[1],
                  type: 'inside',
                });
          }),
            i.forEach(function (t, e) {
              if (Ce(t[1], n)) {
                var r = !1,
                  o = N(u, function (t) {
                    return t.index2 === e ? ((r = !0), !1) : !!r;
                  });
                -1 === o &&
                  ((r = !1),
                  (o = N(u, function (t) {
                    var n = t.index1,
                      o = t.index2;
                    return -1 === n && o + 1 === e ? ((r = !0), !1) : !!r;
                  }))),
                  -1 === o
                    ? u.push({
                        index1: -1,
                        index2: e,
                        pos: t[1],
                        type: 'inside',
                      })
                    : u.splice(o, 0, {
                        index1: -1,
                        index2: e,
                        pos: t[1],
                        type: 'inside',
                      });
              }
            });
          var c = {};
          return u.filter(function (t) {
            var e = t.pos,
              n = e[0] + 'x' + e[1];
            return !c[n] && ((c[n] = !0), !0);
          });
        }
        function Re(t, e) {
          var n = (function (t, e) {
            return Te(t, e).map(function (t) {
              return t.pos;
            });
          })(t, e);
          return Se(n);
        }
        var ke = function (t, e) {
          return (
            (ke =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            ke(t, e)
          );
        };
        var Be,
          Ie =
            'function' == typeof Map
              ? void 0
              : ((Be = 0),
                function (t) {
                  return t.__DIFF_KEY__ || (t.__DIFF_KEY__ = ++Be);
                }),
          _e = (function (t) {
            function e(e) {
              return void 0 === e && (e = []), t.call(this, e, Ie) || this;
            }
            return (
              (function (t, e) {
                function n() {
                  this.constructor = t;
                }
                ke(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              })(e, t),
              e
            );
          })(v);
        const Fe = _e;
        var Ne = function () {
          return (
            (Ne =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            Ne.apply(this, arguments)
          );
        };
        var ze = (function () {
          function t() {
            this._events = {};
          }
          var e = t.prototype;
          return (
            (e.on = function (t, e) {
              if (A(t)) for (var n in t) this.on(n, t[n]);
              else this._addEvent(t, e, {});
              return this;
            }),
            (e.off = function (t, e) {
              if (t)
                if (A(t)) for (var n in t) this.off(n);
                else if (e) {
                  var r = this._events[t];
                  if (r) {
                    var o = N(r, function (t) {
                      return t.listener === e;
                    });
                    o > -1 && r.splice(o, 1);
                  }
                } else this._events[t] = [];
              else this._events = {};
              return this;
            }),
            (e.once = function (t, e) {
              var n = this;
              return (
                e &&
                  this._addEvent(t, e, {
                    once: !0,
                  }),
                new Promise(function (e) {
                  n._addEvent(t, e, {
                    once: !0,
                  });
                })
              );
            }),
            (e.emit = function (t, e) {
              var n = this;
              void 0 === e && (e = {});
              var r = this._events[t];
              if (!t || !r) return !0;
              var o = !1;
              return (
                (e.eventType = t),
                (e.stop = function () {
                  o = !0;
                }),
                (e.currentTarget = this),
                (function () {
                  for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                    t += arguments[e].length;
                  var r = Array(t),
                    o = 0;
                  for (e = 0; e < n; e++)
                    for (
                      var i = arguments[e], a = 0, s = i.length;
                      a < s;
                      a++, o++
                    )
                      r[o] = i[a];
                  return r;
                })(r).forEach(function (r) {
                  r.listener(e), r.once && n.off(t, r.listener);
                }),
                !o
              );
            }),
            (e.trigger = function (t, e) {
              return void 0 === e && (e = {}), this.emit(t, e);
            }),
            (e._addEvent = function (t, e, n) {
              var r = this._events;
              (r[t] = r[t] || []),
                r[t].push(
                  Ne(
                    {
                      listener: e,
                    },
                    n
                  )
                );
            }),
            t
          );
        })();
        const Ge = ze;
        var Le = function (t, e) {
          return (
            (Le =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            Le(t, e)
          );
        };
        var We = function () {
          return (
            (We =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            We.apply(this, arguments)
          );
        };
        function qe(t) {
          var e = t.container;
          return e === document.body
            ? [
                e.scrollLeft || document.documentElement.scrollLeft,
                e.scrollTop || document.documentElement.scrollTop,
              ]
            : [e.scrollLeft, e.scrollTop];
        }
        function He(t, e) {
          return (
            t.addEventListener('scroll', e),
            function () {
              t.removeEventListener('scroll', e);
            }
          );
        }
        function Ye(t) {
          return t
            ? M(t)
              ? document.querySelector(t)
              : D(t)
              ? t()
              : t instanceof Element
              ? t
              : 'current' in t
              ? t.current
              : 'value' in t
              ? t.value
              : void 0
            : null;
        }
        var Ve = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e._startRect = null),
              (e._startPos = []),
              (e._prevTime = 0),
              (e._timer = 0),
              (e._prevScrollPos = [0, 0]),
              (e._isWait = !1),
              (e._flag = !1),
              (e._currentOptions = null),
              (e._lock = !1),
              (e._unregister = null),
              (e._onScroll = function () {
                var t = e._currentOptions;
                !e._lock &&
                  t &&
                  e.emit('scrollDrag', {
                    next: function (n) {
                      e.checkScroll({
                        container: t.container,
                        inputEvent: n,
                      });
                    },
                  });
              }),
              e
            );
          }
          !(function (t, e) {
            function n() {
              this.constructor = t;
            }
            Le(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          })(e, t);
          var n = e.prototype;
          return (
            (n.dragStart = function (t, e) {
              var n = Ye(e.container);
              if (n) {
                var r = 0,
                  o = 0,
                  i = 0,
                  a = 0;
                if (n === document.body)
                  (i = window.innerWidth), (a = window.innerHeight);
                else {
                  var s = n.getBoundingClientRect();
                  (r = s.top), (o = s.left), (i = s.width), (a = s.height);
                }
                (this._flag = !0),
                  (this._startPos = [t.clientX, t.clientY]),
                  (this._startRect = {
                    top: r,
                    left: o,
                    width: i,
                    height: a,
                  }),
                  (this._prevScrollPos = this._getScrollPosition([0, 0], e)),
                  (this._currentOptions = e),
                  this._registerScrollEvent(e);
              } else this._flag = !1;
            }),
            (n.drag = function (t, e) {
              if ((clearTimeout(this._timer), this._flag)) {
                var n = t.clientX,
                  r = t.clientY,
                  o = e.threshold,
                  i = void 0 === o ? 0 : o,
                  a = this._startRect,
                  s = this._startPos;
                this._currentOptions = e;
                var u = [0, 0];
                return (
                  a.top > r - i
                    ? (s[1] > a.top || r < s[1]) && (u[1] = -1)
                    : a.top + a.height < r + i &&
                      (s[1] < a.top + a.height || r > s[1]) &&
                      (u[1] = 1),
                  a.left > n - i
                    ? (s[0] > a.left || n < s[0]) && (u[0] = -1)
                    : a.left + a.width < n + i &&
                      (s[0] < a.left + a.width || n > s[0]) &&
                      (u[0] = 1),
                  !(!u[0] && !u[1]) &&
                    this._continueDrag(
                      We(We({}, e), {
                        direction: u,
                        inputEvent: t,
                        isDrag: !0,
                      })
                    )
                );
              }
            }),
            (n.checkScroll = function (t) {
              var e = this;
              if (this._isWait) return !1;
              var n = t.prevScrollPos,
                r = void 0 === n ? this._prevScrollPos : n,
                o = t.direction,
                i = t.throttleTime,
                a = void 0 === i ? 0 : i,
                s = t.inputEvent,
                u = t.isDrag,
                c = this._getScrollPosition(o || [0, 0], t),
                l = c[0] - r[0],
                f = c[1] - r[1],
                p = o || [l ? Math.abs(l) / l : 0, f ? Math.abs(f) / f : 0];
              return (
                (this._prevScrollPos = c),
                (this._lock = !1),
                !(!l && !f) &&
                  (this.emit('move', {
                    offsetX: p[0] ? l : 0,
                    offsetY: p[1] ? f : 0,
                    inputEvent: s,
                  }),
                  a &&
                    u &&
                    (clearTimeout(this._timer),
                    (this._timer = window.setTimeout(function () {
                      e._continueDrag(t);
                    }, a))),
                  !0)
              );
            }),
            (n.dragEnd = function () {
              (this._flag = !1),
                (this._lock = !1),
                clearTimeout(this._timer),
                this._unregisterScrollEvent();
            }),
            (n._getScrollPosition = function (t, e) {
              var n = e.container,
                r = e.getScrollPosition;
              return (void 0 === r ? qe : r)({
                container: Ye(n),
                direction: t,
              });
            }),
            (n._continueDrag = function (t) {
              var e,
                n = this,
                r = t.container,
                o = t.direction,
                i = t.throttleTime,
                a = t.useScroll,
                s = t.isDrag,
                u = t.inputEvent;
              if (!(!this._flag || (s && this._isWait))) {
                var c = F(),
                  l = Math.max(i + this._prevTime - c, 0);
                if (l > 0)
                  return (
                    clearTimeout(this._timer),
                    (this._timer = window.setTimeout(function () {
                      n._continueDrag(t);
                    }, l)),
                    !1
                  );
                this._prevTime = c;
                var f = this._getScrollPosition(o, t);
                (this._prevScrollPos = f),
                  s && (this._isWait = !0),
                  a || (this._lock = !0);
                var p = {
                  container: Ye(r),
                  direction: o,
                  inputEvent: u,
                };
                return (
                  null === (e = t.requestScroll) ||
                    void 0 === e ||
                    e.call(t, p),
                  this.emit('scroll', p),
                  (this._isWait = !1),
                  a ||
                    this.checkScroll(
                      We(We({}, t), {
                        prevScrollPos: f,
                        direction: o,
                        inputEvent: u,
                      })
                    )
                );
              }
            }),
            (n._registerScrollEvent = function (t) {
              this._unregisterScrollEvent();
              var e = t.checkScrollEvent;
              if (e) {
                var n = !0 === e ? He : e,
                  r = Ye(t.container);
                !0 !== e ||
                (r !== document.body && r !== document.documentElement)
                  ? (this._unregister = n(r, this._onScroll))
                  : (this._unregister = He(window, this._onScroll));
              }
            }),
            (n._unregisterScrollEvent = function () {
              var t;
              null === (t = this._unregister) || void 0 === t || t.call(this),
                (this._unregister = null);
            }),
            e
          );
        })(Ge);
        const Xe = Ve;
        var Ue = function (t, e) {
          return (
            (Ue =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            Ue(t, e)
          );
        };
        var Qe = function () {
          return (
            (Qe =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            Qe.apply(this, arguments)
          );
        };
        function Je(t) {
          return (
            180 *
            ((e = [t[0].clientX, t[0].clientY]),
            (n = [t[1].clientX, t[1].clientY]),
            (r = n[0] - e[0]),
            (o = n[1] - e[1]),
            ((i = Math.atan2(o, r)) >= 0 ? i : i + 2 * Math.PI) / Math.PI)
          );
          var e, n, r, o, i;
        }
        function Ke(t) {
          return t
            ? t.touches
              ? (function (t) {
                  for (var e = Math.min(t.length, 2), n = [], r = 0; r < e; ++r)
                    n.push(tn(t[r]));
                  return n;
                })(t.touches)
              : [tn(t)]
            : [];
        }
        function $e(t, e, n) {
          var r = n.length,
            o = en(t, r),
            i = o.clientX,
            a = o.clientY,
            s = o.originalClientX,
            u = o.originalClientY,
            c = en(e, r),
            l = c.clientX,
            f = c.clientY,
            p = en(n, r);
          return {
            clientX: s,
            clientY: u,
            deltaX: i - l,
            deltaY: a - f,
            distX: i - p.clientX,
            distY: a - p.clientY,
          };
        }
        function Ze(t) {
          return Math.sqrt(
            Math.pow(t[0].clientX - t[1].clientX, 2) +
              Math.pow(t[0].clientY - t[1].clientY, 2)
          );
        }
        function tn(t) {
          return {
            clientX: t.clientX,
            clientY: t.clientY,
          };
        }
        function en(t, e) {
          void 0 === e && (e = t.length);
          for (
            var n = {
                clientX: 0,
                clientY: 0,
                originalClientX: 0,
                originalClientY: 0,
              },
              r = 0;
            r < e;
            ++r
          ) {
            var o = t[r];
            (n.originalClientX +=
              'originalClientX' in o ? o.originalClientX : o.clientX),
              (n.originalClientY +=
                'originalClientY' in o ? o.originalClientY : o.clientY),
              (n.clientX += o.clientX),
              (n.clientY += o.clientY);
          }
          return e
            ? {
                clientX: n.clientX / e,
                clientY: n.clientY / e,
                originalClientX: n.originalClientX / e,
                originalClientY: n.originalClientY / e,
              }
            : n;
        }
        var nn = (function () {
            function t(t) {
              (this.prevClients = []),
                (this.startClients = []),
                (this.movement = 0),
                (this.length = 0),
                (this.startClients = t),
                (this.prevClients = t),
                (this.length = t.length);
            }
            return (
              (t.prototype.getAngle = function (t) {
                return void 0 === t && (t = this.prevClients), Je(t);
              }),
              (t.prototype.getRotation = function (t) {
                return (
                  void 0 === t && (t = this.prevClients),
                  Je(t) - Je(this.startClients)
                );
              }),
              (t.prototype.getPosition = function (t, e) {
                void 0 === t && (t = this.prevClients);
                var n = $e(
                    t || this.prevClients,
                    this.prevClients,
                    this.startClients
                  ),
                  r = n.deltaX,
                  o = n.deltaY;
                return (
                  (this.movement += Math.sqrt(r * r + o * o)),
                  (this.prevClients = t),
                  n
                );
              }),
              (t.prototype.getPositions = function (t) {
                void 0 === t && (t = this.prevClients);
                var e = this.prevClients;
                return this.startClients.map(function (n, r) {
                  return $e([t[r]], [e[r]], [n]);
                });
              }),
              (t.prototype.getMovement = function (t) {
                var e = this.movement;
                if (!t) return e;
                var n = en(t, this.length),
                  r = en(this.prevClients, this.length),
                  o = n.clientX - r.clientX,
                  i = n.clientY - r.clientY;
                return Math.sqrt(o * o + i * i) + e;
              }),
              (t.prototype.getDistance = function (t) {
                return void 0 === t && (t = this.prevClients), Ze(t);
              }),
              (t.prototype.getScale = function (t) {
                return (
                  void 0 === t && (t = this.prevClients),
                  Ze(t) / Ze(this.startClients)
                );
              }),
              (t.prototype.move = function (t, e) {
                this.startClients.forEach(function (n) {
                  (n.clientX -= t), (n.clientY -= e);
                }),
                  this.prevClients.forEach(function (n) {
                    (n.clientX -= t), (n.clientY -= e);
                  });
              }),
              t
            );
          })(),
          rn = ['textarea', 'input'],
          on = (function (t) {
            function e(e, n) {
              void 0 === n && (n = {});
              var r = t.call(this) || this;
              (r.options = {}),
                (r.flag = !1),
                (r.pinchFlag = !1),
                (r.data = {}),
                (r.isDrag = !1),
                (r.isPinch = !1),
                (r.isMouse = !1),
                (r.isTouch = !1),
                (r.clientStores = []),
                (r.targets = []),
                (r.prevTime = 0),
                (r.doubleFlag = !1),
                (r._dragFlag = !1),
                (r._isTrusted = !1),
                (r._isMouseEvent = !1),
                (r._isSecondaryButton = !1),
                (r._preventMouseEvent = !1),
                (r._prevInputEvent = null),
                (r.onDragStart = function (t, e) {
                  if (
                    (void 0 === e && (e = !0), r.flag || !1 !== t.cancelable)
                  ) {
                    var n = r.options,
                      o = n.container,
                      i = n.pinchOutside,
                      a = n.preventWheelClick,
                      s = n.preventRightClick,
                      u = n.preventDefault,
                      c = n.checkInput,
                      l = n.preventClickEventOnDragStart,
                      f = n.preventClickEventOnDrag,
                      p = n.preventClickEventByCondition,
                      d = r.isTouch,
                      h = !r.flag;
                    if (
                      ((r._isSecondaryButton = 3 === t.which || 2 === t.button),
                      (a && (2 === t.which || 1 === t.button)) ||
                        (s && (3 === t.which || 2 === t.button)))
                    )
                      return r.stop(), !1;
                    if (h) {
                      var v = document.activeElement,
                        g = t.target;
                      if (g) {
                        var m = g.tagName.toLowerCase(),
                          y = rn.indexOf(m) > -1,
                          b = g.isContentEditable;
                        if (y || b) {
                          if (c || v === g) return !1;
                          if (v && b && v.isContentEditable && v.contains(g))
                            return !1;
                        } else if ((u || 'touchstart' === t.type) && v) {
                          var x = v.tagName.toLowerCase();
                          (v.isContentEditable || rn.indexOf(x) > -1) &&
                            v.blur();
                        }
                        (l || f || p) && K(window, 'click', r._onClick, !0);
                      }
                      (r.clientStores = [new nn(Ke(t))]),
                        (r.flag = !0),
                        (r.isDrag = !1),
                        (r._isTrusted = e),
                        (r._dragFlag = !0),
                        (r._prevInputEvent = t),
                        (r.data = {}),
                        (r.doubleFlag = F() - r.prevTime < 200),
                        (r._isMouseEvent = (function (t) {
                          return (
                            t && (t.type.indexOf('mouse') > -1 || 'button' in t)
                          );
                        })(t)),
                        !r._isMouseEvent &&
                          r._preventMouseEvent &&
                          (r._preventMouseEvent = !1),
                        !1 ===
                          (r._preventMouseEvent ||
                            r.emit(
                              'dragStart',
                              Qe(
                                Qe(
                                  {
                                    data: r.data,
                                    datas: r.data,
                                    inputEvent: t,
                                    isMouseEvent: r._isMouseEvent,
                                    isSecondaryButton: r._isSecondaryButton,
                                    isTrusted: e,
                                    isDouble: r.doubleFlag,
                                  },
                                  r.getCurrentStore().getPosition()
                                ),
                                {
                                  preventDefault: function () {
                                    t.preventDefault();
                                  },
                                  preventDrag: function () {
                                    r._dragFlag = !1;
                                  },
                                }
                              )
                            )) && r.stop(),
                        r._isMouseEvent && r.flag && u && t.preventDefault();
                    }
                    if (!r.flag) return !1;
                    var w = 0;
                    if (
                      (h
                        ? (r._attchDragEvent(),
                          d &&
                            i &&
                            (w = setTimeout(function () {
                              K(o, 'touchstart', r.onDragStart, {
                                passive: !1,
                              });
                            })))
                        : d && i && $(o, 'touchstart', r.onDragStart),
                      r.flag &&
                        (function (t) {
                          return t.touches && t.touches.length >= 2;
                        })(t))
                    ) {
                      if (
                        (clearTimeout(w),
                        h && t.touches.length !== t.changedTouches.length)
                      )
                        return;
                      r.pinchFlag || r.onPinchStart(t);
                    }
                  }
                }),
                (r.onDrag = function (t, e) {
                  if (r.flag) {
                    var n = r.options.preventDefault;
                    !r._isMouseEvent && n && t.preventDefault(),
                      (r._prevInputEvent = t);
                    var o = Ke(t),
                      i = r.moveClients(o, t, !1);
                    if (r._dragFlag) {
                      if (r.pinchFlag || i.deltaX || i.deltaY)
                        if (
                          !1 ===
                          (r._preventMouseEvent ||
                            r.emit(
                              'drag',
                              Qe(Qe({}, i), {
                                isScroll: !!e,
                                inputEvent: t,
                              })
                            ))
                        )
                          return void r.stop();
                      r.pinchFlag && r.onPinch(t, o);
                    }
                    r.getCurrentStore().getPosition(o, !0);
                  }
                }),
                (r.onDragEnd = function (t) {
                  if (r.flag) {
                    var e = r.options,
                      n = e.pinchOutside,
                      o = e.container,
                      i = e.preventClickEventOnDrag,
                      a = e.preventClickEventOnDragStart,
                      s = e.preventClickEventByCondition,
                      u = r.isDrag;
                    (i || a || s) &&
                      requestAnimationFrame(function () {
                        r._allowClickEvent();
                      }),
                      s || a || !i || u || r._allowClickEvent(),
                      r.isTouch && n && $(o, 'touchstart', r.onDragStart),
                      r.pinchFlag && r.onPinchEnd(t);
                    var c = (null == t ? void 0 : t.touches) ? Ke(t) : [];
                    0 !== c.length && r.options.keepDragging
                      ? r._addStore(new nn(c))
                      : (r.flag = !1);
                    var l = r._getPosition(),
                      f = F(),
                      p = !u && r.doubleFlag;
                    (r._prevInputEvent = null),
                      (r.prevTime = u || p ? 0 : f),
                      r.flag ||
                        (r._dettachDragEvent(),
                        r._preventMouseEvent ||
                          r.emit(
                            'dragEnd',
                            Qe(
                              {
                                data: r.data,
                                datas: r.data,
                                isDouble: p,
                                isDrag: u,
                                isClick: !u,
                                isMouseEvent: r._isMouseEvent,
                                isSecondaryButton: r._isSecondaryButton,
                                inputEvent: t,
                                isTrusted: r._isTrusted,
                              },
                              l
                            )
                          ),
                        (r.clientStores = []),
                        r._isMouseEvent ||
                          ((r._preventMouseEvent = !0),
                          requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                              r._preventMouseEvent = !1;
                            });
                          })));
                  }
                }),
                (r.onBlur = function () {
                  r.onDragEnd();
                }),
                (r._allowClickEvent = function () {
                  $(window, 'click', r._onClick, !0);
                }),
                (r._onClick = function (t) {
                  r._allowClickEvent(), (r._preventMouseEvent = !1);
                  var e = r.options.preventClickEventByCondition;
                  (null == e ? void 0 : e(t)) ||
                    (t.stopPropagation(), t.preventDefault());
                }),
                (r._onContextMenu = function (t) {
                  r.options.preventRightClick
                    ? r.onDragEnd(t)
                    : t.preventDefault();
                }),
                (r._passCallback = function () {});
              var o = [].concat(e);
              r.options = Qe(
                {
                  checkInput: !1,
                  container: o.length > 1 ? window : o[0],
                  preventRightClick: !0,
                  preventWheelClick: !0,
                  preventClickEventOnDragStart: !1,
                  preventClickEventOnDrag: !1,
                  preventClickEventByCondition: null,
                  preventDefault: !0,
                  checkWindowBlur: !1,
                  keepDragging: !1,
                  pinchThreshold: 0,
                  events: ['touch', 'mouse'],
                },
                n
              );
              var i = r.options,
                a = i.container,
                s = i.events,
                u = i.checkWindowBlur;
              if (
                ((r.isTouch = s.indexOf('touch') > -1),
                (r.isMouse = s.indexOf('mouse') > -1),
                (r.targets = o),
                r.isMouse &&
                  (o.forEach(function (t) {
                    K(t, 'mousedown', r.onDragStart),
                      K(t, 'mousemove', r._passCallback);
                  }),
                  K(a, 'contextmenu', r._onContextMenu)),
                u && K(window, 'blur', r.onBlur),
                r.isTouch)
              ) {
                var c = {
                  passive: !1,
                };
                o.forEach(function (t) {
                  K(t, 'touchstart', r.onDragStart, c),
                    K(t, 'touchmove', r._passCallback, c);
                });
              }
              return r;
            }
            return (
              (function (t, e) {
                function n() {
                  this.constructor = t;
                }
                Ue(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              })(e, t),
              (e.prototype.stop = function () {
                (this.isDrag = !1),
                  (this.data = {}),
                  (this.clientStores = []),
                  (this.pinchFlag = !1),
                  (this.doubleFlag = !1),
                  (this.prevTime = 0),
                  (this.flag = !1),
                  this._allowClickEvent(),
                  this._dettachDragEvent();
              }),
              (e.prototype.getMovement = function (t) {
                return (
                  this.getCurrentStore().getMovement(t) +
                  this.clientStores.slice(1).reduce(function (t, e) {
                    return t + e.movement;
                  }, 0)
                );
              }),
              (e.prototype.isDragging = function () {
                return this.isDrag;
              }),
              (e.prototype.isFlag = function () {
                return this.flag;
              }),
              (e.prototype.isPinchFlag = function () {
                return this.pinchFlag;
              }),
              (e.prototype.isDoubleFlag = function () {
                return this.doubleFlag;
              }),
              (e.prototype.isPinching = function () {
                return this.isPinch;
              }),
              (e.prototype.scrollBy = function (t, e, n, r) {
                void 0 === r && (r = !0),
                  this.flag &&
                    (this.clientStores[0].move(t, e), r && this.onDrag(n, !0));
              }),
              (e.prototype.move = function (t, e) {
                var n = t[0],
                  r = t[1],
                  o = this.getCurrentStore().prevClients;
                return this.moveClients(
                  o.map(function (t) {
                    var e = t.clientX,
                      o = t.clientY;
                    return {
                      clientX: e + n,
                      clientY: o + r,
                      originalClientX: e,
                      originalClientY: o,
                    };
                  }),
                  e,
                  !0
                );
              }),
              (e.prototype.triggerDragStart = function (t) {
                this.onDragStart(t, !1);
              }),
              (e.prototype.setEventData = function (t) {
                var e = this.data;
                for (var n in t) e[n] = t[n];
                return this;
              }),
              (e.prototype.setEventDatas = function (t) {
                return this.setEventData(t);
              }),
              (e.prototype.getCurrentEvent = function (t) {
                return (
                  void 0 === t && (t = this._prevInputEvent),
                  Qe(
                    Qe(
                      {
                        data: this.data,
                        datas: this.data,
                      },
                      this._getPosition()
                    ),
                    {
                      movement: this.getMovement(),
                      isDrag: this.isDrag,
                      isPinch: this.isPinch,
                      isScroll: !1,
                      inputEvent: t,
                    }
                  )
                );
              }),
              (e.prototype.getEventData = function () {
                return this.data;
              }),
              (e.prototype.getEventDatas = function () {
                return this.data;
              }),
              (e.prototype.unset = function () {
                var t = this,
                  e = this.targets,
                  n = this.options.container;
                this.off(),
                  $(window, 'blur', this.onBlur),
                  this.isMouse &&
                    (e.forEach(function (e) {
                      $(e, 'mousedown', t.onDragStart);
                    }),
                    $(n, 'contextmenu', this._onContextMenu)),
                  this.isTouch &&
                    (e.forEach(function (e) {
                      $(e, 'touchstart', t.onDragStart);
                    }),
                    $(n, 'touchstart', this.onDragStart)),
                  (this._prevInputEvent = null),
                  this._allowClickEvent(),
                  this._dettachDragEvent();
              }),
              (e.prototype.onPinchStart = function (t) {
                var e = this,
                  n = this.options.pinchThreshold;
                if (!(this.isDrag && this.getMovement() > n)) {
                  var r = new nn(Ke(t));
                  (this.pinchFlag = !0),
                    this._addStore(r),
                    !1 ===
                      this.emit(
                        'pinchStart',
                        Qe(
                          Qe(
                            {
                              data: this.data,
                              datas: this.data,
                              angle: r.getAngle(),
                              touches: this.getCurrentStore().getPositions(),
                            },
                            r.getPosition()
                          ),
                          {
                            inputEvent: t,
                            isTrusted: this._isTrusted,
                            preventDefault: function () {
                              t.preventDefault();
                            },
                            preventDrag: function () {
                              e._dragFlag = !1;
                            },
                          }
                        )
                      ) && (this.pinchFlag = !1);
                }
              }),
              (e.prototype.onPinch = function (t, e) {
                if (this.flag && this.pinchFlag && !(e.length < 2)) {
                  var n = this.getCurrentStore();
                  (this.isPinch = !0),
                    this.emit(
                      'pinch',
                      Qe(
                        Qe(
                          {
                            data: this.data,
                            datas: this.data,
                            movement: this.getMovement(e),
                            angle: n.getAngle(e),
                            rotation: n.getRotation(e),
                            touches: n.getPositions(e),
                            scale: n.getScale(e),
                            distance: n.getDistance(e),
                          },
                          n.getPosition(e)
                        ),
                        {
                          inputEvent: t,
                          isTrusted: this._isTrusted,
                        }
                      )
                    );
                }
              }),
              (e.prototype.onPinchEnd = function (t) {
                if (this.pinchFlag) {
                  var e = this.isPinch;
                  (this.isPinch = !1), (this.pinchFlag = !1);
                  var n = this.getCurrentStore();
                  this.emit(
                    'pinchEnd',
                    Qe(
                      Qe(
                        {
                          data: this.data,
                          datas: this.data,
                          isPinch: e,
                          touches: n.getPositions(),
                        },
                        n.getPosition()
                      ),
                      {
                        inputEvent: t,
                      }
                    )
                  );
                }
              }),
              (e.prototype.getCurrentStore = function () {
                return this.clientStores[0];
              }),
              (e.prototype.moveClients = function (t, e, n) {
                var r = this._getPosition(t, n),
                  o = this.isDrag;
                (r.deltaX || r.deltaY) && (this.isDrag = !0);
                var i = !1;
                return (
                  !o && this.isDrag && (i = !0),
                  Qe(
                    Qe(
                      {
                        data: this.data,
                        datas: this.data,
                      },
                      r
                    ),
                    {
                      movement: this.getMovement(t),
                      isDrag: this.isDrag,
                      isPinch: this.isPinch,
                      isScroll: !1,
                      isMouseEvent: this._isMouseEvent,
                      isSecondaryButton: this._isSecondaryButton,
                      inputEvent: e,
                      isTrusted: this._isTrusted,
                      isFirstDrag: i,
                    }
                  )
                );
              }),
              (e.prototype._addStore = function (t) {
                this.clientStores.splice(0, 0, t);
              }),
              (e.prototype._getPosition = function (t, e) {
                var n = this.getCurrentStore().getPosition(t, e),
                  r = this.clientStores.slice(1).reduce(function (t, e) {
                    var n = e.getPosition();
                    return (t.distX += n.distX), (t.distY += n.distY), t;
                  }, n),
                  o = r.distX,
                  i = r.distY;
                return Qe(Qe({}, n), {
                  distX: o,
                  distY: i,
                });
              }),
              (e.prototype._attchDragEvent = function () {
                var t = this.options.container,
                  e = {
                    passive: !1,
                  };
                this.isMouse &&
                  (K(t, 'mousemove', this.onDrag),
                  K(t, 'mouseup', this.onDragEnd)),
                  this.isTouch &&
                    (K(t, 'touchmove', this.onDrag, e),
                    K(t, 'touchend', this.onDragEnd, e),
                    K(t, 'touchcancel', this.onDragEnd, e));
              }),
              (e.prototype._dettachDragEvent = function () {
                var t = this.options.container;
                this.isMouse &&
                  ($(t, 'mousemove', this.onDrag),
                  $(t, 'mouseup', this.onDragEnd)),
                  this.isTouch &&
                    ($(t, 'touchstart', this.onDragStart),
                    $(t, 'touchmove', this.onDrag),
                    $(t, 'touchend', this.onDragEnd),
                    $(t, 'touchcancel', this.onDragEnd));
              }),
              e
            );
          })(Ge);
        var an = function (t) {
          for (var e = 5381, n = t.length; n; )
            e = (33 * e) ^ t.charCodeAt(--n);
          return e >>> 0;
        };
        function sn(t, e, n, r) {
          var o = document.createElement('style');
          return (
            o.setAttribute('type', 'text/css'),
            o.setAttribute('data-styled-id', t),
            n.nonce && o.setAttribute('nonce', n.nonce),
            (o.innerHTML = (function (t, e, n) {
              return n.original
                ? e
                : e.replace(/([^};{\s}][^};{]*|^\s*){/gm, function (e, n) {
                    var r = n.trim();
                    return (
                      (r ? k(r) : [''])
                        .map(function (e) {
                          var n = e.trim();
                          return 0 === n.indexOf('@')
                            ? n
                            : n.indexOf(':global') > -1
                            ? n.replace(/\:global/g, '')
                            : n.indexOf(':host') > -1
                            ? '' + n.replace(/\:host/g, '.' + t)
                            : n
                            ? '.' + t + ' ' + n
                            : '.' + t;
                        })
                        .join(', ') + ' {'
                    );
                  });
            })(t, e, n)),
            (r || document.head || document.body).appendChild(o),
            o
          );
        }
        const un = function (t) {
          var e,
            n = 'rCS' + an(t).toString(36),
            r = 0;
          return {
            className: n,
            inject: function (o, i) {
              void 0 === i && (i = {});
              var a,
                s = (function (t) {
                  if (t && t.getRootNode) {
                    var e = t.getRootNode();
                    if (11 === e.nodeType) return e;
                  }
                })(o),
                u = 0 === r;
              return (
                (s || u) && (a = sn(n, t, i, s)),
                u && (e = a),
                s || ++r,
                {
                  destroy: function () {
                    s
                      ? (s.removeChild(a), (a = null))
                      : (r > 0 && --r,
                        0 === r &&
                          e &&
                          (e.parentNode.removeChild(e), (e = null)));
                  },
                }
              );
            },
          };
        };
        var cn = function (t, e) {
          return (
            (cn =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            cn(t, e)
          );
        };
        function ln(t, e) {
          function n() {
            this.constructor = t;
          }
          cn(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }
        var fn = function () {
          return (
            (fn =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            fn.apply(this, arguments)
          );
        };
        var pn = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.injectResult = null), (e.tag = 'div'), e;
          }
          ln(e, t);
          var n = e.prototype;
          return (
            (n.render = function () {
              var t = this.props,
                e = t.className,
                n = void 0 === e ? '' : e,
                r = (t.cspNonce, t.portalContainer),
                o = (function (t, e) {
                  var n = {};
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) &&
                      e.indexOf(r) < 0 &&
                      (n[r] = t[r]);
                  if (
                    null != t &&
                    'function' == typeof Object.getOwnPropertySymbols
                  ) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
                      e.indexOf(r[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                        (n[r[o]] = t[r[o]]);
                  }
                  return n;
                })(t, ['className', 'cspNonce', 'portalContainer']),
                a = this.injector.className,
                s = this.tag,
                u = {};
              return (
                'simple-1.1.0'.indexOf('simple') > -1 &&
                  r &&
                  (u = {
                    portalContainer: r,
                  }),
                ft(
                  s,
                  fn(
                    {
                      ref: i(this, 'element'),
                      'data-styled-id': a,
                      className: n + ' ' + a,
                    },
                    u,
                    o
                  )
                )
              );
            }),
            (n.componentDidMount = function () {
              this.injectResult = this.injector.inject(this.element, {
                nonce: this.props.cspNonce,
              });
            }),
            (n.componentWillUnmount = function () {
              this.injectResult.destroy(), (this.injectResult = null);
            }),
            (n.getElement = function () {
              return this.element;
            }),
            e
          );
        })(wt);
        const dn = function (t, e) {
          var n = un(e);
          return (function (e) {
            function r() {
              var r = (null !== e && e.apply(this, arguments)) || this;
              return (r.injector = n), (r.tag = t), r;
            }
            return ln(r, e), r;
          })(pn);
        };
        var hn = function (t, e) {
          return (
            (hn =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            hn(t, e)
          );
        };
        function vn(t, e) {
          function n() {
            this.constructor = t;
          }
          hn(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }
        var gn = function () {
          return (
            (gn =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            gn.apply(this, arguments)
          );
        };
        function mn() {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
          var r = Array(t),
            o = 0;
          for (e = 0; e < n; e++)
            for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
              r[o] = i[a];
          return r;
        }
        function yn(t, e) {
          var n;
          return gn(
            {
              events: {},
              props: ((n = {}), (n[t] = Boolean), n),
              name: t,
            },
            e
          );
        }
        function bn(t, e) {
          return (
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' +
            32 * t +
            'px" height="' +
            32 * t +
            'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(' +
            e +
            'deg);transform-origin: 16px 16px"></path></svg>'
          );
        }
        var xn,
          wn = Yt().browser.webkit,
          En =
            wn &&
            !!(xn = /applewebkit\/([^\s]+)/g.exec(
              navigator.userAgent.toLowerCase()
            )) &&
            parseFloat(xn[1]) < 605,
          Sn = 'moveable-',
          On =
            '\n{\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tleft: 0;\n\ttop: 0;\n    z-index: 3000;\n    --moveable-color: #4af;\n    --zoom: 1;\n    --zoompx: 1px;\n    will-change: transform;\n}\n.control-box {\n    z-index: 0;\n}\n.line, .control {\n    position: absolute;\n\tleft: 0;\n    top: 0;\n    will-change: transform;\n}\n.control {\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n\tbox-sizing: border-box;\n    background: #4af;\n    background: var(--moveable-color);\n\tmargin-top: -7px;\n    margin-left: -7px;\n    border: 2px solid #fff;\n    z-index: 10;\n}\n.padding {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100px;\n    height: 100px;\n    transform-origin: 0 0;\n}\n.line {\n\twidth: 1px;\n    height: 1px;\n    background: #4af;\n    background: var(--moveable-color);\n\ttransform-origin: 0px 50%;\n}\n.line.dashed {\n    box-sizing: border-box;\n    background: transparent;\n}\n.line.dashed.horizontal {\n    border-top: 1px dashed #4af;\n    border-top-color: #4af;\n    border-top-color: var(--moveable-color);\n}\n.line.dashed.vertical {\n    border-left: 1px dashed #4af;\n    border-left-color: #4af;\n    border-left-color: var(--moveable-color);\n}\n.line.vertical {\n    transform: translateX(-50%);\n}\n.line.horizontal {\n    transform: translateY(-50%);\n}\n.line.vertical.bold {\n    width: 2px;\n}\n.line.horizontal.bold {\n    height: 2px;\n}\n\n.control.origin {\n\tborder-color: #f55;\n\tbackground: #fff;\n\twidth: 12px;\n\theight: 12px;\n\tmargin-top: -6px;\n    margin-left: -6px;\n\tpointer-events: none;\n}\n' +
            [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165]
              .map(function (t) {
                return (
                  '\n.direction[data-rotation="' +
                  t +
                  '"] {\n\t' +
                  (function (t) {
                    var e = bn(1, t),
                      n = bn(2, t),
                      r = (45 * Math.round(t / 45)) % 180,
                      o = 'ns-resize';
                    return (
                      135 === r
                        ? (o = 'nwse-resize')
                        : 45 === r
                        ? (o = 'nesw-resize')
                        : 90 === r && (o = 'ew-resize'),
                      'cursor:' +
                        o +
                        ";cursor: url('" +
                        e +
                        "') 16 16, " +
                        o +
                        ";cursor: -webkit-image-set(url('" +
                        e +
                        "') 1x, url('" +
                        n +
                        "') 2x) 16 16, " +
                        o +
                        ';'
                    );
                  })(t) +
                  '\n}\n'
                );
              })
              .join('\n') +
            '\n.group {\n    z-index: -1;\n}\n.area {\n    position: absolute;\n}\n.area-pieces {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: none;\n}\n.area.avoid, .area.pass {\n    pointer-events: none;\n}\n.area.avoid+.area-pieces {\n    display: block;\n}\n.area-piece {\n    position: absolute;\n}\n\n' +
            (En
              ? ':global svg *:before {\n\tcontent:"";\n\ttransform-origin: inherit;\n}'
              : '') +
            '\n',
          An = [
            [0, 1, 2],
            [1, 0, 3],
            [2, 0, 3],
            [3, 1, 2],
          ],
          Cn = 1e-4,
          Mn = 1e-7,
          Dn = 1e-9,
          Pn = Math.pow(10, 10),
          jn = -Pn,
          Tn = ['n', 'w', 's', 'e', 'nw', 'ne', 'sw', 'se'],
          Rn = {
            n: [0, 1],
            s: [2, 3],
            w: [2, 0],
            e: [1, 3],
            nw: [0],
            ne: [1],
            sw: [2],
            se: [3],
          },
          kn = {
            n: 0,
            s: 180,
            w: 270,
            e: 90,
            nw: 315,
            ne: 45,
            sw: 225,
            se: 135,
          },
          Bn = [
            'isMoveableElement',
            'updateRect',
            'updateTarget',
            'destroy',
            'dragStart',
            'isInside',
            'hitTest',
            'setState',
            'getRect',
            'request',
            'isDragging',
            'getManager',
          ];
        function In() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return o.apply(void 0, mn([Sn], t));
        }
        function _n(t, e, n) {
          return Zt(
            e,
            ge(n, e),
            t,
            ge(
              n.map(function (t) {
                return -t;
              }),
              e
            )
          );
        }
        function Fn(t) {
          return Nn(hr(t, ':before')).map(function (e, n) {
            var r = I(e),
              o = r.value,
              i = r.unit;
            return (
              o *
              (function (t, e, n) {
                return '%' === e
                  ? Vn(t.ownerSVGElement)[n ? 'width' : 'height'] / 100
                  : 1;
              })(t, i, 0 === n)
            );
          });
        }
        function Nn(t) {
          var e = t.transformOrigin;
          return e ? e.split(' ') : ['0', '0'];
        }
        function zn(t, e, n) {
          for (
            var r = document.body,
              o = !t || n ? t : t.parentElement,
              i = t === e || o === e,
              a = 'relative';
            o && o !== r;

          ) {
            e === o && (i = !0);
            var s = hr(o),
              u = s.transform;
            if (
              ((a = s.position),
              'svg' === o.tagName.toLowerCase() ||
                'static' !== a ||
                (u && 'none' !== u))
            )
              break;
            (o = o.parentElement), (a = 'relative');
          }
          return {
            isStatic: 'static' === a,
            isEnd: i || !o || o === r,
            offsetParent: o || r,
          };
        }
        function Gn(t, e, n, r) {
          var o,
            i = t.tagName.toLowerCase(),
            a = t.offsetLeft,
            s = t.offsetTop;
          if (r) {
            var u = (e || document.documentElement).getBoundingClientRect();
            (a -= u.left), (s -= u.top);
          }
          var c,
            l,
            f = O(a),
            p = !f;
          return (
            p || 'svg' === i
              ? (l = (c = Nn(n).map(function (t) {
                  return parseFloat(t);
                })).slice())
              : ((l = (c = En
                  ? Fn(t)
                  : Nn(n).map(function (t) {
                      return parseFloat(t);
                    })).slice()),
                (p = !0),
                (o = (function (t, e) {
                  if (!t.getBBox) return [0, 0];
                  var n = t.getBBox(),
                    r = Vn(t.ownerSVGElement),
                    o = n.x - r.x,
                    i = n.y - r.y;
                  return [o, i, e[0] - o, e[1] - i];
                })(t, c)),
                (a = o[0]),
                (s = o[1]),
                (c[0] = o[2]),
                (c[1] = o[3])),
            {
              tagName: i,
              isSVG: f,
              hasOffset: p,
              offset: [a || 0, s || 0],
              origin: c,
              targetOrigin: l,
            }
          );
        }
        function Ln(t, e, n) {
          void 0 === n && (n = hr(t));
          var r = hr(document.body),
            o = r.position;
          if (!(e || (o && 'static' !== o))) return [0, 0];
          var i = parseInt(r.marginLeft, 10),
            a = parseInt(r.marginTop, 10);
          return (
            'absolute' === n.position &&
              (('auto' === n.top && 'auto' === n.bottom) || (a = 0),
              ('auto' === n.left && 'auto' === n.right) || (i = 0)),
            [i, a]
          );
        }
        function Wn(t) {
          t.forEach(function (t) {
            var e = t.matrix;
            e && (t.matrix = $t(e, 3, 4));
          });
        }
        function qn(t, e) {
          for (
            var n,
              r,
              o,
              i,
              a = t,
              s = [],
              u = t === e,
              c = !1,
              l = 3,
              f = zn(e, e, !0).offsetParent;
            a && !u;

          ) {
            var p = hr(a),
              d = p.position,
              h = 'fixed' === d,
              v = re(
                (i = p.transform) && 'none' !== i
                  ? A(i)
                    ? i
                    : B(i)
                        .value.split(/s*,\s*/g)
                        .map(function (t) {
                          return parseFloat(t);
                        })
                  : [1, 0, 0, 1, 0, 0]
              ),
              g = v.length;
            c || 16 !== g || ((c = !0), (l = 4), Wn(s)),
              c && 9 === g && (v = $t(v, 3, 4));
            var m = Gn(a, e, p, h),
              y = m.tagName,
              b = m.hasOffset,
              x = m.isSVG,
              w = m.origin,
              E = m.targetOrigin,
              S = m.offset,
              O = S[0],
              C = S[1];
            'svg' === y && o
              ? (s.push({
                  type: 'target',
                  target: a,
                  matrix: Xn(a, l),
                }),
                s.push({
                  type: 'offset',
                  target: a,
                  matrix: he(l),
                }))
              : 'g' === y && t !== a && ((O = 0), (C = 0));
            var M = zn(a, e),
              D = M.offsetParent,
              P = M.isEnd,
              j = M.isStatic;
            wn &&
              b &&
              !x &&
              j &&
              ('relative' === d || 'static' === d) &&
              ((O -= D.offsetLeft), (C -= D.offsetTop), (u = u || P));
            var T = 0,
              R = 0;
            if (
              (b && f !== D && ((T = D.clientLeft), (R = D.clientTop)),
              b && D === document.body)
            ) {
              var k = Ln(a, !1, p);
              (O += k[0]), (C += k[1]);
            }
            if (
              (s.push({
                type: 'target',
                target: a,
                matrix: _n(v, l, w),
              }),
              b
                ? s.push({
                    type: 'offset',
                    target: a,
                    matrix: ge([O - a.scrollLeft + T, C - a.scrollTop + R], l),
                  })
                : s.push({
                    type: 'offset',
                    target: a,
                    origin: w,
                  }),
              o || (o = v),
              n || (n = w),
              r || (r = E),
              u || h)
            )
              break;
            (a = D), (u = P);
          }
          return (
            o || (o = he(l)),
            n || (n = [0, 0]),
            r || (r = [0, 0]),
            {
              offsetContainer: f,
              matrixes: s,
              targetMatrix: o,
              transformOrigin: n,
              targetOrigin: r,
              is3d: c,
            }
          );
        }
        function Hn(t, e, n, r) {
          var o;
          void 0 === n && (n = e);
          var i = 0,
            a = 0,
            s = 0,
            u = {};
          if (t) {
            var c = hr(t);
            (i = t.offsetWidth),
              (a = t.offsetHeight),
              O(i) && ((i = (o = rr(t, c, !0))[0]), (a = o[1]));
          }
          if (t) {
            var l = (function (t, e, n, r) {
                void 0 === n && (n = e);
                var o = qn(t, e),
                  i = o.matrixes,
                  a = o.is3d,
                  s = o.targetMatrix,
                  u = o.transformOrigin,
                  c = o.targetOrigin,
                  l = o.offsetContainer,
                  f = qn(l, n),
                  p = f.matrixes,
                  d = f.is3d,
                  h = r || d || a,
                  v = h ? 4 : 3,
                  g =
                    'svg' !== t.tagName.toLowerCase() && 'ownerSVGElement' in t,
                  m = s,
                  y = he(v),
                  b = he(v),
                  x = he(v),
                  w = he(v),
                  E = i.length,
                  S = n || document.body,
                  O = zn(S, S, !0).offsetParent;
                p.reverse(), i.reverse(), !a && h && ((m = $t(m, 3, 4)), Wn(i));
                !d && h && Wn(p);
                p.forEach(function (t) {
                  b = te(b, t.matrix, v);
                }),
                  i.forEach(function (t, e) {
                    if (
                      (E - 2 === e && (x = y.slice()),
                      E - 1 === e && (w = y.slice()),
                      !t.matrix)
                    ) {
                      var n = (function (t, e, n, r, o) {
                        var i,
                          a = t.target,
                          s = t.origin,
                          u = e.matrix,
                          c = rr(a, void 0, !0),
                          l = c[0],
                          f = c[1],
                          p = n.getBoundingClientRect(),
                          d = [0, 0];
                        n === document.body && (d = Ln(a, !0));
                        var h = a.getBoundingClientRect(),
                          v =
                            h.left -
                            p.left +
                            n.scrollLeft -
                            (n.clientLeft || 0) +
                            d[0],
                          g =
                            h.top -
                            p.top +
                            n.scrollTop -
                            (n.clientTop || 0) +
                            d[1],
                          m = h.width,
                          y = h.height,
                          b = Zt(r, o, u),
                          x = Kn(b, l, f, r),
                          w = x.left,
                          E = x.top,
                          S = x.width,
                          O = x.height,
                          A = Un(b, s, r),
                          C = ne(A, [w, E]),
                          M = [v + (C[0] * m) / S, g + (C[1] * y) / O],
                          D = [0, 0],
                          P = 0;
                        for (; ++P < 10; ) {
                          var j = Jt(o, r);
                          (i = ne(Un(j, M, r), Un(j, A, r))),
                            (D[0] = i[0]),
                            (D[1] = i[1]);
                          var T = Kn(Zt(r, o, ge(D, r), u), l, f, r),
                            R = T.left - v,
                            k = T.top - g;
                          if (Math.abs(R) < 2 && Math.abs(k) < 2) break;
                          (M[0] -= R), (M[1] -= k);
                        }
                        return D.map(function (t) {
                          return Math.round(t);
                        });
                      })(t, i[e + 1], O, v, te(b, y, v));
                      t.matrix = ge(n, v);
                    }
                    y = te(y, t.matrix, v);
                  });
                var A = !g && a;
                m || (m = he(A ? 4 : 3));
                var C = Yn(g && 16 === m.length ? $t(m, 4, 3) : m, A);
                return (
                  (b = Qt(b, v, v)),
                  {
                    rootMatrix: b,
                    beforeMatrix: x,
                    offsetMatrix: w,
                    allMatrix: y,
                    targetMatrix: m,
                    targetTransform: C,
                    transformOrigin: u,
                    targetOrigin: c,
                    is3d: h,
                  }
                );
              })(t, e, n, r),
              f = $n(l.allMatrix, l.transformOrigin, i, a);
            u = gn(gn({}, l), f);
            var p = $n(l.allMatrix, [50, 50], 100, 100);
            s = or([p.pos1, p.pos2], p.direction);
          }
          var d = r ? 4 : 3;
          return gn(
            {
              width: i,
              height: a,
              rotation: s,
              rootMatrix: he(d),
              beforeMatrix: he(d),
              offsetMatrix: he(d),
              allMatrix: he(d),
              targetMatrix: he(d),
              targetTransform: '',
              transformOrigin: [0, 0],
              targetOrigin: [0, 0],
              is3d: !!r,
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              origin: [0, 0],
              pos1: [0, 0],
              pos2: [0, 0],
              pos3: [0, 0],
              pos4: [0, 0],
              direction: 1,
            },
            u
          );
        }
        function Yn(t, e) {
          return (
            void 0 === e && (e = t.length > 9),
            (e ? 'matrix3d' : 'matrix') + '(' + oe(t, !e).join(',') + ')'
          );
        }
        function Vn(t) {
          var e = t.clientWidth,
            n = t.clientHeight;
          if (!t)
            return {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              clientWidth: e,
              clientHeight: n,
            };
          var r = t.viewBox,
            o = (r && r.baseVal) || {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
            };
          return {
            x: o.x,
            y: o.y,
            width: o.width || e,
            height: o.height || n,
            clientWidth: e,
            clientHeight: n,
          };
        }
        function Xn(t, e) {
          var n = Vn(t),
            r = n.width,
            o = n.height,
            i = n.clientWidth,
            a = n.clientHeight,
            s = i / r,
            u = a / o,
            c = t.preserveAspectRatio.baseVal,
            l = c.align,
            f = c.meetOrSlice,
            p = [0, 0],
            d = [s, u],
            h = [0, 0];
          if (1 !== l) {
            var v = (l - 2) % 3,
              g = Math.floor((l - 2) / 3);
            (p[0] = (r * v) / 2), (p[1] = (o * g) / 2);
            var m = 2 === f ? Math.max(u, s) : Math.min(s, u);
            (d[0] = m),
              (d[1] = m),
              (h[0] = ((i - r) / 2) * v),
              (h[1] = ((a - o) / 2) * g);
          }
          var y = ve(d, e);
          return (
            (y[e * (e - 1)] = h[0]), (y[e * (e - 1) + 1] = h[1]), _n(y, e, p)
          );
        }
        function Un(t, e, n) {
          return ie(t, Kt(e, n), n);
        }
        function Qn(t, e, n, r) {
          return [
            [0, 0],
            [e, 0],
            [0, n],
            [e, n],
          ].map(function (e) {
            return Un(t, e, r);
          });
        }
        function Jn(t) {
          var e = t.map(function (t) {
              return t[0];
            }),
            n = t.map(function (t) {
              return t[1];
            }),
            r = Math.min.apply(Math, e),
            o = Math.min.apply(Math, n),
            i = Math.max.apply(Math, e),
            a = Math.max.apply(Math, n);
          return {
            left: r,
            top: o,
            right: i,
            bottom: a,
            width: i - r,
            height: a - o,
          };
        }
        function Kn(t, e, n, r) {
          return Jn(Qn(t, e, n, r));
        }
        function $n(t, e, n, r) {
          var o = 16 === t.length ? 4 : 3,
            i = Qn(t, n, r, o),
            a = i[0],
            s = a[0],
            u = a[1],
            c = i[1],
            l = c[0],
            f = c[1],
            p = i[2],
            d = p[0],
            h = p[1],
            v = i[3],
            g = v[0],
            m = v[1],
            y = Un(t, e, o),
            b = y[0],
            x = y[1],
            w = Math.min(s, l, d, g),
            E = Math.min(u, f, h, m),
            S = Math.max(s, l, d, g);
          return (
            (s = s - w || 0),
            {
              left: w,
              top: E,
              right: S,
              bottom: Math.max(u, f, h, m),
              origin: [(b = b - w || 0), (x = x - E || 0)],
              pos1: [s, (u = u - E || 0)],
              pos2: [(l = l - w || 0), (f = f - E || 0)],
              pos3: [(d = d - w || 0), (h = h - E || 0)],
              pos4: [(g = g - w || 0), (m = m - E || 0)],
              direction: V(i),
            }
          );
        }
        function Zn(t) {
          return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
        }
        function tr(t, e) {
          return Zn([e[0] - t[0], e[1] - t[1]]);
        }
        function er(t, e, n, r) {
          void 0 === n && (n = 1), void 0 === r && (r = Y(t, e));
          var o = tr(t, e);
          return {
            transform:
              'translateY(-50%) translate(' +
              t[0] +
              'px, ' +
              t[1] +
              'px) rotate(' +
              r +
              'rad) scaleY(' +
              n +
              ')',
            width: o + 'px',
          };
        }
        function nr(t, e) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var o = n.length;
          return {
            transform:
              'translateZ(0px) translate(' +
              n.reduce(function (t, e) {
                return t + e[0];
              }, 0) /
                o +
              'px, ' +
              n.reduce(function (t, e) {
                return t + e[1];
              }, 0) /
                o +
              'px) rotate(' +
              t +
              'rad) scale(' +
              e +
              ')',
          };
        }
        function rr(t, e, n, r) {
          void 0 === e && (e = hr(t)),
            void 0 === r && (r = n || 'border-box' === e.boxSizing);
          var o = t.offsetWidth,
            i = t.offsetHeight,
            a = !O(o);
          if ((n || r) && a) return [o, i];
          if (!a && 'svg' !== t.tagName.toLowerCase()) {
            var s = t.getBBox();
            return [s.width, s.height];
          }
          return (
            (o = t.clientWidth),
            (i = t.clientHeight),
            n || r
              ? [
                  o +
                    (parseFloat(e.borderLeftWidth) || 0) +
                    (parseFloat(e.borderRightWidth) || 0),
                  i +
                    (parseFloat(e.borderTopWidth) || 0) +
                    (parseFloat(e.borderBottomWidth) || 0),
                ]
              : [
                  o -
                    (parseFloat(e.paddingLeft) || 0) -
                    (parseFloat(e.paddingRight) || 0),
                  i -
                    (parseFloat(e.paddingTop) || 0) -
                    (parseFloat(e.paddingBottom) || 0),
                ]
          );
        }
        function or(t, e) {
          return Y(e > 0 ? t[0] : t[1], e > 0 ? t[1] : t[0]);
        }
        function ir(t, e, n, r, o) {
          var i = 1,
            a = [0, 0],
            s = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              width: 0,
              height: 0,
              clientLeft: 0,
              clientTop: 0,
              clientWidth: 0,
              clientHeight: 0,
              scrollWidth: 0,
              scrollHeight: 0,
            },
            u = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              width: 0,
              height: 0,
              clientLeft: 0,
              clientTop: 0,
              clientWidth: 0,
              clientHeight: 0,
              scrollWidth: 0,
              scrollHeight: 0,
            },
            c = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              width: 0,
              height: 0,
              clientLeft: 0,
              clientTop: 0,
              clientWidth: 0,
              clientHeight: 0,
              scrollWidth: 0,
              scrollHeight: 0,
            },
            l = Hn(e, n, o, !1);
          if (e) {
            var f = l.is3d ? 4 : 3,
              p = $n(
                l.offsetMatrix,
                ee(
                  l.transformOrigin,
                  (function (t, e) {
                    void 0 === e && (e = Math.sqrt(t.length));
                    for (var n = [], r = t[e * e - 1], o = 0; o < e - 1; ++o)
                      n[o] = t[e * (e - 1) + o] / r;
                    return (n[e - 1] = 0), n;
                  })(l.targetMatrix, f)
                ),
                l.width,
                l.height
              );
            (i = p.direction),
              (a = ee(p.origin, [p.left - l.left, p.top - l.top])),
              (s = ar(e)),
              (u = ar(zn(r, r, !0).offsetParent || document.body, !0)),
              t && (c = ar(t));
          }
          return gn(
            {
              targetClientRect: s,
              containerClientRect: u,
              moveableClientRect: c,
              beforeDirection: i,
              beforeOrigin: a,
              originalBeforeOrigin: a,
              target: e,
            },
            l
          );
        }
        function ar(t, e) {
          var n = 0,
            r = 0,
            o = 0,
            i = 0;
          if (t === document.body || t === document.documentElement)
            (o = window.innerWidth),
              (i = window.innerHeight),
              (n = -(
                document.documentElement.scrollLeft || document.body.scrollLeft
              )),
              (r = -(
                document.documentElement.scrollTop || document.body.scrollTop
              ));
          else {
            var a = t.getBoundingClientRect();
            (n = a.left), (r = a.top), (o = a.width), (i = a.height);
          }
          var s = {
            left: n,
            right: n + o,
            top: r,
            bottom: r + i,
            width: o,
            height: i,
          };
          return (
            e &&
              ((s.clientLeft = t.clientLeft),
              (s.clientTop = t.clientTop),
              (s.clientWidth = t.clientWidth),
              (s.clientHeight = t.clientHeight),
              (s.scrollWidth = t.scrollWidth),
              (s.scrollHeight = t.scrollHeight),
              (s.overflow = 'visible' !== hr(t).overflow)),
            s
          );
        }
        function sr(t) {
          if (t) {
            var e = t.getAttribute('data-direction');
            if (e) {
              var n = [0, 0];
              return (
                e.indexOf('w') > -1 && (n[0] = -1),
                e.indexOf('e') > -1 && (n[0] = 1),
                e.indexOf('n') > -1 && (n[1] = -1),
                e.indexOf('s') > -1 && (n[1] = 1),
                n
              );
            }
          }
        }
        function ur(t, e) {
          return [ee(e, t[0]), ee(e, t[1]), ee(e, t[2]), ee(e, t[3])];
        }
        function cr(t) {
          var e = t.left,
            n = t.top;
          return ur([t.pos1, t.pos2, t.pos3, t.pos4], [e, n]);
        }
        function lr(t, e) {
          t[e] && (t[e].unset(), (t[e] = null));
        }
        function fr(t, e, n) {
          var r = e.datas;
          r.datas || (r.datas = {});
          var o = gn(gn({}, n), {
            target: t.state.target,
            clientX: e.clientX,
            clientY: e.clientY,
            inputEvent: e.inputEvent,
            currentTarget: t,
            moveable: t,
            datas: r.datas,
          });
          return r.isStartEvent ? (r.lastEvent = o) : (r.isStartEvent = !0), o;
        }
        function pr(t, e, n) {
          var r = e.datas,
            o = 'isDrag' in n ? n.isDrag : e.isDrag;
          return (
            r.datas || (r.datas = {}),
            gn(
              gn(
                {
                  isDrag: o,
                },
                n
              ),
              {
                moveable: t,
                target: t.state.target,
                clientX: e.clientX,
                clientY: e.clientY,
                inputEvent: e.inputEvent,
                currentTarget: t,
                lastEvent: r.lastEvent,
                isDouble: e.isDouble,
                datas: r.datas,
              }
            )
          );
        }
        function dr(t, e, n, r) {
          return t.triggerEvent(e, n, r);
        }
        function hr(t, e) {
          return window.getComputedStyle(t, e);
        }
        function vr(t, e, n) {
          var r = {},
            o = {};
          return t.filter(function (t) {
            var i = t.name;
            if (
              r[i] ||
              !e.some(function (e) {
                return t[e];
              })
            )
              return !1;
            if (!n && t.ableGroup) {
              if (o[t.ableGroup]) return !1;
              o[t.ableGroup] = !0;
            }
            return (r[i] = !0), !0;
          });
        }
        function gr(t, e) {
          return t === e || (null == t && null == e);
        }
        function mr(t, e) {
          var n = [],
            r = [];
          return (
            t.forEach(function (o, i) {
              var a = e(o, i, t),
                s = r.indexOf(a),
                u = n[s] || [];
              -1 === s && (r.push(a), n.push(u)), u.push(o);
            }),
            n
          );
        }
        function yr(t) {
          return t.reduce(function (t, e) {
            return t.concat(e);
          }, []);
        }
        function br() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return (
            t.sort(function (t, e) {
              return Math.abs(e) - Math.abs(t);
            }),
            t[0]
          );
        }
        function xr(t, e, n) {
          return ie(Jt(t, n), Kt(e, n), n);
        }
        function wr(t, e) {
          var n,
            r = t.is3d ? 4 : 3;
          return (
            (n = xr(t.rootMatrix, [e.distX, e.distY], r)),
            (e.distX = n[0]),
            (e.distY = n[1]),
            e
          );
        }
        function Er(t, e, n, r, o) {
          return ne(Un(t, ee(n, e), o), r);
        }
        function Sr(t, e, n) {
          return n ? (t / e) * 100 + '%' : t + 'px';
        }
        function Or(t) {
          return Math.abs(t) <= Mn ? 0 : t;
        }
        function Ar(t, e) {
          return e.isRequest
            ? ('resizable' === e.requestAble || 'scalable' === e.requestAble) &&
                e.parentDirection
            : J(e.inputEvent.target, In('direction'));
        }
        function Cr(t) {
          var e = {};
          for (var n in t) e[t[n]] = n;
          return e;
        }
        function Mr(t, e) {
          return t
            ? M(t)
              ? e
                ? document.querySelector(t)
                : t
              : D(t)
              ? t()
              : 'current' in t
              ? t.current
              : t
            : null;
        }
        function Dr(t, e) {
          return t
            ? ((n = t) && A(n) && (C(n) || 'length' in n)
                ? [].slice.call(t)
                : [t]
              ).reduce(function (t, n) {
                return M(n) && e
                  ? mn(t, [].slice.call(document.querySelectorAll(n)))
                  : (t.push(Mr(n, e)), t);
              }, [])
            : [];
          var n;
        }
        function Pr(t, e) {
          var n = t.rootMatrix,
            r = t.is3d,
            o = Jt(n, r ? 4 : 3);
          return (
            r || (o = $t(o, 3, 4)),
            (o[12] = 0),
            (o[13] = 0),
            (o[14] = 0),
            (function (t, e) {
              var n = ie(t, [e[0], e[1] || 0, e[2] || 0, 1], 4),
                r = n[3] || 1;
              return [n[0] / r, n[1] / r, n[2] / r];
            })(o, e)
          );
        }
        var jr = yn('pinchable', {
          events: {
            onPinchStart: 'pinchStart',
            onPinch: 'pinch',
            onPinchEnd: 'pinchEnd',
            onPinchGroupStart: 'pinchGroupStart',
            onPinchGroup: 'pinchGroup',
            onPinchGroupEnd: 'pinchGroupEnd',
          },
          dragStart: function () {
            return !0;
          },
          pinchStart: function (t, e) {
            var n = e.datas,
              r = e.targets,
              o = e.angle,
              i = e.originalDatas,
              a = t.props,
              s = a.pinchable,
              u = a.ables;
            if (!s) return !1;
            var c = 'onPinch' + (r ? 'Group' : '') + 'Start',
              l = 'drag' + (r ? 'Group' : '') + 'ControlStart',
              f = (
                !0 === s
                  ? t.controlAbles
                  : u.filter(function (t) {
                      return s.indexOf(t.name) > -1;
                    })
              ).filter(function (t) {
                return t.canPinch && t[l];
              }),
              p = fr(t, e, {});
            r && (p.targets = r);
            var d = dr(t, c, p);
            (n.isPinch = !1 !== d), (n.ables = f);
            var h = n.isPinch;
            return (
              !!h &&
              (f.forEach(function (n) {
                if (((i[n.name] = i[n.name] || {}), n[l])) {
                  var r = gn(gn({}, e), {
                    datas: i[n.name],
                    parentRotate: o,
                    isPinch: !0,
                  });
                  n[l](t, r);
                }
              }),
              (t.state.snapRenderInfo = {
                request: e.isRequest,
                direction: [0, 0],
              }),
              h)
            );
          },
          pinch: function (t, e) {
            var n = e.datas,
              r = e.scale,
              o = e.distance,
              i = e.originalDatas,
              a = e.inputEvent,
              s = e.targets,
              u = e.angle;
            if (n.isPinch) {
              var c = o * (1 - 1 / r),
                l = fr(t, e, {});
              s && (l.targets = s), dr(t, 'onPinch' + (s ? 'Group' : ''), l);
              var f = n.ables,
                p = 'drag' + (s ? 'Group' : '') + 'Control';
              return (
                f.forEach(function (n) {
                  n[p] &&
                    n[p](
                      t,
                      gn(gn({}, e), {
                        datas: i[n.name],
                        inputEvent: a,
                        parentDistance: c,
                        parentRotate: u,
                        isPinch: !0,
                      })
                    );
                }),
                l
              );
            }
          },
          pinchEnd: function (t, e) {
            var n = e.datas,
              r = e.isPinch,
              o = e.inputEvent,
              i = e.targets,
              a = e.originalDatas;
            if (n.isPinch) {
              var s = 'onPinch' + (i ? 'Group' : '') + 'End',
                u = pr(t, e, {
                  isDrag: r,
                });
              i && (u.targets = i), dr(t, s, u);
              var c = n.ables,
                l = 'drag' + (i ? 'Group' : '') + 'ControlEnd';
              return (
                c.forEach(function (n) {
                  n[l] &&
                    n[l](
                      t,
                      gn(gn({}, e), {
                        isDrag: r,
                        datas: a[n.name],
                        inputEvent: o,
                        isPinch: !0,
                      })
                    );
                }),
                r
              );
            }
          },
          pinchGroupStart: function (t, e) {
            return this.pinchStart(
              t,
              gn(gn({}, e), {
                targets: t.props.targets,
              })
            );
          },
          pinchGroup: function (t, e) {
            return this.pinch(
              t,
              gn(gn({}, e), {
                targets: t.props.targets,
              })
            );
          },
          pinchGroupEnd: function (t, e) {
            return this.pinchEnd(
              t,
              gn(gn({}, e), {
                targets: t.props.targets,
              })
            );
          },
        });
        function Tr(t, e, n, r, o) {
          var i = e.gesto.move(n, t.inputEvent),
            a = i.originalDatas || i.datas,
            s = a.draggable || (a.draggable = {});
          return gn(gn({}, o ? wr(e, i) : i), {
            isDrag: !0,
            isPinch: !!r,
            parentEvent: !0,
            datas: s,
            originalDatas: t.originalDatas,
          });
        }
        var Rr = (function () {
          function t() {
            (this.prevX = 0),
              (this.prevY = 0),
              (this.startX = 0),
              (this.startY = 0),
              (this.isDrag = !1),
              (this.isFlag = !1),
              (this.datas = {
                draggable: {},
              });
          }
          var e = t.prototype;
          return (
            (e.dragStart = function (t, e) {
              (this.isDrag = !1), (this.isFlag = !1);
              var n = e.originalDatas;
              return (
                (this.datas = n),
                n.draggable || (n.draggable = {}),
                gn(gn({}, this.move(t, e.inputEvent)), {
                  type: 'dragstart',
                })
              );
            }),
            (e.drag = function (t, e) {
              return this.move([t[0] - this.prevX, t[1] - this.prevY], e);
            }),
            (e.move = function (t, e) {
              var n, r;
              return (
                this.isFlag
                  ? ((n = this.prevX + t[0]),
                    (r = this.prevY + t[1]),
                    (this.isDrag = !0))
                  : ((this.prevX = t[0]),
                    (this.prevY = t[1]),
                    (this.startX = t[0]),
                    (this.startY = t[1]),
                    (n = t[0]),
                    (r = t[1]),
                    (this.isFlag = !0)),
                (this.prevX = n),
                (this.prevY = r),
                {
                  type: 'drag',
                  clientX: n,
                  clientY: r,
                  inputEvent: e,
                  isDrag: this.isDrag,
                  distX: n - this.startX,
                  distY: r - this.startY,
                  deltaX: t[0],
                  deltaY: t[1],
                  datas: this.datas.draggable,
                  originalDatas: this.datas,
                  parentEvent: !0,
                  parentGesto: this,
                }
              );
            }),
            t
          );
        })();
        function kr(t, e, n) {
          var r = n.originalDatas;
          r.groupable = r.groupable || {};
          var o = r.groupable;
          o.childDatas = o.childDatas || [];
          var i = o.childDatas;
          return t.moveables.map(function (t, r) {
            return (
              (i[r] = i[r] || {}),
              (i[r][e] = i[r][e] || {}),
              gn(gn({}, n), {
                datas: i[r][e],
                originalDatas: i[r],
              })
            );
          });
        }
        function Br(t, e, n, r, o, i) {
          var a = !!n.match(/Start$/g),
            s = !!n.match(/End$/g),
            u = o.isPinch,
            c = o.datas,
            l = kr(t, e.name, o),
            f = t.moveables,
            p = l.map(function (t, o) {
              var l = f[o],
                p = t;
              a
                ? (p = new Rr().dragStart(r, t))
                : (l.state.gesto || (l.state.gesto = c.childGestos[o]),
                  (p = Tr(t, l.state, r, u, i)));
              var d = e[n](
                l,
                gn(gn({}, p), {
                  parentFlag: !0,
                })
              );
              return s && (l.state.gesto = null), d;
            });
          return (
            a &&
              (c.childGestos = f.map(function (t) {
                return t.state.gesto;
              })),
            p
          );
        }
        function Ir(t, e, n, r, o, i) {
          void 0 === o &&
            (o = function (t, e) {
              return e;
            });
          var a = !!n.match(/End$/g),
            s = kr(t, e.name, r),
            u = t.moveables,
            c = s.map(function (t, r) {
              var s,
                c = u[r];
              s = o(c, t);
              var l = e[n](
                c,
                gn(gn({}, s), {
                  parentFlag: !0,
                })
              );
              return l && i && i(c, t, l, r), a && (c.state.gesto = null), l;
            });
          return c;
        }
        function _r(t, e) {
          var n = e.clientX,
            r = e.clientY,
            o = e.datas,
            i = t.state,
            a = i.moveableClientRect,
            s = i.rootMatrix,
            u = i.is3d,
            c = i.pos1,
            l = ne(xr(s, [n - a.left, r - a.top], u ? 4 : 3), c),
            f = qr({
              datas: o,
              distX: l[0],
              distY: l[1],
            });
          return [f[0], f[1]];
        }
        function Fr(t, e) {
          var n = e.datas,
            r = t.state,
            o = r.allMatrix,
            i = r.beforeMatrix,
            a = r.is3d,
            s = r.left,
            u = r.top,
            c = r.origin,
            l = r.offsetMatrix,
            f = r.targetMatrix,
            p = r.transformOrigin,
            d = a ? 4 : 3;
          (n.is3d = a),
            (n.matrix = o),
            (n.targetMatrix = f),
            (n.beforeMatrix = i),
            (n.offsetMatrix = l),
            (n.transformOrigin = p),
            (n.inverseMatrix = Jt(o, d)),
            (n.inverseBeforeMatrix = Jt(i, d)),
            (n.absoluteOrigin = Kt(ee([s, u], c), d)),
            (n.startDragBeforeDist = ie(
              n.inverseBeforeMatrix,
              n.absoluteOrigin,
              d
            )),
            (n.startDragDist = ie(n.inverseMatrix, n.absoluteOrigin, d));
        }
        function Nr(t, e) {
          var n = t.datas,
            r = t.originalDatas.beforeRenderable,
            o = n.transformIndex,
            i = r.nextTransforms,
            a = r.nextTransformAppendedIndexes,
            s =
              -1 === o
                ? i.length
                : o +
                  a.filter(function (t) {
                    return t < o;
                  }).length,
            u = (function (t, e) {
              var n = t.slice(0, e < 0 ? void 0 : e),
                r = t.slice(0, e < 0 ? void 0 : e + 1),
                o = t[e] || '',
                i = e < 0 ? [] : t.slice(e),
                a = e < 0 ? [] : t.slice(e + 1),
                s = xe(n),
                u = xe(r),
                c = xe([o]),
                l = xe(i),
                f = xe(a),
                p = be(s),
                d = be(u),
                h = be(l),
                v = be(f),
                g = te(p, h, 4);
              return {
                transforms: t,
                beforeFunctionMatrix: p,
                beforeFunctionMatrix2: d,
                targetFunctionMatrix: be(c),
                afterFunctionMatrix: h,
                afterFunctionMatrix2: v,
                allFunctionMatrix: g,
                beforeFunctions: s,
                beforeFunctions2: u,
                targetFunction: c[0],
                afterFunctions: l,
                afterFunctions2: f,
                beforeFunctionTexts: n,
                beforeFunctionTexts2: r,
                targetFunctionText: o,
                afterFunctionTexts: i,
                afterFunctionTexts2: a,
              };
            })(i, s),
            c = u.targetFunction,
            l = 'rotate' === e ? 'rotateZ' : e;
          (n.beforeFunctionTexts = u.beforeFunctionTexts),
            (n.afterFunctionTexts = u.afterFunctionTexts),
            (n.beforeTransform = u.beforeFunctionMatrix),
            (n.beforeTransform2 = u.beforeFunctionMatrix2),
            (n.targetTansform = u.targetFunctionMatrix),
            (n.afterTransform = u.afterFunctionMatrix),
            (n.afterTransform2 = u.afterFunctionMatrix2),
            (n.targetAllTransform = u.allFunctionMatrix),
            c.functionName === l
              ? (n.afterFunctionTexts.splice(0, 1), (n.isAppendTransform = !1))
              : ((n.isAppendTransform = !0),
                (r.nextTransformAppendedIndexes = mn(a, [s])));
        }
        function zr(t, e, n) {
          return (
            t.beforeFunctionTexts.join(' ') +
            ' ' +
            (t.isAppendTransform ? n : e) +
            ' ' +
            t.afterFunctionTexts.join(' ')
          );
        }
        function Gr(t) {
          var e = t.datas,
            n = Wr({
              datas: e,
              distX: t.distX,
              distY: t.distY,
            }),
            r = Lr(
              e,
              (function (t, e) {
                for (var n = he(e), r = 0; r < e - 1; ++r)
                  n[e * (e - 1) + r] = t[r] || 0;
                return n;
              })([n[0], n[1]], 4)
            );
          return ie(r, Kt([0, 0, 0], 4), 4);
        }
        function Lr(t, e, n) {
          var r = t.beforeTransform,
            o = t.afterTransform,
            i = t.beforeTransform2,
            a = t.afterTransform2,
            s = t.targetAllTransform,
            u = n ? te(s, e, 4) : te(e, s, 4),
            c = te(Jt(n ? i : r, 4), u, 4);
          return te(c, Jt(n ? a : o, 4), 4);
        }
        function Wr(t) {
          var e = t.datas,
            n = t.distX,
            r = t.distY,
            o = e.inverseBeforeMatrix,
            i = e.is3d,
            a = e.startDragBeforeDist,
            s = i ? 4 : 3;
          return ne(ie(o, ee(e.absoluteOrigin, [n, r]), s), a);
        }
        function qr(t, e) {
          var n = t.datas,
            r = t.distX,
            o = t.distY,
            i = n.inverseBeforeMatrix,
            a = n.inverseMatrix,
            s = n.is3d,
            u = n.startDragBeforeDist,
            c = n.startDragDist,
            l = s ? 4 : 3;
          return ne(ie(e ? i : a, ee(n.absoluteOrigin, [r, o]), l), e ? u : c);
        }
        function Hr(t) {
          var e = [];
          return (
            t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)),
            t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)),
            e
          );
        }
        function Yr(t, e) {
          return Hr(e).map(function (e) {
            return t[e];
          });
        }
        function Vr(t, e) {
          var n = Yr(t, e);
          return [
            H(
              n.map(function (t) {
                return t[0];
              })
            ),
            H(
              n.map(function (t) {
                return t[1];
              })
            ),
          ];
        }
        function Xr(t, e, n, r) {
          return te(t, _n(e, r, n), r);
        }
        function Ur(t) {
          var e = t.originalDatas.beforeRenderable;
          return {
            setTransform: function (n, r) {
              void 0 === r && (r = -1),
                (e.startTransforms = C(n) ? n : R(n)),
                Jr(t, r);
            },
            setTransformIndex: function (e) {
              Jr(t, e);
            },
          };
        }
        function Qr(t, e) {
          Jr(
            t,
            N(t.originalDatas.beforeRenderable.startTransforms, function (t) {
              return 0 === t.indexOf(e + '(');
            })
          );
        }
        function Jr(t, e) {
          var n = t.originalDatas.beforeRenderable,
            r = t.datas;
          if (((r.transformIndex = e), -1 !== e)) {
            var o = n.startTransforms[e];
            if (o) {
              var i = xe([o]);
              r.startValue = i[0].functionValue;
            }
          }
        }
        function Kr(t, e) {
          t.originalDatas.beforeRenderable.nextTransforms = R(e);
        }
        function $r(t, e, n, r, o) {
          return (
            Kr(o, e),
            {
              transform: e,
              drag: ai.drag(t, Tr(o, t.state, n, r, !1)),
            }
          );
        }
        function Zr(t, e, n, r, o) {
          var i = t.state,
            a = i.left,
            s = i.top,
            u = t.props.groupable,
            c = (function (t, e, n) {
              var r = t.transformOrigin,
                o = t.offsetMatrix,
                i = t.is3d,
                a = e.beforeTransform,
                s = e.afterTransform,
                u = i ? 4 : 3;
              return Xr(o, $t(te(te(a, ye([n]), 4), s, 4), 4, u), r, u);
            })(t.state, o, e),
            l = u ? a : 0,
            f = u ? s : 0,
            p = ne(r, eo(t, n, c));
          return ne(p, [l, f]);
        }
        function to(t) {
          var e = t.state,
            n = e.width,
            r = e.height,
            o = e.transformOrigin;
          return [o[0] / (n / 2) - 1, o[1] / (r / 2) - 1];
        }
        function eo(t, e, n) {
          void 0 === n && (n = t.state.allMatrix);
          var r = t.state,
            o = r.width,
            i = r.height,
            a = r.is3d ? 4 : 3;
          return Un(n, [(o / 2) * (1 + e[0]), (i / 2) * (1 + e[1])], a);
        }
        function no(t, e, n, r, o, i) {
          var a = t.props.groupable,
            s = t.state,
            u = s.transformOrigin,
            c = s.targetMatrix,
            l = s.offsetMatrix,
            f = s.is3d,
            p = s.width,
            d = s.height,
            h = s.left,
            v = s.top,
            g = f ? 4 : 3,
            m = (function (t, e, n, r, o, i) {
              return (
                void 0 === r && (r = e),
                void 0 === o && (o = n),
                void 0 === i && (i = [0, 0]),
                t
                  ? t.map(function (t, a) {
                      var s = I(t),
                        u = s.value,
                        c = s.unit,
                        l = a ? o : r,
                        f = a ? n : e;
                      return '%' === t || isNaN(u)
                        ? f * (l ? i[a] / l : 0)
                        : '%' !== c
                        ? u
                        : (f * u) / 100;
                    })
                  : i
              );
            })(i, e, n, p, d, u),
            y = a ? h : 0,
            b = a ? v : 0,
            x = (function (t, e, n, r, o, i) {
              var a = Vr(Qn(e, n, r, o), i);
              return [t[0] - a[0], t[1] - a[1]];
            })(o, Xr(l, c, m, g), e, n, g, r);
          return ne(x, [y, b]);
        }
        function ro(t, e) {
          return Vr(cr(t.state), e);
        }
        function oo(t, e, n) {
          var r = Un(t, [e.clientLeft, e.clientTop], n);
          return [e.left + r[0], e.top + r[1]];
        }
        function io(t, e, n, r, o, i) {
          var a = o[0],
            s = o[1],
            u = i[0],
            c = i[1],
            l = [],
            f = r ? 0 : 1,
            p = 'vertical' === e ? 'horizontal' : 'vertical',
            d = mr(
              t.filter(function (t) {
                return t.type === e;
              }),
              function (t) {
                return t.element;
              }
            )
              .map(function (t) {
                return t[0];
              })
              .filter(function (t) {
                var e = t.pos,
                  n = t.sizes;
                return e[f] <= c && u <= e[f] + n[f];
              });
          return (
            d.forEach(function (t) {
              var e = t.pos[r],
                o = e + t.sizes[r];
              d.forEach(function (t) {
                var i = t.pos,
                  u = t.sizes,
                  c = t.element,
                  f = t.className,
                  h = i[r],
                  v = h + u[r],
                  g = 0,
                  m = 0,
                  y = !0;
                if (o <= h) a < (g = v - (m = o - h)) - n && (y = !1);
                else {
                  if (!(v <= e)) return;
                  s > (g = h - (m = e - v)) + n && (y = !1);
                }
                if (
                  (y &&
                    l.push({
                      pos: 'vertical' === p ? [g, i[1]] : [i[0], g],
                      element: c,
                      sizes: u,
                      size: 0,
                      type: p,
                      gap: m,
                      className: f,
                      gapGuidelines: d,
                    }),
                  o <= a && s <= h)
                ) {
                  var b = (h + o - (s - a)) / 2;
                  U(a - (b - n), 0.1) >= 0 &&
                    l.push({
                      pos: 'vertical' === p ? [b, i[1]] : [i[0], b],
                      className: f,
                      element: c,
                      sizes: u,
                      size: 0,
                      type: p,
                      gap: o - a,
                      gapGuidelines: d,
                    });
                }
              });
            }),
            l
          );
        }
        function ao(t, e, n, r, o, i, a) {
          void 0 === o && (o = 0),
            void 0 === i && (i = 0),
            void 0 === a &&
              (a = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              });
          var s = [],
            u = a.left,
            c = a.top,
            l = a.bottom,
            f = n + a.right - u,
            p = r + l - c;
          return (
            t &&
              t.forEach(function (t) {
                s.push({
                  type: 'horizontal',
                  pos: [u, U(t - i + c, 0.1)],
                  size: f,
                });
              }),
            e &&
              e.forEach(function (t) {
                s.push({
                  type: 'vertical',
                  pos: [U(t - o + u, 0.1), c],
                  size: p,
                });
              }),
            s
          );
        }
        function so(t, e) {
          var n = [];
          if (!e.length) return n;
          var r = t.state,
            o = t.props.snapCenter,
            i = r.containerClientRect,
            a = r.targetClientRect,
            s = a.top,
            u = a.left,
            c = r.rootMatrix,
            l = r.is3d ? 4 : 3,
            f = oo(c, i, l),
            p = f[0],
            d = f[1],
            h = Ae(cr(r)),
            v = ne([h.minX, h.minY], xr(c, [u - p, s - d], l)).map(function (
              t
            ) {
              return (e = t), Math.round(e % 1 == -0.5 ? e - 1 : e);
              var e;
            }),
            g = v[0],
            m = v[1];
          return (
            e.forEach(function (t) {
              var e = t.element,
                r = t.top,
                i = t.left,
                a = t.right,
                s = t.bottom,
                u = t.className,
                f = e.getBoundingClientRect(),
                h = f.left - p,
                v = f.top - d,
                y = v + f.height,
                b = h + f.width,
                x = xr(c, [h, v], l),
                w = x[0],
                E = x[1],
                S = xr(c, [b, y], l),
                O = S[0],
                A = S[1],
                C = O - w,
                M = A - E,
                D = [C, M];
              !1 !== r &&
                n.push({
                  type: 'vertical',
                  element: e,
                  pos: [U(w + g, 0.1), E],
                  size: M,
                  sizes: D,
                  className: u,
                }),
                !1 !== s &&
                  n.push({
                    type: 'vertical',
                    element: e,
                    pos: [U(O + g, 0.1), E],
                    size: M,
                    sizes: D,
                    className: u,
                  }),
                !1 !== i &&
                  n.push({
                    type: 'horizontal',
                    element: e,
                    pos: [w, U(E + m, 0.1)],
                    size: C,
                    sizes: D,
                    className: u,
                  }),
                !1 !== a &&
                  n.push({
                    type: 'horizontal',
                    element: e,
                    pos: [w, U(A + m, 0.1)],
                    size: C,
                    sizes: D,
                    className: u,
                  }),
                o &&
                  (n.push({
                    type: 'vertical',
                    element: e,
                    pos: [U((w + O) / 2 + g, 0.1), E],
                    size: M,
                    sizes: D,
                    center: !0,
                    className: u,
                  }),
                  n.push({
                    type: 'horizontal',
                    element: e,
                    pos: [w, U((E + A) / 2 + m, 0.1)],
                    size: C,
                    sizes: D,
                    center: !0,
                    className: u,
                  }));
            }),
            n
          );
        }
        function uo(t, e, n) {
          void 0 === n && (n = []);
          var r = [],
            o = t.state;
          if (e && o.guidelines && o.guidelines.length) return r;
          var i = t.props.elementGuidelines,
            a = void 0 === i ? [] : i;
          if (!a.length) return r;
          var s = o.elementGuidelineValues || [],
            u = a
              .map(function (t) {
                return A(t) && 'element' in t
                  ? t
                  : {
                      element: Mr(t, !0),
                    };
              })
              .filter(function (t) {
                return t.element;
              });
          o.elementGuidelineValues = u;
          var c,
            l,
            f =
              ((c = s.map(function (t) {
                return t.element;
              })),
              (l = u.map(function (t) {
                return t.element;
              })),
              d(c, l, Ie)),
            p = f.added,
            h = f.removed.map(function (t) {
              return s[t].element;
            }),
            v = so(
              t,
              p
                .map(function (t) {
                  return u[t];
                })
                .filter(function (t) {
                  return (t.refresh && e) || (!t.refresh && !e);
                })
            );
          return mn(
            n.filter(function (t) {
              return -1 === h.indexOf(t.element);
            }),
            v
          );
        }
        function co(t) {
          var e = t.state,
            n = e.snapOffset,
            r = e.staticGuidelines,
            o = e.containerClientRect,
            i = o.overflow,
            a = o.scrollHeight,
            s = o.scrollWidth,
            u = o.clientHeight,
            c = o.clientWidth,
            l = o.clientLeft,
            f = o.clientTop,
            p = t.props,
            d = p.snapHorizontal,
            h = void 0 === d || d,
            v = p.snapVertical,
            g = void 0 === v || v,
            m = p.snapGap,
            y = void 0 === m || m,
            b = p.verticalGuidelines,
            x = p.horizontalGuidelines,
            w = p.snapThreshold,
            E = void 0 === w ? 5 : w,
            S = p.snapGridWidth,
            O = void 0 === S ? 0 : S,
            A = p.snapGridHeight,
            C = void 0 === A ? 0 : A,
            M = mn(r, uo(t, !0));
          if (y) {
            var D = Jn(cr(t.state)),
              P = D.top,
              j = D.left,
              T = D.bottom,
              R = D.right,
              k = r.filter(function (t) {
                return t.element;
              });
            M.push.apply(
              M,
              mn(
                io(k, 'horizontal', E, 0, [j, R], [P, T]),
                io(k, 'vertical', E, 1, [P, T], [j, R])
              )
            );
          }
          return (
            M.push.apply(
              M,
              (function (t, e, n, r, o, i) {
                void 0 === o && (o = 0);
                void 0 === i && (i = 0);
                var a = [];
                if (e)
                  for (var s = 0; s <= r; s += e)
                    a.push({
                      type: 'horizontal',
                      pos: [0, U(s - i, 0.1)],
                      size: n,
                      hide: !0,
                    });
                if (t)
                  for (s = 0; s <= n; s += t)
                    a.push({
                      type: 'vertical',
                      pos: [U(s - o, 0.1), 0],
                      size: r,
                      hide: !0,
                    });
                return a;
              })(O, C, i ? s : c, i ? a : u, l, f)
            ),
            M.push.apply(
              M,
              ao((h && x) || !1, (g && b) || !1, i ? s : c, i ? a : u, l, f, n)
            ),
            M
          );
        }
        function lo(t, e, n, r, o) {
          var i = t.props,
            a = i.snapElement,
            s = void 0 === a || a,
            u = (function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              for (var n = t.length - 1, r = 0; r < n; ++r) {
                var o = t[r];
                if (!O(o)) return o;
              }
              return t[n];
            })(o, i.snapThreshold, 5);
          return fo(t.state.guidelines, e, n, {
            snapThreshold: u,
            snapCenter: r,
            snapElement: s,
          });
        }
        function fo(t, e, n, r) {
          return {
            vertical: vo(t, 'vertical', e, r),
            horizontal: vo(t, 'horizontal', n, r),
          };
        }
        function po(t, e, n, r) {
          var o = t.props.snapCenter && n,
            i = ['left', 'right'],
            a = ['top', 'bottom'];
          return (
            o && (i.push('center'), a.push('middle')),
            (i = i.filter(function (t) {
              return t in e;
            })),
            (a = a.filter(function (t) {
              return t in e;
            })),
            lo(
              t,
              i.map(function (t) {
                return e[t];
              }),
              a.map(function (t) {
                return e[t];
              }),
              o,
              r
            )
          );
        }
        function ho(t) {
          var e = t.isSnap;
          if (!e)
            return {
              isSnap: !1,
              offset: 0,
              dist: -1,
              pos: 0,
              guideline: null,
            };
          var n = t.posInfos[0],
            r = n.guidelineInfos[0],
            o = r.offset,
            i = r.dist,
            a = r.guideline;
          return {
            isSnap: e,
            offset: o,
            dist: i,
            pos: n.pos,
            guideline: a,
          };
        }
        function vo(t, e, n, r) {
          var o = void 0 === r ? {} : r,
            i = o.snapThreshold,
            a = void 0 === i ? 5 : i,
            s = o.snapElement,
            u = o.snapCenter;
          if (!t || !t.length)
            return {
              isSnap: !1,
              index: -1,
              posInfos: [],
            };
          var c = 'vertical' === e ? 0 : 1,
            l = n
              .map(function (n, r) {
                var o = t
                  .map(function (t) {
                    var e = t.pos,
                      r = n - e[c];
                    return {
                      offset: r,
                      dist: Math.abs(r),
                      guideline: t,
                    };
                  })
                  .filter(function (t) {
                    var n = t.guideline,
                      r = t.dist,
                      o = n.type,
                      i = n.center,
                      c = n.element;
                    return !((!s && c) || (!u && i) || o !== e || r > a);
                  })
                  .sort(function (t, e) {
                    return t.dist - e.dist;
                  });
                return {
                  pos: n,
                  index: r,
                  guidelineInfos: o,
                };
              })
              .filter(function (t) {
                return t.guidelineInfos.length > 0;
              })
              .sort(function (t, e) {
                return t.guidelineInfos[0].dist - e.guidelineInfos[0].dist;
              }),
            f = l.length > 0;
          return {
            isSnap: f,
            index: f ? l[0].index : -1,
            posInfos: l,
          };
        }
        function go(t, e) {
          var n = Math.abs(t.offset),
            r = Math.abs(e.offset);
          return t.isBound && e.isBound
            ? r - n
            : t.isBound
            ? -1
            : e.isBound
            ? 1
            : t.isSnap && e.isSnap
            ? r - n
            : t.isSnap
            ? -1
            : e.isSnap || n < Mn
            ? 1
            : r < Mn
            ? -1
            : n - r;
        }
        function mo(t, e) {
          return t.slice().sort(function (t, n) {
            var r = t.sign[e],
              o = n.sign[e],
              i = t.offset[e],
              a = n.offset[e];
            return r
              ? o
                ? go(
                    {
                      isBound: t.isBound,
                      isSnap: t.isSnap,
                      offset: i,
                    },
                    {
                      isBound: n.isBound,
                      isSnap: n.isSnap,
                      offset: a,
                    }
                  )
                : -1
              : 1;
          })[0];
        }
        function yo(t, e) {
          var n = H([e[0][0], e[1][0]]),
            r = H([e[0][1], e[1][1]]);
          return {
            vertical: n <= t[0],
            horizontal: r <= t[1],
          };
        }
        function bo(t, e) {
          var n,
            r,
            o = e[0],
            i = e[1],
            a = i[0] - o[0],
            s = i[1] - o[1];
          if ((Math.abs(a) < Mn && (a = 0), Math.abs(s) < Mn && (s = 0), a))
            if (s) {
              (n = (s / a) * (t[0] - o[0]) + o[1]), (r = t[1]);
            } else (n = o[1]), (r = t[1]);
          else (n = o[0]), (r = t[0]);
          return n - r;
        }
        function xo(t, e, n) {
          void 0 === n && (n = Mn);
          var r = bo(t[0], e) <= 0;
          return t.slice(1).every(function (t) {
            var o = bo(t, e);
            return o <= 0 === r || Math.abs(o) <= n;
          });
        }
        function wo(t, e, n, r, o) {
          return (
            void 0 === o && (o = 0),
            (r && e - o <= t) || (!r && t <= n + o)
              ? {
                  isBound: !0,
                  offset: r ? e - t : n - t,
                }
              : {
                  isBound: !1,
                  offset: 0,
                }
          );
        }
        function Eo(t, e, n, r, o) {
          var i = t[0],
            a = t[1],
            s = e[0],
            u = e[1],
            c = Or(a[1] - i[1]),
            l = Or(a[0] - i[0]),
            f = Or(u[1] - s[1]);
          if (!Or(u[0] - s[0])) {
            if (o && !c)
              return {
                isBound: !1,
                offset: 0,
              };
            if (l) return wo((c / l) * (s[0] - i[0]) + i[1], s[1], u[1], n, r);
            var p = s[0] - i[0];
            return {
              isBound: (d = Math.abs(p) <= (r || 0)),
              offset: d ? p : 0,
            };
          }
          if (!f) {
            if (o && !l)
              return {
                isBound: !1,
                offset: 0,
              };
            if (c) return wo((s[1] - i[1]) / (c / l) + i[0], s[0], u[0], n, r);
            var d;
            p = s[1] - i[1];
            return {
              isBound: (d = Math.abs(p) <= (r || 0)),
              offset: d ? p : 0,
            };
          }
          return {
            isBound: !1,
            offset: 0,
          };
        }
        function So(t, e, n, r) {
          return e.map(function (e) {
            var o = e[0],
              i = e[1],
              a = e[2],
              s = (function (t, e, n) {
                var r = t.props.innerBounds;
                if (!r)
                  return {
                    isAllBound: !1,
                    isBound: !1,
                    isVerticalBound: !1,
                    isHorizontalBound: !1,
                    offset: [0, 0],
                  };
                var o = r.left,
                  i = r.top,
                  a = r.width,
                  s = r.height,
                  u = [
                    [o, i],
                    [o, i + s],
                  ],
                  c = [
                    [o, i],
                    [o + a, i],
                  ],
                  l = [
                    [o + a, i],
                    [o + a, i + s],
                  ],
                  f = [
                    [o, i + s],
                    [o + a, i + s],
                  ],
                  p = yo(n, e),
                  d = p.horizontal,
                  h = p.vertical;
                if (xo([n, [o, i], [o + a, i], [o, i + s], [o + a, i + s]], e))
                  return {
                    isAllBound: !1,
                    isBound: !1,
                    isVerticalBound: !1,
                    isHorizontalBound: !1,
                    offset: [0, 0],
                  };
                var v = Eo(e, c, h),
                  g = Eo(e, f, h),
                  m = Eo(e, u, d),
                  y = Eo(e, l, d),
                  b = v.isBound && g.isBound,
                  x = v.isBound || g.isBound,
                  w = m.isBound && y.isBound,
                  E = m.isBound || y.isBound,
                  S = br(v.offset, g.offset),
                  O = br(m.offset, y.offset),
                  A = [0, 0],
                  C = !1,
                  M = !1;
                return (
                  Math.abs(O) < Math.abs(S)
                    ? ((A = [S, 0]), (C = x), (M = b))
                    : ((A = [0, O]), (C = E), (M = w)),
                  {
                    isAllBound: M,
                    isVerticalBound: x,
                    isHorizontalBound: E,
                    isBound: C,
                    offset: A,
                  }
                );
              })(t, [i, a], n),
              u = s.isBound,
              c = s.offset,
              l = s.isVerticalBound,
              f = s.isHorizontalBound,
              p = qr({
                datas: r,
                distX: c[0],
                distY: c[1],
              }).map(function (t, e) {
                return t * (o[e] ? 2 / o[e] : 0);
              });
            return {
              sign: o,
              isBound: u,
              isVerticalBound: l,
              isHorizontalBound: f,
              isSnap: !1,
              offset: p,
            };
          });
        }
        function Oo(t, e, n) {
          var r,
            o = Ao(e, [0, 0], !1).map(function (t) {
              var e = t[0],
                n = t[1],
                r = t[2];
              return [
                e.map(function (t) {
                  return 2 * Math.abs(t);
                }),
                n,
                r,
              ];
            }),
            i = So(t, o, Vr(e, [0, 0]), n),
            a = mo(i, 0),
            s = mo(i, 1),
            u = 0,
            c = 0,
            l = a.isVerticalBound || s.isVerticalBound,
            f = a.isHorizontalBound || s.isHorizontalBound;
          return (
            (l || f) &&
              ((r = (function (t, e) {
                var n = t.datas,
                  r = t.distX,
                  o = t.distY,
                  i = n.beforeMatrix,
                  a = n.matrix,
                  s = n.is3d,
                  u = n.startDragBeforeDist,
                  c = n.startDragDist,
                  l = n.absoluteOrigin,
                  f = s ? 4 : 3;
                return ne(ie(e ? i : a, ee(e ? u : c, [r, o]), f), l);
              })({
                datas: n,
                distX: -a.offset[0],
                distY: -s.offset[1],
              })),
              (u = r[0]),
              (c = r[1])),
            {
              vertical: {
                isBound: l,
                offset: u,
              },
              horizontal: {
                isBound: f,
                offset: c,
              },
            }
          );
        }
        function Ao(t, e, n) {
          return (function (t, e) {
            var n = [],
              r = t[0],
              o = t[1];
            return (
              r && o
                ? n.push([[0, 2 * o], t, [-r, o]], [[2 * r, 0], t, [r, -o]])
                : r
                ? (n.push([
                    [2 * r, 0],
                    [r, 1],
                    [r, -1],
                  ]),
                  e &&
                    n.push(
                      [
                        [0, -1],
                        [r, -1],
                        [-r, -1],
                      ],
                      [
                        [0, 1],
                        [r, 1],
                        [-r, 1],
                      ]
                    ))
                : o
                ? (n.push([
                    [0, 2 * o],
                    [1, o],
                    [-1, o],
                  ]),
                  e &&
                    n.push(
                      [
                        [-1, 0],
                        [-1, o],
                        [-1, -o],
                      ],
                      [
                        [1, 0],
                        [1, o],
                        [1, -o],
                      ]
                    ))
                : n.push(
                    [
                      [-1, 0],
                      [-1, -1],
                      [-1, 1],
                    ],
                    [
                      [1, 0],
                      [1, -1],
                      [1, 1],
                    ],
                    [
                      [0, -1],
                      [-1, -1],
                      [1, -1],
                    ],
                    [
                      [0, 1],
                      [-1, 1],
                      [1, 1],
                    ]
                  ),
              n
            );
          })(e, n).map(function (e) {
            var n = e[0],
              r = e[1],
              o = e[2];
            return [n, Vr(t, r), Vr(t, o)];
          });
        }
        function Co(t, e, n, r) {
          var o = r
              ? t.map(function (t) {
                  return le(t, r);
                })
              : t,
            i = mn([n], e);
          return [
            [o[0], o[1]],
            [o[1], o[3]],
            [o[3], o[2]],
            [o[2], o[0]],
          ].some(function (t) {
            return !xo(i, t);
          });
        }
        function Mo(t, e, n, r, o) {
          var i = t.props.innerBounds,
            a = (o * Math.PI) / 180;
          if (!i) return [];
          var s = i.left,
            u = i.top,
            c = i.width,
            l = i.height,
            f = s - r[0],
            p = s + c - r[0],
            d = u - r[1],
            h = u + l - r[1],
            v = [
              [f, d],
              [p, d],
              [f, h],
              [p, h],
            ],
            g = Vr(n, [0, 0]);
          if (!Co(n, v, g, 0)) return [];
          var m = [],
            y = v.map(function (t) {
              return [Zn(t), Y([0, 0], t)];
            });
          return (
            [
              [n[0], n[1]],
              [n[1], n[3]],
              [n[3], n[2]],
              [n[2], n[0]],
            ].forEach(function (t) {
              var n = Y(
                  [0, 0],
                  (function (t) {
                    var e = t[0],
                      n = t[1],
                      r = n[0] - e[0],
                      o = n[1] - e[1];
                    if (!r) return [e[0], 0];
                    if (!o) return [0, e[1]];
                    var i = o / r,
                      a = -i * e[0] + e[1];
                    return [-a / (i + 1 / i), a / (i * i + 1)];
                  })(t)
                ),
                r = (function (t) {
                  var e = t[0],
                    n = t[1],
                    r = n[0] - e[0],
                    o = n[1] - e[1];
                  if (!r) return Math.abs(e[0]);
                  if (!o) return Math.abs(e[1]);
                  var i = o / r;
                  return Math.abs(
                    (-i * e[0] + e[1]) / Math.sqrt(Math.pow(i, 2) + 1)
                  );
                })(t);
              m.push.apply(
                m,
                y
                  .filter(function (t) {
                    var e = t[0];
                    return e && r <= e;
                  })
                  .map(function (t) {
                    var e = t[0],
                      o = t[1],
                      i = Math.acos(e ? r / e : 0);
                    return [a + (o + i) - n, a + (o - i) - n];
                  })
                  .reduce(function (t, e) {
                    return t.push.apply(t, e), t;
                  }, [])
                  .filter(function (t) {
                    return !Co(e, v, g, t);
                  })
                  .map(function (t) {
                    return U((180 * t) / Math.PI, Mn);
                  })
              );
            }),
            m
          );
        }
        function Do(t, e, n) {
          var r = t || {},
            o = r.position,
            i = void 0 === o ? 'client' : o,
            a = r.left,
            s = void 0 === a ? -1 / 0 : a,
            u = r.top,
            c = void 0 === u ? -1 / 0 : u,
            l = r.right,
            f = void 0 === l ? 1 / 0 : l,
            p = r.bottom,
            d = {
              position: i,
              left: s,
              top: c,
              right: f,
              bottom: void 0 === p ? 1 / 0 : p,
            };
          return {
            vertical: jo(d, e, !0),
            horizontal: jo(d, n, !1),
          };
        }
        function Po(t, e) {
          var n = t.state,
            r = n.containerClientRect,
            o = r.clientHeight,
            i = r.clientWidth,
            a = r.clientLeft,
            s = r.clientTop,
            u = n.snapOffset,
            c = u.left,
            l = u.top,
            f = u.right,
            p = u.bottom,
            d = e || t.props.bounds || {},
            h = 'css' === (d.position || 'client'),
            v = d.left,
            g = void 0 === v ? -1 / 0 : v,
            m = d.top,
            y = void 0 === m ? -1 / 0 : m,
            b = d.right,
            x = void 0 === b ? (h ? -1 / 0 : 1 / 0) : b,
            w = d.bottom,
            E = void 0 === w ? (h ? -1 / 0 : 1 / 0) : w;
          return (
            h && ((x = i + f - c - x), (E = o + p - l - E)),
            {
              left: g + c - a,
              right: x + c - a,
              top: y + l - s,
              bottom: E + l - s,
            }
          );
        }
        function jo(t, e, n) {
          var r = t[n ? 'left' : 'top'],
            o = t[n ? 'right' : 'bottom'],
            i = Math.min.apply(Math, e),
            a = Math.max.apply(Math, e),
            s = [];
          return (
            r + 1 > i &&
              s.push({
                isBound: !0,
                offset: i - r,
                pos: r,
              }),
            o - 1 < a &&
              s.push({
                isBound: !0,
                offset: a - o,
                pos: o,
              }),
            s.length ||
              s.push({
                isBound: !1,
                offset: 0,
                pos: 0,
              }),
            s.sort(function (t, e) {
              return Math.abs(e.offset) - Math.abs(t.offset);
            })
          );
        }
        function To(t, e, n) {
          return (
            n
              ? t.map(function (t) {
                  return le(t, n);
                })
              : t
          ).some(function (t) {
            return (
              (t[0] < e.left && Math.abs(t[0] - e.left) > 0.1) ||
              (t[0] > e.right && Math.abs(t[0] - e.right) > 0.1) ||
              (t[1] < e.top && Math.abs(t[1] - e.top) > 0.1) ||
              (t[1] > e.bottom && Math.abs(t[1] - e.bottom) > 0.1)
            );
          });
        }
        function Ro(t, e, n, r, o) {
          if (!t.props.bounds) return [];
          var i = (o * Math.PI) / 180,
            a = Po(t),
            s = a.left,
            u = a.top,
            c = a.right,
            l = a.bottom,
            f = s - r[0],
            p = c - r[0],
            d = u - r[1],
            h = l - r[1],
            v = {
              left: f,
              top: d,
              right: p,
              bottom: h,
            };
          if (!To(n, v, 0)) return [];
          var g = [];
          return (
            [
              [f, 0],
              [p, 0],
              [d, 1],
              [h, 1],
            ].forEach(function (t) {
              var r = t[0],
                o = t[1];
              n.forEach(function (t) {
                var n = Y([0, 0], t);
                g.push.apply(
                  g,
                  (function (t, e, n) {
                    var r = Zn(t),
                      o = Math.sqrt(r * r - e * e) || 0;
                    return [o, -o]
                      .sort(function (e, r) {
                        return (
                          Math.abs(e - t[n ? 0 : 1]) -
                          Math.abs(r - t[n ? 0 : 1])
                        );
                      })
                      .map(function (t) {
                        return Y([0, 0], n ? [t, e] : [e, t]);
                      });
                  })(t, r, o)
                    .map(function (t) {
                      return i + t - n;
                    })
                    .filter(function (t) {
                      return !To(e, v, t);
                    })
                    .map(function (t) {
                      return U((180 * t) / Math.PI, Mn);
                    })
                );
              });
            }),
            g
          );
        }
        var ko = {
          horizontal: ['left', 'top', 'width', 'Y', 'X'],
          vertical: ['top', 'left', 'height', 'X', 'Y'],
        };
        function Bo(t, e, n, r) {
          var o = t - n,
            i = o < 0 ? o + e : r;
          return {
            size: (o < 0 ? 0 : o) - i,
            pos: i,
          };
        }
        function Io(t, e) {
          return (function (t, e) {
            var n,
              r = t.direction,
              o = t.classNames,
              i = t.size,
              a = t.pos,
              s = t.zoom,
              u = t.key,
              c = 'horizontal' === r,
              l = c ? 'Y' : 'X';
            return e.createElement('div', {
              key: u,
              className: o.join(' '),
              style:
                ((n = {}),
                (n[c ? 'width' : 'height'] = '' + i),
                (n.transform =
                  'translate(' +
                  a[0] +
                  ', ' +
                  a[1] +
                  ') translate' +
                  l +
                  '(-50%) scale' +
                  l +
                  '(' +
                  s +
                  ')'),
                n),
            });
          })(
            gn(gn({}, t), {
              classNames: mn(
                [In('line', 'guideline', t.direction)],
                t.classNames
              ).filter(function (t) {
                return t;
              }),
              size: t.size || t.sizeValue + 'px',
              pos:
                t.pos ||
                t.posValue.map(function (t) {
                  return U(t, 0.1) + 'px';
                }),
            }),
            e
          );
        }
        function _o(t, e, n, r, o, i, a, s, u, c, l, f) {
          var p = t.props,
            d = p.zoom,
            h = p.isDisplaySnapDigit,
            v = void 0 === h || h,
            g = ko[e],
            m = g[0],
            y = g[1],
            b = g[2],
            x = g[4];
          return yr(
            n.map(function (t, n) {
              var p = !0;
              return t.map(function (t, h) {
                var g,
                  w = t.pos,
                  E = t.size,
                  S = Bo(w[c], E, o, i),
                  O = S.pos,
                  A = S.size;
                if (A < s) return null;
                var C = p;
                p = !1;
                var M = v && C ? parseFloat(A.toFixed(u)) : 0;
                return f.createElement(
                  'div',
                  {
                    key: e + 'LinkGuideline' + n + '-' + h,
                    className: In('guideline-group', e),
                    style:
                      ((g = {}),
                      (g[m] = r + O + 'px'),
                      (g[y] = -a + w[c ? 0 : 1] + 'px'),
                      (g[b] = A + 'px'),
                      g),
                  },
                  Io(
                    {
                      direction: e,
                      classNames: [In('dashed')],
                      size: '100%',
                      posValue: [0, 0],
                      sizeValue: A,
                      zoom: d,
                    },
                    f
                  ),
                  f.createElement(
                    'div',
                    {
                      className: In('size-value'),
                      style: {
                        transform: 'translate' + x + '(-50%) scale(' + d + ')',
                      },
                    },
                    M > 0 ? l(M) : ''
                  )
                );
              });
            })
          );
        }
        function Fo(t, e, n, r, o, i, a, s) {
          var u = t.props.zoom;
          return n.map(function (t, n) {
            var c = t.type,
              l = t.pos,
              f = [0, 0];
            return (
              (f[a] = r),
              (f[a ? 0 : 1] = -o + l),
              Io(
                {
                  key: e + 'TargetGuideline' + n,
                  classNames: [In('target', 'bold', c)],
                  posValue: f,
                  sizeValue: i,
                  zoom: u,
                  direction: e,
                },
                s
              )
            );
          });
        }
        function No(t, e, n, r, o, i) {
          var a = t.props.isDisplayInnerSnapDigit,
            s = n ? 0 : 1,
            u = r[n],
            c = i[n],
            l = [],
            f = e.filter(function (t) {
              var e = t.element,
                o = t.pos,
                i = t.size;
              if (a && e && o[n] < u && u + c < o[n] + i) {
                var f = o[n] - u,
                  p = o[s] - r[s];
                return (
                  l.push(
                    gn(gn({}, t), {
                      inner: !0,
                      gap: f,
                      renderPos: n ? [p, f] : [f, p],
                    })
                  ),
                  l.push(
                    gn(gn({}, t), {
                      inner: !0,
                      gap: o[n] + i - u - c,
                      renderPos: n ? [p, c] : [c, p],
                    })
                  ),
                  !1
                );
              }
              return !0;
            }),
            p = (function (t, e, n, r) {
              var o = [],
                i = mr(
                  t.filter(function (t) {
                    var e = t.element,
                      n = t.gap;
                    return e && !n;
                  }),
                  function (t) {
                    var n = t.element,
                      i = t.pos,
                      a = i[r],
                      s =
                        (Math.min(0, a - e) < 0 ? -1 : 1) + '_' + i[r ? 0 : 1],
                      u = z(o, function (t) {
                        var e = t[0],
                          r = t[1];
                        return n === e && a === r;
                      });
                    return u ? u[2] : (o.push([n, a, s]), s);
                  }
                );
              return (
                i.forEach(function (t) {
                  t.sort(function (t, o) {
                    return (
                      Bo(t.pos[r], t.size, e, n).size -
                        Bo(o.pos[r], t.size, e, n).size ||
                      t.pos[r ? 0 : 1] - o.pos[r ? 0 : 1]
                    );
                  });
                }),
                i
              );
            })(
              (f = f.filter(function (t) {
                var e = t.element,
                  r = t.pos,
                  o = t.size,
                  i = r[n];
                return (
                  !e ||
                  f.every(function (e) {
                    var r = e.element,
                      a = e.pos,
                      s = e.size,
                      u = a[n];
                    return (
                      !r ||
                      t === e ||
                      i + o <= u ||
                      u + s <= i ||
                      (i < u && u + s < i + o)
                    );
                  })
                );
              })),
              o[n],
              c,
              n
            );
          return (
            (l = l.filter(function (t) {
              var e = t.gap,
                r = t.pos[s];
              return p.every(function (t) {
                return t.every(function (t) {
                  var o = t.pos,
                    a = -u + o[n];
                  return (
                    o[s] !== r || (!(e < 0 && a < 0) && !(e > 0 && a > i[n]))
                  );
                });
              });
            })),
            {
              guidelines: f,
              groups: p,
              gapGuidelines: l,
            }
          );
        }
        function zo(t, e, n, r, o) {
          var i = t.props.zoom;
          return n
            .filter(function (t) {
              return !t.hide;
            })
            .map(function (t, n) {
              var a = t.pos,
                s = t.size,
                u = t.element,
                c = [-r[0] + a[0], -r[1] + a[1]];
              return Io(
                {
                  key: e + 'Guideline' + n,
                  classNames: u ? [In('bold')] : [],
                  direction: e,
                  posValue: c,
                  sizeValue: s,
                  zoom: i,
                },
                o
              );
            });
        }
        function Go(t, e, n, r, o) {
          var i = t.props,
            a = i.snapDigit,
            s = void 0 === a ? 0 : a,
            u = i.isDisplaySnapDigit,
            c = void 0 === u || u,
            l = i.zoom,
            f = 'horizontal' === e ? 'X' : 'Y',
            p = 'horizontal' === e ? 'width' : 'height';
          return n.map(function (t, n) {
            var i,
              a = t.renderPos,
              u = t.gap,
              d = t.className,
              h = t.inner,
              v = Math.abs(u),
              g = c ? parseFloat(v.toFixed(s)) : 0;
            return o.createElement(
              'div',
              {
                key: e + 'GapGuideline' + n,
                className: In('guideline-group', e),
                style:
                  ((i = {
                    left: a[0] + 'px',
                    top: a[1] + 'px',
                  }),
                  (i[p] = v + 'px'),
                  i),
              },
              Io(
                {
                  direction: e,
                  classNames: [In(h ? 'dashed' : 'gap'), d],
                  size: '100%',
                  posValue: [0, 0],
                  sizeValue: v,
                  zoom: l,
                },
                o
              ),
              o.createElement(
                'div',
                {
                  className: In('size-value', 'gap'),
                  style: {
                    transform: 'translate' + f + '(-50%) scale(' + l + ')',
                  },
                },
                g > 0 ? r(g) : ''
              )
            );
          });
        }
        function Lo(t) {
          var e = t.state;
          if (!e.guidelines || !e.guidelines.length) {
            var n = t.state.container,
              r = t.props.snapContainer || n,
              o = e.containerClientRect,
              i = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
              };
            if (n !== r) {
              var a = Mr(r, !0);
              if (a) {
                var s = ar(a),
                  u = Pr(e, [s.left - o.left, s.top - o.top]),
                  c = Pr(e, [s.right - o.right, s.bottom - o.bottom]);
                (i.left = U(u[0], 0.1)),
                  (i.top = U(u[1], 0.1)),
                  (i.right = U(c[0], 0.1)),
                  (i.bottom = U(c[1], 0.1));
              }
            }
            (e.snapOffset = i),
              (e.elementGuidelineValues = []),
              (e.staticGuidelines = uo(t, !1)),
              (e.guidelines = co(t)),
              (e.enableSnap = !0);
          }
        }
        function Wo(t, e) {
          var n = t.props,
            r = n.snappable,
            o = n.bounds,
            i = n.innerBounds,
            a = n.verticalGuidelines,
            s = n.horizontalGuidelines,
            u = n.snapGridWidth,
            c = n.snapGridHeight,
            l = t.state,
            f = l.guidelines,
            p = l.enableSnap;
          return (
            !(!r || !p || (e && !0 !== r && r.indexOf(e) < 0)) &&
            !!(
              u ||
              c ||
              o ||
              i ||
              (f && f.length) ||
              (a && a.length) ||
              (s && s.length)
            )
          );
        }
        function qo(t, e, n, r, o) {
          var i = (function (t, e, n, r) {
            var o = e[0] - t[0],
              i = e[1] - t[1];
            Math.abs(o) < Mn && (o = 0);
            Math.abs(i) < Mn && (i = 0);
            if (!o) return r ? [0, 0] : [0, n];
            if (!i) return r ? [n, 0] : [0, 0];
            var a = i / o,
              s = t[1] - a * t[0];
            return r
              ? [n, a * (e[0] + n) + s - e[1]]
              : [(e[1] + n - s) / a - e[0], n];
          })(t, e, n, r);
          if (!i)
            return {
              isOutside: !1,
              offset: [0, 0],
            };
          var a = X(t, e),
            s = X(i, t),
            u = X(i, e),
            c = s > a || u > a,
            l = qr({
              datas: o,
              distX: i[0],
              distY: i[1],
            });
          return {
            offset: [l[0], l[1]],
            isOutside: c,
          };
        }
        function Ho(t, e, n, r, o, i) {
          var a = Qn(t, e, n, i ? 4 : 3),
            s = (function (t, e) {
              return Vr(
                t,
                e.map(function (t) {
                  return -t;
                })
              );
            })(a, o);
          return ur(a, ne(r, s));
        }
        function Yo(t, e) {
          return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
        }
        function Vo(t, e) {
          return t.isBound ? t.offset : e.isSnap ? ho(e).offset : 0;
        }
        function Xo(t, e, n, r) {
          var o = (function (t, e, n) {
              var r = Po(t),
                o = r.left,
                i = r.top,
                a = r.right,
                s = r.bottom,
                u = n[0],
                c = n[1],
                l = ne(n, e),
                f = l[0],
                p = l[1];
              Math.abs(f) < Mn && (f = 0), Math.abs(p) < Mn && (p = 0);
              var d = p > 0,
                h = f > 0,
                v = {
                  isBound: !1,
                  offset: 0,
                  pos: 0,
                },
                g = {
                  isBound: !1,
                  offset: 0,
                  pos: 0,
                };
              if (0 === f && 0 === p)
                return {
                  vertical: v,
                  horizontal: g,
                };
              if (0 === f)
                d
                  ? s < c && ((g.pos = s), (g.offset = c - s))
                  : i > c && ((g.pos = i), (g.offset = c - i));
              else if (0 === p)
                h
                  ? a < u && ((v.pos = a), (v.offset = u - a))
                  : o > u && ((v.pos = o), (v.offset = u - o));
              else {
                var m = p / f,
                  y = n[1] - m * u,
                  b = 0,
                  x = 0,
                  w = !1;
                h && a <= u
                  ? ((b = m * a + y), (x = a), (w = !0))
                  : !h && u <= o && ((b = m * o + y), (x = o), (w = !0)),
                  w && (b < i || b > s) && (w = !1),
                  w ||
                    (d && s <= c
                      ? ((x = ((b = s) - y) / m), (w = !0))
                      : !d && c <= i && ((x = ((b = i) - y) / m), (w = !0))),
                  w &&
                    ((v.isBound = !0),
                    (v.pos = x),
                    (v.offset = u - x),
                    (g.isBound = !0),
                    (g.pos = b),
                    (g.offset = c - b));
              }
              return {
                vertical: v,
                horizontal: g,
              };
            })(t, e, n),
            i = o.horizontal,
            a = o.vertical,
            s = r
              ? {
                  horizontal: {
                    isSnap: !1,
                  },
                  vertical: {
                    isSnap: !1,
                  },
                }
              : (function (t, e, n) {
                  var r = n[0],
                    o = n[1],
                    i = e[0],
                    a = e[1],
                    s = ne(n, e),
                    u = s[0],
                    c = s[1],
                    l = c > 0,
                    f = u > 0;
                  (u = Or(u)), (c = Or(c));
                  var p = {
                      isSnap: !1,
                      offset: 0,
                      pos: 0,
                    },
                    d = {
                      isSnap: !1,
                      offset: 0,
                      pos: 0,
                    };
                  if (0 === u && 0 === c)
                    return {
                      vertical: p,
                      horizontal: d,
                    };
                  var h = lo(t, u ? [r] : [], c ? [o] : []),
                    v = h.vertical,
                    g = h.horizontal;
                  v.posInfos.filter(function (t) {
                    var e = t.pos;
                    return f ? e >= i : e <= i;
                  }),
                    g.posInfos.filter(function (t) {
                      var e = t.pos;
                      return l ? e >= a : e <= a;
                    }),
                    (v.isSnap = v.posInfos.length > 0),
                    (g.isSnap = g.posInfos.length > 0);
                  var m = ho(v),
                    y = m.isSnap,
                    b = m.guideline,
                    x = ho(g),
                    w = x.isSnap,
                    E = x.guideline,
                    S = w ? E.pos[1] : 0,
                    O = y ? b.pos[0] : 0;
                  if (0 === u)
                    w &&
                      ((d.isSnap = !0),
                      (d.pos = E.pos[1]),
                      (d.offset = o - d.pos));
                  else if (0 === c)
                    y && ((p.isSnap = !0), (p.pos = O), (p.offset = r - O));
                  else {
                    var A = c / u,
                      C = n[1] - A * r,
                      M = 0,
                      D = 0,
                      P = !1;
                    y
                      ? ((M = A * (D = O) + C), (P = !0))
                      : w && ((D = ((M = S) - C) / A), (P = !0)),
                      P &&
                        ((p.isSnap = !0),
                        (p.pos = D),
                        (p.offset = r - D),
                        (d.isSnap = !0),
                        (d.pos = M),
                        (d.offset = o - M));
                  }
                  return {
                    vertical: p,
                    horizontal: d,
                  };
                })(t, e, n),
            u = s.horizontal,
            c = s.vertical,
            l = Yo(i, u),
            f = Yo(a, c),
            p = Math.abs(l),
            d = Math.abs(f);
          return {
            horizontal: {
              isBound: i.isBound,
              isSnap: u.isSnap,
              offset: l,
              dist: p,
            },
            vertical: {
              isBound: a.isBound,
              isSnap: c.isSnap,
              offset: f,
              dist: d,
            },
          };
        }
        function Uo(t, e, n, r) {
          void 0 === r && (r = n);
          var o = Do(
              Po(t),
              r.map(function (t) {
                return t[0];
              }),
              r.map(function (t) {
                return t[1];
              })
            ),
            i = o.horizontal,
            a = o.vertical,
            s = e
              ? {
                  horizontal: {
                    isSnap: !1,
                    index: -1,
                  },
                  vertical: {
                    isSnap: !1,
                    index: -1,
                  },
                }
              : lo(
                  t,
                  n.map(function (t) {
                    return t[0];
                  }),
                  n.map(function (t) {
                    return t[1];
                  }),
                  t.props.snapCenter
                ),
            u = s.horizontal,
            c = s.vertical,
            l = Vo(i[0], u),
            f = Vo(a[0], c),
            p = Math.abs(l),
            d = Math.abs(f);
          return {
            horizontal: {
              isBound: i[0].isBound,
              isSnap: u.isSnap,
              snapIndex: u.index,
              offset: l,
              dist: p,
              bounds: i,
              snap: u,
            },
            vertical: {
              isBound: a[0].isBound,
              isSnap: c.isSnap,
              snapIndex: c.index,
              offset: f,
              dist: d,
              bounds: a,
              snap: c,
            },
          };
        }
        function Qo(t, e, n, r, o) {
          void 0 === o && (o = {});
          var i = Do(e, n, r),
            a = i.horizontal,
            s = i.vertical,
            u = o.isRequest
              ? {
                  horizontal: {
                    isSnap: !1,
                    index: -1,
                  },
                  vertical: {
                    isSnap: !1,
                    index: -1,
                  },
                }
              : fo(t, n, r, o),
            c = u.horizontal,
            l = u.vertical,
            f = Vo(a[0], c),
            p = Vo(s[0], l),
            d = Math.abs(f),
            h = Math.abs(p);
          return {
            horizontal: {
              isBound: a[0].isBound,
              isSnap: c.isSnap,
              snapIndex: c.index,
              offset: f,
              dist: d,
              bounds: a,
              snap: c,
            },
            vertical: {
              isBound: s[0].isBound,
              isSnap: l.isSnap,
              snapIndex: l.index,
              offset: p,
              dist: h,
              bounds: s,
              snap: l,
            },
          };
        }
        function Jo(t, e, n, r, o, i) {
          return n.map(function (n) {
            var a = n[0],
              s = n[1],
              u = Vr(e, a),
              c = Vr(e, s),
              l = r ? Xo(t, u, c, o) : Uo(t, o, [c]),
              f = l.horizontal,
              p = f.offset,
              d = f.isBound,
              h = f.isSnap,
              v = l.vertical,
              g = v.offset,
              m = v.isBound,
              y = v.isSnap,
              b = ne(s, a);
            if (!g && !p)
              return {
                isBound: m || d,
                isSnap: y || h,
                sign: b,
                offset: [0, 0],
              };
            var x = (function (t, e, n, r) {
              var o = (Y(t, e) / Math.PI) * 180,
                i = n.vertical,
                a = i.isBound,
                s = i.isSnap,
                u = i.dist,
                c = n.horizontal,
                l = c.isBound,
                f = c.isSnap,
                p = o % 180,
                d = p < 3 || p > 177,
                h = p > 87 && p < 93;
              return c.dist < u && (a || (s && !h && (!r || !d)))
                ? 'vertical'
                : !l && (!f || d || (r && h))
                ? ''
                : 'horizontal';
            })(u, c, l, r);
            if (!x)
              return {
                sign: b,
                isBound: !1,
                isSnap: !1,
                offset: [0, 0],
              };
            var w = 'vertical' === x,
              E = qo(u, c, -(w ? g : p), w, i).offset.map(function (t, e) {
                return t * (b[e] ? 2 / b[e] : 0);
              });
            return {
              sign: b,
              isBound: w ? m : d,
              isSnap: w ? y : h,
              offset: E,
            };
          });
        }
        function Ko(t, e, n, r, o, i) {
          var a = (function (t, e) {
              var n = [],
                r = [-t[0], -t[1]];
              return (
                t[0] && t[1]
                  ? (n.push([r, [t[0], -t[1]]], [r, [-t[0], t[1]]]),
                    e && n.push([r, t]))
                  : t[0]
                  ? e
                    ? n.push(
                        [r, [r[0], -1]],
                        [r, [r[0], 1]],
                        [r, [t[0], -1]],
                        [r, t],
                        [r, [t[0], 1]]
                      )
                    : n.push(
                        [
                          [r[0], -1],
                          [t[0], -1],
                        ],
                        [
                          [r[0], 0],
                          [t[0], 0],
                        ],
                        [
                          [r[0], 1],
                          [t[0], 1],
                        ]
                      )
                  : t[1]
                  ? e
                    ? n.push(
                        [r, [-1, r[1]]],
                        [r, [1, r[1]]],
                        [r, [-1, t[1]]],
                        [r, [1, t[1]]],
                        [r, t]
                      )
                    : n.push(
                        [
                          [-1, r[1]],
                          [-1, t[1]],
                        ],
                        [
                          [0, r[1]],
                          [0, t[1]],
                        ],
                        [
                          [1, r[1]],
                          [1, t[1]],
                        ]
                      )
                  : n.push(
                      [r, [1, 0]],
                      [r, [-1, 0]],
                      [r, [0, -1]],
                      [r, [0, 1]],
                      [
                        [1, 0],
                        [1, -1],
                      ],
                      [
                        [1, 0],
                        [1, 1],
                      ],
                      [
                        [0, 1],
                        [1, 1],
                      ],
                      [
                        [0, 1],
                        [-1, 1],
                      ],
                      [
                        [-1, 0],
                        [-1, -1],
                      ],
                      [
                        [-1, 0],
                        [-1, 1],
                      ],
                      [
                        [0, -1],
                        [1, -1],
                      ],
                      [
                        [0, -1],
                        [-1, -1],
                      ]
                    ),
                n
              );
            })(n, r),
            s = Ao(e, n, r),
            u = mn(Jo(t, e, a, r, o, i), So(t, s, Vr(e, [0, 0]), i)),
            c = mo(u, 0),
            l = mo(u, 1);
          return {
            width: {
              isBound: c.isBound,
              offset: c.offset[0],
            },
            height: {
              isBound: l.isBound,
              offset: l.offset[1],
            },
          };
        }
        function $o(t, e, n, r, o, i, a, s) {
          for (
            var u = cr(t.state), c = t.props.keepRatio, l = 0, f = 0, p = 0;
            p < 2;
            ++p
          ) {
            var d = Ko(t, e(l, f), o, c, a, s),
              h = d.width,
              v = d.height,
              g = h.isBound,
              m = v.isBound,
              y = h.offset,
              b = v.offset;
            if (
              (1 === p && (g || (y = 0), m || (b = 0)),
              0 === p && a && !g && !m)
            )
              return [0, 0];
            if (c) {
              var x = Math.abs(y) * (n ? 1 / n : 1),
                w = Math.abs(b) * (r ? 1 / r : 1);
              (g && m ? x < w : m || (!g && x < w))
                ? (y = (n * b) / r)
                : (b = (r * y) / n);
            }
            (l += y), (f += b);
          }
          if (o[0] && o[1]) {
            var E = (function (t, e, n, r, o) {
                var i = [-n[0], -n[1]],
                  a = t.state,
                  s = a.width,
                  u = a.height,
                  c = t.props.bounds,
                  l = 1 / 0,
                  f = 1 / 0;
                if (c) {
                  var p = [
                      [n[0], -n[1]],
                      [-n[0], n[1]],
                    ],
                    d = c.left,
                    h = void 0 === d ? -1 / 0 : d,
                    v = c.top,
                    g = void 0 === v ? -1 / 0 : v,
                    m = c.right,
                    y = void 0 === m ? 1 / 0 : m,
                    b = c.bottom,
                    x = void 0 === b ? 1 / 0 : b;
                  p.forEach(function (t) {
                    var n = t[0] !== i[0],
                      a = t[1] !== i[1],
                      c = Vr(e, t),
                      p = (360 * Y(r, c)) / Math.PI;
                    if (a) {
                      var d = c.slice();
                      (Math.abs(p - 360) < 2 || Math.abs(p - 180) < 2) &&
                        (d[1] = r[1]);
                      var v = qo(r, d, (r[1] < c[1] ? x : g) - c[1], !1, o),
                        m = v.offset[1],
                        b = v.isOutside;
                      isNaN(m) || (f = u + (b ? 1 : -1) * Math.abs(m));
                    }
                    if (n) {
                      (d = c.slice()),
                        (Math.abs(p - 90) < 2 || Math.abs(p - 270) < 2) &&
                          (d[0] = r[0]);
                      var w = qo(r, d, (r[0] < c[0] ? y : h) - c[0], !0, o),
                        E = w.offset[0],
                        S = w.isOutside;
                      isNaN(E) || (l = s + (S ? 1 : -1) * Math.abs(E));
                    }
                  });
                }
                return {
                  maxWidth: l,
                  maxHeight: f,
                };
              })(t, u, o, i, s),
              S = E.maxWidth,
              O = E.maxHeight,
              A = (function (t, e, n, r, o, i, a, s, u) {
                var c = Uo(t, s, [Vr(e, a)]),
                  l = c.horizontal.offset,
                  f = c.vertical.offset;
                if (f || l) {
                  var p = qr({
                      datas: u,
                      distX: -f,
                      distY: -l,
                    }),
                    d = p[0],
                    h = p[1];
                  return [
                    Math.min(o || 1 / 0, n + a[0] * d) - n,
                    Math.min(i || 1 / 0, r + a[1] * h) - r,
                  ];
                }
                return [0, 0];
              })(
                t,
                e(l, f).map(function (t) {
                  return t.map(function (t) {
                    return U(t, Cn);
                  });
                }),
                n + l,
                r + f,
                S,
                O,
                o,
                a,
                s
              );
            (l += y = A[0]), (f += b = A[1]);
          }
          return [l, f];
        }
        function Zo(t, e, n, r) {
          if (!Wo(t, 'rotatable')) return r;
          var o = e.pos1,
            i = e.pos2,
            a = e.pos3,
            s = e.pos4,
            u = (r * Math.PI) / 180,
            c = [o, i, a, s].map(function (t) {
              return ne(t, n);
            }),
            l = c.map(function (t) {
              return le(t, u);
            }),
            f = mn(Ro(t, c, l, n, r), Mo(t, c, l, n, r));
          return (
            f.sort(function (t, e) {
              return Math.abs(t - r) - Math.abs(e - r);
            }),
            f.length ? f[0] : r
          );
        }
        function ti(t, e, n, r, o) {
          var i = o.width,
            a = o.height,
            s = o.fixedPosition;
          if (!Wo(t, 'scalable')) return [0, 0];
          var u = o.is3d,
            c = $o(
              t,
              function (t, r) {
                return Ho(
                  (function (t, e) {
                    var n = t.transformOrigin,
                      r = t.offsetMatrix,
                      o = t.is3d ? 4 : 3;
                    return Xr(r, te(t.targetMatrix, ve(e, o), o), n, o);
                  })(o, ee(e, [t / i, r / a])),
                  i,
                  a,
                  s,
                  n,
                  u
                );
              },
              i,
              a,
              n,
              s,
              r,
              o
            );
          return [c[0] / i, c[1] / a];
        }
        function ei(t, e, n, r, o, i) {
          if (!Wo(t, 'draggable'))
            return [
              {
                isSnap: !1,
                isBound: !1,
                offset: 0,
              },
              {
                isSnap: !1,
                isBound: !1,
                offset: 0,
              },
            ];
          var a = ur(i.absolutePoses, [e, n]),
            s = Jn(a),
            u = s.left,
            c = s.right,
            l = s.top,
            f = s.bottom,
            p = [
              [u, l],
              [c, l],
              [u, f],
              [c, f],
            ];
          t.props.snapCenter && p.push([(u + c) / 2, (l + f) / 2]);
          var d = Uo(t, o, p, a),
            h = d.vertical,
            v = d.horizontal,
            g = Oo(t, a, i),
            m = g.vertical,
            y = g.horizontal,
            b = h.isSnap,
            x = v.isSnap,
            w = h.isBound || m.isBound,
            E = v.isBound || y.isBound,
            S = (function (t, e, n, r, o) {
              var i = e[0],
                a = e[1],
                s = n[0],
                u = n[1],
                c = r[0],
                l = r[1],
                f = o[0],
                p = o[1],
                d = -f,
                h = -p;
              if (t && i && a) {
                (d = 0), (h = 0);
                var v = [];
                if (
                  (s && u
                    ? v.push([0, p], [f, 0])
                    : s
                    ? v.push([f, 0])
                    : u
                    ? v.push([0, p])
                    : c && l
                    ? v.push([0, p], [f, 0])
                    : c
                    ? v.push([f, 0])
                    : l && v.push([0, p]),
                  v.length)
                ) {
                  v.sort(function (t, e) {
                    return Zn(ne([i, a], t)) - Zn(ne([i, a], e));
                  });
                  var g = v[0];
                  if (g[0] && Math.abs(i) > Mn)
                    (d = -g[0]), (h = (a * Math.abs(i + d)) / Math.abs(i) - a);
                  else if (g[1] && Math.abs(a) > Mn) {
                    var m = a;
                    (h = -g[1]), (d = (i * Math.abs(a + h)) / Math.abs(m) - i);
                  }
                  if (t && u && s)
                    if (Math.abs(d) > Mn && Math.abs(d) < Math.abs(f))
                      (d *= y = Math.abs(f) / Math.abs(d)), (h *= y);
                    else if (Math.abs(h) > Mn && Math.abs(h) < Math.abs(p)) {
                      var y;
                      (d *= y = Math.abs(p) / Math.abs(h)), (h *= y);
                    } else (d = br(-f, d)), (h = br(-p, h));
                }
              } else (d = i || s ? -f : 0), (h = a || u ? -p : 0);
              return [d, h];
            })(
              r,
              [e, n],
              [w, E],
              [b, x],
              [br(h.offset, m.offset), br(v.offset, y.offset)]
            );
          return [
            {
              isBound: w,
              isSnap: b,
              offset: S[0],
            },
            {
              isBound: E,
              isSnap: x,
              offset: S[1],
            },
          ];
        }
        function ni(t) {
          var e = [];
          return (
            t.forEach(function (t) {
              t.guidelineInfos.forEach(function (t) {
                var n = t.guideline;
                e.indexOf(n) > -1 || e.push(n);
              });
            }),
            e
          );
        }
        function ri(t, e, n, r) {
          var o = t.filter(function (t) {
              var n = t.element,
                r = t.gap,
                o = t.type;
              return n && r && o === e;
            }),
            i = 'vertical' === e ? [0, 1] : [1, 0],
            a = i[0],
            s = i[1];
          return yr(
            o.map(function (t) {
              var e = t.pos,
                o = t.gap,
                i = t.gapGuidelines,
                u = t.sizes,
                c = (function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return (
                    t.sort(function (t, e) {
                      return Math.abs(t) - Math.abs(e);
                    }),
                    t[0]
                  );
                })(e[s] + u[s] - n[s], e[s] - n[s] - r[s]),
                l = Math.min(u[s], r[s]);
              if (
                (c > 0 && c > l
                  ? (c = 2 * (c - l / 2))
                  : c < 0 && c < -l && (c = 2 * (c + l / 2)),
                0 === c)
              )
                return [];
              var f = (c > 0 ? 0 : r[s]) + c / 2;
              return mn(
                (function (t, e, n, r, o, i, a) {
                  var s = Math.abs(i),
                    u = o[e] + (i > 0 ? r[0] : 0);
                  return t
                    .filter(function (t) {
                      return t.pos[e] <= n[e];
                    })
                    .sort(function (t, n) {
                      var r = t.pos;
                      return n.pos[e] - r[e];
                    })
                    .filter(function (t) {
                      var n = t.pos,
                        r = t.sizes,
                        o = n[e];
                      return U(o + r[e], Cn) === U(u - s, Cn) && ((u = o), !0);
                    })
                    .map(function (t) {
                      var r = -n[e] + t.pos[e] + t.sizes[e];
                      return gn(gn({}, t), {
                        gap: i,
                        renderPos: e ? [a, r] : [r, a],
                      });
                    });
                })(i, a, n, r, e, o, f),
                (function (t, e, n, r, o, i, a) {
                  var s = Math.abs(i),
                    u = o[e] + (i < 0 ? r[e] : 0);
                  return t
                    .filter(function (t) {
                      return t.pos[e] > n[e];
                    })
                    .sort(function (t, n) {
                      var r = t.pos,
                        o = n.pos;
                      return r[e] - o[e];
                    })
                    .filter(function (t) {
                      var n = t.pos,
                        r = t.sizes,
                        o = n[e];
                      return U(o, Cn) === U(u + s, Cn) && ((u = o + r[e]), !0);
                    })
                    .map(function (t) {
                      var r = -n[e] + t.pos[e] - s;
                      return gn(gn({}, t), {
                        gap: i,
                        renderPos: e ? [a, r] : [r, a],
                      });
                    });
                })(i, a, n, r, e, o, f)
              );
            })
          );
        }
        function oi(t, e, n, r, o, i) {
          var a = Do(Po(t, i), e, n),
            s = a.vertical,
            u = a.horizontal;
          s.forEach(function (t) {
            t.isBound &&
              r.push({
                type: 'bounds',
                pos: t.pos,
              });
          }),
            u.forEach(function (t) {
              t.isBound &&
                o.push({
                  type: 'bounds',
                  pos: t.pos,
                });
            });
          var c = (function (t) {
              var e = t.props.innerBounds;
              if (!e)
                return {
                  vertical: [],
                  horizontal: [],
                };
              var n = t.getRect(),
                r = n.pos1,
                o = n.pos2,
                i = n.pos3,
                a = n.pos4,
                s = Vr([r, o, i, a], [0, 0]),
                u = e.left,
                c = e.top,
                l = e.width,
                f = e.height,
                p = [
                  [u, c],
                  [u, c + f],
                ],
                d = [
                  [u, c],
                  [u + l, c],
                ],
                h = [
                  [u + l, c],
                  [u + l, c + f],
                ],
                v = [
                  [u, c + f],
                  [u + l, c + f],
                ],
                g = [],
                m = [],
                y = {
                  top: !1,
                  bottom: !1,
                  left: !1,
                  right: !1,
                };
              return (
                [
                  [r, o],
                  [o, a],
                  [a, i],
                  [i, r],
                ].forEach(function (t) {
                  var e = yo(s, t),
                    n = e.horizontal,
                    r = e.vertical,
                    o = Eo(t, d, r, 1, !0),
                    i = Eo(t, v, r, 1, !0),
                    a = Eo(t, p, n, 1, !0),
                    b = Eo(t, h, n, 1, !0);
                  o.isBound && !y.top && (g.push(c), (y.top = !0)),
                    i.isBound && !y.bottom && (g.push(c + f), (y.bottom = !0)),
                    a.isBound && !y.left && (m.push(u), (y.left = !0)),
                    b.isBound && !y.right && (m.push(u + l), (y.right = !0));
                }),
                {
                  horizontal: g,
                  vertical: m,
                }
              );
            })(t),
            l = c.vertical,
            f = c.horizontal;
          l.forEach(function (t) {
            N(r, function (e) {
              var n = e.type,
                r = e.pos;
              return 'bounds' === n && r === t;
            }) >= 0 ||
              r.push({
                type: 'bounds',
                pos: t,
              });
          }),
            f.forEach(function (t) {
              N(o, function (e) {
                var n = e.type,
                  r = e.pos;
                return 'bounds' === n && r === t;
              }) >= 0 ||
                o.push({
                  type: 'bounds',
                  pos: t,
                });
            });
        }
        var ii = {
            name: 'snappable',
            props: {
              snappable: [Boolean, Array],
              snapContainer: Object,
              snapCenter: Boolean,
              snapHorizontal: Boolean,
              snapVertical: Boolean,
              snapElement: Boolean,
              snapGap: Boolean,
              snapGridWidth: Number,
              snapGridHeight: Number,
              isDisplaySnapDigit: Boolean,
              isDisplayInnerSnapDigit: Boolean,
              snapDigit: Number,
              snapThreshold: Number,
              horizontalGuidelines: Array,
              verticalGuidelines: Array,
              elementGuidelines: Array,
              bounds: Object,
              innerBounds: Object,
              snapDistFormat: Function,
            },
            events: {
              onSnap: 'snap',
            },
            css: [
              ':host {\n    --bounds-color: #d66;\n}\n.guideline {\n    pointer-events: none;\n    z-index: 2;\n}\n.guideline.bounds {\n    background: #d66;\n    background: var(--bounds-color);\n}\n.guideline-group {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.guideline-group .size-value {\n    position: absolute;\n    color: #f55;\n    font-size: 12px;\n    font-weight: bold;\n}\n.guideline-group.horizontal .size-value {\n    transform-origin: 50% 100%;\n    transform: translateX(-50%);\n    left: 50%;\n    bottom: 5px;\n}\n.guideline-group.vertical .size-value {\n    transform-origin: 0% 50%;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 5px;\n}\n.guideline.gap {\n    background: #f55;\n}\n.size-value.gap {\n    color: #f55;\n}\n',
            ],
            render: function (t, e) {
              var n = t.state,
                r = n.top,
                o = n.left,
                i = n.pos1,
                a = n.pos2,
                s = n.pos3,
                u = n.pos4,
                c = n.snapRenderInfo,
                l = n.targetClientRect,
                f = n.containerClientRect,
                p = n.is3d,
                d = n.rootMatrix;
              if (!c || !Wo(t, '')) return [];
              (n.staticGuidelines = uo(t, !1, n.staticGuidelines)),
                (n.guidelines = co(t));
              var h = p ? 4 : 3,
                v = Math.min(i[0], a[0], s[0], u[0]),
                g = Math.min(i[1], a[1], s[1], u[1]),
                m = oo(d, f, h),
                y = xr(d, [l.left - m[0], l.top - m[1]], h),
                b = y[0],
                x = y[1],
                w = t.props,
                E = w.snapThreshold,
                S = void 0 === E ? 5 : E,
                O = w.snapDigit,
                A = void 0 === O ? 0 : O,
                C = w.snapDistFormat,
                M =
                  void 0 === C
                    ? function (t) {
                        return t;
                      }
                    : C,
                D = c.externalPoses || [],
                P = cr(t.state),
                j = [],
                T = [],
                R = [],
                k = [],
                B = [],
                I = Jn(P),
                _ = I.width,
                F = I.height,
                N = I.top,
                z = I.left,
                G = I.bottom,
                L = I.right,
                W = D.length > 0,
                q = W ? Jn(D) : {};
              if (!c.request) {
                if (
                  (c.direction &&
                    B.push(
                      (function (t, e, n) {
                        var r = [];
                        if (n[0] && n[1])
                          r = [n, [-n[0], n[1]], [n[0], -n[1]]].map(function (
                            t
                          ) {
                            return Vr(e, t);
                          });
                        else if (n[0] || n[1])
                          t.props.keepRatio
                            ? (r = [[-1, -1], [-1, 1], [1, -1], [1, 1], n].map(
                                function (t) {
                                  return Vr(e, t);
                                }
                              ))
                            : (r = Yr(e, n)).length > 1 &&
                              r.push([
                                (r[0][0] + r[1][0]) / 2,
                                (r[0][1] + r[1][1]) / 2,
                              ]);
                        else
                          for (
                            var o = [e[0], e[1], e[3], e[2], e[0]], i = 0;
                            i < 4;
                            ++i
                          )
                            r.push(o[i]),
                              r.push([
                                (o[i][0] + o[i + 1][0]) / 2,
                                (o[i][1] + o[i + 1][1]) / 2,
                              ]);
                        return lo(
                          t,
                          r.map(function (t) {
                            return t[0];
                          }),
                          r.map(function (t) {
                            return t[1];
                          }),
                          !0,
                          1
                        );
                      })(t, P, c.direction)
                    ),
                  c.snap)
                ) {
                  var H = Jn(P);
                  c.center &&
                    ((H.middle = (H.top + H.bottom) / 2),
                    (H.center = (H.left + H.right) / 2)),
                    B.push(po(t, H, !0, 1));
                }
                W &&
                  (c.center &&
                    ((q.middle = (q.top + q.bottom) / 2),
                    (q.center = (q.left + q.right) / 2)),
                  B.push(po(t, q, !0, 1))),
                  B.forEach(function (t) {
                    var e = t.vertical.posInfos,
                      n = t.horizontal.posInfos;
                    j.push.apply(
                      j,
                      e
                        .filter(function (t) {
                          return t.guidelineInfos.some(function (t) {
                            return !t.guideline.hide;
                          });
                        })
                        .map(function (t) {
                          return {
                            type: 'snap',
                            pos: t.pos,
                          };
                        })
                    ),
                      T.push.apply(
                        T,
                        n
                          .filter(function (t) {
                            return t.guidelineInfos.some(function (t) {
                              return !t.guideline.hide;
                            });
                          })
                          .map(function (t) {
                            return {
                              type: 'snap',
                              pos: t.pos,
                            };
                          })
                      ),
                      R.push.apply(R, ni(e)),
                      k.push.apply(k, ni(n));
                  });
              }
              oi(t, [z, L], [N, G], j, T),
                W &&
                  oi(
                    t,
                    [q.left, q.right],
                    [q.top, q.bottom],
                    j,
                    T,
                    c.externalBounds
                  );
              var Y = ri(R, 'vertical', [o, r], [_, F]),
                V = ri(k, 'horizontal', [o, r], [_, F]),
                X = mn(R, k);
              dr(
                t,
                'onSnap',
                {
                  guidelines: X.filter(function (t) {
                    return !t.element;
                  }),
                  elements: mr(
                    X.filter(function (t) {
                      return t.element;
                    }),
                    function (t) {
                      return t.element;
                    }
                  ),
                  gaps: mn(V, Y),
                },
                !0
              );
              var U = No(t, k, 0, [o, r], [b, x], [_, F]),
                Q = U.guidelines,
                J = U.groups,
                K = U.gapGuidelines,
                $ = No(t, R, 1, [o, r], [b, x], [_, F]),
                Z = $.guidelines,
                tt = $.groups;
              return mn(
                Go(t, 'vertical', mn(V, $.gapGuidelines), M, e),
                Go(t, 'horizontal', mn(Y, K), M, e),
                _o(t, 'horizontal', J, v, b, _, r, S, A, 0, M, e),
                _o(t, 'vertical', tt, g, x, F, o, S, A, 1, M, e),
                zo(t, 'horizontal', Q, [o, r], e),
                zo(t, 'vertical', Z, [o, r], e),
                Fo(t, 'horizontal', T, v, r, _, 0, e),
                Fo(t, 'vertical', j, g, o, F, 1, e)
              );
            },
            dragStart: function (t, e) {
              (t.state.snapRenderInfo = {
                request: e.isRequest,
                snap: !0,
                center: !0,
              }),
                Lo(t);
            },
            drag: function (t) {
              var e = t.state;
              (e.staticGuidelines = uo(t, !1, e.staticGuidelines)),
                (e.guidelines = co(t));
            },
            pinchStart: function (t) {
              this.unset(t);
            },
            dragEnd: function (t) {
              this.unset(t);
            },
            dragControlCondition: function (t, e) {
              return (
                !(!Ar(0, e) && !vi(t, e)) ||
                (!e.isRequest && e.inputEvent
                  ? J(e.inputEvent.target, In('snap-control'))
                  : void 0)
              );
            },
            dragControlStart: function (t) {
              (t.state.snapRenderInfo = null), Lo(t);
            },
            dragControl: function (t) {
              this.drag(t);
            },
            dragControlEnd: function (t) {
              this.unset(t);
            },
            dragGroupStart: function (t, e) {
              this.dragStart(t, e);
            },
            dragGroup: function (t) {
              this.drag(t);
            },
            dragGroupEnd: function (t) {
              this.unset(t);
            },
            dragGroupControlStart: function (t) {
              (t.state.snapRenderInfo = null), Lo(t);
            },
            dragGroupControl: function (t) {
              this.drag(t);
            },
            dragGroupControlEnd: function (t) {
              this.unset(t);
            },
            unset: function (t) {
              var e = t.state;
              (e.enableSnap = !1),
                (e.staticGuidelines = []),
                (e.guidelines = []),
                (e.snapRenderInfo = null);
            },
          },
          ai = {
            name: 'draggable',
            props: {
              draggable: Boolean,
              throttleDrag: Number,
              throttleDragRotate: Number,
              startDragRotate: Number,
              edgeDraggable: Boolean,
            },
            events: {
              onDragStart: 'dragStart',
              onDrag: 'drag',
              onDragEnd: 'dragEnd',
              onDragGroupStart: 'dragGroupStart',
              onDragGroup: 'dragGroup',
              onDragGroupEnd: 'dragGroupEnd',
            },
            render: function (t, e) {
              var n = t.props,
                r = n.throttleDragRotate,
                o = n.zoom,
                i = t.state,
                a = i.dragInfo,
                s = i.beforeOrigin;
              if (!r || !a) return [];
              var u = a.dist;
              if (!u[0] && !u[1]) return [];
              var c = Zn(u),
                l = Y(u, [0, 0]);
              return [
                e.createElement('div', {
                  className: In('line', 'horizontal', 'dragline', 'dashed'),
                  key: 'dragRotateGuideline',
                  style: {
                    width: c + 'px',
                    transform:
                      'translate(' +
                      s[0] +
                      'px, ' +
                      s[1] +
                      'px) rotate(' +
                      l +
                      'rad) scaleY(' +
                      o +
                      ')',
                  },
                }),
              ];
            },
            dragStart: function (t, e) {
              var n = e.datas,
                r = e.parentEvent,
                o = e.parentGesto,
                i = t.state,
                a = i.target;
              if (i.gesto) return !1;
              i.gesto = o || t.targetGesto;
              var s = hr(a);
              (n.datas = {}),
                (n.left = parseFloat(s.left || '') || 0),
                (n.top = parseFloat(s.top || '') || 0),
                (n.bottom = parseFloat(s.bottom || '') || 0),
                (n.right = parseFloat(s.right || '') || 0),
                (n.startValue = [0, 0]),
                Fr(t, e),
                Qr(e, 'translate'),
                (function (t, e) {
                  e.absolutePoses = cr(t.state);
                })(t, n),
                (n.prevDist = [0, 0]),
                (n.prevBeforeDist = [0, 0]),
                (n.isDrag = !1);
              var u = fr(
                t,
                e,
                gn(
                  {
                    set: function (t) {
                      n.startValue = t;
                    },
                  },
                  Ur(e)
                )
              );
              return (
                !1 !== (r || dr(t, 'onDragStart', u))
                  ? ((n.isDrag = !0),
                    (t.state.dragInfo = {
                      startRect: t.getRect(),
                      dist: [0, 0],
                    }))
                  : ((i.gesto = null), (n.isPinch = !1)),
                !!n.isDrag && u
              );
            },
            drag: function (t, e) {
              Nr(e, 'translate');
              var n = e.datas,
                r = e.parentEvent,
                o = e.parentFlag,
                i = e.isPinch,
                a = e.isRequest,
                s = e.distX,
                u = e.distY,
                c = n.isDrag,
                l = n.prevDist,
                f = n.prevBeforeDist,
                p = n.startValue;
              if (c) {
                var d = t.props,
                  h = d.parentMoveable,
                  v = r ? 0 : d.throttleDrag || 0,
                  g = r ? 0 : d.throttleDragRotate || 0,
                  m = !1,
                  y = 0;
                if (!r && g > 0 && (s || u)) {
                  var b = d.startDragRotate || 0,
                    x = U(b + (180 * Y([0, 0], [s, u])) / Math.PI, g) - b,
                    w = u * Math.abs(Math.cos(((x - 90) / 180) * Math.PI)),
                    E = Zn([s * Math.abs(Math.cos((x / 180) * Math.PI)), w]);
                  (y = (x * Math.PI) / 180),
                    (s = E * Math.cos(y)),
                    (u = E * Math.sin(y));
                }
                if (!i && !r && !o && (!g || s || u)) {
                  var S = ei(t, s, u, g, a, n),
                    O = S[0],
                    A = S[1],
                    C = O.isSnap,
                    M = O.isBound,
                    D = O.offset,
                    P = A.isSnap,
                    j = A.isBound;
                  (m = C || P || M || j), (s += D), (u += A.offset);
                }
                (n.passDeltaX = s - (n.passDistX || 0)),
                  (n.passDeltaY = u - (n.passDistY || 0)),
                  (n.passDistX = s),
                  (n.passDistY = u);
                var T = ee(
                    Wr({
                      datas: n,
                      distX: s,
                      distY: u,
                    }),
                    p
                  ),
                  R = ee(
                    Gr({
                      datas: n,
                      distX: s,
                      distY: u,
                    }),
                    p
                  );
                g || m || (Q(R, v), Q(T, v));
                var k = ne(T, p),
                  B = ne(R, p),
                  I = ne(B, l),
                  _ = ne(k, f);
                (n.prevDist = B), (n.prevBeforeDist = k);
                var F = n.left + k[0],
                  N = n.top + k[1],
                  z = n.right - k[0],
                  G = n.bottom - k[1],
                  L = zr(
                    n,
                    'translate(' + R[0] + 'px, ' + R[1] + 'px)',
                    'translate(' + B[0] + 'px, ' + B[1] + 'px)'
                  );
                if (
                  ((t.state.dragInfo.dist = r ? [0, 0] : B),
                  r ||
                    h ||
                    !I.every(function (t) {
                      return !t;
                    }) ||
                    !_.some(function (t) {
                      return !t;
                    }))
                ) {
                  var W = t.state,
                    q = fr(t, e, {
                      transform: L,
                      dist: B,
                      delta: I,
                      translate: R,
                      beforeDist: k,
                      beforeDelta: _,
                      beforeTranslate: T,
                      left: F,
                      top: N,
                      right: z,
                      bottom: G,
                      width: W.width,
                      height: W.height,
                      isPinch: i,
                    });
                  return !r && dr(t, 'onDrag', q), q;
                }
              }
            },
            dragEnd: function (t, e) {
              var n = e.parentEvent,
                r = e.datas,
                o = e.isDrag;
              if (((t.state.gesto = null), (t.state.dragInfo = null), r.isDrag))
                return (
                  (r.isDrag = !1), !n && dr(t, 'onDragEnd', pr(t, e, {})), o
                );
            },
            dragGroupStart: function (t, e) {
              var n = e.datas,
                r = e.clientX,
                o = e.clientY,
                i = this.dragStart(t, e);
              if (!i) return !1;
              var a = Br(t, this, 'dragStart', [r || 0, o || 0], e, !1),
                s = dr(
                  t,
                  'onDragGroupStart',
                  gn(gn({}, i), {
                    targets: t.props.targets,
                    events: a,
                  })
                );
              return (n.isDrag = !1 !== s), !!n.isDrag && i;
            },
            dragGroup: function (t, e) {
              if (e.datas.isDrag) {
                var n = this.drag(t, e),
                  r = e.datas,
                  o = Br(t, this, 'drag', [r.passDeltaX, r.passDeltaY], e, !1);
                if (n) {
                  var i = gn(
                    {
                      targets: t.props.targets,
                      events: o,
                    },
                    n
                  );
                  return dr(t, 'onDragGroup', i), i;
                }
              }
            },
            dragGroupEnd: function (t, e) {
              var n = e.isDrag;
              if (e.datas.isDrag)
                return (
                  this.dragEnd(t, e),
                  Br(t, this, 'dragEnd', [0, 0], e, !1),
                  dr(
                    t,
                    'onDragGroupEnd',
                    pr(t, e, {
                      targets: t.props.targets,
                    })
                  ),
                  n
                );
            },
            request: function (t) {
              var e = {},
                n = t.getRect(),
                r = 0,
                o = 0;
              return {
                isControl: !1,
                requestStart: function () {
                  return {
                    datas: e,
                  };
                },
                request: function (t) {
                  return (
                    'x' in t
                      ? (r = t.x - n.left)
                      : 'deltaX' in t && (r += t.deltaX),
                    'y' in t
                      ? (o = t.y - n.top)
                      : 'deltaY' in t && (o += t.deltaY),
                    {
                      datas: e,
                      distX: r,
                      distY: o,
                    }
                  );
                },
                requestEnd: function () {
                  return {
                    datas: e,
                    isDrag: !0,
                  };
                },
              };
            },
            unset: function (t) {
              t.state.dragInfo = null;
            },
          };
        function si(t, e, n, r) {
          void 0 === r && (r = '');
          var o = t.state,
            i = o.renderPoses,
            a = o.rotation,
            s = o.direction,
            u = t.props,
            c = u.renderDirections,
            l = void 0 === c ? e : c,
            f = u.zoom,
            p = {};
          if (!l) return [];
          var d = s > 0 ? 1 : -1,
            h = !0 === l ? Tn : l,
            v = (a / Math.PI) * 180;
          return (
            h.forEach(function (t) {
              p[t] = !0;
            }),
            h.map(function (t) {
              var e = Rn[t];
              if (!e || !p[t]) return null;
              var o = (U(v, 15) + d * kn[t] + 720) % 180;
              return n.createElement('div', {
                className: In('control', 'direction', t, r),
                'data-rotation': o,
                'data-direction': t,
                key: 'direction-' + t,
                style: nr.apply(
                  void 0,
                  mn(
                    [a, f],
                    e.map(function (t) {
                      return i[t];
                    })
                  )
                ),
              });
            })
          );
        }
        function ui(t, e, n, r, o, i) {
          for (var a = [], s = 6; s < arguments.length; s++)
            a[s - 6] = arguments[s];
          var u = Y(n, r),
            c = e ? U((u / Math.PI) * 180, 15) % 180 : -1;
          return t.createElement('div', {
            key: 'line' + i,
            className: In.apply(void 0, mn(['line', 'direction', e], a)),
            'data-rotation': c,
            'data-line-index': i,
            'data-direction': e,
            style: er(n, r, o, u),
          });
        }
        function ci(t, e) {
          return si(t, Tn, e);
        }
        function li(t, e) {
          return si(t, ['nw', 'ne', 'sw', 'se'], e);
        }
        function fi(t, e, n, r, o, i) {
          var a = t.state.is3d ? 4 : 3,
            s = Un(t.state.rootMatrix, o, a),
            u = ee([i.left, i.top], s);
          (e.startAbsoluteOrigin = u),
            (e.prevDeg = (Y(u, [n, r]) / Math.PI) * 180),
            (e.prevSnapDeg = e.prevDeg),
            (e.startDeg = e.prevDeg),
            (e.loop = 0);
        }
        function pi(t, e, n, r, o, i) {
          var a = n.prevDeg,
            s = Zo(t, e, n.origin, r);
          return (n.prevDeg = s), [s - a, s, i + s];
        }
        function di(t, e, n, r, o, i, a, s) {
          var u = n.prevDeg,
            c = n.prevSnapDeg,
            l = n.startDeg,
            f = n.loop;
          u > r && u > 270 && r < 90
            ? ++n.loop
            : u < r && u < 90 && r > 270 && --n.loop;
          var p = n.loop,
            d = 360 * f + c - l + i,
            h = 360 * p + r - l + i;
          n.prevDeg = h - 360 * p + l - i;
          var v = o * ((h = U(h, a)) - i);
          return (
            s && (h = (v = Zo(t, e, n.origin, v)) / o + i),
            (n.prevSnapDeg = h - 360 * p + l - i),
            [o * (h - d), v, i + v]
          );
        }
        function hi(t, e, n, r, o, i, a, s) {
          return di(
            t,
            e,
            n,
            (Y(n.startAbsoluteOrigin, [o, i]) / Math.PI) * 180,
            r,
            a,
            s,
            !0
          );
        }
        function vi(t, e) {
          if (e.isRequest) return 'rotatable' === e.requestAble;
          var n = e.inputEvent.target;
          if (J(n, In('rotation-control'))) return !0;
          var r = t.props.rotationTarget;
          return (
            !!r &&
            Dr(r, !0).some(function (t) {
              return !!t && (n === t || n.contains(t));
            })
          );
        }
        var gi = {
            name: 'rotatable',
            canPinch: !0,
            props: {
              rotatable: Boolean,
              rotationPosition: String,
              throttleRotate: Number,
              renderDirections: Object,
              rotationTarget: Object,
            },
            events: {
              onRotateStart: 'rotateStart',
              onRotate: 'rotate',
              onRotateEnd: 'rotateEnd',
              onRotateGroupStart: 'rotateGroupStart',
              onRotateGroup: 'rotateGroup',
              onRotateGroupEnd: 'rotateGroupEnd',
            },
            css: [
              '.rotation {\n            position: absolute;\n            height: 40px;\n            width: 1px;\n            transform-origin: 50% 100%;\n            height: calc(40px * var(--zoom));\n            top: auto;\n            left: 0;\n            bottom: 100%;\n            will-change: transform;\n        }\n        .rotation .rotation-line {\n            display: block;\n            width: 100%;\n            height: 100%;\n            transform-origin: 50% 50%;\n        }\n        .rotation .rotation-control {\n            border-color: #4af;\n            border-color: var(--moveable-color);\n            background:#fff;\n            cursor: alias;\n        }',
            ],
            render: function (t, e) {
              var n = t.props,
                r = n.rotatable,
                o = n.rotationPosition,
                i = n.zoom,
                a = n.renderDirections,
                s = t.state,
                u = s.renderPoses,
                c = s.direction;
              if (!r) return null;
              var l = (function (t, e, n) {
                  var r = e[0],
                    o = e[1],
                    i = e[2],
                    a = e[3];
                  if ('none' !== t) {
                    var s = (t || 'top').split('-'),
                      u = s[0],
                      c = s[1],
                      l = [r, o];
                    'left' === u
                      ? (l = [i, r])
                      : 'right' === u
                      ? (l = [o, a])
                      : 'bottom' === u && (l = [a, i]);
                    var f = [(l[0][0] + l[1][0]) / 2, (l[0][1] + l[1][1]) / 2],
                      p = or(l, n);
                    if (c) {
                      var d = 'top' === c || 'left' === c,
                        h = 'bottom' === u || 'left' === u;
                      f = l[(d && !h) || (!d && h) ? 0 : 1];
                    }
                    return [f, p];
                  }
                })(o, u, c),
                f = [];
              if (l) {
                var p = l[0],
                  d = l[1];
                f.push(
                  e.createElement(
                    'div',
                    {
                      key: 'rotation',
                      className: In('rotation'),
                      style: {
                        transform:
                          'translate(-50%) translate(' +
                          p[0] +
                          'px, ' +
                          p[1] +
                          'px) rotate(' +
                          d +
                          'rad)',
                      },
                    },
                    e.createElement('div', {
                      className: In('line rotation-line'),
                      style: {
                        transform: 'scaleX(' + i + ')',
                      },
                    }),
                    e.createElement('div', {
                      className: In('control rotation-control'),
                      style: {
                        transform: 'translate(0.5px) scale(' + i + ')',
                      },
                    })
                  )
                );
              }
              return a && f.push.apply(f, si(t, [], e)), f;
            },
            dragControlCondition: vi,
            dragControlStart: function (t, e) {
              var n = e.datas,
                r = e.clientX,
                o = e.clientY,
                i = e.parentRotate,
                a = e.parentFlag,
                s = e.isPinch,
                u = e.isRequest,
                c = t.state,
                l = c.target,
                f = c.left,
                p = c.top,
                d = c.origin,
                h = c.beforeOrigin,
                v = c.direction,
                g = c.beforeDirection,
                m = c.targetTransform,
                y = c.moveableClientRect;
              if (!u && !l) return !1;
              var b = t.getRect();
              if (
                ((n.rect = b),
                (n.transform = m),
                (n.left = f),
                (n.top = p),
                (n.fixedPosition = eo(t, to(t))),
                (n.absoluteInfo = {
                  origin: b.origin,
                  startValue: b.rotation,
                }),
                fi(t, n.absoluteInfo, r, o, d, y),
                u || s || a)
              ) {
                var x = i || 0;
                (n.beforeInfo = {
                  origin: b.beforeOrigin,
                  prevDeg: x,
                  startDeg: x,
                  prevSnapDeg: x,
                  loop: 0,
                }),
                  (n.afterInfo = {
                    origin: b.origin,
                    prevDeg: x,
                    startDeg: x,
                    prevSnapDeg: x,
                    loop: 0,
                  });
              } else
                (n.beforeInfo = {
                  origin: b.beforeOrigin,
                }),
                  (n.afterInfo = {
                    origin: b.origin,
                  }),
                  fi(t, n.beforeInfo, r, o, h, y),
                  fi(t, n.afterInfo, r, o, d, y);
              (n.direction = v),
                (n.beforeDirection = g),
                (n.startValue = 0),
                (n.datas = {}),
                Qr(e, 'rotate');
              var w = fr(
                  t,
                  e,
                  gn(
                    gn(
                      {
                        set: function (t) {
                          n.startValue = (t * Math.PI) / 180;
                        },
                      },
                      Ur(e)
                    ),
                    {
                      dragStart: ai.dragStart(t, new Rr().dragStart([0, 0], e)),
                    }
                  )
                ),
                E = dr(t, 'onRotateStart', w);
              return (
                (n.isRotate = !1 !== E),
                (t.state.snapRenderInfo = {
                  request: e.isRequest,
                }),
                !!n.isRotate && w
              );
            },
            dragControl: function (t, e) {
              var n,
                r,
                o,
                i,
                a,
                s,
                u,
                c,
                l,
                f = e.datas,
                p = e.clientX,
                d = e.clientY,
                h = e.parentRotate,
                v = e.parentFlag,
                g = e.isPinch,
                m = e.groupDelta,
                y = f.beforeDirection,
                b = f.beforeInfo,
                x = f.afterInfo,
                w = f.absoluteInfo,
                E = f.isRotate,
                S = f.startValue,
                O = f.rect;
              if (E) {
                Nr(e, 'rotate');
                var A,
                  C,
                  M,
                  D,
                  P,
                  j,
                  T,
                  R,
                  k,
                  B = (function (t) {
                    return $n(t.datas.beforeTransform, [50, 50], 100, 100)
                      .direction;
                  })(e),
                  I = y * B,
                  _ = t.props,
                  F = _.throttleRotate,
                  N = void 0 === F ? 0 : F,
                  z = _.parentMoveable,
                  G = (180 / Math.PI) * S,
                  L = w.startValue;
                if (!v && 'parentDist' in e) {
                  var W = e.parentDist;
                  (A = (n = pi(t, O, x, W, 0, G))[0]),
                    (C = n[1]),
                    (M = n[2]),
                    (D = (r = pi(t, O, b, W, 0, G))[0]),
                    (P = r[1]),
                    (j = r[2]),
                    (T = (o = pi(t, O, w, W, 0, L))[0]),
                    (R = o[1]),
                    (k = o[2]);
                } else
                  g || v
                    ? ((A = (i = di(t, O, x, h, I, G, N))[0]),
                      (C = i[1]),
                      (M = i[2]),
                      (D = (a = di(t, O, b, h, y, G, N))[0]),
                      (P = a[1]),
                      (j = a[2]),
                      (T = (s = di(t, O, w, h, I, L, N))[0]),
                      (R = s[1]),
                      (k = s[2]))
                    : ((A = (u = hi(t, O, x, I, p, d, G, N))[0]),
                      (C = u[1]),
                      (M = u[2]),
                      (D = (c = hi(t, O, b, y, p, d, G, N))[0]),
                      (P = c[1]),
                      (j = c[2]),
                      (T = (l = hi(t, O, w, I, p, d, L, N))[0]),
                      (R = l[1]),
                      (k = l[2]));
                if (T || A || D || z) {
                  var q = zr(f, 'rotate(' + M + 'deg)', 'rotate(' + C + 'deg)'),
                    H = (function (t, e, n, r) {
                      return Zr(t, 'rotate(' + e + 'deg)', to(t), n, r);
                    })(t, C, f.fixedPosition, f),
                    Y = ne(ee(m || [0, 0], H), f.prevInverseDist || [0, 0]);
                  f.prevInverseDist = H;
                  var V = fr(
                    t,
                    e,
                    gn(
                      {
                        delta: A,
                        dist: C,
                        rotate: M,
                        beforeDist: P,
                        beforeDelta: D,
                        beforeRotate: j,
                        absoluteDist: R,
                        absoluteDelta: T,
                        absoluteRotate: k,
                        isPinch: !!g,
                      },
                      $r(t, q, Y, g, e)
                    )
                  );
                  return dr(t, 'onRotate', V), V;
                }
              }
            },
            dragControlEnd: function (t, e) {
              var n = e.datas,
                r = e.isDrag;
              return (
                !!n.isRotate &&
                ((n.isRotate = !1), dr(t, 'onRotateEnd', pr(t, e, {})), r)
              );
            },
            dragGroupControlCondition: vi,
            dragGroupControlStart: function (t, e) {
              var n = e.datas,
                r = t.state,
                o = r.left,
                i = r.top,
                a = r.beforeOrigin,
                s = this.dragControlStart(t, e);
              if (!s) return !1;
              s.set(n.beforeDirection * t.rotation);
              var u = Ir(t, this, 'dragControlStart', e, function (t, e) {
                  var n = t.state,
                    r = n.left,
                    s = n.top,
                    u = n.beforeOrigin,
                    c = ee(ne([r, s], [o, i]), ne(u, a));
                  return (
                    (e.datas.groupClient = c),
                    gn(gn({}, e), {
                      parentRotate: 0,
                    })
                  );
                }),
                c = dr(
                  t,
                  'onRotateGroupStart',
                  gn(gn({}, s), {
                    targets: t.props.targets,
                    events: u,
                  })
                );
              return (n.isRotate = !1 !== c), !!n.isRotate && s;
            },
            dragGroupControl: function (t, e) {
              var n = e.datas;
              if (n.isRotate) {
                var r = this.dragControl(t, e);
                if (r) {
                  var o = n.beforeDirection,
                    i = r.beforeDist,
                    a = (r.beforeDelta / 180) * Math.PI,
                    s = Ir(t, this, 'dragControl', e, function (t, e) {
                      var n = e.datas.groupClient,
                        r = n[0],
                        s = n[1],
                        u = le([r, s], a * o),
                        c = u[0],
                        l = u[1],
                        f = [c - r, l - s];
                      return (
                        (e.datas.groupClient = [c, l]),
                        gn(gn({}, e), {
                          parentRotate: i,
                          groupDelta: f,
                        })
                      );
                    });
                  t.rotation = o * r.beforeRotate;
                  var u = gn(
                    {
                      targets: t.props.targets,
                      events: s,
                      set: function (e) {
                        t.rotation = e;
                      },
                    },
                    r
                  );
                  return dr(t, 'onRotateGroup', u), u;
                }
              }
            },
            dragGroupControlEnd: function (t, e) {
              var n = e.isDrag;
              if (e.datas.isRotate)
                return (
                  this.dragControlEnd(t, e),
                  Ir(t, this, 'dragControlEnd', e),
                  dr(
                    t,
                    'onRotateGroupEnd',
                    pr(t, e, {
                      targets: t.props.targets,
                    })
                  ),
                  n
                );
            },
            request: function (t) {
              var e = {},
                n = 0,
                r = t.getRotation();
              return {
                isControl: !0,
                requestStart: function () {
                  return {
                    datas: e,
                  };
                },
                request: function (t) {
                  return (
                    'deltaRotate' in t
                      ? (n += t.deltaRotate)
                      : 'rotate' in t && (n = t.rotate - r),
                    {
                      datas: e,
                      parentDist: n,
                    }
                  );
                },
                requestEnd: function () {
                  return {
                    datas: e,
                    isDrag: !0,
                  };
                },
              };
            },
          },
          mi = {
            name: 'resizable',
            ableGroup: 'size',
            canPinch: !0,
            props: {
              resizable: Boolean,
              throttleResize: Number,
              renderDirections: Array,
              keepRatio: Boolean,
            },
            events: {
              onResizeStart: 'resizeStart',
              onResize: 'resize',
              onResizeEnd: 'resizeEnd',
              onResizeGroupStart: 'resizeGroupStart',
              onResizeGroup: 'resizeGroup',
              onResizeGroupEnd: 'resizeGroupEnd',
            },
            render: function (t, e) {
              var n = t.props,
                r = n.resizable,
                o = n.edge;
              if (r) return o ? li(t, e) : ci(t, e);
            },
            dragControlCondition: Ar,
            dragControlStart: function (t, e) {
              var n,
                r = e.inputEvent,
                o = e.isPinch,
                i = e.parentDirection,
                a = e.datas,
                s = e.parentFlag,
                u = i || (o ? [0, 0] : sr(r.target)),
                c = t.state,
                l = c.target,
                f = c.width,
                p = c.height;
              if (!u || !l) return !1;
              !o && Fr(t, e),
                (a.datas = {}),
                (a.direction = u),
                (a.startOffsetWidth = f),
                (a.startOffsetHeight = p),
                (a.prevWidth = 0),
                (a.prevHeight = 0),
                (n = (function (t) {
                  var e = hr(t);
                  return [parseFloat(e.width), parseFloat(e.height)];
                })(l)),
                (a.startWidth = n[0]),
                (a.startHeight = n[1]);
              var d = [
                Math.max(0, f - a.startWidth),
                Math.max(0, p - a.startHeight),
              ];
              if (((a.minSize = d), (a.maxSize = [1 / 0, 1 / 0]), !s)) {
                var h = hr(l),
                  v = h.position,
                  g = h.minWidth,
                  m = h.minHeight,
                  y = h.maxWidth,
                  b = h.maxHeight,
                  x = 'static' === v || 'relative' === v,
                  w = x ? l.parentElement : l.offsetParent,
                  E = f,
                  S = p;
                if (w && ((E = w.clientWidth), (S = w.clientHeight), x)) {
                  var O = hr(w);
                  (E -= parseFloat(O.paddingLeft) || 0),
                    (S -= parseFloat(O.paddingTop) || 0);
                }
                (a.minSize = ee([L(g, E) || 0, L(m, S) || 0], d)),
                  (a.maxSize = ee([L(y, E) || 1 / 0, L(b, S) || 1 / 0], d));
              }
              var A = t.props.transformOrigin || '% %';
              function C(t) {
                a.ratio = t && isFinite(t) ? t : 0;
              }
              function D(e) {
                (a.fixedDirection = e), (a.fixedPosition = ro(t, e));
              }
              (a.transformOrigin = A && M(A) ? A.split(' ') : A),
                (a.isWidth = (!u[0] && !u[1]) || u[0] || !u[1]),
                C(f / p),
                D([-u[0], -u[1]]);
              var P = fr(t, e, {
                direction: u,
                set: function (t) {
                  var e = t[0],
                    n = t[1];
                  (a.startWidth = e), (a.startHeight = n);
                },
                setMin: function (t) {
                  a.minSize = t;
                },
                setMax: function (t) {
                  a.maxSize = [t[0] || 1 / 0, t[1] || 1 / 0];
                },
                setRatio: C,
                setFixedDirection: D,
                setOrigin: function (t) {
                  a.transformOrigin = t;
                },
                dragStart: ai.dragStart(t, new Rr().dragStart([0, 0], e)),
              });
              return (
                !1 !== dr(t, 'onResizeStart', P) &&
                  ((a.isResize = !0),
                  (t.state.snapRenderInfo = {
                    request: e.isRequest,
                    direction: u,
                  })),
                !!a.isResize && P
              );
            },
            dragControl: function (t, e) {
              var n,
                r = e.datas,
                o = e.distX,
                i = e.distY,
                a = e.parentFlag,
                s = e.isPinch,
                u = e.parentDistance,
                c = e.parentScale,
                l = e.parentKeepRatio,
                f = e.dragClient,
                p = e.parentDist,
                d = e.isRequest,
                h = r.isResize,
                v = r.transformOrigin,
                g = r.fixedDirection,
                m = r.startWidth,
                y = r.startHeight,
                b = r.prevWidth,
                x = r.prevHeight,
                w = r.minSize,
                E = r.maxSize,
                S = r.ratio,
                O = r.isWidth,
                A = r.startOffsetWidth,
                C = r.startOffsetHeight;
              if (h) {
                var M = t.props,
                  D = M.throttleResize,
                  P = void 0 === D ? 0 : D,
                  j = M.parentMoveable,
                  T = M.snapThreshold,
                  R = void 0 === T ? 5 : T,
                  k = r.direction,
                  B = k,
                  I = 0,
                  _ = 0;
                k[0] || k[1] || (B = [1, 1]);
                var F = S && (t.props.keepRatio || l),
                  N = f;
                if ((f || (N = !a && s ? ro(t, [0, 0]) : r.fixedPosition), p))
                  (I = p[0]),
                    (_ = p[1]),
                    F && (I ? _ || (_ = I / S) : (I = _ * S));
                else if (c) (I = (c[0] - 1) * A), (_ = (c[1] - 1) * C);
                else if (s) u && ((I = u), (_ = (u * C) / A));
                else {
                  var z = qr({
                    datas: r,
                    distX: o,
                    distY: i,
                  });
                  if (((I = B[0] * z[0]), (_ = B[1] * z[1]), F && A && C)) {
                    var G = Y([0, 0], z),
                      L = Y([0, 0], B),
                      W = Zn([I, _]),
                      H = Math.cos(G - L) * W;
                    if (B[0])
                      if (B[1]) {
                        var V = 2 * B[0] * A,
                          X = 2 * B[1] * C,
                          Q = Zn([V + z[0], X + z[1]]) - Zn([V, X]),
                          J = Y([0, 0], [S, 1]);
                        (I = Math.cos(J) * Q), (_ = Math.sin(J) * Q);
                      } else _ = (I = H) * S;
                    else I = (_ = H) / S;
                  } else if (!F) {
                    var K = mn(k);
                    A || (z[0] < 0 ? (K[0] = -1) : z[0] > 0 && (K[0] = 1)),
                      C || (z[1] < 0 ? (K[1] = -1) : z[1] > 0 && (K[1] = 1)),
                      (k = K),
                      (I = (B = K)[0] * z[0]),
                      (_ = B[1] * z[1]);
                  }
                }
                var $ = B[0] || F ? Math.max(A + I, Mn) : A,
                  Z = B[1] || F ? Math.max(C + _, Mn) : C;
                F && A && C && (O ? (Z = $ / S) : ($ = Z * S));
                var tt = [0, 0];
                if (
                  (s ||
                    (tt = (function (t, e, n, r, o, i, a) {
                      if (!Wo(t, 'resizable')) return [0, 0];
                      var s = t.state,
                        u = s.allMatrix,
                        c = s.is3d;
                      return $o(
                        t,
                        function (t, i) {
                          return Ho(u, e + t, n + i, o, r, c);
                        },
                        e,
                        n,
                        r,
                        o,
                        i,
                        a
                      );
                    })(t, $, Z, k, N, d, r)),
                  p && (!p[0] && (tt[0] = 0), !p[1] && (tt[1] = 0)),
                  F)
                ) {
                  B[0] &&
                    B[1] &&
                    tt[0] &&
                    tt[1] &&
                    (Math.abs(tt[0]) > Math.abs(tt[1])
                      ? (tt[1] = 0)
                      : (tt[0] = 0));
                  var et = !tt[0] && !tt[1];
                  et && (O ? ($ = U($, P)) : (Z = U(Z, P))),
                    (B[0] && !B[1]) || (tt[0] && !tt[1]) || (et && O)
                      ? (Z = ($ += tt[0]) / S)
                      : ((!B[0] && B[1]) || (!tt[0] && tt[1]) || (et && !O)) &&
                        ($ = (Z += tt[1]) * S);
                } else
                  A + I < -R && (tt[0] = 0),
                    A + _ < -R && (tt[1] = 0),
                    ($ += tt[0]),
                    (Z += tt[1]),
                    tt[0] || ($ = U($, P)),
                    tt[1] || (Z = U(Z, P));
                ($ = (n = q([$, Z], w, E, F))[0]), (Z = n[1]);
                var nt = [
                  (I = ($ = Math.round($)) - A) - b,
                  (_ = (Z = Math.round(Z)) - C) - x,
                ];
                (r.prevWidth = I), (r.prevHeight = _);
                var rt = no(t, $, Z, g, N, v);
                if (
                  j ||
                  !nt.every(function (t) {
                    return !t;
                  }) ||
                  !rt.every(function (t) {
                    return !t;
                  })
                ) {
                  var ot = fr(t, e, {
                    width: m + I,
                    height: y + _,
                    offsetWidth: $,
                    offsetHeight: Z,
                    direction: k,
                    dist: [I, _],
                    delta: nt,
                    isPinch: !!s,
                    drag: ai.drag(t, Tr(e, t.state, rt, !!s, !1)),
                  });
                  return dr(t, 'onResize', ot), ot;
                }
              }
            },
            dragControlAfter: function (t, e) {
              var n = e.datas,
                r = n.isResize,
                o = n.startOffsetWidth,
                i = n.startOffsetHeight,
                a = n.prevWidth,
                s = n.prevHeight;
              if (r) {
                var u = t.state,
                  c = u.width - (o + a),
                  l = u.height - (i + s),
                  f = Math.abs(c) > 3,
                  p = Math.abs(l) > 3;
                return (
                  f &&
                    ((n.startWidth += c),
                    (n.startOffsetWidth += c),
                    (n.prevWidth += c)),
                  p &&
                    ((n.startHeight += l),
                    (n.startOffsetHeight += l),
                    (n.prevHeight += l)),
                  f || p ? (this.dragControl(t, e), !0) : void 0
                );
              }
            },
            dragControlEnd: function (t, e) {
              var n = e.datas,
                r = e.isDrag;
              return (
                !!n.isResize &&
                ((n.isResize = !1), dr(t, 'onResizeEnd', pr(t, e, {})), r)
              );
            },
            dragGroupControlCondition: Ar,
            dragGroupControlStart: function (t, e) {
              var n = e.datas,
                r = this.dragControlStart(t, e);
              if (!r) return !1;
              var o = kr(t, 'resizable', e);
              function i(e, r) {
                var o = n.fixedDirection,
                  i = n.fixedPosition,
                  a = ro(e, o),
                  s = ie(
                    de((-t.rotation / 180) * Math.PI, 3),
                    [a[0] - i[0], a[1] - i[1], 1],
                    3
                  ),
                  u = s[0],
                  c = s[1];
                return (r.datas.originalX = u), (r.datas.originalY = c), r;
              }
              var a = Ir(t, this, 'dragControlStart', e, function (t, e) {
                  return i(t, e);
                }),
                s = gn(gn({}, r), {
                  targets: t.props.targets,
                  events: a,
                  setFixedDirection: function (e) {
                    r.setFixedDirection(e),
                      a.forEach(function (n, r) {
                        n.setFixedDirection(e), i(t.moveables[r], o[r]);
                      });
                  },
                }),
                u = dr(t, 'onResizeGroupStart', s);
              return (n.isResize = !1 !== u), !!n.isResize && r;
            },
            dragGroupControl: function (t, e) {
              var n = e.datas;
              if (n.isResize) {
                var r = this.dragControl(t, e);
                if (r) {
                  var o = r.offsetWidth,
                    i = r.offsetHeight,
                    a = r.dist,
                    s = t.props.keepRatio,
                    u = [o / (o - a[0]), i / (i - a[1])],
                    c = n.fixedPosition,
                    l = Ir(t, this, 'dragControl', e, function (e, n) {
                      var r = ie(
                          de((t.rotation / 180) * Math.PI, 3),
                          [
                            n.datas.originalX * u[0],
                            n.datas.originalY * u[1],
                            1,
                          ],
                          3
                        ),
                        o = r[0],
                        i = r[1];
                      return gn(gn({}, n), {
                        parentDist: null,
                        parentScale: u,
                        dragClient: ee(c, [o, i]),
                        parentKeepRatio: s,
                      });
                    }),
                    f = gn(
                      {
                        targets: t.props.targets,
                        events: l,
                      },
                      r
                    );
                  return dr(t, 'onResizeGroup', f), f;
                }
              }
            },
            dragGroupControlEnd: function (t, e) {
              var n = e.isDrag;
              if (e.datas.isResize)
                return (
                  this.dragControlEnd(t, e),
                  Ir(t, this, 'dragControlEnd', e),
                  dr(
                    t,
                    'onResizeGroupEnd',
                    pr(t, e, {
                      targets: t.props.targets,
                    })
                  ),
                  n
                );
            },
            request: function (t) {
              var e = {},
                n = 0,
                r = 0,
                o = t.getRect();
              return {
                isControl: !0,
                requestStart: function (t) {
                  return {
                    datas: e,
                    parentDirection: t.direction || [1, 1],
                  };
                },
                request: function (t) {
                  return (
                    'offsetWidth' in t
                      ? (n = t.offsetWidth - o.offsetWidth)
                      : 'deltaWidth' in t && (n += t.deltaWidth),
                    'offsetHeight' in t
                      ? (r = t.offsetHeight - o.offsetHeight)
                      : 'deltaHeight' in t && (r += t.deltaHeight),
                    {
                      datas: e,
                      parentDist: [n, r],
                    }
                  );
                },
                requestEnd: function () {
                  return {
                    datas: e,
                    isDrag: !0,
                  };
                },
              };
            },
          },
          yi = {
            name: 'scalable',
            ableGroup: 'size',
            canPinch: !0,
            props: {
              scalable: Boolean,
              throttleScale: Number,
              renderDirections: String,
              keepRatio: Boolean,
            },
            events: {
              onScaleStart: 'scaleStart',
              onScale: 'scale',
              onScaleEnd: 'scaleEnd',
              onScaleGroupStart: 'scaleGroupStart',
              onScaleGroup: 'scaleGroup',
              onScaleGroupEnd: 'scaleGroupEnd',
            },
            render: function (t, e) {
              var n = t.props,
                r = n.resizable,
                o = n.scalable,
                i = n.edge;
              if (!r && o) return i ? li(t, e) : ci(t, e);
            },
            dragControlCondition: Ar,
            dragControlStart: function (t, e) {
              var n = e.datas,
                r = e.isPinch,
                o = e.inputEvent,
                i = e.parentDirection || (r ? [0, 0] : sr(o.target)),
                a = t.state,
                s = a.width,
                u = a.height,
                c = a.targetTransform,
                l = a.target,
                f = a.pos1,
                p = a.pos2,
                d = a.pos4;
              if (!i || !l) return !1;
              r || Fr(t, e),
                (n.datas = {}),
                (n.transform = c),
                (n.prevDist = [1, 1]),
                (n.direction = i),
                (n.width = s),
                (n.height = u),
                (n.startValue = [1, 1]);
              var h = X(f, p),
                v = X(p, d),
                g = (!i[0] && !i[1]) || i[0] || !i[1];
              function m(t) {
                n.ratio = t && isFinite(t) ? t : 0;
              }
              function y(e) {
                (n.fixedDirection = e), (n.fixedPosition = ro(t, e));
              }
              (n.scaleWidth = h),
                (n.scaleHeight = v),
                (n.scaleXRatio = h / s),
                (n.scaleYRatio = v / u),
                Qr(e, 'scale'),
                (n.isWidth = g),
                m(X(f, p) / X(p, d)),
                y([-i[0], -i[1]]);
              var b = fr(
                t,
                e,
                gn(
                  gn(
                    {
                      direction: i,
                      set: function (t) {
                        n.startValue = t;
                      },
                      setRatio: m,
                      setFixedDirection: y,
                    },
                    Ur(e)
                  ),
                  {
                    dragStart: ai.dragStart(t, new Rr().dragStart([0, 0], e)),
                  }
                )
              );
              return (
                !1 !== dr(t, 'onScaleStart', b) &&
                  ((n.isScale = !0),
                  (t.state.snapRenderInfo = {
                    request: e.isRequest,
                    direction: i,
                  })),
                !!n.isScale && b
              );
            },
            dragControl: function (t, e) {
              Nr(e, 'scale');
              var n = e.datas,
                r = e.distX,
                o = e.distY,
                i = e.parentScale,
                a = e.parentDistance,
                s = e.parentKeepRatio,
                u = e.parentFlag,
                c = e.isPinch,
                l = e.dragClient,
                f = e.parentDist,
                p = e.isRequest,
                d = n.prevDist,
                h = n.direction,
                v = n.width,
                g = n.height,
                m = n.isScale,
                y = n.startValue,
                b = n.isWidth,
                x = n.ratio,
                w = n.fixedDirection,
                E = n.scaleXRatio,
                S = n.scaleYRatio;
              if (!m) return !1;
              var O = t.props,
                A = O.throttleScale,
                M = O.parentMoveable,
                D = h;
              h[0] || h[1] || (D = [1, 1]);
              var P = x && (t.props.keepRatio || s),
                j = t.state,
                T = 1,
                R = 1,
                k = l;
              if ((l || (k = !u && c ? ro(t, [0, 0]) : n.fixedPosition), f))
                (T = (v + f[0]) / v), (R = (g + f[1]) / g);
              else if (i) (T = i[0]), (R = i[1]);
              else if (c) a && ((T = (v + a) / v), (R = (g + (a * g) / v) / g));
              else {
                var B = qr({
                    datas: n,
                    distX: r,
                    distY: o,
                  }),
                  I = D[0] * B[0] * E,
                  _ = D[1] * B[1] * S;
                if (P && v && g)
                  if (D[0])
                    if (D[1]) {
                      var F = Zn([I, _]),
                        N = Y([0, 0], B),
                        z = Y([0, 0], D),
                        G = Math.cos(N - z) * F,
                        L = Y([0, 0], [x, 1]);
                      (I = Math.cos(L) * G), (_ = Math.sin(L) * G);
                    } else _ = I / x;
                  else I = _ * x;
                (T = (v + I / E) / v), (R = (g + _ / S) / g);
              }
              (T = D[0] || P ? T * y[0] : y[0]),
                (R = D[1] || P ? R * y[1] : y[1]),
                0 === T && (T = (d[0] > 0 ? 1 : -1) * Dn),
                0 === R && (R = (d[1] > 0 ? 1 : -1) * Dn);
              var W = [T / y[0], R / y[1]],
                q = [T, R];
              if (!c && t.props.groupable) {
                var H = (j.snapRenderInfo || {}).direction;
                C(H) &&
                  (H[0] || H[1]) &&
                  (j.snapRenderInfo = {
                    direction: h,
                    request: e.isRequest,
                  });
              }
              var V = [0, 0];
              if ((c || (V = ti(t, W, h, p, n)), P)) {
                D[0] &&
                  D[1] &&
                  V[0] &&
                  V[1] &&
                  (Math.abs(V[0] * v) > Math.abs(V[1] * g)
                    ? (V[1] = 0)
                    : (V[0] = 0));
                var X = !V[0] && !V[1];
                if (
                  (X &&
                    (b
                      ? (W[0] = U(W[0] * y[0], A) / y[0])
                      : (W[1] = U(W[1] * y[1], A) / y[1])),
                  (D[0] && !D[1]) || (V[0] && !V[1]) || (X && b))
                ) {
                  W[0] += V[0];
                  var Q = (v * W[0] * y[0]) / x;
                  W[1] = Q / g / y[1];
                } else if ((!D[0] && D[1]) || (!V[0] && V[1]) || (X && !b)) {
                  W[1] += V[1];
                  var J = g * W[1] * y[1] * x;
                  W[0] = J / v / y[0];
                }
              } else
                (W[0] += V[0]),
                  (W[1] += V[1]),
                  V[0] || (W[0] = U(W[0] * y[0], A) / y[0]),
                  V[1] || (W[1] = U(W[1] * y[1], A) / y[1]);
              0 === W[0] && (W[0] = (d[0] > 0 ? 1 : -1) * Dn),
                0 === W[1] && (W[1] = (d[1] > 0 ? 1 : -1) * Dn);
              var K,
                $,
                Z = [W[0] / d[0], W[1] / d[1]];
              ($ = y), (q = [(K = W)[0] * $[0], K[1] * $[1]]);
              var tt = (function (t, e, n, r, o) {
                  return Zr(t, 'scale(' + e.join(', ') + ')', n, r, o);
                })(t, W, w, k, n),
                et = ne(tt, n.prevInverseDist || [0, 0]);
              if (
                ((n.prevDist = W),
                (n.prevInverseDist = tt),
                T === d[0] &&
                  R === d[1] &&
                  et.every(function (t) {
                    return !t;
                  }) &&
                  !M)
              )
                return !1;
              var nt = zr(
                  n,
                  'scale(' + q.join(', ') + ')',
                  'scale(' + W.join(', ') + ')'
                ),
                rt = fr(
                  t,
                  e,
                  gn(
                    {
                      offsetWidth: v,
                      offsetHeight: g,
                      direction: h,
                      scale: q,
                      dist: W,
                      delta: Z,
                      isPinch: !!c,
                    },
                    $r(t, nt, et, c, e)
                  )
                );
              return dr(t, 'onScale', rt), rt;
            },
            dragControlEnd: function (t, e) {
              var n = e.datas,
                r = e.isDrag;
              return (
                !!n.isScale &&
                ((n.isScale = !1), dr(t, 'onScaleEnd', pr(t, e, {})), r)
              );
            },
            dragGroupControlCondition: Ar,
            dragGroupControlStart: function (t, e) {
              var n = e.datas,
                r = this.dragControlStart(t, e);
              if (!r) return !1;
              var o = kr(t, 'resizable', e);
              function i(e, r) {
                var o = n.fixedDirection,
                  i = n.fixedPosition,
                  a = ro(e, o),
                  s = ie(
                    de((-t.rotation / 180) * Math.PI, 3),
                    [a[0] - i[0], a[1] - i[1], 1],
                    3
                  ),
                  u = s[0],
                  c = s[1];
                return (r.datas.originalX = u), (r.datas.originalY = c), r;
              }
              n.moveableScale = t.scale;
              var a = Ir(t, this, 'dragControlStart', e, function (t, e) {
                  return i(t, e);
                }),
                s = gn(gn({}, r), {
                  targets: t.props.targets,
                  events: a,
                  setFixedDirection: function (e) {
                    r.setFixedDirection(e),
                      a.forEach(function (n, r) {
                        n.setFixedDirection(e), i(t.moveables[r], o[r]);
                      });
                  },
                }),
                u = dr(t, 'onScaleGroupStart', s);
              return (n.isScale = !1 !== u), !!n.isScale && s;
            },
            dragGroupControl: function (t, e) {
              var n = e.datas;
              if (n.isScale) {
                var r = this.dragControl(t, e);
                if (r) {
                  var o = n.moveableScale;
                  t.scale = [r.scale[0] * o[0], r.scale[1] * o[1]];
                  var i = t.props.keepRatio,
                    a = r.dist,
                    s = r.scale,
                    u = n.fixedPosition,
                    c = Ir(t, this, 'dragControl', e, function (e, n) {
                      var r = ie(
                          de((t.rotation / 180) * Math.PI, 3),
                          [
                            n.datas.originalX * a[0],
                            n.datas.originalY * a[1],
                            1,
                          ],
                          3
                        ),
                        o = r[0],
                        c = r[1];
                      return gn(gn({}, n), {
                        parentDist: null,
                        parentScale: s,
                        parentKeepRatio: i,
                        dragClient: ee(u, [o, c]),
                      });
                    }),
                    l = gn(
                      {
                        targets: t.props.targets,
                        events: c,
                      },
                      r
                    );
                  return dr(t, 'onScaleGroup', l), l;
                }
              }
            },
            dragGroupControlEnd: function (t, e) {
              var n = e.isDrag;
              if (e.datas.isScale)
                return (
                  this.dragControlEnd(t, e),
                  Ir(t, this, 'dragControlEnd', e),
                  dr(
                    t,
                    'onScaleGroupEnd',
                    pr(t, e, {
                      targets: t.props.targets,
                    })
                  ),
                  n
                );
            },
            request: function () {
              var t = {},
                e = 0,
                n = 0;
              return {
                isControl: !0,
                requestStart: function (e) {
                  return {
                    datas: t,
                    parentDirection: e.direction || [1, 1],
                  };
                },
                request: function (r) {
                  return (
                    (e += r.deltaWidth),
                    (n += r.deltaHeight),
                    {
                      datas: t,
                      parentDist: [e, n],
                    }
                  );
                },
                requestEnd: function () {
                  return {
                    datas: t,
                    isDrag: !0,
                  };
                },
              };
            },
          };
        function bi(t, e) {
          return t.map(function (t, n) {
            return (r = t), (o = e[n]), (r * (a = 2) + o * (i = 1)) / (i + a);
            var r, o, i, a;
          });
        }
        function xi(t, e, n) {
          var r = Y(t, e),
            o = Y(t, n) - r;
          return o >= 0 ? o : o + 2 * Math.PI;
        }
        var wi = {
            name: 'warpable',
            ableGroup: 'size',
            props: {
              warpable: Boolean,
              renderDirections: Array,
            },
            events: {
              onWarpStart: 'warpStart',
              onWarp: 'warp',
              onWarpEnd: 'warpEnd',
            },
            render: function (t, e) {
              var n = t.props,
                r = n.resizable,
                o = n.scalable,
                i = n.warpable,
                a = n.zoom;
              if (r || o || !i) return [];
              var s = t.state,
                u = s.pos1,
                c = s.pos2,
                l = s.pos3,
                f = s.pos4,
                p = bi(u, c),
                d = bi(c, u),
                h = bi(u, l),
                v = bi(l, u),
                g = bi(l, f),
                m = bi(f, l),
                y = bi(c, f),
                b = bi(f, c);
              return mn(
                [
                  e.createElement('div', {
                    className: In('line'),
                    key: 'middeLine1',
                    style: er(p, g, a),
                  }),
                  e.createElement('div', {
                    className: In('line'),
                    key: 'middeLine2',
                    style: er(d, m, a),
                  }),
                  e.createElement('div', {
                    className: In('line'),
                    key: 'middeLine3',
                    style: er(h, y, a),
                  }),
                  e.createElement('div', {
                    className: In('line'),
                    key: 'middeLine4',
                    style: er(v, b, a),
                  }),
                ],
                ci(t, e)
              );
            },
            dragControlCondition: function (t, e) {
              return !e.isRequest && J(e.inputEvent.target, In('direction'));
            },
            dragControlStart: function (t, e) {
              var n = e.datas,
                r = e.inputEvent,
                o = t.props.target,
                i = sr(r.target);
              if (!i || !o) return !1;
              var a = t.state,
                s = a.transformOrigin,
                u = a.is3d,
                c = a.targetTransform,
                l = a.targetMatrix,
                f = a.width,
                p = a.height,
                d = a.left,
                h = a.top;
              return (
                (n.datas = {}),
                (n.targetTransform = c),
                (n.warpTargetMatrix = u ? l : $t(l, 3, 4)),
                (n.targetInverseMatrix = Qt(Jt(n.warpTargetMatrix, 4), 3, 4)),
                (n.direction = i),
                (n.left = d),
                (n.top = h),
                (n.poses = [
                  [0, 0],
                  [f, 0],
                  [0, p],
                  [f, p],
                ].map(function (t) {
                  return ne(t, s);
                })),
                (n.nextPoses = n.poses.map(function (t) {
                  var e = t[0],
                    r = t[1];
                  return ie(n.warpTargetMatrix, [e, r, 0, 1], 4);
                })),
                (n.startValue = he(4)),
                (n.prevMatrix = he(4)),
                (n.absolutePoses = cr(a)),
                (n.posIndexes = Hr(i)),
                Fr(t, e),
                Qr(e, 'matrix3d'),
                (a.snapRenderInfo = {
                  request: e.isRequest,
                  direction: i,
                }),
                !1 !==
                  dr(
                    t,
                    'onWarpStart',
                    fr(
                      t,
                      e,
                      gn(
                        {
                          set: function (t) {
                            n.startValue = t;
                          },
                        },
                        Ur(e)
                      )
                    )
                  ) && (n.isWarp = !0),
                n.isWarp
              );
            },
            dragControl: function (t, e) {
              var n = e.datas,
                r = e.isRequest,
                o = e.distX,
                i = e.distY,
                a = n.targetInverseMatrix,
                s = n.prevMatrix,
                u = n.isWarp,
                c = n.startValue,
                l = n.poses,
                f = n.posIndexes,
                p = n.absolutePoses;
              if (!u) return !1;
              if ((Nr(e, 'matrix3d'), Wo(t, 'warpable'))) {
                var d = f.map(function (t) {
                  return p[t];
                });
                d.length > 1 &&
                  d.push([(d[0][0] + d[1][0]) / 2, (d[0][1] + d[1][1]) / 2]);
                var h = Uo(
                    t,
                    r,
                    d.map(function (t) {
                      return [t[0] + o, t[1] + i];
                    })
                  ),
                  v = h.horizontal,
                  g = h.vertical;
                (i -= v.offset), (o -= g.offset);
              }
              var m = qr(
                  {
                    datas: n,
                    distX: o,
                    distY: i,
                  },
                  !0
                ),
                y = n.nextPoses.slice();
              if (
                (f.forEach(function (t) {
                  y[t] = ee(y[t], m);
                }),
                !An.every(function (t) {
                  return (
                    (e = t.map(function (t) {
                      return l[t];
                    })),
                    (n = t.map(function (t) {
                      return y[t];
                    })),
                    (r = xi(e[0], e[1], e[2])),
                    (o = xi(n[0], n[1], n[2])),
                    (i = Math.PI),
                    !((r >= i && o <= i) || (r <= i && o >= i))
                  );
                  var e, n, r, o, i;
                }))
              )
                return !1;
              var b = me(l[0], l[2], l[1], l[3], y[0], y[2], y[1], y[3]);
              if (!b.length) return !1;
              var x = Lr(n, te(a, b, 4), !0),
                w = te(Jt(s, 4), x, 4);
              n.prevMatrix = x;
              var E = te(c, x, 4),
                S = zr(
                  n,
                  'matrix3d(' + E.join(', ') + ')',
                  'matrix3d(' + x.join(', ') + ')'
                );
              return (
                Kr(e, S),
                dr(
                  t,
                  'onWarp',
                  fr(t, e, {
                    delta: w,
                    matrix: E,
                    dist: x,
                    multiply: te,
                    transform: S,
                  })
                ),
                !0
              );
            },
            dragControlEnd: function (t, e) {
              var n = e.datas,
                r = e.isDrag;
              return (
                !!n.isWarp &&
                ((n.isWarp = !1), dr(t, 'onWarpEnd', pr(t, e, {})), r)
              );
            },
          },
          Ei = In('area-pieces'),
          Si = In('area-piece'),
          Oi = In('avoid');
        function Ai(t) {
          var e = t.areaElement,
            n = t.state,
            r = n.width,
            o = n.height;
          !(function (t, e) {
            if (t.classList) t.classList.remove(e);
            else {
              var n = new RegExp('(\\s|^)' + e + '(\\s|$)');
              t.className = t.className.replace(n, ' ');
            }
          })(e, Oi),
            (e.style.cssText +=
              'left: 0px; top: 0px; width: ' + r + 'px; height: ' + o + 'px');
        }
        function Ci(t) {
          return t.createElement(
            'div',
            {
              key: 'area_pieces',
              className: Ei,
            },
            t.createElement('div', {
              className: Si,
            }),
            t.createElement('div', {
              className: Si,
            }),
            t.createElement('div', {
              className: Si,
            }),
            t.createElement('div', {
              className: Si,
            })
          );
        }
        var Mi = {
            name: 'dragArea',
            props: {
              dragArea: Boolean,
              passDragArea: Boolean,
            },
            events: {
              onClick: 'click',
              onClickGroup: 'clickGroup',
            },
            render: function (t, e) {
              var n = t.props,
                r = n.target,
                o = n.dragArea,
                a = n.groupable,
                s = n.passDragArea,
                u = t.state,
                c = u.width,
                l = u.height,
                f = u.renderPoses,
                p = s ? In('area', 'pass') : In('area');
              if (a)
                return [
                  e.createElement('div', {
                    key: 'area',
                    ref: i(t, 'areaElement'),
                    className: p,
                  }),
                  Ci(e),
                ];
              if (!r || !o) return [];
              var d = me(
                  [0, 0],
                  [c, 0],
                  [0, l],
                  [c, l],
                  f[0],
                  f[1],
                  f[2],
                  f[3]
                ),
                h = d.length ? Yn(d, !0) : 'none';
              return [
                e.createElement('div', {
                  key: 'area',
                  ref: i(t, 'areaElement'),
                  className: p,
                  style: {
                    top: '0px',
                    left: '0px',
                    width: c + 'px',
                    height: l + 'px',
                    transformOrigin: '0 0',
                    transform: h,
                  },
                }),
                Ci(e),
              ];
            },
            dragStart: function (t, e) {
              var n = e.datas,
                r = e.clientX,
                o = e.clientY;
              if (!e.inputEvent) return !1;
              n.isDragArea = !1;
              var i,
                a,
                s = t.areaElement,
                u = t.state,
                c = u.moveableClientRect,
                l = u.renderPoses,
                f = u.rootMatrix,
                p = u.is3d,
                d = c.left,
                h = c.top,
                v = Jn(l),
                g = v.left,
                m = v.top,
                y = v.width,
                b = v.height,
                x = xr(f, [r - d, o - h], p ? 4 : 3),
                w = x[0],
                E = x[1],
                S = [
                  {
                    left: g,
                    top: m,
                    width: y,
                    height: (E -= m) - 10,
                  },
                  {
                    left: g,
                    top: m,
                    width: (w -= g) - 10,
                    height: b,
                  },
                  {
                    left: g,
                    top: m + E + 10,
                    width: y,
                    height: b - E - 10,
                  },
                  {
                    left: g + w + 10,
                    top: m,
                    width: y - w - 10,
                    height: b,
                  },
                ],
                O = [].slice.call(s.nextElementSibling.children);
              S.forEach(function (t, e) {
                O[e].style.cssText =
                  'left: ' +
                  t.left +
                  'px;top: ' +
                  t.top +
                  'px; width: ' +
                  t.width +
                  'px; height: ' +
                  t.height +
                  'px;';
              }),
                (a = Oi),
                (i = s).classList
                  ? i.classList.add(a)
                  : (i.className += ' ' + a),
                (u.disableNativeEvent = !0);
            },
            drag: function (t, e) {
              var n = e.datas,
                r = e.inputEvent;
              if ((this.enableNativeEvent(t), !r)) return !1;
              n.isDragArea || ((n.isDragArea = !0), Ai(t));
            },
            dragEnd: function (t, e) {
              this.enableNativeEvent(t);
              var n = e.inputEvent,
                r = e.datas;
              if (!n) return !1;
              r.isDragArea || Ai(t);
            },
            dragGroupStart: function (t, e) {
              return this.dragStart(t, e);
            },
            dragGroup: function (t, e) {
              return this.drag(t, e);
            },
            dragGroupEnd: function (t, e) {
              return this.dragEnd(t, e);
            },
            unset: function (t) {
              Ai(t), (t.state.disableNativeEvent = !1);
            },
            enableNativeEvent: function (t) {
              var e = t.state;
              e.disableNativeEvent &&
                requestAnimationFrame(function () {
                  e.disableNativeEvent = !1;
                });
            },
          },
          Di = yn('origin', {
            render: function (t, e) {
              var n = t.props.zoom,
                r = t.state,
                o = r.beforeOrigin,
                i = r.rotation;
              return [
                e.createElement('div', {
                  className: In('control', 'origin'),
                  style: nr(i, n, o),
                  key: 'beforeOrigin',
                }),
              ];
            },
          });
        function Pi(t) {
          var e = t.scrollContainer;
          return [e.scrollLeft, e.scrollTop];
        }
        var ji = {
            name: 'scrollable',
            canPinch: !0,
            props: {
              scrollable: Boolean,
              scrollContainer: Object,
              scrollThreshold: Number,
              getScrollPosition: Function,
            },
            events: {
              onScroll: 'scroll',
              onScrollGroup: 'scrollGroup',
            },
            dragStart: function (t, e) {
              var n = t.props.scrollContainer,
                r = void 0 === n ? t.getContainer() : n,
                o = new Xe(),
                i = Mr(r, !0);
              e.datas.dragScroll = o;
              var a = e.isControl ? 'controlGesto' : 'targetGesto',
                s = e.targets;
              o
                .on('scroll', function (n) {
                  var r = n.container,
                    o = n.direction,
                    i = fr(t, e, {
                      scrollContainer: r,
                      direction: o,
                    }),
                    a = s ? 'onScrollGroup' : 'onScroll';
                  s && (i.targets = s), dr(t, a, i);
                })
                .on('move', function (n) {
                  var r = n.offsetX,
                    o = n.offsetY;
                  t[a].scrollBy(r, o, e.inputEvent, !1);
                }),
                o.dragStart(e, {
                  container: i,
                });
            },
            checkScroll: function (t, e) {
              var n = e.datas.dragScroll;
              if (n) {
                var r = t.props,
                  o = r.scrollContainer,
                  i = void 0 === o ? t.getContainer() : o,
                  a = r.scrollThreshold,
                  s = void 0 === a ? 0 : a,
                  u = r.getScrollPosition,
                  c = void 0 === u ? Pi : u;
                return (
                  n.drag(e, {
                    container: i,
                    threshold: s,
                    getScrollPosition: function (t) {
                      return c({
                        scrollContainer: t.container,
                        direction: t.direction,
                      });
                    },
                  }),
                  !0
                );
              }
            },
            drag: function (t, e) {
              return this.checkScroll(t, e);
            },
            dragEnd: function (t, e) {
              e.datas.dragScroll.dragEnd(), (e.datas.dragScroll = null);
            },
            dragControlStart: function (t, e) {
              return this.dragStart(
                t,
                gn(gn({}, e), {
                  isControl: !0,
                })
              );
            },
            dragControl: function (t, e) {
              return this.drag(t, e);
            },
            dragControlEnd: function (t, e) {
              return this.dragEnd(t, e);
            },
            dragGroupStart: function (t, e) {
              return this.dragStart(
                t,
                gn(gn({}, e), {
                  targets: t.props.targets,
                })
              );
            },
            dragGroup: function (t, e) {
              return this.drag(
                t,
                gn(gn({}, e), {
                  targets: t.props.targets,
                })
              );
            },
            dragGroupEnd: function (t, e) {
              return this.dragEnd(
                t,
                gn(gn({}, e), {
                  targets: t.props.targets,
                })
              );
            },
            dragGroupControlStart: function (t, e) {
              return this.dragStart(
                t,
                gn(gn({}, e), {
                  targets: t.props.targets,
                  isControl: !0,
                })
              );
            },
            dragGroupContro: function (t, e) {
              return this.drag(
                t,
                gn(gn({}, e), {
                  targets: t.props.targets,
                })
              );
            },
            dragGroupControEnd: function (t, e) {
              return this.dragEnd(
                t,
                gn(gn({}, e), {
                  targets: t.props.targets,
                })
              );
            },
          },
          Ti = {
            name: '',
            props: {
              target: Object,
              dragTarget: Object,
              container: Object,
              portalContainer: Object,
              rootContainer: Object,
              zoom: Number,
              transformOrigin: Array,
              edge: Boolean,
              ables: Array,
              className: String,
              pinchThreshold: Number,
              pinchOutside: Boolean,
              triggerAblesSimultaneously: Boolean,
              checkInput: Boolean,
              cspNonce: String,
              translateZ: Number,
              props: Object,
            },
            events: {},
          },
          Ri = yn('padding', {
            render: function (t, e) {
              var n = t.props;
              if (n.dragArea) return [];
              var r = n.padding || {},
                o = r.left,
                i = void 0 === o ? 0 : o,
                a = r.top,
                s = void 0 === a ? 0 : a,
                u = r.right,
                c = void 0 === u ? 0 : u,
                l = r.bottom,
                f = void 0 === l ? 0 : l,
                p = t.state,
                d = p.renderPoses,
                h = [p.pos1, p.pos2, p.pos3, p.pos4],
                v = [];
              return (
                i > 0 && v.push([0, 2]),
                s > 0 && v.push([0, 1]),
                c > 0 && v.push([1, 3]),
                f > 0 && v.push([2, 3]),
                v.map(function (t, n) {
                  var r = t[0],
                    o = t[1],
                    i = me(
                      [0, 0],
                      [100, 0],
                      [0, 100],
                      [100, 100],
                      h[r],
                      h[o],
                      d[r],
                      d[o]
                    );
                  if (i.length)
                    return e.createElement('div', {
                      key: 'padding' + n,
                      className: In('padding'),
                      style: {
                        transform: Yn(i, !0),
                      },
                    });
                })
              );
            },
          }),
          ki = ['nw', 'ne', 'se', 'sw'];
        function Bi(t, e) {
          var n = t[0] + t[1],
            r = n > e ? e / n : 1;
          return (t[0] *= r), (t[1] = e - t[1] * r), t;
        }
        var Ii = [1, 2, 5, 6],
          _i = [0, 3, 4, 7],
          Fi = [1, -1, -1, 1],
          Ni = [1, 1, -1, -1];
        function zi(t, e, n, r, o, i, a, s, u) {
          void 0 === i && (i = 0),
            void 0 === a && (a = 0),
            void 0 === s && (s = r),
            void 0 === u && (u = o);
          var c = [],
            l = !1,
            f = t.map(function (t, f) {
              var p = e[f],
                d = p.horizontal,
                h = p.vertical;
              if ((h && !l && ((l = !0), c.push('/')), l)) {
                var v = Math.max(0, 1 === h ? t[1] - a : u - t[1]);
                return c.push(Sr(v, o, n)), v;
              }
              v = Math.max(0, 1 === d ? t[0] - i : s - t[0]);
              return c.push(Sr(v, r, n)), v;
            });
          return {
            styles: c,
            raws: f,
          };
        }
        function Gi(t) {
          for (var e = [0, 0], n = [0, 0], r = t.length, o = 0; o < r; ++o) {
            var i = t[o];
            i.sub &&
              (i.horizontal &&
                (0 === e[1] && (e[0] = o),
                (e[1] = o - e[0] + 1),
                (n[0] = o + 1)),
              i.vertical && (0 === n[1] && (n[0] = o), (n[1] = o - n[0] + 1)));
          }
          return {
            horizontalRange: e,
            verticalRange: n,
          };
        }
        function Li(t, e, n, r, o, i) {
          var a, s, u, c;
          void 0 === i && (i = [0, 0]);
          var l = t.indexOf('/'),
            f = (l > -1 ? t.slice(0, l) : t).length,
            p = t.slice(0, f),
            d = t.slice(f + 1),
            h = p[0],
            v = void 0 === h ? '0px' : h,
            g = p[1],
            m = void 0 === g ? v : g,
            y = p[2],
            b = void 0 === y ? v : y,
            x = p[3],
            w = void 0 === x ? m : x,
            E = d[0],
            S = void 0 === E ? v : E,
            O = d[1],
            A = void 0 === O ? S : O,
            C = d[2],
            M = void 0 === C ? S : C,
            D = d[3],
            P = void 0 === D ? A : D,
            j = [v, m, b, w].map(function (t) {
              return L(t, e);
            }),
            T = [S, A, M, P].map(function (t) {
              return L(t, n);
            }),
            R = j.slice(),
            k = T.slice();
          (a = Bi([R[0], R[1]], e)),
            (R[0] = a[0]),
            (R[1] = a[1]),
            (s = Bi([R[3], R[2]], e)),
            (R[3] = s[0]),
            (R[2] = s[1]),
            (u = Bi([k[0], k[3]], n)),
            (k[0] = u[0]),
            (k[3] = u[1]),
            (c = Bi([k[1], k[2]], n)),
            (k[1] = c[0]),
            (k[2] = c[1]);
          var B = R.slice(0, Math.max(i[0], p.length)),
            I = k.slice(0, Math.max(i[1], d.length));
          return mn(
            B.map(function (t, e) {
              var i = ki[e];
              return {
                horizontal: Fi[e],
                vertical: 0,
                pos: [r + t, o + (-1 === Ni[e] ? n : 0)],
                sub: !0,
                raw: j[e],
                direction: i,
              };
            }),
            I.map(function (t, n) {
              var i = ki[n];
              return {
                horizontal: 0,
                vertical: Ni[n],
                pos: [r + (-1 === Fi[n] ? e : 0), o + t],
                sub: !0,
                raw: T[n],
                direction: i,
              };
            })
          );
        }
        function Wi(t, e, n, r, o) {
          void 0 === o && (o = e.length);
          var i = Gi(t.slice(r)),
            a = i.horizontalRange,
            s = i.verticalRange,
            u = n - r,
            c = 0;
          if (0 === u) c = o;
          else if (u > 0 && u < a[1]) c = a[1] - u;
          else {
            if (!(u >= s[0])) return;
            c = s[0] + s[1] - u;
          }
          t.splice(n, c), e.splice(n, c);
        }
        function qi(t, e, n, r, o, i, a, s, u, c, l) {
          void 0 === c && (c = 0), void 0 === l && (l = 0);
          var f = Gi(t.slice(n)),
            p = f.horizontalRange,
            d = f.verticalRange;
          if (r > -1)
            for (var h = 1 === Fi[r] ? i - c : s - i, v = p[1]; v <= r; ++v) {
              var g = 1 === Ni[v] ? l : u,
                m = 0;
              if (
                (r === v
                  ? (m = i)
                  : 0 === v
                  ? (m = c + h)
                  : -1 === Fi[v] && (m = s - (e[n][0] - c)),
                t.splice(n + v, 0, {
                  horizontal: Fi[v],
                  vertical: 0,
                  pos: [m, g],
                }),
                e.splice(n + v, 0, [m, g]),
                0 === v)
              )
                break;
            }
          else if (o > -1) {
            var y = 1 === Ni[o] ? a - l : u - a;
            if (0 === p[1] && 0 === d[1]) {
              var b = [c + y, l];
              t.push({
                horizontal: Fi[0],
                vertical: 0,
                pos: b,
              }),
                e.push(b);
            }
            var x = d[0];
            for (v = d[1]; v <= o; ++v) {
              (m = 1 === Fi[v] ? c : s), (g = 0);
              if (
                (o === v
                  ? (g = a)
                  : 0 === v
                  ? (g = l + y)
                  : 1 === Ni[v]
                  ? (g = e[n + x][1])
                  : -1 === Ni[v] && (g = u - (e[n + x][1] - l)),
                t.push({
                  horizontal: 0,
                  vertical: Ni[v],
                  pos: [m, g],
                }),
                e.push([m, g]),
                0 === v)
              )
                break;
            }
          }
        }
        function Hi(t, e) {
          void 0 === e &&
            (e = t.map(function (t) {
              return t.raw;
            }));
          var n = t
              .map(function (t, n) {
                return t.horizontal ? e[n] : null;
              })
              .filter(function (t) {
                return null != t;
              }),
            r = t
              .map(function (t, n) {
                return t.vertical ? e[n] : null;
              })
              .filter(function (t) {
                return null != t;
              });
          return {
            horizontals: n,
            verticals: r,
          };
        }
        var Yi = [
            [0, -1, 'n'],
            [1, 0, 'e'],
          ],
          Vi = [
            [-1, -1, 'nw'],
            [0, -1, 'n'],
            [1, -1, 'ne'],
            [1, 0, 'e'],
            [1, 1, 'se'],
            [0, 1, 's'],
            [-1, 1, 'sw'],
            [-1, 0, 'w'],
          ];
        function Xi(t, e, n) {
          var r = t.props.clipRelative,
            o = t.state,
            i = o.width,
            a = o.height,
            s = e,
            u = s.type,
            c = s.poses,
            l = 'rect' === u,
            f = 'circle' === u;
          if ('polygon' === u)
            return n.map(function (t) {
              return Sr(t[0], i, r) + ' ' + Sr(t[1], a, r);
            });
          if (l || 'inset' === u) {
            var p = n[1][1],
              d = n[3][0],
              h = n[7][0],
              v = n[5][1];
            if (l)
              return [p, d, v, h].map(function (t) {
                return t + 'px';
              });
            var g = [p, i - d, a - v, h].map(function (t, e) {
              return Sr(t, e % 2 ? i : a, r);
            });
            if (n.length > 8) {
              var m = ne(n[4], n[0]),
                y = m[0],
                b = m[1];
              g.push.apply(
                g,
                mn(
                  ['round'],
                  zi(n.slice(8), c.slice(8), r, y, b, h, p, d, v).styles
                )
              );
            }
            return g;
          }
          if (f || 'ellipse' === u) {
            var x = n[0],
              w = Sr(
                Math.abs(n[1][1] - x[1]),
                f ? Math.sqrt((i * i + a * a) / 2) : a,
                r
              );
            return (
              (g = f ? [w] : [Sr(Math.abs(n[2][0] - x[0]), i, r), w]).push(
                'at',
                Sr(x[0], i, r),
                Sr(x[1], a, r)
              ),
              g
            );
          }
        }
        function Ui(t, e, n, r) {
          var o = [r, (r + e) / 2, e],
            i = [t, (t + n) / 2, n];
          return Vi.map(function (t) {
            var e = t[0],
              n = t[1],
              r = t[2],
              a = o[e + 1],
              s = i[n + 1];
            return {
              vertical: Math.abs(n),
              horizontal: Math.abs(e),
              direction: r,
              pos: [a, s],
            };
          });
        }
        function Qi(t, e, n, r, o) {
          var i,
            a,
            s,
            u,
            c,
            l,
            f,
            p = o;
          if (!p) {
            var d = hr(t),
              h = d.clipPath;
            p = 'none' !== h ? h : d.clip;
          }
          if ((p && 'none' !== p && 'auto' !== p) || (p = r)) {
            var v = B(p),
              g = v.prefix,
              m = void 0 === g ? p : g,
              y = v.value,
              b = void 0 === y ? '' : y,
              x = 'circle' === m,
              w = ' ';
            if ('polygon' === m) {
              w = ',';
              var E = (M = k(b || '0% 0%, 100% 0%, 100% 100%, 0% 100%')).map(
                function (t) {
                  var r = t.split(' '),
                    o = r[0],
                    i = r[1];
                  return {
                    vertical: 1,
                    horizontal: 1,
                    pos: [L(o, e), L(i, n)],
                  };
                }
              );
              return {
                type: m,
                clipText: p,
                poses: E,
                splitter: w,
              };
            }
            if (x || 'ellipse' === m) {
              var S = '',
                O = '',
                A = 0,
                C = 0,
                M = R(b);
              if (x) {
                var D;
                (D = void 0 === (i = M[0]) ? '50%' : i),
                  (S = void 0 === (a = M[2]) ? '50%' : a),
                  (O = void 0 === (s = M[3]) ? '50%' : s),
                  (A = L(D, Math.sqrt((e * e + n * n) / 2))),
                  (C = A);
              } else {
                var P, j;
                (P = void 0 === (u = M[0]) ? '50%' : u),
                  (j = void 0 === (c = M[1]) ? '50%' : c),
                  (S = void 0 === (l = M[3]) ? '50%' : l),
                  (O = void 0 === (f = M[4]) ? '50%' : f),
                  (A = L(P, e)),
                  (C = L(j, n));
              }
              var T = [L(S, e), L(O, n)];
              E = mn(
                [
                  {
                    vertical: 1,
                    horizontal: 1,
                    pos: T,
                    direction: 'nesw',
                  },
                ],
                Yi.slice(0, x ? 1 : 2).map(function (t) {
                  return {
                    vertical: Math.abs(t[1]),
                    horizontal: t[0],
                    direction: t[2],
                    sub: !0,
                    pos: [T[0] + t[0] * A, T[1] + t[1] * C],
                  };
                })
              );
              return {
                type: m,
                clipText: p,
                radiusX: A,
                radiusY: C,
                left: T[0] - A,
                top: T[1] - C,
                poses: E,
                splitter: w,
              };
            }
            if ('inset' === m) {
              var _ = (M = R(b || '0 0 0 0')).indexOf('round'),
                F = (_ > -1 ? M.slice(0, _) : M).length,
                N = M.slice(F + 1),
                z = M.slice(0, F),
                G = z[0],
                W = z[1],
                q = void 0 === W ? G : W,
                H = z[2],
                Y = void 0 === H ? G : H,
                V = z[3],
                X = void 0 === V ? q : V,
                U = [G, Y].map(function (t) {
                  return L(t, n);
                }),
                Q = U[0],
                J = U[1],
                K = [X, q].map(function (t) {
                  return L(t, e);
                }),
                $ = K[0],
                Z = K[1],
                tt = e - Z,
                et = n - J,
                nt = Li(N, tt - $, et - Q, $, Q);
              return {
                type: 'inset',
                clipText: p,
                poses: (E = mn(Ui(Q, tt, et, $), nt)),
                top: Q,
                left: $,
                right: tt,
                bottom: et,
                radius: N,
                splitter: w,
              };
            }
            if ('rect' === m) {
              w = ',';
              var rt = (M = k(b || '0px, ' + e + 'px, ' + n + 'px, 0px')).map(
                function (t) {
                  return I(t).value;
                }
              );
              return {
                type: 'rect',
                clipText: p,
                poses: (E = Ui(
                  (Q = rt[0]),
                  (Z = rt[1]),
                  (J = rt[2]),
                  ($ = rt[3])
                )),
                top: Q,
                right: Z,
                bottom: J,
                left: $,
                values: M,
                splitter: w,
              };
            }
          }
        }
        var Ji = {
            name: 'clippable',
            props: {
              clippable: Boolean,
              defaultClipPath: String,
              customClipPath: String,
              clipRelative: Boolean,
              clipArea: Boolean,
              dragWithClip: Boolean,
              clipTargetBounds: Boolean,
              clipVerticalGuidelines: Array,
              clipHorizontalGuidelines: Array,
              clipSnapThreshold: Boolean,
            },
            events: {
              onClipStart: 'clipStart',
              onClip: 'clip',
              onClipEnd: 'clipEnd',
            },
            css: [
              '.control.clip-control {\n    background: #6d6;\n    cursor: pointer;\n}\n.control.clip-control.clip-radius {\n    background: #d66;\n}\n.line.clip-line {\n    background: #6e6;\n    cursor: move;\n    z-index: 1;\n}\n.clip-area {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.clip-ellipse {\n    position: absolute;\n    cursor: move;\n    border: 1px solid #6d6;\n    border: var(--zoompx) solid #6d6;\n    border-radius: 50%;\n    transform-origin: 0px 0px;\n}',
              ':host {\n    --bounds-color: #d66;\n}',
              '.guideline {\n    pointer-events: none;\n    z-index: 2;\n}',
              '.line.guideline.bounds {\n    background: #d66;\n    background: var(--bounds-color);\n}',
            ],
            render: function (t, e) {
              var n = t.props,
                r = n.customClipPath,
                o = n.defaultClipPath,
                i = n.clipArea,
                a = n.zoom,
                s = t.state,
                u = s.target,
                c = s.width,
                l = s.height,
                f = s.allMatrix,
                p = s.is3d,
                d = s.left,
                h = s.top,
                v = s.pos1,
                g = s.pos2,
                m = s.pos3,
                y = s.pos4,
                b = s.clipPathState,
                x = s.snapBoundInfos;
              if (!u) return [];
              var w = Qi(u, c, l, o || 'inset', b || r);
              if (!w) return [];
              var E = p ? 4 : 3,
                S = w.type,
                O = w.poses.map(function (t) {
                  var e = Un(f, t.pos, E);
                  return [e[0] - d, e[1] - h];
                }),
                A = [],
                C = [],
                M = 'rect' === S,
                D = 'inset' === S,
                P = 'polygon' === S;
              if (M || D || P) {
                var j = D ? O.slice(0, 8) : O;
                C = j.map(function (t, n) {
                  var r = 0 === n ? j[j.length - 1] : j[n - 1],
                    o = Y(r, t),
                    i = tr(r, t);
                  return e.createElement('div', {
                    key: 'clipLine' + n,
                    className: In('line', 'clip-line', 'snap-control'),
                    'data-clip-index': n,
                    style: {
                      width: i + 'px',
                      transform:
                        'translate(' +
                        r[0] +
                        'px, ' +
                        r[1] +
                        'px) rotate(' +
                        o +
                        'rad) scaleY(' +
                        a +
                        ')',
                    },
                  });
                });
              }
              if (
                ((A = O.map(function (t, n) {
                  return e.createElement('div', {
                    key: 'clipControl' + n,
                    className: In('control', 'clip-control', 'snap-control'),
                    'data-clip-index': n,
                    style: {
                      transform:
                        'translate(' +
                        t[0] +
                        'px, ' +
                        t[1] +
                        'px) scale(' +
                        a +
                        ')',
                    },
                  });
                })),
                D &&
                  A.push.apply(
                    A,
                    O.slice(8).map(function (t, n) {
                      return e.createElement('div', {
                        key: 'clipRadiusControl' + n,
                        className: In(
                          'control',
                          'clip-control',
                          'clip-radius',
                          'snap-control'
                        ),
                        'data-clip-index': 8 + n,
                        style: {
                          transform:
                            'translate(' +
                            t[0] +
                            'px, ' +
                            t[1] +
                            'px) scale(' +
                            a +
                            ')',
                        },
                      });
                    })
                  ),
                'circle' === S || 'ellipse' === S)
              ) {
                var T = w.left,
                  R = w.top,
                  k = w.radiusX,
                  B = w.radiusY,
                  I = ne(Un(f, [T, R], E), Un(f, [0, 0], E)),
                  _ = I[0],
                  F = I[1],
                  N = 'none';
                if (!i) {
                  for (
                    var z = Math.max(10, k / 5, B / 5), G = [], L = 0;
                    L <= z;
                    ++L
                  ) {
                    var W = ((2 * Math.PI) / z) * L;
                    G.push([
                      k + (k - a) * Math.cos(W),
                      B + (B - a) * Math.sin(W),
                    ]);
                  }
                  G.push([k, -2]),
                    G.push([-2, -2]),
                    G.push([-2, 2 * B + 2]),
                    G.push([2 * k + 2, 2 * B + 2]),
                    G.push([2 * k + 2, -2]),
                    G.push([k, -2]),
                    (N =
                      'polygon(' +
                      G.map(function (t) {
                        return t[0] + 'px ' + t[1] + 'px';
                      }).join(', ') +
                      ')');
                }
                A.push(
                  e.createElement('div', {
                    key: 'clipEllipse',
                    className: In('clip-ellipse', 'snap-control'),
                    style: {
                      width: 2 * k + 'px',
                      height: 2 * B + 'px',
                      clipPath: N,
                      transform:
                        'translate(' +
                        (-d + _) +
                        'px, ' +
                        (-h + F) +
                        'px) ' +
                        Yn(f),
                    },
                  })
                );
              }
              if (i) {
                var q = Jn(mn([v, g, m, y], O)),
                  H = q.width,
                  V = q.height,
                  X = q.left,
                  U = q.top;
                if (P || M || D) {
                  G = D ? O.slice(0, 8) : O;
                  A.push(
                    e.createElement('div', {
                      key: 'clipArea',
                      className: In('clip-area', 'snap-control'),
                      style: {
                        width: H + 'px',
                        height: V + 'px',
                        transform: 'translate(' + X + 'px, ' + U + 'px)',
                        clipPath:
                          'polygon(' +
                          G.map(function (t) {
                            return t[0] - X + 'px ' + (t[1] - U) + 'px';
                          }).join(', ') +
                          ')',
                      },
                    })
                  );
                }
              }
              return (
                x &&
                  ['vertical', 'horizontal'].forEach(function (t) {
                    var n = x[t],
                      r = 'horizontal' === t;
                    n.isSnap &&
                      C.push.apply(
                        C,
                        n.snap.posInfos.map(function (n, o) {
                          var i = n.pos,
                            s = ne(Un(f, r ? [0, i] : [i, 0], E), [d, h]),
                            u = ne(Un(f, r ? [c, i] : [i, l], E), [d, h]);
                          return ui(
                            e,
                            '',
                            s,
                            u,
                            a,
                            'clip' + t + 'snap' + o,
                            'guideline'
                          );
                        })
                      ),
                      n.isBound &&
                        C.push.apply(
                          C,
                          n.bounds.map(function (n, o) {
                            var i = n.pos,
                              s = ne(Un(f, r ? [0, i] : [i, 0], E), [d, h]),
                              u = ne(Un(f, r ? [c, i] : [i, l], E), [d, h]);
                            return ui(
                              e,
                              '',
                              s,
                              u,
                              a,
                              'clip' + t + 'bounds' + o,
                              'guideline',
                              'bounds',
                              'bold'
                            );
                          })
                        );
                  }),
                mn(A, C)
              );
            },
            dragControlCondition: function (t, e) {
              return (
                e.inputEvent &&
                (e.inputEvent.target.getAttribute('class') || '').indexOf(
                  'clip'
                ) > -1
              );
            },
            dragStart: function (t, e) {
              var n = t.props.dragWithClip;
              return !(void 0 === n || n) && this.dragControlStart(t, e);
            },
            drag: function (t, e) {
              return this.dragControl(t, e);
            },
            dragEnd: function (t, e) {
              return this.dragControlEnd(t, e);
            },
            dragControlStart: function (t, e) {
              var n = t.state,
                r = t.props,
                o = r.defaultClipPath,
                i = r.customClipPath,
                a = n.target,
                s = n.width,
                u = n.height,
                c = e.inputEvent ? e.inputEvent.target : null,
                l = c ? c.getAttribute('class') : '',
                f = e.datas,
                p = Qi(a, s, u, o || 'inset', i);
              if (!p) return !1;
              var d = p.clipText;
              return !1 ===
                dr(
                  t,
                  'onClipStart',
                  fr(t, e, {
                    clipType: p.type,
                    clipStyle: d,
                    poses: p.poses.map(function (t) {
                      return t.pos;
                    }),
                  })
                )
                ? ((f.isClipStart = !1), !1)
                : ((f.isControl = l.indexOf('clip-control') > -1),
                  (f.isLine = l.indexOf('clip-line') > -1),
                  (f.isArea =
                    l.indexOf('clip-area') > -1 ||
                    l.indexOf('clip-ellipse') > -1),
                  (f.index = c
                    ? parseInt(c.getAttribute('data-clip-index'), 10)
                    : -1),
                  (f.clipPath = p),
                  (f.isClipStart = !0),
                  (n.clipPathState = d),
                  Fr(t, e),
                  !0);
            },
            dragControl: function (t, e) {
              var n = e.datas,
                r = e.originalDatas;
              if (!n.isClipStart) return !1;
              var o = (r && r.draggable) || {},
                i = n,
                a = i.isControl,
                s = i.isLine,
                u = i.isArea,
                c = i.index,
                l = i.clipPath;
              if (!l) return !1;
              var f = o.isDrag ? o.prevDist : qr(e),
                p = f[0],
                d = f[1],
                h = t.props,
                v = t.state,
                g = v.width,
                m = v.height,
                y = !u && !a && !s,
                b = l.type,
                x = l.poses,
                w = l.splitter,
                E = x.map(function (t) {
                  return t.pos;
                });
              y && ((p = -p), (d = -d));
              var S = !a || 'nesw' === x[c].direction,
                O = 'inset' === b || 'rect' === b,
                A = x.map(function () {
                  return [0, 0];
                });
              if (a && !S) {
                var C = x[c],
                  M = C.horizontal,
                  D = C.vertical,
                  P = [p * Math.abs(M), d * Math.abs(D)];
                A = (function (t, e, n, r) {
                  var o = t[e],
                    i = o.direction,
                    a = o.sub,
                    s = t.map(function () {
                      return [0, 0];
                    }),
                    u = i ? i.split('') : [];
                  if (r && e < 8) {
                    var c = u.filter(function (t) {
                        return 'w' === t || 'e' === t;
                      })[0],
                      l = u.filter(function (t) {
                        return 'n' === t || 's' === t;
                      })[0];
                    (s[e] = n),
                      t.forEach(function (t, e) {
                        var r = t.direction;
                        r &&
                          (r.indexOf(c) > -1 && (s[e][0] = n[0]),
                          r.indexOf(l) > -1 && (s[e][1] = n[1]));
                      }),
                      c && ((s[1][0] = n[0] / 2), (s[5][0] = n[0] / 2)),
                      l && ((s[3][1] = n[1] / 2), (s[7][1] = n[1] / 2));
                  } else
                    i && !a
                      ? u.forEach(function (e) {
                          var r = 'n' === e || 's' === e;
                          t.forEach(function (t, o) {
                            var i = t.direction,
                              a = t.horizontal,
                              u = t.vertical;
                            i &&
                              -1 !== i.indexOf(e) &&
                              (s[o] = [r || !a ? 0 : n[0], r && u ? n[1] : 0]);
                          });
                        })
                      : (s[e] = n);
                  return s;
                })(x, c, P, O);
              } else
                S &&
                  (A = E.map(function () {
                    return [p, d];
                  }));
              var j = E.map(function (t, e) {
                  return ee(t, A[e]);
                }),
                T = mn(j);
              v.snapBoundInfos = null;
              var R = 'circle' === l.type,
                k = 'ellipse' === l.type;
              if (R || k) {
                var B = Jn(j),
                  I = Math.abs(B.bottom - B.top),
                  _ = Math.abs(k ? B.right - B.left : I),
                  F = j[0][1] + I,
                  N = j[0][0] - _,
                  z = j[0][0] + _;
                R && (T.push([z, B.bottom]), A.push([1, 0])),
                  T.push([B.left, F]),
                  A.push([0, 1]),
                  T.push([N, B.bottom]),
                  A.push([1, 0]);
              }
              var G = ao(
                  (h.clipHorizontalGuidelines || []).map(function (t) {
                    return L('' + t, m);
                  }),
                  (h.clipVerticalGuidelines || []).map(function (t) {
                    return L('' + t, g);
                  }),
                  g,
                  m
                ),
                W = [],
                q = [];
              if (R || k) (W = [T[4][0], T[2][0]]), (q = [T[1][1], T[3][1]]);
              else if (O) {
                var H = [T[0], T[2], T[4], T[6]],
                  Y = [A[0], A[2], A[4], A[6]];
                (W = H.filter(function (t, e) {
                  return Y[e][0];
                }).map(function (t) {
                  return t[0];
                })),
                  (q = H.filter(function (t, e) {
                    return Y[e][1];
                  }).map(function (t) {
                    return t[1];
                  }));
              } else
                (W = T.filter(function (t, e) {
                  return A[e][0];
                }).map(function (t) {
                  return t[0];
                })),
                  (q = T.filter(function (t, e) {
                    return A[e][1];
                  }).map(function (t) {
                    return t[1];
                  }));
              for (
                var V = function (t) {
                    var e = Qo(
                        G,
                        h.clipTargetBounds && {
                          left: 0,
                          top: 0,
                          right: g,
                          bottom: m,
                        },
                        W,
                        q,
                        {
                          snapThreshold: 5,
                        }
                      ),
                      n = e.horizontal,
                      r = e.vertical,
                      o = n.offset,
                      i = r.offset;
                    if ((!k && !R) || 0 !== A[0][0] || 0 !== A[0][1])
                      return (
                        T.forEach(function (t, e) {
                          var n = A[e];
                          n[0] && (t[0] -= i), n[1] && (t[1] -= o);
                        }),
                        'break'
                      );
                    var a = Jn(j),
                      s = a.bottom - a.top,
                      u = k ? a.right - a.left : s;
                    (u -= r.isBound ? Math.abs(i) : 0 === r.snapIndex ? -i : i),
                      (s -= n.isBound
                        ? Math.abs(o)
                        : 0 === n.snapIndex
                        ? -o
                        : o),
                      R && (u = s = go(r, n) > 0 ? s : u);
                    var c = T[0];
                    (T[1][1] = c[1] - s),
                      (T[2][0] = c[0] + u),
                      (T[3][1] = c[1] + s),
                      (T[4][0] = c[0] - u);
                  },
                  X = 0;
                X < 2;
                ++X
              ) {
                if ('break' === V()) break;
              }
              var U = Xi(t, l, j),
                Q = b + '(' + U.join(w) + ')';
              if (((v.clipPathState = Q), R || k))
                (W = [T[4][0], T[2][0]]), (q = [T[1][1], T[3][1]]);
              else if (O) {
                H = [T[0], T[2], T[4], T[6]];
                (W = H.map(function (t) {
                  return t[0];
                })),
                  (q = H.map(function (t) {
                    return t[1];
                  }));
              } else
                (W = T.map(function (t) {
                  return t[0];
                })),
                  (q = T.map(function (t) {
                    return t[1];
                  }));
              return (
                (v.snapBoundInfos = Qo(
                  G,
                  h.clipTargetBounds && {
                    left: 0,
                    top: 0,
                    right: g,
                    bottom: m,
                  },
                  W,
                  q,
                  {
                    snapThreshold: 1,
                  }
                )),
                dr(
                  t,
                  'onClip',
                  fr(t, e, {
                    clipEventType: 'changed',
                    clipType: b,
                    poses: j,
                    clipStyle: Q,
                    clipStyles: U,
                    distX: p,
                    distY: d,
                  })
                ),
                !0
              );
            },
            dragControlEnd: function (t, e) {
              this.unset(t);
              var n = e.isDrag,
                r = e.datas,
                o = e.isDouble,
                i = r.isLine,
                a = r.isClipStart,
                s = r.isControl;
              return (
                !!a &&
                (dr(t, 'onClipEnd', pr(t, e, {})),
                o &&
                  (s
                    ? (function (t, e) {
                        var n = e.datas,
                          r = n.clipPath,
                          o = n.index,
                          i = r,
                          a = i.type,
                          s = i.poses,
                          u = i.splitter,
                          c = s.map(function (t) {
                            return t.pos;
                          }),
                          l = c.length;
                        if ('polygon' === a) s.splice(o, 1), c.splice(o, 1);
                        else {
                          if ('inset' !== a) return;
                          if (o < 8) return;
                          if ((Wi(s, c, o, 8, l), l === s.length)) return;
                        }
                        var f = Xi(t, r, c);
                        dr(
                          t,
                          'onClip',
                          fr(t, e, {
                            clipEventType: 'removed',
                            clipType: a,
                            poses: c,
                            clipStyles: f,
                            clipStyle: a + '(' + f.join(u) + ')',
                            distX: 0,
                            distY: 0,
                          })
                        );
                      })(t, e)
                    : i &&
                      (function (t, e) {
                        var n = _r(t, e),
                          r = n[0],
                          o = n[1],
                          i = e.datas,
                          a = i.clipPath,
                          s = i.index,
                          u = a,
                          c = u.type,
                          l = u.poses,
                          f = u.splitter,
                          p = l.map(function (t) {
                            return t.pos;
                          });
                        if ('polygon' === c) p.splice(s, 0, [r, o]);
                        else {
                          if ('inset' !== c) return;
                          var d = Ii.indexOf(s),
                            h = _i.indexOf(s),
                            v = l.length;
                          if (
                            (qi(
                              l,
                              p,
                              8,
                              d,
                              h,
                              r,
                              o,
                              p[4][0],
                              p[4][1],
                              p[0][0],
                              p[0][1]
                            ),
                            v === l.length)
                          )
                            return;
                        }
                        var g = Xi(t, a, p);
                        dr(
                          t,
                          'onClip',
                          fr(t, e, {
                            clipEventType: 'added',
                            clipType: c,
                            poses: p,
                            clipStyles: g,
                            clipStyle: c + '(' + g.join(f) + ')',
                            distX: 0,
                            distY: 0,
                          })
                        );
                      })(t, e)),
                o || n)
              );
            },
            unset: function (t) {
              (t.state.clipPathState = ''), (t.state.snapBoundInfos = null);
            },
          },
          Ki = {
            name: 'originDraggable',
            props: {
              originDraggable: Boolean,
              originRelative: Boolean,
            },
            events: {
              onDragOriginStart: 'dragOriginStart',
              onDragOrigin: 'dragOrigin',
              onDragOriginEnd: 'dragOriginEnd',
            },
            css: [
              ':host[data-able-origindraggable] .control.origin {\n    pointer-events: auto;\n}',
            ],
            dragControlCondition: function (t, e) {
              return e.isRequest
                ? 'originDraggable' === e.requestAble
                : J(e.inputEvent.target, In('origin'));
            },
            dragControlStart: function (t, e) {
              var n = e.datas;
              Fr(t, e);
              var r = fr(t, e, {
                  dragStart: ai.dragStart(t, new Rr().dragStart([0, 0], e)),
                }),
                o = dr(t, 'onDragOriginStart', r);
              return (
                (n.startOrigin = t.state.transformOrigin),
                (n.startTargetOrigin = t.state.targetOrigin),
                (n.prevOrigin = [0, 0]),
                (n.isDragOrigin = !0),
                !1 === o ? ((n.isDragOrigin = !1), !1) : r
              );
            },
            dragControl: function (t, e) {
              var n = e.datas,
                r = e.isPinch,
                o = e.isRequest;
              if (!n.isDragOrigin) return !1;
              var i = qr(e),
                a = i[0],
                s = i[1],
                u = t.state,
                c = u.width,
                l = u.height,
                f = u.offsetMatrix,
                p = u.targetMatrix,
                d = u.is3d,
                h = t.props.originRelative,
                v = void 0 === h || h,
                g = d ? 4 : 3,
                m = [a, s];
              if (o) {
                var y = e.distOrigin;
                (y[0] || y[1]) && (m = y);
              }
              var b = ee(n.startOrigin, m),
                x = ee(n.startTargetOrigin, m),
                w = ne(m, n.prevOrigin),
                E = Xr(f, p, b, g),
                S = t.getRect(),
                O = Jn(Qn(E, c, l, g)),
                A = [S.left - O.left, S.top - O.top];
              n.prevOrigin = m;
              var C = fr(t, e, {
                width: c,
                height: l,
                origin: b,
                dist: m,
                delta: w,
                transformOrigin: [Sr(x[0], c, v), Sr(x[1], l, v)].join(' '),
                drag: ai.drag(t, Tr(e, t.state, A, !!r, !1)),
              });
              return dr(t, 'onDragOrigin', C), C;
            },
            dragControlEnd: function (t, e) {
              return (
                !!e.datas.isDragOrigin &&
                (dr(t, 'onDragOriginEnd', pr(t, e, {})), !0)
              );
            },
            dragGroupControlCondition: function (t, e) {
              return this.dragControlCondition(t, e);
            },
            dragGroupControlStart: function (t, e) {
              return !!this.dragControlStart(t, e);
            },
            dragGroupControl: function (t, e) {
              var n = this.dragControl(t, e);
              return !!n && ((t.transformOrigin = n.transformOrigin), !0);
            },
            request: function (t) {
              var e = {},
                n = t.getRect(),
                r = 0,
                o = 0,
                i = n.transformOrigin,
                a = [0, 0];
              return {
                isControl: !0,
                requestStart: function () {
                  return {
                    datas: e,
                  };
                },
                request: function (t) {
                  return (
                    'deltaOrigin' in t
                      ? ((a[0] += t.deltaOrigin[0]), (a[1] += t.deltaOrigin[1]))
                      : 'origin' in t
                      ? ((a[0] = t.origin[0] - i[0]),
                        (a[1] = t.origin[1] - i[1]))
                      : ('x' in t
                          ? (r = t.x - n.left)
                          : 'deltaX' in t && (r += t.deltaX),
                        'y' in t
                          ? (o = t.y - n.top)
                          : 'deltaY' in t && (o += t.deltaY)),
                    {
                      datas: e,
                      distX: r,
                      distY: o,
                      distOrigin: a,
                    }
                  );
                },
                requestEnd: function () {
                  return {
                    datas: e,
                    isDrag: !0,
                  };
                },
              };
            },
          };
        function $i(t, e, n, r, o) {
          var i;
          void 0 === r && (r = [0, 0]);
          if (o) i = o;
          else {
            var a = hr(t);
            i = (a && a.borderRadius) || '';
          }
          return Li(!i || (!o && '0px' === i) ? [] : R(i), e, n, 0, 0, r);
        }
        function Zi(t, e, n, r, o, i) {
          var a = t.state,
            s = a.width,
            u = a.height,
            c = zi(i, o, t.props.roundRelative, s, u),
            l = c.raws,
            f = c.styles,
            p = Hi(o, l),
            d = p.horizontals,
            h = p.verticals,
            v = f.join(' ');
          (a.borderRadiusState = v),
            dr(
              t,
              'onRound',
              fr(t, e, {
                horizontals: d,
                verticals: h,
                borderRadius: v,
                width: s,
                height: u,
                delta: r,
                dist: n,
              })
            );
        }
        var ta = {
            name: 'roundable',
            props: {
              roundable: Boolean,
              roundRelative: Boolean,
              minRoundControls: Array,
              maxRoundControls: Array,
              roundClickable: Boolean,
            },
            events: {
              onRoundStart: 'roundStart',
              onRound: 'round',
              onRoundEnd: 'roundEnd',
            },
            css: [
              '.control.border-radius {\n    background: #d66;\n    cursor: pointer;\n}',
              ':host[data-able-roundable] .line.direction {\n    cursor: pointer;\n}',
            ],
            render: function (t, e) {
              var n = t.state,
                r = n.target,
                o = n.width,
                i = n.height,
                a = n.allMatrix,
                s = n.is3d,
                u = n.left,
                c = n.top,
                l = n.borderRadiusState,
                f = t.props,
                p = f.minRoundControls,
                d = void 0 === p ? [0, 0] : p,
                h = f.maxRoundControls,
                v = void 0 === h ? [4, 4] : h,
                g = f.zoom;
              if (!r) return null;
              var m = s ? 4 : 3,
                y = $i(r, o, i, d, l);
              if (!y) return null;
              var b = 0,
                x = 0;
              return y.map(function (t, n) {
                (x += Math.abs(t.horizontal)), (b += Math.abs(t.vertical));
                var r = ne(Un(a, t.pos, m), [u, c]),
                  o = t.vertical ? b <= v[1] : x <= v[0];
                return e.createElement('div', {
                  key: 'borderRadiusControl' + n,
                  className: In('control', 'border-radius'),
                  'data-radius-index': n,
                  style: {
                    display: o ? 'block' : 'none',
                    transform:
                      'translate(' +
                      r[0] +
                      'px, ' +
                      r[1] +
                      'px) scale(' +
                      g +
                      ')',
                  },
                });
              });
            },
            dragControlCondition: function (t, e) {
              if (!e.inputEvent || e.isRequest) return !1;
              var n = e.inputEvent.target.getAttribute('class') || '';
              return (
                n.indexOf('border-radius') > -1 ||
                (n.indexOf('moveable-line') > -1 &&
                  n.indexOf('moveable-direction') > -1)
              );
            },
            dragControlStart: function (t, e) {
              var n = e.inputEvent,
                r = e.datas,
                o = n.target,
                i = o.getAttribute('class') || '',
                a = i.indexOf('border-radius') > -1,
                s =
                  i.indexOf('moveable-line') > -1 &&
                  i.indexOf('moveable-direction') > -1,
                u = a ? parseInt(o.getAttribute('data-radius-index'), 10) : -1,
                c = s ? parseInt(o.getAttribute('data-line-index'), 10) : -1;
              if (!a && !s) return !1;
              if (!1 === dr(t, 'onRoundStart', fr(t, e, {}))) return !1;
              (r.lineIndex = c),
                (r.controlIndex = u),
                (r.isControl = a),
                (r.isLine = s),
                Fr(t, e);
              var l = t.props,
                f = l.roundRelative,
                p = l.minRoundControls,
                d = void 0 === p ? [0, 0] : p,
                h = t.state,
                v = h.target,
                g = h.width,
                m = h.height;
              (r.isRound = !0), (r.prevDist = [0, 0]);
              var y = $i(v, g, m, d) || [];
              return (
                (r.controlPoses = y),
                (h.borderRadiusState = zi(
                  y.map(function (t) {
                    return t.pos;
                  }),
                  y,
                  f,
                  g,
                  m
                ).styles.join(' ')),
                !0
              );
            },
            dragControl: function (t, e) {
              var n = e.datas;
              if (!n.isRound || !n.isControl || !n.controlPoses.length)
                return !1;
              var r = n.controlIndex,
                o = n.controlPoses,
                i = qr(e),
                a = i[0],
                s = i[1],
                u = [a, s],
                c = ne(u, n.prevDist),
                l = t.props.maxRoundControls,
                f = void 0 === l ? [4, 4] : l,
                p = t.state,
                d = p.width,
                h = p.height,
                v = o[r],
                g = v.vertical,
                m = v.horizontal,
                y = o.map(function (t) {
                  var e = t.horizontal,
                    n = t.vertical,
                    r = [e * m * u[0], n * g * u[1]];
                  if (e) {
                    if (1 === f[0]) return r;
                    if (f[0] < 4 && e !== m) return r;
                  } else {
                    if (0 === f[1]) return (r[1] = ((n * m * u[0]) / d) * h), r;
                    if (g) {
                      if (1 === f[1]) return r;
                      if (f[1] < 4 && n !== g) return r;
                    }
                  }
                  return [0, 0];
                });
              y[r] = u;
              var b = o.map(function (t, e) {
                return ee(t.pos, y[e]);
              });
              return (n.prevDist = [a, s]), Zi(t, e, u, c, o, b), !0;
            },
            dragControlEnd: function (t, e) {
              var n = t.state;
              n.borderRadiusState = '';
              var r = e.datas,
                o = e.isDouble;
              if (!r.isRound) return !1;
              var i = n.width,
                a = n.height,
                s = r.isControl,
                u = r.controlIndex,
                c = r.isLine,
                l = r.lineIndex,
                f = r.controlPoses,
                p = f.map(function (t) {
                  return t.pos;
                }),
                d = p.length,
                h = t.props.roundClickable;
              if (o && (void 0 === h || h)) {
                if (s) Wi(f, p, u, 0);
                else if (c) {
                  var v = _r(t, e);
                  !(function (t, e, n, r, o, i, a) {
                    var s = Hi(t),
                      u = s.horizontals,
                      c = s.verticals,
                      l = u.length,
                      f = c.length,
                      p = -1,
                      d = -1;
                    0 === n
                      ? 0 === l
                        ? (p = 0)
                        : 1 === l && (p = 1)
                      : 3 === n && (l <= 2 ? (p = 2) : l <= 3 && (p = 3)),
                      2 === n
                        ? 0 === f
                          ? (d = 0)
                          : f < 4 && (d = 3)
                        : 1 === n && (f <= 1 ? (d = 1) : f <= 2 && (d = 2)),
                      qi(t, e, 0, p, d, r, o, i, a);
                  })(f, p, l, v[0], v[1], i, a);
                }
                d !== f.length && Zi(t, e, [0, 0], [0, 0], f, p);
              }
              return (
                dr(t, 'onRoundEnd', pr(t, e, {})),
                (n.borderRadiusState = ''),
                !0
              );
            },
            unset: function (t) {
              t.state.borderRadiusState = '';
            },
          },
          ea = {
            isPinch: !0,
            name: 'beforeRenderable',
            props: {},
            events: {
              onBeforeRenderStart: 'beforeRenderStart',
              onBeforeRender: 'beforeRender',
              onBeforeRenderEnd: 'beforeRenderEnd',
              onBeforeRenderGroupStart: 'beforeRenderGroupStart',
              onBeforeRenderGroup: 'beforeRenderGroup',
              onBeforeRenderGroupEnd: 'beforeRenderGroupEnd',
            },
            setTransform: function (t, e) {
              var n = t.state,
                r = n.is3d,
                o = n.target,
                i = n.targetMatrix,
                a = null == o ? void 0 : o.style.transform,
                s = r
                  ? 'matrix3d(' + i.join(',') + ')'
                  : 'matrix(' + oe(i, !0) + ')';
              e.datas.startTransforms = a && 'none' !== a ? R(a) : [s];
            },
            resetTransform: function (t, e) {
              (e.datas.nextTransforms = e.datas.startTransforms),
                (e.datas.nextTransformAppendedIndexes = []);
            },
            fillDragStartParams: function (t, e) {
              return fr(t, e, {
                setTransform: function (t) {
                  e.datas.startTransforms = C(t) ? t : R(t);
                },
                isPinch: !!e.isPinch,
              });
            },
            fillDragParams: function (t, e) {
              return fr(t, e, {
                isPinch: !!e.isPinch,
              });
            },
            dragStart: function (t, e) {
              this.setTransform(t, e),
                dr(t, 'onBeforeRenderStart', this.fillDragStartParams(t, e));
            },
            drag: function (t, e) {
              this.resetTransform(t, e),
                dr(
                  t,
                  'onBeforeRender',
                  fr(t, e, {
                    isPinch: !!e.isPinch,
                  })
                );
            },
            dragEnd: function (t, e) {
              dr(
                t,
                'onBeforeRenderEnd',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                  isDrag: e.isDrag,
                })
              );
            },
            dragGroupStart: function (t, e) {
              var n = this;
              this.dragStart(t, e);
              var r = kr(t, 'beforeRenderable', e),
                o = t.moveables,
                i = r.map(function (t, e) {
                  var r = o[e];
                  return n.setTransform(r, t), n.fillDragStartParams(r, t);
                });
              dr(
                t,
                'onBeforeRenderGroupStart',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                  targets: t.props.targets,
                  setTransform: function () {},
                  events: i,
                })
              );
            },
            dragGroup: function (t, e) {
              var n = this;
              this.drag(t, e);
              var r = kr(t, 'beforeRenderable', e),
                o = t.moveables,
                i = r.map(function (t, e) {
                  var r = o[e];
                  return n.resetTransform(r, t), n.fillDragParams(r, t);
                });
              dr(
                t,
                'onBeforeRenderGroup',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                  targets: t.props.targets,
                  events: i,
                })
              );
            },
            dragGroupEnd: function (t, e) {
              this.dragEnd(t, e),
                dr(
                  t,
                  'onBeforeRenderGroupEnd',
                  fr(t, e, {
                    isPinch: !!e.isPinch,
                    isDrag: e.isDrag,
                    targets: t.props.targets,
                  })
                );
            },
            dragControlStart: function (t, e) {
              return this.dragStart(t, e);
            },
            dragControl: function (t, e) {
              return this.drag(t, e);
            },
            dragControlEnd: function (t, e) {
              return this.dragEnd(t, e);
            },
            dragGroupControlStart: function (t, e) {
              return this.dragGroupStart(t, e);
            },
            dragGroupControl: function (t, e) {
              return this.dragGroup(t, e);
            },
            dragGroupControlEnd: function (t, e) {
              return this.dragGroupEnd(t, e);
            },
          },
          na = {
            name: 'renderable',
            props: {},
            events: {
              onRenderStart: 'renderStart',
              onRender: 'render',
              onRenderEnd: 'renderEnd',
              onRenderGroupStart: 'renderGroupStart',
              onRenderGroup: 'renderGroup',
              onRenderGroupEnd: 'renderGroupEnd',
            },
            dragStart: function (t, e) {
              dr(
                t,
                'onRenderStart',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                })
              );
            },
            drag: function (t, e) {
              dr(
                t,
                'onRender',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                })
              );
            },
            dragEnd: function (t, e) {
              dr(
                t,
                'onRenderEnd',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                  isDrag: e.isDrag,
                })
              );
            },
            dragGroupStart: function (t, e) {
              dr(
                t,
                'onRenderGroupStart',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                  targets: t.props.targets,
                })
              );
            },
            dragGroup: function (t, e) {
              dr(
                t,
                'onRenderGroup',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                  targets: t.props.targets,
                })
              );
            },
            dragGroupEnd: function (t, e) {
              dr(
                t,
                'onRenderGroupEnd',
                fr(t, e, {
                  isPinch: !!e.isPinch,
                  isDrag: e.isDrag,
                  targets: t.props.targets,
                })
              );
            },
            dragControlStart: function (t, e) {
              return this.dragStart(t, e);
            },
            dragControl: function (t, e) {
              return this.drag(t, e);
            },
            dragControlEnd: function (t, e) {
              return this.dragEnd(t, e);
            },
            dragGroupControlStart: function (t, e) {
              return this.dragGroupStart(t, e);
            },
            dragGroupControl: function (t, e) {
              return this.dragGroup(t, e);
            },
            dragGroupControlEnd: function (t, e) {
              return this.dragGroupEnd(t, e);
            },
          };
        function ra(t, e, n, r, o, i, a) {
          var s = 'Start' === o,
            u = t.state.target,
            c = i.isRequest;
          if (
            !u ||
            (s &&
              r.indexOf('Control') > -1 &&
              !c &&
              t.areaElement === i.inputEvent.target)
          )
            return !1;
          var l = '' + n + r + o,
            f = '' + n + r + 'Condition',
            p = 'End' === o,
            d = o.indexOf('After') > -1,
            h =
              s &&
              (!t.targetGesto ||
                !t.controlGesto ||
                !t.targetGesto.isFlag() ||
                !t.controlGesto.isFlag());
          h && t.updateRect(o, !0, !1), '' !== o || d || c || wr(t.state, i);
          var v = mn([ea], t[e].slice(), [na]);
          if (c) {
            var g = i.requestAble;
            v.some(function (t) {
              return t.name === g;
            }) ||
              v.push.apply(
                v,
                t.props.ables.filter(function (t) {
                  return t.name === g;
                })
              );
          }
          if (!v.length) return !1;
          var m = v.filter(function (t) {
              return t[l];
            }),
            y = i.datas;
          h &&
            m.forEach(function (e) {
              e.unset && e.unset(t);
            });
          var b,
            x = i.inputEvent;
          p &&
            x &&
            (b = document.elementFromPoint(i.clientX, i.clientY) || x.target);
          var w = m.filter(function (e) {
              var n = e.name,
                r = y[n] || (y[n] = {});
              return (
                s && (r.isEventStart = !e[f] || e[f](t, i)),
                !!r.isEventStart &&
                  e[l](
                    t,
                    gn(gn({}, i), {
                      datas: r,
                      originalDatas: y,
                      inputTarget: b,
                    })
                  )
              );
            }).length,
            E = s && m.length && !w;
          return (
            (p || E) &&
              ((t.state.gesto = null),
              t.moveables &&
                t.moveables.forEach(function (t) {
                  t.state.gesto = null;
                })),
            h &&
              E &&
              m.forEach(function (e) {
                e.unset && e.unset(t);
              }),
            !t.isUnmounted &&
              !E &&
              (((!s && w && !a) || p) &&
                (t.updateRect(o, !0, !1), t.forceUpdate()),
              s || p || d || !w || a || ra(t, e, n, r, o + 'After', i),
              !0)
          );
        }
        function oa(t, e, n) {
          var r = t.controlBox.getElement(),
            o = [];
          o.push(r), (t.props.dragArea && !t.props.dragTarget) || o.push(e);
          var i = function (e) {
            var n = e.inputEvent.target;
            return (
              n === t.areaElement ||
              !t.isMoveableElement(n) ||
              J(n, 'moveable-area') ||
              J(n, 'moveable-padding')
            );
          };
          return ia(t, o, 'targetAbles', n, {
            dragStart: i,
            pinchStart: i,
          });
        }
        function ia(t, e, n, r, o) {
          void 0 === o && (o = {});
          var i = t.props,
            a = i.pinchOutside,
            s = i.pinchThreshold,
            u = {
              container: window,
              pinchThreshold: s,
              pinchOutside: a,
            },
            c = new on(e, u);
          return (
            ['drag', 'pinch'].forEach(function (e) {
              ['Start', '', 'End'].forEach(function (i) {
                c.on('' + e + i, function (a) {
                  var s = a.eventType;
                  !o[s] || o[s](a)
                    ? ra(t, n, e, r, i, a) || a.stop()
                    : a.stop();
                });
              });
            }),
            c
          );
        }
        var aa = (function () {
            function t(t, e, n) {
              var r = this;
              (this.target = t),
                (this.moveable = e),
                (this.eventName = n),
                (this.ables = []),
                (this.onEvent = function (t) {
                  var e = r.eventName,
                    n = r.moveable;
                  n.state.disableNativeEvent ||
                    r.ables.forEach(function (r) {
                      r[e](n, {
                        inputEvent: t,
                      });
                    });
                }),
                this.target.addEventListener(
                  this.eventName.toLowerCase(),
                  this.onEvent
                );
            }
            var e = t.prototype;
            return (
              (e.setAbles = function (t) {
                this.ables = t;
              }),
              (e.destroy = function () {
                this.target.removeEventListener(
                  this.eventName.toLowerCase(),
                  this.onEvent
                ),
                  (this.target = null),
                  (this.moveable = null);
              }),
              t
            );
          })(),
          sa = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.state = gn(
                  {
                    container: null,
                    target: null,
                    gesto: null,
                    renderPoses: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                    ],
                    disableNativeEvent: !1,
                  },
                  ir(null)
                )),
                (e.enabledAbles = []),
                (e.targetAbles = []),
                (e.controlAbles = []),
                (e.rotation = 0),
                (e.scale = [1, 1]),
                (e.isUnmounted = !1),
                (e.events = {
                  mouseEnter: null,
                  mouseLeave: null,
                }),
                (e.onPreventClick = function (t) {
                  t.stopPropagation(), $(window, 'click', e.onPreventClick, !0);
                }),
                e
              );
            }
            vn(e, t);
            var n = e.prototype;
            return (
              (n.render = function () {
                var t = this.props,
                  e = this.state,
                  n = t.edge,
                  r = t.parentPosition,
                  o = t.className,
                  a = t.target,
                  s = t.zoom,
                  u = t.cspNonce,
                  c = t.translateZ,
                  l = t.cssStyled,
                  f = t.portalContainer;
                this.checkUpdate(), this.updateRenderPoses();
                var p = r || {
                    left: 0,
                    top: 0,
                  },
                  d = p.left,
                  h = p.top,
                  v = e.left,
                  g = e.top,
                  m = e.target,
                  y = e.direction,
                  b = e.renderPoses,
                  x = t.targets,
                  w = ((x && x.length) || a) && m,
                  E = this.isDragging(),
                  S = {},
                  O = {
                    createElement: ft,
                  };
                return (
                  this.getEnabledAbles().forEach(function (t) {
                    S['data-able-' + t.name.toLowerCase()] = !0;
                  }),
                  ft(
                    l,
                    gn(
                      {
                        cspNonce: u,
                        ref: i(this, 'controlBox'),
                        className:
                          In(
                            'control-box',
                            -1 === y ? 'reverse' : '',
                            E ? 'dragging' : ''
                          ) +
                          ' ' +
                          o,
                      },
                      S,
                      {
                        onClick: this.onPreventClick,
                        portalContainer: f,
                        style: {
                          position: 'absolute',
                          display: w ? 'block' : 'none',
                          transform:
                            'translate3d(' +
                            (v - d) +
                            'px, ' +
                            (g - h) +
                            'px, ' +
                            c +
                            ')',
                          '--zoom': s,
                          '--zoompx': s + 'px',
                        },
                      }
                    ),
                    this.renderAbles(),
                    ui(O, n ? 'n' : '', b[0], b[1], s, 0),
                    ui(O, n ? 'e' : '', b[1], b[3], s, 1),
                    ui(O, n ? 'w' : '', b[0], b[2], s, 2),
                    ui(O, n ? 's' : '', b[2], b[3], s, 3)
                  )
                );
              }),
              (n.componentDidMount = function () {
                this.controlBox.getElement();
                var t = this.props,
                  e = t.parentMoveable,
                  n = t.container,
                  r = t.wrapperMoveable;
                this.updateEvent(t),
                  this.updateNativeEvents(t),
                  n || e || r || this.updateRect('', !1, !0),
                  this.updateCheckInput();
              }),
              (n.componentDidUpdate = function (t) {
                this.updateNativeEvents(t),
                  this.updateEvent(t),
                  this.updateCheckInput();
              }),
              (n.componentWillUnmount = function () {
                (this.isUnmounted = !0),
                  lr(this, 'targetGesto'),
                  lr(this, 'controlGesto');
                var t = this.events;
                for (var e in t) {
                  var n = t[e];
                  n && n.destroy();
                }
              }),
              (n.getContainer = function () {
                var t = this.props,
                  e = t.parentMoveable,
                  n = t.wrapperMoveable;
                return (
                  t.container ||
                  (n && n.getContainer()) ||
                  (e && e.getContainer()) ||
                  this.controlBox.getElement().parentElement
                );
              }),
              (n.isMoveableElement = function (t) {
                return t && (t.getAttribute('class') || '').indexOf(Sn) > -1;
              }),
              (n.dragStart = function (t) {
                return (
                  this.targetGesto && this.targetGesto.triggerDragStart(t), this
                );
              }),
              (n.hitTest = function (t) {
                var e,
                  n = this.state,
                  r = n.target,
                  o = n.pos1,
                  i = n.pos2,
                  a = n.pos3,
                  s = n.pos4,
                  u = n.targetClientRect;
                if (!r) return 0;
                if (t instanceof Element) {
                  var c = t.getBoundingClientRect();
                  e = {
                    left: c.left,
                    top: c.top,
                    width: c.width,
                    height: c.height,
                  };
                } else
                  e = gn(
                    {
                      width: 0,
                      height: 0,
                    },
                    t
                  );
                var l = e.left,
                  f = e.top,
                  p = e.width,
                  d = e.height,
                  h = Oe([o, i, s, a], u),
                  v = Re(h, [
                    [l, f],
                    [l + p, f],
                    [l + p, f + d],
                    [l, f + d],
                  ]),
                  g = Se(h);
                return v && g ? Math.min(100, (v / g) * 100) : 0;
              }),
              (n.isInside = function (t, e) {
                var n = this.state,
                  r = n.target,
                  o = n.pos1,
                  i = n.pos2,
                  a = n.pos3,
                  s = n.pos4,
                  u = n.targetClientRect;
                return !!r && Ce([t, e], Oe([o, i, s, a], u));
              }),
              (n.updateRect = function (t, e, n) {
                void 0 === n && (n = !0);
                var r = this.props,
                  o = r.parentMoveable,
                  i = this.state.target || this.props.target,
                  a = this.getContainer(),
                  s = o ? o.props.rootContainer : r.rootContainer;
                this.updateState(
                  ir(
                    this.controlBox && this.controlBox.getElement(),
                    i,
                    a,
                    a,
                    s || a
                  ),
                  !o && n
                );
              }),
              (n.isTargetChanged = function (t, e) {
                var n = this.props,
                  r = n.dragTarget || n.target,
                  o = t.dragTarget || t.target,
                  i = n.dragArea,
                  a = t.dragArea;
                return (!i && o !== r) || ((e || i) && a !== i);
              }),
              (n.updateNativeEvents = function (t) {
                var e = this,
                  n = this.props.dragArea
                    ? this.areaElement
                    : this.state.target,
                  r = this.events,
                  o = G(r);
                if (this.isTargetChanged(t))
                  for (var i in r) {
                    var a = r[i];
                    a && a.destroy(), (r[i] = null);
                  }
                if (n) {
                  var s = this.enabledAbles;
                  o.forEach(function (t) {
                    var o = vr(s, [t]),
                      i = o.length > 0,
                      a = r[t];
                    i
                      ? (a || ((a = new aa(n, e, t)), (r[t] = a)),
                        a.setAbles(o))
                      : a && (a.destroy(), (r[t] = null));
                  });
                }
              }),
              (n.updateEvent = function (t) {
                var e = this.controlBox.getElement(),
                  n = this.targetAbles.length,
                  r = this.controlAbles.length,
                  o = this.props,
                  i = o.dragTarget || o.target,
                  a = this.isTargetChanged(t, !0),
                  s = (!n && this.targetGesto) || a;
                s &&
                  (lr(this, 'targetGesto'),
                  this.updateState({
                    gesto: null,
                  })),
                  r || lr(this, 'controlGesto'),
                  i &&
                    n &&
                    !this.targetGesto &&
                    (this.targetGesto = oa(this, i, '')),
                  !this.controlGesto &&
                    r &&
                    (this.controlGesto = ia(
                      this,
                      e,
                      'controlAbles',
                      'Control'
                    )),
                  s && this.unsetAbles();
              }),
              (n.isDragging = function () {
                return (
                  (!!this.targetGesto && this.targetGesto.isFlag()) ||
                  (!!this.controlGesto && this.controlGesto.isFlag())
                );
              }),
              (n.updateTarget = function (t) {
                this.updateRect(t, !0);
              }),
              (n.getRect = function () {
                var t = this.state,
                  e = cr(this.state),
                  n = e[0],
                  r = e[1],
                  o = e[2],
                  i = e[3],
                  a = Jn(e),
                  s = t.width,
                  u = t.height,
                  c = a.width,
                  l = a.height,
                  f = a.left,
                  p = a.top,
                  d = [t.left, t.top],
                  h = ee(d, t.origin);
                return {
                  width: c,
                  height: l,
                  left: f,
                  top: p,
                  pos1: n,
                  pos2: r,
                  pos3: o,
                  pos4: i,
                  offsetWidth: s,
                  offsetHeight: u,
                  beforeOrigin: ee(d, t.beforeOrigin),
                  origin: h,
                  transformOrigin: t.transformOrigin,
                  rotation: this.getRotation(),
                };
              }),
              (n.getManager = function () {
                return this;
              }),
              (n.getRotation = function () {
                var t = this.state;
                return (function (t, e, n) {
                  var r = (Y(t, e) / Math.PI) * 180;
                  return (r = n >= 0 ? r : 180 - r) >= 0 ? r : 360 + r;
                })(t.pos1, t.pos2, t.direction);
              }),
              (n.request = function (t, e, n) {
                void 0 === e && (e = {});
                var r = this.props,
                  o = r.ables,
                  i = r.groupable,
                  a = o.filter(function (e) {
                    return e.name === t;
                  })[0];
                if (this.isDragging() || !a || !a.request)
                  return {
                    request: function () {
                      return this;
                    },
                    requestEnd: function () {
                      return this;
                    },
                  };
                var s = this,
                  u = a.request(this),
                  c = n || e.isInstant,
                  l = u.isControl ? 'controlAbles' : 'targetAbles',
                  f = (i ? 'Group' : '') + (u.isControl ? 'Control' : ''),
                  p = {
                    request: function (e) {
                      return (
                        ra(
                          s,
                          l,
                          'drag',
                          f,
                          '',
                          gn(gn({}, u.request(e)), {
                            requestAble: t,
                            isRequest: !0,
                          }),
                          c
                        ),
                        this
                      );
                    },
                    requestEnd: function () {
                      return (
                        ra(
                          s,
                          l,
                          'drag',
                          f,
                          'End',
                          gn(gn({}, u.requestEnd()), {
                            requestAble: t,
                            isRequest: !0,
                          }),
                          c
                        ),
                        this
                      );
                    },
                  };
                return (
                  ra(
                    s,
                    l,
                    'drag',
                    f,
                    'Start',
                    gn(gn({}, u.requestStart(e)), {
                      requestAble: t,
                      isRequest: !0,
                    }),
                    c
                  ),
                  c ? p.request(e).requestEnd() : p
                );
              }),
              (n.destroy = function () {
                this.componentWillUnmount();
              }),
              (n.updateRenderPoses = function () {
                var t = this.state,
                  e = this.props,
                  n = t.originalBeforeOrigin,
                  r = t.transformOrigin,
                  o = t.allMatrix,
                  i = t.is3d,
                  a = t.pos1,
                  s = t.pos2,
                  u = t.pos3,
                  c = t.pos4,
                  l = t.left,
                  f = t.top,
                  p = e.padding || {},
                  d = p.left,
                  h = void 0 === d ? 0 : d,
                  v = p.top,
                  g = void 0 === v ? 0 : v,
                  m = p.bottom,
                  y = void 0 === m ? 0 : m,
                  b = p.right,
                  x = void 0 === b ? 0 : b,
                  w = i ? 4 : 3,
                  E = e.groupable ? n : ee(n, [l, f]);
                t.renderPoses = [
                  ee(a, Er(o, [-h, -g], r, E, w)),
                  ee(s, Er(o, [x, -g], r, E, w)),
                  ee(u, Er(o, [-h, y], r, E, w)),
                  ee(c, Er(o, [x, y], r, E, w)),
                ];
              }),
              (n.checkUpdate = function () {
                var t = this.props,
                  e = t.target,
                  n = t.container,
                  r = t.parentMoveable,
                  o = this.state,
                  i = o.target,
                  a = o.container;
                (i || e) &&
                  (this.updateAbles(),
                  (!gr(i, e) || !gr(a, n)) &&
                    (this.updateState({
                      target: e,
                      container: n,
                    }),
                    r ||
                      (!n && !this.controlBox) ||
                      this.updateRect('End', !1, !1)));
              }),
              (n.triggerEvent = function (t, e) {
                var n = this.props[t];
                return n && n(e);
              }),
              (n.useCSS = function (t, e) {
                var n = this.props.customStyledMap,
                  r = t + e;
                return n[r] || (n[r] = dn(t, e)), n[r];
              }),
              (n.unsetAbles = function () {
                var t = this;
                this.targetAbles.filter(function (e) {
                  return !!e.unset && (e.unset(t), !0);
                }).length && this.forceUpdate();
              }),
              (n.updateAbles = function (t, e) {
                void 0 === t && (t = this.props.ables),
                  void 0 === e && (e = '');
                var n = this.props,
                  r = n.triggerAblesSimultaneously,
                  o = t.filter(function (t) {
                    return t && (t.always || n[t.name]);
                  }),
                  i = 'drag' + e + 'ControlStart',
                  a = vr(o, ['drag' + e + 'Start', 'pinch' + e + 'Start'], r),
                  s = vr(o, [i], r);
                (this.enabledAbles = o),
                  (this.targetAbles = a),
                  (this.controlAbles = s);
              }),
              (n.updateState = function (t, e) {
                if (e) this.setState(t);
                else {
                  var n = this.state;
                  for (var r in t) n[r] = t[r];
                }
              }),
              (n.getEnabledAbles = function () {
                var t = this.props;
                return t.ables.filter(function (e) {
                  return e && t[e.name];
                });
              }),
              (n.renderAbles = function () {
                var t,
                  e,
                  n,
                  r,
                  o = this,
                  i = this.props.triggerAblesSimultaneously,
                  a = {
                    createElement: ft,
                  };
                return ((t = yr(
                  vr(this.getEnabledAbles(), ['render'], i).map(function (t) {
                    return (0, t.render)(o, a) || [];
                  })
                ).filter(function (t) {
                  return t;
                })),
                (e = function (t) {
                  return t.key;
                }),
                (n = []),
                (r = {}),
                t.forEach(function (o, i) {
                  var a = e(o, i, t),
                    s = r[a];
                  s || ((s = []), (r[a] = s), n.push(s)), s.push(o);
                }),
                n).map(function (t) {
                  return t[0];
                });
              }),
              (n.updateCheckInput = function () {
                this.targetGesto &&
                  (this.targetGesto.options.checkInput = this.props.checkInput);
              }),
              (e.defaultProps = {
                target: null,
                dragTarget: null,
                container: null,
                rootContainer: null,
                origin: !0,
                edge: !1,
                parentMoveable: null,
                wrapperMoveable: null,
                parentPosition: null,
                portalContainer: null,
                ables: [],
                pinchThreshold: 20,
                dragArea: !1,
                passDragArea: !1,
                transformOrigin: '',
                className: '',
                zoom: 1,
                triggerAblesSimultaneously: !1,
                padding: {},
                pinchOutside: !0,
                checkInput: !1,
                groupable: !1,
                cspNonce: '',
                translateZ: 0,
                cssStyled: null,
                customStyledMap: {},
                props: {},
              }),
              e
            );
          })(Et),
          ua = {
            name: 'groupable',
            props: {
              defaultGroupRotate: Number,
              defaultGroupOrigin: String,
              groupable: Boolean,
            },
            events: {},
            render: function (t, e) {
              var n = t.props.targets || [];
              t.moveables = [];
              var r = t.state,
                o = {
                  left: r.left,
                  top: r.top,
                };
              return n.map(function (n, r) {
                return e.createElement(sa, {
                  key: 'moveable' + r,
                  ref: a(t, 'moveables', r),
                  target: n,
                  origin: !1,
                  cssStyled: t.props.cssStyled,
                  customStyledMap: t.props.customStyledMap,
                  parentMoveable: t,
                  parentPosition: o,
                });
              });
            },
          },
          ca = yn('clickable', {
            props: {},
            events: {
              onClick: 'click',
              onClickGroup: 'clickGroup',
            },
            always: !0,
            dragStart: function (t, e) {
              e.isRequest || K(window, 'click', t.onPreventClick, !0);
            },
            dragControlStart: function (t, e) {
              this.dragStart(t, e);
            },
            dragGroupStart: function (t, e) {
              this.dragStart(t, e),
                (e.datas.inputTarget = e.inputEvent && e.inputEvent.target);
            },
            dragEnd: function (t, e) {
              this.endEvent(t);
              var n = t.state.target,
                r = e.inputEvent,
                o = e.inputTarget;
              if (r && o && !e.isDrag && !t.isMoveableElement(o)) {
                var i = n.contains(o);
                dr(
                  t,
                  'onClick',
                  fr(t, e, {
                    isDouble: e.isDouble,
                    inputTarget: o,
                    isTarget: n === o,
                    containsTarget: i,
                  })
                );
              }
            },
            dragGroupEnd: function (t, e) {
              this.endEvent(t);
              var n = e.inputEvent,
                r = e.inputTarget;
              if (
                n &&
                r &&
                !e.isDrag &&
                !t.isMoveableElement(r) &&
                e.datas.inputTarget !== r
              ) {
                var o = t.props.targets,
                  i = o.indexOf(r),
                  a = i > -1,
                  s = !1;
                -1 === i &&
                  (s =
                    (i = N(o, function (t) {
                      return t.contains(r);
                    })) > -1),
                  dr(
                    t,
                    'onClickGroup',
                    fr(t, e, {
                      isDouble: e.isDouble,
                      targets: o,
                      inputTarget: r,
                      targetIndex: i,
                      isTarget: a,
                      containsTarget: s,
                    })
                  );
              }
            },
            dragControlEnd: function (t) {
              this.endEvent(t);
            },
            dragGroupControlEnd: function (t) {
              this.endEvent(t);
            },
            endEvent: function (t) {
              var e = this;
              requestAnimationFrame(function () {
                e.unset(t);
              });
            },
            unset: function (t) {
              $(window, 'click', t.onPreventClick, !0);
            },
          });
        function la(t) {
          var e = t.originalDatas.draggable;
          return (
            e ||
              ((t.originalDatas.draggable = {}),
              (e = t.originalDatas.draggable)),
            gn(gn({}, t), {
              datas: e,
            })
          );
        }
        var fa = yn('edgeDraggable', {
            dragControlCondition: function (t, e) {
              if (!t.props.edgeDraggable || !e.inputEvent) return !1;
              var n = e.inputEvent.target;
              return J(n, In('direction')) && J(n, In('line'));
            },
            dragControlStart: function (t, e) {
              return ai.dragStart(t, la(e));
            },
            dragControl: function (t, e) {
              return ai.drag(t, la(e));
            },
            dragControlEnd: function (t, e) {
              return ai.dragEnd(t, la(e));
            },
            dragGroupControlCondition: function (t, e) {
              if (!t.props.edgeDraggable || !e.inputEvent) return !1;
              var n = e.inputEvent.target;
              return J(n, In('direction')) && J(n, In('line'));
            },
            dragGroupControlStart: function (t, e) {
              return ai.dragGroupStart(t, la(e));
            },
            dragGroupControl: function (t, e) {
              return ai.dragGroup(t, la(e));
            },
            dragGroupControlEnd: function (t, e) {
              return ai.dragGroupEnd(t, la(e));
            },
            unset: function (t) {
              t.state.dragInfo = null;
            },
          }),
          pa = {
            name: 'individualGroupable',
            props: {
              individualGroupable: Boolean,
            },
            events: {},
          },
          da = [
            ea,
            Ti,
            ii,
            jr,
            ai,
            fa,
            gi,
            mi,
            yi,
            wi,
            ji,
            Ri,
            Di,
            Ki,
            Ji,
            ta,
            ua,
            pa,
            ca,
            Mi,
            na,
          ],
          ha = da.reduce(function (t, e) {
            return gn(gn({}, t), 'events' in e ? e.events : {});
          }, {}),
          va = da.reduce(function (t, e) {
            return gn(gn({}, t), e.props);
          }, {}),
          ga = Cr(ha),
          ma = Object.keys(ga),
          ya = Object.keys(va);
        function ba(t, e) {
          return Math.max.apply(
            Math,
            t.map(function (t) {
              var n = t[0],
                r = t[1],
                o = t[2],
                i = t[3];
              return Math.max(n[e], r[e], o[e], i[e]);
            })
          );
        }
        function xa(t, e) {
          return Math.min.apply(
            Math,
            t.map(function (t) {
              var n = t[0],
                r = t[1],
                o = t[2],
                i = t[3];
              return Math.min(n[e], r[e], o[e], i[e]);
            })
          );
        }
        var wa = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.differ = new Fe()),
                (e.moveables = []),
                (e.transformOrigin = '50% 50%'),
                e
              );
            }
            vn(e, t);
            var n = e.prototype;
            return (
              (n.updateEvent = function (t) {
                var e = this.state,
                  n = this.props,
                  r = t.dragTarget || e.target,
                  o = n.dragTarget || this.areaElement;
                r !== o &&
                  (lr(this, 'targetGesto'),
                  lr(this, 'controlGesto'),
                  (e.target = null)),
                  e.target ||
                    ((e.target = this.areaElement),
                    (this.controlBox.getElement().style.display = 'block'),
                    (this.targetGesto = oa(this, o, 'Group')),
                    (this.controlGesto = ia(
                      this,
                      this.controlBox.getElement(),
                      'controlAbles',
                      'GroupControl'
                    )));
                var i = !gr(t.container, n.container);
                i && (e.container = n.container);
                var a = this.differ.update(n.targets),
                  s = a.added,
                  u = a.changed,
                  c = a.removed;
                (i || s.length || u.length || c.length) && this.updateRect();
              }),
              (n.checkUpdate = function () {
                this.updateAbles();
              }),
              (n.updateRect = function (t, e, n) {
                if ((void 0 === n && (n = !0), this.controlBox)) {
                  this.moveables.forEach(function (e) {
                    e.updateRect(t, !1, !1);
                  });
                  var r = this.state,
                    o = this.props,
                    i = r.target || o.target;
                  (!e || ('' !== t && o.updateGroup)) &&
                    ((this.rotation = o.defaultGroupRotate),
                    (this.transformOrigin = o.defaultGroupOrigin || '50% 50%'),
                    (this.scale = [1, 1]));
                  var a = this.rotation,
                    s = this.scale,
                    u = (function (t, e) {
                      if (!t.length) return [0, 0, 0, 0];
                      var n = t.map(function (t) {
                          return cr(t.state);
                        }),
                        r = Pn,
                        o = Pn,
                        i = 0,
                        a = 0,
                        s = U(e, Mn);
                      if (s % 90) {
                        var u = (s / 180) * Math.PI,
                          c = Math.tan(u),
                          l = -1 / c,
                          f = [jn, Pn],
                          p = [jn, Pn];
                        n.forEach(function (t) {
                          t.forEach(function (t) {
                            var e = t[1] - c * t[0],
                              n = t[1] - l * t[0];
                            (f[0] = Math.max(f[0], e)),
                              (f[1] = Math.min(f[1], e)),
                              (p[0] = Math.max(p[0], n)),
                              (p[1] = Math.min(p[1], n));
                          });
                        }),
                          f.forEach(function (t) {
                            p.forEach(function (e) {
                              var n = (e - t) / (c - l),
                                i = c * n + t;
                              (r = Math.min(r, n)), (o = Math.min(o, i));
                            });
                          });
                        var d = n.map(function (t) {
                          var e = t[0],
                            n = t[1],
                            r = t[2],
                            o = t[3];
                          return [le(e, -u), le(n, -u), le(r, -u), le(o, -u)];
                        });
                        (i = ba(d, 0) - xa(d, 0)), (a = ba(d, 1) - xa(d, 1));
                      } else if (
                        ((r = xa(n, 0)),
                        (o = xa(n, 1)),
                        (i = ba(n, 0) - r),
                        (a = ba(n, 1) - o),
                        s % 180)
                      ) {
                        var h = i;
                        (i = a), (a = h);
                      }
                      return [r, o, i, a];
                    })(this.moveables, a),
                    c = u[0],
                    l = u[1],
                    f = u[2],
                    p = u[3],
                    d =
                      'rotate(' +
                      a +
                      'deg) scale(' +
                      (s[0] >= 0 ? 1 : -1) +
                      ', ' +
                      (s[1] >= 0 ? 1 : -1) +
                      ')';
                  (i.style.cssText +=
                    'left:0px;top:0px; transform-origin: ' +
                    this.transformOrigin +
                    '; width:' +
                    f +
                    'px; height:' +
                    p +
                    'px;transform:' +
                    d),
                    (r.width = f),
                    (r.height = p);
                  var h = this.getContainer(),
                    v = ir(
                      this.controlBox.getElement(),
                      i,
                      this.controlBox.getElement(),
                      this.getContainer(),
                      this.props.rootContainer || h
                    ),
                    g = [v.left, v.top],
                    m = cr(v),
                    y = m[0],
                    b = m[1],
                    x = m[2],
                    w = m[3],
                    E = Ae([y, b, x, w]),
                    S = [E.minX, E.minY];
                  (v.pos1 = ne(y, S)),
                    (v.pos2 = ne(b, S)),
                    (v.pos3 = ne(x, S)),
                    (v.pos4 = ne(w, S)),
                    (v.left = c - v.left + S[0]),
                    (v.top = l - v.top + S[1]),
                    (v.origin = ne(ee(g, v.origin), S)),
                    (v.beforeOrigin = ne(ee(g, v.beforeOrigin), S)),
                    (v.originalBeforeOrigin = ee(g, v.originalBeforeOrigin));
                  var O = v.targetClientRect,
                    A = s[0] * s[1] > 0 ? 1 : -1;
                  (O.top += v.top - r.top),
                    (O.left += v.left - r.left),
                    (i.style.transform =
                      'translate(' + -S[0] + 'px, ' + -S[1] + 'px) ' + d),
                    this.updateState(
                      gn(gn({}, v), {
                        direction: A,
                        beforeDirection: A,
                      }),
                      n
                    );
                }
              }),
              (n.getRect = function () {
                return gn(gn({}, t.prototype.getRect.call(this)), {
                  children: this.moveables.map(function (t) {
                    return t.getRect();
                  }),
                });
              }),
              (n.triggerEvent = function (e, n, r) {
                if (r || e.indexOf('Group') > -1)
                  return t.prototype.triggerEvent.call(this, e, n);
              }),
              (n.updateAbles = function () {
                t.prototype.updateAbles.call(
                  this,
                  mn(this.props.ables, [ua]),
                  'Group'
                );
              }),
              (e.defaultProps = gn(gn({}, sa.defaultProps), {
                transformOrigin: ['50%', '50%'],
                groupable: !0,
                dragArea: !0,
                keepRatio: !0,
                targets: [],
                defaultGroupRotate: 0,
                defaultGroupOrigin: '50% 50%',
              })),
              e
            );
          })(sa),
          Ea = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.moveables = []), e;
            }
            vn(e, t);
            var n = e.prototype;
            return (
              (n.render = function () {
                var t = this,
                  e = this.props,
                  n = e.cspNonce,
                  r = e.cssStyled,
                  o = e.targets;
                return ft(
                  r,
                  {
                    cspNonce: n,
                    ref: i(this, 'controlBox'),
                    className: In('control-box'),
                  },
                  o.map(function (e, n) {
                    return ft(
                      sa,
                      gn(
                        {
                          key: 'moveable' + n,
                          ref: a(t, 'moveables', n),
                        },
                        t.props,
                        {
                          target: e,
                          wrapperMoveable: t,
                        }
                      )
                    );
                  })
                );
              }),
              (n.componentDidUpdate = function () {}),
              (n.updateRect = function (t, e, n) {
                void 0 === n && (n = !0),
                  this.moveables.forEach(function (r) {
                    r.updateRect(t, e, n);
                  });
              }),
              (n.getRect = function () {
                return gn(gn({}, t.prototype.getRect.call(this)), {
                  children: this.moveables.map(function (t) {
                    return t.getRect();
                  }),
                });
              }),
              (n.request = function () {
                return {
                  request: function () {
                    return this;
                  },
                  requestEnd: function () {
                    return this;
                  },
                };
              }),
              (n.dragStart = function () {
                return this;
              }),
              (n.hitTest = function () {
                return 0;
              }),
              (n.isInside = function () {
                return !1;
              }),
              (n.isDragging = function () {
                return !1;
              }),
              (n.updateRenderPoses = function () {}),
              (n.updateEvent = function () {}),
              (n.checkUpdate = function () {}),
              (n.triggerEvent = function () {}),
              (n.updateAbles = function () {}),
              e
            );
          })(sa),
          Sa = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.refTargets = []), (e.selectorMap = {}), e;
            }
            vn(e, t);
            var n,
              r,
              o = e.prototype;
            return (
              (e.makeStyled = function () {
                var t = {};
                this.getTotalAbles().forEach(function (e) {
                  var n = e.css;
                  n &&
                    n.forEach(function (e) {
                      t[e] = !0;
                    });
                });
                var e = G(t).join('\n');
                this.defaultStyled = dn(
                  'div',
                  (function (t, e) {
                    return e.replace(/([^}{]*){/gm, function (e, n) {
                      return (
                        n.replace(/\.([^{,\s\d.]+)/g, '.' + t + '$1') + '{'
                      );
                    });
                  })(Sn, On + e)
                );
              }),
              (e.getTotalAbles = function () {
                return mn([Ti, ua, pa, Mi], this.defaultAbles);
              }),
              (o.render = function () {
                var t = this.constructor;
                t.defaultStyled || t.makeStyled();
                var e = this.props,
                  n = e.ables,
                  r = e.props,
                  o = (function (t, e) {
                    var n = {};
                    for (var r in t)
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        e.indexOf(r) < 0 &&
                        (n[r] = t[r]);
                    if (
                      null != t &&
                      'function' == typeof Object.getOwnPropertySymbols
                    ) {
                      var o = 0;
                      for (
                        r = Object.getOwnPropertySymbols(t);
                        o < r.length;
                        o++
                      )
                        e.indexOf(r[o]) < 0 &&
                          Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                          (n[r[o]] = t[r[o]]);
                    }
                    return n;
                  })(e, ['ables', 'props']),
                  a = Dr(o.target || o.targets),
                  s = (function (t, e) {
                    var n = [];
                    return (
                      t.forEach(function (t) {
                        t && (M(t) ? e[t] && n.push.apply(n, e[t]) : n.push(t));
                      }),
                      n
                    );
                  })(a, this.selectorMap);
                this.refTargets = a;
                var u = s.length > 1,
                  c = mn(t.getTotalAbles(), n || []),
                  l = gn(gn(gn({}, o), r || {}), {
                    ables: c,
                    cssStyled: t.defaultStyled,
                    customStyledMap: t.customStyledMap,
                  });
                return u
                  ? o.individualGroupable
                    ? ft(
                        Ea,
                        gn(
                          {
                            key: 'individual-group',
                            ref: i(this, 'moveable'),
                          },
                          l,
                          {
                            target: null,
                            targets: s,
                          }
                        )
                      )
                    : ft(
                        wa,
                        gn(
                          {
                            key: 'group',
                            ref: i(this, 'moveable'),
                          },
                          l,
                          {
                            target: null,
                            targets: s,
                          }
                        )
                      )
                  : ft(
                      sa,
                      gn(
                        {
                          key: 'single',
                          ref: i(this, 'moveable'),
                        },
                        l,
                        {
                          target: s[0],
                        }
                      )
                    );
              }),
              (o.componentDidMount = function () {
                this.updateRefs();
              }),
              (o.componentDidUpdate = function () {
                this.updateRefs();
              }),
              (o.updateRefs = function (t) {
                var e = Dr(this.props.target || this.props.targets),
                  n = this.refTargets.some(function (t, n) {
                    var r = e[n];
                    return !(!t && !r) && t !== r;
                  }),
                  r = t ? {} : this.selectorMap,
                  o = {};
                this.refTargets.forEach(function (t) {
                  M(t) &&
                    (r[t]
                      ? (o[t] = r[t])
                      : ((n = !0),
                        (o[t] = [].slice.call(document.querySelectorAll(t)))));
                }),
                  (this.selectorMap = o),
                  n && this.forceUpdate();
              }),
              (o.getManager = function () {
                return this.moveable;
              }),
              (e.defaultAbles = []),
              (e.customStyledMap = {}),
              (e.defaultStyled = null),
              (function (t, e, n, r) {
                var o,
                  i = arguments.length,
                  a =
                    i < 3
                      ? e
                      : null === r
                      ? (r = Object.getOwnPropertyDescriptor(e, n))
                      : r;
                if (
                  'object' == typeof Reflect &&
                  'function' == typeof Reflect.decorate
                )
                  a = Reflect.decorate(t, e, n, r);
                else
                  for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) &&
                      (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                i > 3 && a && Object.defineProperty(e, n, a);
              })(
                [
                  ((n = Bn),
                  void 0 === r && (r = {}),
                  function (t, e) {
                    n.forEach(function (n) {
                      var o = r[n] || n;
                      o in t ||
                        (t[o] = function () {
                          for (var t, r = [], o = 0; o < arguments.length; o++)
                            r[o] = arguments[o];
                          var i = (t = this[e])[n].apply(t, r);
                          return i === this[e] ? this : i;
                        });
                    });
                  }),
                ],
                e.prototype,
                'moveable',
                void 0
              ),
              e
            );
          })(Et);
        const Oa = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return vn(e, t), (e.defaultAbles = da), e;
        })(Sa);
        var Aa = function (t, e) {
          return (
            (Aa =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            Aa(t, e)
          );
        };
        function Ca(t, e) {
          function n() {
            this.constructor = t;
          }
          Aa(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }
        var Ma = function () {
          return (
            (Ma =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            Ma.apply(this, arguments)
          );
        };
        var Da = (function (t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return (n.state = {}), (n.state = n.props), n;
            }
            return (
              Ca(e, t),
              (e.prototype.render = function () {
                return (
                  (t = ft(
                    Oa,
                    Ma(
                      {
                        ref: i(this, 'moveable'),
                      },
                      this.state
                    )
                  )),
                  (e = this.state.parentElement),
                  ft(St, {
                    element: t,
                    container: e,
                  })
                );
                var t, e;
              }),
              e
            );
          })(wt),
          Pa = ya,
          ja = Bn,
          Ta = ma,
          Ra = function () {
            return (
              (Ra =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }),
              Ra.apply(this, arguments)
            );
          };
        var ka = (function () {
            function t() {
              this._events = {};
            }
            var e = t.prototype;
            return (
              (e.on = function (t, e) {
                if (A(t)) for (var n in t) this.on(n, t[n]);
                else this._addEvent(t, e, {});
                return this;
              }),
              (e.off = function (t, e) {
                if (t)
                  if (A(t)) for (var n in t) this.off(n);
                  else if (e) {
                    var r = this._events[t];
                    if (r) {
                      var o = N(r, function (t) {
                        return t.listener === e;
                      });
                      o > -1 && r.splice(o, 1);
                    }
                  } else this._events[t] = [];
                else this._events = {};
                return this;
              }),
              (e.once = function (t, e) {
                var n = this;
                return (
                  e &&
                    this._addEvent(t, e, {
                      once: !0,
                    }),
                  new Promise(function (e) {
                    n._addEvent(t, e, {
                      once: !0,
                    });
                  })
                );
              }),
              (e.emit = function (t, e) {
                var n = this;
                void 0 === e && (e = {});
                var r = this._events[t];
                if (!t || !r) return !0;
                var o = !1;
                return (
                  (e.eventType = t),
                  (e.stop = function () {
                    o = !0;
                  }),
                  (e.currentTarget = this),
                  (function () {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                      t += arguments[e].length;
                    var r = Array(t),
                      o = 0;
                    for (e = 0; e < n; e++)
                      for (
                        var i = arguments[e], a = 0, s = i.length;
                        a < s;
                        a++, o++
                      )
                        r[o] = i[a];
                    return r;
                  })(r).forEach(function (r) {
                    r.listener(e), r.once && n.off(t, r.listener);
                  }),
                  !o
                );
              }),
              (e.trigger = function (t, e) {
                return void 0 === e && (e = {}), this.emit(t, e);
              }),
              (e._addEvent = function (t, e, n) {
                var r = this._events;
                (r[t] = r[t] || []),
                  r[t].push(
                    Ra(
                      {
                        listener: e,
                      },
                      n
                    )
                  );
              }),
              t
            );
          })(),
          Ba = (function (t) {
            function e(e, n) {
              void 0 === n && (n = {});
              var r = t.call(this) || this;
              r.tempElement = document.createElement('div');
              var o = Ma(
                  {
                    container: e || document.body,
                  },
                  n
                ),
                a = {};
              Ta.forEach(function (t) {
                var e;
                a[
                  ((e = 'on ' + t),
                  e.replace(/[\s-_]+([^\s-_])/g, function (t, e) {
                    return e.toUpperCase();
                  }))
                ] = function (e) {
                  return r.trigger(t, e);
                };
              }),
                Mt(
                  ft(
                    Da,
                    Ma(
                      {
                        ref: i(r, 'innerMoveable'),
                        parentElement: e,
                      },
                      o,
                      a
                    )
                  ),
                  r.tempElement
                );
              var s = o.target;
              return C(s) && s.length > 1 && r.updateRect(), r;
            }
            Ca(e, t);
            var n = e.prototype;
            return (
              (n.setState = function (t, e) {
                this.innerMoveable.setState(t, e);
              }),
              (n.destroy = function () {
                Mt(null, this.tempElement),
                  this.off(),
                  (this.tempElement = null),
                  (this.innerMoveable = null);
              }),
              (n.getMoveable = function () {
                return this.innerMoveable.moveable;
              }),
              (e = (function (t, e, n, r) {
                var o,
                  i = arguments.length,
                  a =
                    i < 3
                      ? e
                      : null === r
                      ? (r = Object.getOwnPropertyDescriptor(e, n))
                      : r;
                if (
                  'object' == typeof Reflect &&
                  'function' == typeof Reflect.decorate
                )
                  a = Reflect.decorate(t, e, n, r);
                else
                  for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) &&
                      (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a;
              })(
                [
                  s(ja, function (t, e) {
                    t[e] ||
                      (t[e] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        var r = this.getMoveable();
                        if (r && r[e]) return r[e].apply(r, t);
                      });
                  }),
                  s(Pa, function (t, e) {
                    Object.defineProperty(t, e, {
                      get: function () {
                        return this.getMoveable().props[e];
                      },
                      set: function (t) {
                        var n;
                        this.setState((((n = {})[e] = t), n));
                      },
                      enumerable: !0,
                      configurable: !0,
                    });
                  }),
                ],
                e
              )),
              e
            );
          })(ka),
          Ia = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return Ca(e, t), e;
          })(Ba);
        const _a = Ia;
        function Fa(t) {
          return t.split('-')[0];
        }
        function Na(t) {
          return t.split('-')[1];
        }
        function za(t) {
          return ['top', 'bottom'].includes(Fa(t)) ? 'x' : 'y';
        }
        function Ga(t) {
          return 'y' === t ? 'height' : 'width';
        }
        function La(t) {
          let { reference: e, floating: n, placement: r } = t;
          const o = e.x + e.width / 2 - n.width / 2,
            i = e.y + e.height / 2 - n.height / 2;
          let a;
          switch (Fa(r)) {
            case 'top':
              a = {
                x: o,
                y: e.y - n.height,
              };
              break;
            case 'bottom':
              a = {
                x: o,
                y: e.y + e.height,
              };
              break;
            case 'right':
              a = {
                x: e.x + e.width,
                y: i,
              };
              break;
            case 'left':
              a = {
                x: e.x - n.width,
                y: i,
              };
              break;
            default:
              a = {
                x: e.x,
                y: e.y,
              };
          }
          const s = za(r),
            u = Ga(s);
          switch (Na(r)) {
            case 'start':
              a[s] = a[s] - (e[u] / 2 - n[u] / 2);
              break;
            case 'end':
              a[s] = a[s] + (e[u] / 2 - n[u] / 2);
          }
          return a;
        }
        const Wa = async (t, e, n) => {
          const {
            placement: r = 'bottom',
            strategy: o = 'absolute',
            middleware: i = [],
            platform: a,
          } = n;
          let s = await a.getElementRects({
              reference: t,
              floating: e,
              strategy: o,
            }),
            { x: u, y: c } = La({
              ...s,
              placement: r,
            }),
            l = r,
            f = {};
          for (let n = 0; n < i.length; n++) {
            const { name: p, fn: d } = i[n],
              {
                x: h,
                y: v,
                data: g,
                reset: m,
              } = await d({
                x: u,
                y: c,
                initialPlacement: r,
                placement: l,
                strategy: o,
                middlewareData: f,
                rects: s,
                platform: a,
                elements: {
                  reference: t,
                  floating: e,
                },
              });
            (u = null != h ? h : u),
              (c = null != v ? v : c),
              (f = {
                ...f,
                [p]: null != g ? g : {},
              }),
              m &&
                ('object' == typeof m &&
                  (m.placement && (l = m.placement),
                  m.rects &&
                    (s =
                      !0 === m.rects
                        ? await a.getElementRects({
                            reference: t,
                            floating: e,
                            strategy: o,
                          })
                        : m.rects),
                  ({ x: u, y: c } = La({
                    ...s,
                    placement: l,
                  }))),
                (n = -1));
          }
          return {
            x: u,
            y: c,
            placement: l,
            strategy: o,
            middlewareData: f,
          };
        };
        function qa(t) {
          return {
            ...t,
            top: t.y,
            left: t.x,
            right: t.x + t.width,
            bottom: t.y + t.height,
          };
        }
        Math.min, Math.max;
        const Ha = ['top', 'right', 'bottom', 'left'];
        Ha.reduce((t, e) => t.concat(e, e + '-start', e + '-end'), []);
        const Ya = function (t) {
          return (
            void 0 === t && (t = 0),
            {
              name: 'offset',
              options: t,
              fn(e) {
                const { x: n, y: r, placement: o, rects: i } = e,
                  a = (function (t) {
                    let { placement: e, rects: n, value: r } = t;
                    const o = Fa(e),
                      i = ['left', 'top'].includes(o) ? -1 : 1,
                      a =
                        'function' == typeof r
                          ? r({
                              ...n,
                              placement: e,
                            })
                          : r,
                      { mainAxis: s, crossAxis: u } =
                        'number' == typeof a
                          ? {
                              mainAxis: a,
                              crossAxis: 0,
                            }
                          : {
                              mainAxis: 0,
                              crossAxis: 0,
                              ...a,
                            };
                    return 'x' === za(o)
                      ? {
                          x: u,
                          y: s * i,
                        }
                      : {
                          x: s * i,
                          y: u,
                        };
                  })({
                    placement: o,
                    rects: i,
                    value: t,
                  });
                return {
                  x: n + a.x,
                  y: r + a.y,
                  data: a,
                };
              },
            }
          );
        };
        function Va(t) {
          return '[object Window]' === (null == t ? void 0 : t.toString());
        }
        function Xa(t) {
          if (null == t) return window;
          if (!Va(t)) {
            const e = t.ownerDocument;
            return (e && e.defaultView) || window;
          }
          return t;
        }
        function Ua(t) {
          return Xa(t).getComputedStyle(t);
        }
        function Qa(t) {
          return Va(t) ? '' : t ? (t.nodeName || '').toLowerCase() : '';
        }
        function Ja(t) {
          return t instanceof Xa(t).HTMLElement;
        }
        function Ka(t) {
          return t instanceof Xa(t).Element;
        }
        function $a(t) {
          return t instanceof Xa(t).ShadowRoot || t instanceof ShadowRoot;
        }
        function Za(t) {
          const { overflow: e, overflowX: n, overflowY: r } = Ua(t);
          return /auto|scroll|overlay|hidden/.test(e + r + n);
        }
        function ts(t) {
          return ['table', 'td', 'th'].includes(Qa(t));
        }
        function es(t) {
          const e = navigator.userAgent.toLowerCase().includes('firefox'),
            n = Ua(t);
          return (
            'none' !== n.transform ||
            'none' !== n.perspective ||
            'paint' === n.contain ||
            ['transform', 'perspective'].includes(n.willChange) ||
            (e && 'filter' === n.willChange) ||
            (e && !!n.filter && 'none' !== n.filter)
          );
        }
        const ns = Math.min,
          rs = Math.max,
          os = Math.round;
        function is(t, e) {
          void 0 === e && (e = !1);
          const n = t.getBoundingClientRect();
          let r = 1,
            o = 1;
          return (
            e &&
              Ja(t) &&
              ((r = (t.offsetWidth > 0 && os(n.width) / t.offsetWidth) || 1),
              (o = (t.offsetHeight > 0 && os(n.height) / t.offsetHeight) || 1)),
            {
              width: n.width / r,
              height: n.height / o,
              top: n.top / o,
              right: n.right / r,
              bottom: n.bottom / o,
              left: n.left / r,
              x: n.left / r,
              y: n.top / o,
            }
          );
        }
        function as(t) {
          return ((e = t),
          (e instanceof Xa(e).Node ? t.ownerDocument : t.document) ||
            window.document).documentElement;
          var e;
        }
        function ss(t) {
          return Va(t)
            ? {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset,
              }
            : {
                scrollLeft: t.scrollLeft,
                scrollTop: t.scrollTop,
              };
        }
        function us(t) {
          return is(as(t)).left + ss(t).scrollLeft;
        }
        function cs(t, e, n) {
          const r = Ja(e),
            o = as(e),
            i = is(
              t,
              r &&
                (function (t) {
                  const e = is(t);
                  return (
                    os(e.width) !== t.offsetWidth ||
                    os(e.height) !== t.offsetHeight
                  );
                })(e)
            );
          let a = {
            scrollLeft: 0,
            scrollTop: 0,
          };
          const s = {
            x: 0,
            y: 0,
          };
          if (r || (!r && 'fixed' !== n))
            if ((('body' !== Qa(e) || Za(o)) && (a = ss(e)), Ja(e))) {
              const t = is(e, !0);
              (s.x = t.x + e.clientLeft), (s.y = t.y + e.clientTop);
            } else o && (s.x = us(o));
          return {
            x: i.left + a.scrollLeft - s.x,
            y: i.top + a.scrollTop - s.y,
            width: i.width,
            height: i.height,
          };
        }
        function ls(t) {
          return 'html' === Qa(t)
            ? t
            : t.assignedSlot ||
                t.parentNode ||
                ($a(t) ? t.host : null) ||
                as(t);
        }
        function fs(t) {
          return Ja(t) && 'fixed' !== getComputedStyle(t).position
            ? t.offsetParent
            : null;
        }
        function ps(t) {
          const e = Xa(t);
          let n = fs(t);
          for (; n && ts(n) && 'static' === getComputedStyle(n).position; )
            n = fs(n);
          return n &&
            ('html' === Qa(n) ||
              ('body' === Qa(n) &&
                'static' === getComputedStyle(n).position &&
                !es(n)))
            ? e
            : n ||
                (function (t) {
                  let e = ls(t);
                  for (; Ja(e) && !['html', 'body'].includes(Qa(e)); ) {
                    if (es(e)) return e;
                    e = e.parentNode;
                  }
                  return null;
                })(t) ||
                e;
        }
        function ds(t) {
          return {
            width: t.offsetWidth,
            height: t.offsetHeight,
          };
        }
        function hs(t) {
          return ['html', 'body', '#document'].includes(Qa(t))
            ? t.ownerDocument.body
            : Ja(t) && Za(t)
            ? t
            : hs(ls(t));
        }
        function vs(t, e) {
          var n;
          void 0 === e && (e = []);
          const r = hs(t),
            o = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
            i = Xa(r),
            a = o ? [i].concat(i.visualViewport || [], Za(r) ? r : []) : r,
            s = e.concat(a);
          return o ? s : s.concat(vs(ls(a)));
        }
        function gs(t, e) {
          return 'viewport' === e
            ? qa(
                (function (t) {
                  const e = Xa(t),
                    n = as(t),
                    r = e.visualViewport;
                  let o = n.clientWidth,
                    i = n.clientHeight,
                    a = 0,
                    s = 0;
                  return (
                    r &&
                      ((o = r.width),
                      (i = r.height),
                      Math.abs(e.innerWidth / r.scale - r.width) < 0.01 &&
                        ((a = r.offsetLeft), (s = r.offsetTop))),
                    {
                      width: o,
                      height: i,
                      x: a,
                      y: s,
                    }
                  );
                })(t)
              )
            : Ka(e)
            ? (function (t) {
                const e = is(t),
                  n = e.top + t.clientTop,
                  r = e.left + t.clientLeft;
                return {
                  top: n,
                  left: r,
                  x: r,
                  y: n,
                  right: r + t.clientWidth,
                  bottom: n + t.clientHeight,
                  width: t.clientWidth,
                  height: t.clientHeight,
                };
              })(e)
            : qa(
                (function (t) {
                  var e;
                  const n = as(t),
                    r = ss(t),
                    o = null == (e = t.ownerDocument) ? void 0 : e.body,
                    i = rs(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0
                    ),
                    a = rs(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0
                    );
                  let s = -r.scrollLeft + us(t);
                  const u = -r.scrollTop;
                  return (
                    'rtl' === Ua(o || n).direction &&
                      (s += rs(n.clientWidth, o ? o.clientWidth : 0) - i),
                    {
                      width: i,
                      height: a,
                      x: s,
                      y: u,
                    }
                  );
                })(as(t))
              );
        }
        function ms(t) {
          const e = vs(ls(t)),
            n =
              ['absolute', 'fixed'].includes(Ua(t).position) && Ja(t)
                ? ps(t)
                : t;
          return Ka(n)
            ? e.filter(
                (t) =>
                  Ka(t) &&
                  (function (t, e) {
                    const n = null == e.getRootNode ? void 0 : e.getRootNode();
                    if (t.contains(e)) return !0;
                    if (n && $a(n)) {
                      let n = e;
                      do {
                        if (n && t === n) return !0;
                        n = n.parentNode || n.host;
                      } while (n);
                    }
                    return !1;
                  })(t, n) &&
                  'body' !== Qa(t)
              )
            : [];
        }
        const ys = {
          getElementRects: (t) => {
            let { reference: e, floating: n, strategy: r } = t;
            return {
              reference: cs(e, ps(n), r),
              floating: {
                ...ds(n),
                x: 0,
                y: 0,
              },
            };
          },
          convertOffsetParentRelativeRectToViewportRelativeRect: (t) =>
            (function (t) {
              let { rect: e, offsetParent: n, strategy: r } = t;
              const o = Ja(n),
                i = as(n);
              if (n === i) return e;
              let a = {
                scrollLeft: 0,
                scrollTop: 0,
              };
              const s = {
                x: 0,
                y: 0,
              };
              if (
                (o || (!o && 'fixed' !== r)) &&
                (('body' !== Qa(n) || Za(i)) && (a = ss(n)), Ja(n))
              ) {
                const t = is(n, !0);
                (s.x = t.x + n.clientLeft), (s.y = t.y + n.clientTop);
              }
              return {
                ...e,
                x: e.x - a.scrollLeft + s.x,
                y: e.y - a.scrollTop + s.y,
              };
            })(t),
          getOffsetParent: (t) => {
            let { element: e } = t;
            return ps(e);
          },
          isElement: (t) => Ka(t),
          getDocumentElement: (t) => {
            let { element: e } = t;
            return as(e);
          },
          getClippingClientRect: (t) =>
            (function (t) {
              let { element: e, boundary: n, rootBoundary: r } = t;
              const o = [
                  ...('clippingParents' === n ? ms(e) : [].concat(n)),
                  r,
                ],
                i = o[0],
                a = o.reduce((t, n) => {
                  const r = gs(e, n);
                  return (
                    (t.top = rs(r.top, t.top)),
                    (t.right = ns(r.right, t.right)),
                    (t.bottom = ns(r.bottom, t.bottom)),
                    (t.left = rs(r.left, t.left)),
                    t
                  );
                }, gs(e, i));
              return (
                (a.width = a.right - a.left),
                (a.height = a.bottom - a.top),
                (a.x = a.left),
                (a.y = a.top),
                a
              );
            })(t),
          getDimensions: (t) => {
            let { element: e } = t;
            return ds(e);
          },
          getClientRects: (t) => {
            let { element: e } = t;
            return e.getClientRects();
          },
        };
        let bs = (t) => crypto.getRandomValues(new Uint8Array(t)),
          xs = (t, e = 21) =>
            ((t, e, n) => {
              let r = (2 << (Math.log(t.length - 1) / Math.LN2)) - 1,
                o = -~((1.6 * r * e) / t.length);
              return (i = e) => {
                let a = '';
                for (;;) {
                  let e = n(o),
                    s = o;
                  for (; s--; )
                    if (((a += t[e[s] & r] || ''), a.length === i)) return a;
                }
              };
            })(t, e, bs);
        function ws(t) {
          if (null == t) return window;
          if ('[object Window]' !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
          }
          return t;
        }
        function Es(t) {
          return t instanceof ws(t).Element || t instanceof Element;
        }
        function Ss(t) {
          return t instanceof ws(t).HTMLElement || t instanceof HTMLElement;
        }
        function Os(t) {
          return (
            'undefined' != typeof ShadowRoot &&
            (t instanceof ws(t).ShadowRoot || t instanceof ShadowRoot)
          );
        }
        var As = Math.max,
          Cs = Math.min,
          Ms = Math.round;
        function Ds() {
          var t = navigator.userAgentData;
          return null != t && t.brands && Array.isArray(t.brands)
            ? t.brands
                .map(function (t) {
                  return t.brand + '/' + t.version;
                })
                .join(' ')
            : navigator.userAgent;
        }
        function Ps() {
          return !/^((?!chrome|android).)*safari/i.test(Ds());
        }
        function js(t, e, n) {
          void 0 === e && (e = !1), void 0 === n && (n = !1);
          var r = t.getBoundingClientRect(),
            o = 1,
            i = 1;
          e &&
            Ss(t) &&
            ((o = (t.offsetWidth > 0 && Ms(r.width) / t.offsetWidth) || 1),
            (i = (t.offsetHeight > 0 && Ms(r.height) / t.offsetHeight) || 1));
          var a = (Es(t) ? ws(t) : window).visualViewport,
            s = !Ps() && n,
            u = (r.left + (s && a ? a.offsetLeft : 0)) / o,
            c = (r.top + (s && a ? a.offsetTop : 0)) / i,
            l = r.width / o,
            f = r.height / i;
          return {
            width: l,
            height: f,
            top: c,
            right: u + l,
            bottom: c + f,
            left: u,
            x: u,
            y: c,
          };
        }
        function Ts(t) {
          var e = ws(t);
          return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset,
          };
        }
        function Rs(t) {
          return t ? (t.nodeName || '').toLowerCase() : null;
        }
        function ks(t) {
          return ((Es(t) ? t.ownerDocument : t.document) || window.document)
            .documentElement;
        }
        function Bs(t) {
          return js(ks(t)).left + Ts(t).scrollLeft;
        }
        function Is(t) {
          return ws(t).getComputedStyle(t);
        }
        function _s(t) {
          var e = Is(t),
            n = e.overflow,
            r = e.overflowX,
            o = e.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + o + r);
        }
        function Fs(t, e, n) {
          void 0 === n && (n = !1);
          var r,
            o,
            i = Ss(e),
            a =
              Ss(e) &&
              (function (t) {
                var e = t.getBoundingClientRect(),
                  n = Ms(e.width) / t.offsetWidth || 1,
                  r = Ms(e.height) / t.offsetHeight || 1;
                return 1 !== n || 1 !== r;
              })(e),
            s = ks(e),
            u = js(t, a, n),
            c = {
              scrollLeft: 0,
              scrollTop: 0,
            },
            l = {
              x: 0,
              y: 0,
            };
          return (
            (i || (!i && !n)) &&
              (('body' !== Rs(e) || _s(s)) &&
                (c =
                  (r = e) !== ws(r) && Ss(r)
                    ? {
                        scrollLeft: (o = r).scrollLeft,
                        scrollTop: o.scrollTop,
                      }
                    : Ts(r)),
              Ss(e)
                ? (((l = js(e, !0)).x += e.clientLeft), (l.y += e.clientTop))
                : s && (l.x = Bs(s))),
            {
              x: u.left + c.scrollLeft - l.x,
              y: u.top + c.scrollTop - l.y,
              width: u.width,
              height: u.height,
            }
          );
        }
        function Ns(t) {
          var e = js(t),
            n = t.offsetWidth,
            r = t.offsetHeight;
          return (
            Math.abs(e.width - n) <= 1 && (n = e.width),
            Math.abs(e.height - r) <= 1 && (r = e.height),
            {
              x: t.offsetLeft,
              y: t.offsetTop,
              width: n,
              height: r,
            }
          );
        }
        function zs(t) {
          return 'html' === Rs(t)
            ? t
            : t.assignedSlot ||
                t.parentNode ||
                (Os(t) ? t.host : null) ||
                ks(t);
        }
        function Gs(t) {
          return ['html', 'body', '#document'].indexOf(Rs(t)) >= 0
            ? t.ownerDocument.body
            : Ss(t) && _s(t)
            ? t
            : Gs(zs(t));
        }
        function Ls(t, e) {
          var n;
          void 0 === e && (e = []);
          var r = Gs(t),
            o = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
            i = ws(r),
            a = o ? [i].concat(i.visualViewport || [], _s(r) ? r : []) : r,
            s = e.concat(a);
          return o ? s : s.concat(Ls(zs(a)));
        }
        function Ws(t) {
          return ['table', 'td', 'th'].indexOf(Rs(t)) >= 0;
        }
        function qs(t) {
          return Ss(t) && 'fixed' !== Is(t).position ? t.offsetParent : null;
        }
        function Hs(t) {
          for (
            var e = ws(t), n = qs(t);
            n && Ws(n) && 'static' === Is(n).position;

          )
            n = qs(n);
          return n &&
            ('html' === Rs(n) ||
              ('body' === Rs(n) && 'static' === Is(n).position))
            ? e
            : n ||
                (function (t) {
                  var e = /firefox/i.test(Ds());
                  if (
                    /Trident/i.test(Ds()) &&
                    Ss(t) &&
                    'fixed' === Is(t).position
                  )
                    return null;
                  var n = zs(t);
                  for (
                    Os(n) && (n = n.host);
                    Ss(n) && ['html', 'body'].indexOf(Rs(n)) < 0;

                  ) {
                    var r = Is(n);
                    if (
                      'none' !== r.transform ||
                      'none' !== r.perspective ||
                      'paint' === r.contain ||
                      -1 !==
                        ['transform', 'perspective'].indexOf(r.willChange) ||
                      (e && 'filter' === r.willChange) ||
                      (e && r.filter && 'none' !== r.filter)
                    )
                      return n;
                    n = n.parentNode;
                  }
                  return null;
                })(t) ||
                e;
        }
        var Ys = 'top',
          Vs = 'bottom',
          Xs = 'right',
          Us = 'left',
          Qs = 'auto',
          Js = [Ys, Vs, Xs, Us],
          Ks = 'start',
          $s = 'end',
          Zs = 'clippingParents',
          tu = 'viewport',
          eu = 'popper',
          nu = 'reference',
          ru = Js.reduce(function (t, e) {
            return t.concat([e + '-' + Ks, e + '-' + $s]);
          }, []),
          ou = [].concat(Js, [Qs]).reduce(function (t, e) {
            return t.concat([e, e + '-' + Ks, e + '-' + $s]);
          }, []),
          iu = [
            'beforeRead',
            'read',
            'afterRead',
            'beforeMain',
            'main',
            'afterMain',
            'beforeWrite',
            'write',
            'afterWrite',
          ];
        function au(t) {
          var e = new Map(),
            n = new Set(),
            r = [];
          function o(t) {
            n.add(t.name),
              []
                .concat(t.requires || [], t.requiresIfExists || [])
                .forEach(function (t) {
                  if (!n.has(t)) {
                    var r = e.get(t);
                    r && o(r);
                  }
                }),
              r.push(t);
          }
          return (
            t.forEach(function (t) {
              e.set(t.name, t);
            }),
            t.forEach(function (t) {
              n.has(t.name) || o(t);
            }),
            r
          );
        }
        var su = {
          placement: 'bottom',
          modifiers: [],
          strategy: 'absolute',
        };
        function uu() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return !e.some(function (t) {
            return !(t && 'function' == typeof t.getBoundingClientRect);
          });
        }
        function cu(t) {
          void 0 === t && (t = {});
          var e = t,
            n = e.defaultModifiers,
            r = void 0 === n ? [] : n,
            o = e.defaultOptions,
            i = void 0 === o ? su : o;
          return function (t, e, n) {
            void 0 === n && (n = i);
            var o,
              a,
              s = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, su, i),
                modifiersData: {},
                elements: {
                  reference: t,
                  popper: e,
                },
                attributes: {},
                styles: {},
              },
              u = [],
              c = !1,
              l = {
                state: s,
                setOptions: function (n) {
                  var o = 'function' == typeof n ? n(s.options) : n;
                  f(),
                    (s.options = Object.assign({}, i, s.options, o)),
                    (s.scrollParents = {
                      reference: Es(t)
                        ? Ls(t)
                        : t.contextElement
                        ? Ls(t.contextElement)
                        : [],
                      popper: Ls(e),
                    });
                  var a = (function (t) {
                    var e = au(t);
                    return iu.reduce(function (t, n) {
                      return t.concat(
                        e.filter(function (t) {
                          return t.phase === n;
                        })
                      );
                    }, []);
                  })(
                    (function (t) {
                      var e = t.reduce(function (t, e) {
                        var n = t[e.name];
                        return (
                          (t[e.name] = n
                            ? Object.assign({}, n, e, {
                                options: Object.assign(
                                  {},
                                  n.options,
                                  e.options
                                ),
                                data: Object.assign({}, n.data, e.data),
                              })
                            : e),
                          t
                        );
                      }, {});
                      return Object.keys(e).map(function (t) {
                        return e[t];
                      });
                    })([].concat(r, s.options.modifiers))
                  );
                  return (
                    (s.orderedModifiers = a.filter(function (t) {
                      return t.enabled;
                    })),
                    s.orderedModifiers.forEach(function (t) {
                      var e = t.name,
                        n = t.options,
                        r = void 0 === n ? {} : n,
                        o = t.effect;
                      if ('function' == typeof o) {
                        var i = o({
                            state: s,
                            name: e,
                            instance: l,
                            options: r,
                          }),
                          a = function () {};
                        u.push(i || a);
                      }
                    }),
                    l.update()
                  );
                },
                forceUpdate: function () {
                  if (!c) {
                    var t = s.elements,
                      e = t.reference,
                      n = t.popper;
                    if (uu(e, n)) {
                      (s.rects = {
                        reference: Fs(e, Hs(n), 'fixed' === s.options.strategy),
                        popper: Ns(n),
                      }),
                        (s.reset = !1),
                        (s.placement = s.options.placement),
                        s.orderedModifiers.forEach(function (t) {
                          return (s.modifiersData[t.name] = Object.assign(
                            {},
                            t.data
                          ));
                        });
                      for (var r = 0; r < s.orderedModifiers.length; r++)
                        if (!0 !== s.reset) {
                          var o = s.orderedModifiers[r],
                            i = o.fn,
                            a = o.options,
                            u = void 0 === a ? {} : a,
                            f = o.name;
                          'function' == typeof i &&
                            (s =
                              i({
                                state: s,
                                options: u,
                                name: f,
                                instance: l,
                              }) || s);
                        } else (s.reset = !1), (r = -1);
                    }
                  }
                },
                update:
                  ((o = function () {
                    return new Promise(function (t) {
                      l.forceUpdate(), t(s);
                    });
                  }),
                  function () {
                    return (
                      a ||
                        (a = new Promise(function (t) {
                          Promise.resolve().then(function () {
                            (a = void 0), t(o());
                          });
                        })),
                      a
                    );
                  }),
                destroy: function () {
                  f(), (c = !0);
                },
              };
            if (!uu(t, e)) return l;
            function f() {
              u.forEach(function (t) {
                return t();
              }),
                (u = []);
            }
            return (
              l.setOptions(n).then(function (t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t);
              }),
              l
            );
          };
        }
        var lu = {
          passive: !0,
        };
        const fu = {
          name: 'eventListeners',
          enabled: !0,
          phase: 'write',
          fn: function () {},
          effect: function (t) {
            var e = t.state,
              n = t.instance,
              r = t.options,
              o = r.scroll,
              i = void 0 === o || o,
              a = r.resize,
              s = void 0 === a || a,
              u = ws(e.elements.popper),
              c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return (
              i &&
                c.forEach(function (t) {
                  t.addEventListener('scroll', n.update, lu);
                }),
              s && u.addEventListener('resize', n.update, lu),
              function () {
                i &&
                  c.forEach(function (t) {
                    t.removeEventListener('scroll', n.update, lu);
                  }),
                  s && u.removeEventListener('resize', n.update, lu);
              }
            );
          },
          data: {},
        };
        function pu(t) {
          return t.split('-')[0];
        }
        function du(t) {
          return t.split('-')[1];
        }
        function hu(t) {
          return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
        }
        function vu(t) {
          var e,
            n = t.reference,
            r = t.element,
            o = t.placement,
            i = o ? pu(o) : null,
            a = o ? du(o) : null,
            s = n.x + n.width / 2 - r.width / 2,
            u = n.y + n.height / 2 - r.height / 2;
          switch (i) {
            case Ys:
              e = {
                x: s,
                y: n.y - r.height,
              };
              break;
            case Vs:
              e = {
                x: s,
                y: n.y + n.height,
              };
              break;
            case Xs:
              e = {
                x: n.x + n.width,
                y: u,
              };
              break;
            case Us:
              e = {
                x: n.x - r.width,
                y: u,
              };
              break;
            default:
              e = {
                x: n.x,
                y: n.y,
              };
          }
          var c = i ? hu(i) : null;
          if (null != c) {
            var l = 'y' === c ? 'height' : 'width';
            switch (a) {
              case Ks:
                e[c] = e[c] - (n[l] / 2 - r[l] / 2);
                break;
              case $s:
                e[c] = e[c] + (n[l] / 2 - r[l] / 2);
            }
          }
          return e;
        }
        const gu = {
          name: 'popperOffsets',
          enabled: !0,
          phase: 'read',
          fn: function (t) {
            var e = t.state,
              n = t.name;
            e.modifiersData[n] = vu({
              reference: e.rects.reference,
              element: e.rects.popper,
              strategy: 'absolute',
              placement: e.placement,
            });
          },
          data: {},
        };
        var mu = {
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto',
        };
        function yu(t) {
          var e,
            n = t.popper,
            r = t.popperRect,
            o = t.placement,
            i = t.variation,
            a = t.offsets,
            s = t.position,
            u = t.gpuAcceleration,
            c = t.adaptive,
            l = t.roundOffsets,
            f = t.isFixed,
            p = a.x,
            d = void 0 === p ? 0 : p,
            h = a.y,
            v = void 0 === h ? 0 : h,
            g =
              'function' == typeof l
                ? l({
                    x: d,
                    y: v,
                  })
                : {
                    x: d,
                    y: v,
                  };
          (d = g.x), (v = g.y);
          var m = a.hasOwnProperty('x'),
            y = a.hasOwnProperty('y'),
            b = Us,
            x = Ys,
            w = window;
          if (c) {
            var E = Hs(n),
              S = 'clientHeight',
              O = 'clientWidth';
            if (
              (E === ws(n) &&
                'static' !== Is((E = ks(n))).position &&
                'absolute' === s &&
                ((S = 'scrollHeight'), (O = 'scrollWidth')),
              o === Ys || ((o === Us || o === Xs) && i === $s))
            )
              (x = Vs),
                (v -=
                  (f && E === w && w.visualViewport
                    ? w.visualViewport.height
                    : E[S]) - r.height),
                (v *= u ? 1 : -1);
            if (o === Us || ((o === Ys || o === Vs) && i === $s))
              (b = Xs),
                (d -=
                  (f && E === w && w.visualViewport
                    ? w.visualViewport.width
                    : E[O]) - r.width),
                (d *= u ? 1 : -1);
          }
          var A,
            C = Object.assign(
              {
                position: s,
              },
              c && mu
            ),
            M =
              !0 === l
                ? (function (t, e) {
                    var n = t.x,
                      r = t.y,
                      o = e.devicePixelRatio || 1;
                    return {
                      x: Ms(n * o) / o || 0,
                      y: Ms(r * o) / o || 0,
                    };
                  })(
                    {
                      x: d,
                      y: v,
                    },
                    ws(n)
                  )
                : {
                    x: d,
                    y: v,
                  };
          return (
            (d = M.x),
            (v = M.y),
            u
              ? Object.assign(
                  {},
                  C,
                  (((A = {})[x] = y ? '0' : ''),
                  (A[b] = m ? '0' : ''),
                  (A.transform =
                    (w.devicePixelRatio || 1) <= 1
                      ? 'translate(' + d + 'px, ' + v + 'px)'
                      : 'translate3d(' + d + 'px, ' + v + 'px, 0)'),
                  A)
                )
              : Object.assign(
                  {},
                  C,
                  (((e = {})[x] = y ? v + 'px' : ''),
                  (e[b] = m ? d + 'px' : ''),
                  (e.transform = ''),
                  e)
                )
          );
        }
        const bu = {
          name: 'applyStyles',
          enabled: !0,
          phase: 'write',
          fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
              var n = e.styles[t] || {},
                r = e.attributes[t] || {},
                o = e.elements[t];
              Ss(o) &&
                Rs(o) &&
                (Object.assign(o.style, n),
                Object.keys(r).forEach(function (t) {
                  var e = r[t];
                  !1 === e
                    ? o.removeAttribute(t)
                    : o.setAttribute(t, !0 === e ? '' : e);
                }));
            });
          },
          effect: function (t) {
            var e = t.state,
              n = {
                popper: {
                  position: e.options.strategy,
                  left: '0',
                  top: '0',
                  margin: '0',
                },
                arrow: {
                  position: 'absolute',
                },
                reference: {},
              };
            return (
              Object.assign(e.elements.popper.style, n.popper),
              (e.styles = n),
              e.elements.arrow &&
                Object.assign(e.elements.arrow.style, n.arrow),
              function () {
                Object.keys(e.elements).forEach(function (t) {
                  var r = e.elements[t],
                    o = e.attributes[t] || {},
                    i = Object.keys(
                      e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
                    ).reduce(function (t, e) {
                      return (t[e] = ''), t;
                    }, {});
                  Ss(r) &&
                    Rs(r) &&
                    (Object.assign(r.style, i),
                    Object.keys(o).forEach(function (t) {
                      r.removeAttribute(t);
                    }));
                });
              }
            );
          },
          requires: ['computeStyles'],
        };
        const xu = {
          name: 'offset',
          enabled: !0,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: function (t) {
            var e = t.state,
              n = t.options,
              r = t.name,
              o = n.offset,
              i = void 0 === o ? [0, 0] : o,
              a = ou.reduce(function (t, n) {
                return (
                  (t[n] = (function (t, e, n) {
                    var r = pu(t),
                      o = [Us, Ys].indexOf(r) >= 0 ? -1 : 1,
                      i =
                        'function' == typeof n
                          ? n(
                              Object.assign({}, e, {
                                placement: t,
                              })
                            )
                          : n,
                      a = i[0],
                      s = i[1];
                    return (
                      (a = a || 0),
                      (s = (s || 0) * o),
                      [Us, Xs].indexOf(r) >= 0
                        ? {
                            x: s,
                            y: a,
                          }
                        : {
                            x: a,
                            y: s,
                          }
                    );
                  })(n, e.rects, i)),
                  t
                );
              }, {}),
              s = a[e.placement],
              u = s.x,
              c = s.y;
            null != e.modifiersData.popperOffsets &&
              ((e.modifiersData.popperOffsets.x += u),
              (e.modifiersData.popperOffsets.y += c)),
              (e.modifiersData[r] = a);
          },
        };
        var wu = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom',
        };
        function Eu(t) {
          return t.replace(/left|right|bottom|top/g, function (t) {
            return wu[t];
          });
        }
        var Su = {
          start: 'end',
          end: 'start',
        };
        function Ou(t) {
          return t.replace(/start|end/g, function (t) {
            return Su[t];
          });
        }
        function Au(t, e) {
          var n = e.getRootNode && e.getRootNode();
          if (t.contains(e)) return !0;
          if (n && Os(n)) {
            var r = e;
            do {
              if (r && t.isSameNode(r)) return !0;
              r = r.parentNode || r.host;
            } while (r);
          }
          return !1;
        }
        function Cu(t) {
          return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
          });
        }
        function Mu(t, e, n) {
          return e === tu
            ? Cu(
                (function (t, e) {
                  var n = ws(t),
                    r = ks(t),
                    o = n.visualViewport,
                    i = r.clientWidth,
                    a = r.clientHeight,
                    s = 0,
                    u = 0;
                  if (o) {
                    (i = o.width), (a = o.height);
                    var c = Ps();
                    (c || (!c && 'fixed' === e)) &&
                      ((s = o.offsetLeft), (u = o.offsetTop));
                  }
                  return {
                    width: i,
                    height: a,
                    x: s + Bs(t),
                    y: u,
                  };
                })(t, n)
              )
            : Es(e)
            ? (function (t, e) {
                var n = js(t, !1, 'fixed' === e);
                return (
                  (n.top = n.top + t.clientTop),
                  (n.left = n.left + t.clientLeft),
                  (n.bottom = n.top + t.clientHeight),
                  (n.right = n.left + t.clientWidth),
                  (n.width = t.clientWidth),
                  (n.height = t.clientHeight),
                  (n.x = n.left),
                  (n.y = n.top),
                  n
                );
              })(e, n)
            : Cu(
                (function (t) {
                  var e,
                    n = ks(t),
                    r = Ts(t),
                    o = null == (e = t.ownerDocument) ? void 0 : e.body,
                    i = As(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0
                    ),
                    a = As(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0
                    ),
                    s = -r.scrollLeft + Bs(t),
                    u = -r.scrollTop;
                  return (
                    'rtl' === Is(o || n).direction &&
                      (s += As(n.clientWidth, o ? o.clientWidth : 0) - i),
                    {
                      width: i,
                      height: a,
                      x: s,
                      y: u,
                    }
                  );
                })(ks(t))
              );
        }
        function Du(t, e, n, r) {
          var o =
              'clippingParents' === e
                ? (function (t) {
                    var e = Ls(zs(t)),
                      n =
                        ['absolute', 'fixed'].indexOf(Is(t).position) >= 0 &&
                        Ss(t)
                          ? Hs(t)
                          : t;
                    return Es(n)
                      ? e.filter(function (t) {
                          return Es(t) && Au(t, n) && 'body' !== Rs(t);
                        })
                      : [];
                  })(t)
                : [].concat(e),
            i = [].concat(o, [n]),
            a = i[0],
            s = i.reduce(function (e, n) {
              var o = Mu(t, n, r);
              return (
                (e.top = As(o.top, e.top)),
                (e.right = Cs(o.right, e.right)),
                (e.bottom = Cs(o.bottom, e.bottom)),
                (e.left = As(o.left, e.left)),
                e
              );
            }, Mu(t, a, r));
          return (
            (s.width = s.right - s.left),
            (s.height = s.bottom - s.top),
            (s.x = s.left),
            (s.y = s.top),
            s
          );
        }
        function Pu(t) {
          return Object.assign(
            {},
            {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
            t
          );
        }
        function ju(t, e) {
          return e.reduce(function (e, n) {
            return (e[n] = t), e;
          }, {});
        }
        function Tu(t, e) {
          void 0 === e && (e = {});
          var n = e,
            r = n.placement,
            o = void 0 === r ? t.placement : r,
            i = n.strategy,
            a = void 0 === i ? t.strategy : i,
            s = n.boundary,
            u = void 0 === s ? Zs : s,
            c = n.rootBoundary,
            l = void 0 === c ? tu : c,
            f = n.elementContext,
            p = void 0 === f ? eu : f,
            d = n.altBoundary,
            h = void 0 !== d && d,
            v = n.padding,
            g = void 0 === v ? 0 : v,
            m = Pu('number' != typeof g ? g : ju(g, Js)),
            y = p === eu ? nu : eu,
            b = t.rects.popper,
            x = t.elements[h ? y : p],
            w = Du(
              Es(x) ? x : x.contextElement || ks(t.elements.popper),
              u,
              l,
              a
            ),
            E = js(t.elements.reference),
            S = vu({
              reference: E,
              element: b,
              strategy: 'absolute',
              placement: o,
            }),
            O = Cu(Object.assign({}, b, S)),
            A = p === eu ? O : E,
            C = {
              top: w.top - A.top + m.top,
              bottom: A.bottom - w.bottom + m.bottom,
              left: w.left - A.left + m.left,
              right: A.right - w.right + m.right,
            },
            M = t.modifiersData.offset;
          if (p === eu && M) {
            var D = M[o];
            Object.keys(C).forEach(function (t) {
              var e = [Xs, Vs].indexOf(t) >= 0 ? 1 : -1,
                n = [Ys, Vs].indexOf(t) >= 0 ? 'y' : 'x';
              C[t] += D[n] * e;
            });
          }
          return C;
        }
        const Ru = {
          name: 'flip',
          enabled: !0,
          phase: 'main',
          fn: function (t) {
            var e = t.state,
              n = t.options,
              r = t.name;
            if (!e.modifiersData[r]._skip) {
              for (
                var o = n.mainAxis,
                  i = void 0 === o || o,
                  a = n.altAxis,
                  s = void 0 === a || a,
                  u = n.fallbackPlacements,
                  c = n.padding,
                  l = n.boundary,
                  f = n.rootBoundary,
                  p = n.altBoundary,
                  d = n.flipVariations,
                  h = void 0 === d || d,
                  v = n.allowedAutoPlacements,
                  g = e.options.placement,
                  m = pu(g),
                  y =
                    u ||
                    (m === g || !h
                      ? [Eu(g)]
                      : (function (t) {
                          if (pu(t) === Qs) return [];
                          var e = Eu(t);
                          return [Ou(t), e, Ou(e)];
                        })(g)),
                  b = [g].concat(y).reduce(function (t, n) {
                    return t.concat(
                      pu(n) === Qs
                        ? (function (t, e) {
                            void 0 === e && (e = {});
                            var n = e,
                              r = n.placement,
                              o = n.boundary,
                              i = n.rootBoundary,
                              a = n.padding,
                              s = n.flipVariations,
                              u = n.allowedAutoPlacements,
                              c = void 0 === u ? ou : u,
                              l = du(r),
                              f = l
                                ? s
                                  ? ru
                                  : ru.filter(function (t) {
                                      return du(t) === l;
                                    })
                                : Js,
                              p = f.filter(function (t) {
                                return c.indexOf(t) >= 0;
                              });
                            0 === p.length && (p = f);
                            var d = p.reduce(function (e, n) {
                              return (
                                (e[n] = Tu(t, {
                                  placement: n,
                                  boundary: o,
                                  rootBoundary: i,
                                  padding: a,
                                })[pu(n)]),
                                e
                              );
                            }, {});
                            return Object.keys(d).sort(function (t, e) {
                              return d[t] - d[e];
                            });
                          })(e, {
                            placement: n,
                            boundary: l,
                            rootBoundary: f,
                            padding: c,
                            flipVariations: h,
                            allowedAutoPlacements: v,
                          })
                        : n
                    );
                  }, []),
                  x = e.rects.reference,
                  w = e.rects.popper,
                  E = new Map(),
                  S = !0,
                  O = b[0],
                  A = 0;
                A < b.length;
                A++
              ) {
                var C = b[A],
                  M = pu(C),
                  D = du(C) === Ks,
                  P = [Ys, Vs].indexOf(M) >= 0,
                  j = P ? 'width' : 'height',
                  T = Tu(e, {
                    placement: C,
                    boundary: l,
                    rootBoundary: f,
                    altBoundary: p,
                    padding: c,
                  }),
                  R = P ? (D ? Xs : Us) : D ? Vs : Ys;
                x[j] > w[j] && (R = Eu(R));
                var k = Eu(R),
                  B = [];
                if (
                  (i && B.push(T[M] <= 0),
                  s && B.push(T[R] <= 0, T[k] <= 0),
                  B.every(function (t) {
                    return t;
                  }))
                ) {
                  (O = C), (S = !1);
                  break;
                }
                E.set(C, B);
              }
              if (S)
                for (
                  var I = function (t) {
                      var e = b.find(function (e) {
                        var n = E.get(e);
                        if (n)
                          return n.slice(0, t).every(function (t) {
                            return t;
                          });
                      });
                      if (e) return (O = e), 'break';
                    },
                    _ = h ? 3 : 1;
                  _ > 0;
                  _--
                ) {
                  if ('break' === I(_)) break;
                }
              e.placement !== O &&
                ((e.modifiersData[r]._skip = !0),
                (e.placement = O),
                (e.reset = !0));
            }
          },
          requiresIfExists: ['offset'],
          data: {
            _skip: !1,
          },
        };
        function ku(t, e, n) {
          return As(t, Cs(e, n));
        }
        const Bu = {
          name: 'preventOverflow',
          enabled: !0,
          phase: 'main',
          fn: function (t) {
            var e = t.state,
              n = t.options,
              r = t.name,
              o = n.mainAxis,
              i = void 0 === o || o,
              a = n.altAxis,
              s = void 0 !== a && a,
              u = n.boundary,
              c = n.rootBoundary,
              l = n.altBoundary,
              f = n.padding,
              p = n.tether,
              d = void 0 === p || p,
              h = n.tetherOffset,
              v = void 0 === h ? 0 : h,
              g = Tu(e, {
                boundary: u,
                rootBoundary: c,
                padding: f,
                altBoundary: l,
              }),
              m = pu(e.placement),
              y = du(e.placement),
              b = !y,
              x = hu(m),
              w = 'x' === x ? 'y' : 'x',
              E = e.modifiersData.popperOffsets,
              S = e.rects.reference,
              O = e.rects.popper,
              A =
                'function' == typeof v
                  ? v(
                      Object.assign({}, e.rects, {
                        placement: e.placement,
                      })
                    )
                  : v,
              C =
                'number' == typeof A
                  ? {
                      mainAxis: A,
                      altAxis: A,
                    }
                  : Object.assign(
                      {
                        mainAxis: 0,
                        altAxis: 0,
                      },
                      A
                    ),
              M = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement]
                : null,
              D = {
                x: 0,
                y: 0,
              };
            if (E) {
              if (i) {
                var P,
                  j = 'y' === x ? Ys : Us,
                  T = 'y' === x ? Vs : Xs,
                  R = 'y' === x ? 'height' : 'width',
                  k = E[x],
                  B = k + g[j],
                  I = k - g[T],
                  _ = d ? -O[R] / 2 : 0,
                  F = y === Ks ? S[R] : O[R],
                  N = y === Ks ? -O[R] : -S[R],
                  z = e.elements.arrow,
                  G =
                    d && z
                      ? Ns(z)
                      : {
                          width: 0,
                          height: 0,
                        },
                  L = e.modifiersData['arrow#persistent']
                    ? e.modifiersData['arrow#persistent'].padding
                    : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                      },
                  W = L[j],
                  q = L[T],
                  H = ku(0, S[R], G[R]),
                  Y = b
                    ? S[R] / 2 - _ - H - W - C.mainAxis
                    : F - H - W - C.mainAxis,
                  V = b
                    ? -S[R] / 2 + _ + H + q + C.mainAxis
                    : N + H + q + C.mainAxis,
                  X = e.elements.arrow && Hs(e.elements.arrow),
                  U = X
                    ? 'y' === x
                      ? X.clientTop || 0
                      : X.clientLeft || 0
                    : 0,
                  Q = null != (P = null == M ? void 0 : M[x]) ? P : 0,
                  J = k + V - Q,
                  K = ku(d ? Cs(B, k + Y - Q - U) : B, k, d ? As(I, J) : I);
                (E[x] = K), (D[x] = K - k);
              }
              if (s) {
                var $,
                  Z = 'x' === x ? Ys : Us,
                  tt = 'x' === x ? Vs : Xs,
                  et = E[w],
                  nt = 'y' === w ? 'height' : 'width',
                  rt = et + g[Z],
                  ot = et - g[tt],
                  it = -1 !== [Ys, Us].indexOf(m),
                  at = null != ($ = null == M ? void 0 : M[w]) ? $ : 0,
                  st = it ? rt : et - S[nt] - O[nt] - at + C.altAxis,
                  ut = it ? et + S[nt] + O[nt] - at - C.altAxis : ot,
                  ct =
                    d && it
                      ? (function (t, e, n) {
                          var r = ku(t, e, n);
                          return r > n ? n : r;
                        })(st, et, ut)
                      : ku(d ? st : rt, et, d ? ut : ot);
                (E[w] = ct), (D[w] = ct - et);
              }
              e.modifiersData[r] = D;
            }
          },
          requiresIfExists: ['offset'],
        };
        const Iu = {
          name: 'arrow',
          enabled: !0,
          phase: 'main',
          fn: function (t) {
            var e,
              n = t.state,
              r = t.name,
              o = t.options,
              i = n.elements.arrow,
              a = n.modifiersData.popperOffsets,
              s = pu(n.placement),
              u = hu(s),
              c = [Us, Xs].indexOf(s) >= 0 ? 'height' : 'width';
            if (i && a) {
              var l = (function (t, e) {
                  return Pu(
                    'number' !=
                      typeof (t =
                        'function' == typeof t
                          ? t(
                              Object.assign({}, e.rects, {
                                placement: e.placement,
                              })
                            )
                          : t)
                      ? t
                      : ju(t, Js)
                  );
                })(o.padding, n),
                f = Ns(i),
                p = 'y' === u ? Ys : Us,
                d = 'y' === u ? Vs : Xs,
                h =
                  n.rects.reference[c] +
                  n.rects.reference[u] -
                  a[u] -
                  n.rects.popper[c],
                v = a[u] - n.rects.reference[u],
                g = Hs(i),
                m = g
                  ? 'y' === u
                    ? g.clientHeight || 0
                    : g.clientWidth || 0
                  : 0,
                y = h / 2 - v / 2,
                b = l[p],
                x = m - f[c] - l[d],
                w = m / 2 - f[c] / 2 + y,
                E = ku(b, w, x),
                S = u;
              n.modifiersData[r] =
                (((e = {})[S] = E), (e.centerOffset = E - w), e);
            }
          },
          effect: function (t) {
            var e = t.state,
              n = t.options.element,
              r = void 0 === n ? '[data-popper-arrow]' : n;
            null != r &&
              ('string' != typeof r ||
                (r = e.elements.popper.querySelector(r))) &&
              Au(e.elements.popper, r) &&
              (e.elements.arrow = r);
          },
          requires: ['popperOffsets'],
          requiresIfExists: ['preventOverflow'],
        };
        function _u(t, e, n) {
          return (
            void 0 === n &&
              (n = {
                x: 0,
                y: 0,
              }),
            {
              top: t.top - e.height - n.y,
              right: t.right - e.width + n.x,
              bottom: t.bottom - e.height + n.y,
              left: t.left - e.width - n.x,
            }
          );
        }
        function Fu(t) {
          return [Ys, Xs, Vs, Us].some(function (e) {
            return t[e] >= 0;
          });
        }
        const Nu = {
          name: 'hide',
          enabled: !0,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: function (t) {
            var e = t.state,
              n = t.name,
              r = e.rects.reference,
              o = e.rects.popper,
              i = e.modifiersData.preventOverflow,
              a = Tu(e, {
                elementContext: 'reference',
              }),
              s = Tu(e, {
                altBoundary: !0,
              }),
              u = _u(a, r),
              c = _u(s, o, i),
              l = Fu(u),
              f = Fu(c);
            (e.modifiersData[n] = {
              referenceClippingOffsets: u,
              popperEscapeOffsets: c,
              isReferenceHidden: l,
              hasPopperEscaped: f,
            }),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                'data-popper-reference-hidden': l,
                'data-popper-escaped': f,
              }));
          },
        };
        var zu = cu({
            defaultModifiers: [
              fu,
              gu,
              {
                name: 'computeStyles',
                enabled: !0,
                phase: 'beforeWrite',
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    r = n.gpuAcceleration,
                    o = void 0 === r || r,
                    i = n.adaptive,
                    a = void 0 === i || i,
                    s = n.roundOffsets,
                    u = void 0 === s || s,
                    c = {
                      placement: pu(e.placement),
                      variation: du(e.placement),
                      popper: e.elements.popper,
                      popperRect: e.rects.popper,
                      gpuAcceleration: o,
                      isFixed: 'fixed' === e.options.strategy,
                    };
                  null != e.modifiersData.popperOffsets &&
                    (e.styles.popper = Object.assign(
                      {},
                      e.styles.popper,
                      yu(
                        Object.assign({}, c, {
                          offsets: e.modifiersData.popperOffsets,
                          position: e.options.strategy,
                          adaptive: a,
                          roundOffsets: u,
                        })
                      )
                    )),
                    null != e.modifiersData.arrow &&
                      (e.styles.arrow = Object.assign(
                        {},
                        e.styles.arrow,
                        yu(
                          Object.assign({}, c, {
                            offsets: e.modifiersData.arrow,
                            position: 'absolute',
                            adaptive: !1,
                            roundOffsets: u,
                          })
                        )
                      )),
                    (e.attributes.popper = Object.assign(
                      {},
                      e.attributes.popper,
                      {
                        'data-popper-placement': e.placement,
                      }
                    ));
                },
                data: {},
              },
              bu,
              xu,
              Ru,
              Bu,
              Iu,
              Nu,
            ],
          }),
          Gu = (n(5108), 'tippy-content'),
          Lu = 'tippy-backdrop',
          Wu = 'tippy-arrow',
          qu = 'tippy-svg-arrow',
          Hu = {
            passive: !0,
            capture: !0,
          },
          Yu = function () {
            return document.body;
          };
        function Vu(t, e, n) {
          if (Array.isArray(t)) {
            var r = t[e];
            return null == r ? (Array.isArray(n) ? n[e] : n) : r;
          }
          return t;
        }
        function Xu(t, e) {
          var n = {}.toString.call(t);
          return 0 === n.indexOf('[object') && n.indexOf(e + ']') > -1;
        }
        function Uu(t, e) {
          return 'function' == typeof t ? t.apply(void 0, e) : t;
        }
        function Qu(t, e) {
          return 0 === e
            ? t
            : function (r) {
                clearTimeout(n),
                  (n = setTimeout(function () {
                    t(r);
                  }, e));
              };
          var n;
        }
        function Ju(t) {
          return [].concat(t);
        }
        function Ku(t, e) {
          -1 === t.indexOf(e) && t.push(e);
        }
        function $u(t) {
          return t.split('-')[0];
        }
        function Zu(t) {
          return [].slice.call(t);
        }
        function tc(t) {
          return Object.keys(t).reduce(function (e, n) {
            return void 0 !== t[n] && (e[n] = t[n]), e;
          }, {});
        }
        function ec() {
          return document.createElement('div');
        }
        function nc(t) {
          return ['Element', 'Fragment'].some(function (e) {
            return Xu(t, e);
          });
        }
        function rc(t) {
          return Xu(t, 'MouseEvent');
        }
        function oc(t) {
          return !(!t || !t._tippy || t._tippy.reference !== t);
        }
        function ic(t) {
          return nc(t)
            ? [t]
            : (function (t) {
                return Xu(t, 'NodeList');
              })(t)
            ? Zu(t)
            : Array.isArray(t)
            ? t
            : Zu(document.querySelectorAll(t));
        }
        function ac(t, e) {
          t.forEach(function (t) {
            t && (t.style.transitionDuration = e + 'ms');
          });
        }
        function sc(t, e) {
          t.forEach(function (t) {
            t && t.setAttribute('data-state', e);
          });
        }
        function uc(t) {
          var e,
            n = Ju(t)[0];
          return null != n && null != (e = n.ownerDocument) && e.body
            ? n.ownerDocument
            : document;
        }
        function cc(t, e, n) {
          var r = e + 'EventListener';
          ['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
            t[r](e, n);
          });
        }
        function lc(t, e) {
          for (var n = e; n; ) {
            var r;
            if (t.contains(n)) return !0;
            n =
              null == n.getRootNode || null == (r = n.getRootNode())
                ? void 0
                : r.host;
          }
          return !1;
        }
        var fc = {
            isTouch: !1,
          },
          pc = 0;
        function dc() {
          fc.isTouch ||
            ((fc.isTouch = !0),
            window.performance && document.addEventListener('mousemove', hc));
        }
        function hc() {
          var t = performance.now();
          t - pc < 20 &&
            ((fc.isTouch = !1), document.removeEventListener('mousemove', hc)),
            (pc = t);
        }
        function vc() {
          var t = document.activeElement;
          if (oc(t)) {
            var e = t._tippy;
            t.blur && !e.state.isVisible && t.blur();
          }
        }
        var gc =
          !!('undefined' != typeof window && 'undefined' != typeof document) &&
          !!window.msCrypto;
        var mc = {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1,
          },
          yc = Object.assign(
            {
              appendTo: Yu,
              aria: {
                content: 'auto',
                expanded: 'auto',
              },
              delay: 0,
              duration: [300, 250],
              getReferenceClientRect: null,
              hideOnClick: !0,
              ignoreAttributes: !1,
              interactive: !1,
              interactiveBorder: 2,
              interactiveDebounce: 0,
              moveTransition: '',
              offset: [0, 10],
              onAfterUpdate: function () {},
              onBeforeUpdate: function () {},
              onCreate: function () {},
              onDestroy: function () {},
              onHidden: function () {},
              onHide: function () {},
              onMount: function () {},
              onShow: function () {},
              onShown: function () {},
              onTrigger: function () {},
              onUntrigger: function () {},
              onClickOutside: function () {},
              placement: 'top',
              plugins: [],
              popperOptions: {},
              render: null,
              showOnCreate: !1,
              touch: !0,
              trigger: 'mouseenter focus',
              triggerTarget: null,
            },
            mc,
            {
              allowHTML: !1,
              animation: 'fade',
              arrow: !0,
              content: '',
              inertia: !1,
              maxWidth: 350,
              role: 'tooltip',
              theme: '',
              zIndex: 9999,
            }
          ),
          bc = Object.keys(yc);
        function xc(t) {
          var e = (t.plugins || []).reduce(function (e, n) {
            var r,
              o = n.name,
              i = n.defaultValue;
            o && (e[o] = void 0 !== t[o] ? t[o] : null != (r = yc[o]) ? r : i);
            return e;
          }, {});
          return Object.assign({}, t, e);
        }
        function wc(t, e) {
          var n = Object.assign(
            {},
            e,
            {
              content: Uu(e.content, [t]),
            },
            e.ignoreAttributes
              ? {}
              : (function (t, e) {
                  return (
                    e
                      ? Object.keys(
                          xc(
                            Object.assign({}, yc, {
                              plugins: e,
                            })
                          )
                        )
                      : bc
                  ).reduce(function (e, n) {
                    var r = (t.getAttribute('data-tippy-' + n) || '').trim();
                    if (!r) return e;
                    if ('content' === n) e[n] = r;
                    else
                      try {
                        e[n] = JSON.parse(r);
                      } catch (t) {
                        e[n] = r;
                      }
                    return e;
                  }, {});
                })(t, e.plugins)
          );
          return (
            (n.aria = Object.assign({}, yc.aria, n.aria)),
            (n.aria = {
              expanded:
                'auto' === n.aria.expanded ? e.interactive : n.aria.expanded,
              content:
                'auto' === n.aria.content
                  ? e.interactive
                    ? null
                    : 'describedby'
                  : n.aria.content,
            }),
            n
          );
        }
        var Ec = function () {
          return 'innerHTML';
        };
        function Sc(t, e) {
          t[Ec()] = e;
        }
        function Oc(t) {
          var e = ec();
          return (
            !0 === t
              ? (e.className = Wu)
              : ((e.className = qu), nc(t) ? e.appendChild(t) : Sc(e, t)),
            e
          );
        }
        function Ac(t, e) {
          nc(e.content)
            ? (Sc(t, ''), t.appendChild(e.content))
            : 'function' != typeof e.content &&
              (e.allowHTML ? Sc(t, e.content) : (t.textContent = e.content));
        }
        function Cc(t) {
          var e = t.firstElementChild,
            n = Zu(e.children);
          return {
            box: e,
            content: n.find(function (t) {
              return t.classList.contains(Gu);
            }),
            arrow: n.find(function (t) {
              return t.classList.contains(Wu) || t.classList.contains(qu);
            }),
            backdrop: n.find(function (t) {
              return t.classList.contains(Lu);
            }),
          };
        }
        function Mc(t) {
          var e = ec(),
            n = ec();
          (n.className = 'tippy-box'),
            n.setAttribute('data-state', 'hidden'),
            n.setAttribute('tabindex', '-1');
          var r = ec();
          function o(n, r) {
            var o = Cc(e),
              i = o.box,
              a = o.content,
              s = o.arrow;
            r.theme
              ? i.setAttribute('data-theme', r.theme)
              : i.removeAttribute('data-theme'),
              'string' == typeof r.animation
                ? i.setAttribute('data-animation', r.animation)
                : i.removeAttribute('data-animation'),
              r.inertia
                ? i.setAttribute('data-inertia', '')
                : i.removeAttribute('data-inertia'),
              (i.style.maxWidth =
                'number' == typeof r.maxWidth ? r.maxWidth + 'px' : r.maxWidth),
              r.role
                ? i.setAttribute('role', r.role)
                : i.removeAttribute('role'),
              (n.content === r.content && n.allowHTML === r.allowHTML) ||
                Ac(a, t.props),
              r.arrow
                ? s
                  ? n.arrow !== r.arrow &&
                    (i.removeChild(s), i.appendChild(Oc(r.arrow)))
                  : i.appendChild(Oc(r.arrow))
                : s && i.removeChild(s);
          }
          return (
            (r.className = Gu),
            r.setAttribute('data-state', 'hidden'),
            Ac(r, t.props),
            e.appendChild(n),
            n.appendChild(r),
            o(t.props, t.props),
            {
              popper: e,
              onUpdate: o,
            }
          );
        }
        Mc.$$tippy = !0;
        var Dc = 1,
          Pc = [],
          jc = [];
        function Tc(t, e) {
          var n,
            r,
            o,
            i,
            a,
            s,
            u,
            c,
            l = wc(t, Object.assign({}, yc, xc(tc(e)))),
            f = !1,
            p = !1,
            d = !1,
            h = !1,
            v = [],
            g = Qu(X, l.interactiveDebounce),
            m = Dc++,
            y = (c = l.plugins).filter(function (t, e) {
              return c.indexOf(t) === e;
            }),
            b = {
              id: m,
              reference: t,
              popper: ec(),
              popperInstance: null,
              props: l,
              state: {
                isEnabled: !0,
                isVisible: !1,
                isDestroyed: !1,
                isMounted: !1,
                isShown: !1,
              },
              plugins: y,
              clearDelayTimeouts: function () {
                clearTimeout(n), clearTimeout(r), cancelAnimationFrame(o);
              },
              setProps: function (e) {
                0;
                if (b.state.isDestroyed) return;
                k('onBeforeUpdate', [b, e]), Y();
                var n = b.props,
                  r = wc(
                    t,
                    Object.assign({}, n, tc(e), {
                      ignoreAttributes: !0,
                    })
                  );
                (b.props = r),
                  H(),
                  n.interactiveDebounce !== r.interactiveDebounce &&
                    (_(), (g = Qu(X, r.interactiveDebounce)));
                n.triggerTarget && !r.triggerTarget
                  ? Ju(n.triggerTarget).forEach(function (t) {
                      t.removeAttribute('aria-expanded');
                    })
                  : r.triggerTarget && t.removeAttribute('aria-expanded');
                I(), R(), E && E(n, r);
                b.popperInstance &&
                  (K(),
                  Z().forEach(function (t) {
                    requestAnimationFrame(t._tippy.popperInstance.forceUpdate);
                  }));
                k('onAfterUpdate', [b, e]);
              },
              setContent: function (t) {
                b.setProps({
                  content: t,
                });
              },
              show: function () {
                0;
                var t = b.state.isVisible,
                  e = b.state.isDestroyed,
                  n = !b.state.isEnabled,
                  r = fc.isTouch && !b.props.touch,
                  o = Vu(b.props.duration, 0, yc.duration);
                if (t || e || n || r) return;
                if (D().hasAttribute('disabled')) return;
                if ((k('onShow', [b], !1), !1 === b.props.onShow(b))) return;
                (b.state.isVisible = !0),
                  M() && (w.style.visibility = 'visible');
                R(), G(), b.state.isMounted || (w.style.transition = 'none');
                if (M()) {
                  var i = j();
                  ac([i.box, i.content], 0);
                }
                (s = function () {
                  var t;
                  if (b.state.isVisible && !h) {
                    if (
                      ((h = !0),
                      w.offsetHeight,
                      (w.style.transition = b.props.moveTransition),
                      M() && b.props.animation)
                    ) {
                      var e = j(),
                        n = e.box,
                        r = e.content;
                      ac([n, r], o), sc([n, r], 'visible');
                    }
                    B(),
                      I(),
                      Ku(jc, b),
                      null == (t = b.popperInstance) || t.forceUpdate(),
                      k('onMount', [b]),
                      b.props.animation &&
                        M() &&
                        (function (t, e) {
                          W(t, e);
                        })(o, function () {
                          (b.state.isShown = !0), k('onShown', [b]);
                        });
                  }
                }),
                  (function () {
                    var t,
                      e = b.props.appendTo,
                      n = D();
                    t =
                      (b.props.interactive && e === Yu) || 'parent' === e
                        ? n.parentNode
                        : Uu(e, [n]);
                    t.contains(w) || t.appendChild(w);
                    (b.state.isMounted = !0), K(), !1;
                  })();
              },
              hide: function () {
                0;
                var t = !b.state.isVisible,
                  e = b.state.isDestroyed,
                  n = !b.state.isEnabled,
                  r = Vu(b.props.duration, 1, yc.duration);
                if (t || e || n) return;
                if ((k('onHide', [b], !1), !1 === b.props.onHide(b))) return;
                (b.state.isVisible = !1),
                  (b.state.isShown = !1),
                  (h = !1),
                  (f = !1),
                  M() && (w.style.visibility = 'hidden');
                if ((_(), L(), R(!0), M())) {
                  var o = j(),
                    i = o.box,
                    a = o.content;
                  b.props.animation && (ac([i, a], r), sc([i, a], 'hidden'));
                }
                B(),
                  I(),
                  b.props.animation
                    ? M() &&
                      (function (t, e) {
                        W(t, function () {
                          !b.state.isVisible &&
                            w.parentNode &&
                            w.parentNode.contains(w) &&
                            e();
                        });
                      })(r, b.unmount)
                    : b.unmount();
              },
              hideWithInteractivity: function (t) {
                0;
                P().addEventListener('mousemove', g), Ku(Pc, g), g(t);
              },
              enable: function () {
                b.state.isEnabled = !0;
              },
              disable: function () {
                b.hide(), (b.state.isEnabled = !1);
              },
              unmount: function () {
                0;
                b.state.isVisible && b.hide();
                if (!b.state.isMounted) return;
                $(),
                  Z().forEach(function (t) {
                    t._tippy.unmount();
                  }),
                  w.parentNode && w.parentNode.removeChild(w);
                (jc = jc.filter(function (t) {
                  return t !== b;
                })),
                  (b.state.isMounted = !1),
                  k('onHidden', [b]);
              },
              destroy: function () {
                0;
                if (b.state.isDestroyed) return;
                b.clearDelayTimeouts(),
                  b.unmount(),
                  Y(),
                  delete t._tippy,
                  (b.state.isDestroyed = !0),
                  k('onDestroy', [b]);
              },
            };
          if (!l.render) return b;
          var x = l.render(b),
            w = x.popper,
            E = x.onUpdate;
          w.setAttribute('data-tippy-root', ''),
            (w.id = 'tippy-' + b.id),
            (b.popper = w),
            (t._tippy = b),
            (w._tippy = b);
          var S = y.map(function (t) {
              return t.fn(b);
            }),
            O = t.hasAttribute('aria-expanded');
          return (
            H(),
            I(),
            R(),
            k('onCreate', [b]),
            l.showOnCreate && tt(),
            w.addEventListener('mouseenter', function () {
              b.props.interactive &&
                b.state.isVisible &&
                b.clearDelayTimeouts();
            }),
            w.addEventListener('mouseleave', function () {
              b.props.interactive &&
                b.props.trigger.indexOf('mouseenter') >= 0 &&
                P().addEventListener('mousemove', g);
            }),
            b
          );
          function A() {
            var t = b.props.touch;
            return Array.isArray(t) ? t : [t, 0];
          }
          function C() {
            return 'hold' === A()[0];
          }
          function M() {
            var t;
            return !(null == (t = b.props.render) || !t.$$tippy);
          }
          function D() {
            return u || t;
          }
          function P() {
            var t = D().parentNode;
            return t ? uc(t) : document;
          }
          function j() {
            return Cc(w);
          }
          function T(t) {
            return (b.state.isMounted && !b.state.isVisible) ||
              fc.isTouch ||
              (i && 'focus' === i.type)
              ? 0
              : Vu(b.props.delay, t ? 0 : 1, yc.delay);
          }
          function R(t) {
            void 0 === t && (t = !1),
              (w.style.pointerEvents = b.props.interactive && !t ? '' : 'none'),
              (w.style.zIndex = '' + b.props.zIndex);
          }
          function k(t, e, n) {
            var r;
            (void 0 === n && (n = !0),
            S.forEach(function (n) {
              n[t] && n[t].apply(n, e);
            }),
            n) && (r = b.props)[t].apply(r, e);
          }
          function B() {
            var e = b.props.aria;
            if (e.content) {
              var n = 'aria-' + e.content,
                r = w.id;
              Ju(b.props.triggerTarget || t).forEach(function (t) {
                var e = t.getAttribute(n);
                if (b.state.isVisible) t.setAttribute(n, e ? e + ' ' + r : r);
                else {
                  var o = e && e.replace(r, '').trim();
                  o ? t.setAttribute(n, o) : t.removeAttribute(n);
                }
              });
            }
          }
          function I() {
            !O &&
              b.props.aria.expanded &&
              Ju(b.props.triggerTarget || t).forEach(function (t) {
                b.props.interactive
                  ? t.setAttribute(
                      'aria-expanded',
                      b.state.isVisible && t === D() ? 'true' : 'false'
                    )
                  : t.removeAttribute('aria-expanded');
              });
          }
          function _() {
            P().removeEventListener('mousemove', g),
              (Pc = Pc.filter(function (t) {
                return t !== g;
              }));
          }
          function F(e) {
            if (!fc.isTouch || (!d && 'mousedown' !== e.type)) {
              var n = (e.composedPath && e.composedPath()[0]) || e.target;
              if (!b.props.interactive || !lc(w, n)) {
                if (
                  Ju(b.props.triggerTarget || t).some(function (t) {
                    return lc(t, n);
                  })
                ) {
                  if (fc.isTouch) return;
                  if (
                    b.state.isVisible &&
                    b.props.trigger.indexOf('click') >= 0
                  )
                    return;
                } else k('onClickOutside', [b, e]);
                !0 === b.props.hideOnClick &&
                  (b.clearDelayTimeouts(),
                  b.hide(),
                  (p = !0),
                  setTimeout(function () {
                    p = !1;
                  }),
                  b.state.isMounted || L());
              }
            }
          }
          function N() {
            d = !0;
          }
          function z() {
            d = !1;
          }
          function G() {
            var t = P();
            t.addEventListener('mousedown', F, !0),
              t.addEventListener('touchend', F, Hu),
              t.addEventListener('touchstart', z, Hu),
              t.addEventListener('touchmove', N, Hu);
          }
          function L() {
            var t = P();
            t.removeEventListener('mousedown', F, !0),
              t.removeEventListener('touchend', F, Hu),
              t.removeEventListener('touchstart', z, Hu),
              t.removeEventListener('touchmove', N, Hu);
          }
          function W(t, e) {
            var n = j().box;
            function r(t) {
              t.target === n && (cc(n, 'remove', r), e());
            }
            if (0 === t) return e();
            cc(n, 'remove', a), cc(n, 'add', r), (a = r);
          }
          function q(e, n, r) {
            void 0 === r && (r = !1),
              Ju(b.props.triggerTarget || t).forEach(function (t) {
                t.addEventListener(e, n, r),
                  v.push({
                    node: t,
                    eventType: e,
                    handler: n,
                    options: r,
                  });
              });
          }
          function H() {
            var t;
            C() &&
              (q('touchstart', V, {
                passive: !0,
              }),
              q('touchend', U, {
                passive: !0,
              })),
              ((t = b.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(
                function (t) {
                  if ('manual' !== t)
                    switch ((q(t, V), t)) {
                      case 'mouseenter':
                        q('mouseleave', U);
                        break;
                      case 'focus':
                        q(gc ? 'focusout' : 'blur', Q);
                        break;
                      case 'focusin':
                        q('focusout', Q);
                    }
                }
              );
          }
          function Y() {
            v.forEach(function (t) {
              var e = t.node,
                n = t.eventType,
                r = t.handler,
                o = t.options;
              e.removeEventListener(n, r, o);
            }),
              (v = []);
          }
          function V(t) {
            var e,
              n = !1;
            if (b.state.isEnabled && !J(t) && !p) {
              var r = 'focus' === (null == (e = i) ? void 0 : e.type);
              (i = t),
                (u = t.currentTarget),
                I(),
                !b.state.isVisible &&
                  rc(t) &&
                  Pc.forEach(function (e) {
                    return e(t);
                  }),
                'click' === t.type &&
                (b.props.trigger.indexOf('mouseenter') < 0 || f) &&
                !1 !== b.props.hideOnClick &&
                b.state.isVisible
                  ? (n = !0)
                  : tt(t),
                'click' === t.type && (f = !n),
                n && !r && et(t);
            }
          }
          function X(t) {
            var e = t.target,
              n = D().contains(e) || w.contains(e);
            if ('mousemove' !== t.type || !n) {
              var r = Z()
                .concat(w)
                .map(function (t) {
                  var e,
                    n =
                      null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                  return n
                    ? {
                        popperRect: t.getBoundingClientRect(),
                        popperState: n,
                        props: l,
                      }
                    : null;
                })
                .filter(Boolean);
              (function (t, e) {
                var n = e.clientX,
                  r = e.clientY;
                return t.every(function (t) {
                  var e = t.popperRect,
                    o = t.popperState,
                    i = t.props.interactiveBorder,
                    a = $u(o.placement),
                    s = o.modifiersData.offset;
                  if (!s) return !0;
                  var u = 'bottom' === a ? s.top.y : 0,
                    c = 'top' === a ? s.bottom.y : 0,
                    l = 'right' === a ? s.left.x : 0,
                    f = 'left' === a ? s.right.x : 0,
                    p = e.top - r + u > i,
                    d = r - e.bottom - c > i,
                    h = e.left - n + l > i,
                    v = n - e.right - f > i;
                  return p || d || h || v;
                });
              })(r, t) && (_(), et(t));
            }
          }
          function U(t) {
            J(t) ||
              (b.props.trigger.indexOf('click') >= 0 && f) ||
              (b.props.interactive ? b.hideWithInteractivity(t) : et(t));
          }
          function Q(t) {
            (b.props.trigger.indexOf('focusin') < 0 && t.target !== D()) ||
              (b.props.interactive &&
                t.relatedTarget &&
                w.contains(t.relatedTarget)) ||
              et(t);
          }
          function J(t) {
            return !!fc.isTouch && C() !== t.type.indexOf('touch') >= 0;
          }
          function K() {
            $();
            var e = b.props,
              n = e.popperOptions,
              r = e.placement,
              o = e.offset,
              i = e.getReferenceClientRect,
              a = e.moveTransition,
              u = M() ? Cc(w).arrow : null,
              c = i
                ? {
                    getBoundingClientRect: i,
                    contextElement: i.contextElement || D(),
                  }
                : t,
              l = {
                name: '$$tippy',
                enabled: !0,
                phase: 'beforeWrite',
                requires: ['computeStyles'],
                fn: function (t) {
                  var e = t.state;
                  if (M()) {
                    var n = j().box;
                    ['placement', 'reference-hidden', 'escaped'].forEach(
                      function (t) {
                        'placement' === t
                          ? n.setAttribute('data-placement', e.placement)
                          : e.attributes.popper['data-popper-' + t]
                          ? n.setAttribute('data-' + t, '')
                          : n.removeAttribute('data-' + t);
                      }
                    ),
                      (e.attributes.popper = {});
                  }
                },
              },
              f = [
                {
                  name: 'offset',
                  options: {
                    offset: o,
                  },
                },
                {
                  name: 'preventOverflow',
                  options: {
                    padding: {
                      top: 2,
                      bottom: 2,
                      left: 5,
                      right: 5,
                    },
                  },
                },
                {
                  name: 'flip',
                  options: {
                    padding: 5,
                  },
                },
                {
                  name: 'computeStyles',
                  options: {
                    adaptive: !a,
                  },
                },
                l,
              ];
            M() &&
              u &&
              f.push({
                name: 'arrow',
                options: {
                  element: u,
                  padding: 3,
                },
              }),
              f.push.apply(f, (null == n ? void 0 : n.modifiers) || []),
              (b.popperInstance = zu(
                c,
                w,
                Object.assign({}, n, {
                  placement: r,
                  onFirstUpdate: s,
                  modifiers: f,
                })
              ));
          }
          function $() {
            b.popperInstance &&
              (b.popperInstance.destroy(), (b.popperInstance = null));
          }
          function Z() {
            return Zu(w.querySelectorAll('[data-tippy-root]'));
          }
          function tt(t) {
            b.clearDelayTimeouts(), t && k('onTrigger', [b, t]), G();
            var e = T(!0),
              r = A(),
              o = r[0],
              i = r[1];
            fc.isTouch && 'hold' === o && i && (e = i),
              e
                ? (n = setTimeout(function () {
                    b.show();
                  }, e))
                : b.show();
          }
          function et(t) {
            if (
              (b.clearDelayTimeouts(),
              k('onUntrigger', [b, t]),
              b.state.isVisible)
            ) {
              if (
                !(
                  b.props.trigger.indexOf('mouseenter') >= 0 &&
                  b.props.trigger.indexOf('click') >= 0 &&
                  ['mouseleave', 'mousemove'].indexOf(t.type) >= 0 &&
                  f
                )
              ) {
                var e = T(!1);
                e
                  ? (r = setTimeout(function () {
                      b.state.isVisible && b.hide();
                    }, e))
                  : (o = requestAnimationFrame(function () {
                      b.hide();
                    }));
              }
            } else L();
          }
        }
        function Rc(t, e) {
          void 0 === e && (e = {});
          var n = yc.plugins.concat(e.plugins || []);
          document.addEventListener('touchstart', dc, Hu),
            window.addEventListener('blur', vc);
          var r = Object.assign({}, e, {
              plugins: n,
            }),
            o = ic(t).reduce(function (t, e) {
              var n = e && Tc(e, r);
              return n && t.push(n), t;
            }, []);
          return nc(t) ? o[0] : o;
        }
        (Rc.defaultProps = yc),
          (Rc.setDefaultProps = function (t) {
            Object.keys(t).forEach(function (e) {
              yc[e] = t[e];
            });
          }),
          (Rc.currentInput = fc);
        Object.assign({}, bu, {
          effect: function (t) {
            var e = t.state,
              n = {
                popper: {
                  position: e.options.strategy,
                  left: '0',
                  top: '0',
                  margin: '0',
                },
                arrow: {
                  position: 'absolute',
                },
                reference: {},
              };
            Object.assign(e.elements.popper.style, n.popper),
              (e.styles = n),
              e.elements.arrow &&
                Object.assign(e.elements.arrow.style, n.arrow);
          },
        });
        var kc = {
          name: 'sticky',
          defaultValue: !1,
          fn: function (t) {
            var e = t.reference,
              n = t.popper;
            function r(e) {
              return !0 === t.props.sticky || t.props.sticky === e;
            }
            var o = null,
              i = null;
            function a() {
              var s = r('reference')
                  ? (t.popperInstance
                      ? t.popperInstance.state.elements.reference
                      : e
                    ).getBoundingClientRect()
                  : null,
                u = r('popper') ? n.getBoundingClientRect() : null;
              ((s && Bc(o, s)) || (u && Bc(i, u))) &&
                t.popperInstance &&
                t.popperInstance.update(),
                (o = s),
                (i = u),
                t.state.isMounted && requestAnimationFrame(a);
            }
            return {
              onMount: function () {
                t.props.sticky && a();
              },
            };
          },
        };
        function Bc(t, e) {
          return (
            !t ||
            !e ||
            t.top !== e.top ||
            t.right !== e.right ||
            t.bottom !== e.bottom ||
            t.left !== e.left
          );
        }
        Rc.setDefaultProps({
          render: Mc,
        });
        const Ic = Rc;
        var _c = window.i18n || window.browser.i18n;
        n(2222);
        function Fc(t, e, n, r) {
          var o,
            i = !1,
            a = 0;
          function s() {
            o && clearTimeout(o);
          }
          function u() {
            for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++)
              c[l] = arguments[l];
            var f = this,
              p = Date.now() - a;
            function d() {
              (a = Date.now()), n.apply(f, c);
            }
            i ||
              (r && !o && d(),
              s(),
              void 0 === r && p > t
                ? d()
                : !0 !== e &&
                  (o = setTimeout(
                    r
                      ? function () {
                          o = void 0;
                        }
                      : d,
                    void 0 === r ? t - p : t
                  )));
          }
          return (
            'boolean' != typeof e && ((r = n), (n = e), (e = void 0)),
            (u.cancel = function () {
              s(), (i = !0);
            }),
            u
          );
        }
        var Nc = 'tpa-click-effect',
          zc = 'tpa-ec-clicker',
          Gc = function (t) {
            var e = t.clicker,
              n = t.zIndex,
              r = document.createElement('div');
            (r.className = Nc),
              (r.style.zIndex = ''.concat(n)),
              (document.body || document.documentElement).appendChild(r),
              ((t, e, n) =>
                Wa(t, e, {
                  platform: ys,
                  ...n,
                }))(e, r, {
                placement: 'top-start',
                middleware: [
                  Ya({
                    mainAxis: -16,
                    crossAxis: 11,
                  }),
                ],
              }).then(function (t) {
                var e = t.x,
                  n = t.y;
                Object.assign(r.style, {
                  left: ''.concat(e, 'px'),
                  top: ''.concat(n, 'px'),
                });
              }),
              r.addEventListener('animationend', function () {
                return r.parentElement.removeChild(r);
              });
          },
          Lc = 9e4,
          Wc = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = Lc;
            Lc += 3;
            var n = document.createElement('img');
            (n.alt = '↖'),
              (n.onerror = function () {
                n.classList.add('tpa-inner-clicker-error');
              });
            var r = xs('1234567890abcdef', 10),
              o = ''.concat(zc, '-').concat(r());
            (n.id = o),
              (n.src =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUdwTAAAAAMDAwEBAQYGBgMDAwcHBx8fHw8PDwQEBAEBAQICAgICAgEBAQEBAQsLCwEBAfz8/Ojo6Ojo6LW1tf39/czMzNra2l5eXufn54eHh/j4+PX19f39/TMzM////zAwMOnp6Xt7e0pKSrW1tZKSkl9fXz09PdHR0aWlpatP/y4AAAAfdFJOUwBEGz8NFwkBBRE1KB86MSQs6GwhhZ9IpFy2VNXFfVHTwhglAAAPwUlEQVR42uxde1+zPAxlN8rmbuicOqfuotPn+3/Bl0uBJC1QoIWyl/jz/53T5DRNk+I4gw022GCDDTbYYIMNNthggw022GCDDTbYYIMNNthggw022GCDDTbYYIMNNthggw022GCF9rT/eD6++/7x+Pyx/7+BZ97j0f8C5j//rzh4+kDoOQePjDnRH/s/wk8pCPDfOQH7HPgRBfvQCyK7W/wfX4X2/BTDj3zh/rSPseevMvuIKYh84M4oCNa1HH8sBSzzg3vC76jg51KQ2v14P2MfX6oWSIGXusHd+P/jVwX7uC8XCDX9ya9CQCgF3v1IQUjA81dF85/YvWhBuIhPX9Xt+eleAkEpA5BKged5PddCntvKHODv53K7Xf6di6WAE+D0NjeMXVh0gL/bidulkIJ3EAc9DIX4l3tM2AL+nYD9nJWkwOllKEQ/fU9B/ZyQXb8L4+DDA4HQN/Thv0eTwO8TteufihT0zQPS6D0SQNeTaMpS0B8l4DtAsHjvZQ5QRQr6xEAcAJ5HNPAiJ6BcCvq3HcQe4BEov6c8K5OCfvkA3wMDI0BOBVYsBcc+HZQz/FUICKSg5ICQpMeM9dYDfosZUJUC2yng8R+YS0Twdiqxq9IBwXIOWEKA67rvhXlgLSlg9ktBEgCu5z4r5QHVpCDZEC0OgyQAXJekwmcVAkqlgMUbgmNrVpBuAQEB+2oqmNjt3OeyYUJAgH9Kt4HLSdHKpMCzWAohAdP3gmpAof2WZgXWUpBFwHQ6JSr4d1K3EikItkRLOUj2gJCA+WMdFVSVAi+WQ7s2RIYJ2CsUBGpLQZgdW5cXMSQB87lfUwUrSoFjUdUMOsB8fqyrgqpSYF1qiB1g1kAFK0gB9wErAiE7CEQENFLBPkoB1wCXEzCmV0O3WgxcVbOC7uMg/A1eRsBs1lAFlbMCW5yAbAKz2bHGgbBGHFhDQXoWDvPAAP/spbkKqkqBFZeJKA0KCXisdyCUx8G/slY7Cy6SQAhEBGy0qGB1KeheA6I8aDYb+5XLYk2kYN+1FGANCAl406WCyllBt04ACIg9QEsqVE0KuvSCLBFKCNhrVEH1WkGnBGAN0KuCylKQ1k1ZdyEQa4BuFbQ9K6CJwFi/CirFQdaA33IcCB6wJCron07tUJBJQas+wNA2EBLQsCzWXAparhghFQxDYKPpQNiwv6Y1BkBVPNwGxuPle9OyWCMpaD07FvbBpcYDYcOsgLVMgFwFzyftViIFT60mRqIHHAyqoKoUeO1lBYyoYMCAURWsJgUt5IYMpEJcBY9GVVC91c7jrRXMeAjA49DYvApWlQKzYSAeh4Rc8NcUAxW6blkrIcBF4GDkQFizv8Z4YsQcUhgfCyr4czJoql23Bm/S8PVoGAOmDoR1pOD9yfh+UHogPJ8Mm0pW4JhTAh4EWQwsdwbKYlq6bo0cEsXCsKGymBYpMBEHdCNsWQWVW+2yayRmioA0F2xXBSsfEIwSMOtCBVWzAjO1AokI7NtWwcoN+FrDQKwMb75aOBA2K59rZECSDBsuizVowPfhRRrTSwAojHakgipSEN6ppyO65moi5i4HmktB2HasucuKNgqZvRxoLAV7MJCmxw8Yqo2HBLRSFqvbdRvpgOdplAFxG2ipLFZTCt4jGdAYBrBdsqXLgWZdtx9ebLo2A5Yy0NmJuJoUhEEAnYA1JsChueCh/QNhFSl49lzIQGMtZKVlscupK5NLQfBbMydwdPgA7Bm3RAWLpODDjRhgnp5eS0kybIUK5kuB73IX0LMdQgK6KotVTA33nAHuAw1VgDk2lMUqMfA8TRnQGANeR5cDKkJAa2TTgAHP1RQETLINdHoglBipmvrTkAHsBFpvR8aWpEK5LvAUMQB0sFEQSDpG91apYGBEBfbzOfABTR6AusXsUkEhBhABjWWAOWImYJkKUgIe55SBJjHAJCdiy1VwP4MMJM9UNDsOMeQBHZfFygmYhQRMYQw08AFmYVmMnAu/JAQEFCAV0DY60fHlgPQ8QH7OZjxLg0ATAZ5FlwOlu+D7cixhQO8dsVUHQloYeVsuMwKilLjxToinh8bWlMXkNYHHjICpFhWQbIQHe1RQrIkcNtAFQgri4lCzRhlW2CfRmQr+ioN37w8xATOYCzTOhawsi10v35KS2O5hg1wgzQa1XpB1roJy8GFWtnkgLtCcAIWeWTvAh/ay3YYuQHbCphuhA0Wg08uBQvCRAwQEPCQxMOUEhCqo+YawiwNhGfhIAdbrbU4M1OeAOXSCrv0DoQr4MAlaBARsIwLGhACnIQEkF2wzFfot+YYBCIDXxWIdxwAmgOnJhkFtvK3LAXXwEf5VSsByTDMBneehdspilcCH+A+rkIA4BpJtQNuBsOXLgargY/yTmACyDegrCaRv6hhWwVtl8GEK/DqZrDICxtoJ8OCjQgYvB2qhDxKgSYifesBcEwEOLQ2buhz4/fmr9Tmf4+sIELBFIaDjMMAJcEFVyERZ7PfnXA/+YTSajGQeoKsoJKkLGiiL1YN/fPkcBTaZxBIg2QZ5IqRxktqICt7qCN/LLkIfO8AkjQDtIiiMTmg/EP5+VwXvp+AzB0glICIAFAQatwmIZTG9lwOXcwPwHD93AGETcJvfDskvyPSVxX7/NQFPHeBB3AU9HbugcEWqrSx2/WsEPl1/LoFRBCx1VoQMd4spql8OeA4/WX+wB8xwTVAbA+mBUFMuqBL+ueAj/COKX5AAHW3Dwosimspil1Lwb/ng+epH+PkOsE3wayuH5IuADhW8lIF/HZWij+BHApA4wBgToKN1npmZHLjUBQ/gT1L4MABoFqQ1BjgBzVUwV//8l0MRdoKex3+GX7wddnQR4OZfDlQ/EOZNQB2DqP9UWPoEfuL+HD9xgKZXg/kq2Lgsds492yksPVh97v48BUIOoCkLkJYEGpfFpPmfv5MuvhQ6R8/dP/X/5Bw4dV1tTeNCKqThQQ2pAL6Vo1+tcuBn6w8uhfRkQbKSQNNUSCYAwfKrLn0MPoUfub+AP2mTc3QR4OEBskZlsW9ZXb9I8ISlj8AD+Cj+ca+sziFK0CrTRAUvpfjR2q+kSx+jx/ABAVkA6Jqi9DIXaNgzKwkAuv65fr/mtk0Wn8NP9A8FgN45YjA907As9q8Ev4h+kVq29CJ8gl/vNHnpC4vqZbFrEf5JPnrg9xH2CH3s/ND90dCMo5MAXd1iYgC85pxxSMzDlU/XHsLn+EF/oPbnFDRcDohDnzvB+zn6Vc7KJ0tP4CfuDwXQ5HsS9S4HRAV8k6Inmheh36KlT0Mfrj7eADW/qaKlLPadJwBCjr8Q/X6Dlz5Gn8IH+I0RUNAtdq6ZAuxE/DjPI5KXgAfowfJrnqAv3AbqqGBeAMiOeGuMHYFH6MHyY/xmCGh0OfAt3wFweQedcQD6MfL7GQWfwjfyuJaespiYArzA2z10wE8THaj3Uvh88ZNpQTOPizH64HwtFRTHvVFxH8JHeg/dnnh+svpG3V9sFKmXC/5IA4BWN9fwiMP3ujHBTtBn08Im399GfRLzGpcDYgC84csdWN4ieV7m9Sn4dNtLY9/sA+yS8aGKB0J5CoDdf8vLWxuCnoJ3qecH5ph9fp05QqNItQOhNAWAl3v8ciM74FP40+lUHvdQ+M29t9zwhUV5CgAvd8Pr7bS6DbNc6PUAfCb7wPfNvTaN31ufVX5QQ5YCTBB+VN0bw5UXBB84vucB6TP56Dwrf2GxSAVvshRAxI/gz6RBj8F7Dmtj+eV1wSoqKEsBcvGX7fV83R3k+qyFTw54tS8HfvICAN7tPsDiLt3tkOThfNfQ28rlPbPqKnjNCwC4/pvkcpMe8NHSM5ztspbQywfIlC8H/sQUAHW3pJs/LG7iE14GH+14rX5/yqn7zqwsBZB1Ny2F4i5ee9ZmzCvNT70rqaA0BUDdTfhud57s92DpnW6xS2cIlXNBWQ48kXU3jdHdjuvJM51uv8ZaY4jyIlFA3N0kw+9KTjgtCl5NFbxWSQFWoMN7A+9207s9uvRO10YnqZXemc1LAVaowVlyt0tqm93Dd2r1zF5zAgDtgMD/08I2/HSABeBztgFSFjv/KqQAn9mIx0LW3YafArMFvNgoIu0W+1FNAWgAyHpbOv4Ee1lJQHo54N+qpQBJgzvp7tN7ud/m5cDX+VqMH6cAWABIb499+IWOSVEEAgYuhd2geQGQvP/kanoK0bQIuMmBcC/2+/xxCm6yXijpDjAjAWCn/zvwE2RZy+hR0vF3/vv+/vZlvYAgBUABIDx/ZeP6S58b3+wrDbmORhl+TEC6A/DmPmYrAeSJyaXUBfIawT9HeQGA8NvqAI6sb7yKC+zglOda3AEMXe2bzQSWmxdV/G+jnC2QtnfbTQD5Ct9ys/FVX7kQDoECfssDQJoJbB4OfgX8k6wKQiZ8shknZjN84VWdjSIDu5wUQJIB2O0Aogg8qDCww3P+QgrkWZ4CYBGEqVBIwLaMAf8gG/OWvfnkWG40E5hFMRAwcCx+5WSUswPAM4Dn2XcAVlHByAXW651flACK+NGzb0kF0M4zYF5RZJqJQEDA4vCW+8oJ7AThY/4bccTN2jNQcSYQi0DIwOJV9AL/5ZWMuQuHINjfaz18KgJzvhFGLrBYrFaH3dEH73wcPmXvXNAUwOojcFFlFMbANiYgwDn6POwCO7zKn3mQHAJ7sgVSD3BBNsxjYBUxMIkwf4rvHCwWuVUAxvpCgJAKxPvAVmRAWP9V2ZR7H+DDXqEkGcQqwDufJWMQ9CIM1sF7s/7yvulsI1jFPhCkveEDF/yRi2z98UUYqYI4Tm8I8OAMHVeBVAdTJ6DvHGQCGKcAvVx/R9Y3HbtAGgSUgdVK8s4JcoC+bIESF5hnG0EUBDwKVgJ82gmAdgCvP8tPS6PJiQgysOCDX3DUfy12gggXYT0kIPsEFWZgsVrhkWf8zEOAf0oe++qTCzAig/GDAoSBhTD7ifD35CKkuCwWpQJZLpAwkFKAJp7pMyfZQzcaHrzr0gVgEEQMxE4QUrDG8964E7ZHZcASH5hKGIg5WMPB1wf0zAmsAnl9W381BjgHZNIfdcJ5rrZ3frqJgfREAIQwYCCkgHOQzf1uUCfsVOMX4TpWgcwFIh8IKYiSwoiEBzzrP5bg7yV6J+3bJdlAyAD3goQEOPkKBgFcA8+cdLkXTqeAgmjebwMMjvrP55JeMMfpNQMeYiDxgoiFJXnpIFv+O8GfEpDoQErBeAnBi89ceF7/DoFyBpiMAk5CMusP4Rt95aErF4hz4oyChITZDA98kymYPsOnO0EqhTEF4cQfAJ8N++NR734zkAwtJXMNmAI+9ognvqH79z0C4E6QSaHLJ/3m/w0FoO585RgG+R97LkBUiNBQYEHyPFrmH6gAAABgrz811rRGtgAAAABJRU5ErkJggg=='),
              n.classList.add('tpa-inner-clicker'),
              (n.style.zIndex = ''.concat(e + 1)),
              (n.style.position = 2 === t.coordinate ? 'fixed' : 'absolute');
            var i = document.body || document.documentElement;
            i.appendChild(n);
            var a,
              s,
              u = new _a(i, {
                target: n,
                container: i,
                draggable: !0,
                resizable: !1,
                scalable: !1,
                rotatable: !1,
                warpable: !1,
                pinchable: !1,
                origin: !1,
                keepRatio: !0,
                edge: !1,
                throttleDrag: 0,
                throttleResize: 0,
                throttleScale: 0,
                throttleRotate: 0,
              }),
              c =
                ((a = o),
                (s = _c.getMessage('option_tooltip_content')),
                Ic('#'.concat(a), {
                  content:
                    "\n<div class='tpa-tooltip-content-root tpa-tooltip-content-root-drag'>\n    <strong>".concat(
                      s,
                      '</strong>     \n</div>\n    '
                    ),
                  allowHTML: !0,
                  trigger: 'manual',
                  delay: 0,
                  sticky: !0,
                  plugins: [kc],
                  zIndex: 99999,
                })[0]),
              l = (function (t, e, n) {
                var r = n.zIndex,
                  o = void 0 === r ? 9e4 : r,
                  i = 'op-'.concat(t),
                  a = !1,
                  s = Ic('#'.concat(t), {
                    content:
                      '\n      <div class="tpa-tooltip-content-root tpa-tooltip-content-root-options">\n        <div class="tpa-tooltip-options-container">\n          <input class="el-tgl el-tgl-ios" id="'
                        .concat(
                          i,
                          '" type="checkbox" />\n          <label class="el-tgl-btn" for="'
                        )
                        .concat(i, '" />\n        </div>\n      </div>\n    '),
                    allowHTML: !0,
                    trigger: 'manual',
                    sticky: !0,
                    hideOnClick: !1,
                    plugins: [kc],
                    interactive: !0,
                    onMount: function () {
                      if (!0 !== a) {
                        a = !0;
                        var t = document.getElementById(i);
                        null != t &&
                          ((t.checked = !1),
                          t.addEventListener('click', function (t) {
                            !0 === t.currentTarget.checked
                              ? e.start()
                              : e.stop();
                          }));
                      }
                    },
                    zIndex: o,
                  })[0];
                return (
                  (s.setChecked = function (t) {
                    var e = document.getElementById(i);
                    null != e && (e.checked = t);
                  }),
                  s
                );
              })(o, u, {
                zIndex: e + 2 - 1e4,
              });
            (u.dragTooltip = c), (u.optionsTooltip = l);
            var f = null,
              p = null;
            l.show(),
              u
                .on('drag', function (t) {
                  if (!h) {
                    var e = t.target,
                      n = t.transform;
                    e.style.transform = n;
                  }
                })
                .on('click', function () {
                  if ((c.hide(), !0 === l.state.isMounted)) {
                    if (null != h) return;
                    clearTimeout(p), l.hide();
                  } else
                    p = setTimeout(function () {
                      l.show();
                    }, 450);
                })
                .on('dragStart', function (t) {
                  null != t.inputEvent &&
                    (h ||
                      setTimeout(function () {
                        clearTimeout(p),
                          l.hide(),
                          (f = setTimeout(function () {
                            c.show();
                          }, 250));
                      }, 200));
                })
                .on('dragEnd', function (t) {
                  null != t.inputEvent &&
                    (h ||
                      setTimeout(function () {
                        clearTimeout(f),
                          c.hide(),
                          (p = setTimeout(function () {
                            l.show();
                          }, 450));
                      }, 300));
                });
            var d = n.getBoundingClientRect();
            !(function () {
              for (
                var t = 0.5 * (innerWidth - d.width) + 0.5 * d.width,
                  e = 0.5 * (innerHeight - d.height) + 0.5 * d.height;
                ;

              ) {
                var n = document
                  .elementsFromPoint(t + 0.5 * d.width, e + 2)
                  .filter(function (t) {
                    return (t.id || '').startsWith(zc);
                  });
                if (0 === n.length) break;
                e += 100;
              }
              u.request(
                'draggable',
                {
                  x: pageXOffset + t,
                  y: pageYOffset + e,
                },
                !0
              );
            })(),
              (u.id = o),
              (u.remove = function () {
                c.unmount(),
                  c.destroy(),
                  l.unmount(),
                  l.destroy(),
                  u.destroy(),
                  n.remove();
              });
            var h = null,
              v = null,
              g = 0;
            return (
              (u.toggle = function () {
                null == h ? u.start() : u.stop();
              }),
              (u.start = function () {
                if (!h) {
                  var e = t.frequency,
                    r = t.condition,
                    o = t.conditionValue,
                    i = 1e3 / (e = Math.max(e, 0.01));
                  'time' === r &&
                    (v = setTimeout(function () {
                      u.stop();
                    }, 1e3 * o)),
                    u.click(),
                    (g = 1),
                    (n.style.animationDuration = ''.concat(i, 'ms')),
                    (h = setInterval(function () {
                      'count' === r && g >= o
                        ? u.stop()
                        : (u.click(), (g += 1));
                    }, i)),
                    l.setChecked(!0);
                }
              }),
              (u.stop = function () {
                null != h &&
                  (null != v && (clearTimeout(v), (v = null)),
                  clearInterval(h),
                  (h = null),
                  l.setChecked(!1));
              }),
              (u.click = function () {
                for (
                  var t = n.getBoundingClientRect(),
                    r = t.x,
                    o = t.y,
                    i = t.width,
                    a = t.height,
                    s = r + 0.27 * i,
                    u = o + 0.235 * a,
                    c = document.elementsFromPoint(s, u),
                    l = null,
                    f = 0;
                  f < c.length;
                  f += 1
                ) {
                  var p = c[f];
                  if (n !== p && p.className !== Nc) {
                    l = p;
                    break;
                  }
                }
                if (null != l) {
                  var d = Fc(50, !1, Gc);
                  setTimeout(function () {
                    d({
                      clicker: n,
                      zIndex: e,
                    });
                    l.dispatchEvent(
                      new MouseEvent('click', {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: s,
                        clientY: u,
                        screenX: s,
                        screenY: u,
                        view: window,
                      })
                    );
                  }, 0);
                }
              }),
              u
            );
          },
          qc = function (t) {
            var e = document.getElementsByTagName('head')[0] || document.body;
            document.documentElement;
            var n = document.createElement('style');
            (n.innerHTML = t), e.appendChild(n);
          };
        var Hc = function (t) {
          return Ic('#'.concat(t), {
            content:
              '\n<div class=\'tpa-tooltip-content-root tpa-tooltip-content-root-arrow\'>\n    <svg viewBox="0 0 24 24" focusable="false" class="tpa-tooltip-content-root-arrow-icon">\n        <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />\n    </svg>\n</div>\n    ',
            allowHTML: !0,
            trigger: 'manual',
            hideOnClick: !0,
            placement: 'left',
            delay: 0,
            offset: [0, 0],
            sticky: !0,
            plugins: [kc],
            zIndex: 99999,
          })[0];
        };
        function Yc(t) {
          return (
            (Yc =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            Yc(t)
          );
        }
        function Vc() {
          Vc = function () {
            return t;
          };
          var t = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            r =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            s = o.toStringTag || '@@toStringTag';
          function u(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            u({}, '');
          } catch (t) {
            u = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function c(t, e, n, o) {
            var i = e && e.prototype instanceof p ? e : p,
              a = Object.create(i.prototype),
              s = new A(o || []);
            return (
              r(a, '_invoke', {
                value: w(t, n, s),
              }),
              a
            );
          }
          function l(t, e, n) {
            try {
              return {
                type: 'normal',
                arg: t.call(e, n),
              };
            } catch (t) {
              return {
                type: 'throw',
                arg: t,
              };
            }
          }
          t.wrap = c;
          var f = {};
          function p() {}
          function d() {}
          function h() {}
          var v = {};
          u(v, i, function () {
            return this;
          });
          var g = Object.getPrototypeOf,
            m = g && g(g(C([])));
          m && m !== e && n.call(m, i) && (v = m);
          var y = (h.prototype = p.prototype = Object.create(v));
          function b(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function x(t, e) {
            function o(r, i, a, s) {
              var u = l(t[r], t, i);
              if ('throw' !== u.type) {
                var c = u.arg,
                  f = c.value;
                return f && 'object' == Yc(f) && n.call(f, '__await')
                  ? e.resolve(f.__await).then(
                      function (t) {
                        o('next', t, a, s);
                      },
                      function (t) {
                        o('throw', t, a, s);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (c.value = t), a(c);
                      },
                      function (t) {
                        return o('throw', t, a, s);
                      }
                    );
              }
              s(u.arg);
            }
            var i;
            r(this, '_invoke', {
              value: function (t, n) {
                function r() {
                  return new e(function (e, r) {
                    o(t, n, e, r);
                  });
                }
                return (i = i ? i.then(r, r) : r());
              },
            });
          }
          function w(t, e, n) {
            var r = 'suspendedStart';
            return function (o, i) {
              if ('executing' === r)
                throw new Error('Generator is already running');
              if ('completed' === r) {
                if ('throw' === o) throw i;
                return M();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = E(a, n);
                  if (s) {
                    if (s === f) continue;
                    return s;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                r = 'executing';
                var u = l(t, e, n);
                if ('normal' === u.type) {
                  if (
                    ((r = n.done ? 'completed' : 'suspendedYield'), u.arg === f)
                  )
                    continue;
                  return {
                    value: u.arg,
                    done: n.done,
                  };
                }
                'throw' === u.type &&
                  ((r = 'completed'), (n.method = 'throw'), (n.arg = u.arg));
              }
            };
          }
          function E(t, e) {
            var n = e.method,
              r = t.iterator[n];
            if (void 0 === r)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  t.iterator.return &&
                  ((e.method = 'return'),
                  (e.arg = void 0),
                  E(t, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                f
              );
            var o = l(r, t.iterator, e.arg);
            if ('throw' === o.type)
              return (
                (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), f
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  'return' !== e.method &&
                    ((e.method = 'next'), (e.arg = void 0)),
                  (e.delegate = null),
                  f)
                : i
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                f);
          }
          function S(t) {
            var e = {
              tryLoc: t[0],
            };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function O(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function A(t) {
            (this.tryEntries = [
              {
                tryLoc: 'root',
              },
            ]),
              t.forEach(S, this),
              this.reset(!0);
          }
          function C(t) {
            if (t) {
              var e = t[i];
              if (e) return e.call(t);
              if ('function' == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1,
                  o = function e() {
                    for (; ++r < t.length; )
                      if (n.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (o.next = o);
              }
            }
            return {
              next: M,
            };
          }
          function M() {
            return {
              value: void 0,
              done: !0,
            };
          }
          return (
            (d.prototype = h),
            r(y, 'constructor', {
              value: h,
              configurable: !0,
            }),
            r(h, 'constructor', {
              value: d,
              configurable: !0,
            }),
            (d.displayName = u(h, s, 'GeneratorFunction')),
            (t.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return (
                !!e &&
                (e === d || 'GeneratorFunction' === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, h)
                  : ((t.__proto__ = h), u(t, s, 'GeneratorFunction')),
                (t.prototype = Object.create(y)),
                t
              );
            }),
            (t.awrap = function (t) {
              return {
                __await: t,
              };
            }),
            b(x.prototype),
            u(x.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = x),
            (t.async = function (e, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new x(c(e, n, r, o), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            b(y),
            u(y, s, 'Generator'),
            u(y, i, function () {
              return this;
            }),
            u(y, 'toString', function () {
              return '[object Generator]';
            }),
            (t.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (t.values = C),
            (A.prototype = {
              constructor: A,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = void 0),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function r(n, r) {
                  return (
                    (a.type = 'throw'),
                    (a.arg = t),
                    (e.next = n),
                    r && ((e.method = 'next'), (e.arg = void 0)),
                    !!r
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ('root' === i.tryLoc) return r('end');
                  if (i.tryLoc <= this.prev) {
                    var s = n.call(i, 'catchLoc'),
                      u = n.call(i, 'finallyLoc');
                    if (s && u) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          'try statement without catch or finally'
                        );
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, 'finallyLoc') &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ('break' === t || 'continue' === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = 'next'), (this.next = i.finallyLoc), f)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                  f
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), O(n), f;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ('throw' === r.type) {
                      var o = r.arg;
                      O(n);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  'next' === this.method && (this.arg = void 0),
                  f
                );
              },
            }),
            t
          );
        }
        function Xc(t, e, n, r, o, i, a) {
          try {
            var s = t[i](a),
              u = s.value;
          } catch (t) {
            return void n(t);
          }
          s.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        qc(t.Z), qc(e.Z);
        var Uc,
          Qc = window.browser;
        if (null != Qc) {
          var Jc = [];
          Qc.runtime.onMessage.addListener(function (t, e, n) {
            var r = t.action,
              o = t.data,
              i = void 0 === o ? {} : o,
              a = e.tab;
            return (
              (function (t) {
                return function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var i = t.apply(e, n);
                    function a(t) {
                      Xc(i, r, o, a, s, 'next', t);
                    }
                    function s(t) {
                      Xc(i, r, o, a, s, 'throw', t);
                    }
                    a(void 0);
                  });
                };
              })(
                Vc().mark(function t() {
                  var e, o, s;
                  return Vc().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (null == a)
                            if ('TAB_ACTION_CREATE_CLICKER' === r)
                              (e = Wc(i)), Jc.push(e), n(!0);
                            else if ('TAB_ACTION_STOP_TAB_ALL_CLICKERS' === r) {
                              for (o = 0, s = Jc; o < s.length; o++)
                                s[o].stop();
                              n(!0);
                            } else
                              'TAB_ACTION_NUMBER_OF_CLICKERS' === r &&
                                n(Jc.length);
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )(),
              !0
            );
          });
        }

        (Uc = Wc({
          frequency: '60',
          coordinate: 1,
          condition: 'count',
          conditionValue: 1e4,
        })),
          setTimeout(function () {
            var t = Hc(Uc.optionsTooltip.popper.id),
              e = Hc(Uc.id);
            (Uc.arrowTooltip = t),
              (Uc.clickerArrowTooltip = e),
              t.show(),
              e.show(),
              Uc.dragTooltip.show();
            var n = setTimeout(function () {
                e.hide(), Uc.dragTooltip.hide();
              }, 3e3),
              r = document.getElementById('op-'.concat(Uc.id)),
              o = null;
            r &&
              (o = setTimeout(function () {
                !1 === r.checked &&
                  t &&
                  !0 === t.state.isVisible &&
                  (t.hide(), r.click());
              }, 6e3)),
              Uc.on('dragStart', function () {
                clearTimeout(n), o && clearTimeout(o), t.hide(), e.hide();
              });
          }, 0);
      })(),
      r
    );
  })()
);
