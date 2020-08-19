<template>
    <div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="24">
                        <el-page-header content="退改错误订单审核"></el-page-header>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <!--查询条件-->
                <el-row>
                    <el-form :inline="true" :model="searchCondition">
                        <el-form-item label="订单号:">
                            <el-input v-model="searchCondition.orderId" placeholder="订单号"></el-input>
                        </el-form-item>
                        <el-form-item label="渠道:">
                            <el-select v-model="searchCondition.source" placeholder="不限">
                                <el-option v-for="item in sources" :key="item.value" :label="item.name"
                                           :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="审核状态:">
                            <el-select v-model="searchCondition.examineStatus" placeholder="不限">
                                <el-option v-for="item in examineStatus" :key="item.value" :label="item.name"
                                           :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="错误原因:">
                            <el-select v-model="searchCondition.claimedReason" placeholder="不限">
                                <el-option v-for="item in claimedReasons" :key="item.value" :label="item.name"
                                           :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="启止日期:">
                            <div class="block">
                                <el-date-picker
                                        v-model="searchCondition.date"
                                        type="daterange"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </el-form-item>
                    </el-form>
                </el-row>
                <el-row>
                    <el-col :span="4" :offset="20">
                        <el-button type="primary" @click="query">查询</el-button>
                    </el-col>
                </el-row>
                <br/>
                <!--表格-->
                <el-row>
                    <el-table
                            :data="dataList"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="resource"
                                label="渠道">
                        </el-table-column>
                        <el-table-column
                                prop="orderId"
                                label="订单号">
                        </el-table-column>
                        <el-table-column
                                prop="claimedReason"
                                label="错误类型">
                        </el-table-column>
                        <el-table-column
                                prop="claimedAmount"
                                label="赔付金额">
                        </el-table-column>
                        <el-table-column
                                prop="pushTime"
                                label="推送时间">
                        </el-table-column>
                        <el-table-column
                                label="状态">
                            <template slot-scope="scope">
                                <el-tag v-if="scope.row.status==='1'" type="danger">待核实</el-tag>
                                <el-tag v-if="scope.row.status==='2'" type="success">已解决</el-tag>
                                <el-tag v-if="scope.row.status==='0'" type="warning">未解决</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作项">
                            <template slot-scope="scope">
                                <el-button type="info" size="small">查看</el-button>
                                <el-button type="warning" size="small" @click="modify(scope.row)">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                <br/>
                <!-- TODO 分页-->
                <el-row>
                    <div class="block">
                        <el-pagination
                                layout="prev, pager, next"
                                :total="50">
                        </el-pagination>
                    </div>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script src='./script.js'></script>
<style src='./style.css' scoped></style>