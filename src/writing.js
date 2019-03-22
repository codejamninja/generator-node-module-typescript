export default async function writing(yo) {
  yo.fs.copyTpl(
    yo.templatePath('template/shared/src/**'),
    yo.destinationPath('src'),
    yo.context
  );
  if (yo.context.bin) {
    yo.fs.copy(
      yo.templatePath('template/shared/bin'),
      yo.destinationPath('bin')
    );
  }
  if (!yo.context.lock) {
    yo.fs.copy(
      yo.templatePath('template/shared/_npmrc'),
      yo.destinationPath('.npmrc')
    );
  }
  yo.fs.copy(
    yo.templatePath('template/shared/_eslintrc'),
    yo.destinationPath('.eslintrc')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_babelrc'),
    yo.destinationPath('.babelrc')
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/_gitignore'),
    yo.destinationPath('.gitignore'),
    yo.context
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/_package.json'),
    yo.destinationPath('package.json'),
    yo.context
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_prettierrc'),
    yo.destinationPath('.prettierrc')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/tsconfig.json'),
    yo.destinationPath('tsconfig.json')
  );
}
