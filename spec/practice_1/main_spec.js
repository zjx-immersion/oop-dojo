"use strict";

import TestMe from '../../main/practice_1'

describe("OO入门", function () {
    it("写一个类-1", function () {
        const testMe = new TestMe("zjx", "dev")
        expect(testMe.display()).toBe("i am zjx, a dev")
    });
});