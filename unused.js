Checkit.Validators.unused = function (val, table, column, knex) {
  return knex(table)
  .where(column, val.toLowerCase())
  .then(function (result) {
    if (result.length > 0) {
      throw new Error('That ' + column + ' is already in use.');
    }
  });
};
