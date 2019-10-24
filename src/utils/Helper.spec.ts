import { expect } from 'chai';
import { getMostFrequentWord, getTwoDecimalsFromNumber } from './Helper';

describe("Test getTwoDecimalsFromNumber()", () => {
    it('Should return all decimals of a float number with only two', () => {
        expect(getTwoDecimalsFromNumber(45.98)).to.be.equal(98);
    });
    it('Should return only two decimals of a float number with 3', () => {
        expect(getTwoDecimalsFromNumber(45.985)).to.be.equal(98);
    });
    it('Should return zero for a non float number', () => {
        expect(getTwoDecimalsFromNumber(45)).to.be.equal(0);
    });
});

describe("Test getMostFrequentWord()", () => {
    it('Should return dog because is repeated two times', () => {
        expect(
            getMostFrequentWord([
                "cat",
                "dog",
                "elephant",
                "dog",
                "giraffe"
            ])
        ).to.be.equal("dog");
    });
    it('Should return empty string on empty array', () => {
        expect(getMostFrequentWord([])).to.be.empty;
    });
});