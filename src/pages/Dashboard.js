const Dashboard = ()=>{
  return(
    <div className="content-body">
      <h2 className="font-weight-bold ml-3">Dashboard</h2>
      <section className="row p-3 activity-wrapper mx-auto">
        <div className="col-md-8">
          <h5 className="font-weight-bold">Sales Activity</h5>
          <div className="row">
          <div className="col-md-2 activity-card">
            <h4 className="font-weight-bold">0</h4>
            <p>QTY</p>
            <p>TO BE PACKED</p>
          </div>
          <div className="col-md-2 activity-card">
            <h4 className="font-weight-bold">0</h4>
            <p>QTY</p>
            <p>TO BE PACKED</p>
          </div>
          <div className="col-md-2 activity-card">
            <h4 className="font-weight-bold">0</h4>
            <p>QTY</p>
            <p>TO BE PACKED</p>
          </div>
          <div className="col-md-2 activity-card">
            <h4 className="font-weight-bold">0</h4>
            <p>QTY</p>
            <p>TO BE PACKED</p>
          </div>
          </div>
        </div>
        <div className="col-md-4">
        <h5 className="font-weight-bold">Inventory Summary</h5>
        <div className="p-1 d-flex justify-content-between align-item-center inventory-summary">
          <p>QUANTITY IN HAND</p>
          <h3 className="font-weight-bold">0</h3>
        </div>
        <div className="p-1 d-flex justify-content-between align-item-center inventory-summary">
          <p>QUANTITY IN HAND</p>
          <h3 className="font-weight-bold">0</h3>
        </div>
        </div>

      </section>

    </div>
  )
}

export default Dashboard;