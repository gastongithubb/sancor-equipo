import { useState, useEffect } from 'preact/hooks';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  Card, CardContent, CardHeader, CardTitle, 
  Button, Input, 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from './ui/ComponentsUi';

interface Metrics {
  pec: number;
  npsObj: number;
  months: string[];
  responses: number[];
  nps: number[];
  csat: number[];
  rd: number[];
}

type MetricKey = keyof Pick<Metrics, 'responses' | 'nps' | 'csat' | 'rd'>;

interface DarkMetricsDashboardProps {
  initialMetrics?: Partial<Metrics>;
}

const monthsNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Definimos componentes con tipos más específicos para Preact
const PreactResponsiveContainer = ResponsiveContainer as any;
const PreactLineChart = LineChart as any;
const PreactXAxis = XAxis as any;
const PreactYAxis = YAxis as any;
const PreactTooltip = Tooltip as any;
const PreactLegend = Legend as any;
const PreactLine = Line as any;

const DarkMetricsDashboard = ({ initialMetrics = {} }: DarkMetricsDashboardProps) => {
  const [metrics, setMetrics] = useState<Metrics>(() => {
    const defaultMetrics: Metrics = {
      pec: 80,
      npsObj: 20,
      months: ['Marzo', 'Abril', 'Mayo'],
      responses: [422, 396, 460],
      nps: [5, 4, 15],
      csat: [68, 69, 75],
      rd: [68, 68, 71],
    };
    return { ...defaultMetrics, ...initialMetrics };
  });

  useEffect(() => {
    const storedMetrics = localStorage.getItem('metrics');
    if (storedMetrics) {
      setMetrics(JSON.parse(storedMetrics));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('metrics', JSON.stringify(metrics));
  }, [metrics]);

  const handleMetricChange = (metric: keyof Metrics, value: string, index?: number) => {
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
      const newMetrics = { ...prevMetrics };
      (['months', 'responses', 'nps', 'csat', 'rd'] as const).forEach(key => {
        newMetrics[key] = newMetrics[key].filter((_, index) => index !== indexToRemove) as any;
      });
      return newMetrics;
    });
  };

  const chartData = metrics.months.map((month, index) => ({
    name: month,
    nps: metrics.nps[index],
    responses: metrics.responses[index],
    csat: metrics.csat[index],
    rd: metrics.rd[index]
  }));

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-white">Metricas Trimestrales</h1>
              <p className="text-teal-400">
                PEC (calidad) Obj.:
                <Input
                  type="number"
                  value={metrics.pec}
                  onChange={(e) => handleMetricChange('pec', (e.target as HTMLInputElement).value)}
                  className="w-16 ml-2 bg-transparent border-b border-teal-400"
                />%
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-4xl font-bold text-white">
                NPS Obj.:
                <Input
                  type="number"
                  value={metrics.npsObj}
                  onChange={(e) => handleMetricChange('npsObj', (e.target as HTMLInputElement).value)}
                  className="w-20 ml-2 bg-transparent border-b border-teal-400"
                />%
              </h2>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 mb-6">
          <PreactResponsiveContainer width="100%" height="100%">
            <PreactLineChart data={chartData}>
              <PreactXAxis dataKey="name" stroke="#ffffff" />
              <PreactYAxis stroke="#ffffff" />
              <PreactTooltip />
              <PreactLegend />
              <PreactLine type="monotone" dataKey="nps" stroke="#4fd1c5" strokeWidth={2} />
              <PreactLine type="monotone" dataKey="responses" stroke="#8884d8" strokeWidth={2} />
              <PreactLine type="monotone" dataKey="csat" stroke="#82ca9d" strokeWidth={2} />
              <PreactLine type="monotone" dataKey="rd" stroke="#ffc658" strokeWidth={2} />
            </PreactLineChart>
          </PreactResponsiveContainer>
        </div>

        <Button onClick={addMonth} className="mb-4">
          Añadir Mes
        </Button>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Métricas</TableHead>
              {metrics.months.map((month, index) => (
                <TableHead key={index}>
                  <div className="flex justify-between items-center">
                    {month}
                    <Button onClick={() => removeMonth(index)} variant="ghost" className="text-red-500 p-1">
                      ✕
                    </Button>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {(['responses', 'nps', 'csat', 'rd'] as const).map(metric => (
              <TableRow key={metric}>
                <TableCell className="font-medium text-teal-400">
                  {metric === 'responses' ? 'Q de respuestas' : metric.toUpperCase()}
                </TableCell>
                {metrics[metric].map((value, index) => (
                  <TableCell key={index}>
                    <Input
                      type="number"
                      value={value}
                      onChange={(e) => handleMetricChange(metric, (e.target as HTMLInputElement).value, index)}
                      className="w-full bg-transparent"
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DarkMetricsDashboard;