!function(document, window, undefined) {
	var KRTCreateShortcut;

	KRTCreateShortcut = function(_configs) {
		var _self = this;
		this._input = document.querySelector(_configs.input),
		this._output = document.querySelector(_configs.output),
		this._button = document.querySelector(_configs.button);

		this._button.addEventListener('click', function(event) {
			event.preventDefault();
			_self._create();
		}, false);

		this._output.addEventListener('click', function(event) {
			this.focus();
			this.select();
		});

		return {};
	};

	KRTCreateShortcut._regrex = {
		"v": /return\sv\+'([^']+)'/
	};

	KRTCreateShortcut._template = (function() {/*
		(function(){var doc = document;var e = function (t, n, r, i, s){var o = [5621528, 2635055, 1411962, 4170650, 2001733, 3696802, 8305103, 5123912, 1266705, 5104140];var i = i || 0, u = 0, n = n || [], r = r || 0, s = s || 0;var a ={'a' : 97, 'b' : 98, 'c' : 99, 'd' : 100, 'e' : 101, 'f' : 102, 'g' : 103, 'h' : 104, 'i' : 105,'j' : 106, 'k' : 107, 'l' : 108, 'm' : 109, 'n' : 110, 'o' : 111, 'p' : 112, 'q' : 113, 'r' : 114,'s' : 115, 't' : 116, 'u' : 117, 'v' : 118, 'w' : 119, 'x' : 120, 'y' : 121, 'z' : 122, 'A' : 65,'B' : 66, 'C' : 67, 'D' : 68, 'E' : 69, 'F' : 70, 'G' : 71, 'H' : 72, 'I' : 73, 'J' : 74,'K' : 75, 'L' : 76, 'M' : 77, 'N' : 78, 'O' : 79, 'P' : 80, 'Q' : 81, 'R' : 82, 'S' : 83,'T' : 84, 'U' : 85, 'V' : 86, 'W' : 87, 'X' : 88, 'Y' : 89, 'Z' : 90, '0' : 48, '1' : 49,'2' : 50, '3' : 51, '4' : 52, '5' : 53, '6' : 54, '7' : 55, '8' : 56, '9' : 57, '\/' : 47,':' : 58, '?' : 63, '=' : 61, '-' : 45, '_' : 95, '&' : 38, '$' : 36, '!' : 33, '.' : 46};if (!s || s == 0) {t = o[0] + t}for (var f = 0; f < t.length; f++){var l = function (e, t){return a[e[t]] ? a[e[t]] : e.charCodeAt(t)}(t, f);if (!l * 1) {l = 3;}var c = l * (o[i] + l * o[u % o.length]);n[r] = (n[r] ? n[r] + c : c) + s + u;var p = c % (50 * 1);if (n[p]) {var d = n[r];n[r] = n[p];n[p] = d}u += c;r = r == 50 ? 0 : r + 1;i = i == o.length - 1 ? 0 : i + 1}if (s == 117){var v = '';for (var f = 0; f < n.length; f++) {v += String.fromCharCode(n[f] % (25 * 1) + 97)}o = function () {};return v + '<%v%>'}else {return e(u + '', n, r, i, s + 1);}};var elem = doc.getElementsByTagName('head')[0] || doc.documentElement;var loadScript = function (url, title) {var s = doc.createElement('script');s.type = 'text/javascript';s.src = 'https://getpocket.com/b/r4.js?h=' + e(url) + '&u=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(title);elem.appendChild(s);};(function() {var section = document.getElementById('section0_column0'),entries = section.querySelectorAll('div.u0Entry');for(var i = entries.length - 1; i >= 0; i--) {var item = entries[i],a = item.querySelector('a.title'),title = a.innerText || a.textContent,url = a.href;loadScript(url, title);item.querySelector('.condensedTools').querySelector('img[data-buryentryid]').click();}})();})();
	*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1].replace(/(^[\s\t]+)|([\s\t]+$)/g, '');

	KRTCreateShortcut._banner = '\
// ==UserScript==\n\
// @ShortcutManager\n\
// @name Add All Articles to Pocket on Feedly\n\
// @namespace 4cEyiXLEOEsH\n\
// @key Shift+a\n\
// @include http://cloud.feedly.com/*\n\
// ==/UserScript==\n\
';

	KRTCreateShortcut._convert = function(input) {
		var mat,
			cls = KRTCreateShortcut,
			res = cls._template;

		for(var key in cls._regrex) {
			mat = input.match(cls._regrex[key]);
			if (!mat) return null;
			res = res.replace('<%' + key + '%>', mat[1]);
		}

		return cls._banner + res;
	};

	KRTCreateShortcut._getVal = function(elem) {
		return elem.value || elem.textContent || elem.innerText;
	};

	KRTCreateShortcut._setVal = function(elem, val) {
		switch(elem.tagName) {
			case 'input':
			case 'textarea':
				elem.value = val;
				break;
			default:
				elem[elem.textContent ? 'textContent' : 'innerText'] = val;
				break;
		}
	};

	KRTCreateShortcut.prototype._create = function() {
		var cls = KRTCreateShortcut,
			input = cls._getVal(this._input),
			output = cls._convert(input);
		cls._setVal(this._output, output);
	};

	var configs = {
		"input": "#krtdemo_input",
		"output": "#krtdemo_output",
		"button": "#krtdemo_button"
	};

	window.addEventListener('load', function() {
		new KRTCreateShortcut( configs );
	}, false);

}(document, window);