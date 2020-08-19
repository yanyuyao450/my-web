import {demoService} from "@/service";

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data: {

    },
    methods: {
        async query() {
            await demoService.query({detailRequest: 'qqq'});
        },
        async create() {
            await demoService.create({});
        },
        async modify() {
            await demoService.modify({});
        },
        async delete() {
            await demoService.delete({});
        },
    }
}