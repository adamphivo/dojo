import assert from 'assert';
import { humanReadable } from './humandReadableTime';

describe('HumanReadableTime test suite', function () {
  it('Should format the time correctly', function () {
    assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)');
    assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)');
    assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
    assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});
