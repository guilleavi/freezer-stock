import { pluralize, pluralizeToBe } from "utils/strings"

const ExpiringNextInfo = ({
  nextToExpireUnits,
  nextToExpireDate,
  name,
}: {
  nextToExpireUnits: number
  nextToExpireDate: Date
  name: string
}) => (
  <div>
    {nextToExpireUnits} {pluralize("Unit", nextToExpireUnits)} of {name}{" "}
    {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
    {/* TODO: calculate on days/months how long to expire */}
    {nextToExpireDate.toDateString()}
  </div>
)

export default ExpiringNextInfo
