const demo = () =>
    import('../view/demo/Demo');
const claimedOrderExamine = () =>
    import('../view/claimedOrder/ClaimedOrderExamine');

export default [
    {
        path: '/demo',
        component: demo
    },{
        path: '/claimedOrderExamine',
        component: claimedOrderExamine
    }
]