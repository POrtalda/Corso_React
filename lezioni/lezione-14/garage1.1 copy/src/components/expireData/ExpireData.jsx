import './ExpireData.css'
import { FaCarCrash, FaMoneyBillWave, FaTools, FaClipboardCheck } from 'react-icons/fa'

export default function ExpireData({ expiring }) {
  let insuranceDay = convertFromDateTodayInDays(expiring.insurance)
  let roadTaxDay = convertFromDateTodayInDays(expiring.roadTax)
  let serviceDay = convertFromDateTodayInDays(expiring.service)
  let inspectionDay = convertFromDateTodayInDays(expiring.inspection)

  function convertFromDateTodayInDays(fromDate) {
    return Math.ceil((fromDate - new Date()) / (1000 * 60 * 60 * 24))
  }

  return (
    <div className='expiring'>
      <div className='insurance'>
        <h5><FaCarCrash className="icon" /> Assicurazione</h5>
        <p>{expiring.insurance.toLocaleDateString()}</p>
        <div className={
          insuranceDay < 0 ? 'alert alert-black' :
            insuranceDay < 30 ? 'alert alert-red' :
              insuranceDay < 90 ? 'alert alert-orange' :
                'alert alert-green'}>
          <p>{insuranceDay}</p>
          <p>gg</p>
        </div>
      </div>

      <div className='road-tax'>
        <h5><FaMoneyBillWave className="icon" /> Bollo</h5>
        <p>{expiring.roadTax.toLocaleDateString()}</p>
        <div className={
          roadTaxDay < 0 ? 'alert alert-black' :
            roadTaxDay < 30 ? 'alert alert-red' :
              roadTaxDay < 90 ? 'alert alert-orange' :
                'alert alert-green'}>
          <p>{roadTaxDay}</p>
          <p>gg</p>
        </div>
      </div>

      <div className='service'>
        <h5><FaTools className="icon" /> Tagliando</h5>
        <p>{expiring.service.toLocaleDateString()}</p>
        <div className={
          serviceDay < 0 ? 'alert alert-black' :
            serviceDay < 30 ? 'alert alert-red' :
              serviceDay < 90 ? 'alert alert-orange' :
                'alert alert-green'}>
          <p>{serviceDay}</p>
          <p>gg</p>
        </div>
      </div>

      <div className='inspection'>
        <h5><FaClipboardCheck className="icon" /> Revisione</h5>
        <p>{expiring.inspection.toLocaleDateString()}</p>
        <div className={
          inspectionDay < 0 ? 'alert alert-black' :
            inspectionDay < 30 ? 'alert alert-red' :
              inspectionDay < 90 ? 'alert alert-orange' :
                'alert alert-green'}>
          <p>{inspectionDay}</p>
          <p>gg</p>
        </div>
      </div>
    </div>
  )
}
