import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

interface Metrics {
  pec: number;
  npsObj: number;
  months: string[];
  responses: number[];
  nps: number[];
  csat: number[];
  rd: number[];
}

type MetricKey = keyof Metrics;

interface DarkMetricsDashboardProps {
  initialMetrics?: Partial<Metrics>;
}

const monthsNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const DarkMetricsDashboard: React.FC<DarkMetricsDashboardProps> = ({ initialMetrics = {} }) => {
  const [metrics, setMetrics] = useState<Metrics>({
    pec: 80,
    npsObj: 20,
    months: ['Marzo', 'Abril', 'Mayo'],
    responses: [422, 396, 460],
    nps: [5, 4, 15],
    csat: [68, 69, 75],
    rd: [68, 68, 71],
    ...initialMetrics
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedMetrics = localStorage.getItem('metrics');
    if (storedMetrics) {
      setMetrics(JSON.parse(storedMetrics));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('metrics', JSON.stringify(metrics));
  }, [metrics]);

  const handleMetricChange = (metric: MetricKey, value: string, index?: number) => {
    setMetrics(prevMetrics => {
      const newMetrics = { ...prevMetrics };
      const numValue = parseFloat(value);
  
      if (index !== undefined && Array.isArray(newMetrics[metric])) {
        (newMetrics[metric] as number[])[index] = numValue;
      } else if (typeof newMetrics[metric] === 'number') {
        (newMetrics[metric] as number) = numValue;
      }
  
      return newMetrics;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, metric: MetricKey, index?: number) => {
    if (e.target.value) { // Verifica que e.target.value exista
      handleMetricChange(metric, e.target.value, index);
    }
  };

  const addMonth = () => {
    setMetrics(prevMetrics => {
      const nextMonthIndex = (monthsNames.indexOf(prevMetrics.months[prevMetrics.months.length - 1]) + 1) % 12;
      const newMonth = monthsNames[nextMonthIndex];

      return {
        ...prevMetrics,
        months: [...prevMetrics.months, newMonth],
        responses: [...prevMetrics.responses, 0],
        nps: [...prevMetrics.nps, 0],
        csat: [...prevMetrics.csat, 0],
        rd: [...prevMetrics.rd, 0],
      };
    });
  };

  const removeMonth = (indexToRemove: number) => {
    setMetrics(prevMetrics => {
      const newMonths = prevMetrics.months.filter((_, index) => index !== indexToRemove);
      const newResponses = prevMetrics.responses.filter((_, index) => index !== indexToRemove);
      const newNps = prevMetrics.nps.filter((_, index) => index !== indexToRemove);
      const newCsat = prevMetrics.csat.filter((_, index) => index !== indexToRemove);
      const newRd = prevMetrics.rd.filter((_, index) => index !== indexToRemove);

      return {
        ...prevMetrics,
        months: newMonths,
        responses: newResponses,
        nps: newNps,
        csat: newCsat,
        rd: newRd,
      };
    });
  };

  const chartData = {
    labels: metrics.months,
    datasets: [
      {
        label: 'NPS',
        data: metrics.nps,
        borderColor: '#4fd1c5',
        fill: false,
      },
      {
        label: 'Responses',
        data: metrics.responses,
        borderColor: '#8884d8',
        fill: false,
      },
      {
        label: 'CSAT',
        data: metrics.csat,
        borderColor: '#82ca9d',
        fill: false,
      },
      {
        label: 'RD',
        data: metrics.rd,
        borderColor: '#ffc658',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6 text-black bg-gray-900 rounded-lg shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold">Metricas Trimestrales</h1>
          <p className="text-teal-400">
            PEC (calidad) Obj.: 
            <input
              type="number"
              value={metrics.pec}
              onChange={(e) => handleMetricChange('pec', e.target.value)}
              className="w-16 ml-2 bg-transparent border-b border-teal-400 focus:outline-none"
            />%
          </p>
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-bold">NPS Obj.: 
            <input
              type="number"
              value={metrics.npsObj}
              onChange={(e) => handleMetricChange('npsObj', e.target.value)}
              className="w-20 ml-2 bg-transparent border-b border-teal-400 focus:outline-none"
            />%
          </h2>
        </div>
      </div>
      
      {isClient && (
        <div className="h-64 mb-6 chart-container">
          <Line data={chartData} />
        </div>
      )}

      <button onClick={addMonth} className="px-4 py-2 mb-4 text-black bg-teal-500 rounded">
        Añadir Mes
      </button>
      
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2">Métricas</th>
            {metrics.months.map((month, index) => (
              <th key={index} className="flex items-center justify-between py-2">
                {month}
                <button onClick={() => removeMonth(index)} className="ml-2 text-red-500">
                  ✕
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(['responses', 'nps', 'csat', 'rd'] as const).map(metric => (
            <tr key={metric} className="border-b border-gray-800">
              <td className="py-2 text-teal-400">{metric === 'responses' ? 'Q de respuestas' : metric.toUpperCase()}</td>
              {metrics[metric].map((value, index) => (
                <td key={index} className="py-2">
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => handleMetricChange(metric, e.target.value, index)}
                    className="w-full text-black bg-transparent focus:outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DarkMetricsDashboard;
