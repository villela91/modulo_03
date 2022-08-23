export class Service{
    constructor(createUseCase, updateUseCase, findAllUseCase, findByUseCase,deleteByIdUseCase)

{
    this.createUseCase = createUseCase;
    this.updateUseCase = updateUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findByUseCase = findByUseCase;
    this.deleteByIdUseCase = deleteByIdUseCase;
}
async create(data){
return await this.createUseCase.execute(data);
}
async update(data, id){
    return await this.updateUseCase.execute(data,id);

}
async delete(id){
    return await this.deleteByIdUseCase.execute(id);
}
async FindById(id){
    return await this.findByUseCase.execute(id);
}
async findAll(){
    return await this.findAllUseCase.execute();
}
}