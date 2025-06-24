import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.address.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
      place: 'Rua Exemplo',
      number: '123',
      neighborhood: 'Bairro Exemplo',
      city: 'Cidade Exemplo',
      uf: 'EX',
      cep: '12345-678',
      complement: 'Apto 456',
    },
  });
  await prisma.user.create({
    data: {
      id: '095abb78-66e2-44d1-9101-8c136b492f34',
      password: '$2b$10$6WKH8trzKWPCFksVmyXN2eOPUmml3o9SJkA19Nk0TdhJLRGJzJ5FW',
      phone: '17999999999',
      email: 'wallace@email.com',
      name: 'wallace vidoto',
      cpf: '12345678901',
      addressId: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
      role: 'DEV',
    },
  });

  await prisma.activities.createMany({
    data: [
      {
        id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
        name: 'Agricultura',
        description:
          'Preparo do solo: Aração, gradagem e adubação para deixar a terra pronta para o plantio.\nPlantio: Semeadura de grãos (soja, milho, trigo), hortaliças, frutas ou culturas permanentes (café, cana-de-açúcar).\nIrrigação: Manejo de água para garantir o crescimento das plantas.Controle de pragas e doenças: Uso de pesticidas, manejo integrado ou técnicas orgânicas.\nColheita: Safra mecanizada ou manual, dependendo da cultura.\nPós-colheita: Secagem, armazenamento e transporte dos produtos.',
      },
      {
        id: 'b2c3d4e5-f6g7-8901-2345-67890abcdef1',
        name: 'Pecuária',
        description:
          'Criação de gado: Bovinos (corte ou leite), suínos, aves (frangos, ovos), ovinos, caprinos, etc.\nAlimentação: Pastagem, ração balanceada ou suplementação nutricional.\nSanidade animal: Vacinação, controle de parasitas e cuidados veterinários.\nReprodução: Inseminação artificial, manejo de matrizes e bezerros.\nOrdenha: Em fazendas leiteiras, mecanizada ou manual.',
      },
      {
        id: 'c3d4e5f6-g7h8-9012-3456-7890abcdef12',
        name: 'Atividades Mistas',
        description:
          'Rotação de culturas com pastagens: Melhora a fertilidade do solo e otimiza o uso da terra.\nSistema de plantio direto: Preservação do solo com palhada de culturas anteriores.',
      },
      {
        id: 'd4e5f6g7-h8i9-0123-4567-890abcdef123',
        name: 'Manejo Florestal',
        description: 'Cultivo de árvores para madeira, celulose ou carvão (eucalipto, pinus).\nManejo sustentável de florestas nativas.',
      },
    ],
    skipDuplicates: true, // Evita duplicar IDs
  });
}

main()
  .then(() => {
    console.log('Seed inserido com sucesso!');
  })
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
