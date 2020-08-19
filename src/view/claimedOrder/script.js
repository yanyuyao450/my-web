import {claimedOrderService} from "@/service";

export default {
    name: 'ClaimedOrder',
    data() {
        return {
            searchCondition: {
                orderId: '',
                source: '',
                examineStatus: '',
                claimedReason: '',
                date: []
            },
            sources: [
                {name: '1T', value:'1T'},
                {name: '1E', value:'1E'},
                {name: '1A', value:'1A'},
                {name: '1G', value:'1G'},
                {name: '1S', value:'1S'}
            ],
            examineStatus: [
                {name: '待核实', value:'0'},
                {name: '已解决', value:'1'},
                {name: '未解决', value:'2'}
            ],
            claimedReasons: [
                {name: 'note问题', value:'1'},
                {name: '更新问题', value:'2'},
                {name: '退税规则问题', value:'3'},
                {name: '兜底赔付', value:'4'},
                {name: '上游数据源错误', value:'5'},
                {name: '换资源', value:'6'},
                {name: '运价不一致', value:'7'},
                {name: '其他', value:'8'}
            ],
            dataList: [
                {
                    resource: '1T',
                    orderId: 'ITOEAW200515VGBZ3636',
                    claimedReason: 'Note解析',
                    claimedAmount: '200',
                    pushTime: '2020-04-01',
                    status: '1',
                }
            ]
        }
    },
    methods: {
        async query() {
            await claimedOrderService.query();
        },
        async create() {
            await claimedOrderService.create({});
        },
        async modify(row) {
            await claimedOrderService.modify({id: row.id});
        },
        async delete() {
            await claimedOrderService.delete({});
        },
    }
}