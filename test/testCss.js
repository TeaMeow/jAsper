'use strict';

describe('getCss', function () {
    var css = jA('.a').css('display');

    it('Should display as block', function () {
        expect(css).toBe('block');
    });
});

describe('setCss', function () {
    jA('.a').css('display', 'inline-block');

    var css = jA('.a').css('display');

    it('Should display as inline block', function () {
        expect(css).toBe('inline-block');
    });
});

describe('setMultipleCss', function () {
    jA('.a').css({
        display: 'none',
        width: '1px'
    });

    var display = jA('.a').css('display'),
        width = jA('.a').css('width');

    it('Should display as none and only 1px wide', function () {
        expect(display).toBe('none');
        expect(width).toBe('1px');
    });
});

describe('getMultipleCss', function () {
    jA('.a').css(['display', 'width']);

    var css = jA('.a').css(['display', 'width']);

    it('Should get the style object', function () {
        expect(css).toEqual({ display: 'none', width: '1px' });
    });
});

describe('hasClass', function () {
    var bool = jA('.a').hasClass('a'),
        bool2 = jA('.a').hasClass('a b');

    it('Should has a class', function () {
        expect(bool).toBe(true);
    });

    it('Should has a class but b', function () {
        expect(bool2).toBe(false);
    });
});

describe('classList', function () {
    var list = jA('.a').classList();

    it('Should get the class list', function () {
        expect(list).toEqual(['a']);
    });
});

describe('addClass', function () {
    jA('.a').addClass('aa');

    var bool = jA('.a').hasClass('aa');

    it('Should add the class', function () {
        expect(bool).toBe(true);
    });

    jA('.a').addClass('aaa aaaa');

    var bool2 = jA('.a').hasClass('aa aaa aaaa');

    it('Should add multiple class', function () {
        expect(bool2).toBe(true);
    });
});