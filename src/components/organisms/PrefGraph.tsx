import { VFC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { useRecoilValue } from 'recoil'
import { PrefCheckState } from '../../globalState/atoms/PrefCheckState'
import { PrimaryTitle } from '../atoms/PrimaryTitle'

export const PrefGraph: VFC = () => {
  const prefCheck = useRecoilValue(PrefCheckState)
  const graphData: Highcharts.SeriesOptionsType[] = []
  const yearData = []

  for (const pref of prefCheck) {
    const valueData: number[] = []
    for (const data of pref.data) {
      yearData.push(String(data.year))
      valueData.push(data.value)
    }
    graphData.push({
      type: 'line',
      name: pref.prefName,
      data: valueData,
    })
  }

  const options: Highcharts.Options = {
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: yearData,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      x: 0,
      verticalAlign: 'top',
      floating: true,
    },
    series: graphData.length === 0 ? [{ type: 'line', name: '都道府県名', data: [] }] : graphData,
  }

  return (
    <>
      <PrimaryTitle>人口推移グラフ</PrimaryTitle>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}
