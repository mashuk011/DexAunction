import React from 'react'
import CardsData from "../JsonData/CardsData";

const WhyDexAunctn = () => {
  return (
    <>
       <section className="why-dex-aunction-comp">
        <div className="common-container">
          <div className="why-dex-aunction-flex-top-flex-bx">
            <button className="why-dex-aunction-label-bx">
              <span>Why Dexaunction?</span>
            </button>

            <div className="right-why-dexaunctn-title-bx">
              <h3>No more unilateral pricing & unsuitable trading for RAWs!</h3>
            </div>
          </div>

          <div className="why-dexaunctn-cards-grid grid grid-three-col gap">
            {CardsData.map((curElem, id) => {
              return (
                <>
                  <div className="why-dexaunctn-bx" key={id}>
                    <div className="why-dexaunctn-img">
                      <img src={curElem.img} alt="" />
                    </div>
                    <div className="why-dexaunctn-info">
                        <h5> {curElem.title} </h5>
                        <p> {curElem.para} </p>
                    </div>

     {  curElem.id === 1 ?             <div className="svg-bx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="181" height="180" viewBox="0 0 181 180" fill="none">
<g opacity="0.07">
<path d="M220 227.5H50C29.3 227.5 12.5 210.7 12.5 190V20C12.5 15.9 15.9 12.5 20 12.5C24.1 12.5 27.5 15.9 27.5 20V190C27.5 202.4 37.6 212.5 50 212.5H220C224.1 212.5 227.5 215.9 227.5 220C227.5 224.1 224.1 227.5 220 227.5Z" fill="#5300CC"/>
<path d="M54.5 26.5C54.4999 78.5 65.5 192.351 201.348 192.351" stroke="#5300CC" stroke-opacity="0.4" stroke-width="16" stroke-linejoin="round"/>
<path d="M201.348 26.5C201.348 78.5 190.348 192.351 54.4999 192.351" stroke="#5300CC" stroke-opacity="0.4" stroke-width="16" stroke-linejoin="round"/>
</g>
</svg>
</div> : null}

    { curElem.id === 2 ? <div className="svg-bx"> <svg xmlns="http://www.w3.org/2000/svg" width="180" height="181" viewBox="0 0 180 181" fill="none">
<g opacity="0.07">
<path d="M165.6 72.6023C165.12 71.6509 164.88 70.6995 164.4 69.9859L146.88 87.5875C144.48 90.2039 141.12 91.3932 137.76 91.3932C134.64 91.3932 131.28 90.2039 128.88 87.8253C126.48 85.4467 125.04 82.3546 125.04 78.7867C125.04 75.2188 126.48 72.1266 128.88 69.748L149.28 49.53C147.36 47.6271 145.2 45.7243 142.8 44.0592C142.8 44.0592 142.8 44.0592 142.56 44.0592C135.6 39.0642 127.92 35.2584 119.76 32.8799C104.64 28.3605 88.8004 29.0741 74.4004 34.5449L112.08 71.8888C113.04 72.8402 113.04 74.2674 112.08 75.2188L100.8 86.3982C100.08 87.1118 99.1204 87.3496 98.4004 87.1118C91.9204 85.6846 85.4404 87.8253 80.8804 92.3447C77.2804 95.9126 75.1204 100.67 75.1204 105.903C75.1204 111.136 77.0404 115.893 80.8804 119.461C84.4804 123.029 89.2804 125.169 94.5604 125.169C99.8404 125.169 104.64 123.266 108.24 119.461C112.8 114.941 114.72 108.281 113.52 102.097C113.28 101.383 113.52 100.432 114.24 99.9562L125.52 88.7768C126.48 87.8253 127.92 87.8253 128.88 88.7768L166.8 126.359C173.28 108.757 172.8 89.4904 165.6 72.6023Z" fill="#5300CC"/>
<path d="M118.32 102.097C119.52 109.47 117.12 117.082 111.6 122.553C107.04 127.072 101.04 129.451 94.5596 129.451C88.0796 129.451 82.0796 127.072 77.5196 122.553C72.9596 118.033 70.5596 112.087 70.5596 105.665C70.5596 99.2425 72.9596 93.2961 77.5196 88.7767C83.0396 83.306 90.4796 80.9274 98.1596 82.1167L107.04 73.3159L69.5996 36.6855C62.1596 40.2534 55.4396 44.7728 49.4396 50.7192C30.7196 69.2723 23.9996 96.3882 31.6796 121.363C34.0796 129.451 38.1596 137.062 43.4396 143.722C43.4396 143.722 43.4396 143.722 43.4396 143.96C45.1196 146.101 47.0396 148.242 48.9596 150.144L69.3596 129.926C74.3996 124.931 82.5596 124.931 87.3596 129.926C92.3996 134.921 92.1596 143.009 87.1196 147.766L69.8396 164.654C70.5596 164.892 71.2796 165.367 71.9996 165.605C98.6396 176.547 129.36 170.6 149.76 150.382C155.52 144.436 160.32 137.776 163.92 130.402L126.96 93.5339L118.32 102.097Z" fill="#5300CC" fill-opacity="0.4"/>
<path d="M66.96 168.222C64.08 171.076 62.4 174.882 62.4 178.925V180.59C62.4 195.338 50.16 207.469 35.28 207.469H32.4C31.2 207.469 30 206.517 30 205.09C30 203.901 30.96 202.711 32.4 202.711H35.28C47.52 202.711 57.6 192.721 57.6 180.59V178.925C57.6 173.693 59.76 168.697 63.36 165.13L64.56 163.94L84 144.912C87.12 141.819 87.12 136.586 84 133.494C80.88 130.402 75.6 130.402 72.48 133.494L45.36 160.61C42.48 163.465 37.44 163.702 34.56 160.61C31.68 157.756 31.44 152.999 34.32 149.907L38.88 145.149C34.56 139.203 30.96 132.781 28.56 125.883L9.36 139.679C3.36 143.722 0 150.382 0 157.518V240.531H51.36V222.692C51.36 218.41 53.04 214.129 56.16 211.036C57.84 209.371 59.76 208.182 61.92 207.231C66.48 205.566 69.6 201.046 69.6 196.289V169.411C68.64 169.173 67.68 168.697 66.96 168.222Z" fill="#5300CC" fill-opacity="0.4"/>
<path d="M156.48 0.53125C149.28 0.53125 142.56 4.09914 138.24 9.80776L124.08 29.3122C131.04 31.6908 137.76 35.0208 143.76 39.3023L148.8 34.783C151.92 31.9287 156.48 32.1665 159.6 35.0208C162.48 38.113 162.48 42.8702 159.6 45.7245L132 72.8405C130.56 74.2676 129.6 76.4084 129.6 78.5491C129.6 80.6898 130.56 82.8306 132 84.2577C135.36 87.3499 140.4 87.3499 143.52 84.2577L163.2 64.2775L163.92 63.564C167.52 59.7582 172.56 57.8553 177.84 57.8553H179.52C185.52 57.8553 191.04 55.4767 195.36 51.4331C199.68 47.1517 201.84 41.6809 201.84 35.7344V32.8801C201.84 31.6908 202.8 30.5015 204.24 30.5015C205.44 30.5015 206.64 31.453 206.64 32.8801V35.7344C206.64 42.8702 203.76 49.5303 198.72 54.7632C193.68 59.7582 186.72 62.6125 179.52 62.6125H177.84C174 62.6125 170.4 64.0397 167.52 66.6561C168 67.6076 168.48 68.559 168.96 69.5104H195.36C200.16 69.5104 204.72 66.4183 206.4 61.8989C207.12 59.7582 208.56 57.8553 210.24 56.1903C213.36 53.0981 217.44 51.4331 222 51.4331H240V0.53125H156.48Z" fill="#5300CC"/>
</g>
</svg> </div>: null}

{curElem.id ===  3 ? <div className="svg-bx"> <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
<g opacity="0.07">
<path opacity="0.4" d="M68.6138 132.505C57.9612 144.084 37.1191 170.021 37.1191 192.484C37.1191 213.095 53.7928 230 74.6349 230C95.2454 230 112.151 213.326 112.151 192.484C112.151 170.021 91.3086 144.316 80.6559 132.505C77.4138 128.8 71.8559 128.8 68.6138 132.505ZM89.6875 176.042C89.6875 176.505 89.2244 176.968 88.7612 176.968H81.8138C81.3507 176.968 81.1191 176.737 81.1191 176.274C80.8875 173.958 78.8033 172.105 76.4875 172.105H73.0138C70.698 172.105 68.6138 173.726 68.1507 176.042C67.4559 179.053 70.0033 181.832 72.7823 181.832H76.4875C84.1296 181.832 90.1507 188.316 89.6875 195.958C89.2244 201.979 84.5928 206.842 78.8033 208V213.326C78.8033 213.789 78.3402 214.021 78.1086 214.021H71.1612C70.698 214.021 70.4665 213.558 70.4665 213.326V207.768C64.677 206.611 60.0454 201.747 59.5823 195.726C59.5823 195.263 60.0454 194.8 60.5086 194.8H67.4559C67.9191 194.8 68.1507 195.032 68.1507 195.495C68.3823 197.811 70.4665 199.663 72.7823 199.663H76.2559C78.5717 199.663 80.6559 198.042 81.1191 195.958C81.8138 192.947 79.498 190.168 76.4875 190.168H73.2454C66.298 190.168 60.0454 184.842 59.5823 177.895C59.1191 170.947 63.9823 165.158 70.4665 164V158.905C70.4665 158.442 70.9296 157.979 71.1612 157.979H78.1086C78.5717 157.979 78.8033 158.442 78.8033 158.905V163.768C84.5928 164.926 89.2244 169.789 89.6875 176.042Z" fill="#5300CC"/>
<path d="M197.835 50.5263H170.74C166.803 44.7368 161.014 40.3368 154.067 38.2526V26.6737H164.256C168.888 26.6737 172.593 22.9684 172.593 18.3368C172.593 13.7053 168.888 10 164.256 10H127.203C122.572 10 118.867 13.7053 118.867 18.3368C118.867 22.9684 122.572 26.6737 127.203 26.6737H137.393V38.4842C130.446 40.5684 124.656 44.7368 120.719 50.7579H115.856C86.6768 50.7579 62.361 72.2947 58.4242 100.547H52.4031C49.8557 100.547 47.7715 102.632 47.7715 105.179V112.589C47.7715 115.137 49.8557 117.221 52.4031 117.221H97.0979C99.6452 117.221 101.73 115.137 101.73 112.589V105.179C101.73 102.632 99.6452 100.547 97.0979 100.547H93.161C96.6347 91.2842 105.203 84.8 115.624 84.5684H120.951C126.277 92.6737 135.54 98 145.961 98C156.382 98 165.646 92.6737 170.972 84.5684H198.067C200.614 84.5684 202.698 82.4842 202.698 79.9368V55.1579C202.467 52.6105 200.382 50.5263 197.835 50.5263Z" fill="#5300CC"/>
</g>
</svg></div> : null}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyDexAunctn
