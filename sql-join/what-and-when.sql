select "line1",
"district",
"cities"."name"
from "addresses"
join "cities" using ("cityId");
