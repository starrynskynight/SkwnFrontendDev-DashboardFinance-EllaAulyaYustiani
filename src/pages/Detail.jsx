import AccountFinanceHeader from "../components/AccountFinance";
import StatisticsChart from "../components/StatisticChart";
import ActivitySection from "../components/ActivitySection";
import SectionHeader from "../components/SectionHeader";

export default function Detail() {
  return (
    <>
      <AccountFinanceHeader />
      <StatisticsChart/>
      <SectionHeader 
        title="History"
        right={
          <select
        className="text-sm text-[#343C6A] bg-transparent border-none shadow-none focus:outline-none focus:ring-0 focus:shadow-none appearance-none"
      >
        <option>Category</option>
        <option>Deposit</option>
        <option>Withdraw</option>
      </select>
        }
      />
      <ActivitySection />
    </>
  );
}
