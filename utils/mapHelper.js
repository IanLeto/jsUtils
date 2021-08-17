export class MapHelper {
    constructor(content) {
        this.content = new Map(Object.entries(content))
    }

    GetDefault(key, value) {
        let res = this.content.get(key)
        if (res === undefined) {
            return value;
        }
        return res
    }

    Get(key) {
        return this.content.get(key)
    }

    GetString(key) {
        return String(this.content.get(key))
    }

    GetNumber(key) {
        return Number(this.content.get(key))

    }

}

export function NewMapHelper(m) {
    return new MapHelper(m)
}

function Hello() {
    console.log('hello')
}

function jsonToMap(jsonString) {
    var jsonObject = JSON.parse(jsonString);
    var dataObject = jsonObject.data;
    var dataMap = new Map(Object.entries(dataObject));
    var resultMap = new Map();
    for (const key of dataMap.keys()) {
        console.log(key);
        var keyMap = new Map(Object.entries(dataMap.get(key)));
        resultMap.set(key, keyMap);
    }

    console.log("done!");
    return resultMap;
}


let dat = "{\"IP\":\"10.179.66.100\",\"ProjectName\":\"uhost\",\"ProductName\":\"rdma-sriov\",\"Region\":\"cn-bj2\",\"Version\":9,\"Config\":1,\"System\":17,\"Process\":2,\"Monitor\":0,\"VersionCount\":9,\"ConfigCount\":1,\"SystemCount\":17,\"ProcessCount\":2,\"MonitorCount\":0,\"Weight\":29,\"Time\":\"\",\"AllDetail\":[{\"Metric\":\"ohost_ovs_config\",\"MetricType\":102,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"7\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_system_cpu_version\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz|AMD EPYC 7542 32-Core Processor|Intel(R) Xeon(R) Gold 6248R CPU @ 3.00GHz\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_ovs_libvirt_process_active\",\"MetricType\":104,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"2\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_qemukvm_version\",\"MetricType\":101,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"24\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_network_connectx5_count\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"4\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_network_fw_version\",\"MetricType\":101,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"16.25.1020\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_network_driver_version\",\"MetricType\":101,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"4.5-1.0.1.0.19.ucloud|4.5-1.0.1.0.19\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_net2_vf\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"50\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_net0_net1_bond\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"3\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_system_version\",\"MetricType\":101,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"CentOS Linux release 7.4.1708 (Core)\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_system_kernel_version\",\"MetricType\":101,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"24\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_system_kernel_iommu\",\"MetricType\":103,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"intel_iommu=on iommu=pt|intel_iommu=on,iommu=pt\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_system_kernel_isolcpus\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"1\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_nic_link_detected\",\"MetricType\":103,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"3\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_ovs_upcall_limit_rate\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"500\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_ovs_version\",\"MetricType\":101,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"2.10.6\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_libvirt_version\",\"MetricType\":101,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"18\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_set_irq_affinity_version\",\"MetricType\":101,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"0.28\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_system_ksm_ksmtuned_active\",\"MetricType\":104,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"0\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_kvm_halt_poll_ns\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"0\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_mlx5_num_of_groups\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"127\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_nbd_version\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"C18C4297C28DFD5A98DBF5E|69F0F2847B171DE62259FCF|D69B216911D96E863697BC0|899584309A7353291CADF9C|816D8D4F620389197C6AADF\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_tsc_enable\",\"MetricType\":103,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"tsc\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_used_num_groups\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"64\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_numa_node_num\",\"MetricType\":103,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"2\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_pod_id\",\"MetricType\":101,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"3\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_gre_sys_gro\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"off\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_unet_agent_exist\",\"MetricType\":103,\"Priority\":\"high\",\"Status\":1,\"Value\":\"\",\"Standard\":\"5\",\"Time\":\"\",\"Count\":null},{\"Metric\":\"ohost_netcard_combined\",\"MetricType\":103,\"Priority\":\"info\",\"Status\":1,\"Value\":\"\",\"Standard\":\"12\",\"Time\":\"\",\"Count\":null}]}"
console.log(jsonToMap(dat).get("IP"))

// module.exports = NewMapHelper

