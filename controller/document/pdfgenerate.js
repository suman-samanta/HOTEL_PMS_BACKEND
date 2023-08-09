module.exports=()=>{

    


    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Document</title>
        <style>
            body{
                font-size: 17px;
                font-family: sans-serif;
                color: #000;
            }
            .table td, .table th{
                border-top: none;
            }
            table tr td{
                color: #000;
            }
            .rooms .table-sm td{
                padding-top: 12px;
            }
            .booking-details-text p, .booking-details-table p{
                margin-bottom: 0;
                color: #000;
                font-weight: 500;
            }
        </style>
    </head>
    <body>
        <% data.forEach(function(item) { %>    
    
    <section class="cancel-sec pt-5">
    <div class="container">
        <div class="row-1" style="border: 3px solid #000; 
        outline: 3px solid #000;
        outline-offset: 3px; padding: 40px 20px;">
        <div class="row">
            
                <div class="col-xl-6 col-6">
                    <div class="cancel-head-left">
                        <h1><%= item.mailHeading%></h1>
                        
                        <h5>Kindly print this confirmation and have it
                            ready upon check-in at the Hotel</h5>
                    </div>
                </div>
                <div class="col-xl-6 col-6">
                    <div class="cancel-head-right text-right">
                        <h2> <%= item.hotelAdmin.hotelname%></h2>
                        <p class="mb-0"> <%= item.hotelAdmin.address %></p>
                            
                            <p class="mb-0">Phone : <%= item.hotelAdmin.contact%></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="cancel-text pt-4">
            <p class="mb-2">Dear ,<%= item.guestName%></p>
            <p>Thank you for choosing <%= item.hotelAdmin.hotelname%> for your stay. We are pleased to inform you that your
                reservation request is <%= item.mailHeading%>and your reservation details are as follows.
                </p>
        </div>
    </div>
    <div class="container">
        <div class="booking-details pt-3">
            <h5 style="font-size: 1.25rem"><b>Booking Details</b></h5>
            <div class="booking-details-text">
                
                <p>Check In Date   : <%= item.checkInDate%> </p>
                <p>Check Out Date :  <%= item.checkOutDate%> </p>
                <p>Nights :  <%= item.nights%> </p>
                <p>Arrival Time : 12:00:00 PM</p>
                <p>Special Request :</p>
            </div>
        </div>
        <div class="booking-details pt-3">
            <h5 style="font-size: 1.25rem"><b>Your Details</b></h5>
            <div class="booking-details-text">
                <p> <%= item.guestName%> 
                <p>Email ID : <a href=""> <%= item.guestEmail%> </a></p> 
            </div>
        </div>
    </div>

    <div class="container">
        <div class="booking-details rooms pt-3">
            <h5 style="font-size: 1.25rem"><b>Rooms Details</b></h5>
            <div class="booking-details-table">
                <table class="table table-borderless table-sm">
                    <tr style="border: 1px solid #000; 
                    outline: 1px solid #000;
                    outline-offset: 3px;">
                        <th>Room Type</th>
                        <th> Adult Guest(s) </th>
                        <th> Child Guest(s) </th>
                        <!-- <th class="text-right">Package if any</th>
                        <th class="text-right">Promotion if any</th> -->
                    </tr> 

                    <% item.roomdetails.forEach(function(room){%>

                        <tr>
                            <td>
                               <p><b><%= room.roomType %></b></p>
                               <u>Room Plan</u> : <%= room.ratePlan %>
                            </td>
                            <td><%= room.adult %></td>
                            <td><%= room.child %></td>
                            
                       </tr>

                       <% }); %>
                    
                    
                </table>
            </div>
        </div>

        <div class="booking-details pt-3">
            <h5 style="font-size: 1.25rem"><b>Rates Details</b></h5>
            <div class="booking-details-table">
                <table class="table table-sm">
                    <tr style="border: 1px solid #000; 
                    outline: 1px solid #000;
                    outline-offset: 3px;">
                        <th>Details</th>
                        <th class="float-right">Rates (Rs)</th>
                    </tr>
                    <tr>
                         <td>Total Room Charges</td>
                         <td class="float-right"><%= item.roomCharges%></td>
                    </tr>
                    <tr>
                        <td>Room Charges Tax</td>
                        <td class="float-right"><%= item.tax%></td>
                   </tr>
                   <tr>
                    <td>Extras Including Tax</td>
                    <td class="float-right">0.00</td>
                   </tr>
                    <tr>
                        <td>Round Off</td>
                        <td class="float-right">0.00</td>
                    </tr>
                    <tr>
                        <td>Grand Total</td>
                        <td class="float-right"> <%= item.totalPrice%> </td>
                    </tr>
                    <tr>
                        <td>Total Paid</td>
                        <td class="float-right"> <%= item.advancePayment%></td>
                    </tr>
                    <tr>
                        <td>Amount due at time of check in</td>
                        <td class="float-right"> <%= item.lastPayment%>  </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="book-amnt" style="width: 50%; text-align: center; padding: 10px 0 5px; border: 1px solid #000; 
                            outline: 1px solid #000;
                            outline-offset: 3px;">
                                <h5>BOOKING AMOUNT</h5>
                                <h6>Rs <%= item.totalPrice%> (INR)</h6>
                            </div>
                        </td>
                        <td class="text-right">
                            <b>Booked & Payable By</b><br>
                            <%= item.guestName%>  <br><%= item.guestEmail%>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="conditon-box pt-4">
            <div class="book-amnt" style="padding: 5px 15px; border: 1px solid #000; outline: 1px solid #000; outline-offset: 3px;">
                Conditions & Policies
            </div>
            <div class="conditon-box-text pt-3">
                <p><b>Cancellation Policy</b></p>
                <ul>
                    <li>The guest can cancel free of charge until 7 days before arrival.</li>
                    <li>The guest will be charged 50% of the total price If they cancel In the 3 days before arrival.</li>
                    <li>Transfer within 07 - 10 working days</li>
                    <li>Direct booking or Online booking amendment Is also welcome 48 hrs. Prior to the date of check in time subject to availability on the next, date of requirement. Bookings done for days in between Mon-Thu. Booking cannot be mended with weekends & Holidays and Festivals.</li>
                </ul>
            </div>
            <div class="conditon-box-text pt-3">
                <p><b>Hotel Policy</b></p>
                <p class="mb-0"><b>Hotel Check in Time :</b> 12:00 PM</p>
                <p><b>Hotel Check out Time :</b> 11:00 PM</p>
            </div>
            <p class="text-center pt-3"><b>This email has been sent from an automated system - please do not reply to it.</b></p>
        </div>
    </div>

    <div class="container pt-2">
        <div class="query-box" style="border-top: 1px solid #000; border-bottom: 1px solid #000;padding-top: 1rem;">
                <p>**** FOR ANY FURTHER QUERY ****<br>
                    Contact us by Email Id  <%= item.hotelAdmin.email%><br>
                    Phone NO : <%= item.hotelAdmin.contact%><br>
                    Plote -  <%= item.hotelAdmin.address %></p> 
        </div>
    </div>

</section>

<% }); %>

</body>

</html>`
}