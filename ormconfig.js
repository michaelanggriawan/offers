module.exports = {
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity.js'],
};
