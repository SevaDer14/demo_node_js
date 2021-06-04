const { expect, factory, pending } = require('../helpers')
const { Association, DataTypes } = require('sequelize')

describe('ModelName', () => {
  ArticleModel = factory.factories.Article.Model
  const { tableName, tableAttributes, associations } = ArticleModel

  beforeEach(async () => {
    subject = await factory.create('Article')
  });

  describe('Model', () => {
    it('is expected to have table name "Articles"', () => {
      expect(tableName).to.equal('Articles')
    });

    describe('is expected to have property:', () => {

      it('title:string', () => {
        expect(tableAttributes)
          .to.have.own.property('title')
          .that.has.property('type').to.be.instanceOf(DataTypes.STRING)
      });

      it('content:text', () => {
        expect(tableAttributes)
          .to.have.own.property('content')
          .that.has.property('type').to.be.instanceOf(DataTypes.TEXT)
      });

    });

    describe('is expected to have associations', () => {
      it('<AssociatedModel>:<AssociationType>', () => {
        // expect(associations)
        //   .to.have.own.property('<model_alias_or_name>')
        //   .to.be.instanceOf(Association.<AssociationType>)
        //   .that.has.property('foreignKey', '<field>')
        pending();
      });
    });
  });

  describe('Instance', () => {

    it('is expected to have a valid factory', () => {
      expect(subject).to.include({
        title: 'Moon is a lie',
        content: 'whatever whatever whatever whatever whatever whatever whatever whatever buy Bitcoin'
      })
    });

    describe('is expected to have properties', () => {
      it('title', () => {
        expect(subject)
          .to.have.property('title').to.be.a('string')
      });
      it('content', () => {
        expect(subject)
          .to.have.property('content').to.be.a('string')
      });
    });
    
    describe('is expected to have association accessors', () => {
      it('for the <AssociatedModel> association', () => {
        // expect(subject)
        //   .to.respondTo('get<AssociatedModel>')
        //   .and.respondTo('set<AssociatedModel>')
        //   .and.respondTo('create<AssociatedModel>')
        pending();

      });
    });
  });
});