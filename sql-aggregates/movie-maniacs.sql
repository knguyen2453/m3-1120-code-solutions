select "firstName",
"lastName",
sum("payments"."amount")
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "sum" desc;
