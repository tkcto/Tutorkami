import HomeModel from '@model/home';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class HomeService {
    private model: HomeModel;

    constructor(model: HomeModel) {
        this.model = model;
    }

    Index(): string {
        return this.model.Index();
    }
}

export default HomeService;
