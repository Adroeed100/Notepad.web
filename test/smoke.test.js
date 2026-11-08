const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('files directory exists', () => {
  const notesDir = path.join(__dirname, '..', 'files');
  assert.equal(fs.existsSync(notesDir), true);
});
