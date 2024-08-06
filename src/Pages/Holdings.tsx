import { useEffect, useState } from "react";
import { holdingsApi } from "../APIs/holdings";

interface Company {
  name: string;
  total_holdings: number;
  total_current_value_usd: number;
  total_entry_value_usd: number;
}

interface HoldingsData {
  companies: Company[];
}

function Holdings() {
  // Utiliser l'interface pour typer l'état holdings
  const [holdings, setHoldings] = useState<HoldingsData | null>(null);

  useEffect(() => {
    const apiKey: string = import.meta.env.VITE_API_KEY;
    const fetchHoldings = async () => {
      const data: HoldingsData = await holdingsApi(apiKey);
      console.log(data);
      setHoldings(data);
    };
    fetchHoldings();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Holdings</h1>
      <table className="table-auto border-collapse border border-gray-200 text-center">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Société</th>
            <th className="border border-gray-300 px-4 py-2">Bitcoins détenus</th>
            <th className="border border-gray-300 px-4 py-2">Valeur actuelle</th>
            <th className="border border-gray-300 px-4 py-2">Coût d'achat</th>
            <th className="border border-gray-300 px-4 py-2">Plus ou moins value</th>
          </tr>
        </thead>
        <tbody>
        {holdings && holdings.companies && holdings.companies.length > 0 ? (
            holdings.companies.map((company, index) => {
              const difference = company.total_current_value_usd - company.total_entry_value_usd;
              const entryValue = company.total_entry_value_usd <= 0 ? "-" : `${company.total_entry_value_usd.toLocaleString()} $`;
              return (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{company.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{company.total_holdings.toLocaleString()}</td>
                  <td className="border border-gray-300 px-4 py-2">{company.total_current_value_usd.toLocaleString()} $</td>
                  <td className="border border-gray-300 px-4 py-2">{entryValue}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      difference < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {entryValue === "-" ? "-" : `${difference.toLocaleString()} $`}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">Aucune donnée disponible</td>
            </tr>
          )}
          </tbody>
      </table>
    </div>
  );
}
  
export default Holdings;