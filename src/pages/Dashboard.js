const Dashboard = ()=>{
  return(
    <div className="content-body">
      <h2 className="font-weight-bold">Dashboard</h2>
      <section className="row p-2 activity-wrapper mx-auto mt-1">
        <div className="col-md-8">
          <h5 className="font-weight-bold">Sales Activity</h5>
          <div className="row">
          <div className="col activity-card">
            <h4 className="font-weight-bold">0</h4>
            <p>QTY</p>
            <p>TO BE PACKED</p>
          </div>
          <div className="col activity-card">
            <h4 className="font-weight-bold">0</h4>
            <p>QTY</p>
            <p>TO BE PACKED</p>
          </div>
          <div className="col activity-card">
            <h4 className="font-weight-bold">0</h4>
            <p>QTY</p>
            <p>TO BE PACKED</p>
          </div>
          <div className="col activity-card">
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

      <div className="row mt-1">
        <div className="col product-card border p-2 m-1">
          <h4 className="font-weight-bold">Product Details</h4>
          <hr/>
          <section className="row">
          <div className="product-stat col-md-7 p-2">
          <div className="item d-flex justify-content-between">
            <p>Low stock items</p>
            <p>0</p>
          </div>
          <div className="item d-flex justify-content-between ">
            <p>All group items</p>
            <p>0</p>
          </div>
          <div className="item d-flex justify-content-between ">
            <p>All items</p>
            <p>0</p>
          </div>
          </div>
          <div className="col-md-5">
          <p className="text-center">Active Items</p>
          <div class="progress mx-auto">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div class="number">
                  <p>0%</p>

                </div>
              </div>
          </div>
          </section>
        
        </div>
        <div className="col product-card border m-1 p-2">
        <div className="d-flex justify-content-between product-title">
        <h4 className="font-weight-bold">Top Selling Items</h4>
        <h4 className="font-weight-bold">This month</h4>
         
        </div>
        <hr/>
        <div className="d-flex justify-content-center align-items-center">
          <p>No item were invoiced in this time frame</p>
        </div>
        </div>
      </div>


    
    </div>
  )
}

export default Dashboard;