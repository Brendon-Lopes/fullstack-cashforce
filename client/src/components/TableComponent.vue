<script lang="ts">
import { ref, onMounted } from "vue";
import type { IOrder } from "@/interfaces/IOrder";
import { ordersApi } from "@/providers/api";
import { transformDate } from "@/utils/transformDate";
import { transformPrice } from "@/utils/transformPrice";

export default {
  name: "TableComponent",

  setup() {
    const tableData = ref<IOrder[]>([]);

    const getOrders = async () => {
      const response = await ordersApi.get("/");
      tableData.value = response.data;
    };

    onMounted(getOrders);

    return {
      tableData,
      transformDate,
      transformPrice,
    };
  },
};
</script>

<template>
  <div class="table-wrapper">
    <table>
      <tr>
        <th>NOTA FISCAL</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
      </tr>

      <tr class="row" v-for="order in tableData" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.buyer.name }}</td>
        <td>{{ order.provider.name }}</td>
        <td>{{ transformDate(order.emissionDate) }}</td>
        <td>{{ transformPrice(order.value) }}</td>
        <td>{{ order.orderStatusBuyer }}</td>
        <td>
          <div class="table-btn">Dados do cedente</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  overflow-x: auto;
}
table {
  margin: auto;
  width: calc(100% - 96px);
  text-align: left;
  border-spacing: 0 16px;
}
th {
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: #a1a8b8;
}
td,
th {
  padding: 6px 30px;
}
td:first-child {
  border-radius: 6px 0 0 6px;
  border-left: 1px solid var(--table-border-color);
}
td:last-child {
  border-radius: 0 6px 6px 0;
  border-right: 1px solid var(--table-border-color);
}
td {
  border-bottom: 1px solid var(--table-border-color);
  border-top: 1px solid var(--table-border-color);
  border-radius: 0;
  color: #4d5566;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
td:nth-child(5),
td:nth-child(6) {
  color: var(--base-green);
}
.table-btn {
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: var(--subtitle-color);
  padding: 8px 29px;
  border: 1px solid #cad3ff;
  border-radius: 24px;
  text-align: center;
}
.table-btn:hover {
  cursor: pointer;
  background-color: var(--base-green);
  color: whitesmoke;
  border: 1px solid white;
}
</style>
