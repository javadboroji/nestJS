export class BaseService<TModle> {
    constructor(
        private readonly prismaModel: TModle & {
            findMany: Function;
            findUnique: Function;
            create: Function;
            update: Function;
            delete: Function;
        }
    ) { }

    findAll(args = {}) {
        return this.prismaModel.findMany(args);
    }

    findOne(args: any) {
        return this.prismaModel.findUnique(args);
    }

    create(data: any) {
        return this.prismaModel.create({ data });
    }

    update(args: any) {
        return this.prismaModel.update(args);
    }

    delete(args: any) {
        return this.prismaModel.delete(args);
    }
}