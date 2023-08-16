<template>
  <div class="noservice_page">
    <div class="container">
      <h1 class="heading-1">Отказ от услуги</h1>
      <div class="noservice_text">
        <h2 class="heading-5">Право потребителя на расторжение договора об оказании услуги регламентируется статьей 32 федерального закона «О защите прав потребителей»</h2>
        <ul>
          <li class="description-text">
            Потребитель вправе расторгнуть договор об оказании услуги в любое время, уплатив исполнителю часть цены пропорционально части оказанной услуги до получения извещения о расторжении указанного договора и возместив исполнителю расходы, произведенные им до этого момента в целях исполнения договора, если они не входят в указанную часть цены услуги;
          </li>
        </ul>
        <div class="noservice_text_8">
          <ul>
            <li class="heading-6">Потребитель при обнаружении недостатков оказанной услуги вправе по своему выбору потребовать:</li>
          </ul>
          <ul>
            <li class="description-text">безвозмездного устранения недостатков;</li>
            <li class="description-text">соответствующего уменьшения цены;</li>
            <li class="description-text">возмещения понесенных им расходов по устранению недостатков своими силами или третьими лицами;</li>
          </ul>
        </div>
        <ul>
          <li class="description-text">Потребитель вправе предъявлять требования, связанные с недостатками оказанной услуги, если они обнаружены в течение гарантийного срока, а при его отсутствии в разумный срок, в пределах двух лет со дня принятия оказанной услуги;</li>
        </ul>
        <ul>
          <li class="description-text">Исполнитель отвечает за недостатки услуги, на которую не установлен гарантийный срок, если потребитель докажет, что они возникли до ее принятия им или по причинам, возникшим до этого момента;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .noservice_page {
    padding: 50px 0 100px 0;
  }
  .heading-1 {
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    color: var(--heading-222222-heading);
    margin-bottom: 50px;
  }
  .noservice_text {
    padding: 30px;
    border-radius: 24px;
    background: var(--gray-f-2-f-2-f-2);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
  }
  .description-text {
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    color: var(--heading-333333-text);
  }
  .noservice_text_8 {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .heading-6 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-333333-text);
  }

  li{
    padding-left: 13px;
    list-style: inside;
  }
  @media screen and (max-width: 810px){
    .noservice_page {
      padding: 90px 0 100px 0;
    }
    .heading-1{
      margin-bottom: 30px;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px){
    .heading-1{
      margin-bottom: 30px;
      text-align: center;
    }
  }
  @media screen and (max-width: 520px){
    .noservice_page {
      padding: 90px 0 64px 0;
    }
  }
</style>